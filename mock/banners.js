import Mock from 'better-mock'

function banners() {
	Mock.mock('http://leju.bufan.cloud/lejuClient/home/bannerAds', {
		"success": true,
		"code": 20000,
		"message": "成功",
		"data": {
			"items": [{
					"id": "1",
					"pic": "http://bufantec.com/site/leju/img/banner2.4c80fea6.png",
					// "pic": "https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20220929211421752adaf2edda3cc7cd9a76ce21125887138ba0e91c1.jpeg",
				},
				{
					"id": "2",
					"pic": "http://bufantec.com/site/leju/img/banner1.f1171d17.png",
				},
				
			]
		}
	})
}
module.exports = {
	banners
}
