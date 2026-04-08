'use client';

import { ProductCard } from './product-card';

export const PRODUCTS = [
  {
    id: '1',
    name: 'Calming Lavender Yoni Wash',
    size: '160ml / 5.35oz',
    benefit: 'Maintains balanced pH • Eliminates odors & bacteria • Relieves irritation & itching',
    shortDescription: 'Mild odor-blocking and neutralizing wash for your most intimate area.',
    price: 32.00,
    image: '/product-1.jpg',
  },
  {
    id: '2',
    name: 'Calming Lavender Yoni Oil',
    size: '60ml / 2oz',
    benefit: 'Alleviates vaginal dryness • Relieves itching • pH balancing',
    shortDescription: 'Helps fight dryness, chafing, inflammation, and irritation of vulvar skin.',
    price: 48.00,
    image: '/product-2.jpg',
  },
  {
    id: '3',
    name: 'Calming Lavender Yoni Scrub',
    size: '200g / 6.76oz',
    benefit: 'Smoothing • Exfoliating • Cleansing • Prevents ingrown hairs',
    shortDescription: 'Removes dead skin cells to reveal softer, smoother, brighter skin.',
    price: 38.00,
    image: '/product-3.jpg',
  },
  {
    id: '4',
    name: 'Lavender Petal Vajacial Jelly Mask',
    size: '45g / 1.5oz (Single Application)',
    benefit: 'Relieves irritations • Soothes',
    shortDescription: 'Powder-to-jelly mask with real lavender petals. Peel off after 10-15 mins.',
    price: 12.00,
    image: '/product-4.jpg',
  },
  {
    id: '5',
    name: 'Lavender Hydrate Vajacial Gel Mask',
    size: '100ml / 3.38oz',
    benefit: 'Soothes and calms • Moisturizes • Rejuvenates',
    shortDescription: 'Cooling gel mask. Apply, wait 15 mins, rinse.',
    price: 28.00,
    image: '/product-5.jpg',
  },
];

export function ProductGridSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            The Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Five essentials designed for your intimate care
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
