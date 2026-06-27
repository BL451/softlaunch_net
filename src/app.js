// ============================================================
//  Image assets (Parcel URL imports)
// ============================================================
import gallery1 from 'url:./assets/images/gallery/01-projecting-future-workshop.webp';
import gallery2 from 'url:./assets/images/gallery/04-biosonification-moca.webp';
import gallery3 from 'url:./assets/images/gallery/05-open-studio.webp';
import gallery4 from 'url:./assets/images/gallery/dsc00497.webp';
import taraArt2 from 'url:./assets/images/gallery/Tara_Art_2.webp';
import sketchingFlock from 'url:./assets/images/gallery/Sketching Flock.webp';
import taraArt1 from 'url:./assets/images/gallery/Tara_Art_1.webp';
import lw13 from 'url:./assets/images/gallery/lw13_1-15.webp';
import taraPhoto from 'url:./assets/images/leads/tara.webp';
import benjaminPhoto from 'url:./assets/images/leads/benjamin.webp';
import interaccessLogo from 'url:./assets/images/partners/interaccess.webp';
import ukaiLogo from 'url:./assets/images/partners/ukaiprojects.webp';
import culturalTechLogo from 'url:./assets/images/partners/culturaltechnolgieslab.webp';
// Workshop photos
import ic1 from 'url:./assets/images/internetcanvas/softlaunch-05772.jpg';
import ic2 from 'url:./assets/images/internetcanvas/softlaunch-05776.jpg';
import ic3 from 'url:./assets/images/internetcanvas/softlaunch-05788.jpg';
import ic4 from 'url:./assets/images/internetcanvas/softlaunch-05794.jpg';

import rs1 from 'url:./assets/images/reactivespace/softlaunch-07263.jpg';
import rs2 from 'url:./assets/images/reactivespace/softlaunch-07297.jpg';
import rs3 from 'url:./assets/images/reactivespace/softlaunch-07310.jpg';
import rs4 from 'url:./assets/images/reactivespace/softlaunch-07330.jpg';
import rs5 from 'url:./assets/images/reactivespace/softlaunch-07340.jpg';
import rs6 from 'url:./assets/images/reactivespace/softlaunch-07372.jpg';
import rs7 from 'url:./assets/images/reactivespace/softlaunch-07396.jpg';
import rs8 from 'url:./assets/images/reactivespace/softlaunch-07461.jpg';

import sw1 from 'url:./assets/images/syntheticworlds/softlaunch-07923.jpg';
import sw2 from 'url:./assets/images/syntheticworlds/softlaunch-07934.jpg';
import sw3 from 'url:./assets/images/syntheticworlds/softlaunch-07949.jpg';
import sw4 from 'url:./assets/images/syntheticworlds/softlaunch-07957.jpg';

import doors1 from 'url:./assets/images/doorsopen/softlaunch-07984.jpg';
import doors2 from 'url:./assets/images/doorsopen/softlaunch-08083.jpg';
import doors3 from 'url:./assets/images/doorsopen/softlaunch-08122.jpg';
import doors4 from 'url:./assets/images/doorsopen/softlaunch-08124.jpg';

import { getRandomTestimonials } from './data/testimonials.js';

// ============================================================
//  Shared markup helpers
// ============================================================
const cloudSvg = `<svg class="cloud-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" aria-hidden="true"><path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160c0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4z"/></svg>`;

// A Windows-style "window": a title bar (heading + cloud button) over a body.
function windowBox(title, body, className = '') {
  return `
    <section class="win${className ? ' ' + className : ''}">
      <div class="win-title">
        <span class="win-title-text">${title}</span>
        <span class="win-title-btn" aria-hidden="true">${cloudSvg}</span>
      </div>
      <div class="win-body">${body}</div>
    </section>
  `;
}

// Navigation pages used by the dockable menu
const NAV = [
  { path: '/upcoming', label: 'Upcoming' },
  { path: '/previous', label: 'Previous' },
  { path: '/about', label: 'About' },
];

