import{g as a,P as s,r as t,b as c}from"./App.js";async function o(){document.title="Products";const o=await a(),n=Object.values(o).map((a=>s(a))).join("");t({component:`\n      <h1>Products</h1>\n      <div class="products">${n}</div>\n    `,callback:c})}export{o as default};