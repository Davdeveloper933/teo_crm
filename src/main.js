import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueLayoutComposer from 'vue-layout-composer'
import '../src/assets/scss/main.scss'

Vue.use(VueLayoutComposer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
