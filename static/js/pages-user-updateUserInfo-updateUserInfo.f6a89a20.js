(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-updateUserInfo-updateUserInfo"],{"29c4":function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"user-center"},[r("v-uni-button",{staticStyle:{float:"right",margin:"10px"},attrs:{type:"default",size:"mini",plain:"true"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.upt.apply(void 0,arguments)}}},[e._v("修改用户信息")]),r("v-uni-view",{staticClass:"item"},[r("v-uni-text",{staticClass:"label"},[e._v("头像")]),e.isUpt?r("v-uni-view",[r("v-uni-image",{staticClass:"avatar",attrs:{src:e.userInfo.icon,mode:""}})],1):r("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[e.img?r("v-uni-image",{staticClass:"avatar",attrs:{src:e.img,mode:""}}):r("v-uni-button",{attrs:{type:"default",size:"mini",plain:"true"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadIcon.apply(void 0,arguments)}}},[e._v("上传头像")])],1)],1),r("v-uni-view",{staticClass:"item"},[r("v-uni-text",{staticClass:"label"},[e._v("用户名")]),e.isUpt?r("v-uni-text",{staticClass:"text"},[e._v(e._s(e.userInfo.username))]):e._e()],1),r("v-uni-view",{staticClass:"item"},[r("v-uni-text",{staticClass:"label"},[e._v("昵称")]),e.isUpt?r("v-uni-text",{staticClass:"text"},[e._v(e._s(e.userInfo.nickname))]):r("v-uni-view",[r("v-uni-input",{staticClass:"ipt",attrs:{type:"text",placeholder:"请输入昵称"},model:{value:e.userInfo.nickname,callback:function(t){e.$set(e.userInfo,"nickname",t)},expression:"userInfo.nickname"}})],1)],1),r("v-uni-view",{staticClass:"item"},[r("v-uni-text",{staticClass:"label"},[e._v("手机号")]),e.isUpt?r("v-uni-text",{staticClass:"text"},[e._v(e._s(e.userInfo.phone))]):r("v-uni-view",[r("v-uni-input",{staticClass:"ipt",attrs:{type:"text",placeholder:"请输入手机号"},model:{value:e.userInfo.phone,callback:function(t){e.$set(e.userInfo,"phone",t)},expression:"userInfo.phone"}})],1)],1),e.isUpt?r("v-uni-button",{staticClass:"btn-logout",attrs:{type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.doLogout.apply(void 0,arguments)}}},[e._v("退出登陆")]):r("v-uni-button",{staticClass:"btn-logout",attrs:{type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.uptUserInfo.apply(void 0,arguments)}}},[e._v("更新")])],1)},o=[]},"49a6":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={methods:{checkLogins:function(e){this.checkHasLogined()&&e()},checkHasLogined:function(){var e=uni.getStorageSync("leju_token");return!!e||(uni.showModal({title:"登录提示",content:"暂未登录，是否立即登录",success:function(e){e.confirm?uni.navigateTo({url:"/pages/user/login/login"}):uni.showToast({title:"您取消了"})}}),!1)}}},i=n;t.default=i},"5cfa":function(e,t,r){"use strict";r.r(t);var n=r("29c4"),i=r("607e");for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);r("c31f");var a,u=r("f0c5"),s=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"53ff1eda",null,!1,n["a"],a);t["default"]=s.exports},"607e":function(e,t,r){"use strict";r.r(t);var n=r("7ad0"),i=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"699e":function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.ipt[data-v-53ff1eda]{text-align:right}.user-center .item[data-v-53ff1eda]{width:100%;display:flex;justify-content:space-between;align-items:center;font-size:%?32?%;line-height:%?94?%;box-sizing:border-box;padding:%?10?% %?30?%;border-bottom:1px solid #e5e5e5}.user-center .item[data-v-53ff1eda]:nth-child(1){margin-top:%?20?%}.user-center .item .avatar[data-v-53ff1eda]{width:%?120?%;height:%?120?%;border-radius:50%}.user-center .item .label[data-v-53ff1eda]{color:#494949}.user-center .item .text[data-v-53ff1eda]{color:#a1a1a1}.user-center .btn-logout[data-v-53ff1eda]{position:fixed;left:50%;bottom:20%;margin-left:%?-185?%;width:%?370?%;height:%?88?%;font-size:%?32?%;color:#fff;text-align:center;line-height:%?88?%;background:#1c4b47;border-radius:8px}',""]),e.exports=t},"6d6a":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.findAllCartItem=f,t.delCartItems=d,t.default=void 0;var i=n(r("c159"));function o(e){return(0,i.default)({url:"/lejuClient/login/doLogin",method:"POST",data:e})}function a(e){return(0,i.default)({url:"/lejuClient/member/register",method:"POST",data:e})}function u(e){return(0,i.default)({url:"/lejuClient/login/getMemberInfo",method:"get",data:e})}function s(e){return(0,i.default)({url:"/lejuClient/login/uploadAvatar",method:"post",data:e})}function c(e){return(0,i.default)({url:"/lejuClient/member/updateMemberInfo",method:"post",data:e})}function l(e){return(0,i.default)({url:"/lejuClient/member/resetPassword/".concat(e),method:"post"})}function f(e){return(0,i.default)({url:"/lejuClient/cart/findAllCartItem",method:"get",data:e})}function d(e){return(0,i.default)({url:"/lejuClient/cart/delCartItems",method:"post",data:e})}var p={doLogin:o,register:a,getMemberInfo:u,uploadAvatar:s,updateMemberInfo:c,resetPassword:l};t.default=p},"7ad0":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r("c39c")),o=n(r("49a6")),a=n(r("6d6a")),u={data:function(){return{userInfo:{},isUpt:!0,img:""}},mixins:[o.default],onShow:function(){this.checkHasLogined()?this.init():this.userInfo={}},methods:{init:function(){var e=uni.getStorageSync("leju_user");this.isUpt=!0,this.userInfo=e},uptUserInfo:function(){var e=this;this.img&&(this.userInfo.icon=this.img),a.default.updateMemberInfo(this.userInfo).then((function(t){1==t.success?(uni.showToast({title:"更新成功,需要重新登录获取最新用户信息"}),setTimeout((function(){e.doLogout()}),1e3)):uni.showToast({title:"更新失败"})}))},upt:function(){this.isUpt=!1},uploadIcon:function(){var e=this;uni.chooseImage({success:function(t){var r=t.tempFilePaths;uni.uploadFile({url:"".concat(i.default,"/lejuClient/login/uploadAvatar"),filePath:r[0],name:"file",formData:{user:"test"},success:function(t){e.img=JSON.parse(t.data).data.fileUrl}})}})},doLogout:function(){uni.clearStorageSync(),uni.showToast({title:"退出成功,跳转到登录页"}),uni.navigateTo({url:"/pages/user/login/login"})}}};t.default=u},b812:function(e,t,r){var n=r("699e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("b9051314",n,!0,{sourceMap:!1,shadowMode:!1})},c159:function(e,t,r){"use strict";var n=r("4ea4");r("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r("c39c")),o=(n(r("d9cc")),function(e){return new Promise((function(t,r){var n={url:i.default+e.url,method:e.method?e.method.toUpperCase():"GET",data:e.data,header:{token:uni.getStorageSync("leju_token")?uni.getStorageSync("leju_token"):""},timeout:5e4,success:function(e){1==e.data.success?t(e.data):20002==e.data.code?uni.showModal({title:"登录提示",content:"登录异常，是否重新登录!",success:function(t){t.confirm?uni.navigateTo({url:"/pages/user/login/login"}):(uni.showToast({title:"您取消了!"}),r(e.data))}}):(uni.showToast({title:e.data.message,icon:"none"}),r(e.data))},fail:function(e){r(e)}};uni.request(n)}))}),a=o;t.default=a},c31f:function(e,t,r){"use strict";var n=r("b812"),i=r.n(n);i.a},c39c:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="";n="http://leju.bufan.cloud";var i=n;t.default=i},d9cc:function(e,t,r){var n;r("99af"),r("4de4"),r("4160"),r("c975"),r("13d5"),r("fb6a"),r("4e82"),r("b64b"),r("d3b7"),r("e25e"),r("ac1f"),r("25f0"),r("5319"),r("1276"),r("159b"),function(t){e.exports=t()}((function(){return function(){function e(t,r,i){function o(u,s){if(!r[u]){if(!t[u]){var c="function"==typeof n&&n;if(!s&&c)return n(u,!0);if(a)return a(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var f=r[u]={exports:{}};t[u][0].call(f.exports,(function(e){var r=t[u][1][e];return o(r||e)}),f,f.exports,e,t,r,i)}return r[u].exports}for(var a="function"==typeof n&&n,u=0;u<i.length;u++)o(i[u]);return o}return e}()({1:[function(e,t,r){"use strict";var n=String.prototype.replace,i=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},{}],2:[function(e,t,r){"use strict";var n=e("./stringify"),i=e("./parse"),o=e("./formats");t.exports={formats:o,parse:i,stringify:n}},{"./formats":1,"./parse":3,"./stringify":4}],3:[function(e,t,r){"use strict";var n=e("./utils"),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},u="utf8=%26%2310003%3B",s="utf8=%E2%9C%93",c=function(e,t){var r,c={},l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,d=l.split(t.delimiter,f),p=-1,v=t.charset;if(t.charsetSentinel)for(r=0;r<d.length;++r)0===d[r].indexOf("utf8=")&&(d[r]===s?v="utf-8":d[r]===u&&(v="iso-8859-1"),p=r,r=d.length);for(r=0;r<d.length;++r)if(r!==p){var h,y,m=d[r],g=m.indexOf("]="),b=-1===g?m.indexOf("="):g+1;-1===b?(h=t.decoder(m,o.decoder,v),y=t.strictNullHandling?null:""):(h=t.decoder(m.slice(0,b),o.decoder,v),y=t.decoder(m.slice(b+1),o.decoder,v)),y&&t.interpretNumericEntities&&"iso-8859-1"===v&&(y=a(y)),i.call(c,h)?c[h]=n.combine(c[h],y):c[h]=y}return c},l=function(e,t,r){for(var n=t,i=e.length-1;i>=0;--i){var o,a=e[i];if("[]"===a&&r.parseArrays)o=[].concat(n);else{o=r.plainObjects?Object.create(null):{};var u="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,s=parseInt(u,10);r.parseArrays||""!==u?!isNaN(s)&&a!==u&&String(s)===u&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(o=[],o[s]=n):o[u]=n:o={0:n}}n=o}return n},f=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,u=o.exec(n),s=u?n.slice(0,u.index):n,c=[];if(s){if(!r.plainObjects&&i.call(Object.prototype,s)&&!r.allowPrototypes)return;c.push(s)}var f=0;while(null!==(u=a.exec(n))&&f<r.depth){if(f+=1,!r.plainObjects&&i.call(Object.prototype,u[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(u[1])}return u&&c.push("["+n.slice(u.index)+"]"),l(c,t,r)}};t.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:o.delimiter,r.depth="number"===typeof r.depth?r.depth:o.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:o.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:o.decoder,r.allowDots="undefined"===typeof r.allowDots?o.allowDots:!!r.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:o.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:o.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:o.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:o.strictNullHandling,"undefined"!==typeof r.charset&&"utf-8"!==r.charset&&"iso-8859-1"!==r.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");if("undefined"===typeof r.charset&&(r.charset=o.charset),""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var i="string"===typeof e?c(e,r):e,a=r.plainObjects?Object.create(null):{},u=Object.keys(i),s=0;s<u.length;++s){var l=u[s],d=f(l,i[l],r);a=n.merge(a,d,r)}return n.compact(a)}},{"./utils":5}],4:[function(e,t,r){"use strict";var n=e("./utils"),i=e("./formats"),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Array.isArray,u=Array.prototype.push,s=function(e,t){u.apply(e,a(t)?t:[t])},c=Date.prototype.toISOString,l={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,indices:!1,serializeDate:function(e){return c.call(e)},skipNulls:!1,strictNullHandling:!1},f=function e(t,r,i,o,a,u,c,f,d,p,v,h,y){var m=t;if("function"===typeof c?m=c(r,m):m instanceof Date&&(m=p(m)),null===m){if(o)return u&&!h?u(r,l.encoder,y):r;m=""}if("string"===typeof m||"number"===typeof m||"boolean"===typeof m||n.isBuffer(m)){if(u){var g=h?r:u(r,l.encoder,y);return[v(g)+"="+v(u(m,l.encoder,y))]}return[v(r)+"="+v(String(m))]}var b,w=[];if("undefined"===typeof m)return w;if(Array.isArray(c))b=c;else{var j=Object.keys(m);b=f?j.sort(f):j}for(var x=0;x<b.length;++x){var O=b[x];a&&null===m[O]||(Array.isArray(m)?s(w,e(m[O],i(r,O),i,o,a,u,c,f,d,p,v,h,y)):s(w,e(m[O],r+(d?"."+O:"["+O+"]"),i,o,a,u,c,f,d,p,v,h,y)))}return w};t.exports=function(e,t){var r=e,a=t?n.assign({},t):{};if(null!==a.encoder&&void 0!==a.encoder&&"function"!==typeof a.encoder)throw new TypeError("Encoder has to be a function.");var u="undefined"===typeof a.delimiter?l.delimiter:a.delimiter,c="boolean"===typeof a.strictNullHandling?a.strictNullHandling:l.strictNullHandling,d="boolean"===typeof a.skipNulls?a.skipNulls:l.skipNulls,p="boolean"===typeof a.encode?a.encode:l.encode,v="function"===typeof a.encoder?a.encoder:l.encoder,h="function"===typeof a.sort?a.sort:null,y="undefined"===typeof a.allowDots?l.allowDots:!!a.allowDots,m="function"===typeof a.serializeDate?a.serializeDate:l.serializeDate,g="boolean"===typeof a.encodeValuesOnly?a.encodeValuesOnly:l.encodeValuesOnly,b=a.charset||l.charset;if("undefined"!==typeof a.charset&&"utf-8"!==a.charset&&"iso-8859-1"!==a.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");if("undefined"===typeof a.format)a.format=i["default"];else if(!Object.prototype.hasOwnProperty.call(i.formatters,a.format))throw new TypeError("Unknown format option provided.");var w,j,x=i.formatters[a.format];"function"===typeof a.filter?(j=a.filter,r=j("",r)):Array.isArray(a.filter)&&(j=a.filter,w=j);var O,C=[];if("object"!==typeof r||null===r)return"";O=a.arrayFormat in o?a.arrayFormat:"indices"in a?a.indices?"indices":"repeat":"indices";var A=o[O];w||(w=Object.keys(r)),h&&w.sort(h);for(var I=0;I<w.length;++I){var _=w[I];d&&null===r[_]||s(C,f(r[_],_,A,c,d,p?v:null,j,h,y,m,x,g,b))}var k=C.join(u),P=!0===a.addQueryPrefix?"?":"";return a.charsetSentinel&&(P+="iso-8859-1"===b?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),k.length>0?P+k:""}},{"./formats":1,"./utils":5}],5:[function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),o=function(e){while(e.length>1){var t=e.pop(),r=t.obj[t.prop];if(Array.isArray(r)){for(var n=[],i=0;i<r.length;++i)"undefined"!==typeof r[i]&&n.push(r[i]);t.obj[t.prop]=n}}},a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r},u=function e(t,r,i){if(!r)return t;if("object"!==typeof r){if(Array.isArray(t))t.push(r);else{if("object"!==typeof t)return[t,r];(i&&(i.plainObjects||i.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!==typeof t)return[t].concat(r);var o=t;return Array.isArray(t)&&!Array.isArray(r)&&(o=a(t,i)),Array.isArray(t)&&Array.isArray(r)?(r.forEach((function(r,o){n.call(t,o)?t[o]&&"object"===typeof t[o]?t[o]=e(t[o],r,i):t.push(r):t[o]=r})),t):Object.keys(r).reduce((function(t,o){var a=r[o];return n.call(t,o)?t[o]=e(t[o],a,i):t[o]=a,t}),o)},s=function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},c=function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(i){return n}},l=function(e,t,r){if(0===e.length)return e;var n="string"===typeof e?e:String(e);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",a=0;a<n.length;++a){var u=n.charCodeAt(a);45===u||46===u||95===u||126===u||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122?o+=n.charAt(a):u<128?o+=i[u]:u<2048?o+=i[192|u>>6]+i[128|63&u]:u<55296||u>=57344?o+=i[224|u>>12]+i[128|u>>6&63]+i[128|63&u]:(a+=1,u=65536+((1023&u)<<10|1023&n.charCodeAt(a)),o+=i[240|u>>18]+i[128|u>>12&63]+i[128|u>>6&63]+i[128|63&u])}return o},f=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var i=t[n],a=i.obj[i.prop],u=Object.keys(a),s=0;s<u.length;++s){var c=u[s],l=a[c];"object"===typeof l&&null!==l&&-1===r.indexOf(l)&&(t.push({obj:a,prop:c}),r.push(l))}return o(t),e},d=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},p=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},v=function(e,t){return[].concat(e,t)};t.exports={arrayToObject:a,assign:s,combine:v,compact:f,decode:c,encode:l,isBuffer:p,isRegExp:d,merge:u}},{}]},{},[2])(2)}))}}]);