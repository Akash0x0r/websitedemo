import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { INDUSTRIES_DATA, SERVICES_DATA } from '../data/siloData';
import Breadcrumb from '../components/Breadcrumb';
import { Button, SectionHeader, CTABanner } from '../components/UIComponents';
import DynamicIcon from '../components/DynamicIcon';
import { Shield, AlertTriangle, FileCheck2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function IndustryPage() {
  const { industryId } = useParams();

  const industry = INDUSTRIES_DATA.find((ind) => ind.id === industryId || ind.slug.endsWith(industryId || '')) || INDUSTRIES_DATA[0];

  const breadcrumbItems = [
    { label: 'Industries', to: '/industries' },
    { label: industry.title }
  ];

  return (
    <div className="w-full pt-28">
      
      {/* 1. HERO SECTION (Industry-specific risk framing - Dark Navy) */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-border py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} lightMode={false} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-mid border border-brand-blue/30 text-xs font-mono font-bold text-brand-blue uppercase tracking-widest mb-6">
                <DynamicIcon name={industry.icon} className="w-4 h-4" />
                <span>SECTOR CYBERSECURITY ARCHITECTURE</span>
              </div>

              <h1 className="uv-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-white uppercase mb-6 leading-tight">
                {industry.heroHeadline || industry.title}
              </h1>

              <p className="text-lg md:text-xl text-brand-white-muted mb-8 leading-relaxed font-normal max-w-3xl">
                {industry.summary}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button to="/request-assessment" size="large" variant="primary">
                  Request {industry.title} Assessment
                </Button>
                <Button to="#services" size="large" variant="secondary" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  View Recommended Services
                </Button>
              </div>
            </div>

            {/* Right Threat Summary Card */}
            <div className="lg:col-span-4">
              <div className="p-8 rounded-xl bg-brand-navy-card border border-brand-navy-border">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-blue uppercase tracking-widest mb-4">
                  <AlertTriangle className="w-4 h-4 text-brand-blue" />
                  <span>Key Threat Landscape</span>
                </div>
                <ul className="space-y-3">
                  {industry.risks.map((risk, i) => (
                    <li key={i} className="text-xs text-brand-white-muted flex items-start gap-2 leading-relaxed">
                      <span className="text-brand-blue font-bold">›</span>
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RELEVANT SERVICES (Auto-pulled from Services Silo - Alternating Light Section) */}
      <section className="py-24 md:py-32 bg-brand-white text-brand-navy" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            lightMode={true}
            eyebrow="Recommended Defensive Suite"
            title={`TAILORED SERVICES FOR ${industry.title.toUpperCase()}`}
            description="Our offensive testing modules targeted specifically to address the risk profiles and infrastructure patterns of this sector."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industry.recommendedServices.map((serviceName, idx) => (
              <div 
                key={idx}
                className="light-glass-card p-8 rounded-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand-navy text-brand-blue flex items-center justify-center mb-6">
                    <Shield className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-brand-navy uppercase mb-3 group-hover:text-brand-navy-mid transition-colors">
                    {serviceName}
                  </h3>

                  <p className="text-xs text-brand-navy-mid/80 leading-relaxed mb-6 font-sans">
                    Rigorous manual assessment designed to satisfy compliance requirements and protect mission-critical sector data.
                  </p>
                </div>

                <Link 
                  to="/services" 
                  className="inline-flex items-center text-xs font-display font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-blue transition-colors gap-1 pt-4 border-t border-brand-navy/10"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPLIANCE RELEVANT TO INDUSTRY (Dark Navy Canvas) */}
      <section className="py-24 md:py-32 bg-brand-navy border-t border-brand-navy-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Regulatory Alignment"
            title="MANDATORY STANDARDS & AUDIT READINESS"
            description="SECERA attestation reports are structured to meet the strict demands of global cybersecurity compliance authorities."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="navy-glass-card p-6 rounded-lg">
              <div className="font-display font-extrabold text-xl text-brand-white uppercase mb-2">SOC 2 Type II</div>
              <p className="text-xs text-brand-white-muted leading-relaxed">
                Mandatory Trust Services Criteria security and availability penetration testing reports.
              </p>
            </div>
            <div className="navy-glass-card p-6 rounded-lg">
              <div className="font-display font-extrabold text-xl text-brand-white uppercase mb-2">ISO 27001:2022</div>
              <p className="text-xs text-brand-white-muted leading-relaxed">
                Annex A.8.8 Technical Vulnerability Management verification and continuous risk audit.
              </p>
            </div>
            <div className="navy-glass-card p-6 rounded-lg">
              <div className="font-display font-extrabold text-xl text-brand-white uppercase mb-2">PCI DSS v4.0.1</div>
              <p className="text-xs text-brand-white-muted leading-relaxed">
                Requirement 11.4 external and internal penetration testing + segmentation validation.
              </p>
            </div>
            <div className="navy-glass-card p-6 rounded-lg">
              <div className="font-display font-extrabold text-xl text-brand-white uppercase mb-2">GDPR / Data Privacy</div>
              <p className="text-xs text-brand-white-muted leading-relaxed">
                Article 32 Security of Processing technical measures and encryption verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CASE STUDY HIGHLIGHT (Alternating Crisp White Section) */}
      <section className="py-24 md:py-32 bg-brand-off-white text-brand-navy border-t border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="light-glass-card p-8 sm:p-12 rounded-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-blue-deep font-bold uppercase tracking-widest mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>INDUSTRY ATTESTATION HIGHLIGHT</span>
            </div>
            <h3 className="uv-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
              Real-World Impact in {industry.title}
            </h3>
            <p className="text-base text-brand-navy-mid leading-relaxed mb-6 max-w-4xl">
              {industry.caseStudySnippet}
            </p>
            <div className="pt-4 border-t border-brand-navy/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-brand-navy-mid/70">
                100% Confidential • Redacted Case Study Available on Request
              </div>
              <Button to="/request-assessment" variant="navy" size="default">
                Request Assessment for {industry.title}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <CTABanner 
        title={`Secure Your ${industry.title} Infrastructure`}
        subtitle="Speak with our dedicated industry security specialists. Get your custom scope and quotation in 24 hours."
      />

    </div>
  );
}
