// src/components/Products.jsx
import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';

const categories = ['All', 'Cakes', 'Breads', 'Pastries', 'Snacks', 'Gifts'];

const products = [
  { icon: '🎂', name: 'Custom Celebration Cakes', sub: 'Made to Order',      badge: 'Order in Advance', cat: 'Cakes',    desc: 'Birthdays, weddings, anniversaries — crafted to your design, flavour, and size.' },
  { icon: '🍰', name: 'Pastries & Slices',         sub: 'Daily Fresh',        badge: 'Baked Daily',      cat: 'Pastries', desc: 'From Black Forest to Butterscotch — our pastry counter is restocked every morning.' },
  { icon: '🍞', name: 'Artisan Breads',             sub: 'Baked Fresh',        badge: 'Fresh Daily',      cat: 'Breads',   desc: 'Soft golden loaves — white, whole wheat, and speciality varieties baked every morning.' },
  { icon: '🥐', name: 'Croissants & Buns',          sub: 'Morning Favourites', badge: 'Morning Fresh',    cat: 'Breads',   desc: 'Flaky buttery croissants and soft filled buns — straight from the oven each morning.' },
  { icon: '🍪', name: 'Cookies & Biscuits',         sub: 'Classic Range',      badge: 'Gift Packs Avail', cat: 'Snacks',   desc: 'Crisp, generously sized cookies in a range of flavours. Perfect for gifting.' },
  { icon: '🎁', name: 'Festive Gift Boxes',          sub: 'Seasonal Specials',  badge: 'Seasonal',         cat: 'Gifts',    desc: 'Curated assortments of Anns bestsellers, boxed for Onam, Christmas, Vishu, and Eid.' },
];

export default function Products() {
  const [active, setActive] = useState('All');
  const { isMobile, isTablet } = useWindowSize();
  const filtered = active === 'All' ? products : products.filter(p => p.cat === active);

  const cols = isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)';

  return (
    <section id="products" style={{ padding: isMobile ? '4rem 1.5rem' : isTablet ? '5rem 3rem' : '8rem 5rem', background: '#F7F2EE' }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C8102E', display: 'block', marginBottom: '0.8rem' }}>What We Bake</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.2, color: '#1E0E0E' }}>
            Our <em style={{ fontStyle: 'italic', color: '#C8102E' }}>Signature</em> Creations
          </h2>
        </div>
        <a href="#contact" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8102E', textDecoration: 'none', borderBottom: '1px solid rgba(200,16,46,0.3)', paddingBottom: 2 }}>
          Order Now →
        </a>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActive(cat)} style={{
            padding: '0.45rem 1.1rem', borderRadius: 50,
            fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase',
            cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.2s',
            background: active === cat ? '#C8102E' : 'white',
            border: active === cat ? '1.5px solid #C8102E' : '1.5px solid rgba(200,16,46,0.12)',
            color: active === cat ? 'white' : '#7A5C5C',
          }}>{cat}</button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: cols, gap: '1.2rem' }}>
        {filtered.map(p => (
          <div key={p.name} style={{ background: 'white', borderRadius: 12, padding: isMobile ? '1.5rem' : '2rem', border: '1px solid rgba(200,16,46,0.12)', transition: 'all 0.3s', position: 'relative', overflow: 'hidden' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,16,46,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(200,16,46,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,16,46,0.12)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
            <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>{p.icon}</span>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '1.15rem', color: '#1E0E0E', marginBottom: '0.3rem' }}>{p.name}</div>
            <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8102E', marginBottom: '0.7rem' }}>{p.sub}</div>
            <p style={{ fontSize: '0.75rem', lineHeight: 1.8, color: '#7A5C5C' }}>{p.desc}</p>
            <span style={{ display: 'inline-block', marginTop: '1rem', padding: '0.3rem 0.9rem', background: '#FFF0F2', border: '1px solid rgba(200,16,46,0.2)', borderRadius: 50, fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8102E' }}>{p.badge}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
