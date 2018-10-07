<template>
  <v-app>
  <Navigation></Navigation>
  <Header></Header>

  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
    
  <v-footer  app>
    <span>&copy; 2017</span>
  </v-footer>
</v-app>
</template>

<script>
  import Header from './components/Header'
  import Navigation from './components/Navigation'
  
  export default {
    name: 'App',
    components: {
      Navigation,
      Header
    },
    data() {
      return {

      }
    }
  }
</script>

<style>

</style>