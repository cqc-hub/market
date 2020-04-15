<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>

		<scroll class="content"
						@position="scroll_position"
						ref="scroll"
						:probe-type="3"
						:pullUpLoad="true">
			<home-swiper :banners="banners"></home-swiper>
			<home-recommends :recommends="recommends"></home-recommends>
			<feature></feature>
			<tab-control :titles="['流行','新款','精选']"
									 class="tab-control"
									 @TabControlClick="TabControlClick"
			></tab-control>
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
	export default{
		name:'Home',
		components:{
			NavBar,
			HomeSwiper,
			HomeRecommends,
			Feature,
			TabControl,
			GoodList,
			Scroll,
			BackTop
		},
		data(){
			return{
				banners:[],
				recommends:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]},

				},
				currentType:'pop',
				isShow:false
			}
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
			const refresh=this.debounce(this.$refs.scroll && this.$refs.scroll.refresh,300)
			//监听图片加载完成
			this.$bus.$on('imageLoad',()=>{
				// this.$refs.scroll && this.$refs.scroll.refresh()
				refresh()
			})
		},
		methods:{
			debounce(funct,delay){
				let timer=null   //timer在闭包里面 但是在之后函数内有被引用所以不会被销毁
				return (...args)=>{
					if (timer) clearTimeout(timer)
					timer=setTimeout(()=>{
						funct.apply(this,args)
					},delay)
				}
			},
			backtop(){
				// console.log(this.$refs.scroll);
				this.$refs.scroll.scrollTo(0,0,500)
			},
			// loadMore(){
			// 	// console.log('loadmore');
			// 	this.getHomeGoods(this.currentType)
			// 	this.$refs.scroll.scroll.refresh()
			// },
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
			},
			scroll_position(position){
				this.isShow=position.y<-300
			},

			/*
			* 网络请求相关
			* */
			getHomeMultidata(){
				getHomeMultidata().then(res=>{
					this.banners=res.data.banner.list
					this.recommends=res.data.recommend.list
				})
			},
			getHomeGoods(type){
				const page=this.goods[type].page+1
				getHomeGoods(type,page).then(res=>{
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page ++

					// this.$refs.scroll.scroll.finishPullUp()
				})
			}

		},
		computed:{
			showGods(){
				return this.goods[this.currentType].list
			}
		}
	}
</script>

<style scoped>
	#home{
		padding-top: 44px;
	/*height: 100vh;//端口（屏幕自适应）	*/
		height: 100vh;
		position: relative;
	}
	.home-nav{
		background-color: var(--color-tint);
		color: white;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
	}
	.tab-control{
		position: sticky;
		/*固定位置 需要配合top*/
		top: 44px;
		z-index: 1;
		line-height: 37px;
	}
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
	@keyframes backtopshow{
		from{opacity: 0;}
		to{opacity: 0.6;}
	}
</style>
