<template>
    <div class="goods">
			<goods-list-item v-for="item in goods" :goodsItem="item"></goods-list-item>
		</div>
</template>

<script>
	import GoodsListItem from "@/components/content/goods/GoodsListItem";
    export default {
        name: "GoodList",
			props:{
				goods:{
					type:Array,
					default(){
						return[]
					}
				}
			},
			components:{
				GoodsListItem
			}
    }
</script>

<style scoped>
.goods{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}

</style>
