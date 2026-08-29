import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/siloData';
import Breadcrumb from '../components/Breadcrumb';
import { Button, CTABanner } from '../components/UIComponents';
import LeadMagnetForm from '../components/LeadMagnetForm';
import { BookOpen, Clock, Calendar, Share2, ArrowLeft, ArrowRight, ShieldCheck, User } from 'lucide-react';

export default function BlogPostPage() {
  const { postSlug } = useParams();

  const post = BLOG_POSTS.find((p) => p.slug.includes(postSlug || '') || p.id === postSlug) || BLOG_POSTS[0];

  const breadcrumbItems = [
    { label: 'Resources', to: '/resources' },
    { label: 'Blog', to: '/resources/blog' },
    { label: post.title }
  ];

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id);

  return (
    <div className="w-full pt-24 sm:pt-28">
      
      {/* 1. ARTICLE HEADER (Light Off-White Canvas) */}
      <section className="bg-brand-off-white border-b border-brand-navy/10 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-light opacity-50 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} lightMode={true} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-navy/15 text-xs font-mono font-bold text-brand-navy uppercase tracking-widest mb-6 shadow-sm">
              <span>{post.category}</span>
            </div>

            <h1 className="uv-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy uppercase mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author & Meta Bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-brand-navy/80 pt-4 border-t border-brand-navy/10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-brand-navy text-brand-white flex items-center justify-center font-bold">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-brand-navy">{post.author}</span>
                  <span className="text-brand-navy/60 ml-1">({post.authorRole})</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-brand-navy font-bold">
                <Clock className="w-4 h-4 text-brand-blue" />
                <span>{post.readTime}</span>
              </div>

              <div className="flex items-center gap-1.5 text-brand-navy/70">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARTICLE CONTENT WITH STICKY TABLE OF CONTENTS (Crisp White Section) */}
      <section className="py-16 sm:py-24 bg-brand-white text-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Table of Contents Sticky Sidebar (Desktop) */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-28 p-6 rounded-2xl bg-brand-off-white border border-brand-navy/10 space-y-6">
                <div className="font-display font-bold text-xs uppercase tracking-widest text-brand-navy">
                  Table of Contents
                </div>

                <nav className="space-y-2">
                  {post.tableOfContents && post.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-xs font-medium text-brand-navy/80 hover:text-brand-navy transition-colors py-1.5 pl-2 border-l-2 border-transparent hover:border-brand-blue"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>

                <div className="pt-6 border-t border-brand-navy/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">Share this Research</div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => alert("Link copied to clipboard!")}
                      className="px-3.5 py-2 rounded-lg bg-brand-navy text-brand-white text-xs font-display uppercase tracking-wider hover:bg-brand-navy-mid transition-colors flex items-center gap-1.5 min-h-[44px]"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </button>
                  </div>
                </div>

                {/* Lead Magnet Sidebar Widget */}
                <div className="pt-2">
                  <LeadMagnetForm inline={true} />
                </div>
              </div>
            </aside>

            {/* Main Article Body */}
            <main className="lg:col-span-8 max-w-none">
              <div className="text-base sm:text-lg leading-relaxed text-brand-navy font-medium mb-8 p-6 rounded-2xl bg-brand-off-white border-l-4 border-brand-navy font-sans">
                {post.excerpt}
              </div>

              {/* Formatted body text */}
              <div className="space-y-8 text-sm sm:text-base text-brand-navy/85 leading-relaxed font-sans">
                <div>
                  <h2 id="intro" className="uv-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-navy uppercase mb-4">
                    The Modern API & Cloud Attack Vector
                  </h2>
                  <p className="mb-4">
                    Modern applications increasingly rely on complex microservices communicating over heterogeneous protocols. While firewalls and legacy WAFs inspect layer-7 HTTP payloads, they are blind to context-dependent business logic decisions. Threat actors leverage automated reconnaissance tooling to identify edge cases where authorization decisions fail to propagate down to the storage layer.
                  </p>
                  <p>
                    In our offensive assessments at SECERA, over 68% of high-severity findings are tied to business logic authorization bypasses rather than traditional memory corruption or SQL injections.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-brand-navy text-brand-white font-mono text-xs overflow-x-auto shadow-md">
                  <div className="text-brand-blue mb-2">// Sample BOLA Vulnerability Vector in REST API</div>
                  <pre className="text-brand-white-muted leading-relaxed">
{`POST /api/v2/workspaces/78912/export-audit HTTP/1.1
Host: api.enterprise-target.com
Authorization: Bearer <valid_low_privilege_user_token>
Content-Type: application/json

{
  "target_tenant_id": "tenant_448921_finance",
  "export_format": "s3_full_database_dump"
}`}
                  </pre>
                </div>

                <div>
                  <h2 id="defense-strategy" className="uv-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-navy uppercase mb-4">
                    Engineering Remediation & Architectural Controls
                  </h2>
                  <p className="mb-4">
                    Relying exclusively on gateway tokens is insufficient. Every microservice must validate resource ownership through decoupled policy engines such as Open Policy Agent (OPA) or database row-level security (RLS) policies.
                  </p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Enforce explicit Object-Level Authorization middleware on all CRUD handlers.</li>
                    <li>Prevent tenant ID manipulation via cryptographically signed contextual tokens.</li>
                    <li>Schedule recurring manual penetration tests before rolling out new major API versions.</li>
                  </ul>
                </div>
              </div>

              {/* Author Bio Card */}
              <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-brand-off-white border border-brand-navy/10 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-navy text-brand-blue flex items-center justify-center flex-shrink-0 font-display font-extrabold text-lg shadow-sm">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-display font-extrabold text-base sm:text-lg text-brand-navy uppercase">
                    {post.author}
                  </div>
                  <div className="text-xs font-mono text-brand-navy font-bold mb-2">
                    {post.authorRole}
                  </div>
                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed font-sans">
                    Lead researcher at SECERA focusing on offensive cloud engineering, API reverse engineering, and zero-day exploit development.
                  </p>
                </div>
              </div>

            </main>

          </div>
        </div>
      </section>

      {/* 3. RELATED RESEARCH POSTS (Off-White Section) */}
      <section className="py-16 sm:py-24 bg-brand-off-white border-t border-brand-navy/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="uv-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-navy uppercase">
              Related Research Publications
            </h2>
            <Link to="/resources/blog" className="text-xs font-display font-bold uppercase text-brand-navy hover:text-brand-blue underline min-h-[44px] inline-flex items-center">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {relatedPosts.slice(0, 2).map((rel) => (
              <div key={rel.id} className="bg-white border border-brand-navy/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:border-brand-blue transition-colors">
                <div>
                  <div className="text-xs font-mono text-brand-navy font-bold uppercase mb-2">{rel.category}</div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-brand-navy uppercase mb-3">
                    <Link to={rel.slug} className="hover:text-brand-navy-mid transition-colors">
                      {rel.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy/80 line-clamp-2 mb-4 font-sans">
                    {rel.excerpt}
                  </p>
                </div>
                <Link to={rel.slug} className="inline-flex items-center text-xs font-display font-bold uppercase text-brand-navy hover:text-brand-blue gap-1 min-h-[44px]">
                  <span>Read Publication</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER (Solid Dark Navy) */}
      <CTABanner />

    </div>
  );
}
