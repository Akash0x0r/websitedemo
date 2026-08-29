import React, { useState, useEffect } from 'react';
import { X, BookOpen, Lock, CheckCircle2, Download, ShieldCheck } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function LeadMagnetForm({ inline = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // If rendered inline, no modal trigger logic needed
    if (inline) return;

    // Check permanent local storage flag
    const dismissed = localStorage.getItem('leadMagnetDismissed') || sessionStorage.getItem('secera_lead_magnet_dismissed');
    if (dismissed === 'true') return;

    let timerId = null;

    // 1. Scroll 50% trigger handler (runs at most once)
    const handleScroll = () => {
      if (localStorage.getItem('leadMagnetDismissed') === 'true') {
        window.removeEventListener('scroll', handleScroll);
        return;
      }
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0 && window.scrollY / scrollTotal >= 0.5) {
        setIsOpen(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // 2. Homepage 15s timer trigger
    if (location.pathname === '/') {
      timerId = setTimeout(() => {
        if (localStorage.getItem('leadMagnetDismissed') !== 'true') {
          setIsOpen(true);
        }
      }, 15000);
    }

    // 3. Exit Intent trigger (mouse leaves top of window)
    const handleExitIntent = (e) => {
      if (e.clientY <= 0) {
        if (localStorage.getItem('leadMagnetDismissed') !== 'true') {
          setIsOpen(true);
        }
        document.removeEventListener('mouseleave', handleExitIntent);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleExitIntent);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleExitIntent);
      if (timerId) clearTimeout(timerId);
    };
  }, [inline, location.pathname]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('leadMagnetDismissed', 'true');
    sessionStorage.setItem('secera_lead_magnet_dismissed', 'true');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Lead Magnet Form Submission:', formData);
    localStorage.setItem('leadMagnetDismissed', 'true');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  // Form Content UI Layout
  const formContent = (
    <div className="w-full">
      {/* Header Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-navy/15 text-xs font-mono font-bold text-brand-navy uppercase tracking-wider mb-4 shadow-sm">
        <BookOpen className="w-4 h-4 text-brand-blue-deep" />
        <span>Free Cybersecurity Resource</span>
      </div>

      {/* Main Headline */}
      <h3 className="uv-heading text-xl sm:text-2xl font-bold text-brand-navy uppercase leading-tight mb-2">
        Download Free: The Complete Guide to Enterprise Data Security
      </h3>

      {/* Subtext in softer navy tone */}
      <p className="text-xs sm:text-sm text-brand-navy/75 mb-6 leading-relaxed font-sans">
        Protect your organization's sensitive data from evolving cyber threats and high-stakes breaches.
      </p>

      {submitted ? (
        <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-12 h-12 rounded-full bg-brand-navy text-brand-blue-light flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-brand-blue-light" />
          </div>
          <h4 className="font-display font-bold text-lg text-brand-navy uppercase">
            Thanks! Check your email for the download link
          </h4>
          <p className="text-xs text-brand-navy/75 max-w-sm mx-auto">
            We've dispatched <strong>The Complete Guide to Enterprise Data Security</strong> to <strong>{formData.email}</strong>.
          </p>
          {!inline && (
            <button
              onClick={handleClose}
              className="mt-2 text-xs font-display font-bold uppercase tracking-wider text-brand-navy hover:text-brand-blue-deep underline"
            >
              Close Window
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-display font-bold uppercase tracking-wider text-brand-navy mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Sarah Connor"
              className="w-full px-3.5 py-2.5 bg-white border border-brand-navy/20 rounded-lg text-xs sm:text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-display font-bold uppercase tracking-wider text-brand-navy mb-1.5">
              Work Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="sarah@company.com"
              className="w-full px-3.5 py-2.5 bg-white border border-brand-navy/20 rounded-lg text-xs sm:text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-display font-bold uppercase tracking-wider text-brand-navy mb-1.5">
              Company Name *
            </label>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Enterprise"
              className="w-full px-3.5 py-2.5 bg-white border border-brand-navy/20 rounded-lg text-xs sm:text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 shadow-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-lg bg-brand-blue-light text-brand-navy-deep border border-brand-blue-light font-display font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group min-h-[44px] mt-2"
          >
            {isSubmitting ? (
              <span>Preparing Download...</span>
            ) : (
              <>
                <Download className="w-4 h-4 text-brand-navy-deep group-hover:text-white transition-colors" />
                <span>Download Free eBook</span>
              </>
            )}
          </button>

          {/* Trust Footer */}
          <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-brand-navy/70 font-sans">
            <Lock className="w-3.5 h-3.5 text-brand-blue-deep" />
            <span>No spam. Your data is encrypted and never shared.</span>
          </div>
        </form>
      )}
    </div>
  );

  // Return Inline View (Distinct off-white container with top accent bar)
  if (inline) {
    return (
      <div className="w-full bg-brand-off-white border border-brand-navy/15 rounded-2xl overflow-hidden shadow-sm">
        <div className="h-1.5 bg-brand-blue-light w-full" />
        <div className="p-6 sm:p-8">
          {formContent}
        </div>
      </div>
    );
  }

  // Return Popup Modal View (Subtle soft shadow & soft dimmed overlay)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Soft Light-Navy Dimmed Overlay */}
      <div 
        className="fixed inset-0 bg-[#050540]/40 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Light Off-White Modal Card with Top Accent Bar */}
      <div className="relative w-full max-w-lg bg-brand-off-white border border-brand-navy/15 rounded-2xl overflow-hidden shadow-xl z-10 my-auto animate-in zoom-in-95 duration-200">
        <div className="h-1.5 bg-brand-blue-light w-full" />
        
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white border border-brand-navy/15 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-colors focus:outline-none min-h-[32px]"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8">
          {formContent}
        </div>
      </div>
    </div>
  );
}
