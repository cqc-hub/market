<template>
	<div id="detail">
		<detail-nav-bar></detail-nav-bar>
		<detail-swiper :topImages="topImages"></detail-swiper>
	</div>
</template>

<script>
	import DetailNavBar from "@/views/detail/childrenComponents/DetailNavBar";
	import {getDetail} from "@/network/datail";
	import DetailSwiper from "@/views/detail/childrenComponents/DetailSwiper";
	export default {
        name: "Detail",
				data(){
        	return{
        		id:null,
						topImages:[]
					}
				},
			components:{
				DetailNavBar,
				DetailSwiper
			},
				created() {
        	this.id=this.$route.params.id
					//根据id发送网络请求
					getDetail(this.id).then(res=>{
						// console.log(res);
						this.topImages=res.result.itemInfo.topImages
					})
				},

		}
</script>

<style scoped>

</style>
