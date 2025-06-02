import{a as w,S,i as n}from"./assets/vendor-DFCQGEf1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const q="50632256-d176889c05d2eb53a5e69ee7e",$="https://pixabay.com/api/";async function v(s,t=1){try{return(await w.get($,{params:{key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data.hits}catch{return[]}}const y=document.querySelector(".gallery");let L=new S(".gallery a",{captionsData:"alt",captionDelay:250});function E(s){try{const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,comments:i,views:m,downloads:d})=>{const g=e.split(",").map(p=>p.trim()).slice(0,5).join(", ");return`
            <li class="gallery-item">
                <a href="${a}" class="gallery-item">
                    <div class="img-container">
                        <img src="${o}" alt="${g}" />
                        <ul class="overlay">
                            <li class="stats">Likes ${r}</li>
                            <li class="stats">Views ${m}</li>
                            <li class="stats">Comments ${i}</li>
                            <li class="stats">Downloads ${d}</li>
                        </ul>
                    </div>
                </a>
            </li>`}).join("");y.innerHTML=t,L.refresh()}catch{iziToast.error({title:"Error",message:"Помилка при створенні галереї!",position:"topRight"})}}function T(s){const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,comments:i,views:m,downloads:d})=>{const g=e.split(",").map(p=>p.trim()).slice(0,5).join(", ");return`<li class="gallery-item">
                    <a href="${a}" class="gallery-item">
                    <div class="img-container">
                        <img src="${o}" alt="${g}" />
                        <ul class="overlay">
                            <li class="stats">Likes ${r}</li>
                            <li class="stats">Views ${m}</li>
                            <li class="stats">Comments ${i}</li>
                            <li class="stats">Downloads ${d}</li>
                        </ul>
                    </div>
                    </a>
                </li>`}).join("");y.insertAdjacentHTML("beforeend",t),L.refresh()}function x(){y.innerHTML=""}function M(){document.querySelector(".loader").classList.add("visible")}function f(){document.querySelector(".loader").classList.remove("visible")}function b(){document.querySelector(".more-btn").classList.add("visible")}function l(){document.querySelector(".more-btn").classList.remove("visible")}function P(){document.querySelector(".more-text").classList.add("visible")}function h(){document.querySelector(".more-text").classList.remove("visible")}const R=document.querySelector(".form"),B=document.querySelector("input[name='search-text']"),O=document.querySelector(".more-btn");let u=1,c="";R.addEventListener("submit",async s=>{if(s.preventDefault(),c=B.value.trim(),!c){n.error({title:"Error",message:"Search query cannot be empty!",position:"topRight"});return}u=1,x(),l(),M();try{const t=await v(c,u);if(f(),t.length===0){n.warning({title:"No results",message:"Sorry, no images match your search query. Try again!",position:"topRight"});return}E(t),t.length===15?b():l()}catch{f(),n.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}});O.addEventListener("click",async()=>{u++,l(),P();try{const s=await v(c,u);if(h(),s.length===0){n.info({title:"End of results",message:"No more images found.",position:"topRight"}),l();return}T(s);const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),s.length<15?l():b()}catch{h(),n.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}});
//# sourceMappingURL=index.js.map
