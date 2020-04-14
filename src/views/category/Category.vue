<template>
	<div>
		<h2>分类</h2>
		<div class="wrapper">
			<ul class="content">
				<button @click="btn">btn</button>
				<li>劣币哦1</li>
				<li>劣币哦2</li>
				<li>劣币哦3</li>
				<li>劣币哦4</li>
				<li>劣币哦5</li>
				<li>劣币哦6</li>
				<li>劣币哦7</li>
				<li>劣币哦8</li>
				<li>劣币哦9</li>
				<li>劣币哦10</li>
				<li>劣币哦11</li>
				<li>劣币哦12</li>
				<li>劣币哦13</li>
				<li>劣币哦14</li>
				<li>劣币哦15</li>
				<li>劣币哦16</li>
				<li>劣币哦17</li>
				<li>劣币哦18</li>
				<li>劣币哦19</li>
				<li>劣币哦20</li>
				<li>劣币哦21</li>
				<li>劣币哦22</li>
				<li>劣币哦23</li>
				<li>劣币哦24</li>
				<li>劣币哦25</li>
				<li>劣币哦26</li>
				<li>劣币哦27</li>
				<li>劣币哦28</li>
				<li>劣币哦29</li>
				<li>劣币哦30</li>
				<li>劣币哦31</li>
				<li>劣币哦32</li>
				<li>劣币哦33</li>
				<li>劣币哦34</li>
				<li>劣币哦35</li>
				<li>劣币哦36</li>
				<li>劣币哦37</li>
				<li>劣币哦38</li>
				<li>劣币哦39</li>
				<li>劣币哦40</li>
				<li>劣币哦41</li>
				<li>劣币哦42</li>
				<li>劣币哦43</li>
				<li>劣币哦44</li>
				<li>劣币哦45</li>
				<li>劣币哦46</li>
				<li>劣币哦47</li>
				<li>劣币哦48</li>
				<li>劣币哦49</li>
				<li>劣币哦50</li>
				<li>劣币哦51</li>
				<li>劣币哦52</li>
				<li>劣币哦53</li>
				<li>劣币哦54</li>
				<li>劣币哦55</li>
				<li>劣币哦56</li>
				<li>劣币哦57</li>
				<li>劣币哦58</li>
				<li>劣币哦59</li>
				<li>劣币哦60</li>
				<li>劣币哦61</li>
				<li>劣币哦62</li>
				<li>劣币哦63</li>
				<li>劣币哦64</li>
				<li>劣币哦65</li>
				<li>劣币哦66</li>
				<li>劣币哦67</li>
				<li>劣币哦68</li>
				<li>劣币哦69</li>
				<li>劣币哦70</li>
				<li>劣币哦71</li>
				<li>劣币哦72</li>
				<li>劣币哦73</li>
				<li>劣币哦74</li>
				<li>劣币哦75</li>
				<li>劣币哦76</li>
				<li>劣币哦77</li>
				<li>劣币哦78</li>
				<li>劣币哦79</li>
				<li>劣币哦80</li>
				<li>劣币哦81</li>
				<li>劣币哦82</li>
				<li>劣币哦83</li>
				<li>劣币哦84</li>
				<li>劣币哦85</li>
				<li>劣币哦86</li>
				<li>劣币哦87</li>
				<li>劣币哦88</li>
				<li>劣币哦89</li>
				<li>劣币哦90</li>
				<li>劣币哦91</li>
				<li>劣币哦92</li>
				<li>劣币哦93</li>
				<li>劣币哦94</li>
				<li>劣币哦95</li>
				<li>劣币哦96</li>
				<li>劣币哦97</li>
				<li>劣币哦98</li>
				<li>劣币哦99</li>
				<li>劣币哦100</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name:'Category',
		data(){
			return{
				// scroll:null
			}
		},
		methods:{
			btn(){
				console.log('btn');
			}
		},
		create(){
			// this.scroll=new BScroll('.wrapper',{
			//
			// })
		},
		mounted(){
			const bs=new BScroll('.wrapper',{
				probeType:3,//侦测类型
				pullUpLoad:true,
				click:true
			})
			bs.on('scroll',position=>{
				// console.log(position);
			})
			bs.on('pullingUp',()=>{
				console.log('上拉加载');
				setTimeout(()=>{
					bs.finishPullUp()
				},2000)
			})
			// console.log(document.querySelector('.content'));
		}
	}
</script>

<style>
	.wrapper{
		height: 150px;
		background-color: pink;
		overflow: hidden;
		/*overflow-y: auto;*/
	}
</style>