// Past workshops shown on the Previous page
const WORKSHOPS = [
  {
    date: 'March 2026',
    title: 'Internet Canvas',
    subtitle: 'Creative Coding with the Browser',
    summary:
      'Students coded their own net art using the web as both medium and canvas — learning HTML, CSS and JavaScript, how to host sites with GitHub, and creative coding libraries like p5.js, Three.js and MediaPipe, all within the historical context of net art.',
    images: [ic1, ic2, ic3, ic4],
  },
  {
    date: 'April 2026',
    title: 'Reactive Space',
    subtitle: 'Interactive Installations with TouchDesigner',
    summary:
      'Students built interactive audio-visual installations in TouchDesigner — working with node-based workflows, audio-reactive visuals, computer-vision body tracking and projection mapping, culminating in a documented installation in the InterAccess space.',
    images: [rs1, rs2, rs3, rs4, rs5, rs6, rs7, rs8],
  },
  {
    date: 'May 2026',
    title: 'Synthetic Worlds',
    subtitle: 'Making Images & Video with Generative AI',
    summary:
      'Students demystified generative AI for image and video — learning technical workflows, worldbuilding prompt techniques, critical skills for identifying AI-generated content and the ethics of AI art-making, to create their own narrative worldbuilding collection.',
    images: [sw1, sw2, sw3, sw4],
  },
];

// Photos from the Doors Open Toronto showcase
const DOORS_PHOTOS = [doors1, doors2, doors3, doors4];

// Photos for the Facilitator Work slideshow (About page), labelled by source
const GALLERY = [
  { img: taraArt2, label: "Tara's FLOWERS LED wall installation, PHNTM Labs (2023)", credit: 'Photo: Tara Rose Morris' },
  { img: sketchingFlock, label: "Benjamin's SKETCHING FLOCK, InterAccess OpenHDMI (2024)", credit: 'Photo: Benjamin Lappalainen' },
  { img: taraArt1, label: "Tara's MITHAI performance, InterAccess P2P (2024)", credit: 'Photo: Tara Rose Morris' },
  { img: lw13, label: "Benjamin's live audio-reactive visuals, Long Winter 13.1 (2024)", credit: 'Photo: Benjamin Lappalainen' },
  { img: gallery1, label: 'Projecting the Future workshop (2023)', credit: 'Photo: Simon Rojas' },
  { img: gallery2, label: 'BioSonification installation, MOCA (2019)', credit: 'Photo: Tosca Terán' },
  { img: gallery3, label: 'Open Studio community showcase', credit: 'Photo: Courtesy of InterAccess' },
  { img: gallery4, label: 'PROGRAM09: MEDIAPIPE, New Stadium (2025)', credit: 'Photo: PROGRAM media team' },
];

function navBar(activePath) {
  const links = NAV.map(
    (item) =>
      `<a href="#${item.path}" class="nav-link${activePath === item.path ? ' active' : ''}">${item.label}</a>`
  ).join('');

  return `
    <nav class="site-nav">
      <a href="#/" class="nav-brand${activePath === '/' ? ' active' : ''}" aria-label="soft_launch home">
        ${cloudSvg}
        <span class="nav-brand-text">soft_launch</span>
      </a>
      <div class="nav-links">${links}</div>
    </nav>
  `;
}

// Reusable testimonials block — pulls random quotes from the
// testimonials data file. Pass options through to getRandomTestimonials,
// e.g. testimonialsSection(2, { tag: 'touchdesigner' }).
function testimonialsSection(count = 2, options = {}) {
  const cards = getRandomTestimonials(count, options)
    .map(
      (t) => `
        <blockquote class="testimonial-card">
          <p>\u201C${t.quote}\u201D</p>
        </blockquote>`
    )
    .join('');

  return windowBox('Testimonials', `<div class="testimonials-grid">${cards}</div>`, 'testimonials-section');
}

// A single auto-rotating testimonial (used on the Upcoming page).
function rotatingTestimonial() {
  return windowBox(
    'Testimonials',
    `<blockquote class="testimonial-rotator"><p class="testimonial-quote"></p></blockquote>`,
    'testimonials-section'
  );
}

