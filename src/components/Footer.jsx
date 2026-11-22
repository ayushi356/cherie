import React from 'react';
import { MapPin, Mail, ArrowUp } from 'lucide-react';

export default function Footer({ onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="scroll-mt-20 sm:scroll-mt-24 bg-cherie-cream text-cherie-wine border-t border-cherie-secondary/20 relative pt-14 pb-10 sm:pt-20 sm:pb-14 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Bar */}
        <div className="reveal flex flex-col md:flex-row items-center justify-between pb-8 sm:pb-12 border-b border-cherie-secondary/15 gap-6 sm:gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-serif text-3xl sm:text-4xl tracking-[0.25em] uppercase font-light text-cherie-wine">
              Chérie
            </span>
            <span className="font-script text-xl text-cherie-accent mt-1">
              A little love, in every detail.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cherie-wine text-cherie-ivory hover:bg-cherie-body text-[13px] font-sans uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-soft"
            >
              <span>Explore Boutique</span>
              <span className="text-xs">✦</span>
            </a>

            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full bg-cherie-ivory border border-cherie-secondary/25 flex items-center justify-center text-cherie-wine hover:bg-cherie-blush hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-sm"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* 4 Multi-Column Simplified Layout (Customer Care, About CHÉRIE, Social Media, Newsletter) */}
        <div className="reveal reveal-delay-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 py-10 sm:py-14 text-center sm:text-left">
          
          {/* Column 1: Customer Care */}
          <div>
            <h4 className="font-sans text-[12px] sm:text-[13px] font-semibold text-cherie-wine tracking-[0.2em] uppercase mb-4">
              Customer Care
            </h4>
            <ul className="space-y-3 font-sans text-[13.5px] text-cherie-body font-normal">
              <li>
                <span className="block font-medium text-cherie-wine">Pan-India Express Courier</span>
                <span className="text-cherie-secondary text-[12.5px]">Complimentary on orders above ₹4,000</span>
              </li>
              <li>
                <span className="block font-medium text-cherie-wine">Signature Keepsake Packaging</span>
                <span className="text-cherie-secondary text-[12.5px]">Silk ribbons & dried rose petals included</span>
              </li>
              <li>
                <a href="#newsletter" className="hover:text-cherie-wine transition-colors">
                  Concierge & Order Inquiries
                </a>
              </li>
              <li>
                <span className="text-cherie-secondary text-[12.5px]">contact@cherie-boutique.in</span>
              </li>
            </ul>
          </div>

          {/* Column 2: About CHÉRIE */}
          <div>
            <h4 className="font-sans text-[12px] sm:text-[13px] font-semibold text-cherie-wine tracking-[0.2em] uppercase mb-4">
              About CHÉRIE
            </h4>
            <ul className="space-y-3 font-sans text-[13.5px] text-cherie-body font-normal">
              <li>
                <a href="#story" className="hover:text-cherie-wine transition-colors">
                  Our Story & Atelier Heritage
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-cherie-wine transition-colors">
                  Grasse Rose Distilleries
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-cherie-wine transition-colors">
                  Jaipur Mulberry Silk Looms
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-cherie-wine transition-colors">
                  Lookbook & Campaign Archive
                </a>
              </li>
              <li>
                <span className="text-cherie-secondary text-[12px] block pt-1">
                  28 Rue Saint-Honoré, 75001 Paris
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="font-sans text-[12px] sm:text-[13px] font-semibold text-cherie-wine tracking-[0.2em] uppercase mb-4">
              Social Media
            </h4>
            <ul className="space-y-3 font-sans text-[13.5px] text-cherie-body font-normal">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cherie-wine transition-colors flex items-center justify-center sm:justify-start gap-1.5">
                  <span>Instagram</span>
                  <span className="text-cherie-accent text-xs">↗</span>
                </a>
              </li>
              <li>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-cherie-wine transition-colors flex items-center justify-center sm:justify-start gap-1.5">
                  <span>Pinterest Moodboards</span>
                  <span className="text-cherie-accent text-xs">↗</span>
                </a>
              </li>
              <li>
                <span className="text-cherie-secondary text-[12.5px] italic font-serif">
                  “The most ethereal rose-petal blush ever conceived.” — Elle
                </span>
              </li>
              <li>
                <span className="text-cherie-secondary text-[12.5px] italic font-serif">
                  “Bespoke poetry for modern dressing tables.” — Vogue
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-sans text-[12px] sm:text-[13px] font-semibold text-cherie-wine tracking-[0.2em] uppercase mb-4">
              Newsletter
            </h4>
            <p className="font-sans text-[13.5px] text-cherie-body leading-relaxed mb-3 font-normal">
              Join <em className="text-cherie-wine font-medium not-italic">Le Cercle Privé</em> for intimate salon previews, private invitations, and a welcome gift.
            </p>
            <a
              href="#newsletter"
              className="inline-block py-2.5 px-5 rounded-full bg-cherie-blush hover:bg-cherie-rose text-cherie-wine text-[12px] uppercase tracking-[0.16em] font-semibold transition-colors border border-cherie-secondary/25 shadow-sm"
            >
              Subscribe for 15% Off &rarr;
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Reassurances */}
        <div className="pt-6 sm:pt-8 border-t border-cherie-secondary/15 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[13px] font-sans text-cherie-secondary text-center">
          <div>
            <p>© {new Date().getFullYear()} CHÉRIE Maison de Beauté. All rights reserved.</p>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-6 text-[11px] uppercase tracking-[0.18em]">
            <span>Confidentialité</span>
            <span>&bull;</span>
            <span>Conditions de Vente</span>
            <span>&bull;</span>
            <span>Certifié Cruelty-Free</span>
          </div>

          <div className="text-[11px] uppercase tracking-[0.18em] text-cherie-secondary">
            Portfolio Demonstration Prototype
          </div>
        </div>

      </div>
    </footer>
  );
}
