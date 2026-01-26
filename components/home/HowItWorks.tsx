'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We assess your needs, space, and goals to design the perfect hydroponic solution.'
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Our experts create a customized system design with detailed specifications and timeline.'
    },
    {
      number: '03',
      title: 'Installation',
      description: 'Professional installation of your hydroponic system with quality materials and craftsmanship.'
    },
    {
      number: '04',
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing support to ensure optimal system performance.'
    }
  ];

  return (
    <Section backgroundColor="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
          How It Works
        </h2>
        <p className="text-lg text-[#555555] max-w-2xl mx-auto">
          Our streamlined process ensures a smooth journey from concept to cultivation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <div className="text-center">
              <div className="text-6xl font-bold text-[#A3D9A5] mb-4 opacity-50">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                {step.title}
              </h3>
              <p className="text-[#555555]">
                {step.description}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-[#A3D9A5]" />
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
