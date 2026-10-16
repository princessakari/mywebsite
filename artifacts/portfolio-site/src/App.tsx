import { useLayoutEffect, useState } from 'react';
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

type HighlightItem = {
  source: string;
  title: string;
  href?: string;
};

const pressMediaHighlights: HighlightItem[] = [
  {
    source: 'Brummell Magazine',
    title: 'One of London’s most exciting rising stars 2026',
    href: 'https://www.brummellmagazine.co.uk/discover/ones-to-watch-in-the-city-2026/',
  },
  {
    source: 'Condia',
    title: 'Career Transition from Oil & Gas to Tech',
    href: 'https://thecondia.com/princess-akari-product-manager-moniepoint/',
  },
  {
    source: 'Treford Africa No-Code Talent Radar',
    title: '10 Inspiring, Young Product Managers to Follow',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7019325068480581633/',
  },
  {
    source: 'TechCabal',
    title: 'Community Leaders Fueling Africa’s Tech Talent Pipeline',
    href: 'https://techcabal.com/2022/09/10/meet-the-13-nigerian-community-leaders-fueling-africas-tech-talent-pipeline/',
  },
  {
    source: 'Zikoko',
    title: 'Entering Tech: Your Roadmap to a Thriving Career',
    href: 'https://www.zikoko.com/her/your-complete-guide-to-pivoting-to-tech/',
  },
  {
    source: 'First Check Africa',
    title: 'Africa’s Women in Tech',
    href: 'https://www.instagram.com/p/CXJUkNNF2uz/',
  },
  {
    source: 'Ventures Africa Weekly Series',
    title: 'My Pivot Journal',
    href: 'https://venturesafrica.com/my-pivot-journal-civil-engineer-becomes-product-manager/',
  },
  {
    source: 'Inside Brass People Spotlight',
    title: 'My Product Journey',
    href: 'https://www.trybrass.com/blog/inside-brass/princess-akari',
  },
  {
    source: 'SkillUp Africa',
    title: 'WomenInTech Feature',
    href: 'https://www.linkedin.com/posts/skillupafrica_womenintech-wcw-africa-activity-6985886788972081154-im7B?utm_source=share&utm_medium=member_desktop',
  },
  {
    source: 'StartUp Lagos',
    title: 'Founders Feature',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:6989174965849763840?utm_source=share&utm_medium=member_desktop',
  },
  {
    source: 'SheCodeAfrica',
    title: 'Rising Star Award',
    href: 'https://twitter.com/thekitoye/status/1591481151390388225',
  },
  {
    source: 'PeopleInProduct (My Product Community) Award',
    title: 'NoCode Community of the Year 2022',
    href: 'https://twitter.com/nocodesummit/status/1601634235038986240?s=46&t=V7g3tej4jUrqbB0BakCatA',
  },
  {
    source: 'One Knight in Product',
    title: 'Podcast Episode with Jason Knight',
    href: 'https://www.oneknightinproduct.com/princess-akari/',
  },
  {
    source: 'TechPoint Africa',
    title: 'The Silent Migration',
    href: 'https://techpoint.africa/insight/when-talented-nigerians-leave/',
  },
];

