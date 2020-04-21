<template>
	<div id="detail">
		<detail-nav-bar class="detailnavbar" @itemClick="navItemClick" ref="detailnavbar"></detail-nav-bar>
		<scroll class="scroll-height" ref="scroll" :probe-type="3" @position="position">
			<detail-swiper :top-images="topImages"></detail-swiper>
			<detail-base-info :goods="GoodsInfo"></detail-base-info>
			<detail-shop-info :shop="ShopInfo"></detail-shop-info>
			<detail-images-info :images-info="detailInfo" ></detail-images-info>
			<detail-param-info :param-info="GoodsParams" ref="params"></detail-param-info>
			<detail-eval-info :comment-info="EvalInfo" ref="evals"></detail-eval-info>
			<detail-recommend ref="recommends"></detail-recommend>
			<good-list :goods="recommds"></good-list>
		</scroll>
		<back-top class="back-top" v-show="isShow"
							@click.native="backtop"
							:class="{backtopshow:isShow}">
		</back-top>
		<Detail-bottom-bar @addCart="addCart"></Detail-bottom-bar>
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
	import {itemListerMixin,backTop} from "@/common/mixin";
	import DetailBottomBar from"@/views/detail/childrenComponents/DetailBottomBar";

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
						itemListerMixin:null,
						itemTopYs:[0],
						getItemTopY:null,
						currentIndex:0,



					}
				},

		mixins:[itemListerMixin,backTop],
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
				GoodList,
				DetailBottomBar,
			},
				created() {
        	this.getItemTopY=debounce(()=>{
						this.itemTopYs=[0]
						this.itemTopYs.push(this.$refs.params.$el.offsetTop)
						this.itemTopYs.push(this.$refs.evals.$el.offsetTop)
						this.itemTopYs.push(this.$refs.recommends.$el.offsetTop)
					},200)

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
						this.$nextTick(()=>{  //$nextTick下一帧(当前函数执行完调用)
							this.getItemTopY()
						})
					})
					getRecommend().then(res=>{
						this.recommds=res.data.list
						// console.log(this.recommds);
					})

				},
		methods:{
			addCart(){
				//获取cart数据
				const cart={}
				cart.id=this.id
				cart.img=this.topImages[0]
				cart.titlt=this.GoodsInfo.title
				cart.info=this.GoodsInfo.desc
				cart.price=this.GoodsInfo.newPrice.substr(1)
				// console.log(cart.price);
				//添加cart对象到cart
				this.$store.commit('addCarts',cart)
				// console.log(this.$store.state.carts);
			},
			navItemClick(index){
				// console.log(index);
				this.$refs.scroll.scrollTo(0,-this.itemTopYs[index],1000)
			},
			// scrollrefresh(){
			// 	this.$refs.scroll.refresh()
			// }
			position(position){
				const y=-position.y
				const ty=this.itemTopYs
				const leng=this.itemTopYs.length
				// console.log(ty);
				// console.log(y);

				for (let i in ty){
						/* console.log(i + 1);//11 21 31  这里内的 i 是字符串不是数字！！！*/
					// if(y>=ty[i] && y<ty[i*1+1]){
					// 	this.$refs.detailnavbar.currentIndex=i
					// }else if (y>=ty[3]){
					// 	this.$refs.detailnavbar.currentIndex=3
					// }
					if (this.currentIndex!=i &&((i*1 < leng-1 && y>=ty[i] && y<ty[i*1+1]) || (i==leng-1 && y>=ty[i]))){
						this.currentIndex=i
						// console.log(this.currentIndex);
					}
					this.$refs.detailnavbar.currentIndex=this.currentIndex
				}

			this.isShow=y>300
			}
		},
		updated(){

		},
		activated(){

		},
		mounted(){

			const refresh=debounce(this.$refs.scroll && this.$refs.scroll.refresh,200)
			//监听图片加载完成
			this.detailimgLoad=()=>{
				// this.$refs.scroll && this.$refs.scroll.refresh()
				refresh()
				this.getItemTopY()

			}
			this.$bus.$on('detailimgLoad',this.detailimgLoad)
			this.detailImgLoad=()=>{
				// this.$refs.scroll && this.$refs.scroll.refresh()
				refresh()
				this.getItemTopY()

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
		height: calc(100% - 44px - 49px);
		width: 100%;
	}
	.back-top{
		z-index: 8;
	}
</style>
