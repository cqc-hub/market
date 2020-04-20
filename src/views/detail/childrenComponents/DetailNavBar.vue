<template>
	<div>
		<nav-bar class="detailnavbar">
			<div slot="left" class="back" @click="itemback">
				<img src="~assets/img/datail/line-arrowleft.svg" alt="">
			</div>
			<div slot="center" class="title">
				<div v-for="(item,index) in titles"
						 class="title-item"
						 :class="{active:index==currentIndex}"
						 @click="itemClick(index)"
				>{{item}}</div>
			</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from "@/components/common/navbar/NavBar";

	export default {
        name: "DetailNavBar",
		components:{
			NavBar
		},
		data(){
        	return{
        		titles:['商品','参数','评论','推荐'],
						currentIndex:0
					}
		},
		methods:{
        	itemClick(index){
        		this.currentIndex=index
						this.$emit('itemClick',index)
					},
			itemback(){
				// this.$router.go(-1)
        		this.$router.back()
			}
		}
    }
</script>

<style scoped>
	.detailnavbar{
		background-color: rgba(204, 204, 204, 0.9);
	}
	.active{
		color: red;
	}
.title{
	display: flex;
	font-size: 15px;
}
	.title-item{
		flex: 1;
	}
	.back img{
		margin-top: 13px;
		width: 20px;
		height: 20px;
		opacity: .6;
	}
</style>
