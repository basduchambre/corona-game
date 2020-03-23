import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {
      isOpen: false,
      isStarted: false,
      progress: null,
      currentQuestion: 1
    },
    questions: [
      {
        id: 0,
        question: 'COVID-19 first started in South Korea',
        answer: false,
        givenAnswer: null,
        disabled: false,
        source: 'https://www.ecdc.europa.eu/en/novel-coronavirus-china/questions-answers',
        score: null
      },
      {
        id: 1,
        question: 'There are already more than 1.000.000 COVID-19 cases known',
        answer: false,
        givenAnswer: null,
        disabled: false,
        source: 'https://www.ecdc.europa.eu/en/geographical-distribution-2019-ncov-cases',
        score: null
      },
      {
        id: 2,
        question: 'You get COVID-19 from drinking Corona beer',
        answer: false,
        givenAnswer: null,
        disabled: true,
        source: 'https://www.health.gov.au/sites/default/files/documents/2020/03/coronavirus-covid-19-what-you-need-to-know_3.pdf',
        score: null
      },
      {
        id: 3,
        question: 'Corona virus can be transmitted by mosquitos',
        answer: false,
        givenAnswer: null,
        disabled: true,
        source: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters',
        score: null
      },
      {
        id: 4,
        question: 'Severe headache is one of the main COVID-19 symptoms',
        answer: false,
        givenAnswer: null,
        disabled: true,
        source: 'https://www.ecdc.europa.eu/en/novel-coronavirus-china/questions-answers',
        score: null
      },
      {
        id: 5,
        question: 'Corona virus can survive snow and cold as well as sun and humidity',
        answer: true,
        givenAnswer: null,
        disabled: true,
        source: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters',
        score: null
      },
      {
        id: 6,
        question: 'Human coronaviruses can remain infectious on inanimate surfaces for up to 9 days',
        answer: true,
        givenAnswer: null,
        disabled: true,
        source: 'https://www.journalofhospitalinfection.com/article/S0195-6701(20)30046-3/fulltext',
        score: null
      },
      {
        id: 7,
        question: 'One of COVID-19 symptoms is lost sense of smell and taste',
        answer: true,
        givenAnswer: null,
        disabled: true,
        source: 'https://www.nytimes.com/2020/03/22/health/coronavirus-symptoms-smell-taste.html',
        score: null
      },
      {
        id: 8,
        question: 'Due to COVID-19 outbreak, Chinese carbon emissions declined by 150 metric tones',
        answer: true,
        givenAnswer: null,
        disabled: true,
        source: 'https://www.nytimes.com/2020/02/26/climate/nyt-climate-newsletter-coronavirus.html',
        score: null  
      },
      {
        id: 9,
        question: 'Scientists have already created a vaccine against COVID-19',
        answer: false,
        givenAnswer: null,
        disabled: true,
        source: 'https://www.ecdc.europa.eu/en/novel-coronavirus-china/questions-answers',
        score: null  
      },
    ],
  },
  getters: {
    getQuestion: state => {
      return state.questions;
    }
  },
  mutations: {
    ENABLE_QUESTION (state, id) {
      let questionIndex = state.questions.findIndex(item => item.id === id)
      state.questions[questionIndex].disabled = false
    },
    STORE_QUESTION_ANSWER (state, {id, answer}) {
      let questionIndex = state.questions.findIndex(item => item.id === id)
      state.questions[questionIndex].givenAnswer = answer;
      if (state.questions[questionIndex].answer == state.questions[questionIndex].givenAnswer) {
        state.questions[questionIndex].score = 1;
      } else {
        state.questions[questionIndex].score = 0;
      }
    }
  },
})
