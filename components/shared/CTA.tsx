'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';

interface CTAProps {
  title?: string;
  description?: string;
}

export default function CTA({ 
  title = "Ready to Start Your Hydroponic Journey?",
  description = "Contact us today to discuss your hydroponic system requirements and get a free consultation."
}: CTAProps) {
  return (
    <Section backgroundColor="white">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="relative p-8 md:p-12 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #eef7f2 0%, #f0faf4 100%)', border: '1px solid #d4eddf' }}>
            {/* Content */}
            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
                style={{ background: 'rgba(30,127,67,0.08)', border: '1px solid rgba(30,127,67,0.15)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#1E7F43' }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1E7F43' }}>
                  Get Started
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold tracking-tight mb-3 leading-snug"
                style={{ fontFamily: "'DM Serif Display', serif", color: '#1A1A1A' }}
              >
                {title.split(' ').map((word, index) => {
                  const isHighlight = word.toLowerCase().includes('hydroponic') || word.toLowerCase().includes('journey');
                  return (
                    <span key={index}>
                      {isHighlight ? (
                        <span style={{ color: '#1E7F43', fontStyle: 'italic' }}>
                          {word}
                        </span>
                      ) : (
                        word
                      )}{' '}
                    </span>
                  );
                })}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm md:text-base mb-6 md:mb-8 leading-relaxed max-w-md mx-auto"
                style={{ color: '#737373' }}
              >
                {description}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <Button href="/contact" variant="primary" className="group/btn">
                  <span className="flex items-center gap-2 text-lg px-3">
                    {/* <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg> */}
                    <span className='text-sm md:text-base'>Get Free Consultation</span>
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
                
                <Button href="https://wa.me/+2347037738413" variant="outline" className="group/whatsapp border-2 border-[#1E7F43] text-[#1E7F43] hover:bg-[#1E7F43] hover:text-white">
                  <span className="flex items-center gap-2 text-lg px-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                     <span className='text-sm md:text-base'>WhatsApp Us</span>
                  </span>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-gray-200"
              >
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-[#1E7F43]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-[#1E7F43]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">No Commitment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-[#1E7F43]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Fast Response</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Additional Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: '⚡', value: '24/7', label: 'Support' },
              { icon: '✓', value: '500+', label: 'Projects' },
              { icon: '★', value: '98%', label: 'Satisfied' },
              { icon: '◆', value: '10+', label: 'Years Exp' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-black text-[#1E7F43]">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </Section>
  );
}
