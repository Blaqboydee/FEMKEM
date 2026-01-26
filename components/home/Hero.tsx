'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#E6F4EA] to-[#F9FAF9] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              Grow Smarter with{' '}
              <span className="text-[#1E7F43]">FEMKEM Hydroponics</span>
            </h1>
            <p className="text-xl text-[#555555] mb-8 max-w-2xl">
              Professional hydroponic system installation, maintenance, and consultation services 
              for sustainable and efficient agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/services" variant="primary">
                Explore Services
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center"
          >
            <div className="text-center text-gray-500">
              <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <p className="text-sm">Hero Image Placeholder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
