export function debounce(funct,delay){
	let timer=null   //timer在闭包里面 但是在之后函数内有被引用所以不会被销毁
	return (...args)=>{
		if (timer) clearTimeout(timer)
		timer=setTimeout(()=>{
			funct.apply(this,args)
		},delay)
	}
}
export function formatDate(date, fmt) {
	//获取年份
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	//获取m+ d+ h+ m+ s+
	/*
		M+   :正则表达式的一个规则  这里的'+'表示不确定M的个数（可能一个可能多个）
	* */
	let o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	};
	for (let k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			let str = o[k] + '';
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
		}
	}
	return fmt;
};
function padLeftZero (str) {
	return ('00' + str).substr(str.length);
};
