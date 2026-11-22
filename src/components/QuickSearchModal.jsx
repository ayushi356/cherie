import React, { useState } from 'react';
import { Search, X, Sparkles, ShoppingBag } from 'lucide-react';

export default function QuickSearchModal({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  onAddToCart
}) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.frenchSubtitle.toLowerCase().includes(query.toLowerCase())
      )
    : products.slice(0, 4);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-cherie-wine/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-cherie-ivory rounded-3xl max-w-xl w-full p-6 border border-cherie-mauve/30 shadow-elevated relative overflow-hidden transform transition-all duration-300 scale-100 animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-cherie-mauve/20 pb-4 mb-4">
          <Search size={18} className="text-cherie-mauve" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blush, perfume, silk dresses, ribbons..."
            autoFocus
            className="flex-1 bg-transparent border-none text-sm text-cherie-wine placeholder:text-cherie-mauve/60 font-sans focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-cherie-wine/40 hover:text-cherie-wine"
              aria-label="Clear search input"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-cherie-wine/60 hover:text-cherie-wine text-xs uppercase font-sans tracking-wider"
          >
            Esc
          </button>
        </div>

        <div>
          <span id="search-modal-title" className="text-[10px] uppercase tracking-widest font-sans font-semibold text-cherie-mauve block mb-3">
            {query.trim() ? `Search Results (${results.length})` : 'Popular Maison Curations'}
          </span>

          <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
            {results.length === 0 ? (
              <p className="text-xs font-sans text-cherie-wine/70 py-6 text-center">
                No creations found matching "{query}".
              </p>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-cherie-blush/60 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-14 object-cover rounded-lg border border-cherie-mauve/20"
                    />
                    <div>
                      <h4 className="font-serif text-sm font-medium text-cherie-wine group-hover:text-cherie-mauve transition-colors">
                        {product.name}
                      </h4>
                      <p className="font-sans text-xs text-cherie-wine/80">
                        ₹{product.price.toLocaleString('en-IN')} &bull; <span className="text-[11px] text-cherie-mauve uppercase">{product.category}</span>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="p-2 rounded-full bg-cherie-blush text-cherie-wine hover:bg-cherie-rose transition-colors"
                    title="Add to bag"
                  >
                    <ShoppingBag size={14} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
