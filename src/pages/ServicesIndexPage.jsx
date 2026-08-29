import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/siloData';
import Breadcrumb from '../components/Breadcrumb';
import { Button, SectionHeader, CTABanner } from '../components/UIComponents';
import DynamicIcon from '../components/DynamicIcon';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ServicesIndexPage() {
  const breadcrumbItems = [
    { label: 'Services' }
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
              <span>PRACTICE AREAS & CAPABILITIES</span>
            </div>

            <h1 className="uv-heading text-3xl sm:text-5xl md:text-6xl font-bold text-brand-navy uppercase mb-6 leading-tight">
              CYBERSECURITY SERVICES SILOS
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-brand-navy/80 mb-8 leading-relaxed font-normal">
              Specialized offensive testing, vulnerability research, and continuous governance practices tailored to secure enterprise digital assets across all layers of the technology stack.
            </p>

            <Button to="/request-assessment" size="large" variant="primary">
              Scope an Engagement
            </Button>
          </div>
        </div>
      </section>

      {/* Services Silos Full Listing (Crisp White Section) */}
      <section className="py-20 sm:py-28 bg-brand-white text-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {SERVICES_DATA.map((pillar, idx) => (
            <div 
              key={pillar.id}
              className="p-6 sm:p-10 md:p-12 rounded-2xl bg-brand-off-white border border-brand-navy/10 transition-all duration-200 hover:shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Pillar Info */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-blue flex items-center justify-center shadow-sm">
                    <DynamicIcon name={pillar.icon} className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono text-brand-navy font-bold uppercase tracking-widest block">
                    PRACTICE PILLAR 0{idx + 1}
                  </span>

                  <h2 className="uv-heading text-2xl sm:text-3xl font-extrabold text-brand-navy uppercase">
                    {pillar.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed font-sans">
                    {pillar.overview || pillar.description}
                  </p>

                  <div className="pt-2">
                    <Link 
                      to={pillar.slug}
                      className="inline-flex items-center text-xs font-display font-bold uppercase tracking-wider text-brand-navy hover:text-brand-blue transition-colors gap-1 min-h-[44px]"
                    >
                      <span>Explore {pillar.shortTitle} Silo</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Sub-Services Grid */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pillar.subServices.map((sub) => (
                    <Link
                      key={sub.id}
                      to={sub.slug}
                      className="p-5 sm:p-6 rounded-xl bg-white border border-brand-navy/10 hover:border-brand-blue hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="font-display font-bold text-sm sm:text-base text-brand-navy group-hover:text-brand-blue transition-colors uppercase mb-2">
                          {sub.title}
                        </h3>
                        <p className="text-xs text-brand-navy/70 line-clamp-3 leading-relaxed mb-4 font-sans">
                          {sub.shortDesc}
                        </p>
                      </div>

                      <div className="text-[11px] font-mono text-brand-navy font-bold uppercase flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-2 border-t border-brand-navy/5">
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3 text-brand-blue" />
                      </div>
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA (Solid Dark Navy) */}
      <CTABanner />

    </div>
  );
}
