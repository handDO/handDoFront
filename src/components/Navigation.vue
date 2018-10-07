<template>
    <v-navigation-drawer persistent 
      :mini-variant="miniVariant"
      clipped 
      enable-resize-watcher
      fixed
      app>
      <v-list class="pa-1">
        <v-list-tile v-if="miniVariant" @click.stop="miniVariant = !miniVariant">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
  
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>
  
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
  
          <v-list-tile-action>
            <v-btn icon @click.stop="miniVariant = !miniVariant">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>

export default {
  name: "Navigation",
  data() {
    return {
      miniVariant: true
    }
  },
};
</script>

<style>
</style>