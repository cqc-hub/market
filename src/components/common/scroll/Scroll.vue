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
        		this.scroll.scrollTo(x,y,time)
					}
			},
			props:{
				probeType: {
        		type:Number,
						default:0
					}
			},
			mounted(){
				this.scroll=new BScroll(this.$refs.scroll,{
					click:true,
					probeType:this.probeType
				})
				this.scroll.on('scroll',(position)=>{
					this.$emit('position',position)
				})

			},

    }
</script>

<style scoped>

</style>
