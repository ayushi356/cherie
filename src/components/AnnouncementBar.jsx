import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const MESSAGES = [
  "Compliments of the Maison: Silk Ribbon Gift Box & Dried Rose Petals with every order",
  "Complimentary Pan-India Courier on all orders exceeding ₹4,000",
  "Use code AMOUR15 for 15% off your first discovery",
  "Handcrafted in artisanal small batches in Grasse and Jaipur"
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <aside aria-label="Announcement" className="relative w-full max-w-full overflow-hidden bg-cherie-blush/80 text-cherie-wine border-b border-cherie-secondary/15 text-xs py-2 px-3 sm:px-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 min-w-0">
        
        {/* Editorial Masthead Notation */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] uppercase font-sans tracking-[0.22em] text-cherie-secondary font-semibold shrink-0">
          <span className="text-xs text-cherie-accent">❦</span>
          <span>Boutique En Ligne • Pan-India Courier</span>
        </div>

        {/* Carousel message with proper min-w-0 to prevent horizontal overflow */}
        <div className="flex-1 min-w-0 flex items-center justify-center gap-1.5 sm:gap-3 text-center overflow-hidden">
          <button 
            onClick={() => setIndex((prev) => (prev - 1 + MESSAGES.length) % MESSAGES.length)}
            className="text-cherie-secondary hover:text-cherie-wine active:scale-90 transition-all p-1.5 shrink-0"
            aria-label="Previous announcement"
          >
            <ChevronLeft size={14} />
          </button>

          <p className="font-serif italic text-xs sm:text-[13px] tracking-wide truncate max-w-xl text-cherie-wine font-normal transition-all duration-700">
            {MESSAGES[index]}
          </p>

          <button 
            onClick={() => setIndex((prev) => (prev + 1) % MESSAGES.length)}
            className="text-cherie-secondary hover:text-cherie-wine active:scale-90 transition-all p-1.5 shrink-0"
            aria-label="Next announcement"
          >
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Discovery code & dismiss */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <span className="hidden sm:inline-block font-sans text-[11px] uppercase tracking-[0.18em] text-cherie-secondary font-medium">
            Code: <strong className="text-cherie-wine font-semibold">AMOUR15</strong>
          </span>

          <button 
            onClick={() => setIsVisible(false)}
            className="text-cherie-secondary hover:text-cherie-wine p-1 sm:p-0.5 active:scale-90 transition-all"
            aria-label="Dismiss announcement"
          >
            <X size={14} />
          </button>
        </div>

      </div>
    </aside>
  );
}
