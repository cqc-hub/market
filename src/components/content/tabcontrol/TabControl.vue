<template>
    <div class="tab-control">
<!--			<div v-for="(item,index) in titles"-->
<!--					 class="tab-control-item" :class="{active: index == currentIndex}" :key="item">-->
<!--				<span>{{item}}</span>-->
<!--			</div>-->
			<div v-for="(item,index) in titles"  class="tab-control-item" :key="item">
				<span :class="{active:index==currentIndex}" @click="clickItem(index)">{{item}}</span>
			</div>
		</div>
</template>

<script>
    export default {
        name: "TabControl",
				data(){
        	return{
        		currentIndex:0
					}
				},
			methods:{
				clickItem(index){
					this.currentIndex=index
				}
			},
				props:{
						titles:{
							type:Array,
							default(){
								return[]
							}
						}
				}
    }
</script>

<style scoped>
	.active{
		color: rgba(255,0,0,.6);
		border-bottom: 3px solid pink;
	}
	.tab-control{
		display: flex;
		text-align: center;
		justify-content: space-between;
		font-size: 17px;
		background-color: #fff;
	}
	.tab-control-item{
		flex: 1;
		height: 40px;
	}
	.tab-control-item>span{
		padding: 5px;
	}
</style>
