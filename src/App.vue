<template>
  <div id="app">
		<keep-alive exclude="Detail">
			<router-view></router-view>
		</keep-alive>
    <main-tab-bar class="tab-bar"></main-tab-bar>
  </div>
</template>

<script>
	import MainTabBar from "components/content/maintabbar/MainTabBar";
	import Vue from 'vue'
	//作为事件总线
	Vue.prototype.$bus=new Vue()
	export default {
  name: 'App',
  components: {
		MainTabBar
  }
}
</script>

<style scoped>
@import "assets/css/base.css";

</style>
