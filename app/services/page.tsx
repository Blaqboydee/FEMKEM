'use client';

import { useEffect, useRef, useState } from 'react';

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

// ─── Animated Reveal Wrapper ─────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView(0.12);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(28px)',
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Service type ────────────────────────────────────────────────────────────
interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: React.ReactNode;
}

// ─── Hardcoded service data (mirrors your @/data/services shape) ─────────────
// Replace this with your actual import: import { services } from '@/data/services';
const services: Service[] = [
  {
    id: 'system-design',
    title: 'System Design',
    shortDescription: 'Custom hydroponic system architecture tailored to your space, climate, and crop production targets.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    id: 'installation',
    title: 'Installation',
    shortDescription: 'Professional end-to-end installation by certified technicians using only high-grade components and materials.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    shortDescription: 'Ongoing care plans that keep your system running at peak efficiency — nutrient checks, calibration, and repairs included.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: 'training',
    title: 'Training',
    shortDescription: 'Hands-on workshops and mentorship programs that turn your team into confident hydroponic operators.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-1H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-1h7z" />
      </svg>
    ),
  },
  {
    id: 'consultation',
    title: 'Consultation',
    shortDescription: 'Strategic advisory sessions — feasibility studies, ROI modelling, and crop selection guidance from day one.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    id: 'monitoring',
    title: 'Smart Monitoring',
    shortDescription: 'IoT-enabled dashboards for real-time sensor data — water, humidity, nutrients, and light — all in one place.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

// ─── Process steps for the timeline ──────────────────────────────────────────
const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'Free site assessment and needs analysis to determine the best hydroponic solution for your unique requirements and goals.',
  },
  {
    step: '02',
    title: 'Custom Design',
    description: 'Tailored system architecture that maximizes your available space and meets your crop production targets precisely.',
  },
  {
    step: '03',
    title: 'Professional Installation',
    description: 'Expert setup by our trained technicians, using high-quality materials and components built to last.',
  },
  {
    step: '04',
    title: 'Training & Support',
    description: 'Comprehensive hands-on training for your team on operation, maintenance, and crop management — plus ongoing technical support.',
  },
];

