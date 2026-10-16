import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { pressMediaHighlights, publicSpeakingHighlights } from './data';
import './_group.css';
import './CompactRows.css';

export function CompactRows() {
  const previewRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    const rows = preview.querySelectorAll<HTMLElement>('.compact-row');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      rows.forEach((row) => row.classList.add('is-visible'));
      return;
    }

    preview.classList.add('is-motion-ready');
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="ps-preview-host ps-compact" ref={previewRef}>
      <div className="compact-wrap">
        <header className="compact-masthead">
          <p className="compact-kicker"><span aria-hidden="true" /> A PUBLIC RECORD</p>
          <p className="compact-note">Selected conversations, recognition &amp; ideas in motion</p>
        </header>

        <section id="press-media" className="compact-section" aria-labelledby="compact-press-title">
          <div className="compact-heading">
            <div>
              <p className="compact-label">01 / PRESS &amp; MEDIA</p>
              <h1 id="compact-press-title">In the <em>press</em></h1>
              <p className="compact-intro">Features, recognitions, and spotlights</p>
            </div>
            <span className="compact-count" aria-label={`${pressMediaHighlights.length} press and media links`}>
              {String(pressMediaHighlights.length).padStart(2, '0')} <span>ENTRIES</span>
            </span>
          </div>
          <ol className="compact-list" aria-label="Press and media highlights">
            {pressMediaHighlights.map((item, index) => (
              <li className="compact-row" key={item.href ?? item.title} style={{ '--row-index': index } as CSSProperties}>
                <a className="compact-link" href={item.href} target="_blank" rel="noreferrer">
                  <span className="compact-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <span className="compact-source">{item.source}</span>
                  <span className="compact-title">{item.title}</span>
                  <span className="compact-arrow" aria-hidden="true"><ArrowUpRight size={17} strokeWidth={1.7} /></span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section id="public-speaking" className="compact-section compact-speaking" aria-labelledby="compact-speaking-title">
          <div className="compact-heading">
            <div>
              <p className="compact-label">02 / PUBLIC SPEAKING</p>
              <h2 id="compact-speaking-title">Ideas <em>out loud</em></h2>
            </div>
          </div>
          <ol className="compact-list" aria-label="Public speaking highlights">
            {publicSpeakingHighlights.map((item, index) => (
              <li className="compact-row" key={item.href ?? item.title} style={{ '--row-index': index } as CSSProperties}>
                {item.href ? (
                  <a className="compact-link" href={item.href} target="_blank" rel="noreferrer">
                    <span className="compact-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <span className="compact-source">{item.source}</span>
                    <span className="compact-title">{item.title}</span>
                    <span className="compact-arrow" aria-hidden="true"><ArrowUpRight size={17} strokeWidth={1.7} /></span>
                  </a>
                ) : (
                  <div className="compact-link compact-link-static">
                    <span className="compact-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <span className="compact-source">{item.source}</span>
                    <span className="compact-title">{item.title}</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        <footer className="compact-footer">
          <span>PRINCESS AKARI</span>
          <span>PRODUCT · COMMUNITY · CONVERSATION</span>
        </footer>
      </div>
    </main>
  );
}
