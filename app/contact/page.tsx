'use client';

import { useEffect, useRef, useState } from 'react';
import Section from '@/components/ui/Section';

// ─── Utility: Intersection Observer Hook ────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Reveal ──────────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView(0.12);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Contact info items ──────────────────────────────────────────────────────
const contactItems = [
  {
    label: 'Phone',
    value: '+234 XXX XXX XXXX',
    href: 'tel:+234XXXXXXXXXX',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@fekem.com',
    href: 'mailto:info@fekem.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+234 XXX XXX XXXX',
    href: 'https://wa.me/234XXXXXXXXXX',
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Nigeria',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    background: '#fff',
    border: `1px solid ${focused === field ? '#1E7F43' : '#e8e8e8'}`,
    boxShadow: focused === field ? '0 0 0 3px rgba(30,127,67,0.1)' : 'none',
    transition: 'border 0.25s ease, box-shadow 0.25s ease',
  });

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: '380px', background: '#0f1a14' }}>
        {/* Fine grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            opacity: heroVisible ? 1 : 0,
            transition: 'opacity 1.2s ease 0.4s',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: '380px' }}>
          {/* Pill */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{
              background: 'rgba(30,127,67,0.12)',
              border: '1px solid rgba(30,127,67,0.25)',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#1E7F43' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#6fcf8a' }}>Get in Touch</span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: '#ffffff',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s',
            }}
          >
            Let&apos;s{' '}
            <span style={{ color: '#6fcf8a', fontStyle: 'italic' }}>talk</span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-4 max-w-xl text-base leading-relaxed"
            style={{
              color: 'rgba(255,255,255,0.52)',
              fontWeight: 300,
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1) 0.22s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.22s',
            }}
          >
            We&apos;d love to hear about your hydroponic vision. Reach out and let&apos;s make it happen together.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #fafafa)' }} />
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FORM + DETAILS
      ══════════════════════════════════════════════════════════════════════ */}
      <Section>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* ── Left: Form (spans 3 cols) ──────────────────────────────── */}
          <Reveal className="lg:col-span-3">
            {submitted ? (
              /* ── Success State ── */
              <div className="rounded-2xl border border-[#d4eddf] p-10 text-center" style={{ background: 'linear-gradient(135deg, #eef7f2, #f0faf4)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: '#1E7F43' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'DM Serif Display', serif", color: '#1A1A1A' }}>
                  Message sent!
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: '#737373' }}>
                  Thank you for reaching out. We&apos;ll review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-semibold tracking-wide"
                  style={{ color: '#1E7F43' }}
                >
                  Send another message →
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1E7F43' }}>Contact</span>
                <h2 className="mt-2 text-3xl font-bold leading-snug tracking-tight" style={{ fontFamily: "'DM Serif Display', serif", color: '#1A1A1A' }}>
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Row: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold tracking-wide mb-2" style={{ color: '#1A1A1A' }}>
                        Full Name <span style={{ color: '#1E7F43' }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        placeholder="Daniel Oyeyemi"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                        style={inputStyle('name')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold tracking-wide mb-2" style={{ color: '#1A1A1A' }}>
                        Email Address <span style={{ color: '#1E7F43' }}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        placeholder="oyeyemi@example.com"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                        style={inputStyle('email')}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold tracking-wide mb-2" style={{ color: '#1A1A1A' }}>
                      Phone Number <span style={{ color: '#1E7F43' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused('phone')}
                      onBlur={() => setFocused(null)}
                      placeholder="+234 XXX XXX XXXX"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={inputStyle('phone')}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold tracking-wide mb-2" style={{ color: '#1A1A1A' }}>
                      Message <span style={{ color: '#1E7F43' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell us about your hydroponic project..."
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                      style={{ ...inputStyle('message'), minHeight: '140px' }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(135deg, #1E7F43, #157a3e)',
                      boxShadow: '0 4px 20px rgba(30,127,67,0.3)',
                    }}
                  >
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </form>
              </div>
            )}
          </Reveal>

          {/* ── Right: Details (spans 2 cols) ──────────────────────────── */}
          <Reveal delay={120} className="lg:col-span-2">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1E7F43' }}>Details</span>
              <h2 className="mt-2 text-3xl font-bold leading-snug tracking-tight" style={{ fontFamily: "'DM Serif Display', serif", color: '#1A1A1A' }}>
                Contact info
              </h2>

              {/* Contact items */}
              <div className="mt-8 space-y-6">
                {contactItems.map((item, i) => (
                  <Reveal key={item.label} delay={i * 100}>
                    <div className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: 'rgba(30,127,67,0.08)', color: '#1E7F43' }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#737373' }}>{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="text-sm font-medium mt-0.5 inline-block hover:text-[#1E7F43] transition-colors duration-200"
                            style={{ color: '#1A1A1A' }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium mt-0.5" style={{ color: '#1A1A1A' }}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Business Hours — dark card */}
              <Reveal delay={80}>
                <div className="mt-10 rounded-2xl p-6" style={{ background: '#0f1a14' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(30,127,67,0.2)', color: '#6fcf8a' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold tracking-tight" style={{ color: '#ffffff' }}>Business Hours</h3>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Monday – Friday</span>
                      <span className="text-xs font-medium" style={{ color: '#6fcf8a' }}>8:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Saturday</span>
                      <span className="text-xs font-medium" style={{ color: '#6fcf8a' }}>9:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Sunday</span>
                      <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.3)' }}>Closed</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}