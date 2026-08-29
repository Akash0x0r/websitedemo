import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/siloData';
import Breadcrumb from '../components/Breadcrumb';
import { Button, SectionHeader, CTABanner, Accordion } from '../components/UIComponents';
import { Shield, CheckCircle2, FileText, ArrowRight, Lock, Target, HelpCircle } from 'lucide-react';

export default function SubServicePage() {
  const { pillarId, subServiceId } = useParams();

  // Look up pillar and sub-service
  let matchedPillar = SERVICES_DATA.find((p) => p.id === pillarId || p.slug.includes(pillarId || ''));
  if (!matchedPillar) {
    matchedPillar = SERVICES_DATA[0];
  }

  let matchedSub = matchedPillar.subServices.find((s) => s.id === subServiceId || s.slug.includes(subServiceId || ''));
  if (!matchedSub) {
    matchedSub = matchedPillar.subServices[0];
  }

  const breadcrumbItems = [
    { label: 'Services', to: '/services' },
    { label: matchedPillar.title, to: matchedPillar.slug },
    { label: matchedSub.title }
  ];

  return (
    <div className="w-full pt-24 sm:pt-28">
      
      {/* 1. HERO SECTION (Light-dominant Off-White with Silo Breadcrumbs) */}
      <section className="bg-brand-off-white border-b border-brand-navy/10 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-light opacity-50 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} lightMode={true} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-navy/15 text-xs font-mono font-bold text-brand-navy uppercase tracking-widest mb-6 shadow-sm">
              <Target className="w-4 h-4 text-brand-blue" />
              <span>{matchedPillar.shortTitle} SUB-SERVICE DOMAIN</span>
            </div>

            <h1 className="uv-heading text-3xl sm:text-5xl md:text-6xl font-bold text-brand-navy uppercase mb-6 leading-tight">
              {matchedSub.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-brand-navy/80 mb-8 leading-relaxed font-normal">
              {matchedSub.shortDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button to="/request-assessment" size="large" variant="primary">
                Request Assessment Scope
              </Button>
              <Button to="#process" size="large" variant="secondary" onClick={(e) => {
                e.preventDefault();
                document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                View Process & Deliverables
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IT IS & WHO IT'S FOR (Crisp White Section) */}
      <section className="py-20 sm:py-28 bg-brand-white text-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* What It Is Card */}
            <div className="light-glass-card p-6 sm:p-10 rounded-2xl border border-brand-navy/10">
              <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-blue flex items-center justify-center mb-6 shadow-sm">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-brand-navy mb-4">
                What It Is
              </h2>
              <p className="text-sm sm:text-base text-brand-navy/80 leading-relaxed mb-6 font-sans">
                {matchedSub.whatItIs}
              </p>
              <div className="text-xs font-mono text-brand-navy font-bold uppercase tracking-wider">
                // COMPREHENSIVE OFFENSIVE EVALUATION
              </div>
            </div>

            {/* Who It's For Card */}
            <div className="light-glass-card p-6 sm:p-10 rounded-2xl border border-brand-navy/10">
              <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-blue flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-brand-navy mb-4">
                Who It's For
              </h2>
              <p className="text-sm sm:text-base text-brand-navy/80 leading-relaxed mb-6 font-sans">
                {matchedSub.whoItsFor}
              </p>
              <div className="text-xs font-mono text-brand-navy font-bold uppercase tracking-wider">
                // CRITICAL ASSETS & REGULATED ENTITIES
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR PROCESS (Numbered Step Section - Off-White Canvas) */}
      <section className="py-20 sm:py-28 bg-brand-off-white border-t border-brand-navy/10 relative" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            lightMode={true}
            eyebrow="Systematic Execution"
            title={`STEP-BY-STEP ${matchedSub.title.toUpperCase()} PROCESS`}
            description="Our structured multi-phase assessment ensures rigorous manual coverage, zero downtime, and complete exploit verification."
          />

          <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
            {matchedSub.process && matchedSub.process.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white border border-brand-navy/10 hover:border-brand-blue/60 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 shadow-sm transition-all duration-200"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                  <div className="font-mono font-extrabold text-3xl sm:text-4xl text-brand-navy flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-brand-navy uppercase mb-1">
                      {step.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>
                </div>
                
                <span className="text-xs font-mono text-brand-navy/60 font-bold whitespace-nowrap hidden md:inline-block">
                  PHASE 0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DELIVERABLES LIST (Crisp White Section) */}
      <section className="py-20 sm:py-28 bg-brand-white text-brand-navy border-t border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              lightMode={true}
              eyebrow="Tangible Outputs"
              title="WHAT YOU RECEIVE"
              description="Clear, actionable, and engineer-ready deliverables designed for both C-level executives and hands-on developers."
            />

            <div className="space-y-3 sm:space-y-4">
              {matchedSub.deliverables && matchedSub.deliverables.map((item, i) => (
                <div 
                  key={i}
                  className="p-5 sm:p-6 rounded-xl bg-brand-off-white border border-brand-navy/10 flex items-start gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-display font-bold text-sm sm:text-base text-brand-navy uppercase mb-1">
                      {item}
                    </div>
                    <p className="text-xs text-brand-navy/70 font-sans">
                      Standardized format compatible with Jira, GitHub Issues, and board attestation presentations.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-brand-navy text-brand-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-display font-bold text-sm uppercase text-brand-blue mb-1">
                  Need a Sample Sanitized Report?
                </div>
                <div className="text-xs text-brand-white-muted font-sans">
                  Request a redacted vulnerability report demonstrating our CVSS breakdown and PoC quality.
                </div>
              </div>
              <Button to="/contact" variant="primary" size="small">
                Request Sample
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ ACCORDION (Off-White Canvas) */}
      {matchedSub.faqs && matchedSub.faqs.length > 0 && (
        <section className="py-20 sm:py-28 bg-brand-off-white border-t border-brand-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              centered={true}
              lightMode={true}
              eyebrow="Frequently Asked Questions"
              title={`${matchedSub.title.toUpperCase()} FAQ`}
              description="Common scoping, execution, and timing questions."
            />

            <Accordion items={matchedSub.faqs} lightMode={true} />
          </div>
        </section>
      )}

      {/* 6. CTA BANNER (Solid Dark Navy) */}
      <CTABanner 
        title={`Request a ${matchedSub.title} Quote`}
        subtitle="Schedule your initial technical scoping call. Receive a tailored scope document, timeline, and pricing within 24 hours."
      />

    </div>
  );
}
