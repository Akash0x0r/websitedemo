import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/siloData';
import Breadcrumb from '../components/Breadcrumb';
import { SectionHeader, Button, CTABanner } from '../components/UIComponents';
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
    <div className="w-full pt-28">
      
      {/* 1. HERO & SEARCH SECTION (Dark Navy) */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-border py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} lightMode={false} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-mid border border-brand-blue/30 text-xs font-mono font-bold text-brand-blue uppercase tracking-widest mb-6">
              <BookOpen className="w-4 h-4" />
              <span>OFFENSIVE RESEARCH & SECURITY VAULT</span>
            </div>

            <h1 className="uv-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-white uppercase mb-6 leading-tight">
              SECERA KNOWLEDGE VAULT
            </h1>

            <p className="text-lg md:text-xl text-brand-white-muted mb-8 leading-relaxed font-normal">
              Technical breakdowns, vulnerability research, zero-day disclosures, and compliance engineering playbooks directly from our red team researchers.
            </p>

            {/* Search Input */}
            <div className="relative max-w-xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search vulnerability analyses, OWASP guides, compliance frameworks..."
                className="w-full py-4 pl-12 pr-4 bg-brand-navy-card/90 border border-brand-navy-border focus:border-brand-blue rounded-lg text-sm text-brand-white placeholder-brand-white-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 shadow-inner"
              />
              <Search className="w-5 h-5 text-brand-blue absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER & POSTS GRID (Alternating Crisp White Section) */}
      <section className="py-20 md:py-28 bg-brand-white text-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded text-xs font-display font-bold uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-brand-navy text-brand-white shadow-md'
                    : 'bg-brand-off-white text-brand-navy-mid hover:bg-brand-navy/10 border border-brand-navy/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="light-glass-card rounded-xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between text-xs font-mono text-brand-blue-deep font-bold mb-4">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="font-display font-extrabold text-2xl text-brand-navy uppercase mb-4 group-hover:text-brand-navy-mid transition-colors leading-snug">
                    <Link to={post.slug}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-brand-navy-mid/80 leading-relaxed mb-6 font-sans">
                    {post.excerpt}
                  </p>
                </div>

                <div className="px-8 pb-8 pt-4 border-t border-brand-navy/10 flex items-center justify-between">
                  <div className="text-xs font-mono text-brand-navy-mid/70">
                    <div>{post.author}</div>
                    <div className="text-[10px] text-brand-navy-mid/50">{post.date}</div>
                  </div>
                  <Link 
                    to={post.slug}
                    className="inline-flex items-center text-xs font-display font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-blue transition-colors gap-1"
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
              <p className="text-lg text-brand-navy-mid">No articles found matching "{searchQuery}".</p>
              <button 
                onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); }}
                className="mt-4 text-xs font-display font-bold uppercase text-brand-blue hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 3. DOWNLOADABLE GUIDES & CHECKLISTS (Dark Navy Section) */}
      <section className="py-20 md:py-28 bg-brand-navy-deep border-t border-brand-navy-border relative" id="guides">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Practical Engineering Tools"
            title="SECURITY CHECKLISTS & WHITEPAPERS"
            description="Download actionable technical checklists to audit your infrastructure before your official compliance window."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="navy-glass-card p-6 rounded-lg flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-brand-blue uppercase tracking-wider mb-2">PDF CHECKLIST</div>
                <h3 className="font-display font-bold text-xl text-brand-white uppercase mb-2">
                  SOC 2 Type II Engineering Readiness Checklist
                </h3>
                <p className="text-xs text-brand-white-muted mb-6">
                  48 technical checkpoints across AWS/GCP, GitHub Actions, and identity providers to guarantee first-pass auditor clearance.
                </p>
              </div>
              <Link to="/request-assessment" className="inline-flex items-center text-xs font-display font-bold uppercase text-brand-blue hover:text-brand-blue-light gap-1">
                <Download className="w-4 h-4 mr-1" />
                <span>Request Download</span>
              </Link>
            </div>

            <div className="navy-glass-card p-6 rounded-lg flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-brand-blue uppercase tracking-wider mb-2">TECHNICAL WHITEPAPER</div>
                <h3 className="font-display font-bold text-xl text-brand-white uppercase mb-2">
                  API Security & BOLA Prevention Blueprint
                </h3>
                <p className="text-xs text-brand-white-muted mb-6">
                  Architectural patterns for database-level object authorization across distributed GraphQL and REST microservices.
                </p>
              </div>
              <Link to="/request-assessment" className="inline-flex items-center text-xs font-display font-bold uppercase text-brand-blue hover:text-brand-blue-light gap-1">
                <Download className="w-4 h-4 mr-1" />
                <span>Request Download</span>
              </Link>
            </div>

            <div className="navy-glass-card p-6 rounded-lg flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-brand-blue uppercase tracking-wider mb-2">EXECUTIVE GUIDE</div>
                <h3 className="font-display font-bold text-xl text-brand-white uppercase mb-2">
                  PCI DSS v4.0.1 Transition Handbook
                </h3>
                <p className="text-xs text-brand-white-muted mb-6">
                  Strategic scoping guide to reduce Cardholder Data Environment (CDE) footprint and avoid multi-million dollar penalties.
                </p>
              </div>
              <Link to="/request-assessment" className="inline-flex items-center text-xs font-display font-bold uppercase text-brand-blue hover:text-brand-blue-light gap-1">
                <Download className="w-4 h-4 mr-1" />
                <span>Request Download</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <CTABanner />

    </div>
  );
}
