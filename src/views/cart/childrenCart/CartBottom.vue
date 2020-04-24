<template>
    <div class="bottomcart">
			<div class="checkcontent">
				<label  class="labelc" @click="selAll">
					<Cart-check-button class="Cart-check-button" :value="isSelall"  ></Cart-check-button>
					<span class="bbb" ref="textspan">全不选</span>
				</label>

			</div>
			<div class="aaa">
				合计:￥{{totaolPrice}}
			</div>
			<div class="calculate" @click="calculate"><b>去结算({{cartLen}})</b></div>
		</div>
</template>

<script>
	import CartCheckButton from "@/views/cart/childrenCart/CartCheckButton";
    export default {
        name: "CartBottom",
			data(){
        	return{
        		resShow:{
        			type:Boolean,
							default:false
						}
					}
			},
			components:{
				CartCheckButton
			},
			methods:{
				selAll(){
					this.isSelall?this.$store.commit('checknone'):this.$store.commit('checkall')
					this.resShow ? this.$refs.textspan.innerHTML='全选' : this.$refs.textspan.innerHTML='全不选'
				},
				calculate(){
					if (this.cartLen==0){
						this.$toast.isShow('请添加完商品在进行购买',1000)
					}else{
						this.$toast.isShow('提交数据成功',1000)
					}
				}
			},
			computed:{
				totaolPrice(){
        		return this.$store.state.carts.filter(item=>{
        			return item.checked
						}).reduce((pre,item)=>{
							return pre+item.count*item.price
						},0).toFixed(1)
					},
				cartLen(){
					return this.$store.state.carts.filter(item=>{
						return item.checked
					}).length
				},
				isSelall(){
					const show1=this.cartLen==this.$store.state.carts.length
					const show2=this.$store.state.carts.length!=0
					this.resShow=show1&&show2
					return this.resShow
				}
			}
    }
</script>

<style scoped>
	.checkcontent{
		display: flex;
		width: 80px;
		align-items: center;
		justify-content: center;
	}
	.checkcontent span{
			padding-left: 9px;
	}
.labelc{
	display: flex;
}
.Cart-check-button{
	width: 20px;
	height: 20px;
}
	.bottomcart{
		background-color: rgb(245, 245, 245);
		height: 27px;
		display: flex;
		justify-content: space-between;
	}
	.aaa,.bbb{
		padding-top: 5px;
	}
	.calculate{
		background-color: darkgray;
		padding: 5px;
		border: #333333 1px solid;
		color: rgb(182, 25, 37);
	}
</style>
