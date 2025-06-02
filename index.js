import{a as q,S as $,i as a}from"./assets/vendor-DFCQGEf1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const E="50632256-d176889c05d2eb53a5e69ee7e",M="https://pixabay.com/api/";async function b(s,e=1){try{return(await q.get(M,{params:{key:E,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}catch{return{hits:[],totalHits:0}}}const y=document.querySelector(".gallery");let w=new $(".gallery a",{captionsData:"alt",captionDelay:250});function R(s){try{const e=s.map(({webformatURL:o,largeImageURL:n,tags:t,likes:r,comments:i,views:d,downloads:g})=>{const p=t.split(",").map(f=>f.trim()).slice(0,5).join(", ");return`
            <li class="gallery-item">
                <a href="${n}" class="gallery-item">
                    <div class="img-container">
                        <img src="${o}" alt="${p}" />
                        <ul class="overlay">
                            <li class="stats">Likes ${r}</li>
                            <li class="stats">Views ${d}</li>
                            <li class="stats">Comments ${i}</li>
                            <li class="stats">Downloads ${g}</li>
                        </ul>
                    </div>
                </a>
            </li>`}).join("");y.innerHTML=e,w.refresh()}catch{iziToast.error({title:"Error",message:"Помилка при створенні галереї!",position:"topRight"})}}function T(s){const e=s.map(({webformatURL:o,largeImageURL:n,tags:t,likes:r,comments:i,views:d,downloads:g})=>{const p=t.split(",").map(f=>f.trim()).slice(0,5).join(", ");return`<li class="gallery-item">
                    <a href="${n}" class="gallery-item">
                    <div class="img-container">
                        <img src="${o}" alt="${p}" />
                        <ul class="overlay">
                            <li class="stats">Likes ${r}</li>
                            <li class="stats">Views ${d}</li>
                            <li class="stats">Comments ${i}</li>
                            <li class="stats">Downloads ${g}</li>
                        </ul>
                    </div>
                    </a>
                </li>`}).join("");y.insertAdjacentHTML("beforeend",e),w.refresh()}function x(){y.innerHTML=""}function P(){document.querySelector(".loader").classList.add("visible")}function v(){document.querySelector(".loader").classList.remove("visible")}function S(){document.querySelector(".more-btn").classList.add("visible")}function l(){document.querySelector(".more-btn").classList.remove("visible")}function B(){document.querySelector(".more-text").classList.add("visible")}function L(){document.querySelector(".more-text").classList.remove("visible")}const N=document.querySelector(".form"),D=document.querySelector("input[name='search-text']"),H=document.querySelector(".more-btn");let m=1,u="",c=0,h=0;N.addEventListener("submit",async s=>{if(s.preventDefault(),u=D.value.trim(),!u){a.error({title:"Error",message:"Search query cannot be empty!",position:"topRight"});return}m=1,c=0,x(),l(),P();try{const e=await b(u,m);if(v(),e.hits.length===0){a.warning({title:"No results",message:"Sorry, no images match your search query. Try again!",position:"topRight"});return}h=Math.min(e.totalHits,500),R(e.hits),c+=e.hits.length,c>=h?(a.info({title:"End of results",message:"No more images found.",position:"topRight"}),l()):S()}catch{v(),a.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}});H.addEventListener("click",async()=>{m++,l(),B();try{const s=await b(u,m);if(L(),s.hits.length===0){a.info({title:"End of results",message:"No more images found.",position:"topRight"}),l();return}T(s.hits),c+=s.hits.length;const e=document.querySelector(".gallery").firstElementChild;if(e){const{height:o}=e.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}c>=h?(a.info({title:"End of results",message:"No more images found.",position:"topRight"}),l()):S()}catch{L(),a.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}});
//# sourceMappingURL=index.js.map
