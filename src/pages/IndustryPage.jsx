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
    <div className="w-full pt-24 sm:pt-28">
      
      {/* 1. HERO SECTION (Industry-specific risk framing - Light Off-White) */}
      <section className="bg-brand-off-white border-b border-brand-navy/10 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-light opacity-50 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} lightMode={true} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-navy/15 text-xs font-mono font-bold text-brand-navy uppercase tracking-widest mb-6 shadow-sm">
                <DynamicIcon name={industry.icon} className="w-4 h-4 text-brand-blue" />
                <span>SECTOR CYBERSECURITY ARCHITECTURE</span>
              </div>

              <h1 className="uv-heading text-3xl sm:text-5xl md:text-6xl font-bold text-brand-navy uppercase mb-6 leading-tight">
                {industry.heroHeadline || industry.title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-brand-navy/80 mb-8 leading-relaxed font-normal max-w-3xl">
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
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-brand-navy/10 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-navy font-bold uppercase tracking-widest mb-4">
                  <AlertTriangle className="w-4 h-4 text-brand-blue" />
                  <span>Key Threat Landscape</span>
                </div>
                <ul className="space-y-3">
                  {industry.risks.map((risk, i) => (
                    <li key={i} className="text-xs text-brand-navy/80 flex items-start gap-2 leading-relaxed font-sans">
                      <span className="text-brand-navy font-bold">›</span>
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RELEVANT SERVICES (Auto-pulled from Services Silo - Crisp White Section) */}
      <section className="py-20 sm:py-28 bg-brand-white text-brand-navy" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            lightMode={true}
            eyebrow="Recommended Defensive Suite"
            title={`TAILORED SERVICES FOR ${industry.title.toUpperCase()}`}
            description="Our offensive testing modules targeted specifically to address the risk profiles and infrastructure patterns of this sector."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industry.recommendedServices.map((serviceName, idx) => (
              <div 
                key={idx}
                className="light-glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group transition-all duration-200 hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-blue flex items-center justify-center mb-6 shadow-sm">
                    <Shield className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-brand-navy uppercase mb-3 group-hover:text-brand-navy-mid transition-colors">
                    {serviceName}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed mb-6 font-sans">
                    Rigorous manual assessment designed to satisfy compliance requirements and protect mission-critical sector data.
                  </p>
                </div>

                <Link 
                  to="/services" 
                  className="inline-flex items-center text-xs font-display font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-blue transition-colors gap-1 pt-4 border-t border-brand-navy/10 min-h-[44px]"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPLIANCE RELEVANT TO INDUSTRY (Off-White Canvas) */}
      <section className="py-20 sm:py-28 bg-brand-off-white border-t border-brand-navy/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            lightMode={true}
            eyebrow="Regulatory Alignment"
            title="MANDATORY STANDARDS & AUDIT READINESS"
            description="SECERA attestation reports are structured to meet the strict demands of global cybersecurity compliance authorities."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white border border-brand-navy/10 p-6 rounded-2xl shadow-sm">
              <div className="font-display font-extrabold text-lg text-brand-navy uppercase mb-2">SOC 2 Type II</div>
              <p className="text-xs text-brand-navy/80 leading-relaxed font-sans">
                Mandatory Trust Services Criteria security and availability penetration testing reports.
              </p>
            </div>
            <div className="bg-white border border-brand-navy/10 p-6 rounded-2xl shadow-sm">
              <div className="font-display font-extrabold text-lg text-brand-navy uppercase mb-2">ISO 27001:2022</div>
              <p className="text-xs text-brand-navy/80 leading-relaxed font-sans">
                Annex A.8.8 Technical Vulnerability Management verification and continuous risk audit.
              </p>
            </div>
            <div className="bg-white border border-brand-navy/10 p-6 rounded-2xl shadow-sm">
              <div className="font-display font-extrabold text-lg text-brand-navy uppercase mb-2">PCI DSS v4.0.1</div>
              <p className="text-xs text-brand-navy/80 leading-relaxed font-sans">
                Requirement 11.4 external and internal penetration testing + segmentation validation.
              </p>
            </div>
            <div className="bg-white border border-brand-navy/10 p-6 rounded-2xl shadow-sm">
              <div className="font-display font-extrabold text-lg text-brand-navy uppercase mb-2">GDPR / Data Privacy</div>
              <p className="text-xs text-brand-navy/80 leading-relaxed font-sans">
                Article 32 Security of Processing technical measures and encryption verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CASE STUDY HIGHLIGHT (Crisp White Section) */}
      <section className="py-20 sm:py-28 bg-brand-white text-brand-navy border-t border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="light-glass-card p-6 sm:p-10 md:p-12 rounded-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-navy font-bold uppercase tracking-widest mb-3">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              <span>INDUSTRY ATTESTATION HIGHLIGHT</span>
            </div>
            <h3 className="uv-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
              Real-World Impact in {industry.title}
            </h3>
            <p className="text-sm sm:text-base text-brand-navy/80 leading-relaxed mb-6 max-w-4xl font-sans">
              {industry.caseStudySnippet}
            </p>
            <div className="pt-4 border-t border-brand-navy/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-brand-navy/70">
                100% Confidential • Redacted Case Study Available on Request
              </div>
              <Button to="/request-assessment" variant="navy" size="default">
                Request Assessment for {industry.title}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER (Solid Dark Navy) */}
      <CTABanner 
        title={`Secure Your ${industry.title} Infrastructure`}
        subtitle="Speak with our dedicated industry security specialists. Get your custom scope and quotation in 24 hours."
      />

    </div>
  );
}
