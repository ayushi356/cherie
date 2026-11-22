import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Copy, Check, X } from 'lucide-react';

export default function LoveLetterEnvelope({ isOpen, onToggle, promoCode = "AMOUR15" }) {
  const [copied, setCopied] = useState(false);

  const handleOpenEnvelope = () => {
    if (!isOpen) {
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#E7BFC8', '#F8E9E9', '#A96F7C', '#FFF9F3', '#D4AF37'],
          disableForReducedMotion: true,
        });
      } catch (err) {}
    }
    onToggle();
  };

  const handleCopyCode = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="love-letter" className="py-16 sm:py-24 lg:py-36 bg-cherie-ivory relative w-full max-w-full overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="reveal text-center max-w-lg mx-auto mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-6 sm:w-8 h-px bg-cherie-mauve/30" />
            <span className="font-script text-xl sm:text-2xl text-cherie-mauve">
              Billet Doux
            </span>
            <span className="w-6 sm:w-8 h-px bg-cherie-mauve/30" />
          </div>
          <h2 className="font-serif text-2.5xl sm:text-4xl text-cherie-wine font-light mb-2.5">
            An Intimate Note For You
          </h2>
          <p className="font-sans text-xs sm:text-sm text-cherie-wine/75 font-light leading-relaxed">
            Click upon the artisan wax seal to untie the silk ribbon and unfold a private keepsake from our atelier.
          </p>
        </div>

        {/* Envelope Container with Fluid Hover State */}
        <div className="reveal reveal-delay-1 max-w-xl mx-auto w-full">
          <div className="editorial-matting rounded-3xl overflow-hidden bg-cherie-ivory shadow-elevated border border-cherie-mauve/25">
            <div
              onClick={handleOpenEnvelope}
              className={`p-5 sm:p-10 transition-all duration-500 ease-out cursor-pointer ${
                !isOpen ? 'hover:bg-cherie-blush/30' : 'bg-cherie-cream'
              }`}
            >
              {!isOpen ? (
                /* Closed Envelope Facade */
                <div className="flex flex-col items-center justify-center py-6 sm:py-10 px-2 sm:px-4 text-center select-none group">
                  
                  <div className="mb-3 sm:mb-4 text-cherie-mauve text-2.5xl sm:text-3xl transition-transform duration-300 group-hover:scale-110">
                    🎀
                  </div>

                  <p className="font-script text-2.5xl sm:text-3xl text-cherie-mauve mb-1.5 sm:mb-2">
                    Pour Vous, Chère Amie...
                  </p>
                  
                  <p className="font-sans text-[9px] sm:text-[10px] text-cherie-wine/70 uppercase tracking-[0.22em] sm:tracking-[0.25em] mb-6 sm:mb-8">
                    Maison CHÉRIE Paris &bull; Confidentiel
                  </p>

                  {/* Wax Seal Button with Tactile Breathing Hover */}
                  <div className="relative group">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cherie-wine text-cherie-rose flex items-center justify-center font-serif text-xl sm:text-2xl font-bold shadow-rose border-2 border-cherie-rose/60 transition-all duration-400 group-hover:scale-110 group-hover:shadow-elevated active:scale-95">
                      C
                    </div>
                    <span className="absolute -bottom-6 sm:-bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8.5px] sm:text-[9px] uppercase tracking-[0.25em] font-sans font-medium text-cherie-mauve opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to Unfold
                    </span>
                  </div>

                  <div className="mt-8 sm:mt-10 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-sans text-cherie-mauve font-medium">
                    <span>✦</span>
                    <span>Includes an exclusive 15% boutique discovery gift</span>
                    <span>✦</span>
                  </div>
                </div>
              ) : (
                /* Unfolded Letter with Smooth Fade-in */
                <div className="animate-fade-in text-left">
                  
                  {/* Top stamp & Close Button */}
                  <div className="flex items-start justify-between pb-3 sm:pb-4 border-b border-cherie-mauve/20 mb-5 sm:mb-6">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cherie-wine text-cherie-rose flex items-center justify-center font-serif text-xs font-bold shadow-sm">
                        C
                      </div>
                      <div>
                        <p className="font-serif text-xs sm:text-sm font-semibold text-cherie-wine">L'Atelier CHÉRIE</p>
                        <p className="font-sans text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] text-cherie-mauve">28 Rue Saint-Honoré, Paris</p>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggle();
                      }}
                      className="p-1.5 rounded-full text-cherie-wine/60 hover:text-cherie-wine hover:bg-cherie-blush active:scale-90 transition-all"
                      aria-label="Fold note back"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Letter Body */}
                  <p className="font-script text-2xl sm:text-3xl text-cherie-mauve mb-3 sm:mb-4">
                    Chère amie,
                  </p>

                  <div className="font-serif text-sm sm:text-lg text-cherie-wine leading-relaxed space-y-3 sm:space-y-4 font-light">
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

                  {/* Sign-off & Discount Code */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-cherie-mauve/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-script text-2xl text-cherie-mauve">Avec tout notre amour,</p>
                      <p className="font-sans text-[9px] sm:text-[10px] text-cherie-wine/70 uppercase tracking-[0.2em] mt-0.5">The Artisans of CHÉRIE</p>
                    </div>

                    {/* Voucher Box with Fluid Copy Action */}
                    <div className="bg-cherie-blush/80 border border-cherie-mauve/25 rounded-2xl p-2.5 sm:p-3 flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto shadow-sm">
                      <div>
                        <span className="font-sans text-[7.5px] sm:text-[8px] uppercase tracking-[0.25em] text-cherie-mauve block font-semibold">
                          Your Exclusive Gift
                        </span>
                        <span className="font-serif text-sm sm:text-base font-bold text-cherie-wine tracking-wider">
                          {promoCode}
                        </span>
                      </div>

                      <button
                        onClick={handleCopyCode}
                        className="py-1.5 px-3 sm:px-3.5 rounded-full bg-cherie-wine hover:bg-cherie-mauve text-cherie-ivory text-[9.5px] sm:text-[10px] font-sans font-semibold uppercase tracking-[0.15em] transition-all duration-200 shadow-sm hover:shadow-soft active:scale-95 flex items-center gap-1.5 shrink-0"
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

                  {/* Fold back prompt */}
                  <div className="mt-5 sm:mt-6 text-center">
                    <button
                      onClick={onToggle}
                      className="text-[9.5px] sm:text-[10px] font-sans uppercase tracking-[0.2em] text-cherie-mauve hover:text-cherie-wine underline underline-offset-4 transition-colors py-1"
                    >
                      Fold letter back into envelope &uarr;
                    </button>
                  </div>

                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