const publicSpeakingHighlights: HighlightItem[] = [
  {
    source: 'PMHelp · February 2026',
    title: 'LinkedIn Optimization for Global Opportunities',
    href: 'https://www.linkedin.com/posts/princessakari_i-believe-linkedin-is-a-valuable-career-asset-activity-7431663556468707328-tkk2?utm_source=share&utm_medium=member_desktop&rcm=ACoAABI9MuABVymAl5ic2Oz8idqWZXsQaKj6Ziw',
  },
  {
    source: 'Wise & BlackInFinTech Community · Black History Month · October 2025',
    title: 'Vision to Venture',
    href: 'https://www.linkedin.com/posts/wiseaccount_lifeatwise-blackhistorymonth-diversityequityinclusion-activity-7391414005531197441-jy83?utm_source=share&utm_medium=member_desktop&rcm=ACoAABI9MuABVymAl5ic2Oz8idqWZXsQaKj6Ziw',
  },
  {
    source: 'ZikokoMag · ShiftTheStory · September 2025',
    title: 'Entering Tech: Your Roadmap to a Thriving Career',
    href: 'https://x.com/Zikoko_Mag/status/1971916244459704627?s=20',
  },
  {
    source: 'Ideation HQ · Product Conversations · August 2025',
    title: 'Prioritization Frameworks: What to Build Next and Why',
    href: 'https://www.linkedin.com/posts/ideationhq_productstrategy-productdevelopment-thoughtleaders-activity-7354516653189062656-Ha69?utm_source=share&utm_medium=member_desktop&rcm=ACoAABI9MuABVymAl5ic2Oz8idqWZXsQaKj6Ziw',
  },
  {
    source: 'Propel Product Masterclass · July 2025',
    title: 'Driving Product Success with the Right Product Strategy',
    href: 'https://x.com/WithPropel/status/1945800357440884821',
  },
  {
    source: 'InspireAfrica Conference · September 2024',
    title: 'The Power of Community in Product',
    href: 'https://www.linkedin.com/posts/inspire-africa-conference_inspireafricon2024-productiscommunity-activity-7243882170920947713-0cGN?utm_source=share&utm_medium=member_desktop',
  },
  {
    source: 'Ideation HQ · September 2024',
    title: 'Product Management for Beginners',
    href: 'https://www.linkedin.com/posts/ideationhq_the-countdown-is-on-were-thrilled-to-introduce-activity-7239661632446955520-iye9?utm_source=share&utm_medium=member_desktop',
  },
  {
    source: 'PeopleInProduct Community · May 2024',
    title: 'The Role of Community in Career Growth and Development',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7198304626553630722',
  },
  {
    source: 'Design Chics · March 2024',
    title: 'Invest in Women, Accelerate Progress',
    href: 'https://www.linkedin.com/posts/design-chics_inspiringinclusion-womensmonth-womenupliftingwomen-activity-7176228762412302337-uZzx?utm_source=share&utm_medium=member_desktop',
  },
  {
    source: 'Tech4Dev · February 2024',
    title: 'Women Techstars Open Day',
    href: 'https://www.linkedin.com/posts/tech4dev_womentechsters-womentechstersopenday-februaryedition-activity-7165745519351341056-p6lx?utm_source=share&utm_medium=member_desktop',
  },
  {
    source: 'ConTech Africa · September 2023',
    title: 'My Product Journey: ConTech Corner',
    href: 'https://x.com/ConTechAfrica/status/1704130565061197892',
  },
  {
    source: 'Product Beats Show · July 2023',
    title: 'The Core of Product Thinking - Emotional Intelligence',
    href: 'https://www.linkedin.com/posts/product-beats_productthinking-emotionalintelligence-userempathy-activity-7070035274860216320-0-On?utm_source=share&utm_medium=member_desktop',
  },
  {
    source: 'ConTech Africa · June 2023',
    title: 'From Idea to Success: Exploring the Product Manager’s Path',
  },
  {
    source: 'Talemia · May 2023',
    title: 'Building a Community Around Your Product',
    href: 'https://x.com/talemiahq/status/1661351965144522752?s=46',
  },
  {
    source: 'Treford · April 2023',
    title: 'Building a Strong Product Community',
    href: 'https://x.com/trefordafrica/status/1647978255411036160?s=46',
  },
  {
    source: 'Ideation HQ · January 2023',
    title: 'Fundamentals and Principles of Product Management',
    href: 'https://x.com/hqideation/status/1617519402966200320',
  },
  {
    source: 'EmpowerHer Community · September 2022',
    title: 'Lessons from my Product Management Journey',
    href: 'https://x.com/empowerhercom/status/1566751388452937728',
  },
  {
    source: 'Brass · May 2022',
    title: 'Basics of Product Management',
    href: 'https://www.linkedin.com/posts/joinbrass_insidebrassconversations-activity-6934526221259059200-J3lD?utm_source=share&utm_medium=member_desktop',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [memberCount, setMemberCount] = useState(0);

  useLayoutEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');
    const memberCountTarget = document.querySelector<HTMLElement>('[data-member-count]');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      setMemberCount(5000);
      return;
    }

    document.documentElement.classList.add('motion-ready');

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach((element) => revealObserver.observe(element));

    let animationFrame = 0;
    let countObserver: IntersectionObserver | undefined;

    if (memberCountTarget) {
      countObserver = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;

        countObserver?.disconnect();
        const duration = 1200;
        let startTime: number | undefined;

        const animateCount = (timestamp: number) => {
          startTime ??= timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          setMemberCount(Math.round(easedProgress * 5000));

          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(animateCount);
          }
        };

        animationFrame = window.requestAnimationFrame(animateCount);
      }, { threshold: 0.5 });

      countObserver.observe(memberCountTarget);
    }

    return () => {
      revealObserver.disconnect();
      countObserver?.disconnect();
      window.cancelAnimationFrame(animationFrame);
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);

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
          <a href="#press-media" onClick={closeMenu}>Press &amp; Media Highlights</a>
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
              I&apos;m Princess, a Product Manager with{' '}
              <strong className="hero-highlight">10+ years of experience across Strategy, Operations, Project, and Product Management</strong>, including 6+ years focused on Product Management and leading cross-functional initiatives. I lead products from 0→1 launches, scale operations, and improve customer experience in regulated environments.
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
          <div className="section-label reveal-on-scroll">SELECTED WORK</div>
          <h2 id="work-title" className="reveal-on-scroll">Some Products I&apos;ve <em>Built</em></h2>
          <div className="work-grid">
            {projects.map((project) => (
              <article className="work-card reveal-on-scroll" key={project.number} data-testid={`card-project-${project.number}`}>
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

        <section id="community" className="community-section reveal-on-scroll" aria-labelledby="community-title">
          <div className="section-label">COMMUNITY</div>
          <h2 id="community-title">Building <em>PeopleInProduct</em></h2>
          <div className="community-copy">
            <p>I&apos;m the founder and Community Lead of PeopleInProduct, a growing community helping people learn, connect, and build better careers across the UK and Africa.</p>
            <p>We host events, mentorship programs, and learning initiatives for product managers and aspiring PMs. <strong className="member-count" data-member-count><span aria-hidden="true">{memberCount.toLocaleString('en-GB')}+ members</span><span className="visually-hidden">5,000+ members</span></strong> across multiple regions globally.</p>
            <a href="https://www.peopleinproduct.co" target="_blank" rel="noreferrer" className="community-link">
              Visit PeopleInProduct <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="press-media" className="section highlights-section press-section" aria-labelledby="press-title">
          <div className="highlights-heading reveal-on-scroll">
            <div>
              <div className="section-label">01 / PRESS &amp; MEDIA</div>
              <h2 id="press-title">Press &amp; Media <em>Highlights</em></h2>
              <p className="highlights-intro">Features, recognitions, and spotlights</p>
            </div>
          </div>
          <ol className="highlight-list" aria-label="Press and media highlights">
            {pressMediaHighlights.map((item, index) => (
              <li
                className="highlight-row reveal-on-scroll"
                key={item.href}
                style={{ animationDelay: `${Math.min(index, 7) * 38}ms` }}
              >
                <a className="highlight-row-link" href={item.href} target="_blank" rel="noreferrer">
                  <span className="highlight-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <span className="highlight-source">{item.source}</span>
                  <span className="highlight-title">{item.title}</span>
                  <span className="highlight-row-arrow" aria-hidden="true">
                    <ArrowUpRight size={17} strokeWidth={1.7} />
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section id="public-speaking" className="section highlights-section speaking-section" aria-labelledby="speaking-title">
          <div className="highlights-heading reveal-on-scroll">
            <div>
              <div className="section-label">02 / PUBLIC SPEAKING</div>
              <h2 id="speaking-title">Public <em>Speaking</em></h2>
              <p className="highlights-intro">Talks, panels, and product conversations</p>
            </div>
          </div>
          <ol className="highlight-list" aria-label="Public speaking highlights">
            {publicSpeakingHighlights.map((item, index) => {
              const rowContent = (
                <>
                  <span className="highlight-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <span className="highlight-source">{item.source}</span>
                  <span className="highlight-title">{item.title}</span>
                  {item.href && (
                    <span className="highlight-row-arrow" aria-hidden="true">
                      <ArrowUpRight size={17} strokeWidth={1.7} />
                    </span>
                  )}
                </>
              );

              return (
                <li
                  className="highlight-row reveal-on-scroll"
                  key={item.href ?? item.title}
                  style={{ animationDelay: `${Math.min(index, 7) * 38}ms` }}
                >
                  {item.href ? (
                    <a className="highlight-row-link" href={item.href} target="_blank" rel="noreferrer">
                      {rowContent}
                    </a>
                  ) : (
                    <div className="highlight-row-link highlight-row-link-static">
                      {rowContent}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </section>

        <section id="content" className="content-section reveal-on-scroll" aria-labelledby="content-title">
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
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#community">Community</a>
          <a href="#content">Content</a>
          <a href="#public-speaking">Public Speaking</a>
        </nav>
      </footer>
    </>
  );
}

export default App;