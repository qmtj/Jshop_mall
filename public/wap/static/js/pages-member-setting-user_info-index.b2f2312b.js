(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-setting-user_info-index"],{"0546":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{title:"picker",avatar:"",objectSex:["男","女","未知"],index:2,nickname:"",mobile:"",date:"1990-01-01",birthday:"请选择",sex:0,submitStatus:!1}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},methods:{bindPickerChange:function(t){this.sex=t.target.value},bindDateChange:function(t){this.birthday=t.target.value},getDate:function(t){var i=new Date,a=i.getFullYear(),e=i.getMonth()+1,n=i.getDate();return"start"===t?a-=60:"end"===t&&(a+=2),e=e>9?e:"0"+e,n=n>9?n:"0"+n,"".concat(a,"-").concat(e,"-").concat(n)},uploadAvatar:function(){var t=this;this.$api.uploadFiles(function(i){if(i.status){var a=i.data.url;t.$api.changeAvatar({avatar:a},function(i){i.status?t.$common.successToShow("上传成功",function(){t.avatar=i.data.avatar}):t.$common.errorToShow(i.msg)})}else t.$common.errorToShow(i.msg)})},submitHandler:function(){var t=this;this.submitStatus=!0;var i=this.sex+1;if("请选择"==this.birthday)return this.$common.successToShow("请选择出生日期"),this.submitStatus=!1,!1;this.$api.editInfo({sex:i,birthday:this.birthday,nickname:this.nickname},function(i){t.$common.successToShow(i.msg,function(t){uni.navigateBack({delta:1})})},function(i){t.submitStatus=!1})}},onLoad:function(){var t=this;t.$api.userInfo({},function(i){if(i.status){var a=i.data.sex-1;null==i.data.birthday&&(i.data.birthday="请选择"),t.nickname=i.data.nickname,t.mobile=i.data.mobile,t.sex=a,t.index=a,t.birthday=i.data.birthday,t.avatar=i.data.avatar,"请选择"!=t.birthday&&(t.date=t.birthday)}else t.$common.errorToShow(i.msg)})}};i.default=e},"3a36":function(t,i,a){"use strict";a.r(i);var e=a("f086"),n=a("711e");for(var s in n)"default"!==s&&function(t){a.d(i,t,function(){return n[t]})}(s);a("993c");var c,l=a("f0c5"),u=Object(l["a"])(n["default"],e["b"],e["c"],!1,null,"27391d16",null,!1,e["a"],c);i["default"]=u.exports},"711e":function(t,i,a){"use strict";a.r(i);var e=a("0546"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,function(){return e[t]})}(s);i["default"]=n.a},"993c":function(t,i,a){"use strict";var e=a("aa41"),n=a.n(e);n.a},aa41:function(t,i,a){var e=a("b36c");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("6296e1d2",e,!0,{sourceMap:!1,shadowMode:!1})},b36c:function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".user-head[data-v-27391d16]{height:%?100?%}.user-head-img[data-v-27391d16]{height:%?90?%;width:%?90?%;border-radius:50%}.cell-hd-title[data-v-27391d16]{color:#333}.cell-item-bd[data-v-27391d16]{color:#666;font-size:%?26?%}.cell-item-hd[data-v-27391d16]{width:%?160?%}",""])},f086:function(t,i,a){"use strict";var e,n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"content-top"},[a("v-uni-view",{staticClass:"cell-group"},[a("v-uni-view",{staticClass:"cell-item user-head"},[a("v-uni-view",{staticClass:"cell-item-hd"},[a("v-uni-view",{staticClass:"cell-hd-title"},[t._v("头像")])],1),a("v-uni-view",{staticClass:"cell-item-ft"},[a("v-uni-image",{staticClass:"cell-ft-next user-head-img have-none",attrs:{mode:"aspectFill",src:t.avatar},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.uploadAvatar.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"cell-item cell-item-mid"},[a("v-uni-view",{staticClass:"cell-item-hd"},[a("v-uni-view",{staticClass:"cell-hd-title"},[t._v("昵称")])],1),a("v-uni-view",{staticClass:"cell-item-bd"},[a("v-uni-input",{staticClass:"cell-bd-input",attrs:{placeholder:""},model:{value:t.nickname,callback:function(i){t.nickname=i},expression:"nickname"}})],1)],1),a("v-uni-view",{staticClass:"cell-item cell-item-mid right-img"},[a("v-uni-view",{staticClass:"cell-item-hd"},[a("v-uni-view",{staticClass:"cell-hd-title"},[t._v("性别")])],1),a("v-uni-view",{staticClass:"cell-item-bd"},[a("v-uni-view",{staticClass:"uni-list"},[a("v-uni-view",{staticClass:"uni-list-cell-db"},[a("v-uni-picker",{attrs:{mode:"selector",value:t.index,range:t.objectSex},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.bindPickerChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.objectSex[t.sex]))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"cell-item-ft"},[a("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/ic-pull-down.png"}})],1)],1),a("v-uni-view",{staticClass:"cell-item cell-item-mid right-img"},[a("v-uni-view",{staticClass:"cell-item-hd"},[a("v-uni-view",{staticClass:"cell-hd-title"},[t._v("生日")])],1),a("v-uni-view",{staticClass:"cell-item-bd"},[a("v-uni-view",{staticClass:"uni-list"},[a("v-uni-view",{staticClass:"uni-list-cell-db"},[a("v-uni-picker",{attrs:{mode:"date",value:t.date,start:t.startDate,end:t.endDate},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.bindDateChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.birthday))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"cell-item-ft"},[a("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/ic-pull-down.png"}})],1)],1)],1)],1),a("v-uni-view",{staticClass:"button-bottom"},[a("v-uni-button",{staticClass:"btn btn-square btn-b",attrs:{"hover-class":"btn-hover2",disabled:t.submitStatus,loading:t.submitStatus},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submitHandler()}}},[t._v("保存")])],1)],1)},s=[];a.d(i,"b",function(){return n}),a.d(i,"c",function(){return s}),a.d(i,"a",function(){return e})}}]);