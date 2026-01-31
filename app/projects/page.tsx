'use client';

import { useEffect, useRef, useState } from 'react';
import Section from '@/components/ui/Section';
import CTA from '@/components/shared/CTA';

// ─── Sample project data with Unsplash images ───────────────────────────────
// Replace with: import { projects } from '@/data/projects';
const projects = [
  {
    id: 'commercial-farm-lagos',
    title: 'Lagos Commercial Farm',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1604762524089-24bc48c842fa?w=800&q=80',
    caption: 'A 2,400 m² vertical lettuce farm supplying three supermarket chains across Lagos.',
  },
  {
    id: 'urban-rooftop-abuja',
    title: 'Abuja Rooftop Garden',
    category: 'Urban',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80',
    caption: 'Rooftop NFT system producing herbs and leafy greens for a boutique restaurant group.',
  },
  {
    id: 'school-edu-kano',
    title: 'Kano Educational Hub',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    caption: 'Interactive learning facility installed across five secondary schools in Kano State.',
  },
  {
    id: 'strawberry-greenhouse-enugu',
    title: 'Enugu Strawberry Greenhouse',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1601004518532-42c7c7304daf?w=800&q=80',
    caption: 'First large-scale strawberry hydroponic operation in the South-East, producing year-round.',
  },
  {
    id: 'community-garden-oyo',
    title: 'Oyo Community Garden',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    caption: 'A community-driven DWC garden empowering 60 local families with food sovereignty.',
  },
  {
    id: 'tech-hub-benin',
    title: 'Benin Tech-Ag Hub',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1519684813459-68e77c76c7e5?w=800&q=80',
    caption: 'IoT-enabled smart farming pilot integrating sensors, automation, and AI crop analytics.',
  },
];

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

// ─── Animated Reveal ─────────────────────────────────────────────────────────
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

// ─── Animated Counter ───────────────────────────────────────────────────────
function useCounter(target: number, duration = 1600, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

// ─── Stat Card ───────────────────────────────────────────────────────────────
function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, inView } = useInView(0.25);
  const animated = useCounter(value, 1600, inView);
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      <div
        className="h-0.5 rounded-full mb-5"
        style={{
          background: '#1E7F43',
          width: inView ? '32px' : '0px',
          transition: 'width 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s',
        }}
      />
      <div className="text-5xl font-bold tracking-tight" style={{ color: '#1E7F43', fontFamily: "'DM Serif Display', serif" }}>
        {animated}{suffix}
      </div>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: '#737373' }}>{label}</p>
    </div>
  );
}

// ─── Project Card ────────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView(0.08);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(36px)',
        background: '#fff',
        border: '1px solid #e8e8e8',
        boxShadow: hovered ? '0 16px 48px rgba(30,127,67,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 90}ms, box-shadow 0.4s ease`,
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '220px' }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.55s cubic-bezier(0.22,1,0.36,1)',
          }}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(15,26,20,0.6) 0%, transparent 55%)',
          }}
        />
        {/* Category pill */}
        <div className="absolute top-4 left-4">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
            style={{
              background: 'rgba(30,127,67,0.18)',
              color: '#6fcf8a',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(30,127,67,0.25)',
            }}
          >
            {project.category}
          </span>
        </div>
        {/* Title overlaid at bottom of image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
            {project.title}
          </h3>
        </div>
      </div>

      {/* Caption */}
      <div className="p-5">
        <p className="text-sm leading-relaxed" style={{ color: '#737373' }}>
          {project.caption}
        </p>
        {/* Animated arrow */}
        <div
          className="mt-3 flex items-center gap-1.5 text-xs font-semibold tracking-wide"
          style={{
            color: '#1E7F43',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateX(0)' : 'translateX(-6px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          View project
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ProjectsPage() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: '420px', background: '#0f1a14' }}>
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
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: '420px' }}>
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
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#6fcf8a' }}>Portfolio</span>
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
            <span style={{ color: '#6fcf8a', fontStyle: 'italic' }}>Projects</span>
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
            Showcasing successful hydroponic installations across various scales and applications.
          </p>
        </div>

        {/* Bottom fade to page bg */}
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #fafafa)' }} />
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PROJECT GRID
      ══════════════════════════════════════════════════════════════════════ */}
      <Section>
        <Reveal>
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1E7F43' }}>Work</span>
            <h2 className="mt-2 text-3xl font-bold leading-snug tracking-tight" style={{ fontFamily: "'DM Serif Display', serif", color: '#1A1A1A' }}>
              What we&apos;ve built
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════════
          METRICS
      ══════════════════════════════════════════════════════════════════════ */}
      <Section backgroundColor="surface">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1E7F43' }}>Track Record</span>
              <h2 className="mt-2 text-3xl font-bold leading-snug tracking-tight" style={{ fontFamily: "'DM Serif Display', serif", color: '#1A1A1A' }}>
                The numbers behind our work
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            <StatCard value={50} suffix="+" label="Projects completed across Nigeria and West Africa." />
            <StatCard value={100} suffix="%" label="Client satisfaction rate across all engagements." />
            <StatCard value={5} suffix="+" label="Years pioneering hydroponic innovation in the region." />
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <CTA
        title="Ready to Start Your Project?"
        description="Let's discuss your hydroponic farming goals and create a customized solution for your needs."
      />
    </>
  );
}