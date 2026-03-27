// src/components/Navbar.jsx
import { useState } from 'react';
import AnnsLogo from './AnnsLogo';
import useWindowSize from '../hooks/useWindowSize';

const links = [
  { label: 'About',     href: '#about'     },
  { label: 'Products',  href: '#products'  },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact',   href: '#contact'   },
];

export default function Navbar() {
  const { isMobile } = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: isMobile ? '0.8rem 1.2rem' : '0.9rem 4rem',
        background: 'rgba(255,251,247,0.94)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(200,16,46,0.12)',
      }}>
        {/* Logo */}
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <AnnsLogo size={isMobile ? 36 : 46} />
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: isMobile ? '0.9rem' : '1rem', color: '#1E0E0E', lineHeight: 1.2 }}>
            Anns Bakery
            <small style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7A5C5C', fontWeight: 400 }}>
              & Confectionery
            </small>
          </div>
        </a>

        {/* Desktop links */}
        {!isMobile && (
          <ul style={{ display: 'flex', gap: '2.4rem', listStyle: 'none' }}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: hovered === l.href ? '#C8102E' : '#7A5C5C', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={() => setHovered(l.href)} onMouseLeave={() => setHovered(null)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop CTA / Mobile hamburger */}
        {!isMobile ? (
          <a href="#locations" style={{ padding: '0.6rem 1.6rem', background: '#C8102E', color: 'white', fontSize: '0.67rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 2 }}
            onMouseEnter={e => e.target.style.background = '#E8354F'}
            onMouseLeave={e => e.target.style.background = '#C8102E'}>
            Find a Store
          </a>
        ) : (
          <button onClick={() => setMenuOpen(o => !o)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.4rem', display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ width: 24, height: 2, background: '#1E0E0E', display: 'block', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ width: 24, height: 2, background: '#1E0E0E', display: 'block', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 24, height: 2, background: '#1E0E0E', display: 'block', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0, zIndex: 199,
          background: 'white', borderBottom: '1px solid rgba(200,16,46,0.12)',
          padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.2rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ padding: '0.8rem 0', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E0E0E', textDecoration: 'none', borderBottom: '1px solid rgba(200,16,46,0.08)' }}>
              {l.label}
            </a>
          ))}
          <a href="#locations" onClick={() => setMenuOpen(false)}
            style={{ marginTop: '0.8rem', padding: '0.9rem', background: '#C8102E', color: 'white', textAlign: 'center', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 2 }}>
            Find a Store
          </a>
        </div>
      )}
    </>
  );
}
