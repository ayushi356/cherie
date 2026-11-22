import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Check, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please provide your name so we know how to address you, chérie.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!agreed) {
      setError('Please agree to receive our boutique despatches.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#E7BFC8', '#F8E9E9', '#A96F7C', '#D4AF37'],
          disableForReducedMotion: true,
        });
      } catch (err) {}
    }, 450);
  };

  return (
    <section id="newsletter" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 lg:py-36 bg-cherie-ivory border-t border-cherie-secondary/15 relative w-full max-w-full overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Editorial Invitation Card with Fine Double Lines & Scroll Reveal */}
        <div className="reveal editorial-matting rounded-3xl p-6 sm:p-10 lg:p-14 bg-cherie-cream/80 text-center relative border border-cherie-secondary/25 shadow-elevated">
          
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-5 sm:w-6 h-px bg-cherie-secondary/30" />
            <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-cherie-secondary font-semibold">
              Invitation Privée
            </span>
            <span className="w-5 sm:w-6 h-px bg-cherie-secondary/30" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light text-cherie-wine tracking-tight mb-2 sm:mb-3">
            Rejoindre Le Cercle Privé
          </h2>

          <p className="font-script text-2xl sm:text-3xl text-cherie-accent mb-3 sm:mb-4">
            A little love, in every detail.
          </p>

          <p className="font-sans text-base sm:text-[17px] text-cherie-body font-light max-w-md mx-auto leading-relaxed mb-8 sm:mb-10">
            Receive private seasonal previews, archival releases, quiet musings on vanity rituals, and a complimentary ₹500 welcome voucher for your first discovery.
          </p>

          {isSubmitted ? (
            <div className="bg-cherie-blush/60 border border-cherie-mauve/25 rounded-2xl p-5 sm:p-6 max-w-md mx-auto animate-fade-in">
              <div className="w-10 h-10 rounded-full bg-cherie-wine text-cherie-rose flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Check size={18} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-cherie-wine mb-1">
                Bienvenue, {name}!
              </h3>
              <p className="font-sans text-xs text-cherie-wine/80 leading-relaxed mb-4">
                We have sent an intimate welcome note to <span className="font-semibold text-cherie-wine">{email}</span>. Your gift code <span className="font-bold text-cherie-wine underline">CHERIE500</span> is now active for your first order.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setEmail('');
                  setName('');
                }}
                className="text-[10px] font-sans uppercase tracking-[0.2em] text-cherie-mauve hover:text-cherie-wine underline underline-offset-4 transition-colors py-1"
              >
                Register another subscriber
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left">
              {error && (
                <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 font-sans animate-fade-in">
                  {error}
                </div>
              )}

              <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                <div>
                  <label htmlFor="newsletter-name" className="block text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] text-cherie-mauve font-sans font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    id="newsletter-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Marguerite"
                    className="w-full px-4 py-3 sm:py-2.5 rounded-full bg-cherie-ivory border border-cherie-mauve/25 focus:border-cherie-mauve focus:ring-1 focus:ring-cherie-rose focus:outline-none text-sm sm:text-xs text-cherie-wine placeholder:text-cherie-mauve/40 font-sans transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label htmlFor="newsletter-email" className="block text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] text-cherie-mauve font-sans font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@maison.com"
                    className="w-full px-4 py-3 sm:py-2.5 rounded-full bg-cherie-ivory border border-cherie-mauve/25 focus:border-cherie-mauve focus:ring-1 focus:ring-cherie-rose focus:outline-none text-sm sm:text-xs text-cherie-wine placeholder:text-cherie-mauve/40 font-sans transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* Consent checkbox with comfortable tap area */}
              <div className="flex items-start gap-2.5 mb-6">
                <input
                  id="newsletter-consent"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 rounded text-cherie-wine focus:ring-cherie-mauve accent-cherie-wine cursor-pointer w-4 h-4"
                />
                <label htmlFor="newsletter-consent" className="text-xs sm:text-[11px] text-cherie-wine/70 font-sans leading-relaxed cursor-pointer select-none">
                  I wish to receive intimate seasonal lookbooks and private salon invitations from Maison CHÉRIE.
                </label>
              </div>

              {/* Submit CTA with Minimum 44px Touch Height */}
              <button
                type="submit"
                disabled={loading}
                className="w-full min-h-[44px] py-3.5 px-6 rounded-full bg-cherie-wine hover:bg-cherie-mauve text-cherie-ivory text-xs uppercase tracking-[0.2em] font-sans font-semibold transition-all duration-300 shadow-soft hover:shadow-elevated active:scale-95 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Preparing Your Gift...</span>
                ) : (
                  <>
                    <span>Rejoindre Le Cercle Privé</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-center font-sans text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] text-cherie-mauve/80 mt-4">
                ✦ Zero Spam &bull; Rare Despatches Only ✦
              </p>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
