function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Make function globally available
window.scrollToSection = scrollToSection;

// Import images for Parcel using URL syntax
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
import cloudIcon from 'url:./assets/icons/cloud.svg';
import introImage from 'url:./assets/images/abstract/image_intro_image.webp';
import netCanvasImage from 'url:./assets/images/abstract/netcanvas.webp';
import reactiveSpaceImage from 'url:./assets/images/abstract/reactivespace.webp';
import syntheticWorldsImage from 'url:./assets/images/abstract/image_touchdesigner.webp';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  const landingHTML = `
    <header class="site-header">
      <div class="header-content">
        <div class="header-left">
          <img src="${cloudIcon}" alt="Cloud" class="cloud-icon">
          <h1 class="header-title">soft_launch</h1>
        </div>
        <span class="header-tagline"><strong>Learning at the Intersection of Art and Technology</strong></span>
      </div>
    </header>

    <div class="landing-container">
      <section class="content-section intro-section">
        <div class="intro-content">
          <img src="${introImage}" alt="Workshop introduction" class="intro-image">
          <div class="intro-text">
            <p>Take the next step in your art practice by learning creative technology, or expand your experience with technology into the arts.<br><br>In Spring 2026, we're offering three weekend intensives in partnership with InterAccess.<br><br>Learn more below - registration available soon!</p>
          </div>
        </div>
      </section>

      <section class="workshops-container">
        <div class="workshops-grid">

          <article class="workshop-box">
            <img src="${netCanvasImage}" alt="Internet Canvas Workshop" class="workshop-image">
            <div class="workshop-content">
              <h2>Internet Canvas</h2>
              <h3 class="workshop-subtitle">Creative Coding with the Browser</h3>
              <p class="workshop-description">Code your own net art using the web as both medium and canvas.</p>
              <p><strong>LEARN:</strong></p>
              <ul>
                <li>Fundamentals of <b>web development</b>: HTML, CSS and JavaScript</li>
                <li>How to <b>host websites</b> and update them with GitHub</li>
                <li>Experiment with <b>creative coding libraries</b> like MediaPipe, p5, Three.js</li>
                <li>The <b>historical context</b> of net art</li>
              </ul>
              <p class="workshop-description">Create an interactive, browser-based artwork hosted on the internet.</p>
              <div class="workshop-details">
                <p><strong>11am - 3pm, March 7-8, 2026</strong></p>
              </div>
              <a href="#" class="register-button disabled">REGISTRATION AVAILABLE SOON</a>
            </div>
          </article>

          <article class="workshop-box">
            <img src="${reactiveSpaceImage}" alt="Reactive Space Workshop" class="workshop-image">
            <div class="workshop-content">
              <h2>Reactive Space</h2>
              <h3 class="workshop-subtitle">Interactive Installations with TouchDesigner</h3>
              <p class="workshop-description">Learn to build interactive art installations using TouchDesigner, the industry-standard visual programming platform for real-time media.</p>
              <p><strong>LEARN:</strong></p>
              <ul>
                <li>Node-based workflows for creating <b>audio-reactive visuals</b></li>
                <li>Integration of computer vision for <b>body tracking</b></li>
                <li>Setting up <b>projection mapping</b> systems</li>
                <li>Contemporary <b>new media art contexts</b></li>
              </ul>
              <p class="workshop-description">Create an interactive audio visual installation, installed and documented in the InterAccess space.</p>
              <div class="workshop-details">
                <p><strong>11am - 3pm, April 18-19, 2026</strong></p>
              </div>
              <a href="#" class="register-button disabled">REGISTRATION AVAILABLE SOON</a>
            </div>
          </article>

          <article class="workshop-box">
            <img src="${syntheticWorldsImage}" alt="Synthetic Worlds Workshop" class="workshop-image">
            <div class="workshop-content">
              <h2>Synthetic Worlds</h2>
              <h3 class="workshop-subtitle">Making Images & Video with Generative AI</h3>
              <p class="workshop-description">Demystify generative AI by learning how image and video models actually work, then use them to create your own visual worlds.</p>
              <p><strong>LEARN:</strong></p>
              <ul>
                <li>Technical workflows for both <b>AI image and video generation</b></li>
                <li><b>Prompting techniques</b> for worldbuilding</li>
                <li>Critical skills for identifying <b>AI-generated content</b></li>
                <li><b>Ethical considerations</b> in AI art-making</li>
              </ul>
              <p class="workshop-description">Create your own narrative worldbuilding collection of media.</p>
              <div class="workshop-details">
                <p><strong>11am - 3pm, May 16-17, 2026</strong></p>
              </div>
              <a href="#" class="register-button disabled">REGISTRATION AVAILABLE SOON</a>
            </div>
          </article>

        </div>
      </section>

      <section class="content-section beyond-classroom-section">
        <h2>Beyond the Classroom</h2>
        <div class="beyond-classroom-grid">
          <div class="beyond-classroom-text">
            <p>In addition to skills learned during each weekend course, students will also:</p>
            <ul>
              <li>Receive a <b>complimentary 1 month studio membership to InterAccess</b>, including tool training and makerspace facilities</li>
              <li>Showcase their work in the <b>Spring Showcase May 23rd & 24th, 2026</b></li>
            </ul>
            <p>Through these initiatives, we aim to give students further opportunities to build their new media arts practice and engage with Toronto's creative communities.</p>
          </div>

          <div class="beyond-classroom-carousel">
            <div class="carousel-container">
            <div class="carousel-track">
              <div class="carousel-item active">
                <img src="${taraArt2}" alt="Tara Art 2" class="carousel-image">
                <p class="carousel-caption">Tara's FLOWERS LED wall installation at PHNTM Labs (2023)</p>
                <p class="carousel-credit">Photo credit: Tara Rose Morris</p>
              </div>
              <div class="carousel-item">
                <img src="${sketchingFlock}" alt="Sketching Flock" class="carousel-image">
                <p class="carousel-caption">Benjamin's SKETCHING FLOCK interactive installation at InterAccess OpenHDMI (2024)</p>
                <p class="carousel-credit">Photo credit: Benjamin Lappalainen</p>
              </div>
              <div class="carousel-item">
                <img src="${taraArt1}" alt="Tara Art 1" class="carousel-image">
                <p class="carousel-caption">Tara's MITHAI performance at InterAccess P2P (2024)</p>
                <p class="carousel-credit">Photo credit: Tara Rose Morris</p>
              </div>
              <div class="carousel-item">
                <img src="${lw13}" alt="lw13" class="carousel-image">
                <p class="carousel-caption">Benjamin's live audio-reactive visuals at Long Winter 13.1 (2024)</p>
                <p class="carousel-credit">Photo credit: Benjamin Lappalainen</p>
              </div>
              <div class="carousel-item">
                <img src="${gallery1}" alt="Projecting the Future workshop" class="carousel-image">
                <p class="carousel-caption">Projecting the Future workshop - exploring digital art and projection mapping (2023)</p>
                <p class="carousel-credit">Photo credit: Simon Rojas</p>
              </div>
              <div class="carousel-item">
                <img src="${gallery2}" alt="BioSonification at MOCA" class="carousel-image">
                <p class="carousel-caption">BioSonification installation at MOCA - data-driven sound art (2019)</p>
                <p class="carousel-credit">Photo credit: Tosca Terán</p>
              </div>
              <div class="carousel-item">
                <img src="${gallery3}" alt="Open Studio event" class="carousel-image">
                <p class="carousel-caption">Open Studio - community showcasing creative technology projects</p>
                <p class="carousel-credit">Photo credit: Courtesy of InterAccess</p>
              </div>
              <div class="carousel-item">
                <img src="${gallery4}" alt="Interactive installation" class="carousel-image">
                <p class="carousel-caption">Benjamin teaching at the PROGRAM09: MEDIAPIPE event at New Stadium (2025)</p>
                <p class="carousel-credit">Photo credit: PROGRAM media team</p>
              </div>
            </div>
            <div class="carousel-controls">
              <div class="carousel-indicators">
                <span class="indicator active" data-slide="0"></span>
                <span class="indicator" data-slide="1"></span>
                <span class="indicator" data-slide="2"></span>
                <span class="indicator" data-slide="3"></span>
                <span class="indicator" data-slide="4"></span>
                <span class="indicator" data-slide="5"></span>
                <span class="indicator" data-slide="6"></span>
                <span class="indicator" data-slide="7"></span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Facilitators</h2>
        <div class="team-grid">
            <div class="team-member">
              <img src="${taraPhoto}" alt="Tara Rose Morris" class="team-photo">
              <div class="team-info">
                <h3><a href="https://www.taramoves.com/" target="_blank" rel="noopener noreferrer">Tara Rose Morris</a></h3>
                <p>Artist and creative technologist using technology for live performances and immersive installations exploring art, code, and liminal ontologies of embodiment.</p>
              </div>
            </div>
            <div class="team-member">
              <img src="${benjaminPhoto}" alt="Benjamin Lappalainen" class="team-photo">
              <div class="team-info">
                <h3><a href="https://blap64.xyz/" target="_blank" rel="noopener noreferrer">Benjamin Lappalainen</a></h3>
                <p>Creative technologist and educator creating interactive installations that blur digital and physical boundaries. Focuses on human-centered technology and open source tools for social impact.</p>
              </div>
            </div>
          </div>
        </section>

      <section class="content-section">
        <h2>Partners</h2>
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
      </section>

      <section class="content-section contact-section">
        <h2>Stay Connected</h2>
        <form class="signup-form">
          <div class="form-row">
            <input type="text" placeholder="Your Name" name="name" required>
            <input type="email" placeholder="Email Address" name="email" required>
          </div>
          <button type="submit" class="signup-button">Join Mailing List</button>
        </form>
        <p class="contact-info">Questions? Contact us at <a href="mailto:hello@softlaunch.net">hello@softlaunch.net</a></p>
      </section>
    </div>
  `;

  app.innerHTML = landingHTML;

  // Initialize Supabase client
  const SUPABASE_URL = 'https://kwgxwzywmcslyqvqtzue.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_FWrAeJdYCQ7fCIeviahVYw_wOrhPjkB';

  let supabase = null;

  if (SUPABASE_URL !== 'YOUR_SUPABASE_URL_HERE' && SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY_HERE') {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }

  // Handle form submission
  const signupForm = document.querySelector('.signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', async function(e) {
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
          const { data, error } = await supabase
            .from('email_signups')
            .insert([
              {
                name: name.trim(),
                email: email.trim().toLowerCase()
              }
            ]);

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

  // Carousel functionality
  let currentSlide = 0;
  let isTransitioning = false;
  let autoAdvanceInterval;
  const slides = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.indicator');

  function showSlide(index) {
    if (isTransitioning) return; // Prevent multiple rapid clicks

    isTransitioning = true;

    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Show current slide
    if (slides[index]) {
      slides[index].classList.add('active');
      indicators[index].classList.add('active');
    }

    currentSlide = index;

    // Reset transition flag after animation completes
    setTimeout(() => {
      isTransitioning = false;
    }, 500); // Match the CSS transition duration
  }

  function nextSlide() {
    if (isTransitioning) return;
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    if (isTransitioning) return;
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function startAutoAdvance() {
    autoAdvanceInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoAdvance() {
    if (autoAdvanceInterval) {
      clearInterval(autoAdvanceInterval);
    }
  }

  // Event listeners for carousel
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      if (isTransitioning) return;
      stopAutoAdvance();
      showSlide(index);
      startAutoAdvance(); // Restart auto-advance after manual interaction
    });
  });

  // Start auto-advance
  if (slides.length > 0) {
    startAutoAdvance();
  }

  // Disable register buttons
  const disabledButtons = document.querySelectorAll('.register-button.disabled');
  disabledButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
});
