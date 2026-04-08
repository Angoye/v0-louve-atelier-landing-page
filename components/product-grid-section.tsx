'use client';

import { useState } from 'react';
import { ProductCard } from './product-card';
import { ProductDetailDrawer } from './product-detail-drawer';
import { PRODUCTS } from '@/lib/products';

export function ProductGridSection() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const product = selectedProduct ? PRODUCTS.find(p => p.id === selectedProduct) : null;

  return (
    <>
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
              <ProductCard 
                key={product.id} 
                product={product}
                onViewProduct={() => setSelectedProduct(product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Drawer */}
      <ProductDetailDrawer
        product={product || null}
        open={!!selectedProduct}
        onOpenChange={(open) => {
          if (!open) setSelectedProduct(null);
        }}
      />
    </>
  );
}
