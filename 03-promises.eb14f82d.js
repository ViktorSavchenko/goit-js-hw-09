var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var n=r("iQIUW");const i=document.querySelector(".form");let a={};function l(e,t){return new Promise(((o,r)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}i.addEventListener("submit",(function(e){e.preventDefault(),function({delay:e,step:t,amount:o}={}){let r=Number(e);for(let e=1;e<=o;e+=1)l(e,r).then((({position:e,delay:t})=>n.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`))).catch((({position:e,delay:t})=>n.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`))),r+=Number(t)}(a),localStorage.removeItem("form-storage"),e.target.reset(),a={}})),i.addEventListener("change",(function(e){a[e.target.name]=e.target.value.trim();const t=JSON.stringify(a);localStorage.setItem("form-storage",t)})),function(){const e=localStorage.getItem("form-storage");if(e)try{a=JSON.parse(e),Object.entries(a).forEach((([e,t])=>i.elements[e].value=t))}catch(e){console.log(e.message)}}();
//# sourceMappingURL=03-promises.eb14f82d.js.map