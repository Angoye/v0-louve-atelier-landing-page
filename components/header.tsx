'use client';

import { useCart } from '@/app/cart-context';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <h1 className="font-serif text-2xl md:text-3xl text-foreground">
            Louve <span className="text-accent">Atelier</span>
          </h1>
          
          <Button
            onClick={onCartClick}
            variant="ghost"
            size="sm"
            className="relative text-foreground hover:text-accent"
          >
            <ShoppingBag className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
