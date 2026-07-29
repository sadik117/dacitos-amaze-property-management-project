'use client';

import { useState } from 'react';
import TrustedBy from '@/components/sections/TrustedBy';
import { motion } from 'framer-motion';
import { Building2, Home, ShoppingBag, Stethoscope, Warehouse, GraduationCap, Factory } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' }
});


const pieData = [
  { label: 'Residential Communities',    pct: 33, color: '#1E6FFF' },
  { label: 'Commercial & IT Parks',       pct: 25, color: '#EF4444' },
  { label: 'Corporate Office',            pct: 12, color: '#F59E0B' },
  { label: 'Educational Institutions',    pct: 8,  color: '#22C55E' },
  { label: 'Malls, Multiplexes & Retail', pct: 8,  color: '#A855F7' },
  { label: 'Others',                      pct: 9,  color: '#06B6D4' },
  { label: 'Manufacturing Units',         pct: 5,  color: '#EC4899' },
];

function buildSlices(data) {
  let cumulative = 0;
  return data.map(d => {
    const start = cumulative;
    cumulative += d.pct;
    const startAngle = (start / 100) * 360 - 90;
    const endAngle   = (cumulative / 100) * 360 - 90;
    const r = 80, cx = 100, cy = 100;
    const toRad = deg => (deg * Math.PI) / 180;
    const x1 = cx + r * Math.cos(toRad(startAngle));
    const y1 = cy + r * Math.sin(toRad(startAngle));
    const x2 = cx + r * Math.cos(toRad(endAngle));
    const y2 = cy + r * Math.sin(toRad(endAngle));
    const large = d.pct > 50 ? 1 : 0;
    const midAngle = toRad((startAngle + endAngle) / 2);
    const labelR = 55;
    const lx = cx + labelR * Math.cos(midAngle);
    const ly = cy + labelR * Math.sin(midAngle);
    return { ...d, path: `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2} Z`, lx, ly };
  });
}

const slices = buildSlices(pieData);

const clientCategories = [
  {
    title: "Commercial & IT Parks",
    icon: Building2,
    clients: [
      "Sohini Tech Park", "BSR Tech Park", "Divyasree NSL (Orion Campus)", "Kapil Towers", "Astra Towers",
      "Lanco IT", "Rajapushpa Summit", "Cyperoptics", "IVY Infotech", "L&T Metro Stations", "Purva Summit",
      "Kapil Business Park", "I Labs", "Sattva Knowledge Park", "Tech Mahindra", "T Hub", "Tech Ridge",
      "Cyber Towers", "Aurobindo Galaxy", "Kapil Kavuri Hub", "Sitel India Pvt Ltd", "Jocota", "Moschip",
      "Smart Drive", "I Sprout"
    ]
  },
  {
    title: "Residential Communities",
    icon: Home,
    clients: [
      "Golf Edge Residences", "Aparna Silver Oak", "Mahindra Ashvitha", "Golf View", "Ramky Towers",
      "Rajapushpa Imperia", "Lanco Hills", "Rajapushpa Provincia", "Krinss Villas", "Hill County",
      "Rajapushpa Greendale", "Jains Balaji", "Kalpatharu Residency", "Sri Sai Ram Towers", "The Botanika",
      "My Home Mangla", "Rainbow Vista", "North Star Villas", "Rajapushpa Regalia", "Rajapushpa Atria",
      "Manjeera Diamond Tower", "L&T Serene County", "Aparna Hill Park Sarovar", "My Home Avatar",
      "Rajapushpa Eterna", "Hill Ridge Villas", "Aditya Empress", "Prajay Megapolis"
    ]
  },
  {
    title: "Malls, Multiplexes & Retail",
    icon: ShoppingBag,
    clients: [
      "Nexus Mall", "Marina Mall", "Phoenix Market City", "GMS Mall", "Lulu Mall", "DSL Mall",
      "L&T Mall – Punjagutta", "Rajapushpa Provincia", "L&T Mall – Hitech City", "L&T Mall – Musarambagh",
      "Max Stores", "Time Zone", "Life Style"
    ]
  },
  {
    title: "Hospitals & Clinics",
    icon: Stethoscope,
    clients: ["Rainbow Hospitals", "Oliva Clinics", "Star Health", "Rainbow Vista"]
  },
  {
    title: "Warehouses",
    icon: Warehouse,
    clients: ["Max", "Life Style", "RIL", "Metro", "UB Beer", "Emirates Logistics", "Nippon", "ITC"]
  },
  {
    title: "Educational Institutions",
    icon: GraduationCap,
    clients: [
      "Institute of Public Enterprise", "NICMAR", "Nalsar", "EFL University", "Administrative Staff College of India",
      "Aga Khan Academy", "KL University", "Delhi Public School", "Mahindra and Mahindra University", "Analog IAS Academy"
    ]
  },
  {
    title: "Manufacturing & Pharma",
    icon: Factory,
    clients: [
      "Vidur Pharma", "Srivar Pharma", "MSN Pharma", "Renew Power Projects", "Astra Microwave Products",
      "UB Beer Ltd", "BMM Ispat Ltd", "VRKP Steels Ltd", "Pokarna Ltd", "MSPL Ltd", "RMIL Ltd", "Action Group"
    ]
  }
];

