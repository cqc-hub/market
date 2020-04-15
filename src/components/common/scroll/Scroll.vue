<template>
<!--	ref  绑定给子组件  之后可以通过this.$refs.scroll  定位该标签-->
	<div class="warpper" ref="scroll">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
			data(){
        	return{
        		scroll:null
					}
			},
			methods:{
        	scrollTo(x,y,time=500){
						this.scroll && this.scroll.scrollTo(x,y,time)
					},
					refresh(){
						console.log('----');
						this.scroll && this.scroll.refresh()
					}
			},
			props:{
				probeType: {
        		type:Number,
						default:0
					},
				// pullUpLoad:{
				// 	type:Boolean,
				// 	default: false
				// }
			},
			mounted(){
				this.scroll=new BScroll(this.$refs.scroll,{
					click:true,
					probeType:this.probeType,
					pullUpLoad:this.pullUpLoad
				})
				this.scroll.on('scroll',(position)=>{
					this.$emit('position',position)
				})
				// this.scroll.on('pullingUp',()=>{
				// 	// console.log('上啦加载更多');
				// 	this.$emit('pullingUp')
				// })
			},

    }
</script>

<style scoped>

</style>
