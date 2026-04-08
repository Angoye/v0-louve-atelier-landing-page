'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Product } from '@/lib/products';
import { useCart } from '@/app/cart-context';

interface ProductDetailDrawerProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductDetailDrawer({ product, open, onOpenChange }: ProductDetailDrawerProps) {
  const [quantity, setQuantity] = useState(1);
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

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end md:items-center justify-center">
      <div
        className="bg-background w-full md:w-[90%] md:max-w-2xl md:rounded-lg rounded-t-2xl max-h-[90vh] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="sticky top-0 flex justify-end p-4 bg-background border-b border-border z-10">
          <button
            onClick={() => onOpenChange(false)}
            className="text-foreground hover:text-primary"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Product Image */}
            <div className="flex items-center justify-center bg-muted rounded-lg aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                {product.name}
              </h2>
              <p className="text-sm text-muted-foreground mb-1">{product.size}</p>
              <p className="text-lg font-serif text-accent mb-4">${product.price}</p>
              <p className="text-sm text-muted-foreground mb-6">{product.oneBenefit}</p>

              {/* Tabs */}
              <Tabs defaultValue="description" className="w-full mb-6">
                <TabsList className="w-full grid grid-cols-4 h-auto bg-muted p-1 rounded">
                  <TabsTrigger value="description" className="text-xs md:text-sm">
                    Description
                  </TabsTrigger>
                  <TabsTrigger value="ingredients" className="text-xs md:text-sm">
                    Ingredients
                  </TabsTrigger>
                  <TabsTrigger value="howto" className="text-xs md:text-sm">
                    How to Use
                  </TabsTrigger>
                  <TabsTrigger value="precautions" className="text-xs md:text-sm">
                    Precautions
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-4 text-sm text-foreground">
                  {product.description}
                </TabsContent>

                <TabsContent value="ingredients" className="mt-4">
                  <p className="text-sm text-foreground whitespace-pre-wrap">
                    {product.ingredients}
                  </p>
                </TabsContent>

                <TabsContent value="howto" className="mt-4">
                  <p className="text-sm text-foreground whitespace-pre-wrap">
                    {product.howToUse}
                  </p>
                </TabsContent>

                <TabsContent value="precautions" className="mt-4">
                  <p className="text-sm text-foreground whitespace-pre-wrap">
                    {product.precautions}
                  </p>
                </TabsContent>
              </Tabs>

              {/* Quantity and Add to Cart */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-foreground">Quantity:</span>
                  <div className="flex items-center border border-border rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-foreground hover:bg-muted"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 text-foreground min-w-12 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(Math.min(5, quantity + 1))}
                      className="px-3 py-2 text-foreground hover:bg-muted"
                    >
                      +
                    </button>
                  </div>
                </div>
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
