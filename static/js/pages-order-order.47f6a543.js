(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-order"],{"0e6d":function(t,e,r){"use strict";r.r(e);var n=r("5222"),a=r("9661");for(var i in a)"default"!==i&&function(t){r.d(e,t,(function(){return a[t]}))}(i);r("f4f7");var o,d=r("f0c5"),s=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"e5587554",null,!1,n["a"],o);e["default"]=s.exports},2909:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=d(r("6005")),a=d(r("db90")),i=d(r("06c5")),o=d(r("3427"));function d(t){return t&&t.__esModule?t:{default:t}}function s(t){return(0,n.default)(t)||(0,a.default)(t)||(0,i.default)(t)||(0,o.default)()}},"2ff9":function(t,e,r){"use strict";var n=r("4ea4");r("99af"),r("4de4"),r("4160"),r("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(r("2909"));r("96cf");var i=n(r("1da1")),o=n(r("49a6")),d=r("b4ef"),s=n(r("3ddb")),c={mixins:[o.default],components:{uniLoadMore:s.default},data:function(){return{orderList:[],start:1,limit:10,totalPage:100,more:"more",orderReturnList:[],current:0,headItems:[{name:"待付款",value:"0"},{name:"已付款",value:"1"},{name:"已发货",value:"2"},{name:"已收货",value:"3"},{name:"售后",value:"9"}]}},filters:{statusText:function(t){return 0==t?"未付款":1==t?"已付款,等待发货":2==t?"已发货":3==t?"已收货":4==t?"已退单":"无效订单"},orderProcessText:function(t){var e="等待处理";switch(JSON.stringify(t)){case"0":e="等待处理";break;case"1":e="确认退货,等待用户发货";break;case"2":e="已退款";break;case"3":e="已拒绝";break;case"9":e="拒绝退货";break;default:break}return e}},computed:{orderLists:function(){var t=this;return 9==this.current?this.orderReturnList:this.orderList.filter((function(e){return 3==t.current?3==e.order.status||4==e.order.status:e.order.status==t.current}))}},methods:{god:function(){(0,d._clearAllOrders)()},goBackInfo:function(t){uni.navigateTo({url:"/orderPackage/orderBackInfo/orderBackInfo?backOrder=".concat(t)})},goOrderBack:function(t){uni.navigateTo({url:"/orderPackage/orderBack/orderBack?id=".concat(t.orderId,"&skuid=").concat(t.id)})},del:function(t){var e=this;(0,d._clearOrderFocus)(t.order.id).then((function(t){1==t.success&&(uni.showToast({title:"删除成功"}),e.clear(),setTimeout((function(){e.init()}),1e3))}))},selectCurrentTab:function(t){this.current=t,9==t||this.clear(),this.checkLogins(this.init)},clear:function(){this.start=1,this.limit=10,this.orderList=[]},allDone:function(t){var e=this;(0,d.receiveDone)({orderId:t.order.id}).then((function(t){t.success&&(uni.showToast({title:"确认收货成功!",duration:1e3}),e.clear(),setTimeout((function(){e.init()}),1e3))}))},cancleOrder:function(t){var e=this;(0,d.cancelOrder)(t).then((function(t){t.success&&(uni.showToast({title:"取消订单成功!",duration:1e3}),e.init())}))},goPay:function(t){uni.navigateTo({url:"/pages/order/confirmOrder/confirmOrder?id="+t.order.id})},init:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var r,n,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中"}),t.more="loading",e.next=4,(0,d.findAllOrders)();case 4:if(n=e.sent.data,console.log(n),i=n.orderList,!(i.length>500)){e.next=11;break}return uni.showToast({title:"警告,订单数量过多，已做清空处理,请重新购买",icon:"none"}),t.god(),e.abrupt("return");case 11:return i.forEach((function(t){t.items.forEach((function(t){"string"!=t.productAttr&&(t.productAttr=JSON.parse(t.productAttr))}))})),e.next=14,(0,d.orderReturnApplys)();case 14:o=e.sent.data.items,o.forEach((function(t){"string"!=t.productAttr&&(t.productAttr=JSON.parse(t.productAttr))})),t.orderReturnList=o,(r=t.orderList).push.apply(r,(0,a.default)(i)),t.start++,t.more="more",uni.hideLoading();case 21:case"end":return e.stop()}}),e)})))()}},onLoad:function(t){this.current=t.type},onShow:function(){this.orderList=[],this.orderReturnList=[],this.checkLogins(this.init)}};e.default=c},3427:function(t,e,r){"use strict";function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},"3ddb":function(t,e,r){"use strict";r.r(e);var n=r("4c1a"),a=r("a53f");for(var i in a)"default"!==i&&function(t){r.d(e,t,(function(){return a[t]}))}(i);r("773a");var o,d=r("f0c5"),s=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"578e2c97",null,!1,n["a"],o);e["default"]=s.exports},4735:function(t,e,r){"use strict";r("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync().platform,a={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},iconSize:{type:Number,default:24},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{webviewHide:!1,platform:n}},computed:{iconSnowWidth:function(){return console.log(2*(Math.floor(this.iconSize/24)||1)),2*(Math.floor(this.iconSize/24)||1)}},mounted:function(){},methods:{onClick:function(){this.$emit("clickLoadMore",{detail:{status:this.status}})}}};e.default=a},"49a6":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={methods:{checkLogins:function(t){this.checkHasLogined()&&t()},checkHasLogined:function(){var t=uni.getStorageSync("leju_token");return!!t||(uni.showModal({title:"登录提示",content:"暂未登录，是否立即登录",success:function(t){t.confirm?uni.navigateTo({url:"/pages/user/login/login"}):uni.showToast({title:"您取消了"})}}),!1)}}},a=n;e.default=a},"4c1a":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"uni-load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[!t.webviewHide&&("circle"===t.iconType||"auto"===t.iconType&&"android"===t.platform)&&"loading"===t.status&&t.showIcon?r("svg",{staticClass:"uni-load-more__img uni-load-more__img--android-H5",style:{width:t.iconSize+"px",height:t.iconSize+"px"},attrs:{width:"24",height:"24",viewBox:"25 25 50 50"}},[r("circle",{style:{color:t.color},attrs:{cx:"50",cy:"50",r:"20",fill:"none","stroke-width":3}})]):!t.webviewHide&&"loading"===t.status&&t.showIcon?r("v-uni-view",{staticClass:"uni-load-more__img uni-load-more__img--ios-H5",style:{width:t.iconSize+"px",height:t.iconSize+"px"}},[r("v-uni-image",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZV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",mode:"widthFix"}})],1):t._e(),r("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},i=[]},5222:function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"order-main"},[r("v-uni-view",{staticClass:"head-bar"},t._l(t.headItems,(function(e,n){return r("v-uni-view",{key:e.value,staticClass:"label",class:{active:e.value==t.current},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.selectCurrentTab(e.value)}}},[r("v-uni-view",[t._v(t._s(e.name))])],1)})),1),9!=t.current?r("v-uni-view",{staticClass:"card-list"},[t._l(t.orderLists,(function(e){return t.orderLists.length>0?r("v-uni-view",{key:e.order.id,staticClass:"card"},[r("v-uni-view",{staticClass:"order-title"},[r("v-uni-text",[t._v("订单编号: "+t._s(e.order.orderSn))]),r("v-uni-text",{staticClass:"status"},[t._v(t._s(t._f("statusText")(e.order.status)))])],1),t._l(e.items,(function(n,a){return r("v-uni-view",{key:a,staticClass:"sku-block"},[r("v-uni-navigator",{attrs:{url:"/kindPackage/list/info/info?productId="+n.productId}},[r("v-uni-image",{staticClass:"img",attrs:{src:n.productPic,mode:""}})],1),r("v-uni-view",{staticClass:"info"},[r("v-uni-view",{staticClass:"p1"},[r("v-uni-text",{staticClass:"title"},[t._v(t._s(n.productName))]),r("v-uni-text",{staticClass:"price"},[t._v("¥"+t._s(n.productPrice))])],1),r("v-uni-view",{staticClass:"p2"},[r("v-uni-text",[t._v("编号："+t._s(n.id))]),r("v-uni-text",[t._v("x "+t._s(n.productQuantity))])],1),r("v-uni-view",{staticClass:"p3"},[r("v-uni-view",[t._v("规格："),r("br"),t._l(n.productAttr,(function(e,n){return r("v-uni-text",{key:n,staticStyle:{"margin-right":"10rpx"}},[t._v(t._s(e.key)+" : "+t._s(e.value))])}))],2)],1),r("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2==e.order.status,expression:"item.order.status == 2"}],staticClass:"p4"},[0==n.isReturn?r("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goOrderBack(n)}}},[t._v("退货")]):t._e(),1==n.isReturn?r("v-uni-text",{staticStyle:{color:"red"}},[t._v("退货中")]):t._e()],1)],1)],1)})),r("div",{staticClass:"total-price"},[r("v-uni-text",[t._v("时间: "+t._s(e.order.createTime))]),r("v-uni-text",[t._v("合计: ¥"+t._s(e.order.totalAmount))])],1),r("div",{staticClass:"btns"},[0==t.current?r("div",{staticClass:"btn btn-cancel-order",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.cancleOrder(e.order.id)}}},[t._v("取消订单")]):t._e(),0==t.current?r("div",{staticClass:"btn btn-pay",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.goPay(e)}}},[t._v("付款")]):t._e(),2==t.current?r("div",{staticClass:"btn btn-receive",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.allDone(e)}}},[t._v("确认收货")]):t._e(),e.order.status>=3?r("div",{staticClass:"btn btn-closed",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.del(e)}}},[t._v("订单已关闭,删除记录")]):t._e()])],2):t._e()})),t.orderLists.length<=0?r("v-uni-view",[t._v("暂无数据")]):t._e()],2):r("v-uni-view",{staticClass:"card-list"},[t._l(t.orderLists,(function(e,n){return t.orderLists.length>0?r("v-uni-view",{key:n,staticClass:"card"},[r("v-uni-view",{staticClass:"order-title"},[r("v-uni-text",[t._v("订单编号: "+t._s(e.orderSn))]),r("v-uni-text",{staticClass:"status",style:{color:2==e.status||3==e.status?"red":""},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.goBackInfo(e.id)}}},[t._v(t._s(t._f("orderProcessText")(e.status)))])],1),r("v-uni-view",{staticClass:"sku-block"},[r("v-uni-navigator",{attrs:{url:"/kindPackage/list/info/info?productId="+e.productId}},[r("v-uni-image",{staticClass:"img",attrs:{src:e.productPic,mode:""}})],1),r("v-uni-view",{staticClass:"info"},[r("v-uni-view",{staticClass:"p1"},[r("v-uni-text",{staticClass:"title"},[t._v(t._s(e.productName))]),r("v-uni-text",{staticClass:"price"},[t._v("¥"+t._s(e.productPrice))])],1),r("v-uni-view",{staticClass:"p2"},[r("v-uni-text",[t._v("编号："+t._s(e.id))]),r("v-uni-text",[t._v("x "+t._s(e.productCount))])],1),r("v-uni-view",{staticClass:"p3"},[r("v-uni-view",[t._v("规格："),r("br"),t._l(e.productAttr,(function(e,n){return r("v-uni-text",{key:n,staticStyle:{"margin-right":"10rpx"}},[t._v(t._s(e.key)+" : "+t._s(e.value))])}))],2)],1)],1)],1),r("div",{staticClass:"total-price"},[r("v-uni-text",[t._v("时间: "+t._s(e.createTime))]),r("v-uni-text",[t._v("合计: ¥"+t._s(e.returnAmount))])],1)],1):t._e()})),0==t.orderLists.length?r("v-uni-view",[t._v("暂无数据")]):t._e()],2)],1)},i=[]},"5e42":function(t,e,r){var n=r("7c0a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=r("4f06").default;a("226ab781",n,!0,{sourceMap:!1,shadowMode:!1})},6005:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var n=a(r("6b75"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t){if(Array.isArray(t))return(0,n.default)(t)}},"773a":function(t,e,r){"use strict";var n=r("e6ef"),a=r.n(n);a.a},"7c0a":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.order-main .head-bar[data-v-e5587554]{width:100%;overflow-y:auto;position:fixed;left:0;top:0;top:%?80?%;display:flex;justify-content:space-around;width:100%;height:%?62?%;padding-top:%?14?%;background-color:#354e44;color:#fff;font-size:%?30?%;line-height:%?62?%;z-index:999}.order-main .head-bar .label uni-radio[data-v-e5587554]{display:none}.order-main .head-bar .label.active[data-v-e5587554]{border-bottom:%?2?% solid #dd524d;color:#dd524d}.order-main .card-list[data-v-e5587554]{margin-top:%?130?%}.order-main .card-list .card[data-v-e5587554]{width:%?672?%;box-sizing:border-box;padding:%?36?%;border-radius:%?24?%;background-color:#fff;margin:%?30?% auto;font-size:%?24?%;color:#3e3e3e}.order-main .card-list .card .order-title[data-v-e5587554]{line-height:%?33?%;display:flex;justify-content:space-between;border-bottom:1px solid #f1ece7;padding-bottom:%?30?%}.order-main .card-list .card .order-title .status[data-v-e5587554]{color:#034c46}.order-main .card-list .card .sku-block[data-v-e5587554]{display:flex;justify-content:flex-start;border-bottom:1px solid #f1ece7;padding:%?30?% 0}.order-main .card-list .card .sku-block .img[data-v-e5587554]{width:%?162?%;height:%?162?%;flex-shrink:0;background-color:#8f8f94}.order-main .card-list .card .sku-block .info[data-v-e5587554]{width:%?470?%;margin-left:%?28?%}.order-main .card-list .card .sku-block .info .p1[data-v-e5587554],\n.order-main .card-list .card .sku-block .info .p2[data-v-e5587554]{display:flex;justify-content:space-between;align-items:center}.order-main .card-list .card .sku-block .info .p1[data-v-e5587554]{font-size:%?26?%;line-height:37px}.order-main .card-list .card .sku-block .info .p1 .title[data-v-e5587554]{color:#3e3e3e}.order-main .card-list .card .sku-block .info .p1 .price[data-v-e5587554]{colro:#8d8d8d}.order-main .card-list .card .sku-block .info .p2[data-v-e5587554],\n.order-main .card-list .card .sku-block .info .p3[data-v-e5587554]{font-size:%?22?%;color:#8d8d8d;line-height:%?30?%;margin-top:%?5?%}.order-main .card-list .card .sku-block .info .p4[data-v-e5587554]{text-align:right;margin-top:%?10?%;color:#8d8d8d;text-decoration:underline}.order-main .card-list .card .total-price[data-v-e5587554]{font-size:%?26?%;line-height:%?37?%;text-align:right;margin-top:%?14?%;display:flex;justify-content:space-between}.order-main .card-list .card .btns[data-v-e5587554]{margin-top:%?20?%;display:flex;justify-content:flex-end}.order-main .card-list .card .btns .btn[data-v-e5587554]{width:%?124?%;height:%?50?%;border:1px solid #2d4f43;font-size:%?26?%;border-radius:%?10?%;color:#2d4f43;text-align:center;line-height:%?50?%;margin-left:%?32?%}.order-main .card-list .card .btns .btn.btn-closed[data-v-e5587554]{width:auto;padding:0 1em;border-color:#dd524d}',""]),t.exports=e},9661:function(t,e,r){"use strict";r.r(e);var n=r("2ff9"),a=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},a53f:function(t,e,r){"use strict";r.r(e);var n=r("4735"),a=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},b4ef:function(t,e,r){"use strict";var n=r("4ea4");r("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.getPreOrderById=i,e.addConfirmOrder=o,e.payConfirm=d,e.findAllOrders=s,e.cancelOrder=u,e.receiveDone=l,e.deleteOrder=f,e.getCompanyAddrss=m,e.addOrderReturnApply=g,e.orderReturnApplys=h,e.orderReturnInfo=p,e._clearAllOrders=b,e.findOrdersByPage=c,e._clearOrderFocus=v;var a=n(r("c159"));function i(t){return(0,a.default)({url:"/lejuClient/order/getPreOrderById/".concat(t),method:"get"})}function o(t){return(0,a.default)({url:"/lejuClient/order/addConfirmOrder",method:"post",data:t})}function d(t){return(0,a.default)({url:"/lejuClient/order/payConfirm",method:"post",data:t})}function s(t){return(0,a.default)({url:"/lejuClient/order/findAllOrders",method:"get",data:t})}function c(t,e,r){return(0,a.default)({url:"/lejuClient/order/findOrdersByPage/".concat(t,"/").concat(e),method:"get",data:r})}function u(t){return(0,a.default)({url:"/lejuClient/order/cancelOrder/".concat(t),method:"post"})}function l(t){return(0,a.default)({url:"/lejuClient/order/receiveDone",method:"post",data:t})}function f(t,e){return(0,a.default)({url:"/lejuClient/order/deleteOrder/".concat(t),method:"delete",data:e})}function v(t){return(0,a.default)({url:"/lejuClient/order/_clearOrderFocus?orderId=".concat(t),method:"post"})}function m(t){return(0,a.default)({url:"/lejuClient/orderReturn/getCompanyAddrss",method:"get",data:t})}function g(t){return(0,a.default)({url:"/lejuClient/orderReturn/addOrderReturnApply",method:"post",data:t})}function h(t){return(0,a.default)({url:"/lejuClient/orderReturn/orderReturnApplys",method:"get",data:t})}function p(t){return(0,a.default)({url:"/lejuClient/orderReturn/".concat(t),method:"get"})}function b(t){return(0,a.default)({url:"/lejuClient/order/_clearAllOrders?sign=OMG",method:"get"})}},b799:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-load-more[data-v-578e2c97]{display:flex;flex-direction:row;height:40px;align-items:center;justify-content:center}.uni-load-more__text[data-v-578e2c97]{font-size:15px}.uni-load-more__img[data-v-578e2c97]{width:24px;height:24px;margin-right:8px}.uni-load-more__img--nvue[data-v-578e2c97]{color:#666}.uni-load-more__img--android[data-v-578e2c97],\n.uni-load-more__img--ios[data-v-578e2c97]{width:24px;height:24px;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.uni-load-more__img--android[data-v-578e2c97]{-webkit-animation:loading-ios 1s 0s linear infinite;animation:loading-ios 1s 0s linear infinite}@-webkit-keyframes loading-android-data-v-578e2c97{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-android-data-v-578e2c97{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.uni-load-more__img--ios-H5[data-v-578e2c97]{position:relative;-webkit-animation:loading-ios-H5-data-v-578e2c97 1s 0s step-end infinite;animation:loading-ios-H5-data-v-578e2c97 1s 0s step-end infinite}.uni-load-more__img--ios-H5 > uni-image[data-v-578e2c97]{position:absolute;width:100%;height:100%;left:0;top:0}@-webkit-keyframes loading-ios-H5-data-v-578e2c97{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}8%{-webkit-transform:rotate(30deg);transform:rotate(30deg)}16%{-webkit-transform:rotate(60deg);transform:rotate(60deg)}24%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}32%{-webkit-transform:rotate(120deg);transform:rotate(120deg)}40%{-webkit-transform:rotate(150deg);transform:rotate(150deg)}48%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}56%{-webkit-transform:rotate(210deg);transform:rotate(210deg)}64%{-webkit-transform:rotate(240deg);transform:rotate(240deg)}73%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}82%{-webkit-transform:rotate(300deg);transform:rotate(300deg)}91%{-webkit-transform:rotate(330deg);transform:rotate(330deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-ios-H5-data-v-578e2c97{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}8%{-webkit-transform:rotate(30deg);transform:rotate(30deg)}16%{-webkit-transform:rotate(60deg);transform:rotate(60deg)}24%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}32%{-webkit-transform:rotate(120deg);transform:rotate(120deg)}40%{-webkit-transform:rotate(150deg);transform:rotate(150deg)}48%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}56%{-webkit-transform:rotate(210deg);transform:rotate(210deg)}64%{-webkit-transform:rotate(240deg);transform:rotate(240deg)}73%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}82%{-webkit-transform:rotate(300deg);transform:rotate(300deg)}91%{-webkit-transform:rotate(330deg);transform:rotate(330deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.uni-load-more__img--android-H5[data-v-578e2c97]{-webkit-animation:loading-android-H5-rotate-data-v-578e2c97 2s linear infinite;animation:loading-android-H5-rotate-data-v-578e2c97 2s linear infinite;-webkit-transform-origin:center center;transform-origin:center center}.uni-load-more__img--android-H5 > circle[data-v-578e2c97]{display:inline-block;-webkit-animation:loading-android-H5-dash-data-v-578e2c97 1.5s ease-in-out infinite;animation:loading-android-H5-dash-data-v-578e2c97 1.5s ease-in-out infinite;stroke:currentColor;stroke-linecap:round}@-webkit-keyframes loading-android-H5-rotate-data-v-578e2c97{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-android-H5-rotate-data-v-578e2c97{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loading-android-H5-dash-data-v-578e2c97{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}100%{stroke-dasharray:90,150;stroke-dashoffset:-120}}@keyframes loading-android-H5-dash-data-v-578e2c97{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}100%{stroke-dasharray:90,150;stroke-dashoffset:-120}}',""]),t.exports=e},db90:function(t,e,r){"use strict";function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},e6ef:function(t,e,r){var n=r("b799");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=r("4f06").default;a("7670b06a",n,!0,{sourceMap:!1,shadowMode:!1})},f4f7:function(t,e,r){"use strict";var n=r("5e42"),a=r.n(n);a.a}}]);