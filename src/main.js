import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import tost from './components/common/tost/index'
Vue.config.productionTip = false
//作为事件总线
Vue.prototype.$bus=new Vue()
//安装tost插件
Vue.use(tost)  //vue.use会执行install函数
new Vue({
  render: h => h(App),
	router,
	store
}).$mount('#app')