function initTestimonialRotator() {
  const quoteEl = document.querySelector('.testimonial-rotator .testimonial-quote');
  if (!quoteEl) return;

  const items = getRandomTestimonials(99);
  if (!items.length) return;

  let i = 0;
  const render = () => {
    quoteEl.textContent = '\u201C' + items[i].quote + '\u201D';
  };
  render();

  clearInterval(window.__testimonialTimer);
  if (items.length > 1) {
    window.__testimonialTimer = setInterval(() => {
      quoteEl.classList.add('is-fading');
      setTimeout(() => {
        i = (i + 1) % items.length;
        render();
        quoteEl.classList.remove('is-fading');
      }, 350);
    }, 6000);
  }
}

// ============================================================
//  Pages
// ============================================================
// Decorative mini-windows scattered behind the main home window.
// Photos, sizes, positions and rotation are randomized on every visit.
function homeScatterWindows() {
  const pool = WORKSHOPS.flatMap((w) => w.images);
  // Loose zones (in %) keep the windows spread out and clear of the center.
  const zones = [
    { l: [0, 16], t: [2, 16] },
    { l: [60, 80], t: [2, 16] },
    { l: [0, 14], t: [46, 68] },
    { l: [62, 82], t: [46, 68] },
    { l: [26, 46], t: [70, 82] },
    { l: [30, 50], t: [0, 8] },
  ];

  const picks = [...pool].sort(() => Math.random() - 0.5).slice(0, zones.length);
  const rand = (min, max) => min + Math.random() * (max - min);

  return picks
    .map((img, i) => {
      const z = zones[i];
      const left = rand(z.l[0], z.l[1]).toFixed(1);
      const top = rand(z.t[0], z.t[1]).toFixed(1);
      const width = Math.round(rand(150, 300));
      const rot = rand(-8, 8).toFixed(1);
      return `
        <div class="win scatter-win" aria-hidden="true"
             style="left:${left}%;top:${top}%;width:${width}px;transform:rotate(${rot}deg)">
          <div class="win-title scatter-handle">
            <span class="win-title-text"></span>
            <span class="win-title-btn">${cloudSvg}</span>
          </div>
          <div class="win-body scatter-body">
            <img src="${img}" alt="" loading="lazy" draggable="false">
          </div>
        </div>`;
    })
    .join('');
}

// Make the scattered home windows draggable, click-to-front.
let scatterZ = 3;
function initHomeScatter() {
  document.querySelectorAll('.scatter-win').forEach((win) => {
    win.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      const startX = e.clientX;
      const startY = e.clientY;
      const startLeft = win.offsetLeft;
      const startTop = win.offsetTop;

      win.style.left = `${startLeft}px`;
      win.style.top = `${startTop}px`;
      win.style.zIndex = String(++scatterZ);
      win.classList.add('dragging');
      try {
        win.setPointerCapture(e.pointerId);
      } catch (err) {
        /* no-op */
      }

      const move = (ev) => {
        win.style.left = `${startLeft + ev.clientX - startX}px`;
        win.style.top = `${startTop + ev.clientY - startY}px`;
      };
      const up = () => {
        try {
          win.releasePointerCapture(e.pointerId);
        } catch (err) {
          /* no-op */
        }
        win.removeEventListener('pointermove', move);
        win.removeEventListener('pointerup', up);
        win.classList.remove('dragging');
      };
      win.addEventListener('pointermove', move);
      win.addEventListener('pointerup', up);
    });
  });
}

function renderHome() {
  const links = [
    { path: '/upcoming', label: 'Upcoming' },
    { path: '/previous', label: 'Previous' },
    { path: '/about', label: 'About' },
  ]
    .map((c) => `<a href="#${c.path}" class="home-oval">${c.label}</a>`)
    .join('');

  return `
    <section class="home-desktop">
      <div class="home-scatter" aria-hidden="true">${homeScatterWindows()}</div>
      <div class="win home-window">
        <div class="win-title">
          <span class="win-title-text">soft_launch</span>
          <span class="win-title-btn" aria-hidden="true">${cloudSvg}</span>
        </div>
        <div class="win-body home-window-body">
          <div class="brand-stack">
            ${cloudSvg}
            <h1 class="brand-title">soft_launch</h1>
            <p class="brand-subtitle">art x technology learning</p>
          </div>
          <div class="home-links">${links}</div>
        </div>
      </div>
    </section>
  `;
}

