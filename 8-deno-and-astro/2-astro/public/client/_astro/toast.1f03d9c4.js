let r=[],d=0;const i=document.querySelector("#toast-container");function l(n,t){const s=`toast-${d++}`;t||(t={});const e={id:s,message:n,options:t};r.push(e);const a=t?.duration??3e3;return setTimeout(()=>{c(s)},a),i&&i.appendChild(u(e)),s}function c(n){const t=document.querySelector(`#${n}`);!t||!(t instanceof HTMLElement)||(t.classList.add("toast-out"),t.addEventListener("animationend",()=>{r=r.filter(s=>s.id!==n),t.remove()}))}function u({id:n,message:t,options:s}){const e=document.createElement("div"),a=s?.type;e.classList.add("toast"),e.id=n,a&&e.classList.add(a),e.setAttribute("role","alert"),e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.innerHTML=`
    <div class="toast-header">
        ${a==="success"?"Hooray!":"Aww, shucks!"}
    </div>
    <div class="toast-body">
        ${t}
    </div>
    `;const o=document.createElement("button");return o.textContent="X",o.addEventListener("click",()=>{c(n)}),e.appendChild(o),e}export{l as a};
