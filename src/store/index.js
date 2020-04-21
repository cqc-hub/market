import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
	state:{
		carts:[]
	},
	mutations:{
		addCarts(state,cart){
			let oldercart=null
			oldercart=state.carts.find(n=>n.id==cart.id)
			if (oldercart){
				oldercart.count ++
			}else{
				cart.count=1
				state.carts.push(cart)
			}

		}
	}
})

export default store
