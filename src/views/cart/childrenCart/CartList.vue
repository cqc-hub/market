<template>
    <div class="cartlist">
			<scroll class="content" ref="scroll">
				<div v-if="cartList.length==0" class="cartEmpyt" @click="toHome">
					<img src="https://m.rongrong.cn/static/img/gouwuche.png" alt="">
					<div><b>购物车空空如也,快去选购吧</b></div>
					<br>
					<div><b>点我快速购物</b></div>
				</div>
				<Cart-list-item v-else v-for="(item,index) in cartList" :itemInfo="item" :index="index"></Cart-list-item>
			</scroll>

		</div>
</template>

<script>
	import Scroll from "@/components/common/scroll/Scroll";
	import CartListItem from "@/views/cart/childrenCart/CartListItem";
	export default {
        name: "CartList",
			props:{
				cartList:{
					type:Array,
					default(){
						return []
					}
				}
			},
		methods:{
			toHome(){
				this.$router.push('/home')
			}
		},
		components:{
			Scroll,
			CartListItem
		},
		watch:{
			cartList:function () {
				this.$refs.scroll.refresh()
			}
		},
		activated(){
			this.$refs.scroll.refresh()
		}
    }
</script>

<style scoped>
.cartlist{
	position: relative;
	width: 100vw;
	overflow: hidden;
	height: 100vh;
}
.content{
	height: calc(100% - 115px);
}
	.cartEmpyt{
		text-align: center;
	}
</style>
