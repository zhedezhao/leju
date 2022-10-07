import Mock from 'better-mock'

function kind() {
	Mock.mock('http://leju.bufan.cloud/lejuClient/productCategory/findCategory/1308336521604599809', {
  "success": true,
  "code": 20000,
  "message": "成功",
  "data": {
    "category": {
      "pmsProductCategory": {
        "id": "1308336521604599809",
        "parentId": "0",
        "name": "乐居",
        "level": 0,
        "productCount": 100,
        "productUnit": "件",
        "navStatus": 0,
        "showStatus": 0,
        "sort": 99,
        "icon": "https://bufan-apitown.oss-cn-beijing.aliyuncs.com/bftec/20200922172402990logo..png",
        "keywords": "家具",
        "description": "乐居主分类",
        "createTime": "2020-09-22 17:25:09",
        "modifyTime": "2020-09-22 17:25:09"
      },
      "children": [
        {
          "id": "1308339256886423554",
          "parentId": "1308336521604599809",
          "name": "创意",
          "level": 1,
          "productCount": 100,
          "productUnit": "件",
          "navStatus": 0,
          "showStatus": 0,
          "sort": 99,
          "icon": "http://bufantec.com/site/leju/img/originality.20659c31.png",
          "keywords": "家具创意",
          "description": "乐居创意分类",
          "createTime": "2020-09-22 17:36:01",
          "modifyTime": "2022-09-29 20:49:36",
		  "etitle": "originality",
        },
        {
          "id": "1308339801697153026",
          "parentId": "1308336521604599809",
          "name": "风格",
          "level": 1,
          "productCount": 100,
          "productUnit": "件",
          "navStatus": 0,
          "showStatus": 0,
          "sort": 99,
		  "icon": "http://bufantec.com/site/leju/img/style.90bb530b.png",
          
          "keywords": "家具风格",
          "description": "乐居风格分类",
          "createTime": "2020-09-22 17:38:11",
          "modifyTime": "2022-10-04 22:42:02",
		  "etitle": "style",
        },
        {
          "id": "1308339962452242434",
          "parentId": "1308336521604599809",
          "name": "装饰品",
          "level": 1,
          "productCount": 100,
          "productUnit": "件",
          "navStatus": 0,
          "showStatus": 0,
          "sort": 99,
          "icon": "http://bufantec.com/site/leju/img/decorations.679c594f.png",
          "keywords": "家具饰品",
          "description": "乐居饰品分类",
          "createTime": "2020-09-22 17:38:49",
          "modifyTime": "2022-09-26 15:45:41",
		  "etitle": "decorate",
        },
        {
          "id": "1308340066231906306",
          "parentId": "1308336521604599809",
          "name": "灯具",
          "level": 1,
          "productCount": 100,
          "productUnit": "件",
          "navStatus": 0,
          "showStatus": 0,
          "sort": 99,
          "icon": "http://bufantec.com/site/leju/img/lamp.86b4813f.png",
          "keywords": "家具灯具",
          "description": "乐居灯具分类",
          "createTime": "2020-09-22 17:39:14",
          "modifyTime": "2022-10-04 22:42:30",
		  "etitle": "lamps",
        }
      ]
    }
  }
})
}
module.exports = {
	kind
}