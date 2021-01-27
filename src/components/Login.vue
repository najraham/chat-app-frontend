<template>
    <div class="container-fluid">
        <div class="row no-gutter justify-content-center">
            <div class="col-md-6 bg-light">
                <div class="login d-flex align-items-center py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-xl-6 mx-auto">
                                <h3 class="display-4">LOGIN!!</h3> <br>
                                <div class="form-group mb-3"> <input v-model="email" id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"> </div>
                                <div class="form-group mb-3"> <input v-model="password" id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-danger"><br> </div>
                                <button class="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm" @click="login()">Sign in</button>
                                <div class="text-center d-flex justify-content-between mt-4">
                                  <p>Don't have an account? <router-link to="/register" class="font-italic text-muted"> <u>Register here</u></router-link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from "../router";

export default {
  name: 'Login',
  data() {
    return {
      email: "",
      password: ""
    }
  },

  methods: {
    login() {
      axios.post('http://localhost:5000/api/login', {email: this.email, password: this.password})
      .then((res) => {
        router.push('/messages')
        localStorage.setItem('userid', res.data._id)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
