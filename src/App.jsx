import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page Views
import HomePage from './pages/HomePage';
import ServicesIndexPage from './pages/ServicesIndexPage';
import ServicesPillarPage from './pages/ServicesPillarPage';
import SubServicePage from './pages/SubServicePage';
import IndustriesIndexPage from './pages/IndustriesIndexPage';
import IndustryPage from './pages/IndustryPage';
import BlogHubPage from './pages/BlogHubPage';
import BlogPostPage from './pages/BlogPostPage';
import CompanyPage from './pages/CompanyPage';
import RequestAssessmentPage from './pages/RequestAssessmentPage';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-navy text-brand-white">
      <ScrollToTop />
      
      {/* Sticky Header with Mega-Menu */}
      <Header />

      {/* Main Content Area with Silo Routes */}
      <main className="flex-grow">
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Services Silo */}
          <Route path="/services" element={<ServicesIndexPage />} />
          <Route path="/services/:pillarId" element={<ServicesPillarPage />} />
          <Route path="/services/:pillarId/:subServiceId" element={<SubServicePage />} />

          {/* Industries Silo */}
          <Route path="/industries" element={<IndustriesIndexPage />} />
          <Route path="/industries/:industryId" element={<IndustryPage />} />

          {/* Resources & Blog Silo */}
          <Route path="/resources" element={<BlogHubPage />} />
          <Route path="/resources/blog" element={<BlogHubPage />} />
          <Route path="/resources/blog/:postSlug" element={<BlogPostPage />} />

          {/* Company Silo */}
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/company/:subSection" element={<CompanyPage />} />

          {/* Conversion & Contact */}
          <Route path="/contact" element={<RequestAssessmentPage />} />
          <Route path="/request-assessment" element={<RequestAssessmentPage />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Confident Minimal Multi-Column Footer */}
      <Footer />
    </div>
  );
}
