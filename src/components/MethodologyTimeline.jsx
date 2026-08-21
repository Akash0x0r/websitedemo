import React, { useState } from 'react';
import { METHODOLOGY_STEPS } from '../data/siloData';
import { Shield, CheckCircle2, Terminal, ArrowRight, Wrench, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MethodologyTimeline({ lightMode = false }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = METHODOLOGY_STEPS[activeStepIndex];

  return (
    <div className="w-full">
      {/* Step Numbers Horizontal Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
        {METHODOLOGY_STEPS.map((step, idx) => {
          const isActive = activeStepIndex === idx;
          return (
            <button
              key={step.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 rounded-lg text-left transition-all duration-300 border flex flex-col justify-between relative group ${
                isActive
                  ? (lightMode 
                      ? 'bg-white border-brand-blue shadow-lg ring-2 ring-brand-blue/30' 
                      : 'bg-brand-navy-card border-brand-blue shadow-glow-sm')
                  : (lightMode
                      ? 'bg-brand-off-white border-brand-navy/10 hover:border-brand-blue/50'
                      : 'bg-brand-navy-deep/60 border-brand-navy-border hover:border-brand-blue/30')
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono font-bold text-sm sm:text-base ${
                  isActive ? 'text-brand-blue' : (lightMode ? 'text-brand-navy-mid/60' : 'text-brand-white-muted/50')
                }`}>
                  STEP {step.step}
                </span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />
                )}
              </div>
              <div className={`font-display font-bold text-xs uppercase tracking-wider line-clamp-1 ${
                isActive ? (lightMode ? 'text-brand-navy' : 'text-brand-white') : (lightMode ? 'text-brand-navy-mid/80' : 'text-brand-white-muted/70')
              }`}>
                {step.phase}
              </div>

              {/* Progress bottom bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-lg transition-all duration-300 ${
                isActive ? 'bg-brand-blue' : 'bg-transparent'
              }`} />
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Inspection Card for Active Phase */}
      <div className={`p-6 sm:p-8 md:p-10 rounded-xl border transition-all duration-300 ${
        lightMode 
          ? 'bg-white border-brand-blue/30 shadow-xl' 
          : 'bg-brand-navy-card border-brand-navy-border shadow-2xl'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Phase Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded bg-brand-blue/15 text-brand-blue font-bold border border-brand-blue/30">
                PHASE {currentStep.step} OF 06
              </span>
              <span className={`text-xs font-mono tracking-wider ${lightMode ? 'text-brand-navy-mid/60' : 'text-brand-white-muted/60'}`}>
                // STANDARDIZED OFFENSIVE PROTOCOL
              </span>
            </div>

            <div>
              <h3 className={`uv-heading text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 ${
                lightMode ? 'text-brand-navy' : 'text-brand-white'
              }`}>
                {currentStep.phase}
              </h3>
              <div className="text-sm font-mono text-brand-blue font-bold uppercase tracking-wide">
                {currentStep.subtitle}
              </div>
            </div>

            <p className={`text-base leading-relaxed ${
              lightMode ? 'text-brand-navy-mid' : 'text-brand-white-muted'
            }`}>
              {currentStep.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link 
                to="/company/methodology"
                className="inline-flex items-center text-xs font-display uppercase tracking-wider font-bold text-brand-blue hover:text-brand-blue-light group"
              >
                <span>Read Full Methodology Whitepaper</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Deliverables & Tooling */}
          <div className={`lg:col-span-5 p-6 rounded-lg border space-y-6 ${
            lightMode 
              ? 'bg-brand-off-white border-brand-navy/10' 
              : 'bg-brand-navy-deep/90 border-brand-navy-border'
          }`}>
            
            {/* Deliverables Checklist */}
            <div>
              <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-brand-blue mb-3">
                <FileText className="w-4 h-4" />
                <span>Phase Deliverables</span>
              </div>
              <ul className="space-y-2">
                {currentStep.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className={lightMode ? 'text-brand-navy' : 'text-brand-white-muted'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Utilized */}
            <div className="pt-4 border-t border-brand-navy-border/60">
              <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-brand-blue mb-3">
                <Wrench className="w-4 h-4" />
                <span>Proprietary & Industry Tools</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentStep.tools.map((tool, i) => (
                  <span 
                    key={i}
                    className="px-2.5 py-1 rounded text-[11px] font-mono bg-brand-navy text-brand-white-muted border border-brand-navy-border"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
