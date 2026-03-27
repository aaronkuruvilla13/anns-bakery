// src/components/About.jsx
import useWindowSize from '../hooks/useWindowSize';

const values = [
  { icon: '🌿', title: 'Quality Ingredients', desc: 'Only the finest, freshest ingredients make it into our bakes.' },
  { icon: '🎂', title: 'Made to Order',        desc: 'Custom cakes crafted for every special occasion.' },
  { icon: '🔥', title: 'Fresh Every Day',      desc: 'Our ovens run every morning so you always get it fresh.' },
  { icon: '🏡', title: 'Kerala Heritage',      desc: 'Rooted in Pala since 1984 — a true Kerala institution.' },
];

export default function About() {
  const { isMobile, isTablet } = useWindowSize();

  return (
    <section id="about" style={{
      padding: isMobile ? '4rem 1.5rem' : isTablet ? '5rem 3rem' : '8rem 5rem',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr',
      gap: isMobile ? '3rem' : '6rem',
      alignItems: 'center',
      background: 'white',
    }}>
      {/* Text */}
      <div>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C8102E', marginBottom: '1rem', display: 'block' }}>Our Story</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: isMobile ? '2rem' : 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.2, color: '#1E0E0E', marginBottom: '1.5rem' }}>
          Four Decades of<br /><em style={{ fontStyle: 'italic', color: '#C8102E' }}>Baking Excellence</em>
        </h2>
        <p style={{ fontSize: '0.85rem', lineHeight: 2, color: '#7A5C5C', marginBottom: '1.2rem' }}>
          The Anns brand has been synonymous with quality bakery products since it was established in 1984 in Pala, Kerala. From a single outlet, Anns set the standard for what a great bakery should be — and has never looked back.
        </p>
        <p style={{ fontSize: '0.85rem', lineHeight: 2, color: '#7A5C5C', marginBottom: '2rem' }}>
          Our core belief — <em>"Big on Quality; Big on Taste"</em> — has endeared us to customers both inside and outside the country. Today, Anns has outlets spread across cities and towns throughout Kerala.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {values.map(v => (
            <div key={v.title} style={{ padding: '1.2rem', borderRadius: 8, background: '#F7F2EE', border: '1px solid rgba(200,16,46,0.12)', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,16,46,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(200,16,46,0.12)'}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{v.icon}</div>
              <div style={{ fontWeight: 500, fontSize: '0.75rem', color: '#1E0E0E', marginBottom: '0.25rem' }}>{v.title}</div>
              <div style={{ fontSize: '0.68rem', color: '#7A5C5C', lineHeight: 1.6 }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual — hidden on mobile */}
      {!isMobile && (
        <div style={{ position: 'relative' }}>
          <div style={{ width: '100%', aspectRatio: '3/4', borderRadius: 12, background: 'linear-gradient(135deg, #FDF3E7 0%, #FDECD8 100%)', border: '1px solid rgba(200,16,46,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7rem', position: 'relative', overflow: 'hidden' }}>
            🎂
            <span style={{ position: 'absolute', bottom: '1.5rem', left: 0, right: 0, textAlign: 'center', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '0.9rem', color: '#7A5C5C' }}>Since 1984</span>
          </div>
          <div style={{ position: 'absolute', bottom: '-1.5rem', left: '-2rem', background: '#C8102E', color: 'white', borderRadius: 10, padding: '1.2rem 1.5rem', boxShadow: '0 8px 32px rgba(200,16,46,0.3)' }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>1984</div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.85, marginTop: 4 }}>Est. in Pala, Kerala</div>
          </div>
        </div>
      )}
    </section>
  );
}
