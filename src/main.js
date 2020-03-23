import Vue from 'vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import SocialSharing from 'vue-social-sharing'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faWhatsapp, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-160450550-1',
  checkDuplicatedScript: true
})

library.add(faEnvelope, faFacebook, faTwitter, faWhatsapp, faTelegram, faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(SocialSharing);

Vue.config.productionTip = false

import App from './App.vue'

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
