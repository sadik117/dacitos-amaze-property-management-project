import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Amaze PMS',
  description: 'Get in touch with Amaze Property Management Solutions.',
};

export default function ContactPage() {
  return (
    <div className="pt-16 pb-0 bg-navy min-h-screen">
      <div className="relative py-8 bg-navy-mid border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.amazepms.com/assets/banner5.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>
        <div className="container-custom mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black font-display text-white mb-4">
            Get In <span className="gradient-text-gold">Touch</span>
          </h1>
          <p className="text-lg text-white-muted max-w-2xl mx-auto">
            Have a question or need a customized facility management solution? <br />
            We're here to help.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">

            <div className="md:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-display text-white mb-6">Contact Information</h2>
                <p className="text-white-muted mb-8 leading-relaxed">
                  Reach out to our dedicated support team to discuss your property management requirements.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <MapPin className="text-primary-light" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Corporate Office</h4>
                    <p className="text-white-muted text-sm leading-relaxed">
                      4th floor, High Mark Chambers,<br />
                      Khajaguda X road, Cyberabad,<br />
                      Hyderabad-500008
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Phone className="text-primary-light" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                    <a href="tel:+919100694137" className="text-white-muted text-sm hover:text-white transition-colors block mb-1">
                      +91 91006 94137
                    </a>
                    <a href="tel:+919908538137" className="text-white-muted text-sm hover:text-white transition-colors block">
                      +91 99085 38137
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Mail className="text-primary-light" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                    <a href="mailto:info@amazepms.com" className="text-white-muted text-sm hover:text-white transition-colors">
                      Info@amazepms.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="glass-blue p-8 md:p-10 rounded-2xl border border-border shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send us a Message</h3>
                
                <form className="space-y-6 relative z-10" action="#" suppressHydrationWarning>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white-muted">Full Name *</label>
                      <input type="text" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="De Villiers" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white-muted">Email Address *</label>
                      <input type="email" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="abd@company.com" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white-muted">Phone Number</label>
                      <input type="tel" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white-muted">Service of Interest</label>
                      <select className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                        <option value="">Select a service...</option>
                        <option value="security">Security Services</option>
                        <option value="housekeeping">Housekeeping</option>
                        <option value="technical">Technical Services (MEP)</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white-muted">Message *</label>
                    <textarea rows="4" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your requirements..."></textarea>
                  </div>
                  
                  <button type="submit" className="w-full md:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(30,111,255,0.3)] flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
