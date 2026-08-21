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
    <div className="w-full pt-28">
      
      {/* Hero */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-border py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} lightMode={false} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-mid border border-brand-blue/30 text-xs font-mono font-bold text-brand-blue uppercase tracking-widest mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>PRACTICE AREAS & CAPABILITIES</span>
            </div>

            <h1 className="uv-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-white uppercase mb-6 leading-tight">
              CYBERSECURITY SERVICES SILOS
            </h1>

            <p className="text-lg md:text-xl text-brand-white-muted mb-8 leading-relaxed font-normal">
              Specialized offensive testing, vulnerability research, and continuous governance practices tailored to secure enterprise digital assets across all layers of the technology stack.
            </p>

            <Button to="/request-assessment" size="large" variant="primary">
              Scope an Engagement
            </Button>
          </div>
        </div>
      </section>

      {/* Services Silos Full Listing (Alternating Crisp White Section) */}
      <section className="py-24 md:py-32 bg-brand-white text-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((pillar, idx) => (
            <div 
              key={pillar.id}
              className="p-8 sm:p-12 rounded-2xl bg-brand-off-white border border-brand-navy/10 transition-all duration-300 hover:shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Pillar Info */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-navy text-brand-blue flex items-center justify-center">
                    <DynamicIcon name={pillar.icon} className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono text-brand-blue-deep font-bold uppercase tracking-widest">
                    PRACTICE PILLAR 0{idx + 1}
                  </span>

                  <h2 className="uv-heading text-3xl font-extrabold text-brand-navy uppercase">
                    {pillar.title}
                  </h2>

                  <p className="text-sm text-brand-navy-mid leading-relaxed font-sans">
                    {pillar.overview || pillar.description}
                  </p>

                  <div className="pt-2">
                    <Link 
                      to={pillar.slug}
                      className="inline-flex items-center text-xs font-display font-bold uppercase tracking-wider text-brand-navy hover:text-brand-blue transition-colors gap-1"
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
                      className="p-6 rounded-xl bg-white border border-brand-navy/10 hover:border-brand-blue hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="font-display font-bold text-base text-brand-navy group-hover:text-brand-blue transition-colors uppercase mb-2">
                          {sub.title}
                        </h3>
                        <p className="text-xs text-brand-navy-mid/70 line-clamp-3 leading-relaxed mb-4">
                          {sub.shortDesc}
                        </p>
                      </div>

                      <div className="text-[11px] font-mono text-brand-blue-deep font-bold uppercase flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTABanner />

    </div>
  );
}
