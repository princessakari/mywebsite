import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react';
import princessPortrait from '@assets/0_princess-profile_1790885005149.jpg';

const projects = [
  {
    number: '01',
    company: 'Moniepoint',
    category: 'CARD PAYMENTS',
    title: 'Card Payments (Acquiring & Issuing)',
    description: [
      'Improved card-acquiring refunds and payment operations, strengthening auto-reversal performance. Built a UK card-issuing proposition from the ground up across processors, schemes, vendors, and operations.',
    ],
    tags: ['Card Acquiring', 'Card Issuing', 'Operations', '0→1 Product'],
  },
  {
    number: '02',
    company: 'Moniepoint',
    category: 'PAYMENTS · CROSS-BORDER',
    title: 'Cross Border Payments',
    description: [
      'Launched a new market with a cross-border payments product, scaling to meet emerging market demand. Led foundational research and product strategy to capture a new geographic segment.',
    ],
    tags: ['0→1 Product', 'Growth', 'Emerging Markets'],
  },
  {
    number: '03',
    company: 'Brass',
    category: 'BUSINESS BANKING',
    title: 'Business banking & Payment tools',
    description: [
      'Launched and expanded a mobile app (0→1) and suite of A2A payments, invoicing, payroll, cards, loans, and POS. Managed a multi-product roadmap, balancing SMB needs with business requirements.',
    ],
    tags: ['Payments', 'SMB Focus', 'Product Suite'],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-nav">
        <a className="logo" href="#" aria-label="Princess Akari, home" onClick={closeMenu}>
          PA<span>.</span>
        </a>
        <nav id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>My Work</a>
          <a href="https://www.linkedin.com/in/princessakari/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#community" onClick={closeMenu}>Community</a>
          <a href="#content" onClick={closeMenu}>Content</a>
        </nav>
        <a className="nav-cta" href="mailto:princessestherakari@gmail.com">
          Let&apos;s talk <ArrowUpRight aria-hidden="true" size={14} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          data-testid="button-menu-toggle"
        >
          {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">PRODUCT MANAGER · FINTECH &amp; PAYMENTS</p>
            <h1 id="hero-title">Building products that make <em>money</em> move better.</h1>
            <p className="hero-text">
              I&apos;m Princess, a Product Manager with 6+ years building products across fintech and payments. I lead products from 0→1 launches, scale operations, and improve customer experience in regulated environments.
            </p>
            <div className="hero-actions">
              <a className="button dark" href="#work">See my work <ArrowDown size={15} aria-hidden="true" /></a>
              <a className="text-link" href="#community">More about me <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-image">
            <img src={princessPortrait} alt="Princess Akari" />
          </div>
        </section>

        <section id="work" className="section work-section" aria-labelledby="work-title">
          <div className="section-label">SELECTED WORK</div>
          <h2 id="work-title">Some Products I&apos;ve <em>Built</em></h2>
          <div className="work-grid">
            {projects.map((project) => (
              <article className="work-card" key={project.number} data-testid={`card-project-${project.number}`}>
                <div className="work-number" aria-label={`Project ${project.number}`}>{project.number}</div>
                <div className="project-intro">
                  <div className="company-name">{project.company}</div>
                  <div className="tag">{project.category}</div>
                  <h3>{project.title}</h3>
                  <div className="project-detail">
                    {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    <div className="tags-group" aria-label="Project capabilities">
                      {project.tags.map((tag) => <span className="badge" key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="community" className="community-section" aria-labelledby="community-title">
          <div className="section-label">COMMUNITY</div>
          <h2 id="community-title">Building <em>PeopleInProduct</em></h2>
          <div className="community-copy">
            <p>I&apos;m the founder and Community Lead of PeopleInProduct, a growing community helping people learn, connect, and build better careers across the UK and Africa.</p>
            <p>We host events, mentorship programs, and learning initiatives for product managers and aspiring PMs. <strong>5,000+ members</strong> across multiple regions globally.</p>
            <a href="https://www.peopleinproduct.co" target="_blank" rel="noreferrer" className="community-link">
              Visit PeopleInProduct <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="content" className="content-section" aria-labelledby="content-title">
          <div className="section-label">CONTENT</div>
          <h2 id="content-title" className="content-title">Thinking outside <em>product</em></h2>
          <p>Outside my day job, I share life learnings across productivity, personal growth, and travel. I create content exploring how to build better habits, live intentionally, and make the most of moving across borders and discovering new places.</p>
          <a href="https://youtube.com/@theprincessakari" target="_blank" rel="noreferrer" className="content-link">
            Watch my Youtube <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Princess Akari</span>
        <div>
          <a href="https://www.linkedin.com/in/princessakari/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:princessestherakari@gmail.com">Contact me</a>
        </div>
      </footer>
    </>
  );
}

export default App;