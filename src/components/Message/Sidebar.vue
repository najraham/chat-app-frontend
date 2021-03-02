<template>
    <div class="col-12 col-lg-5 col-xl-3 border-right">
        <div class="px-4 d-none d-md-block">
            <div class="d-flex mt-2 align-items-center">
                <h1 class="h3 mb-3">Messages</h1>
            </div>
        </div>
        <a v-for="(user,index) in users" :key="user._id" href="#" @click="newUserSelected(user.first_name, user.last_name, user._id)" class="list-group-item list-group-item-action border-0">
            <div class="d-flex align-items-start" >
                <img :src="'https://bootdey.com/img/Content/avatar/avatar' + (index+1) + '.png'" class="rounded-circle mr-1" alt="" width="40" height="40">
                <div class="flex-grow-1 ml-3">
                    {{user.first_name + " " + user.last_name}}
                    <div class="small"><span class="fas fa-circle chat-online"></span> Online</div>
                </div>
            </div>
        </a>
        <hr class="d-block d-lg-none mt-1 mb-0">
    </div>
</template>

<script>
import EventBus from '../../eventBus';
import axios from 'axios';

export default {
  name: 'Sidebar',
  
  data() {
      return {
        users: [],
        currentUserId: localStorage.getItem('userid'),
      }
  },

  mounted() {
    this.getAllUsers()
  },

  methods: {
    getAllUsers() {
        axios.get('http://localhost:5000/api/users', 
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then((res) => {
            this.users = res.data.filter( user => user._id != this.currentUserId )
        })
    },
      
    newUserSelected(fname, lname, id) {
        const payLoad ={
            id: id,
            receiver_name: fname + " " + lname
        }
        EventBus.$emit('newUserSelected', payLoad);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
