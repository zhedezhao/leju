## 乐居
乐居移动端,为年轻潮流时尚主力提供轻奢简约的家居类购物app，总计20多个页面。

uni-app实现,可以发布到小程序、h5、安卓、ios。

实测多端暂无问题

###  乐居主要实现的功能

+ 网络请求封装，项目开发上线域名自动切换

+ 登录注册实现

+ 页面鉴权操作

+ 移动端常见下拉刷新、上拉加载等

+ 富文本、三级联动、双向绑定等

+ 商品展示、商品排序等

+ 购物车实现(全选反选、购物车删除、总价计算等)

+ 本地实现商品收藏、文章收藏等

+ 完整的商品购买流程(商品购买、生成订单、订单确认、地址选择、商品支付等)

+ 完整的订单流程(取消未支付订单、订单支付、订单发货、订单收货、退单等)

+ 完整的退单流程(申请退单、退单原因、图片描述等、退单处理等)

+ 兼容多端的一次上传多张图片(上传时对图片数量、大小等做限制)

+ 微信小程序端

  - 自定义导航栏

  -  分享功能实现
  - 客服功能实现
  - 获取手机号及手机号解密操作
  - 指纹识别操作
  - 拨打电话操作
  - 小程序分包(解决小程序最大只能2m的限制)及分包之后的页面路径跳转

+ app端

  - 微信第三方登录
  - app端推送
  - 指纹识别操作
  - 拨打电话操作

+ 。。。



### 乐居项目 用到的组件

+ parser 
+ evan-checkbox   
包含 uni-transition、uni-popup、uni-icons、evan-checkbox-popup、evan-checkbox-group、evan-checkbox

### 项目打包

### 项目分包

项目引入uni.scss文件报错

https://ask.dcloud.net.cn/article/38131
