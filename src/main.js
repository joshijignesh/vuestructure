import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/app.scss'
import vuetify from './plugins/vuetify';
import Services from './services'

Vue.config.productionTip = false

Vue.use(Services, {
  store
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
