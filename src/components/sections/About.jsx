'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-img", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          once: true,
          toggleActions: "play none none none",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".about-content > *", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          once: true,
          toggleActions: "play none none none",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  const highlights = [
    "Strong 15,000+ Work Force",
    "200+ Valued Clients",
    "Presence PAN INDIA",
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-navy relative -my-14">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">

          <div className="about-content flex flex-col justify-center items-start py-8 pr-6 lg:pr-16">

            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[3px] bg-gradient-to-r from-primary to-gold rounded-full"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-primary-light to-gold bg-clip-text text-transparent">
                Who We Are
              </span>
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6 leading-tight">
              Amaze Property Management <span className="gradient-text">Solutions</span>
            </h2>

            <p className="text-white-muted text-lg mb-6 leading-relaxed text-justify">
              Amaze PMS Pvt Ltd (AMAZE) is a Property Management division of ACTION GROUP of Companies founded in the year 2001 by Mr. Subhani Abdul, a veteran from the Indian Navy, a Certified Security Practitioner, and a renowned name in the Service Industry.
            </p>

            <p className="text-white-muted text-lg mb-8 leading-relaxed text-justify">
              Headquartered in Cyberabad, Telangana, we specialize in offering comprehensive integrated Property Management Services such as Housekeeping, MEP, Security, Pest Control, Gardening, STP & WTP, Parking, and Swimming Pool Maintenance — all delivered in-house.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-gold shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/about" className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full transition-all hover:bg-primary-dark shadow-[0_0_25px_rgba(30,111,255,0.4)] hover:shadow-[0_0_40px_rgba(30,111,255,0.6)] hover:-translate-y-1 transform">
              Discover More About Us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="about-img relative -mt-10 md:mt-0 min-h-[320px] md:min-h-[420px] flex items-center">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://www.amazepms.com/assets/aboutimgmobile.png"
                alt="Action Group"
                className="absolute right-[-2%] top-1/2 -translate-y-1/2 w-[55%] h-auto object-contain"
              />
            </div>

            <div className="relative z-10 ml-5 md:ml-6 w-[52%] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border-[3px] border-white/20">
              <img
                src="https://www.amazepms.com/assets/about1.png"
                alt="Amaze PMS Team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
