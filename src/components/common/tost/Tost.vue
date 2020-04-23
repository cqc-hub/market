<template>
    <div class="tost" v-show="show">
			<div >{{msg}}</div>
		</div>
</template>

<script>
    export default {
        name: "Tost",
			data(){
        	return{
        		msg:'',
						show:false
					}
			},
			props:{
        // 	msg:{
        // 		type:String,
				// 		default:''
				// 	},
				// show:{
        // 		type:Boolean,
				// 		default: false
				// }
			},
			methods:{
        	isShow(msg,delay){
						this.show=true
						this.msg=msg
						setTimeout(()=>{
							this.show=false
						},delay)
					}
			}
    }
</script>

<style scoped>
 .tost{
	 position: fixed;
	 z-index: 20;
	 color: white;
	 padding: 5px 10px;
	 background-color: rgba(0,0,0,.5);
	 top: 50%;
	 left: 50%;
	 transform: translate(-50%,-50%);
 }
</style>
