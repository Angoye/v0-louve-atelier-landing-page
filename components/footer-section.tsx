'use client';

export function FooterSection() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg mb-4">
              Louve <span className="text-accent">Atelier</span>
            </h3>
            <p className="text-sm text-primary-foreground/80">
              Curated wellness rituals for the modern woman.
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
