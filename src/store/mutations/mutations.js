import {
	add_Count,
	add_Carts
}from'./mutationsName'

export default {
	//每个方法功能尽量单一
	[add_Count](state,cart){
		cart.count++
	},
	[add_Carts](state,cart){
		cart.count=1
		state.carts.push(cart)
	}
}
