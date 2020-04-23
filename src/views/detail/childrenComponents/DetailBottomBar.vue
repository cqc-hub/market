<template>
	<div class="bottom-bar">
		<div class="bar-item bar-left">
			<div>
				<i class="icon service"></i>
				<span class="text">客服</span>
			</div>
			<div>
				<i class="icon shop"></i>
				<span class="text">店铺</span>
			</div>
			<div>
				<i class="icon collect"></i>
				<span class="text">收藏</span>
			</div>
		</div>
		<div class="bar-item bar-right">
			<div class="cart" @click="addCart">加入购物车</div>
			<div class="buy" @click="$router.push('/cart')">购买</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: "DetailBottomBar",
		methods:{
			addCart(){
				this.$emit('addCart')
			}
		}
	};
</script>

<style scoped>
	.bottom-bar {
		position: relative;
		bottom: -5px;
		height: 44px;
		background-color: #c7c7c7;
		display: flex;
		text-align: center;
	}
	.bar-item{
		flex: 1;
		display: flex;
	}
	.bar-item>div{
		flex: 1;
	}
	.bar-right .buy{
		background-color: deeppink;
	}
	.bar-right .cart{
		background-color: yellow;
		color: #333;
	}
	.bar-right{
		font-size: 15px;
		color: #fff;
		line-height: 44px;
	}
	.bar-left .text{
		font-size: 13px;
	}
	.bar-left .icon{
		display: block;
		width: 20px;
		height: 20px;
		margin-top: 4px;
		margin-left: 16px;
	}
	.bar-left .shop{
		background-position: 0 1px;
	}
	.bar-left .service{
	}
	.shop{
		background: url("~assets/img/datail/line-app2.svg") 0 0/100%;
	}
	.service{
		background: url("~assets/img/datail/line-people.svg") 0 0/100%;
	}
	.collect{
		background: url("~assets/img/datail/nice.svg") 0 0/100%;

	}

</style>
