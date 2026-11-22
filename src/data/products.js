// Curated fictional luxury boutique catalog for CHÉRIE
// Prices in INR (₹)

export const PRODUCTS = [
  {
    id: 'cherie-01',
    name: 'Poudre de Soie Petal Blush',
    frenchSubtitle: 'Fard à Joues Velouté',
    category: 'La Beauté',
    price: 2850,
    originalPrice: 3200,
    rating: 4.9,
    reviewsCount: 148,
    isBestSeller: true,
    isNew: false,
    isLimited: false,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
    ],
    tag: 'Maison Cult Favorite',
    description: 'An airy, micronized silk blush pressed with French damask rose oil and pearl dust. Blends into skin like a soft romantic flush reminiscent of a midsummer stroll in the Jardin du Luxembourg.',
    shades: [
      { name: 'Rose Poudrée', hex: '#E8A598', desc: 'Soft ballet pink', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80' },
      { name: 'Pivoine Sauvage', hex: '#D67D89', desc: 'Muted wild peony', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80' },
      { name: 'Pêche Velours', hex: '#E59B81', desc: 'Warm vintage peach', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80' }
    ],
    details: [
      'Infused with certified organic Damascus Rose water',
      'Encased in an ivory heirloom compact with vintage gilded mirror',
      'Paraben-free, cruelty-free, and talc-free micronized finish',
      'Net weight: 8.5g / 0.3 oz'
    ]
  },
  {
    id: 'cherie-02',
    name: 'L’Élixir d’Amour Eau de Parfum',
    frenchSubtitle: 'Extrait de Parfum Flacon Vintage',
    category: 'Parfumerie',
    price: 6400,
    originalPrice: 7200,
    rating: 5.0,
    reviewsCount: 219,
    isBestSeller: true,
    isNew: true,
    isLimited: true,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=900&q=80',
    ],
    tag: 'Limited Holiday Edition',
    description: 'A poetic symphony of candied violets, Grasse centifolia roses, spun vanilla sugar, and a sensual base of white sandalwood and powdery orris. Poured into an artisanal fluted glass flacon with an antique silk bulb atomizer.',
    scentNotes: {
      top: 'Candied Bergamot, Sweet Violet Leaf & Lychee Dew',
      heart: 'May Centifolia Rose, Velvet Iris & Spun Almond Milk',
      base: 'Bourbon Vanilla Bean, Mysore Sandalwood & White Cashmere Musk'
    },
    sizes: ['50ml Extrait Flacon', '100ml Collector Spray'],
    details: [
      'Hand-blended in Grasse, France',
      'Packaged in our signature velvet box tied with ivory satin ribbon',
      '24-hour lingering sillage with 26% pure perfume oil concentration',
      'Includes complimentary engraved brass atomizer cap'
    ]
  },
  {
    id: 'cherie-03',
    name: 'Dentelle de Soie Slip Dress',
    frenchSubtitle: 'Robe de Soie à Dentelle Chantilly',
    category: 'Mode & Soie',
    price: 8900,
    originalPrice: 9800,
    rating: 4.8,
    reviewsCount: 86,
    isBestSeller: false,
    isNew: true,
    isLimited: false,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
    ],
    tag: 'Hand-Tailored Couture',
    description: 'Crafted from 100% 22-momme mulberry silk in delicate rose-champagne, bordered by authentic vintage-inspired French Chantilly lace along the neckline and hem. Bias-cut to skim your silhouette like liquid moonlight.',
    sizes: ['XS (UK 6)', 'S (UK 8)', 'M (UK 10)', 'L (UK 12)'],
    shades: [
      { name: 'Champagne Rosé', hex: '#F3E0DB', desc: 'Luminous blush champagne', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80' },
      { name: 'Noir Velours', hex: '#2A2426', desc: 'Midnight satin noir', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80' }
    ],
    details: [
      'Pure 22-momme organic mulberry silk charmeuse',
      'Adjustable delicate spaghetti straps with 18k gold-dipped sliders',
      'Hand-finished scalloped Chantilly lace detailing',
      'Dry clean or gentle hand wash with silk detergent'
    ]
  },
  {
    id: 'cherie-04',
    name: 'Nœud en Satin & Pearl Barrette',
    frenchSubtitle: 'Barrette Bijou Ruban et Perles',
    category: 'Accessoires',
    price: 1950,
    originalPrice: 2200,
    rating: 4.9,
    reviewsCount: 312,
    isBestSeller: true,
    isNew: false,
    isLimited: false,
    image: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=900&q=80',
    ],
    tag: 'Signature Coquette Accent',
    description: 'A romantic double-bow barrette handmade from lustrous dusty rose French silk duchess satin, anchored by a cluster of freshwater baroque pearls and a vintage brass clasp.',
    shades: [
      { name: 'Rose Poudrée', hex: '#E7BFC8', desc: 'Dusty rose', image: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=900&q=80' },
      { name: 'Ivoire Perle', hex: '#FFF9F3', desc: 'Ivory cream', image: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=900&q=80' }
    ],
    details: [
      'Hand-pleated French silk satin ribbon',
      'Genuine natural freshwater baroque seed pearls',
      'Sturdy non-slip gold-plated spring clasp (8cm)',
      'Delivered in an embossed linen keepsake pouch'
    ]
  },
  {
    id: 'cherie-05',
    name: 'Brillant à Lèvres Nectar Rose',
    frenchSubtitle: 'Huile Nourrissante pour les Lèvres',
    category: 'La Beauté',
    price: 2150,
    originalPrice: 2450,
    rating: 4.8,
    reviewsCount: 95,
    isBestSeller: false,
    isNew: true,
    isLimited: false,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80'
    ],
    tag: 'Glass Finish',
    description: 'A cushiony peptide lip oil that delivers a high-shine, non-sticky glass finish with an intoxicating hint of French wild strawberries and candied roses. Formulated with squalane and camellia seed oil.',
    shades: [
      { name: 'Fraise Bonbon', hex: '#DE6B78', desc: 'Glazed strawberry candy', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=80' },
      { name: 'Pétale de Miel', hex: '#DFA386', desc: 'Honeyed rose nude', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80' }
    ],
    details: [
      'Plumping tri-peptide complex for hydrated lips',
      'Custom plush doe-foot wand with engraved gold cap',
      'Enriched with cold-pressed rosehip and camellia oil',
      'Dermatologically tested & vegan'
    ]
  },
  {
    id: 'cherie-06',
    name: 'Bougie Parfumée Sainte-Chapelle',
    frenchSubtitle: 'Cire Végétale & Verre Soufflé',
    category: 'Parfumerie',
    price: 3600,
    originalPrice: 3900,
    rating: 4.9,
    reviewsCount: 67,
    isBestSeller: false,
    isNew: false,
    isLimited: true,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80'
    ],
    tag: 'Artisan Glass',
    description: 'Evoking Gothic stained glass in morning sun: frankincense, velvety dark damask rose, smoked cedarwood, and sweet beeswax. Hand-poured in ribbed blush glass that glows like an antique lantern.',
    scentNotes: {
      top: 'Incense Smoke & Pink Peppercorn',
      heart: 'Dark Damask Rose & Clove Bud',
      base: 'Smoked Cedarwood & Amber Resin'
    },
    sizes: ['240g (65 Hour Burn)'],
    details: [
      '100% soy & coconut vegetable wax blend',
      'Double braided unbleached cotton wick',
      'Reusable ribbed fluted glass vessel',
      'Hand-stamped wax seal label'
    ]
  }
];

export const CAMPAIGN_STORY = {
  quote: "Beauty is not an obligation to the world, but a private romance with oneself.",
  title: "L'Atelier des Rêves",
  subtitle: "Handcrafted in Small Batches Between Paris and Jaipur",
  text1: "CHÉRIE was born out of a desire to revive the slow, tactile joy of vintage dressing tables: the soft click of an engraved enamel compact, the whisper of pure mulberry silk against sun-warmed skin, and the heady intrigue of an artisan perfume flacon sealed with silk thread.",
  text2: "Every piece we present is art-directed with devotion. We partner with multi-generational master perfumers in Grasse and heritage handloom weavers in India, combining French romanticism with artisanal craftsmanship. No rushed mass production. Just timeless, heirloom beauty meant to be cherished for lifetimes."
};

export const TESTIMONIALS = [
  {
    quote: "The Rose Poudrée blush feels like spun chiffon. It imparts that elusive lit-from-within glow seen in 18th-century French portraits. Truly an exquisite creation.",
    author: "Eléonore de Saint-Germain",
    title: "Senior Beauty Editor, Paris",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    verified: true,
    product: "Poudre de Soie Petal Blush"
  },
  {
    quote: "Opening a CHÉRIE parcel is an entire theatrical experience. The delicate tissue, the real dried rose petals, the custom handwritten note tied with a satin bow... I felt like royalty.",
    author: "Aanya Singhania",
    title: "Verified Patron, New Delhi",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    verified: true,
    product: "Dentelle de Soie Slip Dress"
  },
  {
    quote: "L’Élixir d’Amour is pure magic. Violet candies, soft powder and warm skin. I receive compliments every single time I wear it. Worth every rupee.",
    author: "Claire Moreau",
    title: "Art Historian & Collector, Lyon",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    verified: true,
    product: "L’Élixir d’Amour Eau de Parfum"
  }
];

export const PRESS_MENTIONS = [
  { name: 'VOGUE', quote: 'The revival of romantic feminine aesthetics done with exquisite artisanal integrity.' },
  { name: 'ELLE', quote: 'CHÉRIE’s vintage glass perfume flacons are the crown jewel of any vanity.' },
  { name: 'HARPER’S BAZAAR', quote: 'A love letter to tactile luxury and timeless dressing-room intimacy.' },
  { name: 'L’OFFICIEL', quote: 'Sensual, poetic, and unmistakably Parisian.' }
];

export const LOOKBOOK_ITEMS = [
  {
    id: 'lb-1',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    title: 'The Morning Vanity',
    caption: 'Sunlight filtering through lace curtains, cold marble and warm rose powders.',
    tag: 'Look 01'
  },
  {
    id: 'lb-2',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    title: 'Whispered Silks',
    caption: 'Mulberry silk slip dresses draped with vintage lace trims.',
    tag: 'Look 02'
  },
  {
    id: 'lb-3',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
    title: 'The Glass Flacon',
    caption: 'Hand-blown fluted crystal holding precious essences of Grasse roses.',
    tag: 'Look 03'
  },
  {
    id: 'lb-4',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    title: 'Satin & Pearls',
    caption: 'Coquette hair jewels pinned with baroque freshwater pearls.',
    tag: 'Look 04'
  }
];
