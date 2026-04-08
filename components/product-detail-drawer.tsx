'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Product } from '@/lib/products';
import { useCart } from '@/app/cart-context';

interface ProductDetailDrawerProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type TabType = 'description' | 'ingredients' | 'howto' | 'precautions';

export function ProductDetailDrawer({ product, open, onOpenChange }: ProductDetailDrawerProps) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<TabType>('description');
  const { addItem } = useCart();

  if (!open || !product) return null;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
    setQuantity(1);
    onOpenChange(false);
  };

  const handleOverlayClick = () => {
    onOpenChange(false);
  };

  return (
    <>
      {/* Modal Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/50 transition-opacity"
        onClick={handleOverlayClick}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <div
          className="bg-background w-11/12 max-w-4xl max-h-[85vh] rounded pointer-events-auto overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="sticky top-0 flex justify-end p-6 bg-background border-b border-border z-10">
            <button
              onClick={() => onOpenChange(false)}
              className="text-2xl font-light text-foreground hover:text-accent transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Modal Grid: Image | Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Left: Product Image */}
            <div className="flex items-center justify-center aspect-square bg-muted rounded overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Product Content */}
            <div className="flex flex-col">
              {/* Product Header */}
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                {product.name}
              </h2>
              <p className="text-sm text-muted-foreground mb-1">{product.size}</p>
              <p className="text-xl font-serif text-accent mb-6">${product.price.toFixed(2)}</p>

              {/* Tab Buttons */}
              <div className="flex gap-0 border-b border-muted mb-4">
                {(['description', 'ingredients', 'howto', 'precautions'] as TabType[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? 'text-accent border-accent'
                        : 'text-muted-foreground border-transparent hover:text-foreground'
                    }`}
                  >
                    {tab === 'description' && 'Description'}
                    {tab === 'ingredients' && 'Ingredients'}
                    {tab === 'howto' && 'How to Use'}
                    {tab === 'precautions' && 'Precautions'}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1 mb-6 text-sm text-foreground leading-relaxed">
                {activeTab === 'description' && <p>{product.description}</p>}
                {activeTab === 'ingredients' && (
                  <p className="text-xs text-muted-foreground whitespace-pre-wrap">
                    {product.ingredients}
                  </p>
                )}
                {activeTab === 'howto' && (
                  <p className="whitespace-pre-wrap">{product.howToUse}</p>
                )}
                {activeTab === 'precautions' && (
                  <p className="whitespace-pre-wrap">{product.precautions}</p>
                )}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="border-t border-muted pt-6 flex gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center border border-muted rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-12 text-center border-none bg-transparent text-foreground focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(5, quantity + 1))}
                    className="w-9 h-9 flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-accent text-accent-foreground font-semibold px-6 py-2 hover:bg-accent/90 transition-colors"
                >
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
