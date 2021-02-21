import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Notifications from 'vue-notification'
import DatetimePicker from 'vuetify-datetime-picker'

Vue.use(DatetimePicker)
Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
  data: {
    color: 0,
    language: 0
  },
  vuetify,
  render: h => h(App)
}).$mount('#app')
