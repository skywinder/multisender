(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1488:function(t,e,n){"use strict";n.r(e);n(41),n(30),n(26),n(22),n(37),n(35);var r=n(3),c=n(11),o=n(38);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={head:{bodyAttrs:{class:"no-bg"}},data:function(){return{isCleaned:!1,selfBalance:0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)("txStorage",["accountSender"]),{},Object(o.c)("provider",["getNetwork"]),{},Object(o.c)("token",["toDecimals"])),watch:{accountSender:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.address){n.next=5;break}return n.next=3,e.$store.dispatch("provider/getBalance",t.address);case 3:r=n.sent,e.selfBalance=e.toDecimals(r,18);case 5:case"end":return n.stop()}}),n)})))()}},methods:{clear:function(){var t=this;this.$dialog.confirm({title:this.$t("clearingStorage"),message:this.$t("clearYourStorage"),cancelText:this.$t("cancel"),confirmText:this.$t("clearStorage"),type:"is-danger",hasIcon:!0,onConfirm:function(){t.$store.commit("txStorage/RESET_ACCOUNT_SENDER"),t.$store.commit("txStorage/RESET_TXS_STORAGE"),t.isCleaned=!0}})}}},v=n(18),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-container"},[n("h2",{staticClass:"title"},[t._v(t._s(t.$t("debug")))]),t._v(" "),t.isCleaned?n("div",{staticClass:"is-size-5 has-text-centered"},[t._v("\n    "+t._s(t.$t("storageIsCleaned"))+"\n  ")]):n("div",{staticClass:"content"},[n("div",{staticClass:"columns is-multiline"},[n("div",{staticClass:"column is-full"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__key"},[t._v(t._s(t.selfBalance)+" "+t._s(t.getNetwork.currencyName))]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v(t._s(t.$t("selfGeneratedBalance")))])])]),t._v(" "),n("div",{staticClass:"column is-full"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__key"},[t._v(t._s(t.accountSender.address))]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v(t._s(t.$t("selfGeneratedPublic")))])])]),t._v(" "),n("div",{staticClass:"column is-full"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__key has-text-weight-bold"},[t._v(t._s(t.accountSender.privateKey))]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v(t._s(t.$t("selfGeneratedPrivate")))])])])]),t._v(" "),n("div",{staticClass:"buttons is-centered"},[n("b-button",{staticClass:"is-next",attrs:{type:"is-primary"},on:{click:function(e){return t.clear()}}},[t._v("\n        "+t._s(t.$t("clearStorage"))+"\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);