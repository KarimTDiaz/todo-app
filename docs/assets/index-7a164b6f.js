(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const l=document.getElementById("task-items"),d=()=>Date.now();let c=[];const m=e=>{l.innerHTML="",l.append(e)},o=e=>{const n=document.createDocumentFragment();e.forEach(s=>{const i=document.createElement("div"),t=document.createElement("label"),r=document.createElement("input"),a=document.createElement("img");i.classList.add("tasks__item"),t.classList.add("label"),t.textContent=s.task,t.htmlFor=s.id,r.id=s.id,r.checked=s.checked,r.type="checkbox",r.classList.add("input-checked"),a.src="assets/images/icon-cross.svg",a.classList.add("cross"),i.append(t,r,a),n.append(i)}),m(n)},u=e=>{const n=d(),s={};s.task=e,s.id=n,s.checked=!1,c.push(s),o(c)},f=e=>{c=c.map(s=>(Number(e)===s.id&&(s.checked=!s.checked),s)),o(c)},p=e=>{c=c.filter(s=>Number(e)!==s.id),o(c)},g=()=>{o(c)},k=()=>{let e=c.filter(n=>!n.checked);o(e)},y=()=>{let e=c.filter(n=>n.checked);o(e)},h=()=>{let e=c.filter(n=>!n.checked);c=e,o(e)},L=document.getElementById("create-todo"),E=document.getElementById("task-filters");L.addEventListener("submit",e=>{e.preventDefault(),u(e.target.todo.value),e.target.todo.value=""});l.addEventListener("click",e=>{if(e.target.classList.contains("cross")){p(e.target.previousElementSibling.id);return}e.target.tagName==="LABEL"&&f(e.target.htmlFor)});E.addEventListener("click",e=>{e.target.classList.contains("button--active")?k():e.target.classList.contains("button--completed")?y():e.target.classList.contains("button--all")?g():e.target.classList.contains("button--clear")&&h()});