// ─── Service Card ────────────────────────────────────────────────────────────
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms`,
      }}
    >
      <div
        className="relative rounded-2xl p-6 h-full flex flex-col"
        style={{
          background: '#ffffff',
          border: hovered ? '1px solid rgba(30,127,67,0.35)' : '1px solid #e8e8e8',
          boxShadow: hovered ? '0 8px 40px rgba(30,127,67,0.1)' : '0 1px 3px rgba(0,0,0,0.04)',
          transition: 'border 0.35s ease, box-shadow 0.35s ease',
        }}
      >
        {/* Icon ring */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
          style={{
            background: hovered ? 'rgba(30,127,67,0.12)' : 'rgba(30,127,67,0.07)',
            color: '#1E7F43',
            transition: 'background 0.3s ease',
          }}
        >
          {service.icon}
        </div>

        <h3
          className="text-base font-semibold tracking-tight mb-2"
          style={{ color: '#1A1A1A', fontFamily: "'DM Serif Display', serif", fontSize: '1.1rem' }}
        >
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: '#737373' }}>
          {service.shortDescription}
        </p>

        {/* Subtle arrow that slides in on hover */}
        <div
          className="mt-4 flex items-center gap-1.5 text-xs font-semibold tracking-wide"
          style={{
            color: '#1E7F43',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateX(0)' : 'translateX(-6px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          Learn more
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Process Step (timeline) ─────────────────────────────────────────────────
function ProcessStep({ step, title, description, index, isLast }: { step: string; title: string; description: string; index: number; isLast: boolean }) {
  const { ref, inView } = useInView(0.12);

  return (
    <div
      ref={ref}
      className="flex gap-5"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-28px)',
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 140}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 140}ms`,
      }}
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Number node */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold tracking-widest relative z-10"
          style={{
            background: '#1E7F43',
            color: '#ffffff',
            boxShadow: '0 0 0 4px rgba(30,127,67,0.12)',
          }}
        >
          {step}
        </div>
        {/* Connector line */}
        {!isLast && (
          <div
            className="w-0.5 flex-1 my-1"
            style={{
              background: 'linear-gradient(to bottom, #1E7F43, rgba(30,127,67,0.08))',
              minHeight: '48px',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className={`pb-8 ${isLast ? '' : ''}`}>
        <h4 className="text-base font-semibold tracking-tight" style={{ color: '#1A1A1A', fontFamily: "'DM Serif Display', serif", fontSize: '1.05rem' }}>
          {title}
        </h4>
        <p className="mt-1.5 text-sm leading-relaxed" style={{ color: '#737373' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function ServicesPage() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── Google Fonts ── */}
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; }
        body { font-family: 'Outfit', sans-serif; background: #fafafa; color: #1A1A1A; -webkit-font-smoothing: antialiased; }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: '400px', background: '#0f1a14' }}>
        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              width: '480px', height: '480px',
              top: '-140px', right: '-100px',
              background: 'radial-gradient(circle, rgba(30,127,67,0.25) 0%, transparent 70%)',
              opacity: heroVisible ? 1 : 0,
              transition: 'opacity 1.4s ease 0.2s',
            }}
          />
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              width: '340px', height: '340px',
              bottom: '-80px', left: '-60px',
              background: 'radial-gradient(circle, rgba(20,100,55,0.18) 0%, transparent 70%)',
              opacity: heroVisible ? 1 : 0,
              transition: 'opacity 1.6s ease 0.5s',
            }}
          />
          {/* Grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              opacity: heroVisible ? 1 : 0,
              transition: 'opacity 1.2s ease 0.4s',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: '400px' }}>
          {/* Pill tag */}
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
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#6fcf8a' }}>What We Offer</span>
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
            Our{' '}
            <span style={{ color: '#6fcf8a', fontStyle: 'italic' }}>Services</span>
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
            Comprehensive hydroponic solutions tailored to your agricultural needs — from concept to harvest.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #fafafa)' }} />
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SERVICE CARDS GRID
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        {/* Section label */}
        <Reveal>
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1E7F43' }}>Services</span>
            <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight" style={{ fontFamily: "'DM Serif Display', serif", color: '#1A1A1A' }}>
              Everything you need<br />under one roof
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          HOW IT WORKS — vertical timeline
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: '#0f1a14' }}>
        {/* Ambient blob */}
        <div
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: '500px', height: '500px',
            top: '50%', right: '-120px',
            transform: 'translateY(-50%)',
            background: 'radial-gradient(circle, rgba(30,127,67,0.13) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          {/* Two-column: label left, timeline right */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Left label column */}
            <div className="lg:col-span-2">
              <Reveal>
                <div className="lg:sticky lg:top-24">
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#6fcf8a' }}>Process</span>
                  <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight" style={{ fontFamily: "'DM Serif Display', serif", color: '#ffffff' }}>
                    How it works
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)', fontWeight: 300 }}>
                    A streamlined four-step journey from first conversation to a fully operational hydroponic system.
                  </p>
                  {/* Decorative accent */}
                  <div className="mt-6 flex gap-1.5">
                    <div className="h-0.5 w-8 rounded-full" style={{ background: '#1E7F43' }} />
                    <div className="h-0.5 w-4 rounded-full" style={{ background: '#1E7F43', opacity: 0.4 }} />
                    <div className="h-0.5 w-2 rounded-full" style={{ background: '#1E7F43', opacity: 0.2 }} />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right timeline column */}
            <div className="lg:col-span-3">
              {processSteps.map((s, i) => (
                <ProcessStep
                  key={s.step}
                  step={s.step}
                  title={s.title}
                  description={s.description}
                  index={i}
                  isLast={i === processSteps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA STRIP  (identical to About page)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <Reveal>
          <div className="rounded-2xl p-10 sm:p-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #eef7f2 0%, #f0faf4 100%)', border: '1px solid #d4eddf' }}>
            {/* Decorative rings */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{ width: '280px', height: '280px', top: '-100px', right: '-80px', border: '1px solid rgba(30,127,67,0.12)' }}
            />
            <div
              className="absolute rounded-full pointer-events-none"
              style={{ width: '180px', height: '180px', bottom: '-60px', left: '-50px', border: '1px solid rgba(30,127,67,0.08)' }}
            />

            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1E7F43' }}>Get Started</span>
            <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight" style={{ fontFamily: "'DM Serif Display', serif", color: '#1A1A1A' }}>
              Ready to grow smarter?
            </h2>
            <p className="mt-3 max-w-md mx-auto text-sm leading-relaxed" style={{ color: '#737373' }}>
              Partner with fekem Hydroponics and take the first step toward sustainable, profitable agriculture.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #1E7F43, #157a3e)',
                boxShadow: '0 4px 24px rgba(30,127,67,0.3)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 32px rgba(30,127,67,0.45)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px rgba(30,127,67,0.3)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              Let&apos;s Connect
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}