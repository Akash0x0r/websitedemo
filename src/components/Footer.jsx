import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Shield, Lock, Terminal, Globe, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA, INDUSTRIES_DATA } from '../data/siloData';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A6E] text-brand-white border-t border-[#1E2A8A]/50 relative overflow-hidden">
      {/* Subtle cyber background grid */}
      <div className="absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none" />

      {/* Main Footer Links Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Top Tagline Strip */}
        <div className="pb-12 border-b border-[#1E2A8A]/60 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <div className="mb-4">
              <Logo variant="dark" size="large" />
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-brand-white tracking-tight uppercase max-w-xl">
              Engineered Offensive Defense for the Modern Threat Landscape.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end text-xs font-mono text-brand-blue-light space-y-1.5">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-blue-light rounded-full animate-ping"></span>
              SECERA SECURITY OPERATIONS CENTER: ACTIVE
            </span>
            <span className="text-brand-white-muted/70">EST. 2020 • GLOBAL COVERAGE</span>
          </div>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 py-12 border-b border-[#1E2A8A]/50">
          
          {/* Column 1: Services Silo */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-brand-blue-light">
              Services
            </h4>
            <ul className="space-y-3 text-xs text-brand-white-muted/90 leading-relaxed font-sans">
              <li>
                <Link to="/services/vapt-penetration-testing" className="hover:text-brand-blue-light transition-colors">
                  VAPT & Penetration Testing
                </Link>
              </li>
              <li>
                <Link to="/services/application-product-security" className="hover:text-brand-blue-light transition-colors">
                  App & Product Security
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-infrastructure-security" className="hover:text-brand-blue-light transition-colors">
                  Cloud & Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity-compliance" className="hover:text-brand-blue-light transition-colors">
                  Cybersecurity Compliance
                </Link>
              </li>
              <li>
                <Link to="/services/cyber-risk-assessment" className="hover:text-brand-blue-light transition-colors">
                  Cyber Risk Assessment
                </Link>
              </li>
              <li>
                <Link to="/services/devsecops-security" className="hover:text-brand-blue-light transition-colors">
                  DevSecOps Pipeline Security
                </Link>
              </li>
              <li>
                <Link to="/services/data-protection" className="hover:text-brand-blue-light transition-colors">
                  Data Protection & Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Industries Silo */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-brand-blue-light">
              Industries
            </h4>
            <ul className="space-y-3 text-xs text-brand-white-muted/90 leading-relaxed font-sans">
              {INDUSTRIES_DATA.map((ind) => (
                <li key={ind.id}>
                  <Link to={ind.slug} className="hover:text-brand-blue-light transition-colors">
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-brand-blue-light">
              Resources
            </h4>
            <ul className="space-y-3 text-xs text-brand-white-muted/90 leading-relaxed font-sans">
              <li>
                <Link to="/resources/blog" className="hover:text-brand-blue-light transition-colors">
                  Vulnerability Blog
                </Link>
              </li>
              <li>
                <Link to="/resources/blog/owasp-api-top-10-deep-dive-2026" className="hover:text-brand-blue-light transition-colors">
                  OWASP API Top 10 Guide
                </Link>
              </li>
              <li>
                <Link to="/resources/blog/cloud-iam-privilege-escalation" className="hover:text-brand-blue-light transition-colors">
                  Cloud IAM Security Deep-Dive
                </Link>
              </li>
              <li>
                <Link to="/resources/blog/pci-dss-v4-readiness-checklist" className="hover:text-brand-blue-light transition-colors">
                  PCI DSS v4.0 Checklist
                </Link>
              </li>
              <li>
                <Link to="/resources#case-studies" className="hover:text-brand-blue-light transition-colors">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources#guides" className="hover:text-brand-blue-light transition-colors">
                  Security Whitepapers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-brand-blue-light">
              Company
            </h4>
            <ul className="space-y-3 text-xs text-brand-white-muted/90 leading-relaxed font-sans">
              <li>
                <Link to="/company/about" className="hover:text-brand-blue-light transition-colors">
                  About SECERA
                </Link>
              </li>
              <li>
                <Link to="/company/methodology" className="hover:text-brand-blue-light transition-colors">
                  Our 6-Step Methodology
                </Link>
              </li>
              <li>
                <Link to="/company/expertise" className="hover:text-brand-blue-light transition-colors">
                  Offensive Security Team
                </Link>
              </li>
              <li>
                <Link to="/company/standards" className="hover:text-brand-blue-light transition-colors">
                  Compliance Frameworks
                </Link>
              </li>
              <li>
                <Link to="/company/careers" className="hover:text-brand-blue-light transition-colors">
                  Careers (We're Hiring)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-blue-light transition-colors">
                  Contact Direct
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Inquiries & Security Response */}
          <div className="space-y-4 col-span-2 md:col-span-3 lg:col-span-1">
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-brand-blue-light">
              Security Advisory
            </h4>
            <div className="space-y-3 text-xs text-brand-white-muted/90 font-sans">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-brand-blue-light flex-shrink-0 mt-0.5" />
                <a href="mailto:security@secera.io" className="hover:text-brand-blue-light transition-colors font-mono">
                  security@secera.io
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-brand-blue-light flex-shrink-0 mt-0.5" />
                <span className="font-mono">+1 (800) 942-SECERA</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-blue-light flex-shrink-0 mt-0.5" />
                <span>San Francisco • London • Singapore</span>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                to="/request-assessment" 
                className="w-full inline-flex items-center justify-center py-2.5 px-3 rounded bg-brand-blue-light text-brand-navy-deep font-display font-bold text-xs uppercase tracking-wider hover:bg-brand-navy hover:text-white transition-colors border border-brand-blue-light min-h-[44px]"
              >
                <span>Scoping Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-white-muted/70 space-y-4 sm:space-y-0 font-sans">
          <div>
            © {new Date().getFullYear()} SECERA Cybersecurity Inc. All rights reserved. Strict confidentiality guaranteed under mutual NDA.
          </div>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link to="/company/standards" className="hover:text-brand-blue-light transition-colors">
              Privacy Policy
            </Link>
            <Link to="/company/standards" className="hover:text-brand-blue-light transition-colors">
              Terms of Engagement
            </Link>
            <Link to="/company/standards" className="hover:text-brand-blue-light transition-colors">
              Security Attestation
            </Link>
            <Link to="/company/standards" className="hover:text-brand-blue-light transition-colors">
              Responsible Disclosure
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
