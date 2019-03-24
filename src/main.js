import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/reset.css'
import './assets/border.css'
import './registerServiceWorker'
import './assets/font_110372/iconfont.css'

Vue.config.productionTip = false
Vue.use(VeeValidate)
Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')