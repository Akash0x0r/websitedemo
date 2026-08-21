import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({ children, title, eyebrow, lightMode = false, className = '' }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const offset = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -offset : offset,
      behavior: 'smooth'
    });
    setTimeout(checkScroll, 350);
  };

  // Mouse Drag to Scroll Handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.8; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeftState - walk;
    checkScroll();
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Header and Controls */}
      <div className="flex items-end justify-between mb-8">
        <div>
          {eyebrow && (
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-brand-blue inline-block"></span>
              <span className="uv-subheading">{eyebrow}</span>
            </div>
          )}
          {title && (
            <h2 className={`uv-heading text-2xl sm:text-3xl md:text-4xl font-extrabold ${
              lightMode ? 'text-brand-navy' : 'text-brand-white'
            }`}>
              {title}
            </h2>
          )}
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-3 rounded-full border transition-all duration-200 focus:outline-none ${
              canScrollLeft
                ? (lightMode 
                    ? 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white' 
                    : 'border-brand-blue/40 text-brand-white hover:border-brand-blue hover:bg-brand-blue/20 hover:text-brand-blue')
                : 'opacity-30 cursor-not-allowed border-transparent text-brand-white-muted/40'
            }`}
            aria-label="Previous items"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-3 rounded-full border transition-all duration-200 focus:outline-none ${
              canScrollRight
                ? (lightMode 
                    ? 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white' 
                    : 'border-brand-blue/40 text-brand-white hover:border-brand-blue hover:bg-brand-blue/20 hover:text-brand-blue')
                : 'opacity-30 cursor-not-allowed border-transparent text-brand-white-muted/40'
            }`}
            aria-label="Next items"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Draggable Scroll Track */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex space-x-6 overflow-x-auto pb-6 scrollbar-none cursor-grab active:cursor-grabbing select-none`}
        style={{ scrollSnapType: isDragging ? 'none' : 'x mandatory' }}
      >
        {children}
      </div>
    </div>
  );
}
