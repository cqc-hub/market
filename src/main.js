import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import tost from './components/common/tost/index'
import fastClick from'fastclick'

Vue.config.productionTip = false

import { Icon } from 'vant';
import { Image } from 'vant';

Vue.use(Image);
Vue.use(Icon);

//作为事件总线
Vue.prototype.$bus=new Vue()
//安装tost插件
Vue.use(tost)  //vue.use会执行install函数

//搞定移动端300ms的延迟
fastClick.attach(document.body)
new Vue({
  render: h => h(App),
	router,
	store
}).$mount('#app')
