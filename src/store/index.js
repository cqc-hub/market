import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations/mutations'
import actions from './actions/actions'
import getters from './getters/getters'
//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
	state:{
		//购物车数据
		carts:[]
	},
	mutations,
	actions,
	getters
})

export default store
