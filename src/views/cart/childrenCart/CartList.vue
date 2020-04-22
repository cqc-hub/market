<template>
    <div class="cartlist">
			<scroll class="content" ref="scroll">
				<Cart-list-item v-for="item in cartList" :itemInfo="item" ></Cart-list-item>
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
	height: calc(100% - 93px);
}
</style>
