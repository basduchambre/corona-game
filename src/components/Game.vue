<template>
  <div class="game">
    <v-progress-linear height="30"></v-progress-linear>
    <div class="game__container">
      <p class="subtitle">Answer all questions in order to unlock the next onew</p>
      <div class="question__list">
        <div class="question__list-question my-5" v-for="(question, index) in getQuestion" :key="index">
          <router-link :class="question.disabled ? 'link-disabled' : ''" :to="`/game/question/${index + 1}`">
            <v-btn x-large block color="success" :disabled="question.disabled ? true : false">
              Question {{ index + 1 }}
            </v-btn>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  computed: {
    getQuestion () {
      return this.$store.getters.getQuestion
    }
  }
}
</script>

<style>
.game__container {
  padding: 15px;
}
</style>
