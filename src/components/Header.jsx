import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, ChevronRight, Shield, ShieldAlert, Code2, 
  Cloud, FileCheck2, Activity, GitBranch, Lock, Landmark, CreditCard, 
  Layers, ShoppingBag, Rocket, Cpu, Building2, BookOpen, ArrowRight
} from 'lucide-react';
import Logo from './Logo';
import { SERVICES_DATA, INDUSTRIES_DATA } from '../data/siloData';
import DynamicIcon from './DynamicIcon';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null); // 'services' | 'industries' | 'resources' | 'company' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileAccordion(null);
  }, [location.pathname]);

  const toggleMobileAccordion = (name) => {
    setMobileAccordion(mobileAccordion === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A6E] border-b border-[#1E2A8A]/50 shadow-lg py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with uploaded official asset */}
          <div className="flex-shrink-0 flex items-center pr-6">
            <Logo size="default" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* 1. SERVICES Menu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('services')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                type="button"
                className={`inline-flex items-center px-3.5 py-2 rounded text-xs font-display font-semibold uppercase tracking-wider transition-colors duration-150 ${
                  activeMenu === 'services' || location.pathname.startsWith('/services')
                    ? 'text-brand-blue-light bg-[#0F127A]'
                    : 'text-brand-white hover:text-brand-blue-light hover:bg-[#0F127A]/60'
                }`}
                aria-expanded={activeMenu === 'services'}
              >
                <span>Services</span>
                <ChevronDown className={`ml-1.5 w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180 text-brand-blue-light' : ''}`} />
              </button>

              {/* SERVICES SOLID NON-TRANSPARENT CONTRACTED MEGA MENU */}
              {activeMenu === 'services' && (
                <div 
                  className="fixed left-0 right-0 top-[62px] w-full bg-brand-off-white border-b-2 border-brand-blue border-x border-brand-navy/10 shadow-2xl z-50"
                  onMouseEnter={() => setActiveMenu('services')}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  {/* Contracted Container with crisp padding */}
                  <div className="max-w-7xl mx-auto px-6 py-6 bg-brand-off-white text-brand-navy">
                    
                    <div className="flex items-center justify-between pb-3 mb-5 border-b border-brand-navy/10">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 bg-brand-blue rounded-full" />
                        <span className="text-[11px] font-mono uppercase tracking-widest text-brand-navy font-bold">
                          SECERA Offensive & Defensive Security Pillars
                        </span>
                      </div>
                      <Link 
                        to="/services" 
                        className="text-xs font-display uppercase tracking-wider font-bold text-brand-navy hover:text-brand-blue inline-flex items-center gap-1 group"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* 6 Pillars Compact Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 xl:gap-5 bg-brand-off-white">
                      {SERVICES_DATA.slice(0, 6).map((pillar) => (
                        <div key={pillar.id} className="bg-white p-3 rounded-xl border border-brand-navy/15 hover:border-brand-blue hover:shadow-md hover:bg-brand-blue-light/10 transition-all group/col">
                          <Link 
                            to={pillar.slug} 
                            className="block pb-2 mb-2 border-b border-brand-navy/10"
                          >
                            <div className="flex items-center space-x-1.5 text-brand-navy mb-1">
                              <DynamicIcon name={pillar.icon} className="w-3.5 h-3.5 text-brand-blue" />
                              <h3 className="font-display font-bold text-[11px] uppercase tracking-wider text-brand-navy group-hover/col:text-brand-blue-deep transition-colors line-clamp-1">
                                {pillar.shortTitle}
                              </h3>
                            </div>
                            <p className="text-[10px] text-brand-navy/70 line-clamp-1 leading-snug font-sans">
                              {pillar.tagline}
                            </p>
                          </Link>

                          {/* Sub-services list */}
                          <ul className="space-y-1">
                            {pillar.subServices.map((sub) => (
                              <li key={sub.id}>
                                <Link 
                                  to={sub.slug} 
                                  className="text-[11px] text-brand-navy/85 hover:text-brand-blue-deep hover:bg-brand-blue-light/15 block px-1.5 py-0.5 rounded transition-colors line-clamp-1"
                                >
                                  • {sub.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Compact Practice Areas Strip */}
                    <div className="mt-4 pt-3 border-t border-brand-navy/10 flex flex-wrap items-center justify-between text-xs text-brand-navy/80">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-brand-navy font-bold text-[11px]">ADDITIONAL:</span>
                        <Link to="/services/devsecops-security" className="hover:text-brand-blue text-[11px] transition-colors font-medium">
                          DevSecOps & CI/CD
                        </Link>
                        <span className="text-brand-navy/30">•</span>
                        <Link to="/services/data-protection" className="hover:text-brand-blue text-[11px] transition-colors font-medium">
                          Data Protection & Privacy
                        </Link>
                      </div>
                      <div className="font-mono text-[10px] text-brand-navy/70">
                        100% Human-Verified Exploits • Zero Scanner Dumps
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* 2. INDUSTRIES Menu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('industries')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                type="button"
                className={`inline-flex items-center px-3.5 py-2 rounded text-xs font-display font-semibold uppercase tracking-wider transition-colors duration-150 ${
                  activeMenu === 'industries' || location.pathname.startsWith('/industries')
                    ? 'text-brand-blue-light bg-[#0F127A]'
                    : 'text-brand-white hover:text-brand-blue-light hover:bg-[#0F127A]/60'
                }`}
                aria-expanded={activeMenu === 'industries'}
              >
                <span>Industries</span>
                <ChevronDown className={`ml-1.5 w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'industries' ? 'rotate-180 text-brand-blue-light' : ''}`} />
              </button>

              {/* INDUSTRIES SOLID NON-TRANSPARENT CONTRACTED SUB-MENU */}
              {activeMenu === 'industries' && (
                <div 
                  className="absolute top-full left-0 w-80 bg-brand-off-white border-2 border-brand-navy/15 rounded-xl shadow-2xl p-3 mt-1 z-50 text-brand-navy"
                  onMouseEnter={() => setActiveMenu('industries')}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-brand-navy font-bold px-2 py-1 mb-1 border-b border-brand-navy/10">
                    Industry Specific Suites
                  </div>
                  <div className="space-y-0.5">
                    {INDUSTRIES_DATA.map((ind) => (
                      <Link 
                        key={ind.id}
                        to={ind.slug}
                        className="flex items-center space-x-2.5 px-2.5 py-2 rounded-lg hover:bg-brand-blue-light/15 transition-colors group"
                      >
                        <div className="text-brand-blue">
                          <DynamicIcon name={ind.icon} className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-display font-bold text-brand-navy group-hover:text-brand-blue-deep uppercase">
                            {ind.title}
                          </div>
                          <div className="text-[10px] text-brand-navy/70 line-clamp-1">
                            {ind.summary}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. RESOURCES Menu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('resources')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                type="button"
                className={`inline-flex items-center px-3.5 py-2 rounded text-xs font-display font-semibold uppercase tracking-wider transition-colors duration-150 ${
                  activeMenu === 'resources' || location.pathname.startsWith('/resources')
                    ? 'text-brand-blue-light bg-[#0F127A]'
                    : 'text-brand-white hover:text-brand-blue-light hover:bg-[#0F127A]/60'
                }`}
                aria-expanded={activeMenu === 'resources'}
              >
                <span>Resources</span>
                <ChevronDown className={`ml-1.5 w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'resources' ? 'rotate-180 text-brand-blue-light' : ''}`} />
              </button>

              {/* RESOURCES SOLID NON-TRANSPARENT CONTRACTED SUB-MENU */}
              {activeMenu === 'resources' && (
                <div 
                  className="absolute top-full left-0 w-72 bg-brand-off-white border-2 border-brand-navy/15 rounded-xl shadow-2xl p-3 mt-1 z-50 text-brand-navy"
                  onMouseEnter={() => setActiveMenu('resources')}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-brand-navy font-bold px-2 py-1 mb-1 border-b border-brand-navy/10">
                    Research & Knowledge
                  </div>
                  <div className="space-y-1">
                    <Link to="/resources/blog" className="block px-3 py-2 rounded-lg hover:bg-brand-blue-light/15 text-xs font-display font-bold uppercase text-brand-navy hover:text-brand-blue-deep transition-colors">
                      Security Blog & Research
                    </Link>
                    <Link to="/resources#case-studies" className="block px-3 py-2 rounded-lg hover:bg-brand-blue-light/15 text-xs font-display font-bold uppercase text-brand-navy hover:text-brand-blue-deep transition-colors">
                      Client Case Studies
                    </Link>
                    <Link to="/resources#guides" className="block px-3 py-2 rounded-lg hover:bg-brand-blue-light/15 text-xs font-display font-bold uppercase text-brand-navy hover:text-brand-blue-deep transition-colors">
                      Checklists & Whitepapers
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 4. COMPANY Menu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('company')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                type="button"
                className={`inline-flex items-center px-3.5 py-2 rounded text-xs font-display font-semibold uppercase tracking-wider transition-colors duration-150 ${
                  activeMenu === 'company' || location.pathname.startsWith('/company')
                    ? 'text-brand-blue-light bg-[#0F127A]'
                    : 'text-brand-white hover:text-brand-blue-light hover:bg-[#0F127A]/60'
                }`}
                aria-expanded={activeMenu === 'company'}
              >
                <span>Company</span>
                <ChevronDown className={`ml-1.5 w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'company' ? 'rotate-180 text-brand-blue-light' : ''}`} />
              </button>

              {/* COMPANY SOLID NON-TRANSPARENT CONTRACTED SUB-MENU */}
              {activeMenu === 'company' && (
                <div 
                  className="absolute top-full left-0 w-64 bg-brand-off-white border-2 border-brand-navy/15 rounded-xl shadow-2xl p-3 mt-1 z-50 text-brand-navy"
                  onMouseEnter={() => setActiveMenu('company')}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-brand-navy font-bold px-2 py-1 mb-1 border-b border-brand-navy/10">
                    About Organization
                  </div>
                  <div className="space-y-1">
                    <Link to="/company/about" className="block px-3 py-2 rounded-lg hover:bg-brand-blue-light/15 text-xs font-display font-bold uppercase text-brand-navy hover:text-brand-blue-deep transition-colors">
                      About SECERA
                    </Link>
                    <Link to="/company/methodology" className="block px-3 py-2 rounded-lg hover:bg-brand-blue-light/15 text-xs font-display font-bold uppercase text-brand-navy hover:text-brand-blue-deep transition-colors">
                      Our 6-Step Methodology
                    </Link>
                    <Link to="/company/expertise" className="block px-3 py-2 rounded-lg hover:bg-brand-blue-light/15 text-xs font-display font-bold uppercase text-brand-navy hover:text-brand-blue-deep transition-colors">
                      Expertise & Certifications
                    </Link>
                    <Link to="/company/standards" className="block px-3 py-2 rounded-lg hover:bg-brand-blue-light/15 text-xs font-display font-bold uppercase text-brand-navy hover:text-brand-blue-deep transition-colors">
                      Security Standards
                    </Link>
                    <Link to="/company/careers" className="block px-3 py-2 rounded-lg hover:bg-brand-blue-light/15 text-xs font-display font-bold uppercase text-brand-navy hover:text-brand-blue-deep transition-colors">
                      Careers & Open Roles
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Contact Link */}
            <Link 
              to="/contact" 
              className={`px-3.5 py-2 rounded text-xs font-display font-semibold uppercase tracking-wider transition-colors duration-150 ${
                location.pathname === '/contact'
                  ? 'text-brand-blue-light bg-[#0F127A]'
                  : 'text-brand-white hover:text-brand-blue-light hover:bg-[#0F127A]/60'
              }`}
            >
              Contact
            </Link>

          </nav>

          {/* Primary CTA Button (Right side) */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/request-assessment"
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded bg-brand-blue-light text-brand-navy-deep font-display font-bold text-xs uppercase tracking-wider hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-200 group border border-brand-blue-light shadow-sm min-h-[44px]"
            >
              <span>Request Security Assessment</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <Link 
              to="/request-assessment" 
              className="px-3 py-1.5 rounded bg-brand-blue-light text-brand-navy-deep font-display font-bold text-xs uppercase tracking-wide min-h-[36px] flex items-center"
            >
              Assess
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-[#0F127A] text-brand-white hover:text-brand-blue-light focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE FULL-SCREEN NAVIGATION OVERLAY (SOFTER NAVY) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#0A0A6E] z-50 overflow-y-auto px-6 py-6 border-t border-[#1E2A8A]/50">
          <div className="space-y-4 max-w-lg mx-auto pb-24">
            
            {/* Primary Mobile CTA */}
            <Link 
              to="/request-assessment" 
              className="w-full flex items-center justify-center px-6 py-3.5 rounded bg-brand-blue text-brand-navy font-display font-bold text-sm uppercase tracking-wider shadow-glow-sm mb-6"
            >
              <span>Request Security Assessment</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            {/* SERVICES MOBILE ACCORDION */}
            <div className="border-b border-[#161972] pb-3">
              <button
                onClick={() => toggleMobileAccordion('services')}
                className="w-full flex items-center justify-between py-2 text-left text-sm font-display font-bold uppercase tracking-wider text-brand-white"
              >
                <span className={mobileAccordion === 'services' ? 'text-brand-blue' : ''}>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAccordion === 'services' ? 'rotate-180 text-brand-blue' : ''}`} />
              </button>

              {mobileAccordion === 'services' && (
                <div className="pl-3 mt-2 space-y-4 border-l-2 border-brand-blue pt-2">
                  {SERVICES_DATA.map((pillar) => (
                    <div key={pillar.id} className="space-y-1">
                      <Link 
                        to={pillar.slug}
                        className="block font-display font-bold text-xs uppercase text-brand-blue"
                      >
                        {pillar.title}
                      </Link>
                      <div className="pl-2 space-y-1">
                        {pillar.subServices.map((sub) => (
                          <Link 
                            key={sub.id} 
                            to={sub.slug}
                            className="block text-xs text-brand-white-muted hover:text-brand-blue py-0.5"
                          >
                            • {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* INDUSTRIES MOBILE ACCORDION */}
            <div className="border-b border-[#161972] pb-3">
              <button
                onClick={() => toggleMobileAccordion('industries')}
                className="w-full flex items-center justify-between py-2 text-left text-sm font-display font-bold uppercase tracking-wider text-brand-white"
              >
                <span className={mobileAccordion === 'industries' ? 'text-brand-blue' : ''}>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAccordion === 'industries' ? 'rotate-180 text-brand-blue' : ''}`} />
              </button>

              {mobileAccordion === 'industries' && (
                <div className="pl-3 mt-2 space-y-2 border-l-2 border-brand-blue pt-1">
                  {INDUSTRIES_DATA.map((ind) => (
                    <Link 
                      key={ind.id} 
                      to={ind.slug}
                      className="block text-xs text-brand-white-muted hover:text-brand-blue py-1"
                    >
                      {ind.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* RESOURCES MOBILE ACCORDION */}
            <div className="border-b border-[#161972] pb-3">
              <button
                onClick={() => toggleMobileAccordion('resources')}
                className="w-full flex items-center justify-between py-2 text-left text-sm font-display font-bold uppercase tracking-wider text-brand-white"
              >
                <span className={mobileAccordion === 'resources' ? 'text-brand-blue' : ''}>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAccordion === 'resources' ? 'rotate-180 text-brand-blue' : ''}`} />
              </button>

              {mobileAccordion === 'resources' && (
                <div className="pl-3 mt-2 space-y-2 border-l-2 border-brand-blue pt-1">
                  <Link to="/resources/blog" className="block text-xs text-brand-white-muted hover:text-brand-blue py-1">
                    Security Blog & Research
                  </Link>
                  <Link to="/resources#case-studies" className="block text-xs text-brand-white-muted hover:text-brand-blue py-1">
                    Case Studies
                  </Link>
                  <Link to="/resources#guides" className="block text-xs text-brand-white-muted hover:text-brand-blue py-1">
                    Security Guides & Checklists
                  </Link>
                </div>
              )}
            </div>

            {/* COMPANY MOBILE ACCORDION */}
            <div className="border-b border-[#161972] pb-3">
              <button
                onClick={() => toggleMobileAccordion('company')}
                className="w-full flex items-center justify-between py-2 text-left text-sm font-display font-bold uppercase tracking-wider text-brand-white"
              >
                <span className={mobileAccordion === 'company' ? 'text-brand-blue' : ''}>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAccordion === 'company' ? 'rotate-180 text-brand-blue' : ''}`} />
              </button>

              {mobileAccordion === 'company' && (
                <div className="pl-3 mt-2 space-y-2 border-l-2 border-brand-blue pt-1">
                  <Link to="/company/about" className="block text-xs text-brand-white-muted hover:text-brand-blue py-1">
                    About SECERA
                  </Link>
                  <Link to="/company/methodology" className="block text-xs text-brand-white-muted hover:text-brand-blue py-1">
                    Our 6-Step Methodology
                  </Link>
                  <Link to="/company/expertise" className="block text-xs text-brand-white-muted hover:text-brand-blue py-1">
                    Expertise & Certifications
                  </Link>
                  <Link to="/company/standards" className="block text-xs text-brand-white-muted hover:text-brand-blue py-1">
                    Security Standards
                  </Link>
                  <Link to="/company/careers" className="block text-xs text-brand-white-muted hover:text-brand-blue py-1">
                    Careers
                  </Link>
                </div>
              )}
            </div>

            {/* DIRECT CONTACT */}
            <Link 
              to="/contact" 
              className="block py-2 text-sm font-display font-bold uppercase tracking-wider text-brand-white hover:text-brand-blue"
            >
              Contact Us
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
