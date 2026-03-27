// src/components/Marquee.jsx
const items = [
  'Fresh Baked Daily', 'Est. 1984 · Pala, Kerala', 'Custom Cakes',
  "Kerala's Favourite Bakery", 'Big on Quality · Big on Taste', '30+ Stores Across Kerala',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', padding: '0.85rem 0', background: '#C8102E' }}>
      <div className="anim-marquee" style={{ display: 'inline-flex' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 500, padding: '0 2rem', color: 'rgba(255,255,255,0.9)' }}>
              {item}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.5rem' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
