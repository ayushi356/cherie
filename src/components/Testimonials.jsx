import React from 'react';
import { PRESS_MENTIONS } from '../data/products';

const PATRON_LETTERS = [
  {
    quote: "The Rose Poudrée blush feels like spun chiffon against the cheek. It imparts that elusive lit-from-within glow seen in 18th-century French portraits. Opening the parcel was like receiving a private gift from a friend in Paris.",
    author: "Éléonore de Saint-Germain",
    location: "Rue de Tournon, Paris VIe",
    date: "14 Octobre",
    product: "Poudre de Soie Petal Blush"
  },
  {
    quote: "L’Élixir d’Amour is pure olfactory magic. Candied violet, delicate powders, and warm Mysore sandalwood. I receive compliments every single evening I wear it. Truly an heirloom piece for the dressing table.",
    author: "Ananya Singhania",
    location: "Malabar Hill, Mumbai",
    date: "28 Novembre",
    product: "L’Élixir d’Amour Eau de Parfum"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 lg:py-36 bg-cherie-blush/30 border-t border-cherie-secondary/15 relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-2.5 sm:mb-3">
            <span className="w-6 sm:w-8 h-px bg-cherie-secondary/30" />
            <span className="font-script text-2xl sm:text-3xl text-cherie-accent">
              Mots Doux
            </span>
            <span className="w-6 sm:w-8 h-px bg-cherie-secondary/30" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light text-cherie-wine tracking-tight mb-3 sm:mb-4">
            Revue de Presse & Correspondance
          </h2>

          <p className="font-sans text-base sm:text-[17px] text-cherie-body font-light leading-relaxed max-w-md mx-auto">
            Reflections shared by publications and patrons who cherish slow beauty and poetic vanity rituals.
          </p>
        </div>

        {/* Part 1: Editorial Press Citations (2 columns on mobile, 4 on desktop) */}
        <div className="reveal reveal-delay-1 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20 pb-10 sm:pb-16 border-b border-cherie-secondary/20">
          {PRESS_MENTIONS.map((press, i) => (
            <div
              key={i}
              className="flex flex-col justify-between text-center px-1 sm:px-4 group hover:-translate-y-1 transition-transform duration-400 ease-out"
            >
              <h4 className="font-serif text-base sm:text-lg font-bold tracking-[0.2em] sm:tracking-[0.25em] text-cherie-wine uppercase mb-1.5 sm:mb-3 group-hover:text-cherie-accent transition-colors">
                {press.name}
              </h4>
              <p className="font-serif italic text-sm sm:text-base text-cherie-body leading-relaxed font-light">
                “{press.quote}”
              </p>
              <div className="w-5 sm:w-6 h-px bg-cherie-secondary/30 mx-auto mt-3 sm:mt-4 group-hover:w-10 sm:group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Part 2: Intimate Patron Correspondences (Literary Letter Format) */}
        <div className="max-w-4xl mx-auto">
          <div className="reveal text-center mb-6 sm:mb-8">
            <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-cherie-secondary font-semibold">
              Extraits de la Correspondance Privée
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {PATRON_LETTERS.map((letter, idx) => (
              <div
                key={idx}
                className="reveal editorial-matting rounded-3xl bg-cherie-ivory p-6 sm:p-8 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col justify-between relative border border-cherie-secondary/20"
                style={{ transitionDelay: `${idx * 0.12}s` }}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.18em] sm:tracking-[0.2em] text-cherie-secondary mb-3 sm:mb-4 pb-2 border-b border-cherie-secondary/15">
                    <span>{letter.location}</span>
                    <span>{letter.date}</span>
                  </div>

                  <p className="font-serif italic text-base sm:text-[17px] lg:text-[18px] text-cherie-wine leading-relaxed font-light mb-5 sm:mb-6">
                    “{letter.quote}”
                  </p>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-cherie-secondary/15 flex items-center justify-between">
                  <div>
                    <h5 className="font-serif text-sm sm:text-base font-semibold text-cherie-wine">
                      {letter.author}
                    </h5>
                    <span className="font-sans text-[10px] sm:text-[11px] text-cherie-secondary tracking-wider uppercase block mt-0.5 font-medium">
                      Acquisition : {letter.product}
                    </span>
                  </div>
                  <span className="text-sm select-none text-cherie-accent">❦</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
