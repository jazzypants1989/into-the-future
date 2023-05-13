"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[596],{596:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(137);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function s(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function i(e){s(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===a(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function c(e,t){if(s(2,arguments),!t||"object"!==a(t))return new Date(NaN);var n=t.years?o(t.years):0,r=t.months?o(t.months):0,c=t.weeks?o(t.weeks):0,l=t.days?o(t.days):0,u=t.hours?o(t.hours):0,d=t.minutes?o(t.minutes):0,g=t.seconds?o(t.seconds):0,m=i(e),y=r||n?function(e,t){s(2,arguments);var n=i(e),r=o(t);if(isNaN(r))return new Date(NaN);if(!r)return n;var a=n.getDate(),c=new Date(n.getTime());return c.setMonth(n.getMonth()+r+1,0),a>=c.getDate()?c:(n.setFullYear(c.getFullYear(),c.getMonth(),a),n)}(m,r+12*n):m,f=l||c?function(e,t){s(2,arguments);var n=i(e),r=o(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}(y,l+7*c):y,h=1e3*(g+60*(d+60*u));return new Date(f.getTime()+h)}function l(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}function u(e,t){var n,r;s(1,arguments);var a=i(e);if(isNaN(a.getTime()))throw new RangeError("Invalid time value");var o=String(null!==(n=null==t?void 0:t.format)&&void 0!==n?n:"extended"),c=String(null!==(r=null==t?void 0:t.representation)&&void 0!==r?r:"complete");if("extended"!==o&&"basic"!==o)throw new RangeError("format must be 'extended' or 'basic'");if("date"!==c&&"time"!==c&&"complete"!==c)throw new RangeError("representation must be 'date', 'time', or 'complete'");var u="",d="",g="extended"===o?"-":"",m="extended"===o?":":"";if("time"!==c){var y=l(a.getDate(),2),f=l(a.getMonth()+1,2),h=l(a.getFullYear(),4);u="".concat(h).concat(g).concat(f).concat(g).concat(y)}if("date"!==c){var p=a.getTimezoneOffset();if(0!==p){var b=Math.abs(p),w=l(Math.floor(b/60),2),v=l(b%60,2);d="".concat(p<0?"+":"-").concat(w,":").concat(v)}else d="Z";var D=""===u?"":"T",M=[l(a.getHours(),2),l(a.getMinutes(),2),l(a.getSeconds(),2)].join(m);u="".concat(u).concat(D).concat(M).concat(d)}return u}function d(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function g(e){s(1,arguments);var t=i(e);return t.setHours(0,0,0,0),t}var m=864e5;function y(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}async function f(){const e=new Date,t=[{name:"Murder Mystery Night",start:c(e,{days:2,hours:5}),end:c(e,{days:2,hours:8})},{name:"Gorgonzola Enthusiasts Conference",start:c(e,{days:5}),end:c(e,{days:7})},{name:"Dragon Appreciation Day",start:c(e,{days:12}),end:c(e,{days:12})},{name:"Circus Skills Workshop",start:c(e,{days:15}),end:c(e,{days:16})},{name:"Couch Sitting Competition",start:c(e,{days:20}),end:c(e,{days:21})},{name:"Three Week Rustic Retreat",start:c(e,{days:25}),end:c(e,{days:45})}],r=document.getElementById("events-list"),a=document.getElementById("calendar"),o=document.querySelectorAll(".fc-event");if(!a||!r||!o)throw new Error("Something just ain't right.");new(await async function(){const{Calendar:e}=await n.e(636).then(n.bind(n,636));return e}())(a,{plugins:[await async function(){const{default:e}=await Promise.all([n.e(636),n.e(485)]).then(n.bind(n,485));return e}()],initialView:"dayGridMonth",events:t.map((e=>({title:e.name,start:u(e.start),end:u(e.end)})))}).render(),a.style.backgroundColor="black",a.style.padding="1rem",a.style.opacity="0.8",a.style.borderRadius="0.5rem",a.style.margin="1rem",o.forEach((e=>{e.style.whiteSpace="normal",e.style.fontSize="1.5rem",e.style.textAlign="center",e.style.padding="0.5rem",e.style.borderRadius="0.5rem"})),r.style.display="grid",r.style.gap="1rem",t.forEach((t=>{const n=function(e,t){s(2,arguments);var n=i(e),r=i(t),a=y(n,r),o=Math.abs(function(e,t){s(2,arguments);var n=g(e),r=g(t),a=n.getTime()-d(n),o=r.getTime()-d(r);return Math.round((a-o)/m)}(n,r));n.setDate(n.getDate()-a*o);var c=a*(o-Number(y(n,r)===-a));return 0===c?0:c}(t.start,e);console.log(n);const a=document.createElement("li");a.textContent=`${t.name} is in ${n} days`,a.style.padding="1rem",a.style.backgroundColor=n<7?"red":"green",a.style.color="white",a.style.borderRadius="0.5rem",a.style.textAlign="center",r?.appendChild(a)}))}async function h(){(0,r.ZP)({component:'\n    <h1>Things that are actually happening at our REAL store</h1>\n    <div id="calendar"></div>\n    <ul id="events-list"></ul>\n  ',callback:f})}}}]);