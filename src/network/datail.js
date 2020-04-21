import {request} from './request'

export function getDetail(id) {
	return request({
		url:'/detail',
		params:{
			iid:id
		}
	})
}

export function getRecommend() {
	return request({
		url:'/recommend',
	})
}

//收取商品信息
export class GoodsInfo {
	constructor(itemInfo,columns,shopInfo) {
		this.title=itemInfo.title
		this.desc=itemInfo.desc
		this.newPrice=itemInfo.price
		this.oldPrice=itemInfo.oldPrice
		this.discount=itemInfo.discountDesc
		this.realPrice=itemInfo.lowNowPrice
		this.columns=columns
		this.services=shopInfo.services
		this.desc=itemInfo.desc

	}
}

//收取商家信息
export class ShopInfo {
	constructor(shopInfo) {
		this.logo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.fans = shopInfo.cFans;
		this.sells = shopInfo.cSells;
		this.score = shopInfo.score;
		this.goodsCount = shopInfo.cGoods
	}
}

// 尺寸数据
export class GoodsParams {
	constructor(info, rule) {
		//images可能没有值(某些商品有值, 某些没有值)
		this.image = info.images ? info.images[0] : "";
		this.infos = info.set;
		this.sizes = rule.tables;
	}
}
