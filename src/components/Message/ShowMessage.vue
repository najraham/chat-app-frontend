<template>
  <div class="col-12 col-lg-7 col-xl-9">
    <div class="py-2 px-4 border-bottom d-none d-lg-block">
      <div class="d-flex align-items-center py-1">
        <div class="position-relative">
          <div class="flex-grow-1 pl-3">
            <strong>{{ receiver.fullname }}</strong>
          </div>
        </div>
      </div>
    </div>

    <div class="position-relative">
      <div class="chat-messages p-4" id="chatbox">
        <div v-for="message in messages" :key="message._id">
          <div
            v-if="message.sender_id == currentUserId"
            class="chat-message-right pb-4"
          >
            <div
              class="flex-shrink-1 bg-info text-white rounded py-2 px-3 mr-3"
            >
              {{ message.content }}
            </div>
          </div>

          <div v-else class="chat-message-left pb-4">
            <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
              {{ message.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <NewMessage :socket="socket"/>
  </div>
</template>

<script>
import EventBus from "../../eventBus";
import NewMessage from "../Message/NewMessage";
import Vue from "vue";

export default {
  name: "Message",

  components: {
    NewMessage,
  },

  props: ['socket'],

  data() {
    return {
      receiver: {
        fullname: "",
        id: "",
      },
      currentUserId: localStorage.getItem("userid"),
      messages: []
    };
  },

  mounted() {
    EventBus.$on("newUserSelected", (payLoad) => {
      this.receiver.fullname = payLoad.receiver_name;
      this.receiver.id = payLoad.id;
      this.loadMessages();
    });

    this.socket.on("messageSent", (message) => {
      this.messages.push(message);
    });
  },

  updated() {
    Vue.nextTick(function() {
      var chatbox = document.getElementById("chatbox");
      chatbox.scrollTop = chatbox.scrollHeight;
    });
  },

  created() {
      this.socket.on("setMessages", (messages) => {
      this.messages = messages;
    });
  },

  methods: {
    loadMessages() {
      this.socket.emit("loadUserMessage", {
        sender_id: this.currentUserId,
        receiver_id: this.receiver.id,
        token: localStorage.getItem('token')
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
