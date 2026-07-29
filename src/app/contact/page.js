'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setToast({
        title: "Message Sent Successfully!",
        message: "Thank you for reaching out. Our property management team will get back to you within 24 hours."
      });

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 800);
  };

  return (
    <div className="pt-16 pb-0 bg-navy min-h-screen relative">

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-24 right-4 md:right-8 z-50 max-w-md w-full bg-navy-card/95 backdrop-blur-xl border border-gold/40 text-white p-5 rounded-2xl shadow-[0_10px_40px_rgba(245,166,35,0.25)] flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 border border-gold/40 text-gold">
              <CheckCircle2 size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-bold text-white mb-1 font-display">{toast.title}</h4>
              <p className="text-xs text-white-muted leading-relaxed">{toast.message}</p>
            </div>
            <button
              onClick={() => setToast(null)}
              className="text-white-muted hover:text-white transition-colors p-1"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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
                
                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white-muted">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="De Villiers"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white-muted">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="abd@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white-muted">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white-muted">Service of Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                      >
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
                    <textarea
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <AnimatePresence mode="wait">
                    {toast && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 rounded-xl bg-gold/10 border border-gold/30 text-gold flex items-center gap-3 text-sm font-medium"
                      >
                        <CheckCircle2 size={18} className="shrink-0" />
                        <span>Message submitted successfully! Check the confirmation toast above.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-primary hover:bg-primary-dark disabled:opacity-50 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(30,111,255,0.3)] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
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
