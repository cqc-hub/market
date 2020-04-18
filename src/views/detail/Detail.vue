<template>
	<div id="detail">
		<detail-nav-bar class="detailnavbar"></detail-nav-bar>
		<scroll class="scroll-height" ref="scroll">
			<detail-swiper :topImages="topImages"></detail-swiper>
			<detail-base-info :goods="GoodsInfo"></detail-base-info>
			<detail-shop-info :shop="ShopInfo"></detail-shop-info>
			<detail-images-info :imagesInfo="detailInfo" ></detail-images-info>
		</scroll>
	</div>
</template>

<script>
	import DetailNavBar from "@/views/detail/childrenComponents/DetailNavBar";
	import Scroll from "@/components/common/scroll/Scroll";

	import {getDetail,GoodsInfo,ShopInfo} from "@/network/datail";
	import DetailSwiper from "@/views/detail/childrenComponents/DetailSwiper";
	import DetailBaseInfo from "@/views/detail/childrenComponents/DetailBaseInfo";
	import DetailShopInfo from "@/views/detail/childrenComponents/DetailShopInfo";
	import DetailImagesInfo from "@/views/detail/childrenComponents/DetailImagesInfo";
	import {debounce} from "@/common/utils";

	export default {
				//详情页
        name: "Detail",
				data(){
        	return{
        		id:null,
						topImages:[],
						GoodsInfo:{},
						ShopInfo:{},
						detailInfo:{}
					}
				},
			components:{
				DetailNavBar,
				Scroll,
				DetailSwiper,
				DetailBaseInfo,
				DetailShopInfo,
				DetailImagesInfo
			},
				created() {
        	this.id=this.$route.params.id
					//根据id发送网络请求
					getDetail(this.id).then(res=>{
						console.log(res);
						const data=res.result
						this.topImages=data.itemInfo.topImages
						//获取商品信息
						this.GoodsInfo=new GoodsInfo(data.itemInfo,data.columns,data.shopInfo)

						//获取商家信息
						this.ShopInfo=new ShopInfo(data.shopInfo)

						//获取商品详情信息
						this.detailInfo=data.detailInfo
					})
				},
		methods:{
			// scrollrefresh(){
			// 	this.$refs.scroll.refresh()
			// }
		},
		mounted(){
			const refresh=debounce(this.$refs.scroll && this.$refs.scroll.refresh,300)
			//监听图片加载完成
			this.$bus.$on('detailimgLoad',()=>{
				// this.$refs.scroll && this.$refs.scroll.refresh()
				refresh()
			})
		}

		}
</script>

<style scoped>
	#detail{
		position: relative;
		z-index: 14;
		height: 100vh;
		background-color: #d3cdd1;
	}
	.detailnavbar{
		position: relative;
		z-index: 15;
	}
	.scroll-height {
		position: relative;
		height: calc(100% - 44px);
		overflow: hidden;
		width: 100%;
	}

</style>
