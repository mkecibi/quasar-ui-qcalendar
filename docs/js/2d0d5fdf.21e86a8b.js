(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0d5fdf"],{"713b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-layout",{attrs:{view:"HHh LpR fFf"}},[r("q-header",{attrs:{elevated:""}},[r("q-toolbar",[r("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[r("q-icon",{attrs:{name:"menu"}})],1),r("q-toolbar-title",[e._v("\n        QCalendar "),r("span",{staticClass:"text-subtitle2"},[e._v("v"+e._s(e.version))])]),r("q-space"),e.$q.screen.width>500?r("div",[e._v("Quasar v"+e._s(e.$q.version))]):e._e(),r("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Table of Contents"},on:{click:function(t){e.rightDrawerOpen=!e.rightDrawerOpen}}},[r("q-icon",{attrs:{name:"menu"}})],1)],1)],1),r("q-drawer",{attrs:{bordered:"","content-style":"background-color: #f8f8ff"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[r("q-list",[r("q-item-label",{attrs:{header:""}},[e._v("Essential Links")])],1),r("essential-links")],1),r("q-drawer",{ref:"drawer",attrs:{side:"right",bordered:"","content-style":"background-color: #f8f8ff"},model:{value:e.rightDrawerOpen,callback:function(t){e.rightDrawerOpen=t},expression:"rightDrawerOpen"}},[r("q-scroll-area",{staticClass:"fit"},[r("q-list",{attrs:{dense:""}},e._l(e.toc,(function(t){return r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:"",dense:"",active:e.activeToc===t.id},on:{click:function(r){return e.scrollTo(t.id)}}},[t.level>1?r("q-item-section",{attrs:{side:""}},[e._v(" • ")]):e._e(),r("q-item-section",{class:"toc-item toc-level-"+t.level},[e._v(e._s(t.label))])],1)})),1)],1)],1),r("q-page-container",[r("router-view")],1)],1)},a=[],o=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),i=r.n(o),s=r("2f62"),c=r("0831"),l=r("384e");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=c["a"].setScrollPosition,p={name:"MainLayout",components:{"essential-links":function(){return r.e("2d0cc070").then(r.bind(null,"4bd0"))}},data:function(){return{version:l["c"],leftDrawerOpen:this.$q.platform.is.desktop,rightDrawerOpen:this.$q.platform.is.desktop,activeToc:0}},computed:u({},Object(s["b"])({toc:"common/toc"})),mounted:function(){var e=this;if(""!==location.hash){var t=location.hash.substring(1,location.hash.length);setTimeout((function(){e.scrollTo(t)}),200)}},methods:{scrollTo:function(e){var t=this;this.activeToc=e;var r=document.getElementById(e);r&&setTimeout((function(){t.scrollPage(r)}),200)},scrollPage:function(e){var t=e.offsetTop-50;d(window,t,500)}}},b=p,v=r("2877"),w=Object(v["a"])(b,n,a,!1,null,null,null);t["default"]=w.exports}}]);