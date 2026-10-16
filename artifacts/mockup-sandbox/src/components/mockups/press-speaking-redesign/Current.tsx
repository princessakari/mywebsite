import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { pressMediaHighlights, publicSpeakingHighlights } from './data';
import './_group.css';
import './Current.css';

export function Current() {
  const previewRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    const revealElements = preview.querySelectorAll<HTMLElement>('.current-reveal');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    preview.classList.add('is-motion-ready');
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="ps-preview-host ps-current" ref={previewRef}>
      <section id="press-media" className="current-section current-press" aria-labelledby="current-press-title">
        <p className="current-label current-reveal">PRESS &amp; MEDIA</p>
        <h2 id="current-press-title" className="current-reveal">
          Press &amp; Media <em>Highlights</em>
        </h2>
        <p className="current-intro current-reveal">Features, recognitions, and spotlights</p>
        <ul className="current-grid">
          {pressMediaHighlights.map((item) => (
            <li className="current-item current-reveal" key={item.href ?? item.title}>
              <a className="current-card" href={item.href} target="_blank" rel="noreferrer">
                <span className="current-source">{item.source}</span>
                <span className="current-title">{item.title}</span>
                <ArrowUpRight className="current-arrow" aria-hidden="true" size={16} />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="public-speaking" className="current-section current-speaking" aria-labelledby="current-speaking-title">
        <p className="current-label current-reveal">PUBLIC SPEAKING</p>
        <h2 id="current-speaking-title" className="current-reveal">
          Public <em>Speaking</em>
        </h2>
        <p className="current-intro current-reveal">Talks, panels, and product conversations</p>
        <ul className="current-grid">
          {publicSpeakingHighlights.map((item) => (
            <li className="current-item current-reveal" key={item.href ?? item.title}>
              {item.href ? (
                <a className="current-card" href={item.href} target="_blank" rel="noreferrer">
                  <span className="current-source">{item.source}</span>
                  <span className="current-title">{item.title}</span>
                  <ArrowUpRight className="current-arrow" aria-hidden="true" size={16} />
                </a>
              ) : (
                <div className="current-card current-card-static">
                  <span className="current-source">{item.source}</span>
                  <span className="current-title">{item.title}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
