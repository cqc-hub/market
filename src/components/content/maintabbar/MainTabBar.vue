<template>
	<div id="main-tabbar">
		<tab-bar>
			<tab-bar-item path='/home' activeColor='blue'>
				<img src="~assets/img/tabbar/HOME.svg" alt="" slot="item-icon" >
				<img src="~assets/img/tabbar/shouye (1).svg" alt="" slot="item-icon-active">
				<div slot='item-text'>首页</div>
			</tab-bar-item>
			<tab-bar-item path='/category'>
				<img src="~assets/img/tabbar/xitongguanli.svg" alt="" slot="item-icon" >
				<img src="~assets/img/tabbar/xitongguanli (1).svg" alt="" slot="item-icon-active">
				<div slot='item-text'>分类</div>
			</tab-bar-item>
			<tab-bar-item path='/cart' activeColor='pink'>
				<img src="~assets/img/tabbar/cart_empty.svg" alt="" slot="item-icon" >
				<img src="~assets/img/tabbar/cart.svg" alt="" slot="item-icon-active">
				<div slot='item-text'>购物车</div>
			</tab-bar-item>
			<tab-bar-item path='/profile' activeColor='deepPink'>
				<img src="~assets/img/tabbar/yonghuguanli.svg" alt="" slot="item-icon" >
				<img src="~assets/img/tabbar/yonghuguanli (1).svg" alt="" slot="item-icon-active">
				<div slot='item-text'>我的</div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

	export default{
		name:'MainTabBar',
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>

</style>
