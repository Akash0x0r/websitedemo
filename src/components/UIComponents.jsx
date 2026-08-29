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
  const baseClasses = "relative inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-200 select-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed group min-h-[44px]";
  
  const sizeClasses = {
    small: "text-xs px-4 py-2 rounded",
    default: "text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded",
    large: "text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-md",
  };

  const variantClasses = {
    // Primary: Filled Light-Blue background, Navy Text; hover inverts to Navy background with White text
    primary: "bg-brand-blue-light text-brand-navy-deep border border-brand-blue-light hover:bg-brand-navy hover:text-white hover:border-brand-navy shadow-sm active:scale-[0.98]",
    
    // Secondary: Solid Navy Outline, hover inverts to Navy background with White text
    secondary: "bg-transparent text-brand-navy border-2 border-brand-navy hover:bg-brand-navy hover:text-white active:scale-[0.98]",
    
    // Solid Navy Button
    navy: "bg-brand-navy text-brand-white hover:bg-brand-navy-mid border border-brand-navy hover:shadow-sm active:scale-[0.98]",
    
    // Ghost / Text Link
    ghost: "bg-transparent text-brand-navy hover:text-brand-blue hover:underline px-0 py-0 border-none",
    
    // Outline Light Blue (for use on dark navy backgrounds)
    darkOutline: "bg-transparent text-brand-white border border-brand-blue/60 hover:border-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue"
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
 * Section Header Component with clean display typography
 */
export function SectionHeader({ 
  eyebrow, 
  title, 
  description, 
  centered = false, 
  lightMode = true,
  className = '' 
}) {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2 mb-3 ${centered ? 'justify-center' : ''}`}>
          <span className="w-6 h-[2px] bg-brand-blue inline-block"></span>
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-navy">
            {eyebrow}
          </span>
          {centered && <span className="w-6 h-[2px] bg-brand-blue inline-block"></span>}
        </div>
      )}
      <h2 
        className={`uv-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
          lightMode ? 'text-brand-navy' : 'text-brand-white'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p 
          className={`text-sm sm:text-base md:text-lg leading-relaxed ${
            lightMode ? 'text-brand-navy/85' : 'text-brand-white-muted/90'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/**
 * Stat Callout Block (Light surface)
 */
export function StatBlock({ value, label, desc, lightMode = true }) {
  return (
    <div className={`p-6 md:p-8 rounded-xl border transition-all duration-300 ${
      lightMode 
        ? 'bg-white border-brand-navy/15 hover:border-brand-blue shadow-sm hover:shadow-md' 
        : 'bg-brand-navy-deep border-brand-navy-border hover:border-brand-blue/50 hover:shadow-glow-sm'
    }`}>
      <div className={`font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-2 ${
        lightMode ? 'text-brand-navy' : 'text-brand-blue'
      }`}>
        {value}
      </div>
      <div className={`font-display font-bold uppercase tracking-wider text-xs sm:text-sm mb-1 ${
        lightMode ? 'text-brand-navy' : 'text-brand-white'
      }`}>
        {label}
      </div>
      {desc && (
        <div className={`text-xs font-sans ${
          lightMode ? 'text-brand-navy/70' : 'text-brand-white-muted/70'
        }`}>
          {desc}
        </div>
      )}
    </div>
  );
}

/**
 * CTA Banner (Full-bleed dark navy background with light-blue accents for visual hierarchy)
 */
export function CTABanner({ 
  title = "Ready to Fortify Your Attack Surface?",
  subtitle = "Schedule a confidential scoping call with our principal offensive security researchers. Get an actionable proposal and RoE within 24 hours.",
  buttonText = "Request Security Assessment",
  buttonLink = "/request-assessment"
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy-deep py-20 md:py-28 border-y border-brand-navy-border text-brand-white">
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
          <Button to="/company/methodology" size="large" variant="darkOutline">
            Explore Methodology
          </Button>
        </div>

        {/* Micro SLA badge */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-brand-white-muted/70 tracking-wider uppercase font-mono">
          <span>• 24-Hour Scoping SLA</span>
          <span>• Certified Red Teamers</span>
          <span>• Free 60-Day Re-Testing</span>
        </div>
      </div>
    </section>
  );
}

/**
 * FAQ Accordion Component (Light theme default)
 */
export function Accordion({ items = [], lightMode = true }) {
  const [openIndex, setOpenIndex] = React.useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              lightMode 
                ? (isOpen ? 'bg-white border-brand-blue shadow-md' : 'bg-white border-brand-navy/10 hover:border-brand-blue/50')
                : (isOpen ? 'bg-brand-navy-card border-brand-blue shadow-glow-sm' : 'bg-brand-navy-deep/60 border-brand-navy-border')
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none min-h-[44px]"
              aria-expanded={isOpen}
            >
              <span className={`font-display font-bold text-sm sm:text-base md:text-lg ${
                lightMode ? 'text-brand-navy' : 'text-brand-white'
              }`}>
                {item.q}
              </span>
              <ChevronRight 
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                  isOpen 
                    ? 'rotate-90 text-brand-blue' 
                    : (lightMode ? 'text-brand-navy/50' : 'text-brand-white-muted/60')
                }`} 
              />
            </button>

            {isOpen && (
              <div className={`px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm md:text-base leading-relaxed ${
                lightMode ? 'text-brand-navy/85' : 'text-brand-white-muted'
              }`}>
                <div className="pt-3 border-t border-brand-navy/10">
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
