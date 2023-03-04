(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))h(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&h(i)}).observe(document,{childList:!0,subtree:!0});function b(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function h(e){if(e.ep)return;e.ep=!0;const o=b(e);fetch(e.href,o)}})();const k=r=>new Promise((t,b)=>{const h=document.createElement("script");h.innerHTML=r.innerHTML;const e=r.getAttribute("src");e&&h.setAttribute("src",e),h.onload=()=>t(),h.onerror=o=>b(),document.head.appendChild(h),document.head.removeChild(h),e||t()});document.querySelector("head").innerHTML=`
    ${document.querySelector("head").innerHTML}

`;document.querySelector("#app").innerHTML=`
<!-- \u97F3\u4E50 -->
<audio id="audio" autoplay="autoplay" loop>
      <source src="music/happy-birthday.mp3" type="audio/mp3" />
</audio>

	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<bokeh></bokeh>
	<div class="pyro">
	<div class="before"></div>
	<div class="after"></div>
	</div>
	<h1>Safe, healthy and happy!</h1>
	<h2>Happy Birthday Dabao!</h2>
	<div class="birthday-container">
		<div class="candle">
		<div id="flame" class="lit"></div>
		</div>
		<div class="cake"></div>
		<div class="plate"></div>
	</div>
`;window.addEventListener("load",function(){const r=document.querySelector("#audio");document.body.addEventListener("click",function(){r.paused&&r.play()});const t=document.querySelector("#app").querySelectorAll("script");Array.prototype.slice.apply(t).reduce((b,h)=>b.then(()=>k(h)),Promise.resolve())});
