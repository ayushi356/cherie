import React from 'react';
import { X } from 'lucide-react';

export default function OrderSuccessModal({ orderDetails, onClose }) {
  if (!orderDetails) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-success-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cherie-wine/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-cherie-ivory rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-cherie-mauve/30 shadow-elevated text-center relative overflow-hidden transform transition-all duration-300 scale-100 animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cherie-wine/60 hover:text-cherie-wine p-1 rounded-full active:scale-90 transition-all"
          aria-label="Close confirmation"
        >
          <X size={18} />
        </button>

        {/* Demo Notification Badge */}
        <div className="inline-flex items-center gap-1.5 bg-cherie-blush border border-cherie-mauve/25 px-3.5 py-1 rounded-full text-[9.5px] font-sans uppercase tracking-[0.2em] font-semibold text-cherie-wine mb-3">
          <span>✦</span>
          <span>Portfolio Demonstration &bull; Fictional Checkout</span>
        </div>

        {/* Wax Seal Icon */}
        <div className="w-14 h-14 rounded-full bg-cherie-wine text-cherie-rose flex items-center justify-center font-serif text-2xl font-bold shadow-rose mx-auto mb-3 border-2 border-cherie-rose/40">
          C
        </div>

        <span className="font-script text-2xl text-cherie-mauve block mb-0.5">
          Merci Infiniment!
        </span>

        <h2 id="order-success-title" className="font-serif text-2xl sm:text-3xl font-light text-cherie-wine mb-2">
          Your Order Is Confirmed
        </h2>

        <p className="font-sans text-xs text-cherie-wine/80 leading-relaxed max-w-sm mx-auto mb-5">
          This is a fictional boutique portfolio presentation for CHÉRIE. No real payment has been processed or collected, and no financial charge has occurred.
        </p>

        {/* Order Details Card */}
        <div className="bg-cherie-blush/50 border border-cherie-mauve/20 rounded-2xl p-4 text-left font-sans text-xs text-cherie-wine mb-6 space-y-2">
          <div className="flex justify-between border-b border-cherie-mauve/10 pb-2">
            <span className="text-cherie-mauve uppercase tracking-wider font-semibold text-[10px]">Simulation Reference</span>
            <span className="font-mono font-medium">#CH-DEMO-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-cherie-mauve">Simulated Value</span>
            <span className="font-serif text-base font-bold text-cherie-wine">₹{orderDetails.total?.toLocaleString('en-IN')}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-cherie-mauve">Payment Status</span>
            <span className="text-emerald-800 font-semibold text-[11px]">Demo Simulation (No Card Charged)</span>
          </div>

          <div className="flex justify-between">
            <span className="text-cherie-mauve">Packaging</span>
            <span>Signature Keepsake Box + Dried Petals</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 px-6 rounded-full bg-cherie-wine hover:bg-cherie-mauve text-cherie-ivory text-xs uppercase tracking-[0.2em] font-sans font-semibold transition-all shadow-rose"
        >
          Continue Exploring
        </button>
      </div>
    </div>
  );
}
