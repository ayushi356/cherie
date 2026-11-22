import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, Check } from 'lucide-react';

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) {
  if (!product) return null;

  const {
    id,
    name,
    frenchSubtitle,
    category,
    price,
    originalPrice,
    rating,
    reviewsCount,
    image,
    gallery,
    description,
    details,
    scentNotes,
    shades,
    sizes,
    tag
  } = product;

  const [selectedImage, setSelectedImage] = useState(image);
  const [selectedShade, setSelectedShade] = useState(shades ? shades[0] : null);
  const [selectedSize, setSelectedSize] = useState(sizes ? sizes[0] : null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [isImageFading, setIsImageFading] = useState(false);

  const imagesList = gallery && gallery.length > 0 ? gallery : [image];

  const handleImageChange = (newImg) => {
    if (newImg === selectedImage) return;
    setIsImageFading(true);
    setTimeout(() => {
      setSelectedImage(newImg);
      setIsImageFading(false);
    }, 120);
  };

  const handleAdd = () => {
    onAddToCart({
      ...product,
      selectedShade,
      selectedSize,
      quantity
    });
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-cherie-wine/60 backdrop-blur-sm overflow-y-auto animate-fade-in w-full max-w-full"
      onClick={onClose}
    >
      <div
        className="relative bg-cherie-ivory rounded-3xl max-w-4xl w-full max-h-[94vh] sm:max-h-[92vh] overflow-y-auto shadow-elevated border border-cherie-mauve/30 p-4 sm:p-8 text-cherie-wine my-auto transform transition-all duration-300 scale-100 animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button with 44px touch area */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 w-10 h-10 rounded-full bg-cherie-blush/90 hover:bg-cherie-blush flex items-center justify-center text-cherie-wine transition-all duration-200 active:scale-90 border border-cherie-mauve/20 shadow-sm"
          aria-label="Close product modal"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 items-start">
          
          {/* Left Column: Image Gallery (Balanced Aspect on Mobile) */}
          <div className="md:col-span-6 flex flex-col gap-2.5 sm:gap-3">
            <div className="aspect-[4/3] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-cherie-blush editorial-matting relative">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img
                  src={selectedImage}
                  alt={name}
                  className={`w-full h-full object-cover object-center transition-opacity duration-300 ease-out ${
                    isImageFading ? 'opacity-40' : 'opacity-100'
                  }`}
                />
                {tag && (
                  <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-cherie-wine/90 text-cherie-ivory text-[9px] sm:text-[10px] uppercase tracking-widest font-sans px-2.5 sm:px-3 py-1 rounded-full shadow-sm">
                    {tag}
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Selector */}
            {imagesList.length > 1 && (
              <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-1">
                {imagesList.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => handleImageChange(img)}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 shrink-0 ${
                      selectedImage === img
                        ? 'border-cherie-wine scale-105 shadow-sm'
                        : 'border-cherie-mauve/20 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${name} preview ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Details & Purchase Controls */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <span className="font-sans text-[9.5px] sm:text-[10px] uppercase tracking-[0.22em] font-semibold text-cherie-mauve">
                  {category}
                </span>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={12} className="fill-amber-500" />
                  <span className="font-sans text-xs font-bold text-cherie-wine">{rating}</span>
                  <span className="font-sans text-[10px] sm:text-[11px] text-cherie-mauve">({reviewsCount})</span>
                </div>
              </div>

              {/* Title & French Subtitle */}
              <h2 id="product-modal-title" className="font-serif text-xl sm:text-2xl lg:text-3xl text-cherie-wine font-light leading-tight">
                {name}
              </h2>
              <p className="font-script text-cherie-mauve text-base sm:text-xl mb-3 sm:mb-4">
                {frenchSubtitle}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2.5 sm:gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-cherie-mauve/15">
                <span className="font-serif text-xl sm:text-3xl font-semibold text-cherie-wine">
                  ₹{price.toLocaleString('en-IN')}
                </span>
                {originalPrice && (
                  <span className="font-sans text-xs sm:text-sm text-cherie-mauve line-through">
                    ₹{originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full font-medium ml-auto">
                  In Stock &bull; Ships 24h
                </span>
              </div>

              {/* Shade Selector with Interactive Expansion */}
              {shades && shades.length > 0 && (
                <div className="mb-4 sm:mb-5">
                  <label className="block text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-cherie-mauve mb-1.5 sm:mb-2">
                    Shade / Nuance: <span className="text-cherie-wine font-medium">{selectedShade?.name}</span> ({selectedShade?.desc})
                  </label>
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    {shades.map((shade, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedShade(shade)}
                        title={`${shade.name} - ${shade.desc}`}
                        className={`w-7 h-7 sm:w-7 sm:h-7 rounded-full border-2 transition-all duration-200 relative active:scale-95 ${
                          selectedShade?.name === shade.name
                            ? 'border-cherie-wine scale-110 shadow-md ring-2 ring-cherie-rose'
                            : 'border-cherie-mauve/30 hover:scale-110'
                        }`}
                        style={{ backgroundColor: shade.hex }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              {sizes && sizes.length > 0 && (
                <div className="mb-4 sm:mb-5">
                  <label className="block text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-cherie-mauve mb-1.5 sm:mb-2">
                    Size / Flacon: <span className="text-cherie-wine font-medium">{selectedSize}</span>
                  </label>
                  <div className="flex items-center gap-2 flex-wrap">
                    {sizes.map((sz, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSize(sz)}
                        className={`py-1.5 px-3 sm:px-3.5 rounded-full text-xs font-sans uppercase tracking-wider transition-all duration-200 active:scale-95 ${
                          selectedSize === sz
                            ? 'bg-cherie-wine text-cherie-ivory font-semibold shadow-sm'
                            : 'bg-cherie-blush/60 text-cherie-wine border border-cherie-mauve/20 hover:bg-cherie-blush'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Stepper & Add to Bag CTA */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center border border-cherie-mauve/30 rounded-full bg-cherie-blush/40 px-2.5 sm:px-3 py-1.5 shadow-inner">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-cherie-wine text-base font-medium px-2 hover:text-cherie-mauve active:scale-90 transition-transform"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="font-sans font-semibold text-xs text-cherie-wine px-1.5 sm:px-2">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-cherie-wine text-base font-medium px-2 hover:text-cherie-mauve active:scale-90 transition-transform"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex-1 min-h-[44px] py-3 sm:py-3.5 px-4 sm:px-6 rounded-full text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-sans font-semibold transition-all duration-300 shadow-soft hover:shadow-elevated flex items-center justify-center gap-2 active:scale-95 ${
                    addedAnimation
                      ? 'bg-emerald-700 text-white'
                      : 'bg-cherie-wine hover:bg-cherie-mauve text-cherie-ivory'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check size={16} />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={14} className="shrink-0" />
                      <span className="truncate">Add to Bag &bull; ₹{(price * quantity).toLocaleString('en-IN')}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3 rounded-full border transition-all duration-200 active:scale-90 shrink-0 ${
                    isWishlisted
                      ? 'bg-cherie-wine text-cherie-rose border-cherie-wine scale-105'
                      : 'bg-cherie-blush/60 text-cherie-wine border-cherie-mauve/30 hover:bg-cherie-blush hover:scale-105'
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart size={18} className={isWishlisted ? 'fill-cherie-rose' : ''} />
                </button>
              </div>

              {/* Keepsake notice */}
              <div className="bg-cherie-blush/50 border border-cherie-mauve/20 rounded-xl p-2.5 sm:p-3 flex items-center gap-2 text-xs text-cherie-wine/80 font-sans mb-4 sm:mb-6 leading-tight">
                <span className="text-sm shrink-0">🎀</span>
                <span>Arrives wrapped in French silk ribbon with dried damask rose petals.</span>
              </div>
            </div>

            {/* Tabbed Details */}
            <div className="border-t border-cherie-mauve/15 pt-3 sm:pt-4">
              <div className="flex items-center gap-3 sm:gap-5 border-b border-cherie-mauve/10 pb-2 mb-2.5 sm:mb-3 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.18em] pb-1 transition-all duration-200 relative shrink-0 ${
                    activeTab === 'description'
                      ? 'text-cherie-wine font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cherie-wine'
                      : 'text-cherie-mauve hover:text-cherie-wine'
                  }`}
                >
                  Description
                </button>
                {scentNotes && (
                  <button
                    onClick={() => setActiveTab('scent')}
                    className={`text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.18em] pb-1 transition-all duration-200 relative shrink-0 ${
                      activeTab === 'scent'
                        ? 'text-cherie-wine font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cherie-wine'
                        : 'text-cherie-mauve hover:text-cherie-wine'
                    }`}
                  >
                    Olfactory Notes
                  </button>
                )}
                <button
                  onClick={() => setActiveTab('craft')}
                  className={`text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.18em] pb-1 transition-all duration-200 relative shrink-0 ${
                    activeTab === 'craft'
                      ? 'text-cherie-wine font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cherie-wine'
                      : 'text-cherie-mauve hover:text-cherie-wine'
                  }`}
                >
                  Craft & Details
                </button>
              </div>

              <div className="font-sans text-xs text-cherie-wine/80 leading-relaxed min-h-[50px] animate-fade-in">
                {activeTab === 'description' && (
                  <p>{description}</p>
                )}

                {activeTab === 'scent' && scentNotes && (
                  <div className="space-y-1">
                    <p><strong className="text-cherie-wine font-medium">Top Notes:</strong> {scentNotes.top}</p>
                    <p><strong className="text-cherie-wine font-medium">Heart Notes:</strong> {scentNotes.heart}</p>
                    <p><strong className="text-cherie-wine font-medium">Base Notes:</strong> {scentNotes.base}</p>
                  </div>
                )}

                {activeTab === 'craft' && details && (
                  <ul className="space-y-1 list-disc list-inside">
                    {details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
