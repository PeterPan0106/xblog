(window.webpackJsonp=window.webpackJsonp||[]).push([[53,19,29,34],{1326:function(t,e,n){"use strict";n.r(e);n(47);var r=n(954),c=n(652),o={components:{SettingAPP:n(955).default,SettingWechat:r.default},layout:"admin",mixins:[c.default],data:function(){return{active:"01"}},mounted:function(){this.change({name:"01"})},methods:{change:function(t){switch(t.name){case"01":this.$store.dispatch("admin-settings/getWechatOption");break;case"02":this.$store.dispatch("admin-settings/getAPPOption")}}}},l=n(5),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("小程序/APP设置")])]),t._v(" "),n("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.change},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("el-tab-pane",{attrs:{label:"小程序设置",name:"01"}},[n("setting-wechat")],1),t._v(" "),n("el-tab-pane",{attrs:{label:"APP设置",name:"02"}},[n("setting-a-p-p")],1)],1)],1)],1)}),[],!1,null,"22506910",null);e.default=component.exports},652:function(t,e,n){"use strict";n.r(e),e.default={head:function(){return{title:"XBlog后台管理系统"}}}},954:function(t,e,n){"use strict";n.r(e);n(33),n(24),n(27),n(45),n(46);var r=n(12),c=n(13);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={name:"SettingWechat",components:{TypeIndex:n(676).default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("admin-settings",["wechatOption"]))},f=n(5),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{xs:24,sm:15,md:7}},[n("type-index",{attrs:{options:t.wechatOption}})],1)],1)],1)}),[],!1,null,"5788acbc",null);e.default=component.exports},955:function(t,e,n){"use strict";n.r(e);n(33),n(24),n(27),n(45),n(46);var r=n(12),c=n(13);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={name:"SettingAPP",components:{TypeIndex:n(676).default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("admin-settings",["appOptions"]))},f=n(5),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{xs:24,sm:15,md:7}},[n("type-index",{attrs:{options:t.appOptions}})],1)],1)],1)}),[],!1,null,"61095980",null);e.default=component.exports}}]);