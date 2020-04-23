<template>
	<div class="profile" @click="showmsg">
		<nav-bar class="nav-bar">
			<div slot="center"><b>Profile</b></div>
		</nav-bar>
		<scroll class="scroll-height">
			<login />
			<money />
			<div class="line"></div>
			<profile-list />
		</scroll>
	</div>
</template>

<script>
	import NavBar from "@/components/common/navbar/NavBar";
	import Login from "./children/Login";
	import Money from "./children/Money";
	import ProfileList from "./children/profileList";
	import Scroll from "@/components/common/scroll/Scroll";

	export default {
		name: "Profile",
		components: {
			Scroll, ProfileList, Money, Login, NavBar
		},
		methods:{
			showmsg(){
				this.$toast.isShow('系统维护中ing~~~~~~',1000)
			}
		}
	};
</script>

<style scoped>
	.profile {
		width: 100%;
		height: 100%;
	}

	.nav-bar {
		font-weight: 600;
		color: white;
		background-color: var(--color-tint);
	}

	.line {
		width: 100%;
		height: 10px;
		background-color: #eeeeee;
	}

	.scroll-height {
		position: absolute;
		top: 44px;
		right: 0;
		bottom: 50px;
		left: 0;
		overflow: hidden;
	}
</style>
