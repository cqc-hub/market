<template>

		<swiper>
			<swiper-item v-for="item in banners" :key="item.index">
				<a :href="item.link">
					<img :src="item.image" alt="" @load="imgLoad">
				</a>
			</swiper-item>
		</swiper>

</template>

<script>
	import{Swiper, SwiperItem} from 'components/common/swiper'

	export default {
		name: "HomeSwiper",
		props:{
			banners:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		data(){
			return{
				isLoad:true
			}
		},
		components:{
			Swiper,
			SwiperItem
		},
		methods:{
			imgLoad(){
				if (this.isLoad){
					this.$emit('swiperImgLoad')
					this.isLoad=false
				}
			}
		}
    }
</script>

<style scoped>
	.shanow{
		box-shadow: 0px 1px 8px rgba(100,100,100,.8);
	}
</style>
