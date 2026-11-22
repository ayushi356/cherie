import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { SlidersHorizontal } from 'lucide-react';

const CATEGORIES = [
  { label: 'All Creations', value: 'All Creations' },
  { label: 'I. Beauty', value: 'La Beauté' },
  { label: 'II. Fragrance', value: 'Parfumerie' },
  { label: 'III. Silk & Couture', value: 'Mode & Soie' },
  { label: 'IV. Accessories', value: 'Accessoires' }
];

export default function FeaturedProducts({
  products,
  selectedCategory,
  onSelectCategory,
  onQuickView,
  onAddToCart,
  wishlist,
  onToggleWishlist
}) {
  const [activeTab, setActiveTab] = useState(selectedCategory || 'All Creations');
  const [sortBy, setSortBy] = useState('featured');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (selectedCategory) {
      setActiveTab(selectedCategory);
    }
  }, [selectedCategory]);

  const handleTabChange = (catVal) => {
    if (activeTab === catVal) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(catVal);
      if (onSelectCategory) onSelectCategory(catVal);
      setIsAnimating(false);
    }, 150);
  };

  // Filter products
  const filteredProducts = products.filter((p) => {
    if (activeTab === 'All Creations') return true;
    return p.category === activeTab;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <section id="products" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-cherie-ivory relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-2.5 sm:mb-3">
            <span className="w-6 sm:w-8 h-px bg-cherie-secondary/30" />
            <span className="font-script text-2xl sm:text-3xl text-cherie-accent tracking-wide">
              Objets de Désir
            </span>
            <span className="w-6 sm:w-8 h-px bg-cherie-secondary/30" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light text-cherie-wine tracking-tight mb-3 sm:mb-4">
            The Iconique Creations
          </h2>

          <p className="font-sans text-base sm:text-[17px] text-cherie-body font-light leading-relaxed max-w-lg mx-auto">
            From the softest micronized damask rose blush to pure mulberry silk slips and antique blown-glass flacons. Four signature heirlooms handcrafted for your vanity.
          </p>
        </div>

        {/* Quiet Editorial Category Index & Sorting (Wrap Cleanly on Mobile) */}
        <div className="reveal reveal-delay-1 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 mb-10 sm:mb-14 pb-4 sm:pb-5 border-b border-cherie-secondary/20">
          {/* Chapter Links */}
          <div className="flex items-center flex-wrap justify-center gap-1.5 sm:gap-2.5 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleTabChange(cat.value)}
                className={`py-2 px-3.5 sm:px-4 rounded-full text-xs sm:text-[13px] font-sans tracking-[0.16em] sm:tracking-[0.18em] uppercase transition-all duration-300 active:scale-95 ${
                  activeTab === cat.value
                    ? 'bg-cherie-wine text-cherie-ivory font-semibold shadow-soft -translate-y-0.5'
                    : 'text-cherie-body hover:text-cherie-wine hover:bg-cherie-blush/60 font-medium'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Minimalist Sorting Dropdown */}
          <div className="flex items-center justify-between w-full md:w-auto gap-3 text-xs sm:text-sm text-cherie-secondary font-sans pt-1 md:pt-0">
            <span className="text-xs uppercase tracking-wider text-cherie-secondary font-medium">
              {sortedProducts.length} creations
            </span>
            <div className="flex items-center gap-2 border-b border-cherie-secondary/30 pb-0.5 px-1 hover:border-cherie-wine transition-colors">
              <SlidersHorizontal size={13} className="text-cherie-secondary" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-cherie-wine text-xs sm:text-[13px] focus:outline-none cursor-pointer uppercase tracking-wider font-medium"
                aria-label="Sort creations"
              >
                <option value="featured">Curated Order</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* The 4 Hero Product Plates with Proportional Mobile Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 transition-all duration-400 ease-out ${
            isAnimating ? 'opacity-30 translate-y-3' : 'opacity-100 translate-y-0'
          }`}
        >
          {sortedProducts.slice(0, 4).map((product, idx) => (
            <div key={product.id} className="reveal" style={{ transitionDelay: `${idx * 0.08}s` }}>
              <ProductCard
                product={product}
                plateNumber={`Planche 0${idx + 1}`}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                isWishlisted={Boolean(wishlist[product.id])}
                onToggleWishlist={onToggleWishlist}
              />
            </div>
          ))}
        </div>

        {/* Additional Curations if category filter expanded */}
        {sortedProducts.length > 4 && (
          <div className="mt-10 sm:mt-12 pt-8 border-t border-cherie-mauve/15">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {sortedProducts.slice(4).map((product, idx) => (
                <div key={product.id} className="reveal" style={{ transitionDelay: `${idx * 0.08}s` }}>
                  <ProductCard
                    product={product}
                    plateNumber={`Planche 0${idx + 5}`}
                    onQuickView={onQuickView}
                    onAddToCart={onAddToCart}
                    isWishlisted={Boolean(wishlist[product.id])}
                    onToggleWishlist={onToggleWishlist}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
