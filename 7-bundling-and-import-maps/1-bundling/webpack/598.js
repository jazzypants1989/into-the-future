"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[598],{598:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});var c=n(137),o=n(38);const u="pk_test_51Ls3YjJiFO7cOn9i5GWxoJdBk5iN6FnUgdaHgD2wBxN7bqVFfcMKXQI4v86fwqhxe4b8CjYOKZNjg2VrcU2yply200OxYQlFCt";async function a(){const t=document.getElementById("checkout");if(t&&t instanceof HTMLButtonElement){t.disabled=!0,t.style.cursor="not-allowed",t.style.opacity="0.5",t.textContent="Redirecting to Stripe... HOLD YOUR HORSES!";try{const t=await fetch("/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({line_items:(console.log("createLineItems",o.Nu),Object.keys(o.Nu).map((t=>{const e=Number(t);return{price_data:{currency:"usd",product_data:{name:o.Nu[e].product.title,images:[o.Nu[e].product.images[0]]},unit_amount:100*o.Nu[e].product.price},quantity:o.Nu[e].quantity}}))),mode:"payment",success_url:"http://localhost:3001/success",cancel_url:"http://localhost:3001/cancel"})}),e=await t.json();console.log(e);const c=await async function(){return(await n.e(465).then(n.bind(n,465))).loadStripe(u)}();await(c?.redirectToCheckout({sessionId:e.session.id}))}catch(e){console.error("error",e),t.disabled=!1,t.style.cursor="pointer",t.style.opacity="1",t.textContent="Hmmm... Something went wrong. Try again?"}}}const i=()=>Object.keys(o.Nu).map((t=>{const e=Number(t);return`\n      <div style="margin-bottom: 1rem;">\n      <a href="/product/${o.Nu[e].product.id}">\n        <img src="${o.Nu[e].product.images[0]}" />\n        <h2>${o.Nu[e].product.title}</h2>\n      </a>\n        <span>$${o.Nu[e].product.price}</span>\n        <span>Quantity: ${o.Nu[e].quantity}</span>\n      </div>\n    `})).join("");function r(){(0,c.ZP)({component:`\n    <div>\n      <h1>Checkout</h1>\n      ${i()}\n      <p>Total: ${Object.keys(o.Nu).reduce(((t,e)=>t+o.Nu[Number(e)].product.price*o.Nu[Number(e)].quantity),0)}</p>\n      <button id="checkout">Checkout (Redirect to Stripe)</button>\n    </div>\n`,callback:()=>document?.getElementById("checkout")?.addEventListener("click",a)})}}}]);