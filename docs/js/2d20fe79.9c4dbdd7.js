(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d20fe79"],{b62a:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"max-width":"800px",width:"100%"}},[a("q-calendar",{staticStyle:{height:"500px"},attrs:{view:"month",locale:"en-us"},scopedSlots:e._u([{key:"day",fn:function(t){var s=t.date;return[e._l(e.getEvents(s),(function(t,s){return[a("q-badge",{key:s,staticClass:"q-event",class:e.badgeClasses(t,"day"),staticStyle:{width:"100%",cursor:"pointer",height:"16px","max-height":"16px"},style:e.badgeStyles(t,"day")},[t.icon?a("q-icon",{staticClass:"q-mr-xs",attrs:{name:t.icon}}):e._e(),a("span",{staticClass:"ellipsis"},[e._v(e._s(t.title))])],1)]}))]}}]),model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)},i=[],n=a("c47a"),r=a.n(n),o=(a("4917"),a("a481"),a("384e")),l=new Date;function d(e){var t=new Date(l);t.setDate(e);var a=o["a"].parseDate(t);return a.date}var c=/^\s*rgb(a)?\s*\((\s*(\d+)\s*,\s*?){2}(\d+)\s*,?\s*([01]?\.?\d*?)?\s*\)\s*$/;function h(e){if("string"!==typeof e)throw new TypeError("Expected a string");var t=c.exec(e);if(t){var a={r:Math.min(255,parseInt(t[2],10)),g:Math.min(255,parseInt(t[3],10)),b:Math.min(255,parseInt(t[4],10))};return t[1]&&(a.a=Math.min(1,parseFloat(t[5]))),a}return g(e)}function g(e){if("string"!==typeof e)throw new TypeError("Expected a string");e=e.replace(/^#/,""),3===e.length?e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]:4===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);var t=parseInt(e,16);return e.length>6?{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:Math.round((255&t)/2.55)}:{r:t>>16,g:t>>8&255,b:255&t}}function u(e){if("string"!==typeof e&&(!e||void 0===e.r))throw new TypeError("Expected a string or a {r, g, b} object as color");var t="string"===typeof e?h(e):e,a=t.r/255,s=t.g/255,i=t.b/255,n=a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4),r=s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4),o=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4);return.2126*n+.7152*r+.0722*o}var p={data:function(){return{selectedDate:"",events:[{title:"1st of the Month",details:"Everything is funny as long as it is happening to someone else",date:d(1),bgcolor:"orange"},{title:"Sisters Birthday",details:"Buy a nice present",date:d(4),bgcolor:"green",icon:"fas fa-birthday-cake"},{title:"Meeting",details:"Time to pitch my idea to the company",date:d(8),time:"10:00",duration:120,bgcolor:"red",icon:"fas fa-handshake"},{title:"Lunch",details:"Company is paying!",date:d(8),time:"11:30",duration:90,bgcolor:"teal",icon:"fas fa-hamburger"},{title:"Visit mom",details:"Always a nice chat with mom",date:d(20),time:"17:00",duration:90,bgcolor:"blue-grey",icon:"fas fa-car"},{title:"Conference",details:"Teaching Javascript 101",date:d(15),time:"08:00",duration:540,bgcolor:"blue",icon:"fas fa-chalkboard-teacher"},{title:"Girlfriend",details:"Meet GF for dinner at Swanky Restaurant",date:d(15),time:"19:00",duration:180,bgcolor:"teal",icon:"fas fa-utensils"},{title:"Rowing",details:"Time for some weekend R&R",date:d(29),bgcolor:"purple",icon:"rowing",days:2},{title:"Vacation",details:"Trails and hikes, going camping! Don't forget to bring bear spray!",date:d(22),bgcolor:"purple",icon:"fas fa-plane",days:7}]}},methods:{isCssColor:function(e){return!!e&&!!e.match(/^(#|(rgb|hsl)a?\()/)},badgeClasses:function(e,t){var a,s=this.isCssColor(e.bgcolor),i="header"===t;return a={},r()(a,"text-white bg-".concat(e.bgcolor),!s),r()(a,"full-width",!i&&(!e.side||"full"===e.side)),r()(a,"left-side",!i&&"left"===e.side),r()(a,"right-side",!i&&"right"===e.side),a},badgeStyles:function(e,t,a,s){var i={};return this.isCssColor(e.bgcolor)&&(i["background-color"]=e.bgcolor,i.color=u(e.bgcolor)>.5?"black":"white"),a&&(i.top=a(e.time)+"px"),s&&(i.height=s(e.duration)+"px"),i["align-items"]="flex-start",i},getEvents:function(e){for(var t=o["a"].parsed(e),a=[],s=0;s<this.events.length;++s){var i=!1;if(this.events[s].date===e){if(this.events[s].time&&a.length>0)for(var n=o["a"].parsed(this.events[s].date+" "+this.events[s].time),r=o["a"].nextMinutes(o["a"].parsed(this.events[s].date+" "+this.events[s].time),this.events[s].duration),l=0;l<a.length;++l){var d=o["a"].parsed(a[l].date+" "+a[l].time),c=o["a"].nextMinutes(o["a"].parsed(a[l].date+" "+a[l].time),a[l].duration);if(o["a"].isBetweenDates(n,d,c,!0)||o["a"].isBetweenDates(r,d,c,!0)){a[l].side="left",this.events[s].side="right",a.push(this.events[s]),i=!0;break}}i||(this.events[s].side=void 0,a.push(this.events[s]))}else if(this.events[s].days){var h=o["a"].parsed(this.events[s].date),g=o["a"].addToDate(h,{day:this.events[s].days});o["a"].isBetweenDates(t,h,g)&&(a.push(this.events[s]),i=!0)}}return a}}},f=p,v=a("2877"),b=Object(v["a"])(f,s,i,!1,null,null,null);t["default"]=b.exports}}]);