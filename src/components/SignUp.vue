<template>
  <v-slide-y-transition mode="out-in">
    <v-layout justify-center>
      <v-flex xl6 lg8 md10>
        <v-stepper v-model="stage" class="pa-3">
          <v-stepper-header>
            <v-stepper-step :complete="stage > 1" step="1">Регистрационные данные</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="stage > 2" step="2">Потверждение почты</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">Готово</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-5" height="300px">
                <v-alert :value="error.exist" type="error" transition="scale-transition">
                  {{error.message}}
                </v-alert>
                <v-layout row justify-center>
                  <v-flex>
                    <v-text-field label="Имя"
                                  required
                                  :rules="nameRules"
                                  v-model="user.name"
                    ></v-text-field>
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
              </v-card>
              <v-btn color="primary" @click="signUp">
                Продолжить
              </v-btn>
              <v-btn flat>Отменить</v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-card class="mb-5" height="300px">
                <v-card-text class="text-sm-center">
                  <p>К вам на почту <b>email</b> отправлено подтвержающие письмо c cсылкой для окончания регистрации.</p>
                  <v-btn disabled>Повторная отправка возможна через 5:00</v-btn>
                </v-card-text>
              </v-card>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card class="mb-5" height="300px">
                <v-card-text class="text-sm-center">
                  <p>Вы успешно зарегистрировались.</p>
                  <v-btn>Перейти в личный кобинет</v-btn>
                </v-card-text>
              </v-card>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-slide-y-transition>
</template>

<script>
  import config from '../config/config.json';

  export default {
    name: 'SignUp',
    data() {
      return {
        user:{
          name: '',
          email: '',
          password: ''
        },
        sendMail:{
          active: false,
          timeLeft: 60*5
        },
        stage: 0,
        error: {
          exist: false,
          message: ''
        },
        nameRules: [
          v => !!v || 'Имя это обязательный параметр',
          v => this.isValidName(v) || 'Имя должно иметь длину не менее 3 символов'
        ],
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
    methods: {
      signUp: function(){
        if ((this.isValidName(this.user.name)) &&
            (this.isValidEmail(this.user.email)) &&
            (this.isValidPassword(this.user.password))) {

            this.$http.post(`${config.server.urlSchema}://${config.server.host}:${config.server.port}/user/signup/email`, {
                  email: this.user.email,
                  first_name: this.user.first_name,
                  password: this.user.password
              }).then(()=>{
                this.sendMailTimer();
                this.stage = 2;          
              }).catch((data)=>{
                this.error.exist = true;
                this.error.message = data.body.error.message;
              })
            }
      },

      sendConfirmMail: function() {
        if (this.sendMail.active) {
          this.$http.post(`${config.server.urlSchema}://${config.server.host}:${config.server.port}/user/signup/email/send`, {
              email:this.user.email
            }).then(() => {
            this.sendMailTimer();
          });  
        }
      },

      sendMailTimer: function() {
        this.sendMail.timeLeft = 300;
        this.sendMail.active = false;

        let timer = setInterval(()=>{
          if (this.sendMail.timeLeft <= 1) {
            this.sendMail.active = true;
            clearInterval(timer);    
          }
          this.sendMail.timeLeft-= 1;
        }, 1000);
      },

      isValidName: function(name){
        return (name.length >= 3)
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
