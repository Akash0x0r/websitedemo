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
    <div className="w-full pt-28">
      
      {/* 1. HERO SECTION (Dark Navy with Silo Breadcrumbs) */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-border py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} lightMode={false} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-mid border border-brand-blue/30 text-xs font-mono font-bold text-brand-blue uppercase tracking-widest mb-6">
              <Target className="w-4 h-4" />
              <span>{matchedPillar.shortTitle} SUB-SERVICE DOMAIN</span>
            </div>

            <h1 className="uv-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-white uppercase mb-6 leading-tight">
              {matchedSub.title}
            </h1>

            <p className="text-lg md:text-xl text-brand-white-muted mb-8 leading-relaxed font-normal">
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

      {/* 2. WHAT IT IS & WHO IT'S FOR (Alternating Crisp White Section) */}
      <section className="py-24 md:py-32 bg-brand-white text-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* What It Is Card */}
            <div className="light-glass-card p-8 sm:p-10 rounded-xl border border-brand-navy/10">
              <div className="w-10 h-10 rounded-lg bg-brand-navy text-brand-blue flex items-center justify-center mb-6">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight text-brand-navy mb-4">
                What It Is
              </h2>
              <p className="text-base text-brand-navy-mid leading-relaxed mb-6 font-sans">
                {matchedSub.whatItIs}
              </p>
              <div className="text-xs font-mono text-brand-blue-deep font-bold uppercase tracking-wider">
                // COMPREHENSIVE OFFENSIVE EVALUATION
              </div>
            </div>

            {/* Who It's For Card */}
            <div className="light-glass-card p-8 sm:p-10 rounded-xl border border-brand-navy/10">
              <div className="w-10 h-10 rounded-lg bg-brand-navy text-brand-blue flex items-center justify-center mb-6">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight text-brand-navy mb-4">
                Who It's For
              </h2>
              <p className="text-base text-brand-navy-mid leading-relaxed mb-6 font-sans">
                {matchedSub.whoItsFor}
              </p>
              <div className="text-xs font-mono text-brand-blue-deep font-bold uppercase tracking-wider">
                // CRITICAL ASSETS & REGULATED ENTITIES
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR PROCESS (Numbered Step Section - Dark Navy Canvas) */}
      <section className="py-24 md:py-32 bg-brand-navy-deep border-t border-brand-navy-border relative" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Systematic Execution"
            title={`STEP-BY-STEP ${matchedSub.title.toUpperCase()} PROCESS`}
            description="Our structured multi-phase assessment ensures rigorous manual coverage, zero downtime, and complete exploit verification."
          />

          <div className="space-y-6 max-w-5xl mx-auto">
            {matchedSub.process && matchedSub.process.map((step, idx) => (
              <div 
                key={idx}
                className="navy-glass-card p-6 sm:p-8 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-300 hover:border-brand-blue/60"
              >
                <div className="flex items-start sm:items-center gap-6">
                  <div className="font-mono font-extrabold text-3xl sm:text-4xl text-brand-blue flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-brand-white uppercase mb-1">
                      {step.name}
                    </h3>
                    <p className="text-sm text-brand-white-muted leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>
                </div>
                
                <span className="text-xs font-mono text-brand-blue/70 whitespace-nowrap hidden md:inline-block">
                  PHASE 0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DELIVERABLES LIST (Alternating Crisp White Section) */}
      <section className="py-24 md:py-32 bg-brand-off-white text-brand-navy border-t border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              lightMode={true}
              eyebrow="Tangible Outputs"
              title="WHAT YOU RECEIVE"
              description="Clear, actionable, and engineer-ready deliverables designed for both C-level executives and hands-on developers."
            />

            <div className="space-y-4">
              {matchedSub.deliverables && matchedSub.deliverables.map((item, i) => (
                <div 
                  key={i}
                  className="p-6 rounded-lg bg-white border border-brand-navy/10 flex items-start gap-4 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-blue-deep flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-display font-bold text-base text-brand-navy uppercase mb-1">
                      {item}
                    </div>
                    <p className="text-xs text-brand-navy-mid/70">
                      Standardized format compatible with Jira, GitHub Issues, and board attestation presentations.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-brand-navy text-brand-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-display font-bold text-sm uppercase text-brand-blue">
                  Need a Sample Sanitized Report?
                </div>
                <div className="text-xs text-brand-white-muted">
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

      {/* 5. FAQ ACCORDION (Dark Navy Canvas) */}
      {matchedSub.faqs && matchedSub.faqs.length > 0 && (
        <section className="py-24 md:py-32 bg-brand-navy border-t border-brand-navy-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              centered={true}
              eyebrow="Frequently Asked Questions"
              title={`${matchedSub.title.toUpperCase()} FAQ`}
              description="Common scoping, execution, and timing questions."
            />

            <Accordion items={matchedSub.faqs} lightMode={false} />
          </div>
        </section>
      )}

      {/* 6. CTA BANNER */}
      <CTABanner 
        title={`Request a ${matchedSub.title} Quote`}
        subtitle="Schedule your initial technical scoping call. Receive a tailored scope document, timeline, and pricing within 24 hours."
      />

    </div>
  );
}