function renderUpcoming() {
  const body = `
    <p>Add your email to be notified when registration opens.</p>
    <form class="signup-form">
      <div class="form-row">
        <input type="text" placeholder="Your Name" name="name" required>
        <input type="email" placeholder="Email Address" name="email" required>
      </div>
      <button type="submit" class="signup-button">Notify Me</button>
    </form>
    <p class="contact-info">Questions? Contact us at <a href="mailto:hello@softlaunch.net">hello@softlaunch.net</a></p>
  `;

  return `
    <header class="page-header">
      <h1 class="page-title">Upcoming</h1>
    </header>

    ${windowBox('Summer workshop signup coming soon', body, 'contact-section')}

    ${rotatingTestimonial()}
  `;
}

function renderPrevious() {
  const workshopWindows = WORKSHOPS.map((w, i) =>
    windowBox(
      w.title,
      `
        <p class="previous-date">${w.date}</p>
        <h3 class="previous-subtitle">${w.subtitle}</h3>
        <p class="previous-summary">${w.summary}</p>
        <div class="workshop-gallery">
          ${w.images
            .map(
              (src, idx) =>
                `<img src="${src}" alt="${w.title} workshop" class="workshop-photo" loading="lazy" data-gallery="workshop-${i}" data-index="${idx}">`
            )
            .join('')}
        </div>
      `,
      'previous-card'
    )
  ).join('');

  const doorsBody = `
    <p>Students of the pilot program had the opportunity to share their work during Doors Open TO at InterAccess this past spring.</p>
    <div class="doors-photos">
      ${DOORS_PHOTOS.map(
        (src, i) =>
          `<img src="${src}" alt="Doors Open Toronto showcase" class="doors-photo" loading="lazy" data-gallery="doors" data-index="${i}">`
      ).join('')}
    </div>
  `;

  return `
    <header class="page-header">
      <h1 class="page-title">Previous</h1>
    </header>

    <div class="previous-grid">${workshopWindows}</div>

    ${windowBox('Doors Open Toronto', doorsBody)}

    ${testimonialsSection()}
  `;
}

function renderAbout() {
  const slides = GALLERY.map(
    (g, i) => `
      <div class="carousel-item${i === 0 ? ' active' : ''}">
        <img src="${g.img}" alt="${g.label}" class="carousel-image" data-gallery="facilitator" data-index="${i}">
        <p class="carousel-caption">${g.label}</p>
        <p class="carousel-credit">${g.credit}</p>
      </div>`
  ).join('');

  const indicators = GALLERY.map(
    (_, i) => `<span class="indicator${i === 0 ? ' active' : ''}" data-slide="${i}"></span>`
  ).join('');

  const aboutBody = `
    <p>Softlaunch is an education collective working to make new media practices accessible to artists and technologists alike in Toronto and beyond. Our first series of weekend intensives built foundations in TouchDesigner, Generative AI, and Creative Code, which we will continue in future sessions. Check our <a href="https://instagram.com/softlaunch_net" target="_blank" rel="noopener noreferrer">Instagram</a> or <a href="#/">home page</a> for upcoming workshops.</p>
  `;

  const facilitatorsBody = `
    <div class="team-grid">
      <div class="team-member">
        <img src="${taraPhoto}" alt="Tara Rose Morris" class="team-photo">
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
        <img src="${benjaminPhoto}" alt="Benjamin Lappalainen" class="team-photo">
        <div class="team-info">
          <h3><a href="https://blap64.com/" target="_blank" rel="noopener noreferrer">Benjamin Lappalainen</a></h3>
          <p>Creative technologist and educator creating interactive installations that blur digital and physical boundaries. Focuses on human-centered technology and open source tools for social impact.</p>
          <ul class="facilitator-links">
            <li><a href="https://www.blap64.com" target="_blank" rel="noopener noreferrer">www.blap64.com</a></li>
            <li><a href="https://instagram.com/blapcode" target="_blank" rel="noopener noreferrer">instagram.com/blapcode</a></li>
          </ul>
        </div>
      </div>
    </div>
  `;

  const workBody = `
    <div class="carousel-container">
      <div class="carousel-track">${slides}</div>
      <div class="carousel-controls">
        <div class="carousel-indicators">${indicators}</div>
      </div>
    </div>
  `;

  const partnersBody = `
    <div class="partners-grid">
      <div class="partner-item">
        <img src="${interaccessLogo}" alt="InterAccess" class="partner-logo">
        <h3><a href="https://interaccess.org" target="_blank" rel="noopener noreferrer">InterAccess</a></h3>
      </div>
      <div class="partner-item">
        <img src="${ukaiLogo}" alt="UKAI Projects" class="partner-logo">
        <h3><a href="https://ukaiprojects.com" target="_blank" rel="noopener noreferrer">UKAI Projects</a></h3>
      </div>
      <div class="partner-item">
        <img src="${culturalTechLogo}" alt="Cultural Technologies Lab" class="partner-logo">
        <h3><a href="https://www.culturaltechnologieslab.org/" target="_blank" rel="noopener noreferrer">Cultural Technologies Lab</a></h3>
      </div>
    </div>
  `;

  return `
    <header class="page-header">
      <h1 class="page-title">About</h1>
    </header>

    ${windowBox('About', aboutBody, 'about-section')}
    ${windowBox('Facilitators', facilitatorsBody)}
    ${windowBox('Facilitator Work', workBody)}
    ${windowBox('Partners', partnersBody)}
  `;
}

