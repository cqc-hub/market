import BackTop from "@/components/content/backtop/BackTop";
//mixin可以混入生命周期函数，但是方法里的代码不能混入（他会覆盖整个该方法）
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

export const backTop={
	data(){
		return{
			isShow:false
		}
	},
	components:{
		BackTop
	},
	methods:{
		backtop(){
			this.$refs.scroll.scrollTo()
		}
	}

}
