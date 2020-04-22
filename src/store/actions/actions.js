import {
	add_Count,
	add_Carts
}from'store/mutations/mutationsName'
export default {
	addCarts({state,commit},cart){
		let oldercart=null
		oldercart=state.carts.find(n=>n.id==cart.id)
		if (oldercart){
			commit(add_Count,oldercart)
		}else{
			cart.count=1
			commit(add_Carts,cart)
		}

	}
}
