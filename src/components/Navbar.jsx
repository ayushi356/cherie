import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Menu, X, Mail, Search } from 'lucide-react';

export default function Navbar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animateBag, setAnimateBag] = useState(false);
  const [animateHeart, setAnimateHeart] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setAnimateBag(true);
      const timer = setTimeout(() => setAnimateBag(false), 400);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  useEffect(() => {
    if (wishlistCount > 0) {
      setAnimateHeart(true);
      const timer = setTimeout(() => setAnimateHeart(false), 400);
      return () => clearTimeout(timer);
    }
  }, [wishlistCount]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-cherie-ivory/95 backdrop-blur-md shadow-soft border-b border-cherie-secondary/15 py-3'
          : 'bg-cherie-ivory/90 backdrop-blur-sm border-b border-cherie-secondary/10 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu & Search Triggers with 44px+ Touch Targets */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center text-cherie-wine hover:text-cherie-body active:scale-90 transition-all rounded-full"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <button
              onClick={onOpenSearch}
              className="w-11 h-11 flex items-center justify-center text-cherie-wine hover:text-cherie-body active:scale-90 transition-all rounded-full"
              aria-label="Search collection"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Desktop Left Navigation Links (Target: 14-15px font size) */}
          <nav className="hidden lg:flex items-center space-x-8 text-[14px] xl:text-[15px] font-sans font-medium tracking-[0.18em] uppercase text-cherie-wine">
            <button
              onClick={() => handleNavClick('products')}
              className="nav-link-editorial hover:text-cherie-body py-1 transition-colors"
            >
              <span>Shop</span>
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="nav-link-editorial hover:text-cherie-body py-1 transition-colors"
            >
              <span>Collections</span>
            </button>
            <button
              onClick={() => handleNavClick('story')}
              className="nav-link-editorial hover:text-cherie-body py-1 transition-colors"
            >
              <span>Our Story</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="nav-link-editorial hover:text-cherie-body py-1 transition-colors"
            >
              <span>Contact</span>
            </button>
          </nav>

          {/* Centered Brand Masthead */}
          <div
            className="flex flex-col items-center text-center cursor-pointer select-none group px-2"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-serif text-2xl sm:text-3xl lg:text-[34px] tracking-[0.24em] sm:tracking-[0.28em] font-light text-cherie-wine uppercase leading-none transition-transform duration-500 ease-out group-hover:scale-[1.015]">
              Chérie
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-1.5 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              <span className="w-2.5 sm:w-3.5 h-px bg-cherie-secondary/30" />
              <span className="font-sans text-[8px] sm:text-[9.5px] tracking-[0.28em] sm:tracking-[0.32em] uppercase text-cherie-secondary font-medium">
                Maison de Beauté &bull; Paris
              </span>
              <span className="w-2.5 sm:w-3.5 h-px bg-cherie-secondary/30" />
            </div>
          </div>

          {/* Desktop & Mobile Right Action Controls */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            <button
              onClick={onOpenSearch}
              className="hidden lg:flex items-center gap-2 text-[14px] font-sans tracking-[0.16em] uppercase text-cherie-wine hover:text-cherie-body px-3.5 py-2 rounded-full hover:bg-cherie-blush/50 transition-all duration-300 active:scale-95 font-medium"
              aria-label="Search creations"
            >
              <Search size={16} className="text-cherie-secondary" />
              <span>Search</span>
            </button>

            {/* Wishlist / Saved Keepsakes */}
            <button
              onClick={onOpenWishlist}
              className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-cherie-wine hover:text-cherie-accent transition-all duration-300 active:scale-90 relative ${
                animateHeart ? 'animate-micro-pulse' : ''
              }`}
              title="Saved Keepsakes"
              aria-label="Saved Keepsakes"
            >
              <Heart size={20} className="stroke-[1.6]" />
              {wishlistCount > 0 && (
                <span className="absolute top-1.5 right-1.5 bg-cherie-accent text-cherie-ivory text-[10px] font-sans font-bold h-4 w-4 rounded-full flex items-center justify-center animate-fade-in">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              className={`relative flex items-center gap-2 py-2 px-3 sm:px-4 rounded-full bg-cherie-wine text-cherie-ivory hover:bg-cherie-body transition-all duration-300 shadow-soft active:scale-95 ml-1 ${
                animateBag ? 'animate-micro-pulse' : ''
              }`}
              aria-label="Open shopping bag"
            >
              <ShoppingBag size={16} className="stroke-[1.6]" />
              <span className="text-[12px] font-sans font-semibold tracking-[0.18em] uppercase hidden sm:inline">
                Bag
              </span>
              <span className="bg-cherie-rose text-cherie-wine text-[10.5px] font-bold rounded-full h-4.5 w-4.5 px-1.5 flex items-center justify-center font-sans">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Menu with 48px Comfortable Touch Targets */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 pb-6 border-t border-cherie-secondary/20 bg-cherie-ivory/98 backdrop-blur-md rounded-b-2xl shadow-elevated animate-fade-in px-4">
            <div className="text-center pb-2.5 mb-3 border-b border-cherie-secondary/15">
              <span className="font-script text-cherie-accent text-xl">A little love, in every detail.</span>
            </div>
            
            <nav className="flex flex-col space-y-1.5 text-center text-sm font-sans tracking-[0.2em] uppercase font-medium text-cherie-wine">
              <button
                onClick={() => handleNavClick('products')}
                className="min-h-[48px] flex items-center justify-center hover:bg-cherie-blush/50 rounded-xl transition-colors active:scale-98"
              >
                Shop
              </button>
              <button
                onClick={() => handleNavClick('gallery')}
                className="min-h-[48px] flex items-center justify-center hover:bg-cherie-blush/50 rounded-xl transition-colors active:scale-98"
              >
                Collections
              </button>
              <button
                onClick={() => handleNavClick('story')}
                className="min-h-[48px] flex items-center justify-center hover:bg-cherie-blush/50 rounded-xl transition-colors active:scale-98"
              >
                Our Story
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="min-h-[48px] flex items-center justify-center hover:bg-cherie-blush/50 rounded-xl transition-colors active:scale-98"
              >
                Contact
              </button>
            </nav>

            <div className="mt-4 pt-3 border-t border-cherie-secondary/15 text-center">
              <span className="text-[11px] font-sans text-cherie-secondary tracking-wider uppercase block">
                Pan-India Courier &bull; Free on Orders ₹4,000+
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
