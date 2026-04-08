'use client';

import { Button } from '@/components/ui/button';
import { useCart } from '@/app/cart-context';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  name: string;
  size: string;
  benefit: string;
  shortDescription: string;
  price: number;
  image: string;
}

export function ProductCard({ id, name, size, benefit, shortDescription, price, image }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      image,
      quantity: 1,
    });
  };

  return (
    <div className="flex flex-col h-full group">
      <div className="relative overflow-hidden bg-muted aspect-square mb-4">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-serif text-base text-foreground mb-1 leading-snug">{name}</h3>
      <p className="text-xs text-muted-foreground mb-2">{size}</p>
      <p className="text-sm text-muted-foreground mb-3 flex-1 line-clamp-2">{shortDescription}</p>
      <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{benefit}</p>
      <div className="flex items-baseline justify-between">
        <span className="text-lg font-serif text-accent">${price.toFixed(2)}</span>
        <Button
          onClick={handleAddToCart}
          variant="ghost"
          size="sm"
          className="text-accent hover:text-primary hover:bg-secondary/50"
        >
          Add
        </Button>
      </div>
    </div>
  );
}
