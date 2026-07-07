function e(e){return e&&e.__esModule?e.default:e}var t={};t=import.meta.resolve("2ihdW");var a={};a=import.meta.resolve("6HHxK");var i={};i=import.meta.resolve("6WMuG");var o={};o=import.meta.resolve("jkK5m");var r={};r=import.meta.resolve("fApc0");var n={};n=import.meta.resolve("b55ls");var s={};s=import.meta.resolve("3KX1G");var l={};l=import.meta.resolve("8NIny");var c={};c=import.meta.resolve("5AiS1");var d={};d=import.meta.resolve("vWF3t");var p={};p=import.meta.resolve("cGiDC");var m={};m=import.meta.resolve("3enmG");var u={};u=import.meta.resolve("5YhZz");var v={};v=import.meta.resolve("eggWI");var h={};h=import.meta.resolve("kzjf3");var g={};g=import.meta.resolve("7XJ0w");var b={};b=import.meta.resolve("137zb");var f={};f=import.meta.resolve("jLWgJ");var w={};w=import.meta.resolve("2aPQR");var y={};y=import.meta.resolve("9WZJ7");var k={};k=import.meta.resolve("4n0oN");var $={};$=import.meta.resolve("2ay9v");var x={};x=import.meta.resolve("likSk");var T={};T=import.meta.resolve("ONivB");var A={};A=import.meta.resolve("gvFTF");var L={};L=import.meta.resolve("4ob4L");var I={};I=import.meta.resolve("8g8RP");var S={};S=import.meta.resolve("jooxH");var P={};P=import.meta.resolve("G4a3i");var C={};C=import.meta.resolve("8qbF1");var M={};M=import.meta.resolve("4KGIy");var q={};q=import.meta.resolve("a1Cvb");var E={};E=import.meta.resolve("fEAyN");const j=[{quote:"Sooooo awesome to start with 0 knowledge and come out feeling pretty confident about exploring on my own. I liked also working in smaller groups that were encouraged to collaborate/connect and help each other.",tags:[]},{quote:"I found it especially valuable how the workshop made TouchDesigner feel approachable by breaking things down into simple, understandable steps.",tags:["touchdesigner"]},{quote:"Super beginner friendly with lots of close instruction.",tags:[]},{quote:"This is a beginner-friendly workshop designed for anyone interested in exploring different media, especially those with no prior experience in TouchDesigner. It offers an accessible and supportive introduction to creative experimentation with new tools.",tags:["touchdesigner"]},{quote:"A really cool, chill exploration of the possibilities of AI generated content (photo, video). The other participants were great collaborators and it was fun getting to know them.",tags:[]}];function _(e=2,{tag:t=null,excludeTags:a=[]}={}){let i=j.slice();t&&(i=i.filter(e=>(e.tags||[]).includes(t))),a.length&&(i=i.filter(e=>!(e.tags||[]).some(e=>a.includes(e))));for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i.slice(0,Math.min(e,i.length))}const D='<svg class="cloud-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" aria-hidden="true"><path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160c0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4z"/></svg>';function O(e,t,a=""){return`
    <section class="win${a?" "+a:""}">
      <div class="win-title">
        <span class="win-title-text">${e}</span>
        <span class="win-title-btn" aria-hidden="true">${D}</span>
      </div>
      <div class="win-body">${t}</div>
    </section>
  `}const F=[{path:"/upcoming",label:"Upcoming"},{path:"/previous",label:"Previous"},{path:"/about",label:"About"}],W=[{date:"March 2026",title:"Internet Canvas",subtitle:"Creative Coding with the Browser",summary:"Students coded their own net art using the web as both medium and canvas — learning HTML, CSS and JavaScript, how to host sites with GitHub, and creative coding libraries like p5.js, Three.js and MediaPipe, all within the historical context of net art.",images:[e(v),e(h),e(g),e(b)]},{date:"April 2026",title:"Reactive Space",subtitle:"Interactive Installations with TouchDesigner",summary:"Students built interactive audio-visual installations in TouchDesigner — working with node-based workflows, audio-reactive visuals, computer-vision body tracking and projection mapping, culminating in a documented installation in the InterAccess space.",images:[e(f),e(w),e(y),e(k),e($),e(x),e(T),e(A)]},{date:"May 2026",title:"Synthetic Worlds",subtitle:"Making Images & Video with Generative AI",summary:"Students demystified generative AI for image and video — learning technical workflows, worldbuilding prompt techniques, critical skills for identifying AI-generated content and the ethics of AI art-making, to create their own narrative worldbuilding collection.",images:[e(L),e(I),e(S),e(P)]}],N=[e(C),e(M),e(q),e(E)],B=[{img:e(r),label:"Tara's FLOWERS LED wall installation, PHNTM Labs (2023)",credit:"Photo: Tara Rose Morris"},{img:e(n),label:"Benjamin's SKETCHING FLOCK, InterAccess OpenHDMI (2024)",credit:"Photo: Benjamin Lappalainen"},{img:e(s),label:"Tara's MITHAI performance, InterAccess P2P (2024)",credit:"Photo: Tara Rose Morris"},{img:e(l),label:"Benjamin's live audio-reactive visuals, Long Winter 13.1 (2024)",credit:"Photo: Benjamin Lappalainen"},{img:e(t),label:"Projecting the Future workshop (2023)",credit:"Photo: Simon Rojas"},{img:e(a),label:"BioSonification installation, MOCA (2019)",credit:"Photo: Tosca Terán"},{img:e(i),label:"Open Studio community showcase",credit:"Photo: Courtesy of InterAccess"},{img:e(o),label:"PROGRAM09: MEDIAPIPE, New Stadium (2025)",credit:"Photo: PROGRAM media team"}];let G=3;function R(){let e=[{path:"/upcoming",label:"Upcoming"},{path:"/previous",label:"Previous"},{path:"/about",label:"About"}].map(e=>`<a href="#${e.path}" class="home-oval">${e.label}</a>`).join("");return`
    <section class="home-desktop">
      <div class="home-scatter" aria-hidden="true">${function(){let e=W.flatMap(e=>e.images),t=[{l:[0,16],t:[2,16]},{l:[60,80],t:[2,16]},{l:[0,14],t:[46,68]},{l:[62,82],t:[46,68]},{l:[26,46],t:[70,82]},{l:[30,50],t:[0,8]}],a=[...e].sort(()=>Math.random()-.5).slice(0,t.length),i=(e,t)=>e+Math.random()*(t-e);return a.map((e,a)=>{let o=t[a],r=i(o.l[0],o.l[1]).toFixed(1),n=i(o.t[0],o.t[1]).toFixed(1),s=Math.round(i(150,300)),l=i(-8,8).toFixed(1);return`
        <div class="win scatter-win" aria-hidden="true"
             style="left:${r}%;top:${n}%;width:${s}px;transform:rotate(${l}deg)">
          <div class="win-title scatter-handle">
            <span class="win-title-text"></span>
            <span class="win-title-btn">${D}</span>
          </div>
          <div class="win-body scatter-body">
            <img src="${e}" alt="" loading="lazy" draggable="false">
          </div>
        </div>`}).join("")}()}</div>
      <div class="win home-window">
        <div class="win-title">
          <span class="win-title-text">soft_launch</span>
          <span class="win-title-btn" aria-hidden="true">${D}</span>
        </div>
        <div class="win-body home-window-body">
          <div class="brand-stack">
            ${D}
            <h1 class="brand-title">soft_launch</h1>
            <p class="brand-subtitle">art x technology learning</p>
          </div>
          <div class="home-links">${e}</div>
        </div>
      </div>
    </section>
  `}const H={"/":R,"/upcoming":function(){let e=`
    <p class="previous-date">Sat July 25 &amp; Sun July 26 \xb7 11 AM \u{2013} 3 PM</p>
    <h3 class="previous-subtitle">New Stadium \u{2014} 83 Walnut Ave, Toronto</h3>
    <p class="previous-summary">A hands-on weekend introduction to TouchDesigner \u{2014} the node-based software behind interactive installations and real-time visuals. Build projects from the ground up, work with CHOPs, TOPs, POPs and COMPs, make visuals audio-reactive, and drive them with body tracking via MediaPipe. You'll leave with a working prototype of an interactive installation.</p>
    <p class="event-fee">$250 \xb7 Spots limited \xb7 Bring your own laptop (install TouchDesigner in advance)</p>
    <div class="event-cta">
      <a class="signup-button" href="https://buytickets.at/softlaunch/2299646" target="_blank" rel="noopener noreferrer">Get Tickets</a>
    </div>
  `,t=`
    <p>Add your email to be notified when registration opens for upcoming workshops.</p>
    <form class="signup-form">
      <div class="form-row">
        <input type="text" placeholder="Your Name" name="name" required>
        <input type="email" placeholder="Email Address" name="email" required>
      </div>
      <button type="submit" class="signup-button">Notify Me</button>
    </form>
    <p class="contact-info">Questions? Contact us at <a href="mailto:hello@softlaunch.net">hello@softlaunch.net</a></p>
  `;return`
    <header class="page-header">
      <h1 class="page-title">Upcoming</h1>
    </header>

    ${O("TouchDesigner 101",e)}

    ${O("Future Workshop Notifications",t,"contact-section")}

    ${O("Testimonials",'<blockquote class="testimonial-rotator"><p class="testimonial-quote"></p></blockquote>',"testimonials-section")}
  `},"/previous":function(){let e=W.map((e,t)=>O(e.title,`
        <p class="previous-date">${e.date}</p>
        <h3 class="previous-subtitle">${e.subtitle}</h3>
        <p class="previous-summary">${e.summary}</p>
        <div class="workshop-gallery">
          ${e.images.map((a,i)=>`<img src="${a}" alt="${e.title} workshop" class="workshop-photo" loading="lazy" data-gallery="workshop-${t}" data-index="${i}">`).join("")}
        </div>
      `,"previous-card")).join(""),t=`
    <p>Students of the pilot program had the opportunity to share their work during Doors Open TO at InterAccess this past spring.</p>
    <div class="doors-photos">
      ${N.map((e,t)=>`<img src="${e}" alt="Doors Open Toronto showcase" class="doors-photo" loading="lazy" data-gallery="doors" data-index="${t}">`).join("")}
    </div>
  `;return`
    <header class="page-header">
      <h1 class="page-title">Previous</h1>
    </header>

    <div class="previous-grid">${e}</div>

    ${O("Doors Open Toronto",t)}

    ${function(e=2,t={}){let a=_(e,t).map(e=>`
        <blockquote class="testimonial-card">
          <p>\u201C${e.quote}\u201D</p>
        </blockquote>`).join("");return O("Testimonials",`<div class="testimonials-grid">${a}</div>`,"testimonials-section")}()}
  `},"/about":function(){let t=B.map((e,t)=>`
      <div class="carousel-item${0===t?" active":""}">
        <img src="${e.img}" alt="${e.label}" class="carousel-image" data-gallery="facilitator" data-index="${t}">
        <p class="carousel-caption">${e.label}</p>
        <p class="carousel-credit">${e.credit}</p>
      </div>`).join(""),a=B.map((e,t)=>`<span class="indicator${0===t?" active":""}" data-slide="${t}"></span>`).join(""),i=`
    <p>soft_launch is an education collective working to make new media practices accessible to artists and technologists alike in Toronto and beyond. Our first series of weekend intensives built foundations in TouchDesigner, Generative AI, and Creative Code, which we will continue in future sessions. Check our <a href="https://instagram.com/softlaunch_net" target="_blank" rel="noopener noreferrer">Instagram</a> or <a href="#/">home page</a> for upcoming workshops.</p>
  `,o=`
    <div class="team-grid">
      <div class="team-member">
        <img src="${e(c)}" alt="Tara Rose Morris" class="team-photo">
        <div class="team-info">
          <h3><a href="https://www.taramoves.com/" target="_blank" rel="noopener noreferrer">Tara Rose Morris</a></h3>
          <p>Artist and creative technologist using technology for live performances and immersive installations exploring art, code, and liminal ontologies of embodiment.</p>
          <ul class="facilitator-links">
            <li><a href="https://www.taramoves.com" target="_blank" rel="noopener noreferrer">www.taramoves.com</a></li>
            <li><a href="https://instagram.com/taramoves" target="_blank" rel="noopener noreferrer">instagram.com/taramoves</a></li>
          </ul>
        </div>
      </div>
      <div class="team-member">
        <img src="${e(d)}" alt="Benjamin Lappalainen" class="team-photo">
        <div class="team-info">
          <h3><a href="https://blap64.com/" target="_blank" rel="noopener noreferrer">Benjamin Lappalainen</a></h3>
          <p>Creative technologist, artist, and educator making interactive installations, kinetic sculpture, and creative code that reveal how perceptive and generative technologies actually work.</p>
          <ul class="facilitator-links">
            <li><a href="https://www.blap64.com" target="_blank" rel="noopener noreferrer">www.blap64.com</a></li>
            <li><a href="https://instagram.com/blapcode" target="_blank" rel="noopener noreferrer">instagram.com/blapcode</a></li>
          </ul>
        </div>
      </div>
    </div>
  `,r=`
    <div class="carousel-container">
      <div class="carousel-track">${t}</div>
      <div class="carousel-controls">
        <div class="carousel-indicators">${a}</div>
      </div>
    </div>
  `,n=`
    <div class="partners-grid">
      <div class="partner-item">
        <img src="${e(u)}" alt="New Systems" class="partner-logo">
        <h3><a href="https://newsystems.ca/" target="_blank" rel="noopener noreferrer">New Systems</a></h3>
      </div>
      <div class="partner-item">
        <img src="${e(p)}" alt="InterAccess" class="partner-logo">
        <h3><a href="https://interaccess.org" target="_blank" rel="noopener noreferrer">InterAccess</a></h3>
      </div>
      <div class="partner-item">
        <img src="${e(m)}" alt="UKAI Projects" class="partner-logo">
        <h3><a href="https://ukaiprojects.com" target="_blank" rel="noopener noreferrer">UKAI Projects</a></h3>
      </div>
    </div>
  `;return`
    <header class="page-header">
      <h1 class="page-title">About</h1>
    </header>

    ${O("About",i,"about-section")}
    ${O("Facilitators",o)}
    ${O("Facilitator Work",r)}
    ${O("Partners",n)}
  `}};function z(){let e=document.getElementById("app");if(!e)return;let t=window.location.hash.replace(/^#/,"")||"/",a=H[t]||R,i="/"===t;e.innerHTML=`
    ${i?"":function(e){let t=F.map(t=>`<a href="#${t.path}" class="nav-link${e===t.path?" active":""}">${t.label}</a>`).join("");return`
    <nav class="site-nav">
      <a href="#/" class="nav-brand${"/"===e?" active":""}" aria-label="soft_launch home">
        ${D}
        <span class="nav-brand-text">soft_launch</span>
      </a>
      <div class="nav-links">${t}</div>
    </nav>
  `}(t)}
    <div class="page${i?" page-home":""}">
      ${a()}
    </div>
  `,window.scrollTo(0,0),"/"===t&&document.querySelectorAll(".scatter-win").forEach(e=>{e.addEventListener("pointerdown",t=>{t.preventDefault();let a=t.clientX,i=t.clientY,o=e.offsetLeft,r=e.offsetTop;e.style.left=`${o}px`,e.style.top=`${r}px`,e.style.zIndex=String(++G),e.classList.add("dragging");try{e.setPointerCapture(t.pointerId)}catch(e){}let n=t=>{e.style.left=`${o+t.clientX-a}px`,e.style.top=`${r+t.clientY-i}px`},s=()=>{try{e.releasePointerCapture(t.pointerId)}catch(e){}e.removeEventListener("pointermove",n),e.removeEventListener("pointerup",s),e.classList.remove("dragging")};e.addEventListener("pointermove",n),e.addEventListener("pointerup",s)})}),"/upcoming"===t&&(function(){let e=document.querySelector(".signup-form");e&&e.addEventListener("submit",async function(e){e.preventDefault();let t=new FormData(this),a=t.get("name"),i=t.get("email");if(!a||!i)return void alert("Please fill in both name and email fields.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i))return void alert("Please enter a valid email address.");let o=this.querySelector(".signup-button"),r=o.textContent;o.textContent="Adding to list...",o.disabled=!0;try{if(Y){let{error:e}=await Y.from("email_signups").insert([{name:a.trim(),email:i.trim().toLowerCase()}]);e?"23505"===e.code?alert("This email is already on our list!"):(console.error("Supabase error:",e),alert("There was an error adding you to our list. Please try again.")):(alert(`Thank you ${a}! We'll keep you updated at ${i}.`),this.reset())}else alert(`Thank you ${a}! We'll keep you updated at ${i}.`),this.reset()}catch(e){console.error("Error:",e),alert("There was an error adding you to our list. Please try again.")}finally{o.textContent=r,o.disabled=!1}})}(),function(){let e=document.querySelector(".testimonial-rotator .testimonial-quote");if(!e)return;let t=_(99);if(!t.length)return;let a=0,i=()=>{e.textContent="“"+t[a].quote+"”"};i(),clearInterval(window.__testimonialTimer),t.length>1&&(window.__testimonialTimer=setInterval(()=>{e.classList.add("is-fading"),setTimeout(()=>{a=(a+1)%t.length,i(),e.classList.remove("is-fading")},350)},6e3))}()),"/about"===t&&function(){let e,t=0,a=!1,i=document.querySelectorAll(".carousel-item"),o=document.querySelectorAll(".indicator");function r(e){a||(a=!0,i.forEach(e=>e.classList.remove("active")),o.forEach(e=>e.classList.remove("active")),i[e]&&(i[e].classList.add("active"),o[e].classList.add("active")),t=e,setTimeout(()=>{a=!1},500))}function n(){a||r((t+1)%i.length)}function s(){e=setInterval(n,5e3)}0!==i.length&&(o.forEach((t,i)=>{t.addEventListener("click",()=>{a||(e&&clearInterval(e),r(i),s())})}),s())}()}const K="https://kwgxwzywmcslyqvqtzue.supabase.co",J="sb_publishable_FWrAeJdYCQ7fCIeviahVYw_wOrhPjkB";let Y=null;window.supabase&&K&&J&&(Y=window.supabase.createClient(K,J));const U={doors:{title:"Doors Open Toronto",items:N.map(e=>({src:e}))},facilitator:{title:"Facilitator Work",items:B.map(e=>({src:e.img,caption:e.credit?`${e.label} \u{2014} ${e.credit}`:e.label}))}};W.forEach((e,t)=>{U[`workshop-${t}`]={title:e.title,items:e.images.map(e=>({src:e}))}});let X=[],Q=0,V=null;function Z(){let e=X[Q];if(!e)return;let t=V,a=X.length>1;t.image.src=e.src,t.image.alt=e.caption||"",t.caption.textContent=e.caption||"",t.caption.style.display=e.caption?"":"none",t.counter.textContent=a?`${Q+1} / ${X.length}`:"",t.prev.style.visibility=a?"":"hidden",t.next.style.visibility=a?"":"hidden"}function ee(e){X.length&&(Q=(Q+e+X.length)%X.length,Z())}function et(){V&&(V.overlay.hidden=!0,document.body.classList.remove("no-scroll"))}document.addEventListener("DOMContentLoaded",()=>{z(),document.addEventListener("click",e=>{let t=e.target.closest("[data-gallery]");t&&function(e,t){let a=U[e];a&&(!function(){if(V)return;document.querySelectorAll(".lightbox-overlay").forEach(e=>e.remove());let e=document.createElement("div");e.className="lightbox-overlay",e.hidden=!0,e.innerHTML=`
    <div class="win lightbox-window" role="dialog" aria-modal="true">
      <div class="win-title">
        <span class="win-title-text lightbox-title"></span>
        <button type="button" class="win-close" aria-label="Close gallery">&#10005;</button>
      </div>
      <div class="win-body lightbox-body">
        <div class="lightbox-stage"><img class="lightbox-image" src="" alt=""></div>
        <p class="lightbox-caption"></p>
        <div class="lightbox-controls">
          <button type="button" class="win-btn lightbox-prev">&#9664; Prev</button>
          <span class="lightbox-counter"></span>
          <button type="button" class="win-btn lightbox-next">Next &#9654;</button>
        </div>
      </div>
    </div>`,document.body.appendChild(e),V={overlay:e,title:e.querySelector(".lightbox-title"),image:e.querySelector(".lightbox-image"),caption:e.querySelector(".lightbox-caption"),counter:e.querySelector(".lightbox-counter"),prev:e.querySelector(".lightbox-prev"),next:e.querySelector(".lightbox-next"),close:e.querySelector(".win-close")},e.addEventListener("click",t=>{t.target===e&&et()}),V.close.addEventListener("click",et),V.prev.addEventListener("click",()=>ee(-1)),V.next.addEventListener("click",()=>ee(1)),V.image.addEventListener("click",()=>ee(1))}(),Q=Math.max(0,Math.min(t||0,(X=a.items).length-1)),V.title.textContent=a.title||"Gallery",V.overlay.hidden=!1,document.body.classList.add("no-scroll"),Z())}(t.getAttribute("data-gallery"),parseInt(t.getAttribute("data-index"),10)||0)}),document.addEventListener("keydown",e=>{V&&!V.overlay.hidden&&("Escape"===e.key?et():"ArrowLeft"===e.key?ee(-1):"ArrowRight"===e.key&&ee(1))}),window.addEventListener("hashchange",z)});
//# sourceMappingURL=softlaunch_net.e9b58036.js.map
