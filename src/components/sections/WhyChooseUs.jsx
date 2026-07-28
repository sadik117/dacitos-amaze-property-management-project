'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { whyChooseUs } from '@/data/whyChooseUs';

export default function WhyChooseUs() {

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      <div className="absolute right-[-10%] top-[20%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] animate-blob"></div>

      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-semibold mb-6">
              Our Service Benefits
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-8">
              Why <span className="gradient-text-gold">Choose Us</span>
            </h2>

            <motion.ul
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {whyChooseUs.map((benefit, idx) => (
                <motion.li key={idx} variants={itemVariants} className="flex items-start gap-4 glass-blue p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                  <CheckCircle className="text-primary shrink-0 mt-0.5" size={24} />
                  <span className="text-white-muted font-medium leading-relaxed">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-border">
              <img
                src="https://www.amazepms.com/assets/Group%2099.png"
                alt="Why Choose Us"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-mid via-transparent to-transparent"></div>
            </div>

            <div className="absolute -z-10 -top-10 -right-10 w-full h-full border-2 border-primary/20 rounded-2xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full border-2 border-gold/20 rounded-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
