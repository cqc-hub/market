<template>
	<div class="detail-swpier">
		<swiper class="detailswiper">
			<swiper-item v-for="item in topImages" >
				<img :src="item" alt="">
			</swiper-item>
		</swiper>
	</div>
</template>


<script>
	import{Swiper, SwiperItem} from 'components/common/swiper'

	export default {
        name: "DetailSwiper",
		props:{
        	topImages:{
        		type:Array,
						default(){
        			return[]
						}
					}
		},
		components:{
			Swiper,
			SwiperItem
		},
		activate(){

		}
    }
</script>

<style scoped>
.detail-swpier{

}
.detailswiper{
	height: 300px;
	overflow: hidden;
}
</style>
