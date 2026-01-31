'use client';

import type { Metadata } from 'next';
import { useEffect, useRef, useState } from 'react';

// ─── Metadata (export separately in your app if using layout.tsx) ───────────
// export const metadata: Metadata = {
//   title: 'About Us - Fekem Hydroponics',
//   description: 'Learn about Fekem Hydroponics, our mission, values, and commitment to sustainable agriculture through innovative hydroponic solutions.',
// };

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

// ─── Counter Animation Hook ─────────────────────────────────────────────────
function useCounter(target: number, duration = 1800, inView = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return count;
}

// ─── Stat Card with animated counter ─────────────────────────────────────────
function StatCard({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const { ref, inView } = useInView(0.2);
  const animated = useCounter(value, 1600, inView);
  return (
    <div
      ref={ref}
      className="group relative"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* Subtle top accent line */}
      <div
        className="absolute top-0 left-0 h-0.5 rounded-full"
        style={{
          background: 'linear-gradient(90deg, #1E7F43, transparent)',
          width: inView ? '100%' : '0%',
          transition: 'width 1s cubic-bezier(0.22,1,0.36,1) 0.3s',
        }}
      />
      <div className="pt-5">
        <div className="text-5xl font-bold tracking-tight" style={{ color: '#1E7F43', fontFamily: "'DM Serif Display', serif" }}>
          {animated}{suffix}
        </div>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: '#737373' }}>
          {label}
        </p>
      </div>
    </div>
  );
}

// ─── Value Item ──────────────────────────────────────────────────────────────
function ValueItem({ title, description, index }: { title: string; description: string; index: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className="group flex items-start gap-4"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-24px)',
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 120}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 120}ms`,
      }}
    >
      {/* Number badge */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold" style={{ background: 'rgba(30,127,67,0.08)', color: '#1E7F43' }}>
        {String(index + 1).padStart(2, '0')}
      </div>
      <div>
        <h4 className="text-base font-semibold tracking-tight mb-0.5" style={{ color: '#1A1A1A' }}>{title}</h4>
        <p className="text-sm leading-relaxed" style={{ color: '#737373' }}>{description}</p>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // Trigger hero animation on mount
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const values = [
    { title: 'Excellence', description: 'We deliver the highest quality systems and services in every project we undertake.' },
    { title: 'Innovation', description: 'We continuously adopt and implement the latest hydroponic technologies available.' },
    { title: 'Sustainability', description: 'We promote environmentally responsible farming practices across all operations.' },
    { title: 'Partnership', description: 'We build lasting relationships with our clients through reliable, ongoing support.' },
  ];

  return (
    <>
      {/* ── Google Fonts ── */}
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <style>{`
        * { box-sizing: border-box; }
        body { font-family: 'Outfit', sans-serif; background: #fafafa; color: #1A1A1A; -webkit-font-smoothing: antialiased; }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO / PAGE HEADER
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ minHeight: '420px', background: '#0f1a14' }}
      >
        {/* Background mesh / decorative blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Soft green orb – top left */}
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              width: '520px', height: '520px',
              top: '-160px', left: '-120px',
              background: 'radial-gradient(circle, rgba(30,127,67,0.28) 0%, transparent 70%)',
              opacity: heroVisible ? 1 : 0,
              transition: 'opacity 1.4s ease 0.2s',
            }}
          />
          {/* Subtle teal orb – bottom right */}
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              width: '380px', height: '380px',
              bottom: '-100px', right: '-60px',
              background: 'radial-gradient(circle, rgba(20,100,55,0.2) 0%, transparent 70%)',
              opacity: heroVisible ? 1 : 0,
              transition: 'opacity 1.6s ease 0.5s',
            }}
          />
          {/* Fine grid overlay */}
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
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: '420px' }}>
          {/* Tag pill */}
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
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#6fcf8a' }}>Our Story</span>
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
            About{' '}
            <span style={{ color: '#6fcf8a', fontStyle: 'italic' }}>Fekem</span>
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
            Pioneering sustainable agriculture through innovative hydroponic solutions designed for Africa's future.
          </p>
        </div>

        {/* Bottom fade to page bg */}
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #fafafa)' }} />
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          OUR STORY + MISSION  (two-column on md+)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left – Story */}
          <Reveal>
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1E7F43' }}>Our Story</span>
              <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight" style={{ fontFamily: "'DM Serif Display', serif", color: '#1A1A1A' }}>
                Revolutionizing<br />agriculture in Africa
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: '#737373' }}>
                Fekem Hydroponics was founded with a vision to revolutionize agriculture in Nigeria and beyond.
                We believe hydroponic farming is the future of sustainable food production — offering real solutions
                to water scarcity, land limitations, and climate change.
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#737373' }}>
                With years of experience and a passionate team of agricultural experts, we've successfully
                implemented hydroponic systems across various scales — from small urban gardens to large
                commercial farms.
              </p>
            </div>
          </Reveal>

          {/* Right – Mission */}
          <Reveal delay={140}>
            <div className="rounded-2xl p-8" style={{ background: '#ffffff', border: '1px solid #e8e8e8' }}>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1E7F43' }}>Our Mission</span>
              <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight" style={{ fontFamily: "'DM Serif Display', serif", color: '#1A1A1A' }}>
                Empowering the next generation of farming
              </h3>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#737373' }}>
                To empower farmers and businesses with cutting-edge hydroponic technology and knowledge,
                enabling sustainable, efficient, and profitable agriculture that contributes to food security
                and environmental conservation.
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
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          OUR VALUES
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1E7F43' }}>Values</span>
              <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight" style={{ fontFamily: "'DM Serif Display', serif", color: '#1A1A1A' }}>
                What drives us forward
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <ValueItem key={v.title} title={v.title} description={v.description} index={i} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WHY HYDROPONICS  –  Stats strip
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: '#0f1a14' }}>
        {/* Very subtle decorative blob */}
        <div
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: '600px', height: '600px',
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            background: 'radial-gradient(circle, rgba(30,127,67,0.14) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#6fcf8a' }}>Why Hydroponics</span>
              <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight" style={{ fontFamily: "'DM Serif Display', serif", color: '#ffffff' }}>
                The numbers speak for themselves
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            <StatCard value={90} suffix="%" label="Less water usage compared to traditional farming methods." />
            <StatCard value={3} suffix="×" label="Faster growth rate achieved for the majority of crops." />
            <StatCard value={365} suffix=" days" label="Year-round growing season, completely weather independent." />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <Reveal>
          <div className="rounded-2xl p-10 sm:p-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #eef7f2 0%, #f0faf4 100%)', border: '1px solid #d4eddf' }}>
            {/* Decorative ring */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: '280px', height: '280px',
                top: '-100px', right: '-80px',
                border: '1px solid rgba(30,127,67,0.12)',
              }}
            />
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: '180px', height: '180px',
                bottom: '-60px', left: '-50px',
                border: '1px solid rgba(30,127,67,0.08)',
              }}
            />

            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1E7F43' }}>Get Started</span>
            <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight" style={{ fontFamily: "'DM Serif Display', serif", color: '#1A1A1A' }}>
              Ready to grow smarter?
            </h2>
            <p className="mt-3 max-w-md mx-auto text-sm leading-relaxed" style={{ color: '#737373' }}>
              Partner with Fekem Hydroponics and take the first step toward sustainable, profitable agriculture.
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