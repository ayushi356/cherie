import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import App from '../App';

describe('CHÉRIE Boutique Website - Comprehensive End-to-End Suite', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('1. Renders the complete luxury maison branding and all core sections', () => {
    render(<App />);

    // Brand logotypes
    const logoElements = screen.getAllByText(/CHÉRIE/i);
    expect(logoElements.length).toBeGreaterThan(0);

    // Tagline in heading / subheadings
    expect(screen.getAllByText(/A little love, in every detail/i).length).toBeGreaterThan(0);

    // Announcement bar (complementary landmark)
    expect(screen.getByRole('complementary')).toBeInTheDocument();

    // Hero section headline
    expect(screen.getByText(/Poetry for the/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Dressing Table/i).length).toBeGreaterThan(0);

    // Featured section
    expect(screen.getByText(/The Iconique Creations/i)).toBeInTheDocument();

    // Brand story section
    expect(screen.getByText(/De la Matière et du Geste/i)).toBeInTheDocument();

    // Lookbook section
    expect(screen.getByText(/The Campaign Lookbook/i)).toBeInTheDocument();

    // Patron reviews section
    expect(screen.getByText(/Revue de Presse & Correspondance/i)).toBeInTheDocument();

    // Newsletter section
    expect(screen.getAllByText(/Rejoindre Le Cercle Privé/i).length).toBeGreaterThan(0);

    // Footer
    expect(screen.getByText(/28 Rue Saint-Honoré, 75001 Paris/i)).toBeInTheDocument();
  });

  it('2. Tests product card interactions and opens Product Detail Modal', async () => {
    render(<App />);

    // Find and click "Quick View" on the first product card
    const quickViewButtons = screen.getAllByRole('button', { name: /Quick View|Aperçu/i });
    expect(quickViewButtons.length).toBeGreaterThan(0);
    fireEvent.click(quickViewButtons[0]);

    // Product detail modal should open with dialog role
    const modal = screen.getByRole('dialog', { name: /Poudre de Soie Petal Blush/i });
    expect(modal).toBeInTheDocument();

    // Check price and shades in modal
    expect(within(modal).getByText(/Nuance:/i)).toBeInTheDocument();

    // Close modal
    const closeBtn = screen.getByRole('button', { name: /Close product modal/i });
    fireEvent.click(closeBtn);

    await waitFor(() => {
      expect(screen.queryByRole('dialog', { name: /Poudre de Soie Petal Blush/i })).not.toBeInTheDocument();
    });
  });

  it('3. Tests Add-to-Bag, Cart Drawer, Promo Code AMOUR15, and Checkout Flow', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Open cart drawer by clicking bag in navbar
    const panierBtn = screen.getByRole('button', { name: /Open shopping bag/i });
    await user.click(panierBtn);

    const cartDrawer = screen.getByRole('dialog', { name: /Shopping Bag|Votre Panier/i });
    expect(cartDrawer).toBeInTheDocument();

    // Verify initial item is present
    expect(within(cartDrawer).getByText(/Poudre de Soie Petal Blush/i)).toBeInTheDocument();

    // Test entering voucher code AMOUR15
    const voucherInput = within(cartDrawer).getByPlaceholderText(/Voucher code/i);
    await user.type(voucherInput, 'AMOUR15');

    const applyBtn = within(cartDrawer).getByRole('button', { name: /Apply/i });
    await user.click(applyBtn);

    // Verify discount is calculated and applied
    expect(within(cartDrawer).getAllByText(/AMOUR15/i).length).toBeGreaterThan(0);
    expect(within(cartDrawer).getByText(/15% off/i)).toBeInTheDocument();

    // Test checkout
    const checkoutBtn = within(cartDrawer).getByRole('button', { name: /Proceed to Demo Checkout|Passer la Commande/i });
    await user.click(checkoutBtn);

    // Order Success modal should open
    await waitFor(() => {
      expect(screen.getByText(/Your Order Is Confirmed/i)).toBeInTheDocument();
      expect(screen.getByText(/Merci Infiniment!/i)).toBeInTheDocument();
    });

    // Close order confirmation
    const closeOrderBtn = screen.getByRole('button', { name: /Close confirmation/i });
    await user.click(closeOrderBtn);
  });

  it('4. Tests the interactive Billet Doux (Love Letter) wax seal unfolding', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Scope to the Love Letter section
    const loveLetterSection = document.getElementById('love-letter');
    expect(loveLetterSection).toBeInTheDocument();

    const waxSeal = within(loveLetterSection).getByText('C');
    await user.click(waxSeal);

    // Letter should unfold and reveal the founder note and voucher code
    expect(within(loveLetterSection).getByText(/Chère amie,/i)).toBeInTheDocument();
    expect(within(loveLetterSection).getByText(/AMOUR15/i)).toBeInTheDocument();

    // Test Copy button
    const copyBtn = within(loveLetterSection).getByRole('button', { name: /Copy 15%/i });
    expect(copyBtn).toBeInTheDocument();
  });

  it('5. Tests Newsletter form validation and personalized welcome voucher', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find submit button in newsletter
    const submitBtn = screen.getByRole('button', { name: /Rejoindre Le Cercle Privé/i });

    // Submit empty to check validation
    await user.click(submitBtn);
    expect(screen.getByText(/Please provide your name/i)).toBeInTheDocument();

    // Fill in name
    const nameInput = screen.getByPlaceholderText(/e\.g\. Marguerite/i);
    await user.type(nameInput, 'Geneviève');

    await user.click(submitBtn);
    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();

    // Fill in valid email
    const emailInput = screen.getByPlaceholderText(/your\.email@maison\.com/i);
    await user.type(emailInput, 'genevieve@paris.fr');

    await user.click(submitBtn);

    // Verify confirmation and voucher
    await waitFor(() => {
      expect(screen.getByText(/Bienvenue, Geneviève!/i)).toBeInTheDocument();
      expect(screen.getByText(/CHERIE500/i)).toBeInTheDocument();
    });
  });

  it('6. Tests Category Filter Tabs switching in FeaturedProducts', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Switch to Fragrance / Parfumerie tab
    const parfumerieTab = screen.getByRole('button', { name: /II\. (Fragrance|Parfumerie)/i });
    await user.click(parfumerieTab);

    // Parfumerie product should be shown (matching curly or straight apostrophe)
    await waitFor(() => {
      expect(screen.getAllByText(/Élixir d’Amour/i).length).toBeGreaterThan(0);
    }, { timeout: 2000 });

    // Switch to Accessories / Accessoires tab
    const accessoiresTab = screen.getByRole('button', { name: /IV\. (Accessories|Accessoires)/i });
    await user.click(accessoiresTab);

    await waitFor(() => {
      expect(screen.getAllByText(/Nœud en Satin & Pearl Barrette/i).length).toBeGreaterThan(0);
    }, { timeout: 2000 });
  });

  it('7. Tests Quick Search filtering and modal', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Open search modal
    const searchBtns = screen.getAllByRole('button', { name: /Search/i });
    await user.click(searchBtns[0]);

    const searchInput = screen.getByPlaceholderText(/Search blush, perfume, silk dresses, ribbons/i);
    await user.type(searchInput, 'Blush');

    // Should find Petal Blush
    expect(screen.getAllByText(/Poudre de Soie Petal Blush/i).length).toBeGreaterThan(0);
  });

  it('8. Tests Mobile Navigation drawer toggle', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Click mobile menu hamburger toggle
    const hamburger = screen.getByLabelText(/Toggle navigation menu/i);
    await user.click(hamburger);

    // Mobile navigation items should be visible
    expect(screen.getAllByText(/Our Story/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Collections/i).length).toBeGreaterThan(0);
  });

  it('9. Tests Custom Dusty-Pink Circular Cursor rendering and interactions', () => {
    const { container } = render(<App />);

    // Custom cursor container exists
    const cursor = container.querySelector('.cherie-custom-cursor');
    expect(cursor).toBeInTheDocument();

    // Verify dusty pink color token #D98FA4 class and 10-12px dimensions (11px)
    const dot = cursor.querySelector('div');
    expect(dot).toBeInTheDocument();
    expect(dot.className).toContain('bg-[#D98FA4]');
    expect(dot.className).toContain('w-[11px]');
    expect(dot.className).toContain('h-[11px]');
  });
});
