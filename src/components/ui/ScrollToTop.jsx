'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          onClick={scrollTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full flex items-center justify-center 
            bg-primary border border-primary/40 shadow-[0_0_20px_rgba(30,111,255,0.5)] 
            hover:bg-primary-light hover:shadow-[0_0_30px_rgba(30,111,255,0.8)] 
            hover:scale-110 active:scale-95 transition-all duration-200"
        >
          <ArrowUp size={16} className="text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
