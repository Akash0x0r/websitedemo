import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { SectionHeader, Button } from '../components/UIComponents';
import { 
  ShieldCheck, Lock, Clock, FileText, Phone, Mail, 
  MapPin, CheckCircle2, AlertCircle, Send, Sparkles 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/siloData';

export default function RequestAssessmentPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    phoneNumber: '',
    primaryService: 'vapt-penetration-testing',
    targetEnvironment: 'production',
    timeline: 'within-2-weeks',
    message: '',
    ndaRequired: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refId, setRefId] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Try sending to Netlify Serverless Function
      const response = await fetch('/.netlify/functions/submit-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const resData = await response.json();
        setRefId(resData.referenceId || `SEC-${Date.now().toString(36).toUpperCase()}`);
      } else {
        // Fallback reference ID for local testing or Netlify Forms direct post
        setRefId(`SEC-${Date.now().toString(36).toUpperCase()}`);
      }
    } catch (err) {
      // Offline / dev fallback
      setRefId(`SEC-${Date.now().toString(36).toUpperCase()}`);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const breadcrumbItems = [
    { label: 'Scoping Portal' },
    { label: 'Request Security Assessment' }
  ];

  return (
    <div className="w-full pt-28">
      
      {/* Top Scoping Header */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-border py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} lightMode={false} />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-mid border border-brand-blue/30 text-xs font-mono font-bold text-brand-blue uppercase tracking-widest mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>CONFIDENTIAL SCOPING & PROPOSAL REQUEST</span>
            </div>

            <h1 className="uv-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-white uppercase mb-4 leading-tight">
              REQUEST SECURITY ASSESSMENT
            </h1>

            <p className="text-base sm:text-lg text-brand-white-muted leading-relaxed font-normal">
              Provide your assessment requirements below. Our principal offensive security researchers will prepare a custom Scope of Work (SoW), timeline, and mutual NDA within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Split Layout: Left = Scoping Form / Right = Trust & Contact Info */}
      <section className="py-20 md:py-28 bg-brand-navy relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: Interactive Assessment Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-brand-white text-brand-navy p-8 sm:p-10 rounded-2xl shadow-2xl border border-brand-navy/10">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                    <div className="w-16 h-16 bg-brand-navy text-brand-blue rounded-full flex items-center justify-center mx-auto shadow-glow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h2 className="uv-heading text-3xl font-extrabold text-brand-navy uppercase">
                      Scoping Request Received
                    </h2>

                    <p className="text-sm text-brand-navy-mid max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-brand-navy">{formData.fullName}</strong>. A dedicated offensive security lead has been assigned to <strong className="text-brand-navy">{formData.companyName || 'your organization'}</strong>.
                    </p>

                    <div className="p-4 rounded-lg bg-brand-off-white border border-brand-navy/10 text-xs font-mono text-brand-navy text-left max-w-md mx-auto space-y-1.5">
                      {refId && <div><strong>Reference ID:</strong> <span className="text-brand-blue-deep font-bold">{refId}</span></div>}
                      <div><strong>Primary Domain:</strong> {formData.primaryService}</div>
                      <div><strong>Target Environment:</strong> {formData.targetEnvironment}</div>
                      <div><strong>SLA Guarantee:</strong> Response within 24 business hours</div>
                      <div><strong>Mutual NDA:</strong> {formData.ndaRequired ? 'Draft will be attached' : 'Standard'}</div>
                    </div>

                    <div className="pt-4">
                      <Button 
                        onClick={() => { setSubmitted(false); }} 
                        variant="navy" 
                        size="default"
                      >
                        Submit Another Request
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit} 
                    name="assessment-request"
                    data-netlify="true"
                    className="space-y-6"
                  >
                    {/* Hidden input for Netlify forms bots detection */}
                    <input type="hidden" name="form-name" value="assessment-request" />

                    <div className="pb-4 border-b border-brand-navy/10">
                      <h2 className="font-display font-extrabold text-xl uppercase tracking-tight text-brand-navy">
                        1. Target & Assessment Details
                      </h2>
                      <p className="text-xs text-brand-navy-mid/70 mt-1">
                        Select the primary security discipline and target timeline.
                      </p>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-display font-bold uppercase tracking-wider text-brand-navy mb-2">
                        Primary Service Required *
                      </label>
                      <select
                        name="primaryService"
                        value={formData.primaryService}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-brand-off-white border border-brand-navy/20 rounded-lg text-sm text-brand-navy focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Environment & Timeline Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-display font-bold uppercase tracking-wider text-brand-navy mb-2">
                          Testing Environment *
                        </label>
                        <select
                          name="targetEnvironment"
                          value={formData.targetEnvironment}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-brand-off-white border border-brand-navy/20 rounded-lg text-sm text-brand-navy focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                        >
                          <option value="production">Production Environment (Zero Downtime)</option>
                          <option value="staging">Staging / UAT Environment</option>
                          <option value="hybrid">Hybrid (Staging + Production)</option>
                          <option value="source-code">Source Code / Air-gapped Repo</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-display font-bold uppercase tracking-wider text-brand-navy mb-2">
                          Preferred Timeline *
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-brand-off-white border border-brand-navy/20 rounded-lg text-sm text-brand-navy focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                        >
                          <option value="immediate">Immediate / Urgent (&lt; 48 Hours)</option>
                          <option value="within-2-weeks">Within 1–2 Weeks</option>
                          <option value="within-1-month">Within 1 Month</option>
                          <option value="compliance-deadline">Upcoming Compliance Audit Window</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4 pb-2 border-b border-brand-navy/10">
                      <h2 className="font-display font-extrabold text-xl uppercase tracking-tight text-brand-navy">
                        2. Contact & Organization Information
                      </h2>
                    </div>

                    {/* Name & Work Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-display font-bold uppercase tracking-wider text-brand-navy mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Elena Rostova"
                          className="w-full px-4 py-3 bg-brand-off-white border border-brand-navy/20 rounded-lg text-sm text-brand-navy placeholder:text-brand-navy-mid/40 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-display font-bold uppercase tracking-wider text-brand-navy mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="workEmail"
                          required
                          value={formData.workEmail}
                          onChange={handleChange}
                          placeholder="elena@company.com"
                          className="w-full px-4 py-3 bg-brand-off-white border border-brand-navy/20 rounded-lg text-sm text-brand-navy placeholder:text-brand-navy-mid/40 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                        />
                      </div>
                    </div>

                    {/* Company & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-display font-bold uppercase tracking-wider text-brand-navy mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          className="w-full px-4 py-3 bg-brand-off-white border border-brand-navy/20 rounded-lg text-sm text-brand-navy placeholder:text-brand-navy-mid/40 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-display font-bold uppercase tracking-wider text-brand-navy mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="+1 (555) 019-2834"
                          className="w-full px-4 py-3 bg-brand-off-white border border-brand-navy/20 rounded-lg text-sm text-brand-navy placeholder:text-brand-navy-mid/40 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                        />
                      </div>
                    </div>

                    {/* Message / Scope details */}
                    <div>
                      <label className="block text-xs font-display font-bold uppercase tracking-wider text-brand-navy mb-2">
                        Scope Description & Specific Objectives
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please share number of endpoints, IP ranges, tech stack, compliance targets (SOC 2, ISO 27001, PCI DSS), or specific threat concerns..."
                        className="w-full px-4 py-3 bg-brand-off-white border border-brand-navy/20 rounded-lg text-sm text-brand-navy placeholder:text-brand-navy-mid/40 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                      />
                    </div>

                    {/* NDA Checkbox */}
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-brand-off-white border border-brand-navy/10">
                      <input
                        type="checkbox"
                        id="ndaRequired"
                        name="ndaRequired"
                        checked={formData.ndaRequired}
                        onChange={handleChange}
                        className="w-4 h-4 text-brand-navy rounded border-brand-navy/30 focus:ring-brand-blue"
                      />
                      <label htmlFor="ndaRequired" className="text-xs text-brand-navy font-medium cursor-pointer">
                        Send mutual Non-Disclosure Agreement (NDA) prior to technical discussions.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-lg bg-brand-navy text-brand-white font-display font-extrabold text-sm uppercase tracking-wider hover:bg-brand-navy-mid transition-all duration-200 shadow-md flex items-center justify-center gap-2 group disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Dispatching Scoping Details...</span>
                        ) : (
                          <>
                            <span>Request Formal Assessment Scope</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

            {/* RIGHT COLUMN: Trust Card & Direct Contacts (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Trust Box */}
              <div className="navy-glass-card p-8 rounded-2xl border border-brand-blue/40 shadow-glow-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-blue font-bold uppercase tracking-widest mb-6">
                  <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  <span>GUARANTEED ENGAGEMENT STANDARDS</span>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-navy-mid border border-brand-blue/30 flex items-center justify-center text-brand-blue flex-shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-brand-white uppercase mb-1">
                        24-Hour Scoping SLA
                      </h3>
                      <p className="text-xs text-brand-white-muted leading-relaxed font-sans">
                        Receive a comprehensive Scope of Work, timeline estimation, and pricing framework within one business day.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-navy-mid border border-brand-blue/30 flex items-center justify-center text-brand-blue flex-shrink-0">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-brand-white uppercase mb-1">
                        Strict Mutual NDA
                      </h3>
                      <p className="text-xs text-brand-white-muted leading-relaxed font-sans">
                        All communications and architectural disclosures are strictly protected under mutual confidentiality covenants.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-navy-mid border border-brand-blue/30 flex items-center justify-center text-brand-blue flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-brand-white uppercase mb-1">
                        Zero Downtime Guarantee
                      </h3>
                      <p className="text-xs text-brand-white-muted leading-relaxed font-sans">
                        Offensive tests are conducted non-destructively with rate-limiting and precision payload engineering.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-navy-mid border border-brand-blue/30 flex items-center justify-center text-brand-blue flex-shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-brand-white uppercase mb-1">
                        Free 60-Day Re-Testing
                      </h3>
                      <p className="text-xs text-brand-white-muted leading-relaxed font-sans">
                        Re-testing of all identified vulnerabilities is provided at zero additional cost to certify remediation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Inquiries & Physical Presence */}
              <div className="p-8 rounded-2xl bg-brand-navy-deep border border-brand-navy-border space-y-4">
                <div className="font-display font-bold text-xs uppercase tracking-widest text-brand-blue">
                  Direct Security Hotline
                </div>
                <div className="space-y-3 text-xs text-brand-white-muted">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-blue" />
                    <a href="mailto:security@secera.io" className="hover:text-brand-blue transition-colors font-mono">
                      security@secera.io
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-blue" />
                    <span className="font-mono">+1 (800) 942-SECERA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-brand-blue" />
                    <span>Global Hubs: San Francisco • London • Singapore</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
