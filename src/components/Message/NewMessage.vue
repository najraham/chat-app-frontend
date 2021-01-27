<template>
    <div class="flex-grow-0 py-3 px-4 border-top ">
        <div class="input-group">
            <input type="text" v-model="message.content" class="form-control" placeholder="Type your message">
            <button class="btn btn-primary" @click="sendMessage()">Send</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import EventBus from '../../eventBus';

export default {
  name: 'NewMessage',
  data() {
    return {
        message: {
            content:'',
            sender_id: localStorage.getItem('userid'),
            receiver_id:""
        }
    }
  },
  created() {
    EventBus.$on('newUserSelected', (payLoad) => {
        this.message.receiver_id = payLoad.id
    });
  },

  methods: {
      sendMessage() {
        axios.post('http://localhost:5000/api/sendMessage', this.message)
        .then(() => {
            this.message.content = ""
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
