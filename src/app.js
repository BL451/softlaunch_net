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
import taraPhoto from 'url:./assets/images/leads/tara.webp';
import benjaminPhoto from 'url:./assets/images/leads/benjamin.webp';
import interaccessLogo from 'url:./assets/images/partners/interaccess.webp';
import ukaiLogo from 'url:./assets/images/partners/ukaiprojects.webp';
import culturalTechLogo from 'url:./assets/images/partners/culturaltechnolgieslab.webp';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  const landingHTML = `
    <div class="landing-container">
      <div class="title-section">
        <h1>soft_launch</h1>
      </div>

      <div class="subtitle-section">
        <h2>Creative Code Intensive for<br>Artists & Technologists</h2>
      </div>

      <section class="content-section applications-section">
        <h2>Applications Coming Soon</h2>
        <p>Sign up for our email list to be notified when applications open!</p>
        <form class="signup-form">
          <div class="form-row">
            <input type="text" placeholder="Your Name" name="name" required>
            <input type="email" placeholder="Email Address" name="email" required>
          </div>
          <button type="submit" class="signup-button">Join Email List</button>
        </form>
      </section>

      <div class="content-sections">
        <section id="about" class="content-section">
          <h2>What We Believe</h2>
          <p>
            Creativity and technology are not separate domains. We nurture hybrid practices where artists gain fluency with code, circuits, and computation — and technologists learn to make meaning, engage community, and take poetic risks.
          </p>
          <p>
            Based in Toronto and supported by InterAccess, this intensive fills the gap between beginner workshops and academic programs with hands-on, project-based learning.
          </p>
        </section>

        <section class="content-section">
          <h2>Program Overview</h2>
          <div class="program-details">
            <div class="detail-item">
              <strong>Duration:</strong> 12 weeks
            </div>
            <div class="detail-item">
              <strong>Format:</strong> In-person at InterAccess
            </div>
            <div class="detail-item">
              <strong>Commitment:</strong> 8-10 hours/week
            </div>
            <div class="detail-item">
              <strong>Culmination:</strong> Public showcase
            </div>
          </div>
        </section>

        <section class="content-section">
          <h2>Curriculum Highlights</h2>
          <div class="curriculum-grid">
            <div class="curriculum-block">
              <h3>Creative Coding</h3>
              <p>p5.js, web development, generative art fundamentals</p>
            </div>
            <div class="curriculum-block">
              <h3>AI & Machine Learning</h3>
              <p>AI tools, LLMs, local image generation with ComfyUI</p>
            </div>
            <div class="curriculum-block">
              <h3>Interactive Media</h3>
              <p>TouchDesigner, Arduino, projection mapping, physical computing</p>
            </div>
            <div class="curriculum-block">
              <h3>Project Development</h3>
              <p>Fabrication, installation, and public showcase preparation</p>
            </div>
          </div>
        </section>

        <section class="content-section">
          <h2>Gallery</h2>
          <div class="carousel-container">
            <div class="carousel-track">
              <div class="carousel-item active">
                <img src="${gallery1}" alt="Projecting the Future workshop" class="carousel-image">
                <p class="carousel-caption">Projecting the Future workshop - exploring digital art and projection mapping</p>
                <p class="carousel-credit">Photo credit: Simon Rojas (2023)</p>
              </div>
              <div class="carousel-item">
                <img src="${gallery2}" alt="BioSonification at MOCA" class="carousel-image">
                <p class="carousel-caption">BioSonification installation at MOCA - data-driven sound art</p>
                <p class="carousel-credit">Photo credit: Tosca Terán (2019)</p>
              </div>
              <div class="carousel-item">
                <img src="${gallery3}" alt="Open Studio event" class="carousel-image">
                <p class="carousel-caption">Open Studio - community showcasing creative technology projects</p>
                <p class="carousel-credit">Photo credit: Courtesy of InterAccess</p>
              </div>
              <div class="carousel-item">
                <img src="${gallery4}" alt="Interactive installation" class="carousel-image">
                <p class="carousel-caption">Benjamin teaching at the PROGRAM09: MEDIAPIPE event at New Stadium.</p>
                <p class="carousel-credit">Photo credit: <a href="https://www.youtube.com/@PROGRAMislive" target="_blank" rel="noopener noreferrer">PROGRAM</a> media team</p>
              </div>
            </div>
            <div class="carousel-controls">
              <button class="carousel-btn prev">&lt;</button>
              <div class="carousel-indicators">
                <span class="indicator active" data-slide="0"></span>
                <span class="indicator" data-slide="1"></span>
                <span class="indicator" data-slide="2"></span>
                <span class="indicator" data-slide="3"></span>
              </div>
              <button class="carousel-btn next">&gt;</button>
            </div>
          </div>
        </section>

        <section class="content-section">
          <h2>Facilities & Access</h2>
          <p>
            Through our partnership with InterAccess, participants receive 24/7 access to a fully-equipped new media studio including computers, 3D printers, laser cutters, woodshop, electronics bench, and installation space.
          </p>
        </section>

        <section class="content-section">
          <h2>Who Should Apply</h2>
          <ul class="who-list">
            <li>Artists wanting to integrate emerging technologies into their practice</li>
            <li>Technologists exploring art and non-utilitarian creation</li>
            <li>Anyone with basic creative tool experience ready to level up in a collaborative cohort</li>
          </ul>
          <p class="diversity-note">
            We especially encourage BIPOC, disabled, and low-income creatives to apply. Sliding scale tuition available.
          </p>
        </section>

        <section class="content-section">
          <h2>Program Leads</h2>
          <div class="team-grid">
            <div class="team-member">
              <img src="${taraPhoto}" alt="Tara Rose Morris" class="team-photo">
              <h3>Tara Rose Morris</h3>
              <p>Artist and creative technologist using technology for live performances and immersive installations exploring art, code, and liminal ontologies of embodiment.</p>
            </div>
            <div class="team-member">
              <img src="${benjaminPhoto}" alt="Benjamin Lappalainen" class="team-photo">
              <h3>Benjamin Lappalainen</h3>
              <p>Creative technologist and educator creating interactive installations that blur digital and physical boundaries. Focuses on human-centered technology and open source tools for social impact.</p>
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

        <section id="getinvolved" class="content-section contact-section">
          <h2>Questions?</h2>
          <p>Contact: <a href="mailto:hello@softlaunch.net">hello@softlaunch.net</a></p>
        </section>
      </div>
    </div>
  `;

  app.innerHTML = landingHTML;

  // Initialize Supabase client
  // Project URL and publishable token - this is fine to be in client-side code
  const SUPABASE_URL = 'https://kwgxwzywmcslyqvqtzue.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_FWrAeJdYCQ7fCIeviahVYw_wOrhPjkB';

  let supabase = null;

  // Only initialize if both URL and key are provided
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

      // Basic validation
      if (!name || !email) {
        alert('Please fill in both name and email fields.');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Show loading state
      const submitButton = this.querySelector('.signup-button');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Adding to list...';
      submitButton.disabled = true;

      try {
        if (supabase) {
          // Insert data into Supabase
          const { data, error } = await supabase
            .from('email_signups')
            .insert([
              {
                name: name.trim(),
                email: email.trim().toLowerCase()
              }
            ]);

          if (error) {
            if (error.code === '23505') { // Duplicate email error
              alert('This email is already on our list!');
            } else {
              console.error('Supabase error:', error);
              alert('There was an error adding you to our list. Please try again.');
            }
          } else {
            alert(`Thank you ${name}! We'll notify you at ${email} when applications open.`);
            this.reset();
          }
        } else {
          // Fallback if Supabase not configured
          alert(`Thank you ${name}! We'll notify you at ${email} when applications open. (Note: Supabase not configured yet)`);
          this.reset();
        }
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error adding you to our list. Please try again.');
      } finally {
        // Reset button state
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
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

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
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopAutoAdvance();
      nextSlide();
      startAutoAdvance(); // Restart auto-advance after manual interaction
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopAutoAdvance();
      prevSlide();
      startAutoAdvance(); // Restart auto-advance after manual interaction
    });
  }

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

  // Create p5 background container
  const p5Container = document.createElement('div');
  p5Container.id = 'p5-background';
  document.body.insertBefore(p5Container, app);
});
