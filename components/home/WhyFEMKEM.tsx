'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';

export default function Whyfekem() {
  const benefits = [
    {
      title: 'Expert Team',
      description: 'Our experienced professionals bring years of hydroponic expertise to every project.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Quality Systems',
      description: 'We use only high-quality materials and proven technologies for reliable, long-lasting systems.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Ongoing Support',
      description: 'Comprehensive maintenance and support services to keep your system running optimally.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored hydroponic systems designed to match your specific requirements and space.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    }
  ];

  return (
    <Section backgroundColor="surface">
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 md:mb-6" style={{ background: 'rgba(30,127,67,0.08)', border: '1px solid rgba(30,127,67,0.15)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#1E7F43' }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1E7F43' }}>
                Why Choose Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4" style={{ fontFamily: "'DM Serif Display', serif", color: '#1A1A1A' }}>
              Why Choose{' '}
              <span style={{ color: '#1E7F43', fontStyle: 'italic' }}>
                Fekem
              </span>
              ?
            </h2>
            
            <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto px-4" style={{ color: '#737373' }}>
              We deliver excellence in every aspect of hydroponic agriculture with{' '}
              <span style={{ color: '#1E7F43', fontWeight: 500 }}>innovation, expertise, and dedication</span>
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group h-full"
            >
              <div className="relative h-full p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{ background: '#ffffff', border: '1px solid #e8e8e8' }}>
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon Container */}
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="p-4 md:p-5 rounded-xl md:rounded-2xl transition-all duration-300" style={{ background: 'rgba(30,127,67,0.08)', color: '#1E7F43' }}>
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-semibold tracking-tight mb-2 md:mb-3" style={{ color: '#1A1A1A' }}>
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed" style={{ color: '#737373' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 md:mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 md:gap-6 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-xl shadow-emerald-500/20">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black mb-2 md:mb-3">
                Ready to Transform Your Agriculture?
              </h3>
              <p className="text-emerald-50 text-sm md:text-lg mb-4 md:mb-6 max-w-2xl px-4">
                Join hundreds of satisfied clients who trust Fekem for their hydroponic needs
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-6 md:px-8 py-3 md:py-4 bg-white text-emerald-700 font-bold rounded-full hover:bg-emerald-50 transition-colors duration-300 text-sm md:text-base"
                >
                  <span className="flex items-center justify-center gap-2">
                    Get Started Today
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                <a
                  href="/projects"
                  className="px-6 md:px-8 py-3 md:py-4 bg-white/10 text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-colors duration-300 text-sm md:text-base"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}