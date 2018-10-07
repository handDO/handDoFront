<template>
  <v-slide-y-transition mode="out-in">
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-text>
            <v-layout>
              <v-flex lg2>
                <div class="author-avatar">
                  <img v-bind:src="`https://randomuser.me/api/portraits/men/85.jpg`">
                </div>
              </v-flex>
              <v-flex class="text-lg-left">
                <div class="fullname">
                  Ладанов Николай
                </div>
                <div class="nickname">
                  @ladanov
                </div>
                <div class="confirmed_communication">
                  <div class="item">
                    <v-icon>perm_phone_msg</v-icon>
                  </div>
                  <div class="item">
                    <v-icon>alternate_email</v-icon>
                  </div>                  
                </div>
              </v-flex>
              <v-flex>
                <div class="rating text-lg-right" >
                  <v-btn 
                    round
                    large
                    color="primary"
                    class="white--text"
                    @click="full_rating = !full_rating"
                  >
                    15656
                    <v-icon right dark>star</v-icon>
                  </v-btn>
                  <v-slide-y-transition mode="out-in">
                    <ul v-if="full_rating">
                      <li>
                        Как исполнитель: 123450
                      </li>
                      <li>
                        Как исполнитель: 123450
                      </li>
                    </ul>
                  </v-slide-y-transition>
                </div>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn>Написать</v-btn>
            <v-btn>Предложить проект</v-btn>
          </v-card-actions>
        </v-card>
        <v-card>
          <!-- <v-card-title>Слоган</v-card-title> -->
          <v-card-text>
            Информативный слоган автора аккаунта
          </v-card-text>
        </v-card>
        <v-card>
          <v-layout>
            <v-flex>
              <v-card>
                <v-card-title>Информация</v-card-title>
                <v-card-text></v-card-text>
              </v-card>
            </v-flex>
            <v-flex>
              <v-card>
                <v-card-title>Контакты</v-card-title>
                <v-card-text></v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card>
          <v-card-title>Обо мне</v-card-title>
          <v-card-text></v-card-text>
        </v-card>
        <v-card>
          <v-card-title>Отзывы</v-card-title>
          <v-card-text></v-card-text>
        </v-card>
        <v-card>
          <v-card-title>Портфолио</v-card-title>
          <v-card-text></v-card-text>
        </v-card>              
      </v-flex>            
    </v-layout>
  </v-slide-y-transition>
</template>

<script>
export default {
  name: 'ProfileMain',
  data(){
    return{
      full_rating: false
    }
  }
}
</script>

<style scoped>
  .fullname{
    font-size: 1.5em;
  }

  .confirmed_communication{
    padding-top: 15px;
    display: flex;
  }

  .confirmed_communication .item{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #388E3C;
    margin-right: 15px;
    padding: 7px;
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 
                0 6px 10px 0 rgba(0,0,0,.14), 
                0 1px 18px 0 rgba(0,0,0,.12);
  }

  .confirmed_communication .item i{
    color: #fff;
  }

  .author-avatar img{
    border-radius: 50%;
    width:  100px;
    height: 100px;
    padding: 10px;
  }

  .rating ul li{
    list-style: none;
    font-size: 0.85em;
    padding-right: 10px;
  }
</style>
