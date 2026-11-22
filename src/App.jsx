import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import BrandStory from './components/BrandStory';
import CampaignGallery from './components/CampaignGallery';
import LoveLetterEnvelope from './components/LoveLetterEnvelope';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import OrderSuccessModal from './components/OrderSuccessModal';
import QuickSearchModal from './components/QuickSearchModal';
import WishlistModal from './components/WishlistModal';
import Toast from './components/Toast';
import CustomCursor from './components/CustomCursor';

import { PRODUCTS } from './data/products';

export default function App() {
  // Navigation & Modals state
  const [selectedCategory, setSelectedCategory] = useState('All Creations');
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  // Cart state: items with id, shade, size, quantity
  const [cartItems, setCartItems] = useState([
    {
      ...PRODUCTS[0],
      quantity: 1,
      selectedShade: PRODUCTS[0].shades ? PRODUCTS[0].shades[0] : null
    }
  ]);

  // Wishlist state: dictionary of product.id -> product
  const [wishlist, setWishlist] = useState({
    [PRODUCTS[1].id]: PRODUCTS[1]
  });

  // Applied Promo state
  const [appliedPromo, setAppliedPromo] = useState(null);

  // Toast notification
  const [toast, setToast] = useState(null);

  // Scroll-triggered subtle reveal observer with reduced motion support
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isReducedMotion = mediaQuery.matches;

    const revealElements = () => {
      const elements = document.querySelectorAll('.reveal:not(.revealed)');
      if (isReducedMotion) {
        elements.forEach((el) => el.classList.add('revealed'));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.06, rootMargin: '0px 0px -25px 0px' }
      );

      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    const timeout = setTimeout(() => {
      revealElements();
    }, 60);

    return () => clearTimeout(timeout);
  }, [selectedCategory]);

  // Cart operations
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const shadeKey = product.selectedShade?.name || 'default';
      const sizeKey = product.selectedSize || 'default';

      const existingIndex = prev.findIndex(
        (item) =>
          item.id === product.id &&
          (item.selectedShade?.name || 'default') === shadeKey &&
          (item.selectedSize || 'default') === sizeKey
      );

      const qtyToAdd = product.quantity || 1;

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + qtyToAdd
        };
        return next;
      } else {
        return [...prev, { ...product, quantity: qtyToAdd }];
      }
    });

    setToast({
      type: 'cart',
      action: 'Added to your bag',
      title: product.name,
      price: product.price * (product.quantity || 1),
      image: product.image
    });
  };

  const handleUpdateQuantity = (item, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(item);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => {
        if (
          i.id === item.id &&
          (i.selectedShade?.name || 'default') === (item.selectedShade?.name || 'default') &&
          (i.selectedSize || 'default') === (item.selectedSize || 'default')
        ) {
          return { ...i, quantity: newQty };
        }
        return i;
      })
    );
  };

  const handleRemoveFromCart = (item) => {
    setCartItems((prev) =>
      prev.filter(
        (i) =>
          !(
            i.id === item.id &&
            (i.selectedShade?.name || 'default') === (item.selectedShade?.name || 'default') &&
            (i.selectedSize || 'default') === (item.selectedSize || 'default')
          )
      )
    );
  };

  // Wishlist operations
  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      const next = { ...prev };
      if (next[product.id]) {
        delete next[product.id];
        setToast({
          type: 'wishlist',
          action: 'Removed from wishlist',
          title: product.name
        });
      } else {
        next[product.id] = product;
        setToast({
          type: 'wishlist',
          action: 'Saved to wishlist',
          title: product.name,
          image: product.image
        });
      }
      return next;
    });
  };

  // Checkout simulation
  const handleCheckout = (details) => {
    setIsCartOpen(false);
    setConfirmedOrder(details);
    setCartItems([]);
  };

  // Open product by ID helper
  const handleOpenProductById = (id) => {
    const prod = PRODUCTS.find((p) => p.id === id);
    if (prod) {
      setActiveModalProduct(prod);
    }
  };

  // Smooth scroll to products section
  const scrollToProducts = (category) => {
    if (category) {
      setSelectedCategory(category);
    }
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to Love Letter envelope
  const handleOpenEnvelopeSection = () => {
    setIsEnvelopeOpen(true);
    const el = document.getElementById('love-letter');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-cherie-ivory text-cherie-body font-sans selection:bg-cherie-rose selection:text-cherie-wine">
      
      {/* Minimal Dusty-Pink Circular Cursor (#D98FA4) */}
      <CustomCursor />

      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Navigation */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={Object.keys(wishlist).length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* 3. Hero Section */}
        <Hero
          onExploreClick={() => scrollToProducts()}
          onOpenProduct={handleOpenProductById}
        />

        {/* 4. Featured Product Collection */}
        <FeaturedProducts
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onQuickView={(prod) => setActiveModalProduct(prod)}
          onAddToCart={handleAddToCart}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
        />

        {/* 5. Brand Story Section (Includes Incorporated Founder's Letter & Billet Doux) */}
        <BrandStory />

        {/* 6. Campaign / Gallery Section */}
        <CampaignGallery onOpenProduct={handleOpenProductById} />

        {/* 7. Customer Testimonials & Press */}
        <Testimonials />

        {/* 8. Newsletter Signup */}
        <Newsletter />
      </main>

      {/* 9. Simplified Footer */}
      <Footer onSelectCategory={scrollToProducts} />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={activeModalProduct ? Boolean(wishlist[activeModalProduct.id]) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
        appliedPromo={appliedPromo}
        onApplyPromo={setAppliedPromo}
        onRemovePromo={() => setAppliedPromo(null)}
      />

      {/* Wishlist Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onQuickView={(prod) => setActiveModalProduct(prod)}
        onAddToCart={handleAddToCart}
        onRemoveWishlist={(id) => {
          setWishlist((prev) => {
            const next = { ...prev };
            delete next[id];
            return next;
          });
        }}
      />

      {/* Quick Search Modal */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(prod) => setActiveModalProduct(prod)}
        onAddToCart={handleAddToCart}
      />

      {/* Order Confirmed Modal */}
      <OrderSuccessModal
        orderDetails={confirmedOrder}
        onClose={() => setConfirmedOrder(null)}
      />

      {/* Floating Notification Toast */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
        onOpenCart={() => setIsCartOpen(true)}
      />

    </div>
  );
}
