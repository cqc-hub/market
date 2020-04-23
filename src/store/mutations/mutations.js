import {
	add_Count,
	add_Carts,
	remove_Carts,
	add_Count1,
	de_Incre,
	change_Checked,
	check_All,
	check_None
}from'./mutationsName'

export default {
	//每个方法功能尽量单一
	[add_Count](state,cart){
		cart.count++
	},
	[add_Carts](state,cart){
		cart.count=1
		cart.checked=true
		state.carts.push(cart)
	},
	[remove_Carts](state,index){
		state.carts.splice(index,1)
	},
	[add_Count1](state,index){
		state.carts[index].count++
	},
	[de_Incre](state,index){
		state.carts[index].count--
	},
	[change_Checked](state,index){
		state.carts[index].checked=!state.carts[index].checked

	},
	[check_All](state){
		for (let item of state.carts){
			item.checked=true
		}
	},
	[check_None](state){
		for (let item of state.carts){
			item.checked=false
		}
	}
}
