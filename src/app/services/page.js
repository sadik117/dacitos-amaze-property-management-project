'use client';

import { useState } from 'react';
import { services } from '@/data/services';
import { ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import CTA from '@/components/sections/CTA';
import ServicePartners from '@/components/sections/ServicePartners';

export default function ServicesPage() {
  const [search, setSearch] = useState('');

  const filtered = services.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.description.toLowerCase().includes(search.toLowerCase())
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.25 } }
  };

  return (
    <div className="bg-navy min-h-screen">
      <div className="relative pt-24 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://www.amazepms.com/assets/banner6.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-primary/10" />

        <div className="absolute top-10 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-96 h-48 bg-gold/10 rounded-full blur-[80px]" />

        <div className="container-custom mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm font-semibold text-white tracking-wide">19+ Integrated Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black font-display text-white mb-6 leading-tight">
              Our <span className="gradient-text-gold">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              A complete ecosystem of in-house facility management solutions — from security to swimming pools, delivered with excellence.
            </p>

            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <input
                type="text"
                placeholder="Search a service..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-11 pr-5 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white placeholder-white/40 focus:outline-none focus:border-primary/60 transition-colors text-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-navy-card border-y border-border">
        <div className="container-custom mx-auto py-6">
          <div className="flex flex-wrap justify-center md:justify-between gap-8 text-center">
            {[
              { num: '19+', label: 'Services Offered' },
              { num: '200+', label: 'Clients Served' },
              { num: '15,000+', label: 'Professionals' },
              { num: '20M+', label: 'Sq.ft Managed' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl font-black gradient-text-gold">{stat.num}</span>
                <span className="text-sm text-white-muted font-medium mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom mx-auto">

          {filtered.length === 0 && (
            <div className="text-center py-20 text-white-muted">
              <p className="text-xl">No services match "<span className="text-white font-semibold">{search}</span>"</p>
              <button onClick={() => setSearch('')} className="mt-4 text-primary hover:underline text-sm">Clear search</button>
            </div>
          )}

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence>
              {filtered.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="group relative bg-navy-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(30,111,255,0.18)] flex flex-col"
                >

                  <div className="relative h-48 bg-navy overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-navy-card to-transparent" />
                    <div className="absolute bottom-0 left-5 mb-10 translate-y-1/2 z-20 w-12 h-12 rounded-xl bg-navy border border-border group-hover:border-primary/50 flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
                      <service.icon className="text-gold" size={20} />
                    </div>
                  </div>

                  <div className="p-6 pt-10 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-primary-light transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-white-muted text-sm leading-relaxed mb-5 flex-grow">
                      {service.description}
                    </p>

                    <div className="border-t border-border/50 pt-4">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-white/30 font-bold mb-3">Key Features</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 4).map((feat, i) => (
                          <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light font-medium">
                            {feat}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-gold transition-colors group/link"
                      >
                        Enquire Now
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      <ServicePartners />

      <CTA />

    </div>
  );
}
