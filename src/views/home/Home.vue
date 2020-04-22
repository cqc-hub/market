<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="center">蘑菇街</div>
		</nav-bar>
		<tab-control :titles="['流行','新款','精选']"
								 @TabControlClick="TabControlClick"
								 ref="tabControl1"
								 class="tabcontrolii"
								 v-show="isTabFixed"
		>
		</tab-control>
		<scroll class="content"
						@position="scroll_position"
						ref="scroll"
						:probe-type="3"
						:pullUpLoad="true"
						:pull-up-load="true"
						@pullingUp="loadMore">
			<home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
			<home-recommends :recommends="recommends"></home-recommends>
			<feature></feature>
			<tab-control :titles="['流行','新款','精选']"
									 @TabControlClick="TabControlClick"
									 ref="tabControl2"
									 :class="{boboo:isTabFixed}"
									 >
			</tab-control>
			<good-list :goods="showGods"></good-list>
		</scroll>
		<back-top class="back-top" v-show="isShow"
							@click.native="backtop"
							:class="{backtopshow:isShow}">
		</back-top>
<!--		ul>li{列表$}*100-->

	</div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import {
		getHomeMultidata,
		getHomeGoods
	} from "network/home";
	import HomeSwiper from "views/home/childrencomponents/HomeSwiper";
	import HomeRecommends from "views/home/childrencomponents/HomeRecommends";
	import Feature from "views/home/childrencomponents/Feature";
	import TabControl from "components/content/tabcontrol/TabControl";
	import GoodList from "@/components/content/goods/GoodList";
	import Scroll from "@/components/common/scroll/Scroll";
	import BackTop from "@/components/content/backtop/BackTop";
	import {debounce} from "@/common/utils";
	import {backTop} from "@/common/mixin";

	export default{
		name:'Home',
		components:{
			NavBar,
			HomeSwiper,
			HomeRecommends,
			Feature,
			TabControl,
			GoodList,
			Scroll
		},
		data(){
			return{
				saveY:0,
				banners:[],
				recommends:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]},

				},
				currentType:'pop',
				tabOffsetTop:0,
				isTabFixed:false,
				imgLoadf:null
			}
		},
		mixins:[backTop],
		destroyed(){
			console.log('111');
		},
		created() {
			//请求多种数据
			this.getHomeMultidata()
			//请求goods
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')

		},
		mounted(){
			const refresh=debounce(this.$refs.scroll && this.$refs.scroll.refresh,300)
			this.imgLoadf=()=>{
				// this.$refs.scroll && this.$refs.scroll.refresh()
				refresh()
			}
			//监听图片加载完成
			this.$bus.$on('imageLoad',this.imgLoadf)

		},
		methods:{
			swiperImgLoad(){
				//获取tabcontrol的offsetTop
				this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop

			},
			loadMore(){
				// console.log('loadmore');
				this.getHomeGoods(this.currentType)
				this.$refs.scroll.refresh()
			},
			/*
			* 事件监听
			* */

			TabControlClick(index){
				// console.log(index);
				// switch (index) {
				// 	case 0:
				// 		this.currentType='pop'
				// 		break
				// 	case 1:
				// 		this.currentType='new'
				// 		break
				// 	case 2:
				// 		this.currentType='sell'
				//
				// }
				this.currentType=Object.keys(this.goods)[index]
				this.$refs.tabControl1.currentIndex=index
				this.$refs.tabControl2.currentIndex=index
			},
			scroll_position(position){
				//判断返回顶部按钮的显示与否
				this.isShow=position.y<-300

				//判断tabcontrol是否吸顶
				this.isTabFixed=-position.y>this.tabOffsetTop
			},

			/*
			* 网络请求相关
			* */
			getHomeMultidata(){
				getHomeMultidata().then(res=>{
					this.banners=res.data.banner.list
					this.recommends=res.data.recommend.list


// 					function funDownload(content, filename) {
// 						let cont = JSON.stringify(content);
// 						// 创建隐藏的可下载链接
// 						var eleLink = document.createElement('a');
// 						eleLink.download = filename;
// 						eleLink.style.display = 'none';
// 						// 字符内容转变成blob地址
// 						var blob = new Blob([cont]);
// 						eleLink.href = URL.createObjectURL(blob);
// 						// 触发点击
// 						document.body.appendChild(eleLink);
// 						eleLink.click();
// 						// 然后移除
// 						document.body.removeChild(eleLink);
// 					};
//
// // 调用
// 					let data=res;
// 					funDownload(data,'homeData');



				}).catch(err=>{
					console.log('数据请求失败'+':'+err);
				})
			},
			getHomeGoods(type){
				const page=this.goods[type].page+1
				getHomeGoods(type,page).then(res=>{
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page ++

					//刷新上啦
					this.$refs.scroll.finishPullUp()
				})
			}

		},
		computed:{
			showGods(){
				return this.goods[this.currentType].list
			}
		},
		activated(){
			this.$refs.scroll.refresh()
			this.$refs.scroll.scrollTo(0,this.saveY,0)
		},
		deactivated(){
			this.saveY=this.$refs.scroll.scroll.y
			this.$bus.$off('imageLoad',this.imgLoadf)
		}
	}
</script>

<style scoped>
	#home{
	/*height: 100vh;//端口（屏幕自适应）	*/
		height: 100vh;
		position: relative;
	}
	.home-nav{
		background-color: var(--color-tint);
		color: white;
		font-weight: bolder;

		/*position: fixed;*/
		/*top: 0;*/
		/*left: 0;*/
		/*right: 0;*/
		/*z-index: 9;*/
	}
	/*.tab-control{*/
	/*	!*position: sticky;*!*/
	/*	!*固定位置 需要配合top*!*/
	/*	!*top: 44px;*!*/
	/*	z-index: 1;*/
	/*	line-height: 37px;*/
	/*}*/
	.content{
		position: absolute;
		top: 44px;
		bottom: 49px;
		overflow: hidden;
	}
	.back-top{
		z-index: 8;
	}
	.backtopshow{
		animation: backtopshow 0.3s linear;
	}
	.tabcontrolii{
		position: relative;
		/*z-index 只对定位的东西起效果*/
		z-index: 1;
	}
	.boboo{
		opacity: 0;
	}
	@keyframes backtopshow{
		from{opacity: 0;}
		to{opacity: 0.6;}
	}
</style>
