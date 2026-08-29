import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({ children, title, eyebrow, lightMode = true, className = '' }) {
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
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
        <div>
          {eyebrow && (
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-brand-blue inline-block"></span>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-navy">
                {eyebrow}
              </span>
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
        <div className="flex items-center space-x-2 self-end sm:self-auto">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 focus:outline-none ${
              canScrollLeft
                ? (lightMode 
                    ? 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white shadow-sm' 
                    : 'border-brand-blue/40 text-brand-white hover:border-brand-blue hover:bg-brand-blue/20 hover:text-brand-blue')
                : 'opacity-30 cursor-not-allowed border-transparent text-brand-navy/30'
            }`}
            aria-label="Previous items"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 focus:outline-none ${
              canScrollRight
                ? (lightMode 
                    ? 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white shadow-sm' 
                    : 'border-brand-blue/40 text-brand-white hover:border-brand-blue hover:bg-brand-blue/20 hover:text-brand-blue')
                : 'opacity-30 cursor-not-allowed border-transparent text-brand-navy/30'
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
        className="flex space-x-5 sm:space-x-6 overflow-x-auto pb-6 scrollbar-none cursor-grab active:cursor-grabbing select-none"
        style={{ scrollSnapType: isDragging ? 'none' : 'x mandatory' }}
      >
        {children}
      </div>
    </div>
  );
}
