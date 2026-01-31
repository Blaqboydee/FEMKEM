'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

// Service icons mapping
const serviceIcons = {
  0: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  1: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  2: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  3: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  4: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  ),
  5: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

export default function ServicesOverview() {
  return (
    <Section backgroundColor="white">
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
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
                What We Offer
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3" style={{ fontFamily: "'DM Serif Display', serif", color: '#1A1A1A' }}>
              Our{' '}
              <span style={{ color: '#1E7F43', fontStyle: 'italic' }}>
                Services
              </span>
            </h2>
            
            <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#737373' }}>
              Comprehensive hydroponic solutions tailored to your needs,{' '}
              <span style={{ color: '#1E7F43', fontWeight: 500 }}>from design to harvest</span>
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {services.slice(0, 6).map((service: { id: string; title: string; shortDescription: string }, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="relative h-full p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-gray-200 hover:border-[#1E7F43] transition-all duration-300 hover:shadow-xl overflow-hidden">
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-4 md:mb-6">
                    <div className="inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-emerald-50 text-[#1E7F43] group-hover:bg-[#1E7F43] group-hover:text-white transition-all duration-300">
                      {serviceIcons[index as keyof typeof serviceIcons]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 tracking-tight group-hover:text-[#1E7F43] transition-colors duration-300" style={{ color: '#1A1A1A' }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-[#555555] leading-relaxed mb-4 md:mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-[#1E7F43] font-semibold text-sm md:text-base group-hover:gap-4 transition-all duration-300">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Number badge */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-50 flex items-center justify-center text-[#1E7F43] font-black text-base md:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-emerald-50 border border-emerald-100">
            <div className="text-center sm:text-left">
              <p className="text-base md:text-lg font-semibold text-[#1A1A1A] mb-1">
                Need a custom solution?
              </p>
              <p className="text-sm text-[#555555]">
                Explore our full range of services and find the perfect fit
              </p>
            </div>
            <Button href="/services" variant="primary" className="whitespace-nowrap group">
              <span className="flex items-center gap-2 text-sm md:text-base">
                View All Services
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
          </div>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-gray-200"
        >
          {[
            { value: '500+', label: 'Projects Completed', icon: '✓' },
            { value: '98%', label: 'Client Satisfaction', icon: '★' },
            { value: '24/7', label: 'Support Available', icon: '◉' },
            { value: '10+', label: 'Years Experience', icon: '◆' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1E7F43] mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-[#555555] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </Section>
  );
}