'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { stats } from '@/data/stats';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden bg-navy-mid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5"></div>

      <div className="container-custom mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card glass p-8 rounded-[var(--radius-card)] text-center group border-t border-t-white/10 card-glow">
              <div className="text-5xl md:text-6xl font-black font-display gradient-text mb-4">
                {isInView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                <span className="text-gold">{stat.suffix}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
              <p className="text-white-muted text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
