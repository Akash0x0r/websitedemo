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
    <div className="w-full pt-28">
      
      {/* 1. HERO SECTION (Dark Navy Canvas with Breadcrumbs) */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-border py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Breadcrumb items={breadcrumbItems} lightMode={false} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-mid border border-brand-blue/30 text-xs font-mono font-bold text-brand-blue uppercase tracking-widest mb-6">
                <DynamicIcon name={currentPillar.icon} className="w-3.5 h-3.5" />
                <span>OFFENSIVE SERVICE SILO</span>
              </div>

              <h1 className="uv-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-white uppercase mb-6 leading-tight">
                {currentPillar.title}
              </h1>

              <p className="text-lg md:text-xl text-brand-white-muted mb-8 leading-relaxed font-normal max-w-3xl">
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
              <div className="p-8 rounded-xl bg-brand-navy-card border border-brand-navy-border hover:border-brand-blue transition-colors">
                <div className="font-mono text-xs text-brand-blue uppercase tracking-widest mb-2">
                  Key Silo Benchmark
                </div>
                <div className="font-display font-extrabold text-5xl text-brand-blue mb-2">
                  {currentPillar.highlightMetric || "100%"}
                </div>
                <div className="font-display font-bold text-sm text-brand-white uppercase mb-4">
                  {currentPillar.metricLabel || "Manual Precision"}
                </div>
                <p className="text-xs text-brand-white-muted/80 leading-relaxed">
                  Every vulnerability is reproduced with custom PoCs and certified with a line-by-line remediation diff.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. SUB-SERVICES GRID (Alternating Crisp White Section - True Silo Downward Interlinking) */}
      <section className="py-24 md:py-32 bg-brand-white text-brand-navy" id="sub-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            lightMode={true}
            eyebrow="Specialized Sub-Service Domains"
            title={`${currentPillar.shortTitle.toUpperCase()} CAPABILITY MODULES`}
            description={`Select a specialized ${currentPillar.title} discipline below for dedicated scoping parameters, technical methodologies, and sample deliverable outputs.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentPillar.subServices.map((sub, idx) => (
              <div 
                key={sub.id}
                className="light-glass-card p-8 rounded-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono font-bold text-xs text-brand-blue-deep uppercase tracking-widest">
                      MODULE 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-navy text-brand-white">
                      STANDARDIZED VAPT
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-brand-navy uppercase mb-3 group-hover:text-brand-navy-mid transition-colors">
                    {sub.title}
                  </h3>

                  <p className="text-sm text-brand-navy-mid/80 leading-relaxed mb-6 font-sans">
                    {sub.shortDesc}
                  </p>

                  <div className="p-4 rounded-lg bg-brand-off-white border border-brand-navy/10 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-1">Target Persona & Environment:</div>
                    <div className="text-xs text-brand-navy-mid/80">{sub.whoItsFor}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-navy/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-navy-mid/60">
                    {sub.process?.length || 5} Step Execution Flow
                  </span>
                  
                  <Link 
                    to={sub.slug}
                    className="inline-flex items-center text-xs font-display font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-blue transition-colors gap-1"
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

      {/* 3. METHODOLOGY SNAPSHOT (Dark Navy Section) */}
      <section className="py-24 md:py-32 bg-brand-navy border-t border-brand-navy-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Execution Rigor"
            title="STANDARDIZED EXECUTION METHODOLOGY"
            description="Our structured 6-phase offensive flow ensures deep testing coverage without service disruption."
          />

          <MethodologyTimeline lightMode={false} />
        </div>
      </section>

      {/* 4. RELATED CASE STUDY & CLIENT IMPACT (Alternating Crisp White Section) */}
      <section className="py-24 md:py-32 bg-brand-off-white text-brand-navy border-t border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="light-glass-card p-8 sm:p-12 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-navy text-brand-blue text-xs font-mono uppercase font-bold tracking-widest mb-4">
                  <ShieldCheck className="w-4 h-4 text-brand-blue" />
                  <span>Featured Case Study</span>
                </div>
                <h3 className="uv-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
                  How SECERA Identified and Remediated Critical Logic Gaps for a Tier-1 Platform
                </h3>
                <p className="text-base text-brand-navy-mid leading-relaxed mb-6">
                  During an exhaustive assessment of a distributed enterprise architecture, our offensive red team identified zero-day business logic bypasses and chained permissions flaws that automated vulnerability scanners failed to flag.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-white border border-brand-navy/10 rounded text-xs font-mono text-brand-navy">
                    ✓ Zero-Downtime Execution
                  </span>
                  <span className="px-3 py-1 bg-white border border-brand-navy/10 rounded text-xs font-mono text-brand-navy">
                    ✓ 100% Remediation Verified
                  </span>
                  <span className="px-3 py-1 bg-white border border-brand-navy/10 rounded text-xs font-mono text-brand-navy">
                    ✓ Clean Attestation Issued
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 text-center lg:text-right">
                <Button to="/request-assessment" variant="navy" size="large">
                  Request Scoping Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <CTABanner 
        title={`Ready for a ${currentPillar.shortTitle} Assessment?`}
        subtitle="Speak directly with our offensive security team. Get your tailored Scope of Work and mutual NDA within 24 hours."
      />

    </div>
  );
}
