webpackJsonp([26],{GPyJ:function(t,i){},dhDQ:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("Gu7T"),a=e.n(s),n={data:function(){return{page:1,pageSize:10,list:[]}},mounted:function(){this.balanceList()},methods:{balanceList:function(){var t=this;this.$api.getBalanceList({page:this.page,limit:this.pageSize},function(i){var e=i.data;console.log(e),t.list=[].concat(a()(e)),e.length<t.pageSize&&t.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone")})},loadMore:function(){var t=this;this.$api.getBalanceList({page:++this.page,limit:this.pageSize},function(i){var e=i.data;t.list=[].concat(a()(t.list),a()(e)),e.length<t.pageSize&&t.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone"),t.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.finishLoad")})}}},l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"balancelist"},[e("yd-infinitescroll",{ref:"infinitescrollDemo",attrs:{callback:t.loadMore}},t._l(t.list,function(i,s){return e("div",{key:s,staticClass:"balancelist-item",attrs:{slot:"list"},slot:"list"},[e("div",{staticClass:"balancelist-content"},[e("div",{staticClass:"balancelist-top"},[e("span",[t._v(t._s(i.type)+"：")]),t._v(" "),e("span",{staticStyle:{color:"#999"}},[t._v("[ "+t._s(i.memo)+" ]")]),t._v(" "),e("p",[t._v(t._s(i.ctime))])]),t._v(" "),e("div",{staticClass:"balancelist-bottom"},[e("p",[t._v("余额: "+t._s(i.balance))]),t._v(" "),e("h3",{staticClass:"balancelist-right"},[t._v(t._s(i.money))])])])])}))],1)},staticRenderFns:[]};var c=e("VU/8")(n,l,!1,function(t){e("GPyJ")},null,null);i.default=c.exports}});
//# sourceMappingURL=26.e2976023e0460ba28e2d.js.map