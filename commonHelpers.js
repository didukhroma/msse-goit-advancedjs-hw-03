import{a as l,i as g,S as y}from"./assets/vendor-044cfab3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function c(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=c(t);fetch(t.href,n)}})();const S="live_ZzU8YmZ7BGhDcZ8MoDPGW2AQRGZIcfWPEIZZjYxQWLV1MkJb0N7UBeYzQ3cB5Bs5",b="https://api.thecatapi.com/v1",d={fetchAll:"/breeds",fetchCat:"/images/search?breed_ids="},f="visually-hidden",o={select:document.querySelector(".breed-select"),selectWrapper:document.querySelector(".select-wrapper"),loader:document.querySelector(".loader-wrapper"),catInfo:document.querySelector(".cat-info")};l.defaults.headers.common["x-api-key"]=S;l.defaults.baseURL=b;function v(){return l(d.fetchAll)}function L(e){return l({url:`${d.fetchCat}${e}`})}const E=3e3,I={title:"Error",timeout:E,position:"topCenter",message:"Oops! Something went wrong! Try reloading the page!"};function A(){g.error(I)}function i(e){e.classList.remove(f)}function a(e){e.classList.add(f)}function T({url:e,name:r,description:c,temperament:s}){const t=`<div class="cat-info-thumb">
    <img src="${e}" alt="${r} lazy-loading" />
    </div><div class="cat-info-wrapper">
     <h1 class="cat-info-title">${r}</h1>
     <p class="cat-info-description">${c}</p>
     <p class="cat-info-behavior"> <span class="cat-info-behavior-accent">Temperament: </span>${s}</p>
     </div>`;o.catInfo.innerHTML=t}function p(e){if(e.status!==200)throw new Error(e.status);return e.data}function h(e){a(o.loader),A(),console.log(e)}function w(e){return e.map(({id:r,name:c})=>({text:c,value:r}))}function B(e){const{breeds:r,url:c}=e[0],{name:s,description:t,temperament:n}=r[0];return{url:c,name:s,description:t,temperament:n}}const m="placeholder",D={select:".breed-select",settings:{placeholderText:"Select breed"},events:{beforeChange:()=>{i(o.loader),a(o.selectWrapper),a(o.catInfo)},afterChange:e=>{const{value:r}=e[0];r!==m&&L(r).then(p).then(B).then(T).then(()=>{a(o.loader),i(o.selectWrapper),i(o.catInfo)}).catch(h)}}},C=new y(D);function $(e){return[{value:`${m}`,text:"Select Breed",display:!1},...e]}function M(){i(o.loader),a(o.select),v().then(p).then(w).then($).then(e=>{setTimeout(()=>{a(o.loader),i(o.select)},500),C.setData(e)}).catch(h)}M();
//# sourceMappingURL=commonHelpers.js.map
