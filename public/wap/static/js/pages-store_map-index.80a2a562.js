(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-store_map-index"],{"9ecd":function(t,e,i){"use strict";i.r(e);var a=i("a296"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},a296:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{storeList:[],longitude:0,latitude:0,covers:[{longitude:0,latitude:0}]}},onLoad:function(){this.getMyLocation(),this.getStoreList()},methods:{getMyLocation:function(){var t=this;uni.getLocation({type:"wgs84",success:function(e){t.longitude=e.longitude,t.latitude=e.latitude},fail:function(){t.$common.errorToShow("获取位置信息失败")}})},getStoreList:function(){var t=this;t.$api.storeList({},function(e){if(e.status){t.storeList=e.data;for(var i=e.data,a=[],s=0;s<i.length;s++){var n={};n.latitude=i[s].latitude,n.longitude=i[s].longitude,n.width="50rpx",n.height="50rpx",n.iconPath="/static/image/gps-blue.png",a.push(n)}console.log(a),t.covers=a}})}}};e.default=a},bb3b:function(t,e,i){"use strict";i.r(e);var a=i("c338"),s=i("9ecd");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("e8ce");var o=i("2877"),l=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"61da2260",null);e["default"]=l.exports},c338:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"map-body"},[i("v-uni-cover-view"),i("v-uni-map",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"storeMap",latitude:t.latitude,longitude:t.longitude,markers:t.covers}})],1),i("v-uni-scroll-view",{staticClass:"store-list",attrs:{"scroll-y":""}},t._l(t.storeList,function(e,a){return i("v-uni-view",{key:a,staticClass:"cell-item add-title-item",on:{click:function(i){i=t.$handleEvent(i),t.goMarkers(e.id)}}},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-image",{staticClass:"store-img",attrs:{src:e.logo}})],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text fsz30"},[t._v(t._s(e.store_name))])],1),i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text color-6 fsz24"},[t._v("电话："+t._s(e.mobile))])],1),i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text color-6 fsz24"},[t._v("地址："+t._s(e.all_address))])],1)],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)}),1)],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},d6d5:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".content[data-v-61da2260]{width:100%;\r\n\theight:calc(100vh - 44px)\r\n\t\r\n\t/* height: 100vh; */}.map-body[data-v-61da2260]{width:100%;height:%?700?%;position:relative}.store-list[data-v-61da2260]{background-color:#fff;height:calc(100vh - 44px - %?700?%)}.store-item[data-v-61da2260]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.store-img[data-v-61da2260]{width:%?140?%;height:%?140?%}.store-right[data-v-61da2260]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}",""])},e7f2:function(t,e,i){var a=i("d6d5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("0766ec35",a,!0,{sourceMap:!1,shadowMode:!1})},e8ce:function(t,e,i){"use strict";var a=i("e7f2"),s=i.n(a);s.a}}]);