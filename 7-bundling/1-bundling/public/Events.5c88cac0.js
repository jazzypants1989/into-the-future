function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire286e;t.register("im2dl",(function(a,n){var r;r=a.exports,Object.defineProperty(r,"__esModule",{value:!0,configurable:!0}),e(a.exports,"default",(()=>d));var o=t("eOHur"),u=t("vCGCs"),s=t("86sxN"),l=t("2sgOd");async function d(){(0,o.default)('\n    <h1>Things that are actually happening at our REAL store</h1>\n    <div id="calendar"></div>\n    <ul id="events-list"></ul>\n  ');const e=new Date,a=[{name:"Murder Mystery Night",start:(0,u.default)(e,{days:2,hours:5}),end:(0,u.default)(e,{days:2,hours:8})},{name:"Gorgonzola Enthusiasts Conference",start:(0,u.default)(e,{days:5}),end:(0,u.default)(e,{days:7})},{name:"Dragon Appreciation Day",start:(0,u.default)(e,{days:12}),end:(0,u.default)(e,{days:12})},{name:"Circus Skills Workshop",start:(0,u.default)(e,{days:15}),end:(0,u.default)(e,{days:16})},{name:"Couch Sitting Competition",start:(0,u.default)(e,{days:20}),end:(0,u.default)(e,{days:21})},{name:"Three Week Rustic Retreat",start:(0,u.default)(e,{days:25}),end:(0,u.default)(e,{days:45})}],n=document.getElementById("events-list"),r=document.getElementById("calendar"),d=document.querySelectorAll(".fc-event");if(!r||!n||!d)throw new Error("Something just ain't right.");new(await async function(){const{Calendar:e}=await t("j5GxO");return e}())(r,{plugins:[await async function(){const{default:e}=await t("e7u6A");return e}()],initialView:"dayGridMonth",events:a.map((e=>({title:e.name,start:(0,l.default)(e.start),end:(0,l.default)(e.end)})))}).render(),r.style.backgroundColor="black",r.style.padding="1rem",r.style.opacity="0.8",r.style.borderRadius="0.5rem",r.style.margin="1rem",d.forEach((e=>{e.style.whiteSpace="normal",e.style.fontSize="1.5rem",e.style.textAlign="center",e.style.padding="0.5rem",e.style.borderRadius="0.5rem"})),n.style.display="grid",n.style.gap="1rem",a.forEach((t=>{const a=(0,s.default)(t.start,e);console.log(a);const r=document.createElement("li");r.textContent=`${t.name} is in ${a} days`,r.style.padding="1rem",r.style.backgroundColor=a<7?"red":"green",r.style.color="white",r.style.borderRadius="0.5rem",r.style.textAlign="center",n?.appendChild(r)}))}})),t.register("vCGCs",(function(a,n){e(a.exports,"default",(()=>i));var r=t("fSwVM"),o=t("6OX6Q"),u=t("eqWMS"),s=t("gdr0J"),l=t("4LmDH"),d=t("esGEx");function i(e,t){if((0,l.default)(2,arguments),!t||"object"!==(0,r.default)(t))return new Date(NaN);var a=t.years?(0,d.default)(t.years):0,n=t.months?(0,d.default)(t.months):0,i=t.weeks?(0,d.default)(t.weeks):0,f=t.days?(0,d.default)(t.days):0,c=t.hours?(0,d.default)(t.hours):0,g=t.minutes?(0,d.default)(t.minutes):0,m=t.seconds?(0,d.default)(t.seconds):0,y=(0,s.default)(e),p=n||a?(0,u.default)(y,n+12*a):y,v=f||i?(0,o.default)(p,f+7*i):p,h=1e3*(m+60*(g+60*c));return new Date(v.getTime()+h)}})),t.register("fSwVM",(function(t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}e(t.exports,"default",(()=>n))})),t.register("6OX6Q",(function(a,n){e(a.exports,"default",(()=>s));var r=t("esGEx"),o=t("gdr0J"),u=t("4LmDH");function s(e,t){(0,u.default)(2,arguments);var a=(0,o.default)(e),n=(0,r.default)(t);return isNaN(n)?new Date(NaN):n?(a.setDate(a.getDate()+n),a):a}})),t.register("esGEx",(function(t,a){function n(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}e(t.exports,"default",(()=>n))})),t.register("gdr0J",(function(a,n){e(a.exports,"default",(()=>u));var r=t("fSwVM"),o=t("4LmDH");function u(e){(0,o.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,r.default)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}})),t.register("4LmDH",(function(t,a){function n(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}e(t.exports,"default",(()=>n))})),t.register("eqWMS",(function(a,n){e(a.exports,"default",(()=>s));var r=t("esGEx"),o=t("gdr0J"),u=t("4LmDH");function s(e,t){(0,u.default)(2,arguments);var a=(0,o.default)(e),n=(0,r.default)(t);if(isNaN(n))return new Date(NaN);if(!n)return a;var s=a.getDate(),l=new Date(a.getTime());return l.setMonth(a.getMonth()+n+1,0),s>=l.getDate()?l:(a.setFullYear(l.getFullYear(),l.getMonth(),s),a)}})),t.register("86sxN",(function(a,n){e(a.exports,"default",(()=>l));var r=t("gdr0J"),o=t("lm2ga"),u=t("4LmDH");function s(e,t){var a=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return a<0?-1:a>0?1:a}function l(e,t){(0,u.default)(2,arguments);var a=(0,r.default)(e),n=(0,r.default)(t),l=s(a,n),d=Math.abs((0,o.default)(a,n));a.setDate(a.getDate()-l*d);var i=l*(d-Number(s(a,n)===-l));return 0===i?0:i}})),t.register("lm2ga",(function(a,n){e(a.exports,"default",(()=>l));var r=t("9vfYB"),o=t("cJfMa"),u=t("4LmDH"),s=864e5;function l(e,t){(0,u.default)(2,arguments);var a=(0,o.default)(e),n=(0,o.default)(t),l=a.getTime()-(0,r.default)(a),d=n.getTime()-(0,r.default)(n);return Math.round((l-d)/s)}})),t.register("9vfYB",(function(t,a){function n(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}e(t.exports,"default",(()=>n))})),t.register("cJfMa",(function(a,n){e(a.exports,"default",(()=>u));var r=t("gdr0J"),o=t("4LmDH");function u(e){(0,o.default)(1,arguments);var t=(0,r.default)(e);return t.setHours(0,0,0,0),t}})),t.register("2sgOd",(function(a,n){e(a.exports,"default",(()=>s));var r=t("gdr0J"),o=t("bGZx9"),u=t("4LmDH");function s(e,t){var a,n;(0,u.default)(1,arguments);var s=(0,r.default)(e);if(isNaN(s.getTime()))throw new RangeError("Invalid time value");var l=String(null!==(a=null==t?void 0:t.format)&&void 0!==a?a:"extended"),d=String(null!==(n=null==t?void 0:t.representation)&&void 0!==n?n:"complete");if("extended"!==l&&"basic"!==l)throw new RangeError("format must be 'extended' or 'basic'");if("date"!==d&&"time"!==d&&"complete"!==d)throw new RangeError("representation must be 'date', 'time', or 'complete'");var i="",f="",c="extended"===l?"-":"",g="extended"===l?":":"";if("time"!==d){var m=(0,o.default)(s.getDate(),2),y=(0,o.default)(s.getMonth()+1,2),p=(0,o.default)(s.getFullYear(),4);i="".concat(p).concat(c).concat(y).concat(c).concat(m)}if("date"!==d){var v=s.getTimezoneOffset();if(0!==v){var h=Math.abs(v),b=(0,o.default)(Math.floor(h/60),2),w=(0,o.default)(h%60,2);f="".concat(v<0?"+":"-").concat(b,":").concat(w)}else f="Z";var D=""===i?"":"T",x=[(0,o.default)(s.getHours(),2),(0,o.default)(s.getMinutes(),2),(0,o.default)(s.getSeconds(),2)].join(g);i="".concat(i).concat(D).concat(x).concat(f)}return i}})),t.register("bGZx9",(function(t,a){function n(e,t){for(var a=e<0?"-":"",n=Math.abs(e).toString();n.length<t;)n="0"+n;return a+n}e(t.exports,"default",(()=>n))})),t.register("j5GxO",(function(e,a){e.exports=import("./"+t("27Lyk").resolve("fqlD0")).then((()=>t("jgkCe")))})),t.register("e7u6A",(function(e,a){e.exports=Promise.all([import("./"+t("27Lyk").resolve("fqlD0")),import("./"+t("27Lyk").resolve("7vBbt"))]).then((()=>t("lVBJL")))}));
//# sourceMappingURL=Events.5c88cac0.js.map