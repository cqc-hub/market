<template>
	<div class="cart">
<!--		导航栏-->
		<Nav-bar class="navbar">
			<div slot="center">购物车({{getNums}})</div>
		</Nav-bar>
<!--		商品列表展示-->
		<Cart-list :cartList="cartList"></Cart-list>
	</div>
</template>

<script>
	import NavBar from'@/components/common/navbar/NavBar.vue'
	import {mapGetters} from 'vuex'
	import CartList from './childrenCart/CartList'
	export default {
		name:'Cart',
		data(){
			return{
				cartList:[]
			}
		},
		watched:{

		},

		mounted(){
				this.cartList=this.getCarts
		},
		components:{
			NavBar,
			CartList
		},
		computed:{
			...mapGetters({
				getNums:'getNums',
				getCarts:'getCarts'
			})

		}
	}
</script>

<style>
	.navbar{
		background-color: var(--color-tint);
		color: white;
		font-weight: bolder;
	}
</style>
