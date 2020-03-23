<template>
  <div class="denied__container">
    <h3>Permission denied</h3>
    <p>How did you get here? Are you trying to cheat?</p>
    <router-link to="/">
      <v-btn class="mt-5" x-large color="green white--text">Back to safety</v-btn>
    </router-link>
  </div>
</template>

<style lang="scss">
.denied__container {
  position: relative;
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
