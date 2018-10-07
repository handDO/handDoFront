<template>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex xs8>
          <main-projects></main-projects>
        </v-flex>
        <v-flex xs4>
          <right-bar></right-bar>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
</template>

<script>
import MainProjects from './projects/Main'
import RightBar from './projects/Rightbar'

export default {
  name: 'Projects',
  components: {
    MainProjects,
    RightBar
  }
}
</script>

<style scoped>
</style>
