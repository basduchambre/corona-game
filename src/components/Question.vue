<template>
  <div class="question__container">
    <h3 class="text-center question-title">Question {{this.$route.params.id}}</h3>
    <p class="text-center mt-3 question">{{ getQuestion[routeParams].question }}</p>
    <div class="button__container">
      <v-btn class="submit-button" @click="submitQuestion(routeParams, true);" x-large color="green white--text">True</v-btn>
      <v-btn class="submit-button" @click="submitQuestion(routeParams, false);" x-large color="red white--text">False</v-btn>
    </div>
    <a :href="`${getQuestion[routeParams].source}`" target="_blank">
      <v-btn text class="mt-5 caption">View source <v-icon>mdi-open-in-new</v-icon></v-btn>
    </a>
    <img src="@/assets/tick.png" class="tick" alt="tick" />
    <img src="@/assets/cross.png" class="cross" alt="cross" />
  </div>
</template>

<script>
import router from '@/router';

export default {
  data() {
    return {
      questionId: this.$route.params.id,
      sourceLink: null,
      questionAmount: null,
    }
  },
  computed: {
    getQuestion() {
      return this.$store.getters.getQuestion
    },
    routeParams() {
      return parseInt(this.$route.params.id) - 1;
    },
    nextQuestion() {     
      let questionAmmount = this.$store.getters.getQuestion.length;
      let nextQuestionId = parseInt(this.$route.params.id) + 1;

      if (nextQuestionId > questionAmmount) {
        return '/game/score';
      } else {
        return `/game/question/${nextQuestionId}`;
      }
    }
  },
  methods: {
    submitQuestion (id, answer) {

      // Store the given answer in Vuex
      this.$store.commit('STORE_QUESTION_ANSWER', {id, answer}) // passing id of the next question

      // Declare variables
      let questionAmount = this.$store.getters.getQuestion.length;
      let goodAnswer = this.$store.getters.getQuestion[id].answer;
      let givenAnswer = this.$store.getters.getQuestion[id].givenAnswer;
      let submitButtons = document.querySelectorAll('.submit-button')
      let nextQuestion = id + 2;

       // Disabling buttons for 600ms to allow all animations to happen
      submitButtons.forEach(button => {
        button.disabled = true;
      });

      setTimeout(() => {
        submitButtons.forEach(button => {
          button.disabled = false;
        });
      }, 600)

      // Give visual feedback based on the given answer
      if (goodAnswer == givenAnswer) {
        document.querySelector('.tick').classList.add('animate')
        setTimeout(() => {
          document.querySelector('.tick').classList.remove('animate')
        }, 600)
      } else {
        document.querySelector('.cross').classList.add('animate')
        setTimeout(() => {
          document.querySelector('.cross').classList.remove('animate')
        }, 600)
      }
    
      // Go to next question, or to score when the game is done
      if (nextQuestion == questionAmount + 1) {
        setTimeout(function(){
          router.push('/score');
        }, 600)
      } else {
        setTimeout(function(){
          router.push(`/question/${nextQuestion}`)
        }, 600)
      }

      // Enable next question, or stop enabling when last question is done
      if (this.$route.params.id == questionAmount) {
        return false;
      }
      this.$store.commit('ENABLE_QUESTION', id + 1)
    }
  }
}
</script>

<style lang="scss">
.question__container {
  position: relative;
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  i {
    top: -1;
    margin-left: 0.5rem;
  }
}
.question {
  font-size: 1.5rem;
}
.back-button {
  position: absolute;
  top: 15px;
  left: 15px;
}
.button__container {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.question-title {
  text-transform: uppercase;
}
.tick,
.cross {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90vw;
  height: auto;
  transform: translateX(-50%) translateY(-50%) scale(0);
  pointer-events: none;
}
.animate {
  animation: 0.6s forwards scale-up;
}
@keyframes scale-up {
  from {
    transform: translateX(-50%) translateY(-50%) scale(0);
    opacity: 1;
  }
  to {
    transform: translateX(-50%) translateY(-50%) scale(1);
    opacity: 0;
  }
}
</style>
