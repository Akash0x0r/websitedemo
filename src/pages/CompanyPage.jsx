import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { Button, SectionHeader, CTABanner } from '../components/UIComponents';
import MethodologyTimeline from '../components/MethodologyTimeline';
import { 
  Shield, Award, CheckCircle2, Users, Target, FileCheck2, 
  Terminal, Globe, ArrowRight, Briefcase, Sparkles, Lock 
} from 'lucide-react';

export default function CompanyPage() {
  const { subSection = 'about' } = useParams();
  const [activeTab, setActiveTab] = useState(subSection || 'about');

  const tabs = [
    { id: 'about', label: 'About SECERA' },
    { id: 'methodology', label: 'Our Methodology' },
    { id: 'expertise', label: 'Expertise & Certs' },
    { id: 'standards', label: 'Security Standards' },
    { id: 'careers', label: 'Careers' }
  ];

  const breadcrumbItems = [
    { label: 'Company', to: '/company/about' },
    { label: tabs.find(t => t.id === activeTab)?.label || 'About SECERA' }
  ];

  return (
    <div className="w-full pt-24 sm:pt-28">
      
      {/* 1. HERO SECTION (Light Off-White Canvas) */}
      <section className="bg-brand-off-white border-b border-brand-navy/10 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-light opacity-50 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} lightMode={true} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-navy/15 text-xs font-mono font-bold text-brand-navy uppercase tracking-widest mb-6 shadow-sm">
              <Shield className="w-4 h-4 text-brand-blue" />
              <span>THE SECERA DIFFERENCE</span>
            </div>

            <h1 className="uv-heading text-3xl sm:text-5xl md:text-6xl font-bold text-brand-navy uppercase mb-6 leading-tight">
              COMMITTED TO UNCOMPROMISING SECURITY
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-brand-navy/80 mb-8 leading-relaxed font-normal">
              Built by offensive security veterans to deliver high-trust vulnerability assessment, penetration testing, and continuous compliance for high-velocity global engineering teams.
            </p>

            {/* Sub-Navigation Tab Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={`/company/${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-display font-bold uppercase tracking-wider transition-all duration-150 min-h-[44px] inline-flex items-center ${
                    activeTab === tab.id
                      ? 'bg-brand-navy text-brand-white shadow-sm'
                      : 'bg-white text-brand-navy hover:bg-brand-navy/5 border border-brand-navy/15'
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. DYNAMIC CONTENT SECTIONS */}

      {/* TAB 1: ABOUT US */}
      {activeTab === 'about' && (
        <>
          <section className="py-20 sm:py-28 bg-brand-white text-brand-navy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="uv-subheading">Our Mission</div>
                  <h2 className="uv-heading text-2xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy">
                    ERADICATING VULNERABILITIES BEFORE THEY BECOME INCIDENTS
                  </h2>
                  <p className="text-sm sm:text-base text-brand-navy/80 leading-relaxed font-sans">
                    Founded with a belief that automated scans are merely the starting point, SECERA was built to provide rigorous, human-led offensive security research. We think like adversaries to protect modern cloud software, critical API gateways, and financial infrastructure.
                  </p>
                  <p className="text-sm sm:text-base text-brand-navy/80 leading-relaxed font-sans">
                    Our team of certified offensive researchers works closely with developer teams, translating complex vulnerability PoCs into actionable, merge-ready pull requests.
                  </p>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                  <div className="light-glass-card p-6 rounded-2xl border border-brand-navy/10">
                    <div className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy mb-2">500+</div>
                    <div className="font-display font-bold text-xs uppercase text-brand-navy">Assessments Delivered</div>
                    <p className="text-xs text-brand-navy/70 mt-1 font-sans">Across 14 countries globally</p>
                  </div>
                  <div className="light-glass-card p-6 rounded-2xl border border-brand-navy/10">
                    <div className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy mb-2">0-False</div>
                    <div className="font-display font-bold text-xs uppercase text-brand-navy">Positives Policy</div>
                    <p className="text-xs text-brand-navy/70 mt-1 font-sans">Every flaw manually validated</p>
                  </div>
                  <div className="light-glass-card p-6 rounded-2xl border border-brand-navy/10">
                    <div className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy mb-2">24h</div>
                    <div className="font-display font-bold text-xs uppercase text-brand-navy">Turnaround SLA</div>
                    <p className="text-xs text-brand-navy/70 mt-1 font-sans">For urgent scoping & NDA</p>
                  </div>
                  <div className="light-glass-card p-6 rounded-2xl border border-brand-navy/10">
                    <div className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy mb-2">60-Day</div>
                    <div className="font-display font-bold text-xs uppercase text-brand-navy">Free Re-Testing</div>
                    <p className="text-xs text-brand-navy/70 mt-1 font-sans">Verification guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Leadership Section */}
          <section className="py-20 sm:py-28 bg-brand-off-white border-t border-brand-navy/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                lightMode={true}
                eyebrow="Security Veterans"
                title="OFFENSIVE RESEARCH LEADERSHIP"
                description="Our core research leads have decades of combined experience in vulnerability disclosure, red teaming, and cyber threat intelligence."
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white border border-brand-navy/10 p-6 sm:p-8 rounded-2xl shadow-sm hover:border-brand-blue transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-brand-navy text-brand-blue flex items-center justify-center font-display font-black text-xl mb-6 shadow-sm">
                    VM
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-brand-navy uppercase">Vikram Malhotra</h3>
                  <div className="text-xs font-mono text-brand-navy font-bold mb-4">Head of Offensive Security • OSCP, OSWE</div>
                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed font-sans">
                    12+ years leading red team simulations and zero-day research for Fortune 500 financial institutions and defense contractors.
                  </p>
                </div>

                <div className="bg-white border border-brand-navy/10 p-6 sm:p-8 rounded-2xl shadow-sm hover:border-brand-blue transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-brand-navy text-brand-blue flex items-center justify-center font-display font-black text-xl mb-6 shadow-sm">
                    SL
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-brand-navy uppercase">Sarah Lindqvist</h3>
                  <div className="text-xs font-mono text-brand-navy font-bold mb-4">Principal Cloud Architect • AWS Security, CISSP</div>
                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed font-sans">
                    Specialist in zero-trust container security, IAM graph exploit chaining, and Kubernetes hardening at hyper-scale.
                  </p>
                </div>

                <div className="bg-white border border-brand-navy/10 p-6 sm:p-8 rounded-2xl shadow-sm hover:border-brand-blue transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-brand-navy text-brand-blue flex items-center justify-center font-display font-black text-xl mb-6 shadow-sm">
                    DV
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-brand-navy uppercase">David Vance</h3>
                  <div className="text-xs font-mono text-brand-navy font-bold mb-4">VP of Compliance & Audits • QSA, CISA</div>
                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed font-sans">
                    Former PCI QSA and ISO lead auditor who has guided over 120 companies to flawless first-time SOC 2 and PCI DSS certification.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* TAB 2: METHODOLOGY */}
      {activeTab === 'methodology' && (
        <section className="py-20 sm:py-28 bg-brand-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              lightMode={true}
              eyebrow="Detailed Phase Inspector"
              title="THE 6-STEP SECERA OFFENSIVE METHODOLOGY"
              description="A structured, predictable, and non-destructive methodology combining automated baseline discovery with deep manual logic exploitation."
            />

            <MethodologyTimeline lightMode={true} />
          </div>
        </section>
      )}

      {/* TAB 3: EXPERTISE & CERTIFICATIONS */}
      {activeTab === 'expertise' && (
        <section className="py-20 sm:py-28 bg-brand-white text-brand-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              lightMode={true}
              eyebrow="Certified Researchers"
              title="INDUSTRY-LEADING CERTIFICATIONS & SKILLS"
              description="Our offensive and defensive security researchers maintain the world's most rigorous hands-on practical credentials."
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { name: "OSCP", full: "Offensive Security Certified Professional", issuer: "OffSec" },
                { name: "OSWE", full: "Offensive Security Web Expert", issuer: "OffSec" },
                { name: "CISSP", full: "Certified Information Systems Security Professional", issuer: "(ISC)²" },
                { name: "CEH (Master)", full: "Certified Ethical Hacker Practical", issuer: "EC-Council" },
                { name: "GWAPT", full: "GIAC Web Application Penetration Tester", issuer: "SANS / GIAC" },
                { name: "CISA", full: "Certified Information Systems Auditor", issuer: "ISACA" },
                { name: "AWS Security", full: "AWS Certified Security - Specialty", issuer: "Amazon Web Services" },
                { name: "CKA", full: "Certified Kubernetes Administrator", issuer: "CNCF" }
              ].map((cert, idx) => (
                <div key={idx} className="light-glass-card p-6 rounded-2xl border border-brand-navy/10 text-center">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-brand-navy text-brand-blue flex items-center justify-center font-display font-black text-sm mb-4 shadow-sm">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-brand-navy uppercase mb-1">{cert.name}</div>
                  <div className="text-xs font-bold text-brand-navy mb-2 font-sans">{cert.full}</div>
                  <div className="text-[10px] font-mono text-brand-navy/70 uppercase font-bold">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TAB 4: SECURITY STANDARDS */}
      {activeTab === 'standards' && (
        <section className="py-20 sm:py-28 bg-brand-off-white text-brand-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              lightMode={true}
              eyebrow="Global Alignment"
              title="FRAMEWORKS & COMPLIANCE BENCHMARKS"
              description="SECERA assessments adhere strictly to internationally recognized security standards and testing guides."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { title: "OWASP ASVS & Top 10", desc: "Application Security Verification Standard Level 1, 2, and 3 for web and API layers." },
                { title: "NIST SP 800-115", desc: "Technical Guide to Information Security Testing and Assessment protocol standards." },
                { title: "ISO/IEC 27001:2022", desc: "Annex A.8 controls for technical vulnerability management and network security." },
                { title: "PCI DSS v4.0.1", desc: "Payment Card Industry Data Security Standard testing requirements 6 and 11." },
                { title: "MITRE ATT&CK", desc: "Comprehensive adversary tactics, techniques, and procedures (TTPs) simulation." },
                { title: "CIS Benchmarks", desc: "Center for Internet Security hardening baselines for OS, Cloud, and Kubernetes." }
              ].map((std, idx) => (
                <div key={idx} className="bg-white border border-brand-navy/10 p-6 sm:p-8 rounded-2xl shadow-sm hover:border-brand-blue transition-colors">
                  <div className="font-mono text-xs text-brand-navy font-bold uppercase mb-2">BENCHMARK 0{idx + 1}</div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-brand-navy uppercase mb-3">{std.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed font-sans">{std.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TAB 5: CAREERS */}
      {activeTab === 'careers' && (
        <section className="py-20 sm:py-28 bg-brand-white text-brand-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              lightMode={true}
              eyebrow="Join Our Red Team"
              title="CAREERS AT SECERA"
              description="Work alongside elite offensive security researchers defending the world's most critical digital infrastructures."
            />

            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                { title: "Senior Offensive Security Researcher (VAPT)", type: "Remote / Hybrid", exp: "5+ Years", certs: "OSCP / OSWE" },
                { title: "Cloud Security & IAM Penetration Tester", type: "Remote", exp: "4+ Years", certs: "AWS Security / CKA" },
                { title: "Principal API & Application Security Engineer", type: "Remote", exp: "6+ Years", certs: "OSWE / CISSP" },
                { title: "Cybersecurity Compliance Lead (SOC 2 / ISO 27001)", type: "Remote", exp: "5+ Years", certs: "CISA / QSA" }
              ].map((role, idx) => (
                <div key={idx} className="light-glass-card p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-brand-navy uppercase mb-1">{role.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-brand-navy/70 font-mono">
                      <span>• {role.type}</span>
                      <span>• {role.exp}</span>
                      <span>• {role.certs}</span>
                    </div>
                  </div>
                  <Button to="/contact" variant="navy" size="small">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. CTA BANNER (Solid Dark Navy) */}
      <CTABanner />

    </div>
  );
}
