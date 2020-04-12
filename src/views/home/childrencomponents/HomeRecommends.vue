<template>
	<div class="recommend">
		<div v-for="item in recommends" >
			<a :href="item.link">
				<img :src="item.image" alt="">
			</a>
			<div>{{item.title}}</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "HomeRecommends",
				props:{
					recommends:{
						type:Array,
						default(){
							return[]
						}
					}
				}
    }
</script>

<style scoped>
	.recommend  {
		display: flex;
		width: 100%;
		text-align: center;
		font-size: 14px;
		padding: 8px 0 15px;
		justify-content: space-between;
		border-bottom: 10px solid rgba(0,0,0,.08);
	}

	.recommend img{

		width: 70px;
		height: 70px;
		margin-bottom: 3px;
	}
</style>
