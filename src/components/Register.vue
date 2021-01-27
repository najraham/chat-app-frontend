<template>
    <div class="container-fluid">
        <div class="row no-gutter justify-content-center">
            <div class="col-md-6 bg-light">
                <div class="login d-flex align-items-center py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-xl-6 mx-auto">
                                <h3 class="display-4">REGISTER</h3> <br>
                                <div class="form-group mb-3"> <input v-model="first_name" id="first_name" type="text" placeholder="First name" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"> </div>
                                <div class="form-group mb-3"> <input v-model="last_name" id="last_name" type="text" placeholder="Last name" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"> </div>
                                <div class="form-group mb-3"> <input v-model="email" id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"> </div>
                                <div class="form-group mb-3"> <input v-model="password" id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-danger"><br> </div>
                                <button class="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm" @click="register()">Sign up</button>
                                <div class="text-center d-flex justify-content-between mt-4">
                                    <p><router-link to="/login" class="font-italic text-muted"> <u>Go to Login</u></router-link></p>
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
  name: 'Register',
  data() {
    return {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    }
  },

  methods: {
    register() {
        axios.post('http://localhost:5000/api/register', 
        {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password
        })
        .then(() => {
            router.push('/login')
        })
        .catch((err) => {
            console.log(err)
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
