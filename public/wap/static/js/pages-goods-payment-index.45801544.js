(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-payment-index"],{"1d09":function(e,t,i){"use strict";var a=i("24f0"),n=i.n(a);n.a},"1edb":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".margin-cell-group[data-v-b99f4a4e]{margin-bottom:%?20?%}.cell-hd-title[data-v-b99f4a4e]{color:#999}.payment-method .cell-item-hd[data-v-b99f4a4e]{min-width:%?70?%}.payment-method .cell-hd-icon[data-v-b99f4a4e]{width:%?70?%;height:%?70?%}.payment-method .cell-item-bd[data-v-b99f4a4e]{border-left:%?2?% solid #f0f0f0;padding-left:%?30?%}.payment-method .cell-bd-text[data-v-b99f4a4e]{font-size:%?28?%;color:#666}.payment-method .address[data-v-b99f4a4e]{font-size:%?24?%;color:#999}.flex-item[data-v-b99f4a4e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex-item .cell-item-ft[data-v-b99f4a4e]{position:relative;top:0;-webkit-transform:translateY(0);transform:translateY(0);right:0}",""])},"24f0":function(e,t,i){var a=i("b831");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("ab4530e6",a,!0,{sourceMap:!1,shadowMode:!1})},"607b":function(e,t,i){"use strict";var a=i("cf81"),n=i.n(a);n.a},b778:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac6a"),i("c5f6");var a=i("a9e0"),n={props:{orderId:{type:String,default:function(){return""}},recharge:{type:Number,default:function(){return 0}},uid:{type:Number,default:function(){return 0}},type:{type:Number,default:function(){return 1}}},data:function(){return{payments:[],openid:"",popShow:!1}},mounted:function(){this.getPayments()},methods:{getPayments:function(){var e=this;this.$api.paymentList({},function(t){t.status&&(e.payments=e.formatPayments(t.data))})},formatPayments:function(e){var t=this;return this.$common.isWeiXinBrowser()&&(e=e.filter(function(e){return"alipay"!==e.code})),2===this.type&&(e=e.filter(function(e){return"balancepay"!==e.code||1===e.is_online})),e.forEach(function(e){t.$set(e,"icon","/static/image/"+e.code+".png")}),e},checkWXJSBridge:function(e){var t=this,i=setInterval(function(){"undefined"!=typeof window.WeixinJSBridge&&(clearTimeout(i),t.onBridgeReady(e))},200)},onBridgeReady:function(e){var t=this;window.WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:e.appid,timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign},function(i){"get_brand_wcpay_request:ok"===i.err_msg?t.$common.successToShow("支付成功"):"get_brand_wcpay_request:cancel"===i.err_msg?t.$common.errorToShow("取消支付"):t.$common.errorToShow("支付失败"),setTimeout(function(){t.$common.redirectTo("/pages/goods/payment/result?id="+e.payment_id)},1e3)})},toPayHandler:function(e){var t=this;this.popShow=!0;var i={payment_code:e,payment_type:this.type};switch(i["ids"]=1==this.type||5==this.type||6==this.type?this.orderId:this.uid,e){case"alipay":1==this.type&&this.orderId?i["params"]={trade_type:"WAP",return_url:a.baseUrl+"wap/pages/goods/payment/result"}:2==this.type&&this.recharge?i["params"]={money:this.recharge,return_url:a.baseUrl+"wap/pages/goods/payment/result"}:5!=this.type&&6!=this.type||!this.recharge||(i["params"]={formid:this.orderId}),this.$api.pay(i,function(e){if(e.status){var t=e.data.url,i=e.data.data,a=document.createElement("form");a.id="aliPay",a.methods="post",a.action=t,a.target="_self";var n=[];for(var s in i)n[s]=document.createElement("input"),n[s].type="hidden",n[s].name=s,n[s].value=i[s],a.appendChild(n[s]);a.addEventListener("submit",function(){},!1),document.body.appendChild(a),a.dispatchEvent(new Event("submit")),a.submit(),document.body.removeChild(a)}});break;case"wechatpay":var n=this.$common.isWeiXinBrowser();if(n){var s=a.baseUrl+"wap/pages/goods/payment/auth?order_id="+this.orderId+"&type="+this.type;1==this.type&&this.orderId?i["params"]={trade_type:"JSAPI_OFFICIAL",url:s}:2==this.type&&this.recharge?i["params"]={trade_type:"JSAPI_OFFICIAL",money:this.recharge,url:s+"&uid="+this.uid+"&money="+this.recharge}:5!=this.type&&6!=this.type||!this.recharge||(i["params"]={formid:this.orderId}),this.$api.pay(i,function(e){if(e.status||"10066"!=e.data){var i=e.data;t.checkWXJSBridge(i)}else window.location.href=e.msg})}else 1==this.type&&this.orderId?i["params"]={trade_type:"MWEB",return_url:a.baseUrl+"wap/pages/goods/payment/result"}:2==this.type&&this.recharge?i["params"]={trade_type:"MWEB",money:this.recharge,return_url:a.baseUrl+"wap/pages/goods/payment/result"}:5!=this.type&&6!=this.type||!this.recharge||(i["params"]={formid:this.orderId}),this.$api.pay(i,function(e){e.status?location.href=e.data.mweb_url:t.$common.errorToShow(e.msg)});break;case"balancepay":5!=this.type&&6!=this.type||!this.recharge||(i["params"]={formid:this.orderId}),this.$api.pay(i,function(e){e.status?t.$common.redirectTo("/pages/goods/payment/result?id="+e.data.payment_id):t.$common.errorToShow(e.msg)});break;case"offline":this.$common.modelShow("线下支付说明","请联系客服进行线下支付",function(){},!1,"取消","确定");break}},popBtn:function(){this.popShow=!1}}};t.default=n},b831:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".payment-method .cell-item-hd[data-v-6c7071d0]{min-width:%?70?%}.payment-method .cell-hd-icon[data-v-6c7071d0]{width:%?70?%;height:%?70?%}.payment-method .cell-item-bd[data-v-6c7071d0]{border-left:%?2?% solid #f0f0f0;padding-left:%?30?%}.payment-method .cell-bd-text[data-v-6c7071d0]{font-size:%?28?%;color:#666}.payment-method .address[data-v-6c7071d0]{font-size:%?24?%;color:#999}.payment-pop[data-v-6c7071d0]{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?400?%;height:%?272?%;background-color:#fff;text-align:center;box-shadow:0 0 %?20?% #ccc\n\t/* border-radius: 10rpx; */}.payment-pop-c[data-v-6c7071d0]{padding:%?50?% %?30?%;\n\t/* line-height: 300rpx; */font-size:%?32?%;color:#999}.payment-pop-b[data-v-6c7071d0]{position:absolute;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.payment-pop-b .btn[data-v-6c7071d0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.payment-pop .text[data-v-6c7071d0]{font-size:%?24?%}",""])},c655:function(e,t,i){"use strict";var a,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"cell-group margin-cell-group"},[i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[e._v("订单类型")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[1==e.type?i("v-uni-text",{staticClass:"cell-ft-p"},[e._v("商品订单")]):e._e(),2==e.type?i("v-uni-text",{staticClass:"cell-ft-p",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toRecharge()}}},[e._v("充值订单")]):e._e(),5==e.type?i("v-uni-text",{staticClass:"cell-ft-p"},[e._v("快捷下单")]):e._e(),6==e.type?i("v-uni-text",{staticClass:"cell-ft-p"},[e._v("付款码")]):e._e()],1)],1),1==e.type?i("v-uni-view",[i("v-uni-view",{staticClass:"cell-item flex-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[e._v("订单编号")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},e._l(e.orderInfo.rel,function(t,a){return i("v-uni-view",{key:a,staticClass:"cell-ft-p",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.orderDetail(t.source_id)}}},[e._v(e._s(t.source_id||""))])}),1)],1),i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[e._v("支付金额")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-text",{staticClass:"cell-ft-p red-price"},[e._v("￥"+e._s(e.orderInfo.money||""))])],1)],1)],1):2==e.type?i("v-uni-view",[i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[e._v("充值金额")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-text",{staticClass:"cell-ft-p red-price"},[e._v("￥ "+e._s(e.recharge||""))])],1)],1)],1):i("v-uni-view",[i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[e._v("支付金额")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-text",{staticClass:"cell-ft-p red-price"},[e._v("￥ "+e._s(e.recharge||""))])],1)],1)],1)],1),i("payments-by-h5",{attrs:{orderId:e.orderId,recharge:e.recharge,type:e.type,uid:e.userInfo.id}})],1)},s=[];i.d(t,"b",function(){return n}),i.d(t,"c",function(){return s}),i.d(t,"a",function(){return a})},ca17:function(e,t,i){"use strict";var a,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"cell-group payment-method"},[e._l(e.payments,function(t){return 2!=e.type||"balancepay"!=t.code?i("v-uni-view",{key:t.code,staticClass:"cell-item add-title-item cell-item-mid right-img",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toPayHandler(t.code)}}},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:t.icon}})],1),i("v-uni-view",{staticClass:"cell-item-bd cell-item-bd-block"},[i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[e._v(e._s(t.name))])],1),i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text address"},[e._v(e._s(t.memo))])],1)],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1):e._e()}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.popShow,expression:"popShow"}],staticClass:"payment-pop"},[i("v-uni-view",{staticClass:"payment-pop-c"},[i("v-uni-image",{staticStyle:{width:"30px",height:"30px"},attrs:{src:"/static/image/wait-pay.png"}}),i("v-uni-view",{staticClass:"text"},[e._v("支付中，请稍后...")])],1),i("v-uni-view",{staticClass:"payment-pop-b"},[i("v-uni-button",{staticClass:"btn btn-c",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.popBtn.apply(void 0,arguments)}}},[e._v("支付失败")]),i("v-uni-button",{staticClass:"btn btn-o",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.popBtn.apply(void 0,arguments)}}},[e._v("支付成功")])],1)],1)],2)},s=[];i.d(t,"b",function(){return n}),i.d(t,"c",function(){return s}),i.d(t,"a",function(){return a})},cca3:function(e,t,i){"use strict";i.r(t);var a=i("ca17"),n=i("d98f");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("1d09");var o,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"6c7071d0",null,!1,a["a"],o);t["default"]=c.exports},ce4b:function(e,t,i){"use strict";i.r(t);var a=i("c655"),n=i("cffe");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("607b");var o,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"b99f4a4e",null,!1,a["a"],o);t["default"]=c.exports},cf81:function(e,t,i){var a=i("1edb");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("36c9a076",a,!0,{sourceMap:!1,shadowMode:!1})},cffe:function(e,t,i){"use strict";i.r(t);var a=i("f819"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},d98f:function(e,t,i){"use strict";i.r(t);var a=i("b778"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},de6c:function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.tools=t.checkLogin=t.jumpBackPage=t.goBack=t.goods=t.orders=void 0;var n=a(i("a4bb")),s={mounted:function(){},methods:{orderDetail:function(e){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+e)},toPay:function(e){this.$common.navigateTo("/pages/goods/payment/index?order_id="+e+"&type=1")},toEvaluate:function(e){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+e)},showExpress:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=encodeURIComponent("code="+e+"&no="+t+"&add="+i);this.$common.navigateTo("/pages/member/order/express_delivery?params="+a)}}};t.orders=s;var o={mounted:function(){},methods:{goodsDetail:function(e){this.$common.navigateTo("/pages/goods/index/index?id="+e)},goodsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="/pages/classify/index";(0,n.default)(e).length&&(t=this.$common.builderUrlParams(t,e)),this.$common.navigateTo(t)},groupDetail:function(e,t){this.$common.navigateTo("/pages/goods/index/group?id="+e+"&group_id="+t)},pintuanDetail:function(e,t){t?this.$common.navigateTo("/pages/goods/index/pintuan?id="+e+"&team_id="+t):this.$common.navigateTo("/pages/goods/index/pintuan?id="+e)}}};t.goods=o;var r={onBackPress:function(e){if("navigateBack"===e.from)return!1;var t=["/pages/cart/index/index","/pages/member/index/index"],i=this.$store.state.redirectPage;return t.indexOf(i)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0}};t.goBack=r;var c={methods:{handleBack:function(){var e=this.$store.state.redirectPage;this.$store.commit({type:"redirect",page:""});var t=["/pages/index/index","/pages/member/index/index"];t.indexOf(e)>-1?uni.switchTab({url:e}):e?uni.redirectTo({url:e}):uni.switchTab({url:"/pages/index/index"})}}};t.jumpBackPage=c;var d={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录！",icon:"none",duration:800,success:function(e){setTimeout(function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})},800)}})}}};t.checkLogin=d;var l={methods:{copyData:function(e){var t=this;uni.setClipboardData({data:e,success:function(){t.$common.errorToShow("复制成功")}})}}};t.tools=l},f819:function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("c5f6");var n=a(i("cca3")),s=i("de6c"),o={mixins:[s.orders],data:function(){return{orderId:0,recharge:0,type:1,orderInfo:{},userInfo:{},form_id:0}},components:{paymentsByH5:n.default},onLoad:function(e){this.orderId=e.order_id,this.recharge=Number(e.recharge),this.type=Number(e.type),this.form_id=Number(e.form_id),this.orderId&&1==this.type?this.getOrderInfo():this.recharge&&2==this.type?this.getUserInfo():!this.form_id||5!=this.type&&6!=this.type?this.$common.errorToShow("订单支付参数错误",function(){uni.navigateBack({delta:1})}):this.orderId=""+this.form_id},methods:{getOrderInfo:function(){var e=this,t={ids:this.orderId,payment_type:this.type};this.$api.paymentsCheckpay(t,function(t){t.status&&(e.orderInfo=t.data)})},getUserInfo:function(){var e=this;this.$api.userInfo({},function(t){t.status?e.userInfo=t.data:e.$common.errorToShow(t.msg)})},toRecharge:function(){this.$common.navigateTo("/pages/member/balance/index")}}};t.default=o}}]);