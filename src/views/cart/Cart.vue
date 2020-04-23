<template>
	<div class="cart">
<!--		导航栏-->
		<Nav-bar class="navbar">
			<div slot="center">购物车({{getNums}})</div>
		</Nav-bar>
<!--		商品列表展示-->
		<Cart-list :cartList="cartList"></Cart-list>
		<Cart-bottom class="cartbottom"></Cart-bottom>
	</div>
</template>

<script>
	import NavBar from'@/components/common/navbar/NavBar.vue'
	import {mapGetters} from 'vuex'
	import CartList from './childrenCart/CartList'
	import CartBottom from "@/views/cart/childrenCart/CartBottom";
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
			CartList,
			CartBottom
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
	.cartbottom {
		position: fixed;
		bottom: 49px;
		left: 0;
		right: 0;
	}
</style>
