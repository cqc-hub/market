export const itemListerMixin={
	mounted(){
		// console.log('我是mixin');
		// this.itemListerMixin='我修改了data内的itemListerMixin'
		// console.log(this.itemListerMixin);
	},
	data(){
		return{
			// aaa:'mixin定义的啊啊啊'
		}
	},
	beforeDestroy(){
		// console.log(this.aaa);
	}
}
