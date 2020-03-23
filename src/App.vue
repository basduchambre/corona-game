<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<style lang="scss">
.theme--light.v-application {
  background: #654ea3;
  background: -webkit-linear-gradient(to right, #eaafc8, #654ea3);
  background: linear-gradient(to right, #eaafc8, #654ea3);
  height: 100%;
  height: -moz-available;
  height: -webkit-fill-available;
  height: fill-available;
}
.v-application a {
    color: #1976d2;
    text-decoration: none;
}
.v-application .link-disabled,
.v-btn__content {
  pointer-events: none;
}
.credentials {
  position: absolute;
  bottom: 1rem;
  left: 0;
  width: 100%;
  text-align: center;
  a {
    color: #ffffff !important;
    font-weight: bold;
  }
}
</style>