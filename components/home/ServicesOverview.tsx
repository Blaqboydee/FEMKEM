'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

export default function ServicesOverview() {
  return (
    <Section backgroundColor="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
          Our Services
        </h2>
        <p className="text-lg text-[#555555] max-w-2xl mx-auto">
          Comprehensive hydroponic solutions tailored to your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.slice(0, 6).map((service: { id: string; title: string; shortDescription: string }, index: number) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                {service.title}
              </h3>
              <p className="text-[#555555]">
                {service.shortDescription}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button href="/services" variant="primary">
          View All Services
        </Button>
      </div>
    </Section>
  );
}
