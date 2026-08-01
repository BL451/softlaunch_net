// ============================================================
//  soft_launch — page behaviour
//
//  Page content lives in the static HTML files (index.html,
//  upcoming/, previous/, about/). This file only adds behaviour:
//  the scattered home photos, the testimonial rotator, the signup
//  form, the About carousel and the image lightbox. Every init
//  bails out early when its markup isn't on the current page, so
//  the same bundle is safe to load everywhere.
// ============================================================

// Workshop photos, used for the decorative scatter on the home page.
import ic1 from 'url:./assets/images/internetcanvas/softlaunch-05772.webp';
import ic2 from 'url:./assets/images/internetcanvas/softlaunch-05776.webp';
import ic3 from 'url:./assets/images/internetcanvas/softlaunch-05788.webp';
import ic4 from 'url:./assets/images/internetcanvas/softlaunch-05794.webp';

import rs1 from 'url:./assets/images/reactivespace/softlaunch-07263.webp';
import rs2 from 'url:./assets/images/reactivespace/softlaunch-07297.webp';
import rs3 from 'url:./assets/images/reactivespace/softlaunch-07310.webp';
import rs4 from 'url:./assets/images/reactivespace/softlaunch-07330.webp';
import rs5 from 'url:./assets/images/reactivespace/softlaunch-07340.webp';
import rs6 from 'url:./assets/images/reactivespace/softlaunch-07372.webp';
import rs7 from 'url:./assets/images/reactivespace/softlaunch-07396.webp';
import rs8 from 'url:./assets/images/reactivespace/softlaunch-07461.webp';

import sw1 from 'url:./assets/images/syntheticworlds/softlaunch-07923.webp';
import sw2 from 'url:./assets/images/syntheticworlds/softlaunch-07934.webp';
import sw3 from 'url:./assets/images/syntheticworlds/softlaunch-07949.webp';
import sw4 from 'url:./assets/images/syntheticworlds/softlaunch-07957.webp';

import { getRandomTestimonials } from './data/testimonials.js';

const SCATTER_PHOTOS = [
  ic1, ic2, ic3, ic4,
  rs1, rs2, rs3, rs4, rs5, rs6, rs7, rs8,
  sw1, sw2, sw3, sw4,
];

// Masked in CSS — see the .cloud-icon rule in style.css.
const cloudIcon = `<span class="cloud-icon" aria-hidden="true"></span>`;

// ============================================================
//  Home page — scattered photo windows
// ============================================================
// Photos, sizes, positions and rotation are randomized on every visit.
function homeScatterWindows() {
  // Loose zones (in %) keep the windows spread out and clear of the center.
  const zones = [
    { l: [0, 16], t: [2, 16] },
    { l: [60, 80], t: [2, 16] },
    { l: [0, 14], t: [46, 68] },
    { l: [62, 82], t: [46, 68] },
    { l: [26, 46], t: [70, 82] },
    { l: [30, 50], t: [0, 8] },
  ];

  const picks = [...SCATTER_PHOTOS].sort(() => Math.random() - 0.5).slice(0, zones.length);
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
            <span class="win-title-btn">${cloudIcon}</span>
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
  const host = document.querySelector('.home-scatter');
  if (!host) return;

  host.innerHTML = homeScatterWindows();

  host.querySelectorAll('.scatter-win').forEach((win) => {
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

// ============================================================
//  Testimonials
// ============================================================
// A grid of random quotes: <div class="testimonials-grid" data-testimonials="2">
function initTestimonialCards() {
  document.querySelectorAll('[data-testimonials]').forEach((grid) => {
    const count = parseInt(grid.getAttribute('data-testimonials'), 10) || 2;
    grid.innerHTML = getRandomTestimonials(count)
      .map(
        (t) => `
        <blockquote class="testimonial-card">
          <p>“${t.quote}”</p>
        </blockquote>`
      )
      .join('');
  });
}

// A single quote that cycles on a timer.
function initTestimonialRotator() {
  const quoteEl = document.querySelector('.testimonial-rotator .testimonial-quote');
  if (!quoteEl) return;

  const items = getRandomTestimonials(99);
  if (!items.length) return;

  let i = 0;
  const render = () => {
    quoteEl.textContent = '“' + items[i].quote + '”';
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
//  Carousel (About page — Facilitator Work slideshow)
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
// Groups are read straight off the page: images sharing a data-gallery
// value open together, in DOM order. data-gallery-title names the window
// and data-caption (optional) is shown under the image.
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

function openLightbox(title, items, index) {
  if (!items.length) return;
  buildLightbox();
  lightboxItems = items;
  lightboxIndex = Math.max(0, Math.min(index || 0, items.length - 1));
  lightboxEls.title.textContent = title || 'Gallery';
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

    const key = img.getAttribute('data-gallery');
    const group = Array.from(document.querySelectorAll(`[data-gallery="${CSS.escape(key)}"]`));
    const items = group.map((el) => ({
      src: el.getAttribute('src'),
      caption: el.getAttribute('data-caption') || '',
    }));

    openLightbox(img.getAttribute('data-gallery-title'), items, group.indexOf(img));
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxEls || lightboxEls.overlay.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') stepLightbox(-1);
    else if (e.key === 'ArrowRight') stepLightbox(1);
  });
}

// ============================================================
//  Boot — every init no-ops on pages without its markup
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initHomeScatter();
  initTestimonialCards();
  initTestimonialRotator();
  initSignupForm();
  initCarousel();
  initLightbox();
});
