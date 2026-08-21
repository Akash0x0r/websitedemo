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
      
      {/* 1. FULL-BLEED CINEMATIC HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-brand-navy pt-24 pb-16">
        {/* Background Cyber Mesh Animation */}
        <CyberHeroCanvas />

        {/* Foreground Content with High-Trust Typography */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12">
          
          {/* Top Pill / Trust Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy-card/90 border border-brand-blue/40 text-brand-blue text-xs font-mono font-bold tracking-widest uppercase mb-8 shadow-glow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />
            <span>Offensive Security & Manual Penetration Testing</span>
          </div>

          {/* Large Bold Headline (Ultraviolette bold condensed aesthetic) */}
          <h1 className="uv-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-white tracking-tight mb-6 leading-none">
            UNCOMPROMISING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blue-light to-white">
              CYBER DEFENSE
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-brand-white-muted mb-10 leading-relaxed font-normal">
            SECERA delivers elite offensive security assessments, manual VAPT, cloud infrastructure hardening, and continuous audit readiness for fast-moving enterprise engineering teams.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
            <Button to="/request-assessment" size="large" variant="primary">
              Request Security Assessment
            </Button>
            <Button to="/services" size="large" variant="secondary">
              Explore 6 Service Pillars
            </Button>
          </div>

          {/* Trust Metrics Spec Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8 border-t border-brand-navy-border/60">
            <div className="text-left p-3">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-brand-blue">500+</div>
              <div className="text-xs uppercase tracking-wider text-brand-white font-bold">Assessments Delivered</div>
            </div>
            <div className="text-left p-3">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-brand-blue">100%</div>
              <div className="text-xs uppercase tracking-wider text-brand-white font-bold">Manual Logic Audit</div>
            </div>
            <div className="text-left p-3">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-brand-blue">24h</div>
              <div className="text-xs uppercase tracking-wider text-brand-white font-bold">Scoping & NDA SLA</div>
            </div>
            <div className="text-left p-3">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-brand-blue">0-Cost</div>
              <div className="text-xs uppercase tracking-wider text-brand-white font-bold">60-Day Re-Testing</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. STAT CALLOUT BLOCKS (Ultraviolette spec blocks - Dark Navy) */}
      <section className="py-20 md:py-28 bg-brand-navy-deep border-b border-brand-navy-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Engineered Precision"
            title="OFFENSIVE METRICS THAT DEFINE RESILIENCE"
            description="We discard automated scanner dumps in favor of deep-dive human exploitation targeting complex multi-step vulnerabilities."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STATS_DATA.map((stat, i) => (
              <StatBlock
                key={i}
                value={stat.value}
                label={stat.label}
                desc={stat.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW (Alternating Light Section - Crisp White) */}
      <section className="py-24 md:py-32 bg-brand-off-white text-brand-navy relative" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            lightMode={true}
            eyebrow="Core Practice Areas"
            title="SIX SPECIALIZED OFFENSIVE PILLARS"
            description="Every security domain requires specialized researchers. Our siloed practice groups provide exhaustive coverage from code to cloud."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 6).map((pillar) => (
              <div 
                key={pillar.id}
                className="light-glass-card p-8 rounded-xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-navy text-brand-blue flex items-center justify-center mb-6 group-hover:bg-brand-navy-mid transition-colors">
                    <DynamicIcon name={pillar.icon} className="w-6 h-6" />
                  </div>

                  <div className="text-xs font-mono font-bold text-brand-blue uppercase tracking-widest mb-1">
                    {pillar.shortTitle}
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-brand-navy mb-3 group-hover:text-brand-navy-mid transition-colors uppercase">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-brand-navy-mid/80 leading-relaxed mb-6 font-sans">
                    {pillar.description}
                  </p>

                  <div className="space-y-1.5 pt-4 border-t border-brand-navy/10 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">Key Focus Areas:</div>
                    {pillar.subServices.slice(0, 3).map((sub) => (
                      <div key={sub.id} className="text-xs text-brand-navy-mid flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                        <span className="line-clamp-1">{sub.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link 
                    to={pillar.slug}
                    className="inline-flex items-center text-xs font-display font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-blue transition-colors gap-1"
                  >
                    <span>Inspect Pillar Capabilities</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/services" variant="navy" size="large">
              View Complete Services Silo & Architecture
            </Button>
          </div>

        </div>
      </section>

      {/* 4. OUR METHODOLOGY (Dark Navy Section with interactive 6-step stepper) */}
      <section className="py-24 md:py-32 bg-brand-navy border-t border-brand-navy-border relative overflow-hidden" id="methodology">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Adversary Emulation Protocol"
            title="OUR 6-STEP OFFENSIVE METHODOLOGY"
            description="A battle-proven framework aligning NIST SP 800-115, OWASP ASVS, and MITRE ATT&CK techniques with zero blind spots."
          />

          <MethodologyTimeline lightMode={false} />
        </div>
      </section>

      {/* 5. INDUSTRIES SERVED (Alternating Crisp White Section with Horizontal Carousel) */}
      <section className="py-24 md:py-32 bg-brand-white text-brand-navy border-t border-brand-navy/10 relative overflow-hidden" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel
            eyebrow="Sector-Specific Threat Modeling"
            title="INDUSTRIES WE SECURE"
            lightMode={true}
          >
            {INDUSTRIES_DATA.map((ind) => (
              <div 
                key={ind.id}
                className="flex-shrink-0 w-80 sm:w-96 light-glass-card p-8 rounded-xl flex flex-col justify-between snap-start"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-navy text-brand-blue flex items-center justify-center mb-6">
                    <DynamicIcon name={ind.icon} className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-brand-navy uppercase mb-3">
                    {ind.title}
                  </h3>

                  <p className="text-sm text-brand-navy-mid/80 leading-relaxed mb-6">
                    {ind.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-navy">Primary Risk Vectors:</div>
                    {ind.risks.slice(0, 2).map((r, idx) => (
                      <div key={idx} className="text-xs text-brand-navy-mid flex items-start gap-2">
                        <span className="text-brand-blue font-bold">›</span>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  to={ind.slug}
                  className="inline-flex items-center text-xs font-display font-bold uppercase tracking-wider text-brand-navy hover:text-brand-blue transition-colors gap-1 pt-4 border-t border-brand-navy/10"
                >
                  <span>Explore {ind.title} Defense</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* 6. CASE STUDIES & TESTIMONIALS (Dark Navy Section with Carousel) */}
      <section className="py-24 md:py-32 bg-brand-navy-deep border-t border-brand-navy-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel
            eyebrow="Verified Client Impact"
            title="ENTERPRISE CASE STUDIES & ATTESTATIONS"
            lightMode={false}
          >
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0 w-80 sm:w-[480px] navy-glass-card p-8 rounded-xl flex flex-col justify-between snap-start"
              >
                <div>
                  <div className="flex items-center gap-1 text-brand-blue mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-brand-blue">★</span>
                    ))}
                  </div>
                  <blockquote className="text-base sm:text-lg text-brand-white leading-relaxed mb-8 italic">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-brand-navy-border flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-sm text-brand-white uppercase">
                      {t.author}
                    </div>
                    <div className="text-xs text-brand-blue font-mono">
                      {t.role} • {t.company}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-1 bg-brand-navy-mid rounded border border-brand-blue/30 text-brand-white-muted">
                    {t.industry}
                  </span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* 7. VULNERABILITY RESEARCH TEASER (Crisp Off-White Section) */}
      <section className="py-24 md:py-32 bg-brand-off-white text-brand-navy border-t border-brand-navy/10" id="resources">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article 
                key={post.id}
                className="light-glass-card rounded-xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between text-xs font-mono text-brand-blue-deep font-bold mb-3">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-brand-navy uppercase mb-3 group-hover:text-brand-navy-mid transition-colors leading-snug">
                    <Link to={post.slug}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-brand-navy-mid/80 leading-relaxed mb-6 font-sans line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-brand-navy/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-navy-mid/70">
                    By {post.author}
                  </span>
                  <Link 
                    to={post.slug}
                    className="inline-flex items-center text-xs font-display font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-blue transition-colors"
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

      {/* 8. FREQUENTLY ASKED QUESTIONS (Dark Navy Section) */}
      <section className="py-24 md:py-32 bg-brand-navy border-t border-brand-navy-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            centered={true}
            eyebrow="Answers & Clarifications"
            title="COMMONLY ASKED QUESTIONS"
            description="Everything you need to know about our offensive scoping, non-destructive methodologies, and re-testing guarantees."
          />

          <Accordion items={FAQS_HOMEPAGE} lightMode={false} />
        </div>
      </section>

      {/* 9. FINAL CTA BANNER (Full-Bleed Dark Navy) */}
      <CTABanner />

    </div>
  );
}
