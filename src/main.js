import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Meta from 'vue-meta'

// if (process.env.NODE_ENV === 'development') {
//   Vue.prototype.$DOMAIN = 'http://127.0.0.1:8080'
// } else {
//   Vue.prototype.$DOMAIN = 'https://innlandethelseogfysioterapi.no'
// }

Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
