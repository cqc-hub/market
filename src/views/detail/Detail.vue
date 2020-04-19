<template>
	<div id="detail">
		<detail-nav-bar class="detailnavbar"></detail-nav-bar>
		<scroll class="scroll-height" ref="scroll">
			<detail-swiper :topImages="topImages"></detail-swiper>
			<detail-base-info :goods="GoodsInfo"></detail-base-info>
			<detail-shop-info :shop="ShopInfo"></detail-shop-info>
			<detail-images-info :imagesInfo="detailInfo" ></detail-images-info>
			<detail-param-info :paramInfo="GoodsParams"></detail-param-info>
			<detail-eval-info :commentInfo="EvalInfo"></detail-eval-info>
			<detail-recommend></detail-recommend>
			<good-list :goods="recommds"></good-list>
		</scroll>
	</div>
</template>

<script>
	import DetailNavBar from "@/views/detail/childrenComponents/DetailNavBar";
	import Scroll from "@/components/common/scroll/Scroll";

	import {getDetail,GoodsInfo,ShopInfo,GoodsParams,getRecommend} from "@/network/datail";
	import DetailSwiper from "@/views/detail/childrenComponents/DetailSwiper";
	import DetailBaseInfo from "@/views/detail/childrenComponents/DetailBaseInfo";
	import DetailShopInfo from "@/views/detail/childrenComponents/DetailShopInfo";
	import DetailImagesInfo from "@/views/detail/childrenComponents/DetailImagesInfo";
	import {debounce} from "@/common/utils";
	import DetailParamInfo from "@/views/detail/childrenComponents/DetailParamInfo";
	import DetailEvalInfo from "@/views/detail/childrenComponents/DetailEvalInfo";
	import DetailRecommend from "@/views/detail/childrenComponents/DetailRecommend";
	import GoodList from "@/components/content/goods/GoodList";
	import {itemListerMixin} from "@/common/mixin";

	export default {
				//详情页
        name: "Detail",
				data(){
        	return{
        		id:null,
						topImages:[],
						GoodsInfo:{},
						ShopInfo:{},
						detailInfo:{},
						GoodsParams:{},
						EvalInfo:{},
						recommds:[],
						detailimgLoad:null,
						detailImgLoad:null,
						itemListerMixin:null

					}
				},
		mixins:[itemListerMixin],
			components:{
				DetailNavBar,
				Scroll,
				DetailSwiper,
				DetailBaseInfo,
				DetailShopInfo,
				DetailImagesInfo,
				DetailParamInfo,
				DetailEvalInfo,
				DetailRecommend,
				GoodList
			},
				created() {
        	this.id=this.$route.params.id
					//根据id发送网络请求
					getDetail(this.id).then(res=>{
						// console.log(res);
						const data=res.result
						this.topImages=data.itemInfo.topImages
						//获取商品信息
						this.GoodsInfo=new GoodsInfo(data.itemInfo,data.columns,data.shopInfo)

						//获取商家信息
						this.ShopInfo=new ShopInfo(data.shopInfo)

						//获取商品详情信息
						this.detailInfo=data.detailInfo

						//获取参数信息
						this.GoodsParams=new GoodsParams(data.itemParams.info,data.itemParams.rule)

						// 获取评论数据
						if (data.rate.list.length!=0) {
							this.EvalInfo = data.rate.list[0];
							// console.log(this.EvalInfo);
						}

					})
					getRecommend().then(res=>{
						this.recommds=res.data.list
						// console.log(this.recommds);
					})
				},
		methods:{
			// scrollrefresh(){
			// 	this.$refs.scroll.refresh()
			// }
		},
		mounted(){
			const refresh=debounce(this.$refs.scroll && this.$refs.scroll.refresh,200)
			//监听图片加载完成
			this.detailimgLoad=()=>{
				// this.$refs.scroll && this.$refs.scroll.refresh()
				refresh()
			}
			this.$bus.$on('detailimgLoad',this.detailimgLoad)
			this.detailImgLoad=()=>{
				// this.$refs.scroll && this.$refs.scroll.refresh()
				refresh()
			}
			this.$bus.$on('detailImgLoad',	this.detailImgLoad)
		},
		destroyed(){
      //  	取消监听全局事件
			this.$bus.$off('detailimgLoad',this.detailimgLoad)
			this.$bus.$off('detailImgLoad',this.detailImgLoad)
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
