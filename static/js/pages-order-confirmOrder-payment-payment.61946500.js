(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-confirmOrder-payment-payment"],{2659:function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=r(n("1da1")),a=n("8e40"),o=(r(n("2c9b")),r(n("f776"))),u={data:function(){return{orderName:"",paytype:"alipay",id:"",orderInfo:{}}},mixins:[o.default],onLoad:function(e){this.id=e.orderId},onShow:function(){this.checkLogins(this.init)},methods:{init:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.getPreOrderById)(e.id);case 2:e.orderInfo=t.sent.data.orderBase;case 3:case"end":return t.stop()}}),t)})))()},payment:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.payConfirm)({orderId:e.id,payType:"alipay"==e.paytype?1:2});case 2:n=t.sent,1==n.success?(uni.hideLoading(),uni.showToast({title:"支付成功"}),setTimeout((function(){uni.redirectTo({url:"../payResult/payResult?price="+e.orderInfo.totalAmount})}),300)):uni.hideLoading();case 4:case"end":return t.stop()}}),t)})))()},doDeposit:function(){uni.showLoading({title:"支付中..."}),this.checkLogins(this.payment)}}};t.default=u},"2c9b":function(e,t,n){"use strict";function r(e,t){return void 0===t&&(t=15),+parseFloat(Number(e).toPrecision(t))}function i(e){var t=e.toString().split(/[eE]/),n=(t[0].split(".")[1]||"").length-+(t[1]||0);return n>0?n:0}function a(e){if(-1===e.toString().indexOf("e"))return Number(e.toString().replace(".",""));var t=i(e);return t>0?r(Number(e)*Math.pow(10,t)):Number(e)}function o(e){v&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn(e+" is beyond boundary when transfer to integer, the results may not be accurate")}function u(e,t){var n=e[0],r=e[1],i=e.slice(2),a=t(n,r);return i.forEach((function(e){a=t(a,e)})),a}function s(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(e.length>2)return u(e,s);var n=e[0],r=e[1],d=a(n),l=a(r),c=i(n)+i(r),f=d*l;return o(f),f/Math.pow(10,c)}function d(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(e.length>2)return u(e,d);var n=e[0],r=e[1],a=Math.pow(10,Math.max(i(n),i(r)));return(s(n,a)+s(r,a))/a}function l(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(e.length>2)return u(e,l);var n=e[0],r=e[1],a=Math.pow(10,Math.max(i(n),i(r)));return(s(n,a)-s(r,a))/a}function c(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(e.length>2)return u(e,c);var n=e[0],d=e[1],l=a(n),f=a(d);return o(l),o(f),s(l/f,r(Math.pow(10,i(d)-i(n))))}function f(e,t){var n=Math.pow(10,t),r=c(Math.round(Math.abs(s(e,n))),n);return e<0&&0!==r&&(r=s(r,-1)),r}n("4160"),n("c975"),n("fb6a"),n("a9e3"),n("aff5"),n("e6e1"),n("d3b7"),n("acd8"),n("ac1f"),n("25f0"),n("5319"),n("1276"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.strip=r,t.plus=d,t.minus=l,t.times=s,t.divide=c,t.round=f,t.digitLength=i,t.float2Fixed=a,t.enableBoundaryChecking=p,t.default=void 0;var v=!0;function p(e){void 0===e&&(e=!0),v=e}var h={strip:r,plus:d,minus:l,times:s,divide:c,round:f,digitLength:i,float2Fixed:a,enableBoundaryChecking:p},w=h;t.default=w},6693:function(e,t,n){"use strict";n.r(t);var r=n("a576"),i=n("83a8");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("692b");var o,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"7e516e48",null,!1,r["a"],o);t["default"]=s.exports},"692b":function(e,t,n){"use strict";var r=n("cd6f"),i=n.n(r);i.a},"83a8":function(e,t,n){"use strict";n.r(t);var r=n("2659"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},"86ad":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.block[data-v-7e516e48]{width:94%;padding:0 3% %?40?% 3%}.block .title[data-v-7e516e48]{width:100%;font-size:%?34?%}.block .content .orderinfo[data-v-7e516e48]{width:100%;border-bottom:solid %?1?% #eee}.block .content .orderinfo .row[data-v-7e516e48]{width:100%;height:%?90?%;display:flex;align-items:center}.block .content .orderinfo .row .nominal[data-v-7e516e48]{flex-shrink:0;font-size:%?32?%;color:#7d7d7d}.block .content .orderinfo .row .text[data-v-7e516e48]{width:70%;margin-left:%?10?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:%?32?%}.block .content .pay-list[data-v-7e516e48]{width:100%;border-bottom:solid %?1?% #eee}.block .content .pay-list .row[data-v-7e516e48]{width:100%;height:%?120?%;display:flex;align-items:center}.block .content .pay-list .row .left[data-v-7e516e48]{width:%?100?%;flex-shrink:0;display:flex;align-items:center}.block .content .pay-list .row .left uni-image[data-v-7e516e48]{width:%?80?%;height:%?80?%;background-color:initial}.block .content .pay-list .row .center[data-v-7e516e48]{width:100%;font-size:%?30?%}.block .content .pay-list .row .right[data-v-7e516e48]{width:%?100?%;flex-shrink:0;display:flex;justify-content:flex-end}.pay[data-v-7e516e48]{margin-top:%?20?%;width:100%;display:flex;justify-content:center;flex-wrap:wrap}.pay .btn[data-v-7e516e48]{width:70%;height:%?80?%;border-radius:%?80?%;display:flex;justify-content:center;align-items:center;color:#fff;background-color:#354e44;box-shadow:%?0?% %?5?% %?10?% rgba(0,0,0,.2)}.pay .tis[data-v-7e516e48]{margin-top:%?10?%;width:100%;font-size:%?24?%;display:flex;justify-content:center;align-items:baseline;color:#999}.pay .tis .terms[data-v-7e516e48]{color:#5a9ef7}',""]),e.exports=t},"8e40":function(e,t,n){"use strict";var r=n("4ea4");n("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.getPreOrderById=a,t.addConfirmOrder=o,t.payConfirm=u,t.findAllOrders=s,t.cancelOrder=l,t.receiveDone=c,t.deleteOrder=f,t.getCompanyAddrss=p,t.addOrderReturnApply=h,t.orderReturnApplys=w,t.orderReturnInfo=g,t._clearAllOrders=y,t.findOrdersByPage=d,t._clearOrderFocus=v;var i=r(n("3fea"));function a(e){return(0,i.default)({url:"/lejuClient/order/getPreOrderById/".concat(e),method:"get"})}function o(e){return(0,i.default)({url:"/lejuClient/order/addConfirmOrder",method:"post",data:e})}function u(e){return(0,i.default)({url:"/lejuClient/order/payConfirm",method:"post",data:e})}function s(e){return(0,i.default)({url:"/lejuClient/order/findAllOrders",method:"get",data:e})}function d(e,t,n){return(0,i.default)({url:"/lejuClient/order/findOrdersByPage/".concat(e,"/").concat(t),method:"get",data:n})}function l(e){return(0,i.default)({url:"/lejuClient/order/cancelOrder/".concat(e),method:"post"})}function c(e){return(0,i.default)({url:"/lejuClient/order/receiveDone",method:"post",data:e})}function f(e,t){return(0,i.default)({url:"/lejuClient/order/deleteOrder/".concat(e),method:"delete",data:t})}function v(e){return(0,i.default)({url:"/lejuClient/order/_clearOrderFocus?orderId=".concat(e),method:"post"})}function p(e){return(0,i.default)({url:"/lejuClient/orderReturn/getCompanyAddrss",method:"get",data:e})}function h(e){return(0,i.default)({url:"/lejuClient/orderReturn/addOrderReturnApply",method:"post",data:e})}function w(e){return(0,i.default)({url:"/lejuClient/orderReturn/orderReturnApplys",method:"get",data:e})}function g(e){return(0,i.default)({url:"/lejuClient/orderReturn/".concat(e),method:"get"})}function y(e){return(0,i.default)({url:"/lejuClient/order/_clearAllOrders?sign=OMG",method:"get"})}},a576:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"block"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"orderinfo"},[n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"nominal"},[e._v("订单编号:")]),n("v-uni-view",{staticClass:"text"},[e._v(e._s(e.orderInfo.orderSn))])],1),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"nominal"},[e._v("订单金额:")]),n("v-uni-view",{staticClass:"text"},[e._v(e._s(e.orderInfo.totalAmount)+"元")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"block"},[n("v-uni-view",{staticClass:"title"},[e._v("选择支付方式")]),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"pay-list"},[n("v-uni-view",{staticClass:"row",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.paytype="alipay"}}},[n("v-uni-view",{staticClass:"left"},[n("v-uni-image",{attrs:{src:"/static/icons/alipay.png"}})],1),n("v-uni-view",{staticClass:"center"},[e._v("支付宝支付")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-radio",{attrs:{checked:"alipay"==e.paytype,color:"#354E44"}})],1)],1),n("v-uni-view",{staticClass:"row",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.paytype="wxpay"}}},[n("v-uni-view",{staticClass:"left"},[n("v-uni-image",{attrs:{src:"/static/icons/wxpay.png"}})],1),n("v-uni-view",{staticClass:"center"},[e._v("微信支付")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-radio",{attrs:{checked:"wxpay"==e.paytype,color:"#354E44"}})],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"pay"},[n("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.doDeposit.apply(void 0,arguments)}}},[e._v("立即支付")]),n("v-uni-view",{staticClass:"tis"},[e._v("点击立即支付，即代表您同意"),n("v-uni-view",{staticClass:"terms"},[e._v("《条款协议》")])],1)],1)],1)},a=[]},aff5:function(e,t,n){var r=n("23e7");r({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},cd6f:function(e,t,n){var r=n("86ad");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("e63fd13e",r,!0,{sourceMap:!1,shadowMode:!1})},e6e1:function(e,t,n){var r=n("23e7");r({target:"Number",stat:!0},{MIN_SAFE_INTEGER:-9007199254740991})},f776:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={methods:{checkLogins:function(e){this.checkHasLogined()&&e()},checkHasLogined:function(){var e=uni.getStorageSync("leju_token");return!!e||(uni.showModal({title:"登录提示",content:"暂未登录，是否立即登录",success:function(e){e.confirm?uni.navigateTo({url:"/pages/user/login/login"}):uni.showToast({title:"您取消了"})}}),!1)}}},i=r;t.default=i}}]);