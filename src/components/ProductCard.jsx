import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react';

export default function ProductCard({
  product,
  plateNumber = "Planche I",
  onQuickView,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) {
  const [isAdded, setIsAdded] = useState(false);

  const {
    id,
    name,
    frenchSubtitle,
    category,
    price,
    originalPrice,
    image,
    shades,
    isLimited
  } = product;

  const [selectedShade, setSelectedShade] = useState(shades ? shades[0] : null);
  const [activeImage, setActiveImage] = useState(shades?.[0]?.image || image);

  const handleSelectShade = (shade, e) => {
    e.stopPropagation();
    setSelectedShade(shade);
    if (shade.image) {
      setActiveImage(shade.image);
    }
  };

  const handleAddClick = () => {
    onAddToCart({
      ...product,
      image: activeImage,
      selectedShade
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200);
  };

  const handleQuickViewClick = () => {
    onQuickView({
      ...product,
      image: activeImage,
      selectedShade
    });
  };

  return (
    <div className="group relative flex flex-col bg-cherie-ivory transition-all duration-500 w-full">
      
      {/* Archival Matting & Photograph Container */}
      <div className="editorial-matting rounded-2xl overflow-hidden mb-3.5 relative bg-cherie-ivory transition-all duration-500 ease-out group-hover:shadow-elevated group-hover:-translate-y-1">
        <div
          className="relative aspect-[4/5] rounded-xl overflow-hidden bg-cherie-blush/40 cursor-pointer"
          onClick={handleQuickViewClick}
        >
          <img
            src={activeImage}
            alt={`${name} - ${selectedShade ? selectedShade.name : ''}`}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
          />

          {/* Understated Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-cherie-wine/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Archival Plate Marker */}
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-cherie-wine bg-cherie-ivory/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-cherie-secondary/20 font-medium shadow-sm">
              {plateNumber}
            </span>
          </div>

          {/* Editorial Tag if limited */}
          {isLimited && (
            <div className="absolute top-2.5 right-11 z-10">
              <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-cherie-rose bg-cherie-wine/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                Édition Rare
              </span>
            </div>
          )}

          {/* Discreet Wishlist Button with 40px Touch Area */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist({ ...product, image: activeImage, selectedShade });
            }}
            className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ease-out active:scale-90 ${
              isWishlisted
                ? 'bg-cherie-wine text-cherie-rose scale-105'
                : 'bg-cherie-ivory/90 text-cherie-wine hover:text-cherie-accent hover:scale-110'
            }`}
            aria-label={isWishlisted ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`}
          >
            <Heart size={14} className={isWishlisted ? 'fill-cherie-rose stroke-cherie-rose' : 'stroke-[1.6]'} />
          </button>

          {/* Action Bar (Always accessible on Mobile touch screens, Hover on Desktop) */}
          <div
            className="absolute inset-x-2.5 sm:inset-x-3 bottom-2.5 sm:bottom-3 flex items-center gap-1.5 sm:gap-2 opacity-100 sm:opacity-0 sm:translate-y-6 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 ease-out z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleQuickViewClick}
              className="flex-1 py-2 sm:py-2.5 px-2.5 sm:px-3 rounded-full bg-cherie-ivory/95 backdrop-blur-md text-cherie-wine hover:bg-cherie-ivory text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.18em] font-semibold border border-cherie-secondary/25 shadow-sm flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-95"
            >
              <Eye size={13} className="text-cherie-accent shrink-0" />
              <span>Quick View</span>
            </button>
            <button
              onClick={handleAddClick}
              className={`py-2 sm:py-2.5 px-3 sm:px-4 rounded-full text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.18em] font-semibold shadow-sm flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-95 shrink-0 ${
                isAdded
                  ? 'bg-emerald-800 text-cherie-ivory scale-102'
                  : 'bg-cherie-wine text-cherie-ivory hover:bg-cherie-body'
              }`}
              aria-label={`Add ${name} to bag`}
            >
              {isAdded ? (
                <>
                  <Check size={13} className="shrink-0 text-emerald-200" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={13} className="shrink-0" />
                  <span>Add to Bag</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Editorial Typographic Information */}
      <div className="flex flex-col flex-1 justify-between px-1">
        <div>
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-cherie-secondary font-semibold block mb-1">
            {category}
          </span>

          <h3
            onClick={handleQuickViewClick}
            className="font-serif text-base sm:text-[17px] lg:text-[18px] font-normal text-cherie-wine hover:text-cherie-accent cursor-pointer transition-colors leading-snug"
          >
            {name}
          </h3>

          <p className="font-script text-cherie-accent text-base sm:text-lg mb-2">
            {frenchSubtitle}
          </p>

          {/* Interactive Color Variant Swatches */}
          {shades && shades.length > 0 && (
            <div className="flex flex-col gap-1 mb-3 pt-0.5">
              <div className="flex items-center gap-2">
                {shades.map((shade, idx) => {
                  const isSelected = selectedShade?.name === shade.name;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => handleSelectShade(shade, e)}
                      title={`${shade.name} - ${shade.desc}`}
                      aria-label={`Select shade ${shade.name}`}
                      className={`w-4 h-4 rounded-full transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'ring-2 ring-cherie-wine ring-offset-1 scale-110 shadow-sm'
                          : 'opacity-80 hover:opacity-100 hover:scale-105 border border-cherie-secondary/40'
                      }`}
                      style={{ backgroundColor: shade.hex }}
                    />
                  );
                })}
                <span className="text-[11px] sm:text-xs text-cherie-secondary font-sans ml-1">
                  Nuance: <strong className="text-cherie-wine font-medium">{selectedShade?.name}</strong>
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Price Tag Line */}
        <div className="pt-2.5 border-t border-cherie-secondary/15 flex items-baseline justify-between mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-[15px] sm:text-base font-semibold text-cherie-wine">
              ₹{price.toLocaleString('en-IN')}
            </span>
            {originalPrice && (
              <span className="font-sans text-xs sm:text-[13px] text-cherie-secondary line-through">
                ₹{originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-cherie-secondary font-medium">
            Taxes included
          </span>
        </div>
      </div>

    </div>
  );
}
