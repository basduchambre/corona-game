<template>
  <div class="score__container">
    <h3 class="text-center question-title">Your final score is</h3>
    <p class="text-center score-title">{{ getFinalScore }}</p>
    <p class="text-center">Share your score on social media and don't forget to keep your distance!</p>
    <social-sharing 
      url="https://caronatalks.com/"
      :title="`I've scored ${getFinalScore} on the COVID-19 test. What is your score?`"
      :description="`I've scored ${getFinalScore} on the COVID-19 test. What is your score?`"
      :quote="`I've scored ${getFinalScore} on the COVID-19 test. What is your score?`"
      hashtags="covid19,corona,coronavirus,test"
      twitter-user="corona"
      inline-template
    >
      <div class="social__share">
          <network network="facebook">
            <font-awesome-icon :icon="['fab', 'facebook']" /> Facebook
          </network>
          <network network="linkedin">
            <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn
          </network>
          <network network="email">
              <font-awesome-icon icon="envelope" /> Email
          </network>
          <network network="telegram">
            <font-awesome-icon :icon="['fab', 'telegram']" /> Telegram
          </network>
          <network network="twitter">
            <font-awesome-icon :icon="['fab', 'twitter']" /> Twitter
          </network>
          <network network="whatsapp">
            <font-awesome-icon :icon="['fab', 'whatsapp']" /> Whatsapp
          </network>
      </div>
    </social-sharing>
    <span class="credentials">Powered by <a href="https://growise.pro" target="_bland">Growise</a></span>
  </div>
</template>

<script>

export default {
  computed: {
    getQuestion() {
      return this.$store.getters.getQuestion
    },
    getFinalScore() {
      let score = this.$store.getters.getQuestion
      let totalQuestions = score.length
      let goodAnswers = 0

      score.forEach(question => {
        if (question.score) 
          goodAnswers++
      });

      return `${goodAnswers} / ${totalQuestions}`
    }
  },
}
</script>

<style lang="scss">
.score__container {
  position: relative;
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .score-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0;
  }
  .social__share span {
    display: block;
    padding: 0.25rem 2rem;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 1rem 0;
    font-size: 1.25rem;
    border-radius: 0.25rem;
  }
}
</style>
