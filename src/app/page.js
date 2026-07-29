import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Stats from '@/components/sections/Stats';
import CTA from '@/components/sections/CTA';
import ServicePartners from '@/components/sections/ServicePartners';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <WhyChooseUs />
      <Stats />
      <ServicePartners />
      <CTA />
    </>
  );
}
