// src/components/Locations.jsx
import useWindowSize from '../hooks/useWindowSize';

const districts = [
  {
    name: 'Ernakulam District',
    stores: [
      { name: 'Kakkanad',         address: 'Mavelipuram Colony, Thrikkakara, Kakkanad, Kochi 682030',                          phone: '+91 812 960 0662' },
      { name: 'Chembumukku',      address: 'Civil Line Rd, Adjacent Chembumukku Bus Stop, Kochi',                              phone: '0484 242 1652'    },
      { name: 'Panampilly Nagar', address: 'Tc 55/947, Moolepat Building, 3rd Cross Road, Panampilly Nagar Ave, Kochi 682036', phone: '+91 871 460 1077' },
    ],
  },
  {
    name: 'Kottayam District',
    stores: [
      { name: 'Kottayam Town',        address: 'CSI Square Buildings, Opp. YMCA, Shasthri Road, Kottayam',                    phone: '0481 258 5517' },
      { name: 'Kanjikuzhy',           address: 'Kochuparambil Building, K.K. Rd, Kanjikuzhi, Kottayam',                       phone: '0481 257 3573' },
      { name: 'Thellakom',            address: 'J Square Centre, near Sulabah Hypermarket, MC Road, Thellakom',                phone: '0481 2792122'  },
      { name: 'Changanassery Town',   address: 'Building No. XXXI/316, MC Road, Changanassery', hours: '9:00am – 7:00pm',     phone: '0481 241 0760' },
      { name: 'Kurishumoodu',         address: 'Nakathil Building, IE Nagar P.O, Vazhapally, Changanassery',                   phone: '0481 272 1760' },
      { name: 'Pala – Kottaramattom', address: 'Santhome Complex, adjacent Reliance Super Market, Kottaramattom, Pala',        phone: '04822 200 142' },
      { name: 'Pala Town',            address: 'Vazhayil Shopping Arcade, Main Road, Pala',                                    phone: '04822 201 972' },
      { name: 'Kanjirapally',         address: 'Karikkattuperambil Enclave, Kanjirappally, Kerala 686507',                     phone: '0482 829 1361' },
    ],
  },
  {
    name: 'Pathanamthitta District',
    stores: [
      { name: 'Thiruvalla', address: 'Contact head office for exact address', phone: '+91 4822 213193' },
    ],
  },
];

function StoreCard({ store }) {
  return (
    <div style={{ background: '#F7F2EE', borderRadius: 10, padding: '1.4rem 1.5rem', border: '1px solid rgba(200,16,46,0.12)', transition: 'all 0.2s' }}
      onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = 'rgba(200,16,46,0.25)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(200,16,46,0.07)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = '#F7F2EE'; e.currentTarget.style.borderColor = 'rgba(200,16,46,0.12)'; e.currentTarget.style.boxShadow = 'none'; }}>
      <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#1E0E0E', marginBottom: '0.4rem' }}>{store.name}</div>
      <div style={{ fontSize: '0.72rem', lineHeight: 1.65, color: '#7A5C5C', marginBottom: '0.6rem' }}>{store.address}</div>
      {store.hours && <div style={{ fontSize: '0.63rem', color: '#3A7A4A', marginBottom: '0.4rem' }}>🕐 {store.hours}</div>}
      <a href={`tel:${store.phone.replace(/\s/g, '')}`} style={{ fontSize: '0.73rem', color: '#C8102E', fontWeight: 500, textDecoration: 'none' }}>
        📞 {store.phone}
      </a>
    </div>
  );
}

export default function Locations() {
  const { isMobile, isTablet } = useWindowSize();
  const cols = isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(auto-fill, minmax(260px, 1fr))';

  return (
    <section id="locations" style={{ padding: isMobile ? '4rem 1.5rem' : isTablet ? '5rem 3rem' : '8rem 5rem', background: 'white' }}>
      <div style={{ marginBottom: '3.5rem' }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C8102E', display: 'block', marginBottom: '0.8rem' }}>Find Us Near You</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.2, color: '#1E0E0E' }}>
          Store <em style={{ fontStyle: 'italic', color: '#C8102E' }}>Locations</em>
        </h2>
      </div>

      {districts.map(d => (
        <div key={d.name} style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: "'Playfair Display', serif", fontSize: isMobile ? '1rem' : '1.2rem', fontWeight: 600, color: '#1E0E0E', marginBottom: '1.2rem', paddingBottom: '0.8rem', borderBottom: '2px solid #FFF0F2' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#C8102E', display: 'inline-block', flexShrink: 0 }} />
            {d.name}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: cols, gap: '1rem' }}>
            {d.stores.map(s => <StoreCard key={s.name} store={s} />)}
          </div>
        </div>
      ))}
    </section>
  );
}
