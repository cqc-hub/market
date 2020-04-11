<template>
	
		<div class="tab-bar-item" @click="itemClick">
			
			<!-- <img src="../../assets/img/tabbar/HOME.svg" alt="">
			<div>首页</div> -->
			<div v-if="isActive"><slot name="item-icon-active" ></slot></div>
			<div v-else><slot name="item-icon" ></slot></div>
			
			<!-- <div :class="{active:isActive}"> -->
			<div :style="activeStyle">
				<slot name="item-text" ></slot>
			</div>
		</div>
		
	
</template>

<script>
	export default{
		name:'TabBarItem',
		data(){
			return{
				// isActive:true
			}
		},
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'red'
			}
		},
		methods:{
			itemClick(){
				if(this.$route.path!=this.path){
					this.$router.replace(this.path)
				}
				
				// console.log('11111')
				
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path)!=-1
			},
			activeStyle(){
				return this.isActive? {color:this.activeColor}:{}
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		/* 对多个flex进行均等份 */
		text-align: center;
		height: 49px;
		/* tabbar一般49最优 */
		font-size: 14px;
	}
	.tab-bar-item img{
		width: 24px;
		height: 24px;
		/* display: block; */
		margin-top: 3px;
		margin-bottom: 2px;
		vertical-align: middle;
	}
/* 	.active{
		color: red;
	} */
</style>