// ============================================================
//  Router
// ============================================================
const routes = {
  '/': renderHome,
  '/upcoming': renderUpcoming,
  '/previous': renderPrevious,
  '/about': renderAbout,
};

function router() {
  const app = document.getElementById('app');
  if (!app) return;

  const path = window.location.hash.replace(/^#/, '') || '/';
  const render = routes[path] || renderHome;
  const isHome = path === '/';

  app.innerHTML = `
    ${isHome ? '' : navBar(path)}
    <div class="page${isHome ? ' page-home' : ''}">
      ${render()}
    </div>
  `;

  window.scrollTo(0, 0);

  if (path === '/') initHomeScatter();
  if (path === '/upcoming') {
    initSignupForm();
    initTestimonialRotator();
  }
  if (path === '/about') initCarousel();
}

// ============================================================
//  Supabase email signup
// ============================================================
const SUPABASE_URL = 'https://kwgxwzywmcslyqvqtzue.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_FWrAeJdYCQ7fCIeviahVYw_wOrhPjkB';

let supabase = null;
if (window.supabase && SUPABASE_URL && SUPABASE_ANON_KEY) {
  supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

function initSignupForm() {
  const signupForm = document.querySelector('.signup-form');
  if (!signupForm) return;

  signupForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');

    if (!name || !email) {
      alert('Please fill in both name and email fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const submitButton = this.querySelector('.signup-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Adding to list...';
    submitButton.disabled = true;

    try {
      if (supabase) {
        const { error } = await supabase
          .from('email_signups')
          .insert([{ name: name.trim(), email: email.trim().toLowerCase() }]);

        if (error) {
          if (error.code === '23505') {
            alert('This email is already on our list!');
          } else {
            console.error('Supabase error:', error);
            alert('There was an error adding you to our list. Please try again.');
          }
        } else {
          alert(`Thank you ${name}! We'll keep you updated at ${email}.`);
          this.reset();
        }
      } else {
        alert(`Thank you ${name}! We'll keep you updated at ${email}.`);
        this.reset();
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error adding you to our list. Please try again.');
    } finally {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  });
}

// ============================================================
//  Carousel (Previous page photo slideshow)
// ============================================================
function initCarousel() {
  let currentSlide = 0;
  let isTransitioning = false;
  let autoAdvanceInterval;
  const slides = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.indicator');

  if (slides.length === 0) return;

  function showSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    slides.forEach((slide) => slide.classList.remove('active'));
    indicators.forEach((indicator) => indicator.classList.remove('active'));

    if (slides[index]) {
      slides[index].classList.add('active');
      indicators[index].classList.add('active');
    }

    currentSlide = index;
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  function nextSlide() {
    if (isTransitioning) return;
    showSlide((currentSlide + 1) % slides.length);
  }

  function startAutoAdvance() {
    autoAdvanceInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoAdvance() {
    if (autoAdvanceInterval) clearInterval(autoAdvanceInterval);
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      if (isTransitioning) return;
      stopAutoAdvance();
      showSlide(index);
      startAutoAdvance();
    });
  });

  startAutoAdvance();
}

// ============================================================
//  Lightbox gallery (click an image to open a Windows-style viewer)
// ============================================================
// Each gallery group maps a key (set via data-gallery on the images) to a
// title and an ordered list of images, so a click opens just that section.
const GALLERIES = {
  doors: { title: 'Doors Open Toronto', items: DOORS_PHOTOS.map((src) => ({ src })) },
  facilitator: {
    title: 'Facilitator Work',
    items: GALLERY.map((g) => ({ src: g.img, caption: g.credit ? `${g.label} — ${g.credit}` : g.label })),
  },
};
WORKSHOPS.forEach((w, i) => {
  GALLERIES[`workshop-${i}`] = { title: w.title, items: w.images.map((src) => ({ src })) };
});

let lightboxItems = [];
let lightboxIndex = 0;
let lightboxEls = null;

function buildLightbox() {
  if (lightboxEls) return lightboxEls;
  // Guard against stale overlays (e.g. left by dev hot-reloads).
  document.querySelectorAll('.lightbox-overlay').forEach((el) => el.remove());

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.hidden = true;
  overlay.innerHTML = `
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
    </div>`;
  document.body.appendChild(overlay);

  lightboxEls = {
    overlay,
    title: overlay.querySelector('.lightbox-title'),
    image: overlay.querySelector('.lightbox-image'),
    caption: overlay.querySelector('.lightbox-caption'),
    counter: overlay.querySelector('.lightbox-counter'),
    prev: overlay.querySelector('.lightbox-prev'),
    next: overlay.querySelector('.lightbox-next'),
    close: overlay.querySelector('.win-close'),
  };

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });
  lightboxEls.close.addEventListener('click', closeLightbox);
  lightboxEls.prev.addEventListener('click', () => stepLightbox(-1));
  lightboxEls.next.addEventListener('click', () => stepLightbox(1));
  lightboxEls.image.addEventListener('click', () => stepLightbox(1));

  return lightboxEls;
}

