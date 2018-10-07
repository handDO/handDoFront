<template>
  <v-slide-y-transition mode="out-in">
    <v-layout justify-center>
      <v-flex xl6 lg4 md6>
        <v-card class="mb-5 pa-3">
          <v-card-title>Вход</v-card-title>
          <v-card-text>
            <v-alert :value="error.exist" type="error" transition="scale-transition">
              {{error.message}}
            </v-alert>
            <v-layout row justify-center>
              <v-flex>
                <v-text-field label="Email"
                              required
                              :rules="emailRules"
                              v-model="user.email"
                ></v-text-field>
                <v-text-field label="Пароль"
                              type="password"
                              required
                              :rules="passwordRules"
                              v-model="user.password"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-slide-y-transition>
</template>

<script>
import config from '../config/config';

export default {
  name: 'SignIn',
  data: function(){
    return {
      user:{
        email: '',
        password: ''
      },
      error:{
        exist: false,
        message: ''
      },
      emailRules: [
        v => !!v || 'Email является обязательным',
        v => this.isValidEmail(v) || 'Email указан не верный'
      ],
      passwordRules: [
        v => !!v || 'Пароль является обязательный',
        v => this.isValidPassword(v) || 'Пароль должен содержать 6 и более символов'
      ],       
    }
  },
  methods:{
    signIn: function(){
      if ((this.isValidEmail(this.user.email)) &&
          (this.isValidPassword(this.user.password))) {

          this.$http.post(`${config.server.urlSchema}://${config.server.host}:${config.server.port}/user/signin/email`,{
            email: this.user.email,
            password: this.user.password
          }).then(()=>{
          // this.$store.commit('change_isAuthenticated', true);
          // this.$store.commit('change_user', data.body.user);
          // this.$cookie.set('token', data.body.token);
          // this.$router.push 

        }).catch((data)=>{
            this.error.exist = true;
            this.error.message = data.body.error.message;
        })
      }

    },    
    isValidEmail: function(email){
      let re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return re.test(email.toLowerCase());
    },

    isValidPassword: function(password){
      return (password.length >= 6);
    }
  }
}
</script>

<style scoped>

</style>
