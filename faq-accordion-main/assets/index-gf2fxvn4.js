(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function n(){const i=document.querySelectorAll(".faqs__btn");i.forEach(o=>{o.addEventListener("click",()=>{o.classList.toggle("active");let r=o.parentElement.querySelector(".faqs__description");r.style.maxHeight?(r.style.maxHeight=null,r.style.marginBottom=0):(r.style.maxHeight=r.scrollHeight+"px",r.style.marginBottom="20px")})}),i[0].click()}n(document.querySelector(".faqs"));
