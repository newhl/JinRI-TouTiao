import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入Vant 组件
import Vant from 'vant'
//  引入Vant 组件库的样式
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
