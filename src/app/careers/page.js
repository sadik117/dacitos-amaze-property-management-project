import { ArrowRight, Briefcase, GraduationCap, Users, MapPin, Building2, Send } from 'lucide-react';

export const metadata = {
  title: 'Careers | Amaze PMS',
  description: 'Join our team of 15,000+ professionals. Build your career with Amaze PMS.',
};

const openings = [
  { role: 'Facility Manager',          dept: 'Operations',         loc: 'Hyderabad' },
  { role: 'Assistant Facility Manager', dept: 'Operations',        loc: 'Hyderabad' },
  { role: 'Operations Manager',        dept: 'Operations',         loc: 'Hyderabad' },
  { role: 'Security Officer',          dept: 'Security',           loc: 'PAN India' },
  { role: 'Electrician',               dept: 'Technical (MEP)',     loc: 'PAN India' },
  { role: 'Field Officer – Technical', dept: 'Technical (MEP)',     loc: 'PAN India' },
  { role: 'Field Officer – Security',  dept: 'Security',           loc: 'PAN India' },
  { role: 'Plumber',                   dept: 'Technical (MEP)',     loc: 'PAN India' },
  { role: 'Carpenter',                 dept: 'Technical (MEP)',     loc: 'PAN India' },
  { role: 'Gardener',                  dept: 'Landscaping',        loc: 'PAN India' },
  { role: 'House Keeping Supervisor',  dept: 'Housekeeping',       loc: 'PAN India' },
  { role: 'House Keeper',              dept: 'Housekeeping',       loc: 'PAN India' },
  { role: 'Fire & Safety Technicians', dept: 'Safety',             loc: 'PAN India' },
];

const perks = [
  { icon: Briefcase,     title: 'Career Growth',    desc: 'Clear progression paths and continuous learning opportunities.' },
  { icon: GraduationCap, title: 'Training Programs', desc: 'Regular skill development and certification programs.' },
  { icon: Users,         title: 'Great Culture',    desc: 'Inclusive, supportive, and dynamic work environment.' },
];

export default function CareersPage() {
  return (
    <div className="pt-20 pb-0 bg-navy min-h-screen">

      <div className="relative py-12 bg-navy-mid border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.amazepms.com/assets/banner7.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>
        <div className="absolute top-10 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="container-custom mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-sm font-semibold text-white/90 tracking-wide">We're Hiring · Join 15,000+ Professionals</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-display text-white mb-5 leading-tight">
            Join Our <span className="gradient-text-gold">Team</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            Build a rewarding career with one of India's leading Integrated Facility Management companies.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-[2px] bg-gradient-to-r from-transparent to-primary rounded-full"></span>
                <h2 className="text-2xl md:text-3xl font-bold font-display text-white">
                  Current <span className="gradient-text-gold">Openings</span>
                </h2>
              </div>

              <div className="space-y-3">
                {openings.map((job, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center justify-between gap-4 px-5 py-4 rounded-xl bg-navy-card border border-border hover:border-primary/40 hover:shadow-[0_4px_20px_rgba(30,111,255,0.12)] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-primary/60 text-sm shrink-0">▸</span>
                      <div className="min-w-0">
                        <span className="text-white font-semibold group-hover:text-primary-light transition-colors text-sm">
                          {job.role}
                        </span>
                        <div className="flex items-center gap-3 mt-0.5">
                          <span className="text-xs text-white/40 flex items-center gap-1">
                            <Building2 size={10} /> {job.dept}
                          </span>
                          <span className="text-xs text-white/40 flex items-center gap-1">
                            <MapPin size={10} /> {job.loc}
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      href={`mailto:careers@amazepms.com?subject=Application for ${encodeURIComponent(job.role)}&body=Dear HR Team,%0A%0AI am interested in applying for the ${encodeURIComponent(job.role)} position.%0A%0APlease find my details below:%0A%0AName:%0APhone:%0AExperience:%0A%0AThank you.`}
                      className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary-light hover:bg-primary hover:text-white hover:border-primary transition-all text-xs font-bold whitespace-nowrap"
                    >
                      Apply <ArrowRight size={12} />
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl border border-gold/20 bg-gold/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Send size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Don't see your role?</p>
                  <a
                    href="mailto:careers@amazepms.com?subject=General Job Application&body=Dear HR Team,%0A%0AI would like to express my interest in joining Amaze PMS.%0A%0AName:%0APhone:%0ASkills / Experience:%0A%0AThank you."
                    className="text-gold text-sm hover:underline"
                  >
                    Send your CV to careers@amazepms.com →
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl overflow-hidden border border-border shadow-2xl ring-1 ring-primary/20">
                <img
                  src="https://media.istockphoto.com/id/506351726/photo/recruiter-advertising-for-job-vacancies-searching-candidates-to-hire.jpg?s=612x612&w=0&k=20&c=JNtjXENGX7igzXRDCaifzEcRox2FCUPzF0hptTK3dRw="
                  alt="Now Hiring — Amaze PMS Careers"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-primary to-primary-dark border border-primary/50 shadow-[0_10px_40px_rgba(30,111,255,0.3)]">
                <h3 className="text-xl font-bold text-white mb-2">Quick Apply</h3>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  Email your resume directly to our HR team and we'll get back to you within 48 hours.
                </p>
                <a
                  href="mailto:careers@amazepms.com?subject=Job Application — Amaze PMS&body=Dear HR Team,%0A%0AI am interested in joining the Amaze PMS team.%0A%0AName:%0APhone:%0ARole Interested In:%0AExperience:%0A%0AThank you."
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 rounded-full bg-white text-primary font-bold hover:bg-primary-light hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <Send size={16} />
                  Apply Now — careers@amazepms.com
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
