import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';

/**
 * Primary & Secondary Brand Buttons
 */
export function Button({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  to, 
  href, 
  onClick, 
  className = '', 
  icon = true,
  type = 'button',
  disabled = false
}) {
  const baseClasses = "relative inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-300 select-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-brand-navy disabled:opacity-50 disabled:cursor-not-allowed group";
  
  const sizeClasses = {
    small: "text-xs px-4 py-2 rounded",
    default: "text-sm px-6 py-3 rounded",
    large: "text-base px-8 py-4 rounded-md",
  };

  const variantClasses = {
    // Primary: Filled Light-Blue, Dark Navy Text, Glow on hover
    primary: "bg-brand-blue text-brand-navy hover:bg-brand-blue-light hover:shadow-glow-md border border-brand-blue active:scale-[0.98]",
    
    // Secondary: Outline Light-Blue / White, fills on hover
    secondary: "bg-transparent text-brand-white border border-brand-blue/60 hover:border-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue hover:shadow-glow-sm active:scale-[0.98]",
    
    // Solid Navy on Light Backgrounds
    navy: "bg-brand-navy text-brand-white hover:bg-brand-navy-mid border border-brand-navy hover:shadow-glow-subtle active:scale-[0.98]",
    
    // Ghost / Text Link
    ghost: "bg-transparent text-brand-blue hover:text-brand-blue-light hover:underline px-0 py-0 border-none",
    
    // High-contrast Light Mode CTA
    lightOutline: "bg-white text-brand-navy border-2 border-brand-navy hover:bg-brand-navy hover:text-white"
  };

  const finalClass = `${baseClasses} ${sizeClasses[size] || sizeClasses.default} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={finalClass}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={finalClass} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={finalClass}>
      {content}
    </button>
  );
}

/**
 * Section Header Component with Ultraviolette-style aggressive display typography
 */
export function SectionHeader({ 
  eyebrow, 
  title, 
  description, 
  centered = false, 
  lightMode = false,
  className = '' 
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3 ${centered ? 'justify-center' : ''}">
          <span className="w-6 h-[2px] bg-brand-blue inline-block"></span>
          <span className="uv-subheading tracking-widest">{eyebrow}</span>
          {centered && <span className="w-6 h-[2px] bg-brand-blue inline-block"></span>}
        </div>
      )}
      <h2 
        className={`uv-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 ${
          lightMode ? 'text-brand-navy' : 'text-brand-white'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p 
          className={`text-base md:text-lg lg:text-xl font-normal leading-relaxed ${
            lightMode ? 'text-brand-navy-mid/80' : 'text-brand-white-muted/90'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/**
 * Stat Callout Block (Ultraviolette spec style)
 */
export function StatBlock({ value, label, desc, lightMode = false }) {
  return (
    <div className={`p-6 md:p-8 rounded-lg border transition-all duration-300 ${
      lightMode 
        ? 'bg-white border-brand-navy/10 hover:border-brand-blue shadow-sm' 
        : 'bg-brand-navy-deep/80 border-brand-navy-border hover:border-brand-blue/50 hover:shadow-glow-sm'
    }`}>
      <div className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-blue tracking-tight mb-2">
        {value}
      </div>
      <div className={`font-display font-bold uppercase tracking-wider text-sm md:text-base mb-1 ${
        lightMode ? 'text-brand-navy' : 'text-brand-white'
      }`}>
        {label}
      </div>
      {desc && (
        <div className={`text-xs md:text-sm font-sans ${
          lightMode ? 'text-brand-navy-mid/70' : 'text-brand-white-muted/70'
        }`}>
          {desc}
        </div>
      )}
    </div>
  );
}

/**
 * CTA Banner (Full-bleed dark navy background with light-blue accents)
 */
export function CTABanner({ 
  title = "Ready to Fortify Your Attack Surface?",
  subtitle = "Schedule a confidential scoping call with our principal offensive security researchers. Get an actionable proposal and RoE within 24 hours.",
  buttonText = "Request Security Assessment",
  buttonLink = "/request-assessment"
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy-deep py-20 md:py-28 border-y border-brand-navy-border">
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-mid border border-brand-blue/30 text-xs font-semibold text-brand-blue uppercase tracking-widest mb-6">
          <ShieldCheck className="w-4 h-4 text-brand-blue" />
          <span>Zero-Risk Scoping & Strict Mutual NDA</span>
        </div>

        <h2 className="uv-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-white mb-6">
          {title}
        </h2>
        
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-brand-white-muted mb-10 font-normal leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to={buttonLink} size="large" variant="primary">
            {buttonText}
          </Button>
          <Button to="/company/methodology" size="large" variant="secondary">
            Explore Methodology
          </Button>
        </div>

        {/* Micro SLA badge */}
        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-brand-white-muted/70 tracking-wider uppercase font-mono">
          <span>• 24-Hour Scoping SLA</span>
          <span>• Certified Red Teamers</span>
          <span>• Free 60-Day Re-Testing</span>
        </div>
      </div>
    </section>
  );
}

/**
 * FAQ Accordion Component
 */
export function Accordion({ items = [], lightMode = false }) {
  const [openIndex, setOpenIndex] = React.useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx}
            className={`border rounded-lg transition-all duration-200 overflow-hidden ${
              lightMode 
                ? (isOpen ? 'bg-white border-brand-blue shadow-md' : 'bg-brand-off-white/80 border-brand-navy/10')
                : (isOpen ? 'bg-brand-navy-card border-brand-blue shadow-glow-sm' : 'bg-brand-navy-deep/60 border-brand-navy-border')
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className={`font-display font-bold text-base md:text-lg ${
                lightMode ? 'text-brand-navy' : 'text-brand-white'
              }`}>
                {item.q}
              </span>
              <ChevronRight 
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                  isOpen 
                    ? 'rotate-90 text-brand-blue' 
                    : (lightMode ? 'text-brand-navy-mid/60' : 'text-brand-white-muted/60')
                }`} 
              />
            </button>

            {isOpen && (
              <div className={`px-6 pb-6 text-sm md:text-base leading-relaxed ${
                lightMode ? 'text-brand-navy-mid' : 'text-brand-white-muted'
              }`}>
                <div className="pt-2 border-t border-brand-blue/15">
                  {item.a}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
