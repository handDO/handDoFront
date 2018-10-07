<template>
  <v-slide-y-transition mode="out-in">
    <v-layout>
        <v-flex xs8 class="main">
          <project-main></project-main>
        </v-flex>
        <v-flex xs4 class="rightbar">
          <rightbar></rightbar>
        </v-flex>
    </v-layout>
  </v-slide-y-transition>
</template>

<script>
import ProjectMain from './profile/Main'
import Rightbar from './profile/Rightbar'

export default {
  name: "Profile",
  components:{
    ProjectMain,
    Rightbar
  }
}
</script>

<style scoped>
  .rightbar{
    margin-left: 10px;
  }
</style>
