document.getElementById("close-pop-up-btn").addEventListener("click",(function(){document.getElementById("divpopup").style.display="none"})),document.addEventListener("DOMContentLoaded",(function(){function e(){window.scrollTo({top:0,behavior:"smooth"});let e=document.getElementById("submit-btn");e&&e.click();let t=document.getElementById("email");t&&t.focus()}["btn-1","btn-2","btn-3","btn-4","btn-5","btn-6","btn-7","btn-8"].forEach((t=>{let n=document.getElementById(t);n&&n.addEventListener("click",e)}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".accordion .checkbox");e.forEach((t=>{t.addEventListener("change",(function(){this.checked&&e.forEach((e=>{e!==this&&(e.checked=!1)}))}))}))})),document.addEventListener("DOMContentLoaded",(function(){let e=document.getElementById("counter"),t=new IntersectionObserver((function(n){let l,o;n[0].isIntersecting&&(l=0,o=setInterval((function(){l++,e.textContent=l+"+",l>=14&&clearInterval(o)}),100),t.disconnect())}),{threshold:.5});t.observe(e)})),document.addEventListener("DOMContentLoaded",(function(){let e=document.getElementById("counter1"),t=new IntersectionObserver((function(n){let l,o;n[0].isIntersecting&&(l=0,o=setInterval((function(){l++,e.textContent=l+"+",l>=20&&clearInterval(o)}),100),t.disconnect())}),{threshold:.5});t.observe(e)})),document.addEventListener("DOMContentLoaded",(function(){let e=document.getElementById("counter2"),t=new IntersectionObserver((function(n){let l,o;n[0].isIntersecting&&(l=100,o=setInterval((function(){l++,e.textContent=l+"+",l>=200&&clearInterval(o)}),20),t.disconnect())}),{threshold:.5});t.observe(e)})),document.addEventListener("DOMContentLoaded",(function(){let e=document.getElementById("counter3"),t=new IntersectionObserver((function(n){let l,o;n[0].isIntersecting&&(l=0,o=setInterval((function(){l++,e.innerHTML=l+"<span>/10</span>",l>=8&&clearInterval(o)}),100),t.disconnect())}),{threshold:.5});t.observe(e)}));const tabs=document.querySelector(".tabs"),btns=document.querySelectorAll(".button"),articles=document.querySelectorAll(".content");function openTab(e){document.querySelectorAll(".tab-content").forEach((e=>e.classList.remove("active"))),document.querySelectorAll(".tab-btn").forEach((e=>e.classList.remove("active"))),document.getElementById(e).classList.add("active"),event.currentTarget.classList.add("active")}tabs.addEventListener("click",(function(e){let t=e.target.dataset.id,n=t.split("p")[1];if(t){btns.forEach((function(e){e.classList.remove("live")})),btns[n-1].classList.add("live"),articles.forEach((function(e){e.classList.remove("live")})),document.getElementById(t).classList.add("live")}}));let index=0;const slides=document.querySelectorAll(".slide"),slider=document.querySelector(".slider"),prevButton=document.getElementById("prev"),nextButton=document.getElementById("next");function moveSlide(e){(index+=e)<=0?(index=0,prevButton.style.display="none"):prevButton.style.display="block",index>=slides.length-1?(index=slides.length-1,nextButton.style.display="none"):nextButton.style.display="block",slider.style.transform=`translateX(-${100*index}%)`}const galleryContainer=document.querySelector(".gallery-container"),gallery=document.querySelector(".gallery"),gallerySlides=Array.from(gallery.querySelectorAll(".a-div"));let currentIndex=0;const galleryTotalSlides=gallerySlides.length,visibleSlides=3;let slideGap=35,gallerySlideWidth=gallerySlides[0].clientWidth;galleryContainer.style.width=3*gallerySlideWidth+2*slideGap+"px";const galleryFirstClone=gallerySlides[0].cloneNode(!0),galleryLastClone=gallerySlides[galleryTotalSlides-1].cloneNode(!0);gallery.appendChild(galleryFirstClone),gallery.insertBefore(galleryLastClone,gallerySlides[0]);const updatedGallerySlides=Array.from(gallery.querySelectorAll(".a-div")),dotsContainer=document.createElement("div");dotsContainer.classList.add("dots-container12"),galleryContainer.appendChild(dotsContainer);for(let e=0;e<galleryTotalSlides;e++){let t=document.createElement("span");t.classList.add("dot"),t.setAttribute("data-index",e),t.addEventListener("click",(()=>moveGalleryTo(e))),dotsContainer.appendChild(t)}function updateDots(){document.querySelectorAll(".dot").forEach(((e,t)=>{e.classList.toggle("active",t===currentIndex)}))}function moveGallery(e){let t=galleryTotalSlides-1;(currentIndex+=e)<0?currentIndex=t:currentIndex>t&&(currentIndex=0),updatedGallerySlides.forEach((e=>e.style.transform=`translateX(-${currentIndex*gallerySlideWidth+slideGap*currentIndex}px)`)),updateDots()}function moveGalleryTo(e){currentIndex=e,updatedGallerySlides.forEach((e=>e.style.transform=`translateX(-${currentIndex*gallerySlideWidth+slideGap*currentIndex}px)`)),updateDots()}updateDots();let tabss=document.querySelectorAll(".tab-sec8"),containers=document.querySelectorAll(".logo-container"),currentIndexx=0;function showTab(e){tabss.forEach(((t,n)=>{t.classList.toggle("active",n===e),containers[n].classList.toggle("active",n===e)})),currentIndexx=e}tabss.forEach(((e,t)=>{e.addEventListener("click",(()=>showTab(t)))})),document.getElementById("prevBtn").addEventListener("click",(()=>{showTab(currentIndexx=0===currentIndexx?tabss.length-1:currentIndexx-1)})),document.getElementById("nextBtn").addEventListener("click",(()=>{showTab(currentIndexx=currentIndexx===tabss.length-1?0:currentIndexx+1)})),(()=>{let e,t=document.querySelector(".slider-container23"),n=t.querySelector(".testimonial-slider"),l=t.querySelectorAll(".testimonial"),o=l.length,r=0,c=l[0].clientWidth,a=l[0].cloneNode(!0),s=l[o-1].cloneNode(!0);n.appendChild(a),n.insertBefore(s,l[0]),n.style.transform=`translateX(-${c+36}px)`;let d=document.querySelector(".slider-dot-container");for(let e=0;e<o;e++){let t=document.createElement("div");t.classList.add("dot"),0===e&&t.classList.add("active"),t.addEventListener("click",(()=>u(e))),d.appendChild(t)}let i=e=>{let n=Array.from(t.querySelectorAll(".dot"));n.forEach((e=>e.classList.remove("active"))),n[e].classList.add("active")},u=e=>{r=e,n.style.transition="transform 1.5s ease-in-out",n.style.transform=`translateX(-${c*(r+1)+36*(r+1)}px)`,i(e)},m=0,y=0;t.addEventListener("touchstart",(function(e){m=e.touches[0].clientX})),t.addEventListener("touchend",(function(t){y=t.changedTouches[0].clientX,clearInterval(e),y<m-50?(console.log("Swiped Left",r),r<l.length-1&&u(r+1)):y>m+50&&(console.log("Swiped Right",r),r>0&&u(r-1))})),e=setInterval((()=>{u(r=(r+1)%o)}),5e3)})();const testing_accordion=document.getElementById("testing-accordion"),show_accordion_btn=document.getElementById("show-more-accordion");testing_accordion.style.height="0px",show_accordion_btn.addEventListener("click",(()=>{testing_accordion.style.height="auto",show_accordion_btn.style.display="none"})),document.addEventListener("DOMContentLoaded",(function(){let e=document.getElementById("custom-slider"),t=e.querySelectorAll(".cus-tab-btn"),n=e.querySelectorAll(".cus-tab-wrapper");t.forEach(((e,l)=>{e.addEventListener("click",(()=>{console.log("clicked"),t.forEach((e=>e.classList.remove("active"))),e.classList.add("active"),n.forEach((e=>e.classList.remove("active"))),n[l].classList.add("active")}))}))}));const sliderPlay=(e,t)=>{let n=e.querySelector(".mask"),l=e.querySelector(".navigation_btns"),o=Array.from(n.querySelectorAll(".zoom_slide")),r=0,c=Array.from(e.querySelectorAll(".zoom_slide"));console.log(c.length);let a=e=>{r=e;let n=Array.from(l.querySelectorAll(".dot"));n.forEach((e=>e.classList.remove("active"))),n[e].classList.add("active");let o=18*c[e].clientWidth/100;c.forEach((n=>{n.classList.remove("active"),n.style.transform=t?`translateX(calc( ${-100*e}% - ${16*e}px + ${o}px )) scaleY(0.9)`:`translateX(calc( ${-100*e}% - ${16*e}px + ${o}px )) scaleY(1)`,n.style.transition="transform 0.5s ease-in-out"})),c[e].classList.add("active"),c[e].style.transform=`translateX(calc( ${-100*e}% - ${16*e}px + ${o}px )) scaleY(1)`};o.forEach(((e,t)=>{let n=document.createElement("div");n.classList.add("dot"),!0===e.classList.contains("active")&&n.classList.add("active"),n.addEventListener("click",(()=>a(t))),l.appendChild(n)}));let s=0,d=0;e.addEventListener("touchstart",(function(e){s=e.touches[0].clientX})),e.addEventListener("touchend",(function(e){d=e.changedTouches[0].clientX,d<s-50?r<o.length-1&&a(r+1):d>s+50&&r>0&&a(r-1)})),a(r),setInterval((()=>{r=(r+1)%o.length,a(r)}),5e3)};document.addEventListener("DOMContentLoaded",(()=>{sliderPlay(document.querySelector("#zoom_slider"),zoom=!0),sliderPlay(document.querySelector("#simpleSlider"),zoom=!1),sliderPlay(document.querySelector("#testimonialSlider"),zoom=!1)}));const closePopupButton=document.getElementById("close-pop-up-btn");closePopupButton.addEventListener("click",(()=>{document.getElementById("divpopup").style.display="none"}));const ctaClickBtn=Array.from(document.querySelectorAll(".cta-click"));ctaClickBtn.forEach((e=>{e.addEventListener("click",(()=>{document.getElementById("firstname-2").focus()}))})),document.addEventListener("DOMContentLoaded",(()=>{Array.from(document.querySelectorAll(".youtube-light-box")).forEach((e=>{e.addEventListener("click",(()=>{let t=e.getAttribute("data-link"),n=document.querySelector(".lightbox-popup"),l=n.querySelector(".lightbox-frame"),o=n.querySelector(".lightbox-close");n.style.display="flex",l.innerHTML=`<iframe width="600" height="337" src="${t}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,o.addEventListener("click",(()=>{n.style.display="none"}))}))}))}));const sliderPlays=e=>{let t=e.querySelector(".mask"),n=e.querySelector(".navigation_btns"),l=Array.from(t.querySelectorAll(".youtube-slide")),o=0;console.log(l.length);let r=e=>{o=e;let l=Array.from(n.querySelectorAll(".dot"));l.forEach((e=>e.classList.remove("active"))),l[e].classList.add("active");let r=-100*e;t.style.transform=`translateX(${r}%)`,t.style.transition="transform 0.5s ease-in-out"};function c(){o=(o+1)%l.length,r(o)}l.forEach(((e,t)=>{let l=document.createElement("div");l.classList.add("dot"),0===t&&l.classList.add("active"),l.addEventListener("click",(()=>r(t))),n.appendChild(l)}));let a=0,s=0;e.addEventListener("touchstart",(e=>{a=e.touches[0].clientX})),e.addEventListener("touchend",(e=>{s=e.changedTouches[0].clientX,s<a-50?c():s>a+50&&r((o-1+l.length)%l.length)})),setInterval(c,5e3)};document.addEventListener("DOMContentLoaded",(()=>{sliderPlays(document.querySelector(".youtube_slider"))}));const hamburgerBtn=document.getElementById("hamburger-btn"),hamburgerIcon=document.getElementById("hamburger-icon"),navMenu=document.querySelector(".nav1");hamburgerBtn.addEventListener("click",(()=>{navMenu.classList.toggle("active"),navMenu.classList.contains("active")?hamburgerIcon.innerHTML="&times;":hamburgerIcon.innerHTML="&#9776;"})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".tab7"),t=document.querySelectorAll(".tab-content7");e.forEach((n=>{n.addEventListener("click",(function(){e.forEach((e=>e.classList.remove("active"))),t.forEach((e=>e.classList.remove("active"))),this.classList.add("active"),document.getElementById(this.getAttribute("data-tab")).classList.add("active")}))}))}));