'use client';

import { CheckCircle2, UserPlus, GraduationCap, ShieldCheck, Cog, Sparkles, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' }
});

const manPowerSourcing = [
  'Regional Internal recruitment team',
  'Andhra Pradesh',
  'Karnataka, UP, Bihar, Jharkhand',
  'Tamil Nadu',
  'Telangana',
  'District Employment offices - Job Mela',
  'Reference from existing employees',
  'North East & Odisha'
];

const skillCategories = [
  {
    title: 'Training Facility',
    icon: GraduationCap,
    points: [
      'Affiliated with National Skill Development Corporation of India.',
      'Well Qualified and Experienced Trainers',
      'Having Training Facilities at Corporate Office and Branch Offices',
      'Manpower will be deployed after screening and training.'
    ]
  },
  {
    title: 'Security',
    icon: ShieldCheck,
    points: [
      'Post & Site Instruction - Know your property',
      'Gate House Operations',
      'Patrolling',
      'Incident Management',
      'Visitors & Vendor Management',
      'Material Movement',
      'Command Control Centre',
      'Fire & Safety, Emergency Management',
      'Traffic & Parking Management',
      'Peripheral Protection',
      'Key Management',
      'Work Place Safety'
    ]
  },
  {
    title: 'MEP',
    icon: Cog,
    points: [
      'Grooming Standards',
      'Do\'s & Dont\'s',
      'Work Place Safety',
      'EHS Policy',
      'Posh',
      'Shutdown Operations',
      'Process and Audits',
      'Planned Preventive Maintenance',
      'Risk Audits',
      'Inventory Control',
      'Work Permit and LOTO'
    ]
  },
  {
    title: 'House Keeping',
    icon: Sparkles,
    points: [
      'Grooming Standards',
      'Communication Skills',
      'Behavioural Approach',
      'Usage of Chemicals',
      'Usage Of Machinery',
      'Posh',
      'Do\'s & Dont\'s',
      'EHS Policy',
      'Reporting System',
      'IPC Section',
      'Work Place Safety'
    ]
  }
];

const audits = [
  'Security Audit', 'Engineering Audit', 'Soft Services Audit', 'EHS Audit',
  'Safety Audit', 'Risk Audit', 'Inventory Audit', 'Process Audit',
  'AMC Tracking & Negotiations', 'Energy & Sustainability Audit',
  'Compliance Audit', 'Revenue Generation', 'Any other Audit required time to time'
];

const approachStages = [
  {
    stage: 1,
    title: 'Initiation',
    points: [
      'Getting connected with the client',
      'Understanding the client requirement',
      'Site Survey & studying the existing processes',
      'Submission of service & commercial proposal'
    ]
  },
  {
    stage: 2,
    title: 'Planning',
    points: [
      'Contract confirmation by the client',
      'Resource planning, recruitment & training',
      'Preparation of site specific SOP\'s.',
      'Finalizing the service agreement'
    ]
  },
  {
    stage: 3,
    title: 'Execution',
    points: [
      'Deployment of contract start up team',
      'Parallel deployment of security force',
      'Taking over from the existing service provider',
      'Supervision and co-ordination by field staff'
    ]
  },
  {
    stage: 4,
    title: 'Monitoring',
    points: [
      'Close monitoring by the operations team',
      'Review of security posture & procedures',
      'Site specific training',
      'Feedback & Suggestions from client'
    ]
  }
];

export default function RecruitmentsPage() {
  return (
    <div className="bg-navy min-h-screen">
      <div className="relative pt-24 pb-16 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(107,157,253,0.1),transparent_50%)]" />
        
        <div className="container-custom mx-auto relative z-10 text-center">
          <motion.div {...fadeUp()} className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-bold uppercase tracking-wider mb-6">
              <UserPlus size={16} />
              Join Our Excellence
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-display text-white mb-6 leading-tight">
              Recruitment <span className="gradient-text-gold">&</span> Strategy
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Building a strong, reliable, and highly-trained workforce to deliver exceptional property management services.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding relative overflow-hidden">
        <div className="container-custom mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Recruitment Strategy
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div {...fadeUp(0.1)} className="bg-navy-card rounded-2xl p-8 border border-border hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-light">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Man Power Sourcing</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {manPowerSourcing.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="bg-navy-card rounded-2xl p-8 border border-border hover:border-gold/40 transition-colors text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-[40px]" />
              <h3 className="text-2xl font-bold text-white mb-4">Background Verification</h3>
              <p className="text-white/80 text-lg">
                Antecedent verification will be carried out by our in-house background check team in the supervision of a retired police officer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-mid border-y border-border relative">
        <div className="container-custom mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Skill Development
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="bg-navy-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-all hover:-translate-y-1 h-full flex flex-col">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary-light mb-4">
                    <cat.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                </div>
                <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar max-h-[300px]">
                  {cat.points.map((point, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} className="text-primary/70 mt-0.5 shrink-0" />
                      <span className="text-white/70 leading-relaxed text-left">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        
        <div className="container-custom mx-auto relative z-10">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Audits
            </h2>
            <p className="text-primary-light font-bold tracking-widest text-sm uppercase mb-4">
              MMR | QBR | BI-ANNUAL | ANNUAL
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="bg-navy-card rounded-3xl overflow-hidden border border-border shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 lg:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {audits.map((audit, i) => (
                  <motion.div key={i} {...fadeUp(i * 0.05)} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                    <span className="text-white/90 font-medium">{audit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-auto">
              <img 
                src="https://www.amazepms.com/assets/audit.png" 
                alt="Audits" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-card to-transparent lg:w-32" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-mid border-t border-border relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />

        <div className="container-custom mx-auto relative z-10">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Functional Approach
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary-dark to-transparent -translate-x-1/2 z-0" />
            
            <div className="space-y-12 relative z-10">
              {approachStages.map((stage, i) => (
                <motion.div 
                  key={i} 
                  {...fadeUp(0.1)} 
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-1/2 w-full ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-navy-card border border-border p-6 rounded-2xl shadow-lg relative ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                   
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-1 bg-primary ${i % 2 === 0 ? '-right-8' : '-left-8'}`} />
                      
                      <div className="space-y-3">
                        {stage.points.map((point, j) => (
                          <div key={j} className={`flex items-start gap-3 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                            <span className="text-white/80 text-sm md:text-base leading-tight text-left">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="shrink-0 w-24 h-24 rounded-full bg-navy border-4 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(30,111,255,0.4)] z-10 my-4 md:my-0 relative">
 
                     {i !== approachStages.length - 1 && (
                        <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 w-1 h-12 bg-primary z-0" />
                     )}
                    <div className="text-center">
                      <div className="text-xs text-primary-light font-bold uppercase tracking-wider">Stage</div>
                      <div className="text-3xl font-black text-white">{stage.stage}</div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 w-full hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
