'use client';

import { motion } from 'framer-motion';

export default function TrustedBy() {
  const clients = [
    "client1.jpg", "client2.png", "client4.png", "client5.png", 
    "client6.png", "client7.jpg", "client8.png", "client9.png", 
    "client12.png", "client13.png"
  ];

  const doubledClients = [...clients, ...clients];

  return (
    <section className="py-12 bg-navy-mid border-y border-border overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-mid to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-mid to-transparent z-10 pointer-events-none"></div>
      
      <div className="container-custom mx-auto mb-8 text-center">
        <h6 className="text-white-muted uppercase tracking-widest text-sm font-semibold">
          Trusted by 200+ valued partners across India
        </h6>
      </div>

      <div className="flex relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap pl-16"
          animate={{ x: [0, -1920] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
        >
          {doubledClients.map((client, idx) => (
            <div key={`${client}-${idx}`} className="w-44 h-24 flex items-center justify-center bg-white/90 rounded-xl px-4 py-2 hover:scale-105 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 shrink-0">
              <img 
                src={`https://www.amazepms.com/assets/${client}`} 
                alt={`Client ${idx}`} 
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
