import {request} from './request'
//统一管理首页全部请求
export function getHomeMultidata() {
	return request({
		url:'/home/multidata'
	})
}
export function getHomeGoods(type,page) {
	return request({
		url:'/home/data',
		params:{
			type,
			page
		}
	})
}
