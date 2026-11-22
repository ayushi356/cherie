import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Copy, Check, X } from 'lucide-react';

export default function BrandStory() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const promoCode = "AMOUR15";

  const handleToggleLetter = () => {
    if (!isLetterOpen) {
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#E7BFC8', '#F8E9E9', '#A96F7C', '#FFF9F3', '#563B43'],
          disableForReducedMotion: true,
        });
      } catch (err) {}
    }
    setIsLetterOpen(!isLetterOpen);
  };

  const handleCopyCode = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="story" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 lg:py-36 bg-cherie-cream/80 relative w-full max-w-full overflow-hidden border-y border-cherie-secondary/15">
      
      {/* Subtle archival paper grain */}
      <div className="absolute inset-0 subtle-paper-grain opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Chapter Header */}
        <div className="reveal flex flex-wrap items-center justify-between gap-y-1 border-b border-cherie-secondary/20 pb-2.5 sm:pb-3 mb-10 sm:mb-16 text-[10px] sm:text-xs font-sans uppercase tracking-[0.22em] sm:tracking-[0.28em] text-cherie-secondary font-medium">
          <span>Chapitre Unique &bull; L'Atelier</span>
          <span className="hidden sm:inline">De la Matière et du Geste</span>
          <span>Fondé à Paris</span>
        </div>

        {/* Magazine Editorial Spread Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          
          {/* Left Column: Asymmetrical Archival Photo Spread */}
          <div className="lg:col-span-5 relative reveal">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Main Plate: Still Life Vanity */}
              <div className="editorial-matting rounded-3xl overflow-hidden relative shadow-elevated group">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80"
                    alt="The Vintage Vanity and Blown-Glass Flacons"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-800 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cherie-wine/35 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-cherie-ivory/95 backdrop-blur-sm px-3.5 py-2 rounded-xl text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.22em] text-cherie-wine border border-cherie-secondary/20 flex justify-between shadow-soft font-medium">
                    <span>Planche Historique &bull; Fig. 01</span>
                    <span>Grasse &bull; Paris</span>
                  </div>
                </div>
              </div>

              {/* Offset Miniature Plate */}
              <div className="absolute -bottom-10 -right-6 sm:-right-8 w-44 sm:w-56 editorial-matting rounded-2xl shadow-elevated border border-cherie-secondary/20 transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out hidden sm:block">
                <div className="aspect-square rounded-xl overflow-hidden bg-cherie-blush mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=500&q=80"
                    alt="Hand-pleated silk satin and pearls"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-serif italic text-xs text-cherie-wine text-center leading-tight">
                  Hand-tied silk ribbons & freshwater pearls
                </p>
                <p className="font-sans text-[8.5px] uppercase tracking-[0.25em] text-cherie-secondary text-center mt-1">
                  L'Atelier de Soie
                </p>
              </div>

              {/* Wax Seal Stamp */}
              <div className="absolute top-2.5 left-2.5 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cherie-wine text-cherie-rose flex items-center justify-center font-serif text-lg sm:text-2xl font-bold shadow-rose border-2 border-cherie-rose/40 select-none transition-transform duration-400 hover:rotate-12 cursor-pointer z-10">
                C
              </div>

            </div>
          </div>

          {/* Right Column: Literary Essay & The 3 Sensory Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="reveal inline-flex items-center gap-2 mb-3 sm:mb-4 self-start">
              <span className="w-5 h-px bg-cherie-secondary/40" />
              <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-cherie-secondary font-semibold">
                La Philosophie
              </span>
            </div>

            {/* Target: 36-44px heading */}
            <h2 className="reveal reveal-delay-1 font-serif text-3xl sm:text-4xl lg:text-[42px] font-light text-cherie-wine leading-[1.15] mb-4 sm:mb-6">
              A Quiet Antidote to the <br />
              <span className="italic font-normal text-cherie-accent">Rushed World</span>.
            </h2>

            {/* Editorial Drop-Cap Paragraph (Target: 16-18px body) */}
            <p className="reveal reveal-delay-2 drop-cap font-serif text-base sm:text-[17px] text-cherie-body leading-relaxed mb-4 sm:mb-6 font-light">
              CHÉRIE was born out of a desire to revive the slow, tactile joy of vintage dressing tables: the soft metallic click of an engraved compact, the whisper of pure mulberry silk against sun-warmed skin, and the intoxicating sillage of an artisan perfume flacon sealed with silk thread.
            </p>

            <p className="reveal reveal-delay-2 font-sans text-sm sm:text-base text-cherie-body font-light leading-relaxed mb-8 sm:mb-10">
              We reject industrial rush and sterile packaging. Every creation is conceived between our perfume studio in Grasse and heritage handloom ateliers in India — pairing French romanticism with generational craftsmanship.
            </p>

            {/* Triptych of Materials */}
            <div className="reveal reveal-delay-3 space-y-4 sm:space-y-6 mb-8 sm:mb-12 border-y border-cherie-secondary/15 py-6 sm:py-8">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-6 items-baseline group">
                <span className="sm:col-span-4 font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-cherie-secondary font-semibold group-hover:text-cherie-wine transition-colors">
                  01. La Rose de Grasse
                </span>
                <p className="sm:col-span-8 font-serif text-sm sm:text-[15px] text-cherie-body leading-relaxed font-light">
                  Distilled from hand-harvested centifolia damask roses gathered at dawn, yielding an ethereal floral water rich in restorative vitamins.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-6 items-baseline border-t border-cherie-secondary/10 pt-3.5 sm:pt-4 group">
                <span className="sm:col-span-4 font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-cherie-secondary font-semibold group-hover:text-cherie-wine transition-colors">
                  02. Le Verre Cannelé
                </span>
                <p className="sm:col-span-8 font-serif text-sm sm:text-[15px] text-cherie-body leading-relaxed font-light">
                  Each flacon is individually mouth-blown from fluted crystal, accompanied by a traditional silk-thread bulb atomizer designed to be refilled for lifetimes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-6 items-baseline border-t border-cherie-secondary/10 pt-3.5 sm:pt-4 group">
                <span className="sm:col-span-4 font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-cherie-secondary font-semibold group-hover:text-cherie-wine transition-colors">
                  03. La Soie de Mûrier
                </span>
                <p className="sm:col-span-8 font-serif text-sm sm:text-[15px] text-cherie-body leading-relaxed font-light">
                  22-Momme organic mulberry silk loomed on heritage wooden shuttles and bordered with French Chantilly lace — liquid moonlight against the skin.
                </p>
              </div>
            </div>

            {/* Incorporated Founder's Message & Billet Doux */}
            <div id="love-letter" className="reveal reveal-delay-4 mt-2">
              <div className="editorial-matting rounded-3xl overflow-hidden bg-cherie-ivory border border-cherie-secondary/25 shadow-elevated transition-all duration-300">
                <div
                  onClick={handleToggleLetter}
                  className={`p-6 sm:p-8 transition-colors duration-300 cursor-pointer ${
                    !isLetterOpen ? 'hover:bg-cherie-blush/40' : 'bg-cherie-ivory'
                  }`}
                >
                  {!isLetterOpen ? (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left select-none group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-cherie-wine text-cherie-rose flex items-center justify-center font-serif text-xl font-bold shadow-rose border border-cherie-rose/40 group-hover:scale-105 transition-transform duration-300 shrink-0">
                          C
                        </div>
                        <div>
                          <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-cherie-secondary font-semibold block">
                            Billet Doux &bull; Founder's Note
                          </span>
                          <h3 className="font-serif text-lg sm:text-xl text-cherie-wine font-normal">
                            A Personal Note from the Atelier
                          </h3>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cherie-blush text-cherie-wine border border-cherie-secondary/20 text-xs font-sans uppercase tracking-[0.16em] font-semibold group-hover:bg-cherie-rose transition-colors">
                        <span>Click to Unfold Note</span>
                        <span className="text-cherie-accent">✦</span>
                      </div>
                    </div>
                  ) : (
                    <div className="animate-fade-in text-left">
                      <div className="flex items-start justify-between pb-3.5 border-b border-cherie-secondary/20 mb-4 sm:mb-6">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-cherie-wine text-cherie-rose flex items-center justify-center font-serif text-xs font-bold shadow-sm">
                            C
                          </div>
                          <div>
                            <p className="font-serif text-sm font-semibold text-cherie-wine">L'Atelier CHÉRIE</p>
                            <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-cherie-secondary">28 Rue Saint-Honoré, Paris</p>
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsLetterOpen(false);
                          }}
                          className="p-1.5 rounded-full text-cherie-wine hover:bg-cherie-blush active:scale-90 transition-all"
                          aria-label="Fold note back"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <p className="font-script text-2xl sm:text-3xl text-cherie-accent mb-3">
                        Chère amie,
                      </p>

                      <div className="font-serif text-sm sm:text-base text-cherie-body leading-relaxed space-y-3 font-light">
                        <p>
                          Thank you for pausing in this quiet corner of our world.
                        </p>
                        <p>
                          CHÉRIE began as an antidote to the rushed, impersonal nature of modern beauty. We wanted to build something tactile and tender: an antique flacon that catches morning sun on your vanity, a blush milled so finely it feels like spun chiffon, and heirloom ribbons tied by hand.
                        </p>
                        <p>
                          May these small creations bring quiet confidence, romance, and poetry to your daily rituals. You deserve every ounce of sweetness life has to offer.
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-cherie-secondary/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <p className="font-script text-2xl text-cherie-accent">Avec tout notre amour,</p>
                          <p className="font-sans text-[10px] text-cherie-secondary uppercase tracking-[0.2em] mt-0.5">The Artisans of CHÉRIE</p>
                        </div>

                        <div className="bg-cherie-blush/90 border border-cherie-secondary/25 rounded-2xl p-3 flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto shadow-sm">
                          <div>
                            <span className="font-sans text-[8.5px] uppercase tracking-[0.22em] text-cherie-secondary block font-semibold">
                              Founder's 15% Welcome Gift
                            </span>
                            <span className="font-serif text-base font-bold text-cherie-wine tracking-wider">
                              {promoCode}
                            </span>
                          </div>

                          <button
                            onClick={handleCopyCode}
                            className="py-1.5 px-3.5 rounded-full bg-cherie-wine hover:bg-cherie-body text-cherie-ivory text-[10px] font-sans font-semibold uppercase tracking-[0.15em] transition-all duration-200 shadow-sm active:scale-95 flex items-center gap-1.5 shrink-0"
                          >
                            {copied ? (
                              <>
                                <Check size={12} className="text-emerald-300" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy size={12} />
                                <span>Copy 15%</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 text-center">
                        <button
                          onClick={() => setIsLetterOpen(false)}
                          className="text-[10px] font-sans uppercase tracking-[0.2em] text-cherie-secondary hover:text-cherie-wine underline underline-offset-4 transition-colors"
                        >
                          Fold letter back &uarr;
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
