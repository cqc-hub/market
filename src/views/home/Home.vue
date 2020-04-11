<template>
	<div id="home">

		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>


	</div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import {getHomeMultidata} from "network/home";

	export default{
		name:'Home',
		components:{
			NavBar
		},
		data(){
			return{
				banners:[],
				dKeyword:[],
				recommends:[],
				keywords:[]
			}
		},
		created() {
			//请求多种数据
			getHomeMultidata().then(res=>{
				this.banners=res.data.banner
				this.dKeyword=res.data.dKeyword
				this.recommends=res.data.recommend
				this.keywords=res.data.keywords
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