function showLightbox() {
  const item = lightboxItems[lightboxIndex];
  if (!item) return;
  const els = lightboxEls;
  const multi = lightboxItems.length > 1;

  els.image.src = item.src;
  els.image.alt = item.caption || '';
  els.caption.textContent = item.caption || '';
  els.caption.style.display = item.caption ? '' : 'none';
  els.counter.textContent = multi ? `${lightboxIndex + 1} / ${lightboxItems.length}` : '';
  els.prev.style.visibility = multi ? '' : 'hidden';
  els.next.style.visibility = multi ? '' : 'hidden';
}

function openLightbox(groupKey, index) {
  const group = GALLERIES[groupKey];
  if (!group) return;
  buildLightbox();
  lightboxItems = group.items;
  lightboxIndex = Math.max(0, Math.min(index || 0, lightboxItems.length - 1));
  lightboxEls.title.textContent = group.title || 'Gallery';
  lightboxEls.overlay.hidden = false;
  document.body.classList.add('no-scroll');
  showLightbox();
}

function stepLightbox(dir) {
  if (!lightboxItems.length) return;
  lightboxIndex = (lightboxIndex + dir + lightboxItems.length) % lightboxItems.length;
  showLightbox();
}

function closeLightbox() {
  if (!lightboxEls) return;
  lightboxEls.overlay.hidden = true;
  document.body.classList.remove('no-scroll');
}

function initLightbox() {
  document.addEventListener('click', (e) => {
    const img = e.target.closest('[data-gallery]');
    if (!img) return;
    openLightbox(img.getAttribute('data-gallery'), parseInt(img.getAttribute('data-index'), 10) || 0);
  });
  document.addEventListener('keydown', (e) => {
    if (!lightboxEls || lightboxEls.overlay.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') stepLightbox(-1);
    else if (e.key === 'ArrowRight') stepLightbox(1);
  });
}

// ============================================================
//  Boot
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  router();
  initLightbox();
  window.addEventListener('hashchange', router);
});
