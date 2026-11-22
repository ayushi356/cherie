import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero({ onExploreClick, onOpenProduct }) {
  return (
    <section className="relative w-full max-w-full overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pt-14 lg:pb-32 bg-cherie-ivory">
      
      {/* Editorial Watermark Ambient Glow - Strictly clipped inside section */}
      <div className="absolute top-1/3 -left-36 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-cherie-rose/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-28 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cherie-blush/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        
        {/* Editorial Masthead Bar / Issue Marker */}
        <div className="reveal flex flex-wrap items-center justify-between gap-y-1.5 border-b border-cherie-secondary/20 pb-2.5 sm:pb-3 mb-8 sm:mb-10 text-[10px] sm:text-xs font-sans uppercase tracking-[0.22em] sm:tracking-[0.28em] text-cherie-secondary font-medium">
          <span>Tome IV &bull; Automne-Hiver</span>
          <span className="hidden sm:inline font-script text-lg normal-case text-cherie-accent tracking-wider">
            La Poésie de la Toilette
          </span>
          <span>Paris &bull; Grasse &bull; Jaipur</span>
        </div>

        {/* Asymmetrical Editorial Magazine Cover Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Dramatic Typography & Literary Body */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            <p className="reveal reveal-delay-1 font-script text-2xl sm:text-4xl text-cherie-accent mb-2 sm:mb-3 tracking-wide">
              A little love, in every detail.
            </p>

            {/* Poetic Headline with responsive mobile scale (Target: 52-64px desktop) */}
            <h1 className="reveal reveal-delay-1 font-serif text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-light text-cherie-wine tracking-tight leading-[1.08] mb-4 sm:mb-6">
              Poetry for the <br />
              <span className="italic font-normal text-cherie-accent">
                Dressing Table
              </span>
              .
            </h1>

            {/* Editorial Body Paragraph with refined spacing to CTAs */}
            <p className="reveal reveal-delay-2 font-sans text-base sm:text-[17px] text-cherie-body font-light leading-relaxed max-w-xl mb-5 sm:mb-6">
              Handcrafted cosmetics pressed with organic Grasse damask rose water, antique flacons of bespoke perfume poured into mouth-blown crystal, and whisper-soft mulberry silks. Designed for the romantic soul who cherishes gentle daily rituals.
            </p>

            {/* Refined Luxury CTAs */}
            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-7 sm:mb-10">
              <button
                onClick={onExploreClick}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-cherie-wine text-cherie-ivory hover:bg-cherie-body transition-all duration-300 shadow-soft hover:shadow-elevated active:scale-95 text-xs sm:text-[13px] font-sans uppercase tracking-[0.2em] font-semibold"
              >
                <span>Explore the Collection</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out" />
              </button>

              <a
                href="#story"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-transparent text-cherie-wine border border-cherie-secondary/30 hover:border-cherie-wine hover:bg-cherie-blush/40 transition-all duration-300 active:scale-95 text-xs sm:text-[13px] font-sans uppercase tracking-[0.18em] font-medium text-center"
              >
                <span>Discover Our Story</span>
                <span className="text-xs text-cherie-accent group-hover:rotate-45 transition-transform duration-300">✦</span>
              </a>
            </div>

            {/* Minimalist Editorial Footnote Citation */}
            <div className="reveal reveal-delay-3 pt-5 border-t border-cherie-secondary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-[13px] text-cherie-secondary font-serif italic max-w-lg gap-1 sm:gap-4">
              <span>“Beauty is not an obligation to the world, but a private romance with oneself.”</span>
              <span className="font-sans not-italic text-[10px] sm:text-[11px] text-cherie-accent uppercase tracking-[0.2em] shrink-0 font-medium">
                — L'Atelier
              </span>
            </div>

          </div>

          {/* Right Column: High Art-Directed Photo Composition */}
          <div className="lg:col-span-5 relative reveal reveal-delay-2 mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Main Editorial Photographic Plate with Fine Passe-partout Matting and Gentle Entrance Reveal */}
              <div className="editorial-matting rounded-3xl overflow-hidden relative animate-hero-plate">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85"
                    alt="CHÉRIE Autumn-Winter Editorial Campaign - L'Élixir d'Amour"
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-800 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cherie-wine/50 via-transparent to-transparent opacity-75 group-hover:opacity-60 transition-opacity duration-500" />

                  {/* Understated Editorial Caption Tag */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-cherie-ivory/95 backdrop-blur-md px-4 py-3 rounded-xl border border-cherie-secondary/20 flex items-center justify-between shadow-soft">
                    <div>
                      <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-cherie-secondary block font-semibold">
                        Planche N° 01 &bull; Parfumerie
                      </span>
                      <h4 className="font-serif text-sm sm:text-base font-normal text-cherie-wine truncate max-w-[170px] sm:max-w-none">
                        L’Élixir d’Amour Eau de Parfum
                      </h4>
                    </div>

                    <button
                      onClick={() => onOpenProduct('cherie-02')}
                      className="text-[11px] sm:text-xs font-sans font-semibold tracking-wider uppercase text-cherie-wine hover:text-cherie-accent underline underline-offset-4 transition-colors shrink-0"
                    >
                      Discover Fragrance &rarr;
                    </button>
                  </div>
                </div>
              </div>

              {/* Offset Archival Medallion Cameo with Delicate Ribbon Motif */}
              <div
                onClick={() => onOpenProduct('cherie-01')}
                className="absolute -bottom-8 -left-8 bg-cherie-ivory p-4 rounded-2xl shadow-elevated border border-cherie-secondary/25 max-w-[220px] cursor-pointer hover:scale-105 hover:-translate-y-1 transition-all duration-400 ease-out hidden sm:block"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <svg className="w-4 h-4 text-cherie-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 12c-2.5-3-6-4.5-8-3-2 1.5-1.5 5 1.5 6 3 1 6.5-3 6.5-3z" />
                    <path d="M12 12c2.5-3 6-4.5 8-3 2 1.5 1.5 5-1.5 6-3 1-6.5-3-6.5-3z" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                    <path d="M11 14c-1 3-3 6-5 7" />
                    <path d="M13 14c1 3 3 6 5 7" />
                  </svg>
                  <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-cherie-secondary font-semibold">
                    Atelier Favorite
                  </span>
                </div>
                <p className="font-serif text-[13px] text-cherie-wine leading-tight italic">
                  “The most ethereal rose-petal blush ever conceived.”
                </p>
                <span className="font-sans text-[9px] text-cherie-secondary uppercase tracking-widest mt-1.5 block">
                  — Elle Magazine
                </span>
              </div>

              {/* Archival Seal Tag */}
              <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cherie-wine text-cherie-rose flex items-center justify-center font-serif text-lg sm:text-xl font-bold shadow-rose border border-cherie-rose/40 select-none hidden sm:flex transition-transform duration-400 hover:rotate-12">
                C
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Prominent, Continuous Smooth Botanical Editorial Ribbon (50% Larger & Substantially Slower) */}
      <div className="mt-14 sm:mt-20 py-5 sm:py-6 bg-cherie-blush/60 border-y border-cherie-secondary/20 overflow-hidden w-full max-w-full">
        <div className="animate-ribbon text-xs sm:text-sm lg:text-[15px] font-serif uppercase tracking-[0.25em] sm:tracking-[0.3em] text-cherie-wine font-medium">
          {/* First loop instance */}
          <div className="flex items-center gap-6 sm:gap-10 shrink-0 pr-6 sm:pr-10">
            <span>❦ Grasse Damask Rose Distillations</span>
            <span>&bull;</span>
            <span>Heirloom 22-Momme Mulberry Silk</span>
            <span>&bull;</span>
            <span>Mouth-Blown Fluted Glass Flacons</span>
            <span>&bull;</span>
            <span>Pressed Pearl Powders & Botanicals</span>
            <span>&bull;</span>
            <span>Pure Cold-Pressed French Floral Oils</span>
            <span>&bull;</span>
            <span>Artisanal Small-Batch Jaipur Weaving</span>
            <span>&bull;</span>
          </div>

          {/* Duplicate loop instance for seamless infinite translation */}
          <div className="flex items-center gap-6 sm:gap-10 shrink-0 pr-6 sm:pr-10" aria-hidden="true">
            <span>❦ Grasse Damask Rose Distillations</span>
            <span>&bull;</span>
            <span>Heirloom 22-Momme Mulberry Silk</span>
            <span>&bull;</span>
            <span>Mouth-Blown Fluted Glass Flacons</span>
            <span>&bull;</span>
            <span>Pressed Pearl Powders & Botanicals</span>
            <span>&bull;</span>
            <span>Pure Cold-Pressed French Floral Oils</span>
            <span>&bull;</span>
            <span>Artisanal Small-Batch Jaipur Weaving</span>
            <span>&bull;</span>
          </div>
        </div>
      </div>

    </section>
  );
}
