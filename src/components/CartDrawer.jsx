import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, Check, Gift } from 'lucide-react';

const FREE_SHIPPING_THRESHOLD = 4000;

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  appliedPromo,
  onApplyPromo,
  onRemovePromo
}) {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [includeGiftWrap, setIncludeGiftWrap] = useState(true);

  if (!isOpen) return null;

  // Subtotal calculation
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Discount calculation
  const discount = appliedPromo ? Math.round(subtotal * (appliedPromo.percent / 100)) : 0;

  // Free shipping check
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 250;
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const total = subtotal - discount + shipping;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    const code = promoInput.trim().toUpperCase();

    if (!code) {
      setPromoError('Please enter a voucher code.');
      return;
    }

    if (code === 'AMOUR15') {
      onApplyPromo({ code: 'AMOUR15', percent: 15, name: 'Founder’s 15% Welcome Gift' });
      setPromoInput('');
    } else if (code === 'CHERIE500') {
      onApplyPromo({ code: 'CHERIE500', percent: 12, name: 'Cercle Privé Subscriber Gift (12%)' });
      setPromoInput('');
    } else {
      setPromoError('Voucher code invalid. Try AMOUR15.');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
      className="fixed inset-0 z-50 overflow-hidden animate-fade-in w-full max-w-full"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-cherie-wine/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10 w-full sm:w-auto">
        <div className="w-full sm:w-screen sm:max-w-md bg-cherie-ivory border-l border-cherie-mauve/25 shadow-elevated flex flex-col justify-between text-cherie-wine transform transition-transform duration-400 ease-out animate-fade-up">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-cherie-mauve/15 flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} className="text-cherie-wine" />
                <h2 id="cart-drawer-title" className="font-serif text-xl sm:text-2xl font-light text-cherie-wine tracking-wide">
                  Shopping Bag
                </h2>
                <span className="font-sans text-[10.5px] sm:text-[11px] bg-cherie-blush px-2.5 py-0.5 rounded-full border border-cherie-mauve/20 font-semibold text-cherie-wine">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items
                </span>
              </div>
              <span className="font-script text-xs text-cherie-mauve -mt-0.5">Le Panier de la Maison</span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full text-cherie-wine/60 hover:text-cherie-wine hover:bg-cherie-blush active:scale-90 transition-all"
              aria-label="Close cart drawer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-cherie-blush/60 px-4 sm:px-6 py-3 border-b border-cherie-mauve/15">
            {amountToFreeShipping === 0 ? (
              <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-sans font-medium">
                <Check size={14} className="text-emerald-700" />
                <span>Complimentary Pan-India Courier unlocked! ✨</span>
              </div>
            ) : (
              <div>
                <p className="font-sans text-xs text-cherie-wine/80 mb-1.5 leading-tight">
                  Add <strong className="text-cherie-wine">₹{amountToFreeShipping.toLocaleString('en-IN')}</strong> more for <span className="font-medium">Free Pan-India Delivery</span> & silk gift wrap.
                </p>
                <div className="w-full bg-cherie-ivory rounded-full h-1.5 overflow-hidden border border-cherie-mauve/20">
                  <div
                    className="bg-cherie-mauve h-1.5 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Items List or Empty State */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 divide-y divide-cherie-mauve/10">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-cherie-blush border border-cherie-mauve/20 flex items-center justify-center text-2xl mb-4">
                  🎀
                </div>
                <h3 className="font-serif text-2xl text-cherie-wine font-light mb-2">
                  Your bag is currently empty
                </h3>
                <p className="font-sans text-xs sm:text-sm text-cherie-wine/70 max-w-xs mb-6 font-light">
                  Explore our handcrafted cosmetics, flacons of Grasse perfume, and pure mulberry silks.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-3.5 rounded-full bg-cherie-wine text-cherie-ivory text-xs uppercase tracking-widest font-sans font-semibold hover:bg-cherie-mauve active:scale-95 transition-all shadow-soft"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={`${item.id}-${item.selectedShade?.name || 'default'}-${item.selectedSize || 'default'}`} className="py-3.5 sm:py-4 flex gap-3.5 sm:gap-4 items-start group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-18 sm:w-20 h-22 sm:h-24 object-cover rounded-xl border border-cherie-mauve/20 shrink-0 bg-cherie-blush group-hover:scale-102 transition-transform duration-300"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm sm:text-base font-medium text-cherie-wine truncate">
                      {item.name}
                    </h4>
                    <p className="font-script text-xs text-cherie-mauve -mt-0.5">
                      {item.frenchSubtitle}
                    </p>

                    {item.selectedShade && (
                      <div className="flex items-center gap-1.5 mt-1 text-[11px] font-sans text-cherie-wine/70">
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-cherie-mauve/30 inline-block"
                          style={{ backgroundColor: item.selectedShade.hex }}
                        />
                        <span className="truncate">{item.selectedShade.name}</span>
                      </div>
                    )}

                    {item.selectedSize && (
                      <p className="text-[11px] font-sans text-cherie-wine/70 mt-0.5">
                        Size: {item.selectedSize}
                      </p>
                    )}

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity stepper with Tactile Active Press */}
                      <div className="flex items-center border border-cherie-mauve/25 rounded-full bg-cherie-blush/40 px-2.5 py-0.5 shadow-inner">
                        <button
                          onClick={() => onUpdateQuantity(item, item.quantity - 1)}
                          className="text-cherie-wine text-sm px-1.5 hover:text-cherie-mauve active:scale-90 transition-transform"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="font-sans text-xs font-semibold px-2 text-cherie-wine">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item, item.quantity + 1)}
                          className="text-cherie-wine text-sm px-1.5 hover:text-cherie-mauve active:scale-90 transition-transform"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Item Total Price */}
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-sm font-semibold text-cherie-wine">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>

                        <button
                          onClick={() => onRemoveItem(item)}
                          className="w-8 h-8 flex items-center justify-center text-cherie-wine/40 hover:text-rose-700 active:scale-90 transition-all rounded-full"
                          aria-label={`Remove ${item.name} from bag`}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Controls & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-cherie-mauve/20 bg-cherie-cream/80 space-y-3.5 sm:space-y-4">
              
              {/* Gift Wrap Toggle */}
              <div className="flex items-center justify-between bg-cherie-blush/40 p-2.5 rounded-xl border border-cherie-mauve/15">
                <div className="flex items-center gap-2">
                  <Gift size={16} className="text-cherie-mauve shrink-0" />
                  <span className="font-sans text-xs text-cherie-wine">
                    Complimentary Silk Ribbon & Card
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={includeGiftWrap}
                  onChange={(e) => setIncludeGiftWrap(e.target.checked)}
                  className="rounded text-cherie-wine accent-cherie-wine cursor-pointer w-4 h-4"
                />
              </div>

              {/* Promo Code Input */}
              {appliedPromo ? (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl text-xs font-sans text-emerald-900 animate-fade-in">
                  <div className="flex items-center gap-1.5">
                    <Sparkles size={14} className="text-emerald-600 shrink-0" />
                    <span><strong>{appliedPromo.code}</strong> applied ({appliedPromo.percent}% off)</span>
                  </div>
                  <button
                    onClick={onRemovePromo}
                    className="text-xs text-emerald-700 hover:text-emerald-900 underline font-medium"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Voucher code (e.g. AMOUR15)"
                    className="flex-1 px-3 py-2.5 rounded-xl bg-cherie-ivory border border-cherie-mauve/25 focus:border-cherie-mauve text-xs text-cherie-wine uppercase tracking-wider font-sans focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-cherie-blush hover:bg-cherie-rose text-cherie-wine text-xs uppercase font-sans font-semibold tracking-wider transition-all border border-cherie-mauve/20 active:scale-95 shrink-0"
                  >
                    Apply
                  </button>
                </form>
              )}
              {promoError && (
                <p className="text-[11px] text-rose-700 font-sans">{promoError}</p>
              )}

              {/* Totals Breakdown */}
              <div className="space-y-1.5 font-sans text-xs text-cherie-wine/80 pt-1.5 border-t border-cherie-mauve/10">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-serif text-sm font-medium text-cherie-wine">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>

                {appliedPromo && (
                  <div className="flex justify-between text-emerald-800 font-medium">
                    <span>Discount ({appliedPromo.code})</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Pan-India Courier</span>
                  <span>{shipping === 0 ? <strong className="text-emerald-700 font-sans">Complimentary</strong> : `₹${shipping}`}</span>
                </div>

                <div className="flex justify-between text-base font-serif font-bold text-cherie-wine pt-2 border-t border-cherie-mauve/15">
                  <span>Estimated Total</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Button with Minimum 48px Touch Height */}
              <button
                onClick={() => onCheckout({ total, subtotal, discount, shipping, itemsCount: cartItems.length })}
                className="w-full min-h-[48px] py-3.5 sm:py-4 px-6 rounded-full bg-cherie-wine hover:bg-cherie-mauve text-cherie-ivory text-xs uppercase tracking-[0.2em] font-sans font-semibold transition-all duration-300 shadow-soft hover:shadow-elevated active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>Proceed to Demo Checkout</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-center space-y-1">
                <p className="font-sans text-[10px] text-cherie-mauve/90 bg-cherie-blush/50 py-1.5 px-3 rounded-lg border border-cherie-mauve/15">
                  ✦ Portfolio Demonstration &bull; No payment card needed &bull; Fictional brand
                </p>
                <p className="font-sans text-[9px] text-cherie-mauve/70">
                  Artisanal small-batch presentation for CHÉRIE
                </p>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
