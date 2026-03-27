// src/components/Footer.jsx
import AnnsLogo from './AnnsLogo';
import useWindowSize from '../hooks/useWindowSize';

const navLinks  = [{ label: 'About Us', href: '#about' }, { label: 'Our Products', href: '#products' }, { label: 'Store Locations', href: '#locations' }, { label: 'Contact Us', href: '#contact' }];
const products  = ['Celebration Cakes', 'Pastries & Slices', 'Breads & Buns', 'Cookies', 'Festive Gift Boxes'];
const districts = ['Ernakulam', 'Kottayam', 'Pathanamthitta'];
const socials   = [{ label: 'f', href: '#' }, { label: 'ig', href: 'https://www.instagram.com/annsbakery__pala_' }, { label: '▶', href: '#' }];

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 style={{ fontSize: '0.56rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(245,200,138,0.6)', marginBottom: '1.3rem' }}>{title}</h4>
      <ul style={{ listStyle: 'none' }}>
        {links.map(l => (
          <li key={l.label || l} style={{ marginBottom: '0.6rem' }}>
            <a href={l.href || '#locations'} style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.32)', textDecoration: 'none' }}
              onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.32)'}>
              {l.label || l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { isMobile, isTablet } = useWindowSize();

  return (
    <footer style={{ background: '#1E0A0A', padding: isMobile ? '3rem 1.5rem 1.5rem' : '4rem 5rem 2rem' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1.8fr 1fr 1fr 1fr',
        gap: isMobile ? '2rem' : '3rem',
        paddingBottom: '3rem',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <AnnsLogo size={44} />
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '1rem', color: 'white', lineHeight: 1.2 }}>
              Anns Bakery
              <small style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '0.56rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}>& Confectionery</small>
            </div>
          </div>
          <p style={{ fontSize: '0.73rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.3)', maxWidth: 230, marginBottom: '1.5rem' }}>
            Big on Quality. Big on Taste. Baked fresh in Kerala since 1984.
          </p>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.75rem' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#C8102E'; e.currentTarget.style.borderColor = '#C8102E'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Navigate" links={navLinks} />
        <FooterCol title="Products" links={products.map(p => ({ label: p, href: '#products' }))} />
        <FooterCol title="Districts" links={districts.map(d => ({ label: d, href: '#locations' }))} />
      </div>

      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: '0.5rem', paddingTop: '2rem' }}>
        <p style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.18)' }}>© 2025 Anns Bakery and Confectionery Pvt Ltd. All rights reserved.</p>
        <p style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.18)' }}>Made with 🧡 in Kerala</p>
      </div>
    </footer>
  );
}
