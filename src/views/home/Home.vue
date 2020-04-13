<template>
	<div id="home">

		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<home-recommends :recommends="recommends"></home-recommends>
		<feature></feature>
		<tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>
		<good-list :goods="goods['pop'].list"></good-list>
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
	export default{
		name:'Home',
		components:{
			NavBar,
			HomeSwiper,
			HomeRecommends,
			Feature,
			TabControl,
			GoodList
		},
		data(){
			return{
				banners:[],
				recommends:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]},

				}
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
		methods:{
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
				})
			}
		}
	}
</script>

<style>
	#home{
		padding-top: 44px;
	}
	.home-nav{
		background-color: var(--color-tint);
		color: white;
		position: fixed;
		 top: 0;
		left: 0;
		right: 0;
		z-index: 1;
	}
	.tab-control{
		position: sticky;
		/*固定位置 需要配合top*/
		top: 44px;
		z-index: 1;
		line-height: 37px;
	}
</style>
