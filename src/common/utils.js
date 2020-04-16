export function debounce(funct,delay){
	let timer=null   //timer在闭包里面 但是在之后函数内有被引用所以不会被销毁
	return (...args)=>{
		if (timer) clearTimeout(timer)
		timer=setTimeout(()=>{
			funct.apply(this,args)
		},delay)
	}
}
