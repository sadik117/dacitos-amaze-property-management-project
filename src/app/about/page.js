'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Users, MapPin, Building2, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import ServicePartners from '@/components/sections/ServicePartners';
import TrustedBy from '@/components/sections/TrustedBy';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' }
});

const stats = [
  { icon: Users, value: '15,000+', label: 'Strong Workforce' },
  { icon: Building2, value: '200+', label: 'Clients Served' },
  { icon: MapPin, value: 'PAN INDIA', label: 'Presence' },
  { icon: Award, value: '20M+ sqft', label: 'Area Managed' },
];

const segments = [
  'Commercial and IT Parks', 'Infrastructure and Construction Sites',
  'Corporate Offices', 'Malls, Multiplex\'s and Retail Stores',
  'Educational Institutions', 'Manufacturing Units',
  'Residential Communities', 'Special Events',
  'Hotels and Hospitals', 'Ware Houses',
  'Industries', 'Pharma',
];

export default function AboutPage() {
  return (
    <div className="bg-navy min-h-screen">

      <div className="relative pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://www.amazepms.com/assets/buildingbanner2.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/75 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-primary/10" />
        <div className="absolute top-10 right-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-48 bg-gold/10 rounded-full blur-[80px]" />

        <div className="container-custom mx-auto relative z-10">
          <motion.div {...fadeUp()} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm font-semibold text-white/90 tracking-wide">Est. 2001 · Action Group Company</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-display text-white mb-6 leading-tight">
              About <span className="gradient-text-gold">Amaze PMS</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-10">
              A legacy of excellence in Integrated Facility Management — trusted by 200+ clients across PAN India for over two decades.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-primary font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 group"
            >
              Get Started With Us
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} className="text-white" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="bg-navy-card border-y border-border">
        <div className="container-custom mx-auto py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-1">
                  <s.icon size={22} className="text-primary-light" />
                </div>
                <span className="text-2xl md:text-3xl font-black gradient-text-gold">{s.value}</span>
                <span className="text-sm text-white-muted font-medium">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div {...fadeUp(0.1)}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[2px] bg-gradient-to-r from-transparent to-primary rounded-full"></span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-primary-light to-gold bg-clip-text text-transparent">
                  Who We Are
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6 leading-tight">
                Pioneering Property Management <br className="hidden md:block" />
                <span className="gradient-text-gold">in India</span>
              </h2>
              <div className="space-y-4 text-white/70 text-base leading-relaxed mb-8">
                <p>
                  Amaze PMS Pvt Ltd (AMAZE) is a Property Management division of ACTION GROUP of Companies founded in <strong className="text-white">2001</strong> by <strong className="text-white">Mr. Subhani Abdul</strong>, a veteran from the Indian Navy, a Certified Security Practitioner, and a renowned name in the Service Industry.
                </p>
                <p>
                  Headquartered in Cyberabad, Telangana, we specialize in offering comprehensive integrated Property Management Services such as Housekeeping, MEP, Security, Pest Control, Gardening, STP &amp; WTP, Parking, and Swimming Pool Maintenance — all delivered <strong className="text-white">in-house</strong>.
                </p>
                <p>
                  With a strong workforce of <strong className="text-white">15,000+ professionals</strong>, we currently manage over <strong className="text-white">20 Million Sq.ft</strong> across different portfolios throughout PAN India.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {['Strong 15000+ Work Force', '200+ Clients', 'Presence PAN INDIA'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-navy-card border border-border">
                    <CheckCircle2 size={17} className="text-primary shrink-0" />
                    <span className="text-sm font-semibold text-white">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border-2 border-white/30 text-white font-bold hover:bg-white/10 hover:border-white/60 transition-all duration-300 group"
              >
                GET STARTED WITH US
                <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} className="text-white" />
                </span>
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.25)} className="relative min-h-[420px] lg:min-h-[500px] flex items-center">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://www.amazepms.com/assets/aboutimgmobile.png"
                  alt="Action Group Badge"
                  className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[58%] h-auto object-contain drop-shadow-2xl opacity-90"
                />
              </div>

              <div className="relative z-10 ml-4 md:ml-8 w-[55%] rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.7)] border-[3px] border-white/15 ring-1 ring-primary/20">
                <img
                  src="https://www.amazepms.com/assets/about1.png"
                  alt="Amaze PMS Team"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="absolute bottom-12 left-3 z-20 flex items-center gap-3 px-4 py-3 bg-navy-card/90 backdrop-blur-md border border-border rounded-xl shadow-xl">
                <span className="text-3xl font-black gradient-text-gold">23+</span>
                <span className="text-xs text-white-muted font-semibold leading-tight">Years of<br />Excellence</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-mid border-y border-border relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="container-custom mx-auto relative z-10">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary rounded-full"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-primary-light to-gold bg-clip-text text-transparent">
                Our Foundation
              </span>
              <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-gold rounded-full"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display text-white">
              Mission <span className="text-white/30">|</span> Vision <span className="text-white/30">|</span> <span className="gradient-text-gold">Values</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            <motion.div {...fadeUp(0.1)} className="group relative bg-navy-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(30,111,255,0.15)] overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-transparent rounded-l-2xl" />
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors" />
              <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
                <div className="flex-1 order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-bold uppercase tracking-wider mb-4">
                    🎯 Our Mission
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">What We Strive For</h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    Our Mission is to be a leading provider of comprehensive property management solutions in PAN INDIA. We are committed to delivering exceptional services that exceed our clients' expectations, while prioritizing technology, sustainability, and the well-being of our employees.
                  </p>
                </div>
                <div className="shrink-0 order-1 md:order-2 w-44 h-44 flex items-center justify-center">
                  <img src="https://www.amazepms.com/assets/mission.png" alt="Mission" className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="group relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0052FF] to-primary-dark" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
              <div className="relative flex flex-col md:flex-row-reverse items-center gap-8 p-8 md:p-12">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider mb-4">
                    👁️ Our Vision
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Where We're Headed</h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    Our Vision is to transform the property management industry by setting new standards of excellence and innovation. We strive to be recognised for reliable, cost-effective, and sustainable services. Through continuous enhancement and a client-centric approach, we aim to enhance the value we bring to our clients' business <span className="font-bold uppercase">(Athma Nirbhar Bharath)</span>.
                  </p>
                </div>
                <div className="shrink-0 w-44 h-44 flex items-center justify-center">
                  <img src="https://www.amazepms.com/assets/vision.png" alt="Vision" className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="group relative bg-navy-card rounded-2xl border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(245,166,35,0.1)] overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold to-transparent rounded-l-2xl" />
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-gold/10 rounded-full blur-[40px] group-hover:bg-gold/20 transition-colors" />
              <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
                <div className="flex-1 order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-wider mb-4">
                    ⭐ Our Values
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">What We Stand By</h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    Our Core Values include respect, integrity, excellence, sustainability, and customer focus. We are committed to conducting business with the highest ethical standards, delivering excellence in all aspects of our work, promoting sustainability in our operations, and always prioritizing the needs and satisfaction of our clients.
                  </p>
                </div>
                <div className="shrink-0 order-1 md:order-2 w-44 h-44 flex items-center justify-center">
                  <img src="https://www.amazepms.com/assets/values.png" alt="Values" className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="section-padding bg-navy border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(107,157,253,0.06),transparent_70%)]" />

        <div className="container-custom mx-auto relative z-10">
          <motion.div {...fadeUp()} className="rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0052FF] to-primary-dark" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_50%)]" />

            <div className="relative flex flex-col md:flex-row items-center gap-12 p-10 md:p-16">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider mb-6">
                  🏢 Industries We Serve
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-10">
                  Segments We Cater To
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {segments.map((seg, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/90 text-base font-medium group/seg">
                      <span className="text-white/50 group-hover/seg:text-white transition-colors text-lg">❖</span>
                      <span className="group-hover/seg:text-white transition-colors">{seg}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 w-full md:w-[280px] mt-8 md:mt-0">
                <div className="bg-[#F8F3ED] w-full aspect-square rounded-2xl flex items-center justify-center p-10 shadow-2xl">
                  <img
                    src="https://www.amazepms.com/assets/cater.png"
                    alt="Segments We Cater To"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <TrustedBy></TrustedBy>

    </div>
  );
}
