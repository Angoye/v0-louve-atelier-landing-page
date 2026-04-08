'use client';

import { Button } from '@/components/ui/button';

interface FooterSectionProps {
  onShopClick?: () => void;
}

export function FooterSection({ onShopClick }: FooterSectionProps) {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl">
            Get started with Louve Atelier
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Reclaim your comfort with clean, effective intimate care.
          </p>
          <Button
            onClick={onShopClick}
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-medium"
          >
            Buy now
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg mb-4">
              Louve <span className="text-accent">Atelier</span>
            </h3>
            <p className="text-sm text-primary-foreground/80">
              pH-balanced intimate care. Made for your body.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition">All Products</a></li>
              <li><a href="#" className="hover:text-accent transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-accent transition">Collections</a></li>
              <li><a href="#" className="hover:text-accent transition">Gift Sets</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-serif text-sm mb-4">About</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition">Our Story</a></li>
              <li><a href="#" className="hover:text-accent transition">Sustainability</a></li>
              <li><a href="#" className="hover:text-accent transition">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-sm mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition">Help Center</a></li>
              <li><a href="#" className="hover:text-accent transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-accent transition">Returns</a></li>
              <li><a href="#" className="hover:text-accent transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 Louve Atelier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
