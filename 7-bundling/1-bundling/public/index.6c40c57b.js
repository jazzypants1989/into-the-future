function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire286e;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire286e=o),o.register("27Lyk",(function(t,r){var n,o;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var a={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("6trHI",(function(t,r){e(t.exports,"default",(()=>a));var n=o("eOHur");function a(e,t){switch(document.title="404",e){case"badID":(0,n.default)({component:`<h1>404</h1><h2>Sorry buddy, but I don't think we have a product with id #${t}.</h2>`});break;case"badFetch":(0,n.default)({component:"<h1>404</h1><h2>Dang, either the server is down or someone misspelled a URL. Whatever it is, it's probably Jesse's fault.</h2>"});break;case"error":(0,n.default)({component:`<h1>That's Weird!</h1><h4>${t}</h4>`});break;default:(0,n.default)({component:`<h1>404</h1><h2>Huh, you're at ${location.pathname}, but you really shouldn't be... 🤔 </h2>`})}}})),o.register("eOHur",(function(t,r){e(t.exports,"default",(()=>s)),e(t.exports,"buttonFinderAdd",(()=>d)),e(t.exports,"buttonFinderRemove",(()=>l));var n=o("1GhVf"),a=o("4zybi"),i=o("loKau"),c=o("6trHI");function s({component:e,callback:t}){!function(){if(!u||!f)return;f.style.viewTransitionName="activeImage"}(),function({skipTransition:e=!1,classNames:t=[],updateDOM:r=(()=>{})}){if(e||!document.startViewTransition){const e=Promise.resolve(r());return{ready:Promise.reject(Error("View transitions unsupported")),updateCallbackDone:e,finished:e}}document.startViewTransition(r)}({updateDOM:()=>{if(!i.main)throw new Error("No main element found");e||(0,c.default)("error","No component provided"),i.main.innerHTML=e,i.main.scrollTop=0,function(){if(!u)return;const e=document.querySelector("img");e&&(e.classList.add("activeImage"),e.style.viewTransitionName="activeImage")}(),t&&t()}})}async function d(){const e=await(0,a.getProducts)();Array.from(document.querySelectorAll(".add-to-cart")).forEach((t=>{t.alreadyAdded||(t.alreadyAdded=!0,t.addEventListener("click",(t=>{const r=t.target.id,o=e.find((e=>e.id===Number(r)));o?(0,n.addToCart)(o):(0,c.default)("badID",r)})))}))}async function l(){const e=await(0,a.getProducts)();Array.from(document.querySelectorAll(".remove-from-cart")).forEach((t=>{t.alreadyAdded||(t.alreadyAdded=!0,t.addEventListener("click",(t=>{const r=t.target;if(!r||!function(e){return"alreadyAdded"in e}(r))return;const o=r.id,a=e.find((e=>e.id===Number(o)));a?(0,n.removeFromCart)(a):(0,c.default)("badID",o)})))}))}let u=!1,f=null;document.addEventListener("click",(e=>{const t=e.target;if("IMG"===t.tagName||t.parentNode instanceof HTMLAnchorElement)if(u=!0,"IMG"===t.tagName)f=t;else{const e=t.parentNode?.querySelector("img");e&&(f=e)}else u=!1}))})),o.register("1GhVf",(function(t,r){e(t.exports,"cart",(()=>a)),e(t.exports,"default",(()=>i)),e(t.exports,"addToCart",(()=>c)),e(t.exports,"removeFromCart",(()=>s));var n=o("aIKE6");let a=JSON.parse(localStorage.getItem("cart")||"{}");function i(){const e=document.querySelector("#cart-count"),t=document.querySelector("#cart-total");if(!e||!t)throw new Error("No cart count or cart amount found");e.innerText=Object.keys(a).length.toString(),t.innerText="$"+Object.values(a).map((e=>e.product.price*e.quantity)).reduce(((e,t)=>e+t),0).toFixed(2)}function c(e){a[e.id]?a[e.id].quantity++:a[e.id]={quantity:1,product:e},localStorage.setItem("cart",JSON.stringify(a)),alert(`${e.title} added to cart!`),i()}function s(e){a[e.id].quantity--,0===a[e.id].quantity&&delete a[e.id],localStorage.setItem("cart",JSON.stringify(a)),alert(`${e.title} removed from cart!`),i(),(0,n.default)()}})),o.register("aIKE6",(function(t,r){var n;n=t.exports,Object.defineProperty(n,"__esModule",{value:!0,configurable:!0}),e(t.exports,"default",(()=>s));var a=o("4zybi"),i=o("eOHur"),c=o("6trHI");async function s(){const e=JSON.parse(localStorage.getItem("cart")||"{}");document.title="Cart";const t=await(0,a.getProducts)();if(0===Object.keys(e).length)(0,i.default)({component:"\n          <h1>Cart</h1>\n          <p>Your cart is empty. Go buy some weird stuff!</p>\n          "});else{const r=Object.keys(e).map((r=>{const n=t.find((e=>e.id===Number(r)));return n?`\n            <div class="product">\n              <img src="${n?.thumbnail}" alt="${n?.title}" />\n              <h2>${n?.title}</h2>\n              <p>$${n?.price}</p>\n              <p>Quantity: ${e[r].quantity}</p>\n              <button class="remove-from-cart" id="${n?.id}">Remove from cart</button>\n            </div>\n            `:(0,c.default)("badID",r)}));(0,i.default)({component:`\n          <h1>Cart</h1>\n          ${r.join("")}\n          `,callback:i.buttonFinderRemove})}}})),o.register("4zybi",(function(t,r){e(t.exports,"getProducts",(()=>c)),e(t.exports,"getProduct",(()=>s)),e(t.exports,"createSpinner",(()=>d));var n=o("6trHI");let a=[];const i=async()=>{const e=await fetch("https://dummyjson.com/products");if(!e.ok)return alert("HTTP-Error: "+e.status),console.error(e),(0,n.default)("badFetch",e.status);return await e.json()};async function c(){if(a.length>0)return console.trace("products already loaded"),a;const e=await i();return a=e.products,a}async function s(e){return a=await c(),a.find((t=>t.id===Number(e)))}function d(){const e=document.createElement("div");return e.classList.add("spinner"),e}})),o.register("loKau",(function(t,r){e(t.exports,"main",(()=>d)),e(t.exports,"default",(()=>l));var n=o("c9nz9"),a=o("g2M5J"),i=o("4zybi"),c=o("6trHI"),s=o("eOHur");const d=document.querySelector(".main");async function l(e){if(function(e){if(!e)return;return!e.canIntercept||e.hashChange||e.downloadRequest||e.formData}(e))return void console.log("shouldNotIntercept");const t=e?e.destination.url:location.href,r=new URL(t),o=r.pathname,l=document.querySelector("nav"),u="flex"===l?.style.display,f=window.matchMedia("(max-width: 768px)");if(u&&f.matches&&(l.style.display="none"),e&&o===location.pathname)return void e.intercept({async handler(){alert("We're already here! Silly Billy! *honk honk* 🤡 (that's you)"),e.preventDefault()}});const p=new URLSearchParams(r.search).get("search"),m=(0,i.createSpinner)(),h=d?.innerHTML||"";if(function(e,t,r,n){if(e&&e.formData)return;setTimeout((()=>{if(t===d?.innerHTML){if(!d)return;document.title="Loading...";const e=document.createElement("h1");e.textContent="Loading...",(0,s.default)({component:e.outerHTML+r.outerHTML})}}),n)}(e,h,m,300),p&&a.search instanceof HTMLInputElement)return a.search.value=p,(0,a.searchHandler)();e?e.intercept({scroll:"manual",async handler(){e.signal.onabort=()=>{d&&(d.innerHTML=h||"")};try{await(0,n.Route)(o)}catch(e){if(console.error("error",e),!d)return;(0,c.default)("error","Something went wrong. Super helpful, I know.")}}}):await(0,n.Route)(o)}window.navigation.addEventListener("navigate",l)})),o.register("c9nz9",(function(t,r){e(t.exports,"Route",(()=>c));var n=o("6trHI");const a={home:()=>o("6wNeX"),about:()=>o("c1qSj"),products:()=>o("dMRTY"),productpage:()=>o("hilYi"),cart:()=>Promise.resolve(o("aIKE6")),checkout:()=>o("3K9pI"),success:()=>o("9sCUr"),events:()=>o("9MKKR")},i=[{path:"/",component:"home"},{path:"/about",component:"about"},{path:"/products",component:"products"},{path:"/product",component:"productpage",dynamic:!0},{path:"/cart",component:"cart"},{path:"/checkout",component:"checkout"},{path:"/success",component:"success"},{path:"/events",component:"events"}];async function c(e){const t=i.find((t=>t.path.split("/")[1]===e.split("/")[1]));if(!t)return void(0,n.default)("404",e);const r=await a[t.component]();if(t.dynamic){const t=e.split("/")[e.split("/").length-1];return r.default(t)}return r.default()}})),o.register("6wNeX",(function(e,t){e.exports=Promise.all([import("./"+o("27Lyk").resolve("h17xF")),import("./"+o("27Lyk").resolve("ir2Hu"))]).then((()=>o("gBDbO")))})),o.register("c1qSj",(function(e,t){e.exports=Promise.all([import("./"+o("27Lyk").resolve("h17xF")),import("./"+o("27Lyk").resolve("i1cH4"))]).then((()=>o("fU7rG")))})),o.register("dMRTY",(function(e,t){e.exports=Promise.all([import("./"+o("27Lyk").resolve("h17xF")),import("./"+o("27Lyk").resolve("8Gtxs"))]).then((()=>o("2Rujx")))})),o.register("hilYi",(function(e,t){e.exports=Promise.all([import("./"+o("27Lyk").resolve("h17xF")),import("./"+o("27Lyk").resolve("jNhXN"))]).then((()=>o("4Citp")))})),o.register("3K9pI",(function(e,t){e.exports=Promise.all([import("./"+o("27Lyk").resolve("h17xF")),import("./"+o("27Lyk").resolve("lSbPr"))]).then((()=>o("fZaw4")))})),o.register("9sCUr",(function(e,t){e.exports=Promise.all([import("./"+o("27Lyk").resolve("h17xF")),import("./"+o("27Lyk").resolve("4PfOy"))]).then((()=>o("4Pm74")))})),o.register("9MKKR",(function(e,t){e.exports=Promise.all([import("./"+o("27Lyk").resolve("h17xF")),import("./"+o("27Lyk").resolve("8hHGh"))]).then((()=>o("im2dl")))})),o.register("g2M5J",(function(t,r){e(t.exports,"search",(()=>c)),e(t.exports,"searchListener",(()=>s)),e(t.exports,"searchHandler",(()=>d));var n=o("eOHur"),a=o("4zybi"),i=o("i2Q06");const c=document.querySelector("#search");function s(){if(!c)throw new Error("No search element found");c.addEventListener("input",d)}async function d(){const e=await(0,a.getProducts)(),t=c.value;document.title="Search Page for "+t;const r=e.filter((e=>e.title.toLowerCase().includes(t.toLowerCase())));if(0===r.length)(0,n.default)({component:"<h1>Products</h1><p>No Products Found</p>"});else{const e=r.map(i.default).join("");(0,n.default)({component:`<h1>Products</h1>${e}`,callback:n.buttonFinderAdd})}}})),o.register("i2Q06",(function(t,r){function n(e){return`\n            <div class="product" id="${e.id}">\n              <a href=/product/${e.id}>\n                <img src="${e.thumbnail}" alt="${e.title}" loading="lazy"/>\n              <h2>${e.title}</h2>\n              </a>\n              <p>${e.description}</p>\n              <p>$${e.price}</p>\n              <button class="add-to-cart" id="${e.id}">Add to cart</button>\n              <a href="/">Back to home</a>\n            </div>\n            `}e(t.exports,"default",(()=>n))})),o("27Lyk").register(JSON.parse('{"dsGxY":"index.6c40c57b.js","ir2Hu":"Home.8a68bd93.js","7yIvH":"diana.9b79cc38.jpg","h17xF":"Cart.f594d3c1.js","i1cH4":"About.4ac16415.js","8Gtxs":"Products.9ac6b321.js","jNhXN":"ProductPage.6345e956.js","lSbPr":"Checkout.674b541d.js","4DaNn":"stripe.esm.e7a23e28.js","4PfOy":"Success.37d43f58.js","8hHGh":"Events.595141ec.js","fqlD0":"core.2c08853d.js","7vBbt":"daygrid.5aac371d.js","kLCmh":"index.714304a2.css"}'));var a=o("loKau"),i=o("g2M5J");const c=document.querySelector("#toggleTheme"),s=localStorage.getItem("theme");(0,o("1GhVf").default)(),document.body.className=s||"dark",c?.addEventListener("click",(()=>{const e=localStorage.getItem("theme")||"dark",t="dark"===e?"purple":"purple"===e?"green":"dark";localStorage.setItem("theme",t),document.body.className=t})),(0,i.searchListener)(),function(){const e=document.querySelector("#hamburger");if(!e)throw new Error("Hamburger menu not found");e.addEventListener("click",(()=>{const e=document.querySelector("nav");if(!e)throw new Error("Nav element not found");const t=document.querySelector("nav ul");if(!t)throw new Error("Nav ul element not found");const r=window.innerHeight;"flex"===e.style.display?(t.style.height="0px",t.style.fontSize="initial",setTimeout((()=>{e.style.display="none"}),480)):(e.style.display="flex",setTimeout((()=>{t.style.height=r+"px",t.style.fontSize="2rem"}))),window.addEventListener("resize",(()=>{window.innerWidth>768?(e.style.display="flex",t.style.height="initial",t.style.fontSize="initial"):(e.style.display="none",t.style.height="0px",t.style.fontSize="initial")}))}))}(),(0,a.default)();
//# sourceMappingURL=index.6c40c57b.js.map
