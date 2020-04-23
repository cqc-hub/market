import {
	add_Count,
	add_Carts
}from'store/mutations/mutationsName'
export default {
	addCarts({state,commit},cart){
		return new Promise((resolve,reject)=>{
			let oldercart=null
			oldercart=state.carts.find(n=>n.id==cart.id)
			if (oldercart){
				commit(add_Count,oldercart)
				resolve('当前商品数量+1')
			}else{
				cart.count=1
				commit(add_Carts,cart)
				resolve('添加购物车成功')
			}
		})

	}
}
