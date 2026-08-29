import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES_DATA } from '../data/siloData';
import Breadcrumb from '../components/Breadcrumb';
import { Button, SectionHeader, StatBlock, CTABanner } from '../components/UIComponents';
import DynamicIcon from '../components/DynamicIcon';
import MethodologyTimeline from '../components/MethodologyTimeline';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ServicesPillarPage() {
  const { pillarId } = useParams();

  // Find the matching pillar data
  const pillar = SERVICES_DATA.find((p) => p.id === pillarId || p.slug.endsWith(pillarId || ''));

  // Default fallback if accessing generic /services
  const currentPillar = pillar || SERVICES_DATA[0];

  const breadcrumbItems = [
    { label: 'Services', to: '/services' },
    { label: currentPillar.title }
  ];

  return (
    <div className="w-full pt-24 sm:pt-28">
      
      {/* 1. HERO SECTION (Light-dominant Off-White Canvas with Breadcrumbs) */}
      <section className="bg-brand-off-white border-b border-brand-navy/10 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-light opacity-50 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Breadcrumb items={breadcrumbItems} lightMode={true} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-navy/15 text-xs font-mono font-bold text-brand-navy uppercase tracking-widest mb-6 shadow-sm">
                <DynamicIcon name={currentPillar.icon} className="w-3.5 h-3.5 text-brand-blue" />
                <span>OFFENSIVE SERVICE SILO</span>
              </div>

              <h1 className="uv-heading text-3xl sm:text-5xl md:text-6xl font-bold text-brand-navy uppercase mb-6 leading-tight">
                {currentPillar.title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-brand-navy/80 mb-8 leading-relaxed font-normal max-w-3xl">
                {currentPillar.overview || currentPillar.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button to="/request-assessment" size="large" variant="primary">
                  Scope {currentPillar.shortTitle} Assessment
                </Button>
                <Button to="#sub-services" size="large" variant="secondary" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('sub-services')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Explore Sub-Services
                </Button>
              </div>

            </div>

            {/* Right Metric Callout Card */}
            <div className="lg:col-span-4">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-brand-navy/10 shadow-sm hover:border-brand-blue transition-colors">
                <div className="font-mono text-xs text-brand-navy/70 font-bold uppercase tracking-widest mb-2">
                  Key Silo Benchmark
                </div>
                <div className="font-display font-extrabold text-4xl sm:text-5xl text-brand-navy mb-2">
                  {currentPillar.highlightMetric || "100%"}
                </div>
                <div className="font-display font-bold text-sm text-brand-navy uppercase mb-3">
                  {currentPillar.metricLabel || "Manual Precision"}
                </div>
                <p className="text-xs text-brand-navy/75 leading-relaxed font-sans">
                  Every vulnerability is reproduced with custom PoCs and certified with a line-by-line remediation diff.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. SUB-SERVICES GRID (Crisp White Section - True Silo Downward Interlinking) */}
      <section className="py-20 sm:py-28 bg-brand-white text-brand-navy" id="sub-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            lightMode={true}
            eyebrow="Specialized Sub-Service Domains"
            title={`${currentPillar.shortTitle.toUpperCase()} CAPABILITY MODULES`}
            description={`Select a specialized ${currentPillar.title} discipline below for dedicated scoping parameters, technical methodologies, and sample deliverable outputs.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {currentPillar.subServices.map((sub, idx) => (
              <div 
                key={sub.id}
                className="light-glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group transition-all duration-200 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono font-bold text-xs text-brand-navy uppercase tracking-widest">
                      MODULE 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-navy text-brand-white font-bold">
                      STANDARDIZED VAPT
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-brand-navy uppercase mb-3 group-hover:text-brand-navy-mid transition-colors">
                    {sub.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed mb-6 font-sans">
                    {sub.shortDesc}
                  </p>

                  <div className="p-4 rounded-xl bg-brand-off-white border border-brand-navy/10 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-1">Target Persona & Environment:</div>
                    <div className="text-xs text-brand-navy/80">{sub.whoItsFor}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-navy/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-navy/60">
                    {sub.process?.length || 5} Step Execution Flow
                  </span>
                  
                  <Link 
                    to={sub.slug}
                    className="inline-flex items-center text-xs font-display font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-blue transition-colors gap-1 min-h-[44px]"
                  >
                    <span>View Deep Dive Page</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. METHODOLOGY SNAPSHOT (Off-White Section) */}
      <section className="py-20 sm:py-28 bg-brand-off-white border-t border-brand-navy/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            lightMode={true}
            eyebrow="Execution Rigor"
            title="STANDARDIZED EXECUTION METHODOLOGY"
            description="Our structured 6-phase offensive flow ensures deep testing coverage without service disruption."
          />

          <MethodologyTimeline lightMode={true} />
        </div>
      </section>

      {/* 4. RELATED CASE STUDY & CLIENT IMPACT (Crisp White Section) */}
      <section className="py-20 sm:py-28 bg-brand-white text-brand-navy border-t border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="light-glass-card p-6 sm:p-10 md:p-12 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-navy text-brand-white text-xs font-mono uppercase font-bold tracking-widest mb-4">
                  <ShieldCheck className="w-4 h-4 text-brand-blue" />
                  <span>Featured Case Study</span>
                </div>
                <h3 className="uv-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
                  How SECERA Identified and Remediated Critical Logic Gaps for a Tier-1 Platform
                </h3>
                <p className="text-sm sm:text-base text-brand-navy/80 leading-relaxed mb-6 font-sans">
                  During an exhaustive assessment of a distributed enterprise architecture, our offensive red team identified zero-day business logic bypasses and chained permissions flaws that automated vulnerability scanners failed to flag.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="px-3 py-1.5 bg-brand-off-white border border-brand-navy/10 rounded text-xs font-mono text-brand-navy font-medium">
                    ✓ Zero-Downtime Execution
                  </span>
                  <span className="px-3 py-1.5 bg-brand-off-white border border-brand-navy/10 rounded text-xs font-mono text-brand-navy font-medium">
                    ✓ 100% Remediation Verified
                  </span>
                  <span className="px-3 py-1.5 bg-brand-off-white border border-brand-navy/10 rounded text-xs font-mono text-brand-navy font-medium">
                    ✓ Clean Attestation Issued
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 text-left lg:text-right">
                <Button to="/request-assessment" variant="navy" size="large">
                  Request Scoping Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER (Solid Dark Navy) */}
      <CTABanner 
        title={`Ready for a ${currentPillar.shortTitle} Assessment?`}
        subtitle="Speak directly with our offensive security team. Get your tailored Scope of Work and mutual NDA within 24 hours."
      />

    </div>
  );
}
