<template>
    <div>
			<img src="~assets/img/backtop/arrow-circle-up.svg" alt="">
		</div>
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped>
	img{
		width: 50px;
		height: 50px;
		opacity: 0.6;
	}
	div{
		position: fixed;
		right: 7px;
		bottom: 69px;
	}
	.backtopshow{
		animation: backtopshow 0.3s linear;
	}
	@keyframes backtopshow{
		from{opacity: 0;}
		to{opacity: 0.6;}
	}
</style>
