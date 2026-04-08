'use client';

import { ProductCard } from './product-card';

export const PRODUCTS = [
  {
    id: '1',
    name: 'Lavender Mist',
    description: 'Calming facial mist with organic lavender',
    price: 45.00,
    image: '/product-1.jpg',
  },
  {
    id: '2',
    name: 'Rose Oil Serum',
    description: 'Luxurious anti-aging serum with rose extract',
    price: 65.00,
    image: '/product-2.jpg',
  },
  {
    id: '3',
    name: 'Silk Pillowcase',
    description: 'Premium mulberry silk for better sleep',
    price: 89.00,
    image: '/product-3.jpg',
  },
  {
    id: '4',
    name: 'Body Ritual Kit',
    description: 'Complete skincare set with 4 essentials',
    price: 128.00,
    image: '/product-4.jpg',
  },
  {
    id: '5',
    name: 'Jade Roller',
    description: 'Authentic jade facial massage tool',
    price: 38.00,
    image: '/product-5.jpg',
  },
  {
    id: '6',
    name: 'Wellness Tea Collection',
    description: 'Organic herbal tea selection (6 blends)',
    price: 52.00,
    image: '/product-6.jpg',
  },
  {
    id: '7',
    name: 'Candle Ritual',
    description: 'Hand-poured soy candle with essential oils',
    price: 48.00,
    image: '/product-7.jpg',
  },
  {
    id: '8',
    name: 'Face Mask Ritual',
    description: 'Detoxifying clay mask (100g)',
    price: 42.00,
    image: '/product-8.jpg',
  },
];

export function ProductGridSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Our Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked wellness essentials for your daily rituals
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
