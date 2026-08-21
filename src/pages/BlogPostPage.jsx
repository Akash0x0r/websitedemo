import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/siloData';
import Breadcrumb from '../components/Breadcrumb';
import { Button, CTABanner } from '../components/UIComponents';
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
    <div className="w-full pt-28">
      
      {/* 1. ARTICLE HEADER (Dark Navy Canvas) */}
      <section className="bg-brand-navy-deep border-b border-brand-navy-border py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} lightMode={false} />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-navy-mid border border-brand-blue/30 text-xs font-mono font-bold text-brand-blue uppercase tracking-widest mb-6">
              <span>{post.category}</span>
            </div>

            <h1 className="uv-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-white uppercase mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author & Meta Bar */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-brand-white-muted pt-4 border-t border-brand-navy-border/60">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-brand-blue/20 border border-brand-blue flex items-center justify-center text-brand-blue font-bold">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-brand-white font-bold">{post.author}</span>
                  <span className="text-brand-white-muted/60 ml-1">({post.authorRole})</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-brand-blue">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>

              <div className="flex items-center gap-1.5 text-brand-white-muted/70">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARTICLE CONTENT WITH STICKY TABLE OF CONTENTS (Alternating Light Section) */}
      <section className="py-20 md:py-28 bg-brand-white text-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Table of Contents Sticky Sidebar (Desktop) */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-28 p-6 rounded-xl bg-brand-off-white border border-brand-navy/10 space-y-6">
                <div className="font-display font-bold text-xs uppercase tracking-widest text-brand-blue-deep">
                  Table of Contents
                </div>

                <nav className="space-y-2">
                  {post.tableOfContents && post.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-xs font-medium text-brand-navy-mid hover:text-brand-blue-deep transition-colors py-1 pl-2 border-l-2 border-transparent hover:border-brand-blue"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>

                <div className="pt-6 border-t border-brand-navy/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">Share this Research</div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => alert("Link copied to clipboard!")}
                      className="px-3 py-1.5 rounded bg-brand-navy text-brand-white text-xs font-display uppercase tracking-wider hover:bg-brand-navy-mid transition-colors flex items-center gap-1"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </button>
                  </div>
                </div>

                {/* Sidebar Callout */}
                <div className="p-4 rounded bg-brand-navy text-brand-white">
                  <div className="font-display font-bold text-xs uppercase text-brand-blue mb-1">
                    Need an Assessment?
                  </div>
                  <p className="text-[11px] text-brand-white-muted mb-3">
                    Our researchers test for every vector outlined in this guide.
                  </p>
                  <Button to="/request-assessment" size="small" variant="primary">
                    Scope Test
                  </Button>
                </div>
              </div>
            </aside>

            {/* Main Article Body */}
            <main className="lg:col-span-8 max-w-none prose prose-navy">
              <div className="text-lg leading-relaxed text-brand-navy-mid font-medium mb-8 p-6 rounded-xl bg-brand-off-white border-l-4 border-brand-blue">
                {post.excerpt}
              </div>

              {/* Formatted body text */}
              <div className="space-y-8 text-base text-brand-navy-mid/90 leading-relaxed font-sans">
                <div>
                  <h2 id="intro" className="uv-heading text-2xl sm:text-3xl font-extrabold text-brand-navy uppercase mb-4">
                    The Modern API & Cloud Attack Vector
                  </h2>
                  <p className="mb-4">
                    Modern applications increasingly rely on complex microservices communicating over heterogeneous protocols. While firewalls and legacy WAFs inspect layer-7 HTTP payloads, they are blind to context-dependent business logic decisions. Threat actors leverage automated reconnaissance tooling to identify edge cases where authorization decisions fail to propagate down to the storage layer.
                  </p>
                  <p>
                    In our offensive assessments at SECERA, over 68% of high-severity findings are tied to business logic authorization bypasses rather than traditional memory corruption or SQL injections.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-brand-navy text-brand-white font-mono text-xs overflow-x-auto">
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
                  <h2 id="defense-strategy" className="uv-heading text-2xl sm:text-3xl font-extrabold text-brand-navy uppercase mb-4">
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
              <div className="mt-12 p-8 rounded-xl bg-brand-off-white border border-brand-navy/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-brand-navy text-brand-blue flex items-center justify-center flex-shrink-0 font-display font-extrabold text-xl">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-display font-extrabold text-lg text-brand-navy uppercase">
                    {post.author}
                  </div>
                  <div className="text-xs font-mono text-brand-blue-deep font-bold mb-2">
                    {post.authorRole}
                  </div>
                  <p className="text-xs text-brand-navy-mid leading-relaxed">
                    Lead researcher at SECERA focusing on offensive cloud engineering, API reverse engineering, and zero-day exploit development.
                  </p>
                </div>
              </div>

            </main>

          </div>
        </div>
      </section>

      {/* 3. RELATED RESEARCH POSTS (Dark Navy Section) */}
      <section className="py-20 md:py-28 bg-brand-navy-deep border-t border-brand-navy-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="uv-heading text-2xl sm:text-3xl font-extrabold text-brand-white uppercase">
              Related Research Publications
            </h2>
            <Link to="/resources/blog" className="text-xs font-display font-bold uppercase text-brand-blue hover:underline">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.slice(0, 2).map((rel) => (
              <div key={rel.id} className="navy-glass-card p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-brand-blue uppercase mb-2">{rel.category}</div>
                  <h3 className="font-display font-bold text-xl text-brand-white uppercase mb-3">
                    <Link to={rel.slug} className="hover:text-brand-blue transition-colors">
                      {rel.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-brand-white-muted line-clamp-2 mb-4">
                    {rel.excerpt}
                  </p>
                </div>
                <Link to={rel.slug} className="inline-flex items-center text-xs font-display font-bold uppercase text-brand-blue hover:text-brand-blue-light gap-1">
                  <span>Read Publication</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <CTABanner />

    </div>
  );
}
