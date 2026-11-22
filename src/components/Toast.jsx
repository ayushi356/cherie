import React, { useEffect } from 'react';
import { ShoppingBag, Heart, Check, X } from 'lucide-react';

export default function Toast({ toast, onClose, onOpenCart }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm w-full bg-cherie-ivory/98 backdrop-blur-md border border-cherie-mauve/30 rounded-2xl p-4 shadow-elevated animate-fade-up">
      <div className="flex items-center gap-3">
        {toast.image ? (
          <img
            src={toast.image}
            alt={toast.title}
            className="w-12 h-12 rounded-xl object-cover border border-cherie-mauve/20 shrink-0"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-cherie-blush flex items-center justify-center text-cherie-wine shrink-0">
            {toast.type === 'cart' ? <ShoppingBag size={18} /> : <Heart size={18} />}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-wider text-cherie-mauve font-semibold">
            <Check size={11} className="text-emerald-600" />
            <span>{toast.action}</span>
          </div>
          <h5 className="font-serif text-sm font-medium text-cherie-wine truncate">
            {toast.title}
          </h5>
          {toast.price && (
            <p className="font-sans text-xs text-cherie-wine/80">
              ₹{toast.price.toLocaleString('en-IN')}
            </p>
          )}
        </div>

        {toast.type === 'cart' && onOpenCart && (
          <button
            onClick={() => {
              onClose();
              onOpenCart();
            }}
            className="text-[11px] font-sans font-semibold uppercase tracking-wider text-cherie-wine bg-cherie-blush hover:bg-cherie-rose px-2.5 py-1.5 rounded-full transition-colors whitespace-nowrap"
          >
            View Bag
          </button>
        )}

        <button
          onClick={onClose}
          className="text-cherie-wine/50 hover:text-cherie-wine p-1 transition-colors"
          aria-label="Dismiss notification"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
