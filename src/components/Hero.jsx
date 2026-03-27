// src/components/Hero.jsx
import AnnsLogo from './AnnsLogo';
import useWindowSize from '../hooks/useWindowSize';

const stats = [
  { num: '40+', label: 'Years'           },
  { num: '30+', label: 'Outlets'         },
  { num: '∞',   label: 'Happy Customers' },
];

const badges = [
  { icon: '🎂', title: 'Custom Cakes',  sub: 'Made to order',      top: '22%',   left: '2%',   delay: '0s'   },
  { icon: '⭐', title: 'Since 1984',    sub: '40 years trusted',    top: '22%',   right: '2%',  delay: '0.8s' },
  { icon: '🍞', title: 'Fresh Daily',   sub: 'Baked every morning', bottom: '22%',left: '2%',   delay: '1.4s' },
  { icon: '📍', title: 'Kerala-wide',   sub: '30+ locations',       bottom: '22%',right: '2%',  delay: '0.5s' },
];

export default function Hero() {
  const { isMobile, isTablet } = useWindowSize();

  return (
    <section style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      alignItems: 'center',
      paddingTop: isMobile ? 60 : 70,
      overflow: 'hidden',
      position: 'relative',
      background: 'linear-gradient(150deg, #FFF5F5 0%, #FFFBF7 40%, #FFF8EE 100%)',
      backgroundImage: `radial-gradient(circle, rgba(200,16,46,0.07) 1px, transparent 1px), linear-gradient(150deg, #FFF5F5 0%, #FFFBF7 40%, #FFF8EE 100%)`,
      backgroundSize: '28px 28px, 100% 100%',
    }}>

      {/* Left */}
      <div style={{ padding: isMobile ? '3rem 1.5rem 2rem' : isTablet ? '4rem 2rem' : '5rem 3rem 5rem 5rem', position: 'relative', zIndex: 1 }}>

        <span className="anim-fadeUp d1" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C8102E', marginBottom: '1.5rem' }}>
          <span style={{ width: 24, height: 1, background: '#C8102E', display: 'inline-block' }} />
          Est. 1984 · Pala, Kerala
        </span>

        <h1 className="anim-fadeUp d2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: isMobile ? '2.8rem' : 'clamp(3rem, 5vw, 5rem)', lineHeight: 1.08, color: '#1E0E0E', marginBottom: '1rem' }}>
          Kerala's Most<br />
          <em style={{ fontStyle: 'italic', color: '#C8102E' }}>Beloved</em><br />
          Bakery
        </h1>

        <p className="anim-fadeUp d3" style={{ fontSize: isMobile ? '0.95rem' : '1.05rem', color: '#7A5C5C', fontWeight: 300, letterSpacing: '0.04em', marginBottom: '2rem', lineHeight: 1.6 }}>
          Big on Quality. Big on Taste.<br />Baked fresh every single day.
        </p>

        <div className="anim-fadeUp d4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#products" style={{ padding: '0.9rem 2rem', background: '#C8102E', color: 'white', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 2, fontWeight: 500 }}
            onMouseEnter={e => e.target.style.background = '#E8354F'}
            onMouseLeave={e => e.target.style.background = '#C8102E'}>
            Our Products
          </a>
          <a href="#locations" style={{ padding: '0.9rem 2rem', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 2, border: '1.5px solid rgba(200,16,46,0.3)', color: '#C8102E' }}
            onMouseEnter={e => e.target.style.background = '#FFF0F2'}
            onMouseLeave={e => e.target.style.background = 'transparent'}>
            Find a Store
          </a>
        </div>

        {/* Stats */}
        <div className="anim-fadeUp d5" style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.8rem', color: '#C8102E', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7A5C5C', marginTop: 4 }}>{s.label}</div>
              </div>
              {i < stats.length - 1 && <div style={{ width: 1, height: 36, background: 'rgba(200,16,46,0.12)' }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Right — hidden on mobile */}
      {!isMobile && (
        <div style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: isTablet ? 360 : 520, height: isTablet ? 360 : 520, borderRadius: '50%', background: 'linear-gradient(135deg, #FFEEF0 0%, #FFF5E8 100%)', border: '1px solid rgba(200,16,46,0.1)' }} />
          <div className="anim-rotate" style={{ position: 'absolute', width: isTablet ? 420 : 580, height: isTablet ? 420 : 580, borderRadius: '50%', border: '1px dashed rgba(200,16,46,0.15)' }} />

          {!isTablet && badges.map(b => (
            <div key={b.title} className="anim-badge" style={{
              position: 'absolute', zIndex: 3,
              top: b.top, bottom: b.bottom, left: b.left, right: b.right,
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              background: 'white', borderRadius: 12, padding: '0.8rem 1.2rem',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)', border: '1px solid rgba(200,16,46,0.12)',
              animationDelay: b.delay,
            }}>
              <span style={{ fontSize: '1.4rem' }}>{b.icon}</span>
              <div style={{ fontSize: '0.65rem', lineHeight: 1.4 }}>
                <strong style={{ display: 'block', fontWeight: 500, color: '#1E0E0E', fontSize: '0.7rem' }}>{b.title}</strong>
                <span style={{ color: '#7A5C5C' }}>{b.sub}</span>
              </div>
            </div>
          ))}

          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <AnnsLogo size={isTablet ? 140 : 200} />
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1.1rem', color: '#7A5C5C', textAlign: 'center' }}>
              "Big on Quality. Big on Taste."
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
