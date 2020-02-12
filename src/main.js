import Vue from 'vue'
import router from './router'
import App from './App.vue'
import 'common/js/common'

Vue.config.productionTip = false

/*事件总线*/
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
