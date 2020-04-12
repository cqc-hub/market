<template>
	<div id="home">

		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<home-recommends :recommends="recommends"></home-recommends>
	</div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import {getHomeMultidata} from "network/home";
	import HomeSwiper from "views/home/childrencomponents/HomeSwiper";
	import HomeRecommends from "views/home/childrencomponents/HomeRecommends";
	export default{
		name:'Home',
		components:{
			NavBar,
			HomeSwiper,
			HomeRecommends
		},
		data(){
			return{
				banners:[],
				recommends:[],
			}
		},
		created() {
			//请求多种数据
			getHomeMultidata().then(res=>{
				this.banners=res.data.banner.list
				this.recommends=res.data.recommend.list
			})
		}
	}
</script>

<style>
	.home-nav{
		background-color: var(--color-tint);
		color: white;
	}
</style>
