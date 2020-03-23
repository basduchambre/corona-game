import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Question from '@/components/Question'
import Score from '@/components/Score'
import PermissionDenied from '@/components/PermissionDenied'

Vue.use(Router)

import store from '@/store'

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/question/:id',
        name: 'question',
        component: Question,
        beforeEnter(to, from, next) {
          let qid = store.getters.getQuestion[to.params.id];

          if (qid != null && qid.disabled == false) {
            next()
          } else {
            next({
              path: '/403'
            });
          }
        }
    },   
    {
        path: '/score',
        name: 'score',
        component: Score
    },
    {
      path: '/403',
      name: '403',
      component: PermissionDenied
    } 
  ]
})