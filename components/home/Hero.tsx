'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['Smarter', 'Sustainably', 'Greener', 'Efficiently', 'Better', 'Organically'];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Layered Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-emerald-950/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
          backgroundSize: '100% 4px'
        }} />
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/25 backdrop-blur-sm mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium tracking-widest text-emerald-300 uppercase">
              Sustainable Agriculture
            </span>
          </motion.div>

          {/* Main Heading with Typewriter Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
              <span className="block text-white/95 drop-shadow-2xl">
                Grow{' '}
                <span className="relative inline-block">
                  <span className="text-emerald-400 italic">
                    {displayedText}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                    className="inline-block w-0.5 h-[0.85em] bg-emerald-400 ml-1 align-middle"
                  />
                </span>
              </span>
              <span className="block text-white/95 mt-2 drop-shadow-2xl">
                with{' '}
                <span className="text-emerald-400">
                  Fekem
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Transform your agricultural vision into reality with cutting-edge hydroponic systems.{' '}
            <span className="text-white font-medium">Professional installation</span>, expert maintenance, 
            and consultation services for sustainable farming.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a
              href="/services"
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50"
            >
              <span className="relative z-10 flex items-center gap-3 text-sm">
                Explore Services
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </a>
            
            <a
              href="/contact"
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:shadow-xl"
            >
              <span className="flex items-center gap-3 text-sm">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Us
              </span>
            </a>
          </motion.div>

          {/* Trust Badges - Centered */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-8 flex-wrap"
          >
            {[
              { icon: (
                <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ), label: 'Certified Experts' },
              { icon: (
                <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ), label: 'Eco-Friendly' },
              { icon: (
                <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              ), label: '500+ Projects' }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
              >
                {badge.icon}
                <span className="text-sm font-semibold text-gray-200">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-white/70 text-sm font-semibold tracking-wide group-hover:text-white transition-colors">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 group-hover:border-white/50 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white/70 rounded-full group-hover:bg-white transition-colors"
            />
          </div>
        </motion.div>
      </motion.div> */}

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              y: '100vh'
            }}
            animate={{ 
              y: '-10vh',
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 15 + (i % 5) * 2,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-emerald-400/20 rounded-full"
            style={{ left: `${5 + (i * 6)}%` }}
          />
        ))}
      </div>
    </section>
  );
}