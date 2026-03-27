// src/components/Contact.jsx
import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';

const enquiryTypes = ['Custom Cake Order', 'Bulk / Wholesale', 'Franchise Enquiry', 'General Feedback', 'Other'];

export default function Contact() {
  const { isMobile, isTablet } = useWindowSize();
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', type: '', message: '' });
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); alert("Message sent! We'll get back to you soon."); };

  const fieldStyle = {
    width: '100%', padding: '0.9rem 1.2rem',
    background: 'white', border: '1.5px solid rgba(200,16,46,0.12)',
    color: '#1E0E0E', fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem',
    borderRadius: 8, outline: 'none', transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{
      padding: isMobile ? '4rem 1.5rem' : isTablet ? '5rem 3rem' : '8rem 5rem',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1.3fr',
      gap: isMobile ? '3rem' : '6rem',
      alignItems: 'start',
      background: 'linear-gradient(135deg, #FFF5F5 0%, #FDF3E7 100%)',
    }}>

      {/* Info */}
      <div>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C8102E', display: 'block', marginBottom: '1rem' }}>Get in Touch</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.2, color: '#1E0E0E', marginBottom: '1.2rem' }}>
          We'd Love to<br /><em style={{ fontStyle: 'italic', color: '#C8102E' }}>Hear</em> from You
        </h2>
        <p style={{ fontSize: '0.83rem', lineHeight: 2, color: '#7A5C5C', marginBottom: '2rem' }}>
          Custom cake order? Bulk enquiry? Franchise interest? Or just want to say hello — we're here for you.
        </p>
        {[
          { icon: '📍', label: 'Corporate Office', text: 'Anns Bakery & Confectionery Pvt Ltd,\nCathedral Church Road, Pala – 686575,\nKerala, India' },
          { icon: '📞', label: 'Phone',            text: '+91 4822 213193\nMon–Sat, 9:00am – 7:00pm IST' },
          { icon: '📱', label: 'Follow Us',        text: 'Instagram · Facebook · YouTube\n@annsbakery__pala_' },
        ].map(d => (
          <div key={d.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.4rem' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'white', border: '1px solid rgba(200,16,46,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>{d.icon}</div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8102E', marginBottom: '0.2rem' }}>{d.label}</strong>
              <span style={{ fontSize: '0.78rem', lineHeight: 1.7, color: '#7A5C5C', whiteSpace: 'pre-line' }}>{d.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem' }}>
          <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name *" required style={fieldStyle}
            onFocus={e => e.target.style.borderColor = 'rgba(200,16,46,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(200,16,46,0.12)'} />
          <input name="lastName"  value={form.lastName}  onChange={handleChange} placeholder="Last Name *"  required style={fieldStyle}
            onFocus={e => e.target.style.borderColor = 'rgba(200,16,46,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(200,16,46,0.12)'} />
        </div>
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone *" required style={fieldStyle}
          onFocus={e => e.target.style.borderColor = 'rgba(200,16,46,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(200,16,46,0.12)'} />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *" required style={fieldStyle}
          onFocus={e => e.target.style.borderColor = 'rgba(200,16,46,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(200,16,46,0.12)'} />
        <select name="type" value={form.type} onChange={handleChange} style={{ ...fieldStyle, cursor: 'pointer' }}
          onFocus={e => e.target.style.borderColor = 'rgba(200,16,46,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(200,16,46,0.12)'}>
          <option value="" disabled>Select enquiry type</option>
          {enquiryTypes.map(t => <option key={t}>{t}</option>)}
        </select>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message..." rows={5}
          style={{ ...fieldStyle, resize: 'vertical' }}
          onFocus={e => e.target.style.borderColor = 'rgba(200,16,46,0.4)'} onBlur={e => e.target.style.borderColor = 'rgba(200,16,46,0.12)'} />
        <button type="submit" style={{ alignSelf: isMobile ? 'stretch' : 'flex-start', padding: '1rem 2.4rem', background: '#C8102E', color: 'white', border: 'none', fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500, cursor: 'pointer', borderRadius: 8 }}
          onMouseEnter={e => { e.target.style.background = '#E8354F'; e.target.style.boxShadow = '0 6px 20px rgba(200,16,46,0.3)'; }}
          onMouseLeave={e => { e.target.style.background = '#C8102E'; e.target.style.boxShadow = 'none'; }}>
          Send Message
        </button>
      </form>
    </section>
  );
}
