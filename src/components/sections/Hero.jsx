'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  "https://www.amazepms.com/assets/buildingbanner2.png",
  "https://www.amazepms.com/assets/banner4.jpg",
  "https://www.amazepms.com/assets/banner5.jpg",
  "https://www.amazepms.com/assets/banner6.jpg",
  "https://www.amazepms.com/assets/banner7.jpg",
  "https://www.amazepms.com/assets/Parking-Management-System.jpg",
  "https://www.amazepms.com/assets/physicalsecuritynew.jpg",
  "https://www.amazepms.com/assets/housekeeping.png"
];

export default function Hero() {
  const container = useRef(null);
  const textRef = useRef(null);
  const [init, setInit] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();  
      tl.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
      })
      .from(".hero-title-line", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      }, "-=0.4")
      .from(".hero-desc", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")
      .from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.4")
      .from(".scroll-indicator", {
        opacity: 0,
        duration: 1
      });
      
    }, container);

    return () => ctx.revert();
  }, []);

  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false, zIndex: 0 },
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: ["#1E6FFF", "#F5A623", "#ffffff"] },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  return (
    <section ref={container} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-navy py-30">

      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-navy/70 backdrop-blur-[2px] mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-60 animate-blob"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-gold/15 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      {init && (
        <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
          <Particles
            id="tsparticles"
            options={particlesOptions}
            className="w-full h-full"
          />
        </div>
      )}

      <div className="container-custom relative z-10 mx-auto px-4 flex flex-col items-center text-center">
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 mt-16 md:mt-5 rounded-full glass border border-white/20 mb-3 shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
          <span className="text-xs md:text-sm font-medium text-white tracking-wide">Integrated Facility Management Solutions</span>
        </div>
        
        <h1 ref={textRef} className="text-4xl md:text-6xl font-black mb-4 leading-tight font-display tracking-tight drop-shadow-2xl">
          <div className="hero-title-line overflow-hidden">
            <span className="block text-white">Elevating Your</span>
          </div>
          <div className="hero-title-line overflow-hidden pb-4">
            <span className="block gradient-text drop-shadow-[0_0_10px_rgba(30,111,255,0.4)]">Property Experience</span>
          </div>
        </h1>
        
        <p className="hero-desc text-md md:text-lg text-white max-w-2xl mb-6 md: mb-10 leading-relaxed font-medium drop-shadow-md bg-navy/20 p-4 rounded-xl backdrop-blur-sm border border-white/5">
          Amaze Property Management Solutions Pvt Ltd. <br className="hidden md:block" />
          A one-stop solution for all your property management needs, trusted by 200+ clients across India.
        </p>
        
        <div className="hero-cta flex flex-col sm:flex-row items-center gap-4">
          <Link href="/services" className="group relative px-6 py-3 bg-primary text-white font-bold rounded-full overflow-hidden transition-transform hover:scale-105 shadow-[0_0_30px_rgba(30,111,255,0.4)] border border-primary-light">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative flex items-center gap-2">
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link href="/about" className="px-6 py-3 glass border border-white/30 hover:bg-white/20 text-white font-medium rounded-full transition-all backdrop-blur-md shadow-lg hover:shadow-xl">
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
