'use client';

import { Button } from '@/components/ui/button';
import { useCart } from '@/app/cart-context';
import Image from 'next/image';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  onViewProduct: () => void;
}

export function ProductCard({ product, onViewProduct }: ProductCardProps) {
  const { addItem } = useCart();

  const handleQuickShop = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <div className="flex flex-col h-full group">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-muted aspect-square mb-4 rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <h3 className="font-serif text-sm md:text-base text-foreground mb-1 leading-snug">
        {product.name}
      </h3>
      <p className="text-xs text-muted-foreground mb-3">{product.size}</p>
      <p className="text-lg font-serif text-accent mb-4">${product.price.toFixed(2)}</p>

      {/* Buttons */}
      <div className="flex gap-2 mt-auto">
        <Button
          onClick={onViewProduct}
          variant="outline"
          className="flex-1 border-accent text-accent hover:bg-secondary hover:text-accent"
        >
          View Product
        </Button>
        <Button
          onClick={handleQuickShop}
          className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Quick Shop
        </Button>
      </div>
    </div>
  );
}
