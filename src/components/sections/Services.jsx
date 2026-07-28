'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/services';

export default function Services() {

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="section-padding bg-navy-mid relative">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Comprehensive <span className="gradient-text-gold">Solutions</span>
          </h2>
          <p className="text-white-muted text-lg">
            We offer a full spectrum of integrated facility management services, delivered by our in-house experts to ensure maximum quality and reliability.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="group h-full">
              <div className="relative h-full bg-navy-card rounded-[var(--radius-card)] border border-border p-6 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_10px_40px_rgba(30,111,255,0.15)] flex flex-col">

                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center border border-border mb-6 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300 shadow-lg">
                    <service.icon className="text-gold" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-primary-light transition-colors">{service.title}</h3>
                  <p className="text-white-muted text-sm mb-6 flex-grow leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mt-auto pt-4 border-t border-border/50">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-white-muted">
                        <span className="w-1 h-1 rounded-full bg-primary"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
