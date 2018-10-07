<template>
    <v-toolbar app :clipped-left="true">
      <v-toolbar-title>
        <a href="" class="d-flex router-link-active">
          <img src="@/assets/logo.svg" height="45">
        </a>
      </v-toolbar-title>
      <v-autocomplete cache-items class="mx-3" flat hide-no-data hide-details label="What state are you from?" solo-inverted></v-autocomplete>
      <v-toolbar-items>
        <v-btn flat to='/projects'>Заказы</v-btn>
        <v-btn flat>Услуги</v-btn>
        <v-btn flat>Фрилансеры</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn color="primary" to='/signin'>Войти</v-btn>
      <v-btn color="primary" to='/signup'>Зарегистрироваться</v-btn>
    </v-toolbar>
</template>

<script>

export default {
  name: "Header"
};
</script>

<style>
</style>