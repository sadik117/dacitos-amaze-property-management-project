'use client';

import { motion } from 'framer-motion';

const partners = [
  {
    badge: "MEP Services",
    badgeColor: "bg-primary",
    logo: "https://www.amazepms.com/assets/logo.png",
    name: "Amaze Property Management Solutions Pvt Ltd",
    services: ["PMS Services", "Housekeeping", "MEP", "Gardening", "Pest Control Services"],
    bg: "from-primary/10 to-primary/5",
    glow: "hover:shadow-[0_0_40px_rgba(30,111,255,0.25)]",
  },
  {
    badge: "Security Services",
    badgeColor: "bg-red-600",
    logo: "https://www.amazepms.com/assets/Af.png",
    name: "Action & Protection Security Force",
    services: ["Security Services", "Fire Training", "Escort Services", "Event Security", "Help Desk Services"],
    bg: "from-red-500/10 to-red-500/5",
    glow: "hover:shadow-[0_0_40px_rgba(239,68,68,0.2)]",
  },
  {
    badge: "Support Staff",
    badgeColor: "bg-[#F5A623]",
    logo: "https://www.amazepms.com/assets/AFS.png",
    name: "Action Facility Services Pvt Ltd",
    services: ["Home Services", "Deep Cleaning Services", "Support Staff", "Project Cleaning", "Sofa & Carpet Cleaning"],
    bg: "from-amber-500/10 to-amber-500/5",
    glow: "hover:shadow-[0_0_40px_rgba(245,166,35,0.2)]",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" }
  })
};

export default function ServicePartners() {
  return (
    <section className="section-padding bg-navy-mid border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-mid pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container-custom mx-auto relative z-10">

        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-gradient-to-r from-transparent to-primary rounded-full"></span>
            <span className="text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-primary-light to-gold bg-clip-text text-transparent">
              Our Service Partners
            </span>
            <span className="w-10 h-[2px] bg-gradient-to-l from-transparent to-gold rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
            Powered by <span className="gradient-text-gold">Trusted Brands</span>
          </h2>
          <p className="text-white-muted mt-3 max-w-xl mx-auto">
            Each service vertical is backed by a dedicated sister company with specialized expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`group relative bg-navy-card rounded-2xl border border-border overflow-visible transition-all duration-300 ${partner.glow} flex flex-col`}
            >
              <div className={`absolute -top-3 left-5 z-10 ${partner.badgeColor} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg`}>
                {partner.badge}
              </div>

              <div className={`relative bg-gradient-to-br ${partner.bg} h-52 flex items-center justify-center p-8 rounded-t-2xl border-b border-border/50 overflow-hidden`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent"></div>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-32 max-w-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-4 leading-snug group-hover:text-primary-light transition-colors">
                  {partner.name}
                </h3>
                <ul className="space-y-1.5 mb-4 flex-grow">
                  {partner.services.map((svc, si) => (
                    <li key={si} className="flex items-center gap-2 text-sm text-white-muted group-hover:text-white/80 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"></span>
                      {svc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
