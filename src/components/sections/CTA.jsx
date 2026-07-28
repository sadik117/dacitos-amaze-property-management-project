import Link from 'next/link';
import { PhoneCall } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-primary/20 z-10"></div>
        <img
          src="https://www.amazepms.com/assets/buildingbanner2.png"
          alt="CTA Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container-custom mx-auto relative z-20">
        <div className="glass p-10 md:p-16 rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">

          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[80px]"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">

            <div className="md:col-span-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                <PhoneCall size={36} className="text-white" />
              </div>

              <div>
                <p className="text-gold font-bold uppercase tracking-wider mb-2">Call For More Info</p>
                <a href="tel:+919908538137" className="text-3xl md:text-5xl font-black font-display text-white hover:text-primary-light transition-colors block mb-2">
                  +91 99085 38137
                </a>
                <h2 className="text-xl md:text-2xl text-white-muted font-medium">Ready to elevate your facility management?</h2>
              </div>
            </div>

            <div className="md:col-span-4 md:text-right mt-6 md:mt-0">
              <Link href="/contact" className="inline-block px-10 py-5 bg-white text-navy font-bold text-lg rounded-full transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                Contact Us Now
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
