import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/siloData';
import Breadcrumb from '../components/Breadcrumb';
import { SectionHeader, Button, CTABanner } from '../components/UIComponents';
import LeadMagnetForm from '../components/LeadMagnetForm';
import { Search, BookOpen, FileText, ArrowRight, ShieldCheck, Download } from 'lucide-react';

export default function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'ALL',
    'Application, API & Product Security',
    'Cloud & Infrastructure Security',
    'Compliance & Regulations',
    'VAPT & Penetration Testing'
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'ALL' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const breadcrumbItems = [
    { label: 'Resources', to: '/resources' },
    { label: 'Blog & Research' }
  ];

  return (
    <div className="w-full pt-24 sm:pt-28">
      
      {/* 1. HERO & SEARCH SECTION (Light Off-White) */}
      <section className="bg-brand-off-white border-b border-brand-navy/10 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-light opacity-50 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} lightMode={true} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-navy/15 text-xs font-mono font-bold text-brand-navy uppercase tracking-widest mb-6 shadow-sm">
              <BookOpen className="w-4 h-4 text-brand-blue" />
              <span>OFFENSIVE RESEARCH & SECURITY VAULT</span>
            </div>

            <h1 className="uv-heading text-3xl sm:text-5xl md:text-6xl font-bold text-brand-navy uppercase mb-6 leading-tight">
              SECERA KNOWLEDGE VAULT
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-brand-navy/80 mb-8 leading-relaxed font-normal">
              Technical breakdowns, vulnerability research, zero-day disclosures, and compliance engineering playbooks directly from our red team researchers.
            </p>

            {/* Search Input */}
            <div className="relative max-w-xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search vulnerability analyses, OWASP guides, compliance frameworks..."
                className="w-full py-3.5 sm:py-4 pl-12 pr-4 bg-white border border-brand-navy/20 focus:border-brand-blue rounded-xl text-sm text-brand-navy placeholder:text-brand-navy/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 shadow-sm"
              />
              <Search className="w-5 h-5 text-brand-navy/60 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER & POSTS GRID (Crisp White Section) */}
      <section className="py-16 sm:py-24 bg-brand-white text-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 sm:mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-display font-bold uppercase tracking-wider transition-all duration-150 min-h-[44px] ${
                  selectedCategory === cat
                    ? 'bg-brand-navy text-brand-white shadow-sm'
                    : 'bg-brand-off-white text-brand-navy hover:bg-brand-navy/10 border border-brand-navy/15'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="light-glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-200 hover:-translate-y-1"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between text-xs font-mono text-brand-navy font-bold mb-4">
                    <span className="line-clamp-1">{post.category}</span>
                    <span className="text-brand-navy/60 whitespace-nowrap ml-2">{post.readTime}</span>
                  </div>

                  <h2 className="font-display font-bold text-lg sm:text-xl text-brand-navy uppercase mb-4 group-hover:text-brand-navy-mid transition-colors leading-snug">
                    <Link to={post.slug}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed mb-6 font-sans line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-brand-navy/10 flex items-center justify-between">
                  <div className="text-xs font-mono text-brand-navy/80">
                    <div className="font-bold">{post.author}</div>
                    <div className="text-[10px] text-brand-navy/60">{post.date}</div>
                  </div>
                  <Link 
                    to={post.slug}
                    className="inline-flex items-center text-xs font-display font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-blue transition-colors gap-1 min-h-[44px]"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-base sm:text-lg text-brand-navy">No articles found matching "{searchQuery}".</p>
              <button 
                onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); }}
                className="mt-4 text-xs font-display font-bold uppercase text-brand-navy hover:text-brand-blue underline"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 3. DOWNLOADABLE GUIDES & CHECKLISTS (Off-White Section) */}
      <section className="py-16 sm:py-24 bg-brand-off-white border-t border-brand-navy/10 relative" id="guides">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            lightMode={true}
            eyebrow="Practical Engineering Tools"
            title="SECURITY CHECKLISTS & WHITEPAPERS"
            description="Download actionable technical checklists to audit your infrastructure before your official compliance window."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-brand-navy/10 p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-brand-navy font-bold uppercase tracking-wider mb-2">PDF CHECKLIST</div>
                <h3 className="font-display font-bold text-lg text-brand-navy uppercase mb-2">
                  SOC 2 Type II Engineering Readiness Checklist
                </h3>
                <p className="text-xs sm:text-sm text-brand-navy/80 mb-6 font-sans">
                  48 technical checkpoints across AWS/GCP, GitHub Actions, and identity providers to guarantee first-pass auditor clearance.
                </p>
              </div>
              <Link to="/request-assessment" className="inline-flex items-center text-xs font-display font-bold uppercase text-brand-navy hover:text-brand-blue gap-1 min-h-[44px]">
                <Download className="w-4 h-4 mr-1 text-brand-blue" />
                <span>Request Download</span>
              </Link>
            </div>

            <div className="bg-white border border-brand-navy/10 p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-brand-navy font-bold uppercase tracking-wider mb-2">TECHNICAL WHITEPAPER</div>
                <h3 className="font-display font-bold text-lg text-brand-navy uppercase mb-2">
                  API Security & BOLA Prevention Blueprint
                </h3>
                <p className="text-xs sm:text-sm text-brand-navy/80 mb-6 font-sans">
                  Architectural patterns for database-level object authorization across distributed GraphQL and REST microservices.
                </p>
              </div>
              <Link to="/request-assessment" className="inline-flex items-center text-xs font-display font-bold uppercase text-brand-navy hover:text-brand-blue gap-1 min-h-[44px]">
                <Download className="w-4 h-4 mr-1 text-brand-blue" />
                <span>Request Download</span>
              </Link>
            </div>

            <div className="bg-white border border-brand-navy/10 p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-brand-navy font-bold uppercase tracking-wider mb-2">EXECUTIVE GUIDE</div>
                <h3 className="font-display font-bold text-lg text-brand-navy uppercase mb-2">
                  PCI DSS v4.0.1 Transition Handbook
                </h3>
                <p className="text-xs sm:text-sm text-brand-navy/80 mb-6 font-sans">
                  Strategic scoping guide to reduce Cardholder Data Environment (CDE) footprint and avoid multi-million dollar penalties.
                </p>
              </div>
              <Link to="/request-assessment" className="inline-flex items-center text-xs font-display font-bold uppercase text-brand-navy hover:text-brand-blue gap-1 min-h-[44px]">
                <Download className="w-4 h-4 mr-1 text-brand-blue" />
                <span>Request Download</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Inline Form */}
      <section className="py-12 bg-brand-white border-t border-brand-navy/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadMagnetForm inline={true} />
        </div>
      </section>

      {/* 4. CTA BANNER (Solid Dark Navy) */}
      <CTABanner />

    </div>
  );
}
