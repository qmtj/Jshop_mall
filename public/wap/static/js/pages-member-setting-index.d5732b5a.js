(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-setting-index"],{"1e85":function(t,i,e){"use strict";e.r(i);var n=e("ec60"),a=e("3e16");for(var c in a)"default"!==c&&function(t){e.d(i,t,function(){return a[t]})}(c);e("c315");var s,l=e("f0c5"),o=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"02dabbd5",null,!1,n["a"],s);i["default"]=o.exports},"3ced":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".agreement[data-v-02dabbd5]{position:fixed;bottom:%?30?%;width:100%;margin:%?20?% 0;text-align:center}.color-o[data-v-02dabbd5]{margin:0 %?10?%}",""])},"3e16":function(t,i,e){"use strict";e.r(i);var n=e("f264"),a=e.n(n);for(var c in n)"default"!==c&&function(t){e.d(i,t,function(){return n[t]})}(c);i["default"]=a.a},c315:function(t,i,e){"use strict";var n=e("cde7"),a=e.n(n);a.a},cde7:function(t,i,e){var n=e("3ced");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("935f76cc",n,!0,{sourceMap:!1,shadowMode:!1})},ec60:function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"content-top"},[e("v-uni-view",{staticClass:"cell-group right-img"},[e("v-uni-view",{staticClass:"cell-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navigateToHandle("./user_info/index")}}},[e("v-uni-view",{staticClass:"cell-item-hd"},[e("v-uni-view",{staticClass:"cell-hd-title"},[t._v("个人信息")])],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1),e("v-uni-view",{staticClass:"cell-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navigateToHandle("./user_info/password")}}},[e("v-uni-view",{staticClass:"cell-item-hd"},[e("v-uni-view",{staticClass:"cell-hd-title"},[t._v("修改密码")])],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1),e("v-uni-view",{staticClass:"cell-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clearCache.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cell-item-hd"},[e("v-uni-view",{staticClass:"cell-hd-title"},[t._v("清除缓存")])],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1),e("v-uni-view",{staticClass:"cell-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.aboutUs.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cell-item-hd"},[e("v-uni-view",{staticClass:"cell-hd-title"},[t._v("关于我们")])],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1),e("v-uni-view",{staticClass:"cell-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.logOff.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cell-item-hd"},[e("v-uni-view",{staticClass:"cell-hd-title"},[t._v("退出")])],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)],1)],1),e("v-uni-view",{staticClass:"color-9 fsz24 agreement"},[e("v-uni-text",{staticClass:"color-o",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goAgreement()}}},[t._v("《用户协议》")]),t._v("和"),e("v-uni-text",{staticClass:"color-o",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPrivacy()}}},[t._v("《隐私政策》")])],1)],1)},c=[];e.d(i,"b",function(){return a}),e.d(i,"c",function(){return c}),e.d(i,"a",function(){return n})},f264:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={methods:{navigateToHandle:function(t){this.$common.navigateTo(t)},clearCache:function(){var t=this;this.$api.shopConfig(function(i){t.$store.commit("config",i)}),this.$db.del("areaList"),setTimeout(function(){t.$common.successToShow("清除成功")},500)},aboutUs:function(){var t=this.$store.state.config.about_article_id;this.$common.navigateTo("/pages/article/index?id_type=1&id="+t)},logOff:function(){var t=this;this.$common.modelShow("退出","确认退出登录吗?",function(){t.$db.del("userToken"),uni.reLaunch({url:"/pages/index/index"})})},goAgreement:function(){var t=this.$store.state.config.user_agreement_id;this.$common.navigateTo("/pages/article/index?id_type=1&id="+t)},goPrivacy:function(){var t=this.$store.state.config.privacy_policy_id;this.$common.navigateTo("/pages/article/index?id_type=1&id="+t)}}};i.default=n}}]);