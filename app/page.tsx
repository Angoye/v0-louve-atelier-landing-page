"use client";

import { useState } from "react";
import { useCart } from "@/app/cart-context";
import { products, Product } from "@/lib/products";
import { ProductModal } from "@/components/product-modal";
import { CartDrawer } from "@/components/cart-drawer"; // Assuming you have this component
// If you don't have a CartDrawer component, we'll create it in the next step.

export default function Home() {
  const { addItem, total, items } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.imageIcon,
      quantity: quantity,
    });
    // Optional: show a brief success indicator instead of an alert
  };

  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section (Unchanged) */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-cream to-sandstone">
        <div className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/30 mb-6">
          <span className="text-xs tracking-wider text-gold">NO JARGON · JUST RESULTS</span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl text-darktext mb-4">
          Your body. <br />
          <span className="text-gold">Your standard.</span>
        </h1>
        <p className="text-lg text-softgray mb-8 max-w-2xl mx-auto">
          pH-balanced intimate care. Made simple.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold px-8 py-3"
          >
            Shop the collection
          </button>
          <button className="border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-white transition-colors">
            The ingredients
          </button>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="gold-line mx-auto" />
          <h2 className="font-serif text-4xl text-darktext mt-4">The Collection</h2>
          <p className="text-softgray mt-2">Five essentials. One standard: effective.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card group text-center">
              <div className="product-image-container aspect-square flex items-center justify-center text-6xl mb-4">
                {product.imageIcon}
              </div>
              <h3 className="font-serif text-lg font-medium text-darktext">{product.name}</h3>
              <p className="text-xs text-softgray mb-2">{product.size}</p>
              <p className="text-gold font-bold text-xl mb-4">${product.price}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="flex-1 border border-gold/50 text-gold py-2 text-sm hover:bg-gold hover:text-white transition"
                >
                  View
                </button>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 btn-gold py-2 text-sm"
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges Section (Unchanged) */}
      <section className="bg-sandstone py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-serif text-xl mb-2">pH-Balanced</h3>
              <p className="text-sm text-softgray">Formulated to respect your natural equilibrium</p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-2">Lavender-Infused</h3>
              <p className="text-sm text-softgray">Calming, antibacterial, and gentle</p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-2">External Use Only</h3>
              <p className="text-sm text-softgray">Safe, clear, and honest</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Unchanged) */}
      <footer className="bg-lavender text-white text-center py-12">
        <p>© 2024 Louve Atelier. All rights reserved.</p>
        <p className="text-sm opacity-70 mt-2">pH-balanced intimate care. Made for your body.</p>
      </footer>

      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 bg-gold text-white p-4 rounded-full shadow-lg hover:bg-gold/90 transition z-40 flex items-center justify-center"
      >
        🛒
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-lavender text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
      </button>

      {/* Modals & Drawers */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
