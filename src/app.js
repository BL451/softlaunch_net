function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Make function globally available
window.scrollToSection = scrollToSection;

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  const landingHTML = `
    <div class="landing-container">
      <header class="hero-section">
        <h1>soft_launch</h1>
        <h2>12-Week Creative Technology Intensive</h2>
        <p class="hero-text">
          A bridge between code, culture, and community. For artists and technologists ready to expand their creative practice through emerging technologies.
        </p>
        <button class="cta-button" onclick="scrollToSection('getinvolved')">Get Involved</button>
      </header>

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
              <h3>Weeks 1-3</h3>
              <p>Creative coding with p5.js, web development, generative art</p>
            </div>
            <div class="curriculum-block">
              <h3>Weeks 4-5</h3>
              <p>AI tools, LLMs, local image generation with ComfyUI</p>
            </div>
            <div class="curriculum-block">
              <h3>Weeks 6-10</h3>
              <p>TouchDesigner, Arduino, projection mapping, physical computing</p>
            </div>
            <div class="curriculum-block">
              <h3>Weeks 11-12</h3>
              <p>Project fabrication, installation, and public showcase</p>
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
              <h3>Tara Rose Morris</h3>
              <p>Artist and creative technologist using technology for live performances and immersive installations. NEW INC Y11 member exploring art, code, and liminal ontologies of embodiment.</p>
            </div>
            <div class="team-member">
              <h3>Benjamin Lappalainen</h3>
              <p>Creative technologist and educator creating interactive installations that blur digital and physical boundaries. Focuses on human-centered technology and open source tools for social impact.</p>
            </div>
          </div>
        </section>

        <section id="getinvolved" class="content-section contact-section">
          <h2>Get Involved</h2>
          <p><strong>Applications opening soon!</strong></p>
          <p>Contact: <a href="mailto:hello@softlaunch.net">hello@softlaunch.net</a></p>
        </section>
      </div>
    </div>
  `;

  app.innerHTML = landingHTML;

  const p5Container = document.createElement('div');
  p5Container.id = 'p5-background';
  document.body.insertBefore(p5Container, app);
});
