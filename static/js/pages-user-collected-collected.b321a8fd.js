(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-collected-collected"],{"1a0d":function(t,o,n){var i=n("f274");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("44e75d4e",i,!0,{sourceMap:!1,shadowMode:!1})},"33c5":function(t,o,n){"use strict";var i=n("4ea4");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=i(n("f776")),e={name:"GoodsColl",data:function(){return{goodsList:[]}},mixins:[a.default],onShow:function(){var t=uni.getStorageSync("collectList");this.goodsList=t||[]},methods:{goInfo:function(t){uni.navigateTo({url:"/kindPackage/list/info/info?productId=".concat(t)})}}};o.default=e},"45ed":function(t,o,n){"use strict";n.r(o);var i=n("33c5"),a=n.n(i);for(var e in i)"default"!==e&&function(t){n.d(o,t,(function(){return i[t]}))}(e);o["default"]=a.a},"4f51":function(t,o,n){"use strict";var i=n("1a0d"),a=n.n(i);a.a},a3ce:function(t,o,n){"use strict";n.r(o);var i=n("c450"),a=n("45ed");for(var e in a)"default"!==e&&function(t){n.d(o,t,(function(){return a[t]}))}(e);n("4f51");var s,c=n("f0c5"),d=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"52a327ac",null,!1,i["a"],s);o["default"]=d.exports},c450:function(t,o,n){"use strict";var i;n.d(o,"b",(function(){return a})),n.d(o,"c",(function(){return e})),n.d(o,"a",(function(){return i}));var a=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("v-uni-view",{staticClass:"goods-coll-main"},[n("v-uni-view",{staticClass:"goods-list"},[t._l(t.goodsList,(function(o){return t.goodsList.length>0?n("v-uni-view",{key:o.id,staticClass:"goods-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goInfo(o.id)}}},[n("v-uni-image",{staticClass:"img",attrs:{src:o.pic,alt:!0}}),n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"desc"},[t._v(t._s(o.name))]),n("v-uni-view",{staticClass:"text"},[n("span",{staticClass:"text-save-count"},[t._v(t._s(o.nums)+"收藏")]),n("span",{staticClass:"text-price"},[t._v("¥ "+t._s(o.price))])])],1)],1):t._e()})),0==t.goodsList.length?n("v-uni-view",[t._v("暂无数据")]):t._e()],2)],1)},e=[]},f274:function(t,o,n){var i=n("24fb");o=i(!1),o.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-52a327ac]{background:#f1ece7}.goods-coll-main .goods-list[data-v-52a327ac]{margin:%?40?% %?30?%;box-sizing:border-box}.goods-coll-main .goods-list .goods-item[data-v-52a327ac]{display:flex;margin:%?40?% auto;box-sizing:border-box;background:#fff;border-radius:%?8?%;padding:%?30?%}.goods-coll-main .goods-list .goods-item p[data-v-52a327ac]{text-align:left}.goods-coll-main .goods-list .goods-item .img[data-v-52a327ac]{width:%?160?%;height:%?160?%;border-radius:%?16?%;margin-right:%?40?%}.goods-coll-main .goods-list .goods-item .info[data-v-52a327ac]{display:flex;flex-direction:column;width:%?592?%;justify-content:space-around;font-size:%?24?%;color:#494949;line-height:%?36?%}.goods-coll-main .goods-list .goods-item .info .desc[data-v-52a327ac]{text-align:left}.goods-coll-main .goods-list .goods-item .info .text[data-v-52a327ac]{display:flex;justify-content:space-between}.goods-coll-main .goods-list .goods-item .info .text .text-price[data-v-52a327ac]{font-size:%?32?%;color:#1c4b47;font-weight:600}body.?%PAGE?%[data-v-52a327ac]{background:#f1ece7}',""]),t.exports=o},f776:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i={methods:{checkLogins:function(t){this.checkHasLogined()&&t()},checkHasLogined:function(){var t=uni.getStorageSync("leju_token");return!!t||(uni.showModal({title:"登录提示",content:"暂未登录，是否立即登录",success:function(t){t.confirm?uni.navigateTo({url:"/pages/user/login/login"}):uni.showToast({title:"您取消了"})}}),!1)}}},a=i;o.default=a}}]);