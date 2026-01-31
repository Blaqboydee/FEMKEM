'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We assess your needs, space, and goals to design the perfect hydroponic solution.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Our experts create a customized system design with detailed specifications and timeline.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Installation',
      description: 'Professional installation of your hydroponic system with quality materials and craftsmanship.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing support to ensure optimal system performance.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    }
  ];

  return (
    <Section backgroundColor="surface">
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ background: 'rgba(30,127,67,0.08)', border: '1px solid rgba(30,127,67,0.15)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#1E7F43' }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1E7F43' }}>
                Our Process
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3" style={{ fontFamily: "'DM Serif Display', serif", color: '#1A1A1A' }}>
              How It{' '}
              <span style={{ color: '#1E7F43', fontStyle: 'italic' }}>
                Works
              </span>
            </h2>
            
            <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto" style={{ color: '#737373' }}>
              Our streamlined process ensures a smooth journey{' '}
              <span style={{ color: '#1E7F43', fontWeight: 500 }}>from concept to cultivation</span>
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Step Card */}
              <div className="relative h-full p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-lg overflow-hidden" style={{ background: '#ffffff', border: '1px solid #e8e8e8' }}>
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Number Badge */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    {/* Icon container */}
                    <div className="relative p-4 md:p-5 rounded-xl md:rounded-2xl transition-all duration-300" style={{ background: 'rgba(30,127,67,0.08)', color: '#1E7F43' }}>
                      {step.icon}
                      
                      {/* Number overlay */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold" style={{ background: '#1E7F43', color: '#ffffff' }}>
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-semibold tracking-tight mb-2 md:mb-3" style={{ color: '#1A1A1A' }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#555555] leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>

                  {/* Progress dots */}
                  <div className="flex justify-center gap-1.5 mt-6">
                    {steps.map((_, i) => (
                      <div 
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i <= index 
                            ? 'w-8 bg-[#1E7F43]' 
                            : 'w-1.5 bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-3xl bg-gray-50 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#1E7F43] flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-lg font-bold text-[#1A1A1A]">
                  Ready to get started?
                </p>
                <p className="text-sm text-[#555555]">
                  Schedule your free consultation today
                </p>
              </div>
            </div>
            <a
              href="/contact"
              className="px-8 py-3 bg-[#1E7F43] text-white font-bold rounded-full hover:bg-[#166434] transition-colors duration-300"
            >
              <span className="flex items-center gap-2">
                Start Your Journey
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
