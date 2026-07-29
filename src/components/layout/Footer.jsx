import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-mid border-t border-border pt-16 pb-8">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6 bg-white/90 p-2 rounded shadow-lg">
              <img
                src="https://www.amazepms.com/assets/logo.png"
                alt="AmazePMS Logo"
                className="h-12"
              />
            </Link>
            <p className="text-white font-medium mb-6 leading-relaxed">
              Amaze Property Management Solutions Pvt Ltd.
              <br />
              A one stop solutions for all your property management needs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-primary transition-colors border border-border">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-primary transition-colors border border-border">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-primary transition-colors border border-border">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-border-blue inline-block pb-1">Menu</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white-muted hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-white-muted hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/our-clients" className="text-white-muted hover:text-gold transition-colors">Our Clients</Link></li>
              <li><Link href="/about" className="text-white-muted hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-white-muted hover:text-gold transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-white-muted hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-border-blue inline-block pb-1">Our Presence</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white-muted"><MapPin size={16} className="text-primary-light" /> Telangana</li>
              <li className="flex items-center gap-2 text-white-muted"><MapPin size={16} className="text-primary-light" /> Andhra Pradesh</li>
              <li className="flex items-center gap-2 text-white-muted"><MapPin size={16} className="text-primary-light" /> Karnataka</li>
              <li className="flex items-center gap-2 text-white-muted"><MapPin size={16} className="text-primary-light" /> Tamil Nadu</li>
              <li className="flex items-center gap-2 text-white-muted"><MapPin size={16} className="text-primary-light" /> Odisha</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-border-blue inline-block pb-1">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white-muted">
                <MapPin size={20} className="text-primary-light shrink-0 mt-1" />
                <span>4th floor, High Mark Chambers, Khajaguda X road, Cyberabad, Hyderabad-500008</span>
              </li>
              <li className="flex items-center gap-3 text-white-muted hover:text-white transition-colors">
                <Phone size={20} className="text-primary-light shrink-0" />
                <a href="tel:+919100694137">9100694137</a>
              </li>
              <li className="flex items-center gap-3 text-white-muted hover:text-white transition-colors">
                <Mail size={20} className="text-primary-light shrink-0" />
                <a href="mailto:info@amazepms.com">Info@amazepms.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider mb-6"></div>

        <div className="text-center text-white-muted text-sm">
          <p>Copyright &copy; {currentYear} Amaze Property Management Solutions Pvt Ltd | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
