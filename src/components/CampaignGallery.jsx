import React, { useState } from 'react';
import { LOOKBOOK_ITEMS } from '../data/products';
import { Eye, X } from 'lucide-react';

export default function CampaignGallery({ onOpenProduct }) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section id="gallery" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 lg:py-36 bg-cherie-ivory relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-2.5 sm:mb-3">
            <span className="w-6 sm:w-8 h-px bg-cherie-secondary/30" />
            <span className="font-script text-2xl sm:text-3xl text-cherie-accent">
              L'Art de Vivre
            </span>
            <span className="w-6 sm:w-8 h-px bg-cherie-secondary/30" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light text-cherie-wine tracking-tight mb-3 sm:mb-4">
            The Campaign Lookbook
          </h2>

          <p className="font-sans text-base sm:text-[17px] text-cherie-body font-light leading-relaxed max-w-md mx-auto">
            Poetic vignettes from our atelier: sun-dappled dressing tables, powdered marble, and whispered silk ribbons.
          </p>
        </div>

        {/* Asymmetrical Exhibition Grid with Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {LOOKBOOK_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="reveal group cursor-pointer flex flex-col"
              style={{ transitionDelay: `${index * 0.08}s` }}
              onClick={() => setActiveItem(item)}
            >
              {/* Passe-Partout Matting Container with Fluid Lift */}
              <div className="editorial-matting rounded-2xl overflow-hidden mb-3 bg-cherie-ivory group-hover:shadow-elevated group-hover:-translate-y-1 transition-all duration-500 ease-out">
                <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-xl relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-800 ease-out"
                  />

                  {/* Gentle Dark Vignette on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cherie-wine/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Corner Catalog Stamp */}
                  <div className="absolute top-2.5 left-2.5 bg-cherie-ivory/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[8.5px] sm:text-[9px] uppercase tracking-[0.25em] font-sans font-medium text-cherie-wine border border-cherie-mauve/20 shadow-sm">
                    {item.tag}
                  </div>

                  {/* Reveal button on hover (Visible or easy tap) */}
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 sm:translate-y-2 sm:group-hover:translate-y-0">
                    <span className="py-1.5 px-3 rounded-full bg-cherie-ivory/95 text-cherie-wine text-[9.5px] sm:text-[10px] font-sans uppercase tracking-[0.18em] font-semibold flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform">
                      <Eye size={12} className="text-cherie-mauve" />
                      <span>View Vignette</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Editorial Caption beneath each plate */}
              <div className="px-1 text-left">
                <h4 className="font-serif text-[17px] sm:text-lg font-normal text-cherie-wine group-hover:text-cherie-accent transition-colors">
                  {item.title}
                </h4>
                <p className="font-sans text-[13.5px] sm:text-sm text-cherie-body font-light leading-relaxed line-clamp-2 mt-1">
                  {item.caption}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Quiet Footnote */}
        <div className="reveal reveal-delay-2 mt-12 sm:mt-16 text-center border-t border-cherie-secondary/20 pt-6 sm:pt-8">
          <p className="font-serif italic text-sm sm:text-base text-cherie-body">
            Share your dressing table rituals with <span className="font-script text-xl sm:text-2xl text-cherie-accent not-italic">#CherieBoutique</span>
          </p>
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-cherie-secondary font-medium block mt-1.5">
            Rejoignez notre communauté sur Instagram & Pinterest
          </span>
        </div>

      </div>

      {/* Lookbook Lightbox Modal with Fluid Fade & Scale Entrance */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lookbook-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-cherie-wine/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-cherie-ivory max-w-xl w-full rounded-3xl overflow-hidden shadow-elevated border border-cherie-mauve/30 p-4 sm:p-7 relative text-cherie-wine transform transition-all duration-300 scale-100 animate-fade-up my-auto max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-3.5 right-3.5 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-cherie-blush/80 hover:bg-cherie-blush text-cherie-wine active:scale-90 transition-all border border-cherie-mauve/20"
              aria-label="Close lightbox"
            >
              <X size={16} />
            </button>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 sm:mb-5 relative bg-cherie-blush">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-cherie-wine/90 text-cherie-ivory text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-sm">
                {activeItem.tag}
              </span>
            </div>

            <div className="text-left">
              <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-cherie-mauve block mb-1">
                Campagne Éditoriale &bull; Tome IV
              </span>
              <h3 id="lookbook-modal-title" className="font-serif text-xl sm:text-2xl text-cherie-wine mb-2 font-light">
                {activeItem.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-cherie-wine/80 leading-relaxed mb-5 font-light">
                {activeItem.caption}
              </p>
              
              <div className="flex items-center justify-between pt-3.5 border-t border-cherie-mauve/15">
                <span className="font-script text-cherie-mauve text-lg sm:text-xl">CHÉRIE Paris</span>
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-5 py-2.5 rounded-full bg-cherie-wine text-cherie-ivory text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] font-semibold hover:bg-cherie-mauve active:scale-95 transition-all shadow-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
