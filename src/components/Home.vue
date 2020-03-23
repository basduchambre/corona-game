<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/corona.png')"
          class="my-3"
          contain
          height="160"
        />
      </v-col>

      <v-col class="mb-4">
        <h2 class="display-1 font-weight-bold mb-3">CoronaTalks</h2>
        <p class="subheading font-weight-regular">Find out how much you already know about COVID-19, share your score with friends and stay safe</p>
        <router-link to="/question/1">
          <v-btn x-large color="success">Start game</v-btn>
        </router-link>
      </v-col>

    </v-row>
    <span class="credentials">Powered by <a href="https://growise.pro" target="_blank">Growise</a></span>
  </v-container>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>
