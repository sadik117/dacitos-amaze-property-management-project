'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner({ fullScreen = false }) {
  const containerClasses = fullScreen 
    ? "fixed inset-0 z-[100] bg-navy/90 backdrop-blur-md" 
    : "w-full min-h-[60vh] flex flex-col bg-transparent";

  return (
    <div className={`${containerClasses} items-center justify-center`}>
      <div className="relative flex items-center justify-center w-24 h-24">
        <motion.div
          className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary border-r-primary/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border-[3px] border-transparent border-b-gold border-l-gold/50"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-4 rounded-full border-[3px] border-transparent border-t-primary-light border-l-primary-light/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mt-8 flex items-center gap-1 text-sm font-bold tracking-[0.3em] text-white/80 uppercase">
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading
        </motion.span>
        <div className="flex gap-1 ml-1 items-end pb-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-gold rounded-full"
              animate={{ y: [0, -4, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
