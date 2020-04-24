<template>
	<div class="category">
		<nav-bar class="category-nav-bar">
			<div slot="center">商品分类</div>
		</nav-bar>
		<slide-bar :slide-bar-list="categoryList"  @slideBarItemClick="slideBarItemClick"/>
		<tab-control :titles="titleList" @TabControlClick="tabClick" ref="tabControl" class="tabcontrol"/>
		<scroll class="scroll-height">
			<Good-list :goods="categoryDetailList" />
		</scroll>
	</div>
</template>

<script>
	import NavBar from "@/components/common/navbar/NavBar";
	import SlideBar from "./children/SlideBar";
	import { getCategory, getCategoryDetail, getSubcategory} from "@/network/category";
	import Scroll from "@/components/common/scroll/Scroll";
	import Subcategory from "./children/Subcategory";
	import TabControl from "components/content/tabcontrol/TabControl";
	import GoodList from "./children/categoryGoodsList";

	export default {
		name:'Category',
		components:{
			NavBar,
			SlideBar,
			Scroll,
			Subcategory,
			TabControl,
			GoodList
		},
		data(){
			return {
				// 分类内容数据
				subcategoryList: [],
				categoryDetailList: [],
				// 分类侧边栏数据
				categoryList: [],
				titleList: ["流行", "新款", "精选"],
				currentIndex: 0,
				// 存储key
				keyList: []
			};
		},
		methods:{
			slideBarItemClick({ maitKey, index }) {
				this.currentIndex = index;
				// 每次切换分类初始化tabControl的下标
				this.$refs.tabControl.curIndex = 0;
				// 请求对应的推荐列表
				this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey, "pop");
				// 如果keyList中存在maitKey证明数据已经请求过了
				this.keyList[index] = maitKey;
				this.getSubcategory(this.categoryList[this.currentIndex].maitKey, index);
			},
			getCategory() {
				getCategory().then(res => {
					// console.log(res.data.category.list);
					this.categoryList = res.data.category.list;
					this.$nextTick(() => {
						this.getSubcategory(this.categoryList[0].maitKey, 0);
						this.getCategoryDetail(this.categoryList[0].miniWallkey, "pop");
						// 初始化push第一个key进去
						this.keyList.push(this.categoryList[0].maitKey);
					});
				});
			},
			getSubcategory(key, index) {
				getSubcategory(key).then(res => {
					// console.log(res.data.list);
					this.subcategoryList[index] = res.data.list;
				});
			},
			getCategoryDetail(key, type) {
				getCategoryDetail(key, type).then(res => {
					this.categoryDetailList = res;
				});
			},
			tabClick(index) {
				const typeList = ["pop", "new", "sell"];
				// 切换类型数据
				this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey, typeList[index]);
			}
		},
		created(){
			this.getCategory()
		},
		computed:{
			forSubcategoryList(){
				return this.subcategoryList[this.currentIndex]
			}
		}

	}
</script>

<style>
	.category-nav-bar{
		background-color: var(--color-tint);
		color: white;
		font-weight: bolder;
	}
	.scroll-height {
		position: fixed;
		top: 88px;
		left: 60px;
		right: 0;
		bottom: 46px;
		overflow: hidden;
	}
	.tabcontrol{
		position: fixed;
		top: 44px;
		right: 0;
		left: 75px;
	}
</style>
