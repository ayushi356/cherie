import React from 'react';
import { Heart, X, ShoppingBag, Eye, Trash2 } from 'lucide-react';

export default function WishlistModal({
  isOpen,
  onClose,
  wishlist,
  onQuickView,
  onAddToCart,
  onRemoveWishlist
}) {
  if (!isOpen) return null;

  const items = Object.values(wishlist);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="wishlist-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cherie-wine/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-cherie-ivory rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-cherie-mauve/30 shadow-elevated relative max-h-[85vh] flex flex-col transform transition-all duration-300 scale-100 animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-cherie-mauve/15 mb-4">
          <div className="flex items-center gap-2">
            <Heart size={20} className="text-cherie-wine fill-cherie-rose" />
            <h2 id="wishlist-modal-title" className="font-serif text-2xl text-cherie-wine font-light">
              Your Saved Keepsakes ({items.length})
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-cherie-wine/60 hover:text-cherie-wine"
            aria-label="Close wishlist"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-cherie-mauve/10">
          {items.length === 0 ? (
            <div className="py-12 text-center">
              <svg className="w-10 h-10 text-cherie-mauve mx-auto mb-3 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 12c-2.5-3-6-4.5-8-3-2 1.5-1.5 5 1.5 6 3 1 6.5-3 6.5-3z" />
                <path d="M12 12c2.5-3 6-4.5 8-3 2 1.5 1.5 5-1.5 6-3 1-6.5-3-6.5-3z" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <path d="M11 14c-1 3-3 6-5 7" />
                <path d="M13 14c1 3 3 6 5 7" />
              </svg>
              <p className="font-serif text-xl text-cherie-wine font-light mb-1">
                No keepsakes saved yet
              </p>
              <p className="font-sans text-xs text-cherie-mauve">
                Click the heart icon on any creation to save it to your private vanity wishlist.
              </p>
            </div>
          ) : (
            items.map((prod) => (
              <div key={prod.id} className="py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-16 h-20 object-cover rounded-xl border border-cherie-mauve/20 bg-cherie-blush"
                  />
                  <div>
                    <h4 className="font-serif text-base font-medium text-cherie-wine">
                      {prod.name}
                    </h4>
                    <p className="font-sans text-xs text-cherie-wine/80">
                      ₹{prod.price.toLocaleString('en-IN')}
                    </p>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-cherie-mauve font-semibold">
                      {prod.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onAddToCart(prod);
                    }}
                    className="py-1.5 px-3 rounded-full bg-cherie-wine text-cherie-ivory text-xs font-sans uppercase tracking-wider hover:bg-cherie-mauve transition-colors flex items-center gap-1"
                  >
                    <ShoppingBag size={13} />
                    <span>Add to Bag</span>
                  </button>

                  <button
                    onClick={() => onRemoveWishlist(prod.id)}
                    className="p-2 text-cherie-wine/40 hover:text-rose-700 transition-colors"
                    title="Remove from wishlist"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
