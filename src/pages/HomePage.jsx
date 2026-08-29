import React from 'react';
import { Link } from 'react-router-dom';
import CyberHeroCanvas from '../components/CyberHeroCanvas';
import { Button, SectionHeader, StatBlock, CTABanner, Accordion } from '../components/UIComponents';
import MethodologyTimeline from '../components/MethodologyTimeline';
import Carousel from '../components/Carousel';
import DynamicIcon from '../components/DynamicIcon';
import { SERVICES_DATA, INDUSTRIES_DATA, STATS_DATA, TESTIMONIALS_DATA, BLOG_POSTS, FAQS_HOMEPAGE } from '../data/siloData';
import { Shield, ShieldAlert, ArrowRight, CheckCircle2, Lock, Terminal, Activity, FileCheck2, Award, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full">
      
      {/* 1. FULL-BLEED CINEMATIC HERO (Light-dominant, High-Trust) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-off-white pt-24 sm:pt-28 pb-16">
        {/* Background Cyber Mesh Animation (Light Canvas) */}
        <CyberHeroCanvas />

        {/* Foreground Content with High-Trust Navy Typography */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 pb-10">
          
          {/* Top Pill / Trust Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-navy/15 text-brand-navy text-xs font-mono font-bold tracking-widest uppercase mb-6 sm:mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />
            <span>Offensive Security & Manual Penetration Testing</span>
          </div>

          {/* Large Bold Headline (Ultraviolette bold condensed aesthetic in Navy) */}
          <h1 className="uv-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-brand-navy tracking-tight mb-6 leading-none">
            UNCOMPROMISING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-navy-mid to-brand-blue">
              CYBER DEFENSE
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-brand-navy/80 mb-8 sm:mb-10 leading-relaxed font-normal">
            SECERA delivers elite offensive security assessments, manual VAPT, cloud infrastructure hardening, and continuous audit readiness for fast-moving enterprise engineering teams.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-12 sm:mb-16">
            <Button to="/request-assessment" size="large" variant="primary">
              Request Security Assessment
            </Button>
            <Button to="/services" size="large" variant="secondary">
              Explore 6 Service Pillars
            </Button>
          </div>

          {/* Trust Metrics Spec Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto p-4 sm:p-6 bg-white rounded-2xl border border-brand-navy/10 shadow-sm">
            <div className="text-left p-2 sm:p-3 border-r border-brand-navy/10 last:border-none">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">500+</div>
              <div className="text-xs uppercase tracking-wider text-brand-navy/80 font-bold">Assessments Delivered</div>
            </div>
            <div className="text-left p-2 sm:p-3 border-r border-brand-navy/10 last:border-none">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">100%</div>
              <div className="text-xs uppercase tracking-wider text-brand-navy/80 font-bold">Manual Logic Audit</div>
            </div>
            <div className="text-left p-2 sm:p-3 border-r border-brand-navy/10 last:border-none">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">24h</div>
              <div className="text-xs uppercase tracking-wider text-brand-navy/80 font-bold">Scoping & NDA SLA</div>
            </div>
            <div className="text-left p-2 sm:p-3">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">0-Cost</div>
              <div className="text-xs uppercase tracking-wider text-brand-navy/80 font-bold">60-Day Re-Testing</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. STAT CALLOUT BLOCKS (Ultraviolette spec blocks - Light Background) */}
      <section className="py-16 sm:py-24 bg-brand-white border-b border-brand-navy/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            lightMode={true}
            eyebrow="Engineered Precision"
            title="OFFENSIVE METRICS THAT DEFINE RESILIENCE"
            description="We discard automated scanner dumps in favor of deep-dive human exploitation targeting complex multi-step vulnerabilities."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {STATS_DATA.map((stat, i) => (
              <StatBlock
                key={i}
                value={stat.value}
                label={stat.label}
                desc={stat.desc}
                lightMode={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW (Light Section - Off-White Surface) */}
      <section className="py-20 sm:py-28 bg-brand-off-white text-brand-navy relative" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            lightMode={true}
            eyebrow="Core Practice Areas"
            title="SIX SPECIALIZED OFFENSIVE PILLARS"
            description="Every security domain requires specialized researchers. Our siloed practice groups provide exhaustive coverage from code to cloud."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_DATA.slice(0, 6).map((pillar) => (
              <div 
                key={pillar.id}
                className="light-glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-200 group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-blue flex items-center justify-center mb-6 group-hover:bg-brand-navy-mid transition-colors shadow-sm">
                    <DynamicIcon name={pillar.icon} className="w-6 h-6" />
                  </div>

                  <div className="text-xs font-mono font-bold text-brand-navy uppercase tracking-widest mb-1">
                    {pillar.shortTitle}
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-navy mb-3 group-hover:text-brand-navy-mid transition-colors uppercase">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed mb-6 font-sans">
                    {pillar.description}
                  </p>

                  <div className="space-y-1.5 pt-4 border-t border-brand-navy/10 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">Key Focus Areas:</div>
                    {pillar.subServices.slice(0, 3).map((sub) => (
                      <div key={sub.id} className="text-xs text-brand-navy/80 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                        <span className="line-clamp-1">{sub.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link 
                    to={pillar.slug}
                    className="inline-flex items-center text-xs font-display font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-blue transition-colors gap-1 min-h-[44px]"
                  >
                    <span>Inspect Pillar Capabilities</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <Button to="/services" variant="navy" size="large">
              View Complete Services Silo & Architecture
            </Button>
          </div>

        </div>
      </section>

      {/* 4. OUR METHODOLOGY (Light Section with interactive 6-step stepper) */}
      <section className="py-20 sm:py-28 bg-brand-white border-t border-brand-navy/10 relative overflow-hidden" id="methodology">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            lightMode={true}
            eyebrow="Adversary Emulation Protocol"
            title="OUR 6-STEP OFFENSIVE METHODOLOGY"
            description="A battle-proven framework aligning NIST SP 800-115, OWASP ASVS, and MITRE ATT&CK techniques with zero blind spots."
          />

          <MethodologyTimeline lightMode={true} />
        </div>
      </section>

      {/* 5. INDUSTRIES SERVED (Off-White Section with Horizontal Carousel) */}
      <section className="py-20 sm:py-28 bg-brand-off-white text-brand-navy border-t border-brand-navy/10 relative overflow-hidden" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel
            eyebrow="Sector-Specific Threat Modeling"
            title="INDUSTRIES WE SECURE"
            lightMode={true}
          >
            {INDUSTRIES_DATA.map((ind) => (
              <div 
                key={ind.id}
                className="flex-shrink-0 w-72 sm:w-88 md:w-96 light-glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between snap-start"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-blue flex items-center justify-center mb-6 shadow-sm">
                    <DynamicIcon name={ind.icon} className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-brand-navy uppercase mb-3">
                    {ind.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed mb-6 font-sans">
                    {ind.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-navy">Primary Risk Vectors:</div>
                    {ind.risks.slice(0, 2).map((r, idx) => (
                      <div key={idx} className="text-xs text-brand-navy/80 flex items-start gap-2">
                        <span className="text-brand-navy font-bold">›</span>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  to={ind.slug}
                  className="inline-flex items-center text-xs font-display font-bold uppercase tracking-wider text-brand-navy hover:text-brand-blue transition-colors gap-1 pt-4 border-t border-brand-navy/10 min-h-[44px]"
                >
                  <span>Explore {ind.title} Defense</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* 6. CASE STUDIES & TESTIMONIALS (Crisp White Section with Carousel) */}
      <section className="py-20 sm:py-28 bg-brand-white border-t border-brand-navy/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel
            eyebrow="Verified Client Impact"
            title="ENTERPRISE CASE STUDIES & ATTESTATIONS"
            lightMode={true}
          >
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0 w-72 sm:w-96 md:w-[460px] light-glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between snap-start"
              >
                <div>
                  <div className="flex items-center gap-1 text-brand-blue mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-brand-blue text-sm">★</span>
                    ))}
                  </div>
                  <blockquote className="text-sm sm:text-base text-brand-navy leading-relaxed mb-8 italic font-sans">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-brand-navy/10 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="font-display font-bold text-sm text-brand-navy uppercase">
                      {t.author}
                    </div>
                    <div className="text-xs text-brand-navy/70 font-mono">
                      {t.role} • {t.company}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-1 bg-brand-off-white rounded border border-brand-navy/15 text-brand-navy font-bold">
                    {t.industry}
                  </span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* 7. VULNERABILITY RESEARCH TEASER (Off-White Section) */}
      <section className="py-20 sm:py-28 bg-brand-off-white text-brand-navy border-t border-brand-navy/10" id="resources">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
            <SectionHeader
              lightMode={true}
              eyebrow="Intelligence & Engineering Insights"
              title="LATEST VULNERABILITY RESEARCH"
              description="Deep-dive architectural breakdowns, exploit analyses, and compliance playbooks authored by our offensive security team."
              className="mb-0"
            />
            <div className="mt-4 md:mt-0">
              <Button to="/resources/blog" variant="navy" size="default">
                View All Research Articles
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {BLOG_POSTS.map((post) => (
              <article 
                key={post.id}
                className="light-glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-200 hover:-translate-y-1"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between text-xs font-mono text-brand-navy font-bold mb-3">
                    <span className="line-clamp-1">{post.category}</span>
                    <span className="text-brand-navy/60 whitespace-nowrap ml-2">{post.readTime}</span>
                  </div>

                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-brand-navy uppercase mb-3 group-hover:text-brand-navy-mid transition-colors leading-snug">
                    <Link to={post.slug}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed mb-6 font-sans line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-brand-navy/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-navy/70">
                    By {post.author}
                  </span>
                  <Link 
                    to={post.slug}
                    className="inline-flex items-center text-xs font-display font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-blue transition-colors min-h-[44px]"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS (Crisp White Section) */}
      <section className="py-20 sm:py-28 bg-brand-white border-t border-brand-navy/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            centered={true}
            lightMode={true}
            eyebrow="Answers & Clarifications"
            title="COMMONLY ASKED QUESTIONS"
            description="Everything you need to know about our offensive scoping, non-destructive methodologies, and re-testing guarantees."
          />

          <Accordion items={FAQS_HOMEPAGE} lightMode={true} />
        </div>
      </section>

      {/* 9. FINAL CTA BANNER (Solid Dark Navy) */}
      <CTABanner />

    </div>
  );
}
