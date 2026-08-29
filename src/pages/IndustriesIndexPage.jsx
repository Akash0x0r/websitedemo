import React from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES_DATA } from '../data/siloData';
import Breadcrumb from '../components/Breadcrumb';
import { Button, SectionHeader, CTABanner } from '../components/UIComponents';
import DynamicIcon from '../components/DynamicIcon';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function IndustriesIndexPage() {
  const breadcrumbItems = [
    { label: 'Industries' }
  ];

  return (
    <div className="w-full pt-24 sm:pt-28">
      {/* Hero */}
      <section className="bg-brand-off-white border-b border-brand-navy/10 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-light opacity-50 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} lightMode={true} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-navy/15 text-xs font-mono font-bold text-brand-navy uppercase tracking-widest mb-6 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              <span>SECTOR CYBERSECURITY ARCHITECTURE</span>
            </div>

            <h1 className="uv-heading text-3xl sm:text-5xl md:text-6xl font-bold text-brand-navy uppercase mb-6 leading-tight">
              INDUSTRIES WE SECURE
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-brand-navy/80 mb-8 leading-relaxed font-normal">
              Every vertical faces distinct adversary tactics, regulatory mandates, and architectural threats. Explore our tailored cybersecurity suites for high-growth and enterprise sectors.
            </p>

            <Button to="/request-assessment" size="large" variant="primary">
              Request Industry Scoping Call
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 sm:py-28 bg-brand-white text-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {INDUSTRIES_DATA.map((ind) => (
              <div 
                key={ind.id}
                className="light-glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group transition-all duration-200 hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-blue flex items-center justify-center mb-6 shadow-sm">
                    <DynamicIcon name={ind.icon} className="w-6 h-6" />
                  </div>

                  <h2 className="font-display font-bold text-xl sm:text-2xl text-brand-navy uppercase mb-3 group-hover:text-brand-navy-mid transition-colors">
                    {ind.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed mb-6 font-sans">
                    {ind.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-navy">Key Threat Vectors:</div>
                    {ind.risks.slice(0, 2).map((r, i) => (
                      <div key={i} className="text-xs text-brand-navy/80 flex items-start gap-1.5 font-sans">
                        <span className="text-brand-navy font-bold">›</span>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  to={ind.slug}
                  className="inline-flex items-center text-xs font-display font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-blue transition-colors gap-1 pt-4 border-t border-brand-navy/10 min-h-[44px]"
                >
                  <span>Explore {ind.title} Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