export default function OurClientsPage() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-navy min-h-screen">
      <div className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://www.amazepms.com/assets/Parking-Management-System.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/80 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-primary/10" />
        <div className="absolute top-10 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-48 bg-gold/10 rounded-full blur-[80px]" />

        <div className="container-custom mx-auto relative z-10 text-center">
          <motion.div {...fadeUp()}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm font-semibold text-white/90 tracking-wide">200+ Clients · PAN India</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-display text-white mb-6 leading-tight">
              Our <span className="gradient-text-gold">Clients</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Trusted by industry leaders across diverse sectors — from IT parks and malls to hospitals and educational institutions.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding bg-navy-mid border-y border-border relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="container-custom mx-auto relative z-10">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary rounded-full" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-primary-light to-gold bg-clip-text text-transparent">
                Client Portfolio
              </span>
              <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-gold rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
              Action Group — <span className="gradient-text-gold">Segment Distribution</span>
            </h2>
            <p className="text-white/60 mt-3 max-w-xl mx-auto">
              A snapshot of how our portfolio is spread across the industries we proudly serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

            <motion.div {...fadeUp(0.15)} className="flex justify-center">
              <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px]">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                  {slices.map((slice, i) => (
                    <g key={i}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      className="cursor-pointer"
                    >
                      <path
                        d={slice.path}
                        fill={slice.color}
                        opacity={hovered === null || hovered === i ? 1 : 0.4}
                        transform={hovered === i
                          ? `translate(${(slice.lx - 100) * 0.07}, ${(slice.ly - 100) * 0.07})`
                          : ''}
                        style={{ transition: 'opacity 0.25s, transform 0.25s' }}
                        stroke="#0a0f1e"
                        strokeWidth="1.5"
                      />
                      <text
                        x={slice.lx} y={slice.ly}
                        textAnchor="middle" dominantBaseline="middle"
                        className="pointer-events-none"
                        fill="white" fontSize="7.5" fontWeight="bold"
                      >
                        {slice.pct}%
                      </text>
                    </g>
                  ))}

                  <circle cx="100" cy="100" r="36" fill="#0d1526" />
                  <text x="100" y="96" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Action</text>
                  <text x="100" y="108" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Group</text>
                </svg>

                {hovered !== null && (
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold text-white"
                    style={{ backgroundColor: pieData[hovered].color }}>
                    {pieData[hovered].label} — {pieData[hovered].pct}%
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.25)} className="grid grid-cols-1 gap-2.5">
              {pieData.map((d, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={`flex items-center justify-between px-5 py-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    hovered === i
                      ? 'border-white/30 bg-white/10 shadow-lg scale-[1.02]'
                      : 'border-border bg-navy-card hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-3.5 h-3.5 rounded-full shrink-0 shadow-lg" style={{ backgroundColor: d.color }} />
                    <span className="text-sm font-medium text-white/85">{d.label}</span>
                  </div>
                  <span className="text-sm font-black ml-4 shrink-0" style={{ color: d.color }}>{d.pct}%</span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">

          <motion.div {...fadeUp()} className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary rounded-full" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-primary-light to-gold bg-clip-text text-transparent">
                Our Portfolio
              </span>
              <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-gold rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
              Clients We're <span className="gradient-text-gold">Proud to Serve</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {clientCategories.map((category, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(idx * 0.07)}
                className="group bg-navy-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(30,111,255,0.12)] h-full flex flex-col overflow-hidden"
              >

                <div className="flex items-center gap-4 p-6 pb-4 border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="text-primary-light" size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary-light transition-colors">{category.title}</h3>
                    <p className="text-xs text-white/40 mt-0.5">{category.clients.length} clients</p>
                  </div>
                </div>

                <ul className="space-y-2 flex-grow max-h-64 overflow-y-auto custom-scrollbar p-6 pt-4">
                  {category.clients.map((client, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5 text-sm text-white/65 hover:text-white transition-colors">
                      <span className="text-primary/60 mt-0.5 shrink-0 text-[10px]">▸</span>
                      {client}
                    </li>
                  ))}
                </ul>

                <div className="h-[2px] bg-gradient-to-r from-primary to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrustedBy />

    </div>
  );
}
