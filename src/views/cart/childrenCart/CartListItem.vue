<template>
	<div id="shop-item">
		<div class="item-selector">
			<CheckButton @checkBtnClick="checkedChange()" v-model="itemInfo.checked"></CheckButton>
		</div>
		<div class="item-img">
			<img :src="itemInfo.img" alt="商品图片">
		</div>
		<div class="item-info">
			<div class="item-title">{{itemInfo.titlt}}</div>
			<div class="item-desc">商品描述: {{itemInfo.info}}</div>
			<div class="info-bottom">
				<div class="item-price left">¥{{itemInfo.price}}</div>
				<div class="item-count right">x{{itemInfo.count}}</div>
			</div>
			<div class="btn">
				<button @click="incre">+</button>
				&nbsp;
				<button @click="deincre">-</button>

			</div>
		</div>
	</div>
</template>

<script>

		import CheckButton from "./CartCheckButton";

		export default {
        name: "CartListItem",

			props:{
				itemInfo:{
					type:Object,
					default(){
						return {}
					}
				},
				index:{
					type:Number,
					default() {
						return null;
					}
				}
			},
			components: {
				CheckButton
			},
			methods: {
				checkedChange () {
					this.$store.commit('checkedChange',this.index)
				},
				incre(){
					this.$store.commit('addCount1',this.index)
				},
				deincre(){
					if(this.itemInfo.count>1){
						this.$store.commit('deIncre',this.index)
					}else{
						this.$store.commit('removeCarts',this.index)
						this.$toast.isShow('已从购物车删除该商品',1000)
					}

				}
			}
    }
</script>

<style scoped>
	#shop-item {
		width: 100vw;
		display: flex;
		padding: 5px;
		border-top: 0.7px solid rgba(0,0,0,.3);
		border-left: 0.7px solid rgba(0,0,0,.3);
		border-right: 0.7px solid rgba(0,0,0,.3);

	}

	.item-selector {
		width: 14%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.item-title, .item-desc {
		overflow: hidden;
		white-space: nowrap;
		/*段落中的文本不进行换行 white-space: nowrap;*/
		text-overflow: ellipsis;
	}

	.item-img {
		border: 1px solid #ccc;
		border-radius: 3px;
	}

	.item-img img {
		width: 75px;
		height: 85px;
		display: inline-block;
		border-radius: 3px;
	}

	.item-info {
		font-size: 17px;
		color: #333;
		padding: 5px 10px;
		position: relative;
		overflow: hidden;
	}

	.item-info .item-desc {
		font-size: 14px;
		color: #666;
		margin-top: 15px;
	}

	.info-bottom {
		margin-top: 10px;
		position: absolute;
		bottom: 10px;
		left: 10px;
		right: 10px;
	}

	.info-bottom .item-price {
		color: orangered;
	}
	.btn{
		position: absolute;
		right: 15vw;
		top: 63px;
	}
	.btn button{
		width: 23px;
	}
</style>
