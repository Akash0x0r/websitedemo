import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumb trail component supporting deep Silo architecture.
 * Items format: [{ label: 'Services', to: '/services' }, { label: 'VAPT', to: '/services/vapt-penetration-testing' }, { label: 'Web App VAPT' }]
 */
export default function Breadcrumb({ items = [], lightMode = false }) {
  if (!items || items.length === 0) return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="py-3 px-1 mb-6 overflow-x-auto scrollbar-none"
    >
      <ol className="flex items-center space-x-2 text-xs md:text-sm font-medium tracking-wide uppercase">
        <li className="inline-flex items-center">
          <Link 
            to="/" 
            className={`inline-flex items-center transition-colors ${
              lightMode 
                ? 'text-brand-navy-mid hover:text-brand-blue-deep' 
                : 'text-brand-white-muted hover:text-brand-blue'
            }`}
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center space-x-2">
              <ChevronRight 
                className={`w-3.5 h-3.5 flex-shrink-0 ${
                  lightMode ? 'text-brand-navy-mid/40' : 'text-brand-blue/50'
                }`} 
              />
              {item.to && !isLast ? (
                <Link 
                  to={item.to} 
                  className={`transition-colors whitespace-nowrap ${
                    lightMode 
                      ? 'text-brand-navy-mid hover:text-brand-blue-deep' 
                      : 'text-brand-white-muted hover:text-brand-blue'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span 
                  className={`whitespace-nowrap font-bold ${
                    lightMode ? 'text-brand-navy' : 'text-brand-blue'
                  }`} 
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
