(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"056a":function(t,r,e){"use strict";(function(t){e("b186");n(e("66fd"));var r=n(e("45de"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(r.default)}).call(this,e("543d")["createPage"])},"20eb":function(t,r,e){"use strict";e.r(r);var n=e("4c3e"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(r,t,(function(){return n[t]}))}(i);r["default"]=o.a},"45de":function(t,r,e){"use strict";e.r(r);var n=e("46b0"),o=e("20eb");for(var i in o)"default"!==i&&function(t){e.d(r,t,(function(){return o[t]}))}(i);e("8ce6");var a,u=e("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"080089ce",null,!1,n["a"],a);r["default"]=c.exports},"46b0":function(t,r,e){"use strict";var n;e.d(r,"b",(function(){return o})),e.d(r,"c",(function(){return i})),e.d(r,"a",(function(){return n}));var o=function(){var t=this,r=t.$createElement,e=(t._self._c,9!=t.current?t.__map(t.orderLists,(function(r,e){var n=t.__get_orig(r),o=t.orderLists.length>0?t._f("statusText")(r.order.status):null;return{$orig:n,f0:o}})):null),n=9==t.current?t.__map(t.orderLists,(function(r,e){var n=t.__get_orig(r),o=t.orderLists.length>0?t._f("orderProcessText")(r.status):null;return{$orig:n,f1:o}})):null;t.$mp.data=Object.assign({},{$root:{l0:e,l1:n}})},i=[]},"4c3e":function(t,r,e){"use strict";(function(t){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=a(e("a34a")),o=a(e("2054")),i=e("8300");function a(t){return t&&t.__esModule?t:{default:t}}function u(t){return f(t)||d(t)||s(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,r){if(t){if("string"===typeof t)return l(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,r):void 0}}function d(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function f(t){if(Array.isArray(t))return l(t)}function l(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function h(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void e(s)}u.done?r(c):Promise.resolve(c).then(n,o)}function m(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){h(i,n,o,a,u,"next",t)}function u(t){h(i,n,o,a,u,"throw",t)}a(void 0)}))}}var v=function(){e.e("components/uni-load-more/uni-load-more").then(function(){return resolve(e("0461"))}.bind(null,e)).catch(e.oe)},p={mixins:[o.default],components:{uniLoadMore:v},data:function(){return{orderList:[],start:1,limit:10,totalPage:100,more:"more",orderReturnList:[],current:0,headItems:[{name:"待付款",value:"0"},{name:"已付款",value:"1"},{name:"已发货",value:"2"},{name:"已收货",value:"3"},{name:"售后",value:"9"}]}},filters:{statusText:function(t){return 0==t?"未付款":1==t?"已付款,等待发货":2==t?"已发货":3==t?"已收货":4==t?"已退单":"无效订单"},orderProcessText:function(t){var r="等待处理";switch(JSON.stringify(t)){case"0":r="等待处理";break;case"1":r="确认退货,等待用户发货";break;case"2":r="已退款";break;case"3":r="已拒绝";break;case"9":r="拒绝退货";break;default:break}return r}},computed:{orderLists:function(){var t=this;return 9==this.current?this.orderReturnList:this.orderList.filter((function(r){return 3==t.current?3==r.order.status||4==r.order.status:r.order.status==t.current}))}},methods:{god:function(){(0,i._clearAllOrders)()},goBackInfo:function(r){t.navigateTo({url:"/orderPackage/orderBackInfo/orderBackInfo?backOrder=".concat(r)})},goOrderBack:function(r){t.navigateTo({url:"/orderPackage/orderBack/orderBack?id=".concat(r.orderId,"&skuid=").concat(r.id)})},del:function(r){var e=this;(0,i._clearOrderFocus)(r.order.id).then((function(r){1==r.success&&(t.showToast({title:"删除成功"}),e.clear(),setTimeout((function(){e.init()}),1e3))}))},selectCurrentTab:function(t){this.current=t,9==t||this.clear(),this.checkLogins(this.init)},clear:function(){this.start=1,this.limit=10,this.orderList=[]},allDone:function(r){var e=this;(0,i.receiveDone)({orderId:r.order.id}).then((function(r){r.success&&(t.showToast({title:"确认收货成功!",duration:1e3}),e.clear(),setTimeout((function(){e.init()}),1e3))}))},cancleOrder:function(r){var e=this;(0,i.cancelOrder)(r).then((function(r){r.success&&(t.showToast({title:"取消订单成功!",duration:1e3}),e.init())}))},goPay:function(r){t.navigateTo({url:"/pages/order/confirmOrder/confirmOrder?id="+r.order.id})},init:function(){var r=this;return m(n.default.mark((function e(){var o,a,c,s;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中"}),r.more="loading",e.next=4,(0,i.findAllOrders)();case 4:if(a=e.sent.data,console.log(a),c=a.orderList,!(c.length>500)){e.next=11;break}return t.showToast({title:"警告,订单数量过多，已做清空处理,请重新购买",icon:"none"}),r.god(),e.abrupt("return");case 11:return c.forEach((function(t){t.items.forEach((function(t){"string"!=t.productAttr&&(t.productAttr=JSON.parse(t.productAttr))}))})),e.next=14,(0,i.orderReturnApplys)();case 14:s=e.sent.data.items,s.forEach((function(t){"string"!=t.productAttr&&(t.productAttr=JSON.parse(t.productAttr))})),r.orderReturnList=s,(o=r.orderList).push.apply(o,u(c)),r.start++,r.more="more",t.hideLoading();case 21:case"end":return e.stop()}}),e)})))()}},onLoad:function(t){this.current=t.type},onShow:function(){this.orderList=[],this.orderReturnList=[],this.checkLogins(this.init)}};r.default=p}).call(this,e("543d")["default"])},"8ce6":function(t,r,e){"use strict";var n=e("bdda"),o=e.n(n);o.a},bdda:function(t,r,e){}},[["056a","common/runtime","common/vendor"]]]);