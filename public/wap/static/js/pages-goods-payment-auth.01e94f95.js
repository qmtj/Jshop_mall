(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-payment-auth"],{1565:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var n={data:function(){return{type:"",openid:"",orderId:"",state:""}},onLoad:function(t){this.orderId=t.order_id,this.money=Number(t.money),this.type=Number(t.type),this.uid=Number(t.uid),this.state=this.$common.getQueryString("state"),this.getCode()},methods:{getCode:function(){var t=this.$common.getQueryString("code");t&&this.getOpenId(t)},getOpenId:function(t){var e=this,i={code:t,scope:2,state:this.state};this.$api.getOpenId(i,function(t){t.status?(e.openid=t.data.openid,e.toPayHandler("wechatpay")):e.$common.errorToShow(t.msg)})},checkWXJSBridge:function(t){var e=this,i=setInterval(function(){"undefined"!=typeof window.WeixinJSBridge&&(clearTimeout(i),e.onBridgeReady(t))},200)},onBridgeReady:function(t){var e=this;window.WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t.appid,timeStamp:t.timeStamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign},function(i){"get_brand_wcpay_request:ok"===i.err_msg?e.$common.successToShow("支付成功"):"get_brand_wcpay_request:cancel"===i.err_msg?e.$common.errorToShow("取消支付"):e.$common.errorToShow("支付失败"),setTimeout(function(){e.$common.redirectTo("/pages/goods/payment/result?id="+t.payment_id)},1e3)})},toPayHandler:function(t){var e=this,i={payment_code:t,payment_type:this.type};i["ids"]=1==this.type||5==this.type||6==this.type?this.orderId:this.uid,1==this.type&&this.orderId?this.openid&&(i["params"]={trade_type:"JSAPI_OFFICIAL",openid:this.openid}):2==this.type&&this.money?this.openid&&(i["params"]={trade_type:"JSAPI_OFFICIAL",money:this.money,openid:this.openid}):5!=this.type&&6!=this.type||!this.recharge||(i["params"]={trade_type:"JSAPI_OFFICIAL",openid:this.openid,formid:this.orderId}),this.$api.pay(i,function(t){if(t.status){var i=t.data;e.checkWXJSBridge(i)}else e.$common.errorToShow(t.msg)})}}};e.default=n},"29b6":function(t,e,i){"use strict";var n=i("74d4"),o=i.n(n);o.a},4514:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".content[data-v-63cf7f82]{position:relative;height:80vh}.content-c[data-v-63cf7f82]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}.load-img[data-v-63cf7f82]{width:%?100?%;height:%?100?%}.load-text[data-v-63cf7f82]{font-size:%?26?%}",""])},"5fe7":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"content-c"},[i("v-uni-image",{staticClass:"load-img",attrs:{src:"/static/image/loading.gif",mode:""}}),i("v-uni-view",{staticClass:"load-text color-9"},[t._v("信息加载中.....")])],1)],1)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"74d4":function(t,e,i){var n=i("4514");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("70a960bb",n,!0,{sourceMap:!1,shadowMode:!1})},d55a:function(t,e,i){"use strict";i.r(e);var n=i("1565"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},d7fa:function(t,e,i){"use strict";i.r(e);var n=i("5fe7"),o=i("d55a");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("29b6");var r=i("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"63cf7f82",null);e["default"]=s.exports}}]);