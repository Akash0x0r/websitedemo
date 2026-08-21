import React from 'react';
import { Link } from 'react-router-dom';

/**
 * SECERA Official Wordmark Component
 * 
 * Rules:
 * - Uses the user's uploaded official SECERA wordmark ("SEC" in navy on light background, "ERA" in white on navy block)
 * - Rendered cleanly on a high-contrast container to guarantee authentic brand colors and shield split effect
 * - Maintains clear space around the logo equal to the height of the "S"
 */
export default function Logo({ variant = 'default', size = 'default', className = '', link = true }) {
  const sizeClasses = {
    small: 'h-6',
    default: 'h-8',
    large: 'h-10',
    xl: 'h-14'
  };

  const currentSizeClass = sizeClasses[size] || sizeClasses.default;

  const content = (
    <div 
      className={`inline-flex items-center select-none ${className}`} 
      aria-label="SECERA Cybersecurity Homepage"
    >
      {/* Official uploaded logo rendered with crisp containment and clear space */}
      <div className="flex items-center px-2 py-1 rounded bg-[#FFFFFF] shadow-sm border border-brand-blue/40 transition-transform duration-200 hover:scale-[1.02]">
        <img 
          src="/secera-logo.jpg" 
          alt="SECERA Cybersecurity" 
          className={`${currentSizeClass} w-auto object-contain block`}
        />
      </div>
    </div>
  );

  if (link) {
    return (
      <Link to="/" className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-brand-blue rounded">
        {content}
      </Link>
    );
  }

  return content;
}
