'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavProps {
  isOpen: boolean;
  navLinks: Array<{ href: string; label: string }>;
  onClose: () => void;
}

export default function MobileNav({ isOpen, navLinks, onClose }: MobileNavProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20
    },
    visible: { 
      opacity: 1,
      y: 0
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: { 
      opacity: 1,
      x: 0
    }
  };

  return (
    <>
      {/* Backdrop overlay with blur */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            className="fixed top-[80px] left-0 right-0 bottom-0 bg-black/30 md:hidden z-40"
            onClick={onClose}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Full-screen dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed left-0 right-0 top-[80px] bg-white shadow-xl md:hidden overflow-y-auto z-50 border-t border-gray-100"
            style={{ maxHeight: 'calc(100vh - 80px)' }}
          >

            {/* Navigation links */}
            <nav className="px-6 py-8">
              <div className="space-y-3 max-w-md mx-auto">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={itemVariants}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group relative block px-6 py-4 rounded-2xl text-lg font-bold text-gray-800 overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {/* Hover background with gradient */}
                      <span className="absolute inset-0 bg-gray-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Active indicator line */}
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-[#1E7F43] to-[#2A9D5F] rounded-r-full group-hover:h-12 transition-all duration-300" />
                      
                      {/* Link text with icon */}
                      <span className="relative flex items-center justify-between">
                        <span className="text-gray-800 group-hover:text-[#1E7F43] transition-colors duration-300">
                          {link.label}
                        </span>
                        <svg 
                          className="w-5 h-5 text-gray-400 group-hover:text-[#1E7F43] group-hover:translate-x-1 transition-all duration-300" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA Section with improved button */}
              <motion.div
                variants={itemVariants}
                className="mt-8 pt-8 border-t border-gray-200 max-w-md mx-auto"
              >
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="relative group flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-[#1E7F43] to-[#2A9D5F] text-white text-center font-bold text-lg rounded-full overflow-hidden shadow-lg shadow-[#1E7F43]/30 hover:shadow-xl hover:shadow-[#1E7F43]/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="relative z-10">Get Started</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  {/* Animated shine effect */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Link>

                {/* Additional info with icons */}
                {/* <motion.div
                  variants={itemVariants}
                  className="mt-6 space-y-3"
                >
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#1E7F43]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <p className="font-semibold">Need help? Contact us anytime</p>
                  </div> */}
                  
                  {/* Trust badges */}
                  {/* <div className="flex items-center justify-center gap-4 pt-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <svg className="w-4 h-4 text-[#1E7F43]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">Secure</span>
                    </div>
                    <div className="w-px h-4 bg-gray-300" />
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <svg className="w-4 h-4 text-[#1E7F43]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span className="font-semibold">500+ Clients</span>
                    </div>
                  </div>
                </motion.div> */}
              </motion.div>
            </nav>

            {/* Decorative bottom element */}
            <div className="h-2 bg-gradient-to-r from-transparent via-[#1E7F43]/20 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}