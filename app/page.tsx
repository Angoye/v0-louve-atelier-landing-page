"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { ProductDetailDrawer } from "@/components/product-detail-drawer";
import { CartDrawer } from "@/components/cart-drawer";
import { CheckoutDrawer } from "@/components/checkout-drawer";
import { useCart } from "@/hooks/use-cart";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const { cart, addToCart, updateQuantity, removeFromCart, total } = useCart();

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-warm">
        {/* Decorative texture overlay */}
        <div className="absolute inset-0 texture-overlay opacity-30" />
        
        {/* Animated gold accent line - top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-gold animate-scale-in" />
        
        <div className="container mx-auto px-4 py-20 md:py-28 text-center animate-fade-in">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-gold/20">
            <span className="text-xs tracking-wider text-accent uppercase">Clean. Effective. Honest.</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            Your body.
            <br />
            <span className="text-gradient-lavender">Your standard.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            pH-balanced intimate care. Made simple.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gold px-8 py-3.5 rounded-none text-white font-medium tracking-wide hover:shadow-lg transition-all duration-300"
            >
              Shop the collection
            </button>
            <button className="group px-8 py-3.5 rounded-none border border-accent/40 bg-transparent text-accent font-medium hover:bg-accent hover:text-white transition-all duration-300">
              The ingredients
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
        
        {/* Bottom gold line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-gold" />
      </section>

      {/* Collection Section */}
      <section id="collection" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-slide-up">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
            The Collection
          </h2>
          <p className="text-muted-foreground">
            Five essentials. One standard: effective.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard 
                product={product} 
                onView={() => setSelectedProduct(product)}
                onAdd={() => addToCart(product)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges - Enhanced */}
      <section className="bg-secondary/30 py-16 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "pH-Balanced", desc: "Formulated to respect your natural equilibrium", icon: "⚖️" },
              { title: "Lavender-Infused", desc: "Calming, antibacterial, and gentle", icon: "🌸" },
              { title: "External Use Only", desc: "Safe, clear, and honest", icon: "✨" }
            ].map((badge, i) => (
              <div key={i} className="card-luxury p-6 bg-card/50 backdrop-blur-sm">
                <div className="text-3xl mb-3">{badge.icon}</div>
                <h3 className="font-serif text-xl text-foreground mb-2">{badge.title}</h3>
                <p className="text-muted-foreground text-sm">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="glass rounded-2xl p-12 max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
            Clean care. Real results.
          </h3>
          <p className="text-muted-foreground mb-6">
            Full ingredients listed. No hidden fillers. No harsh sulfates.
          </p>
          <button 
            onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold px-8 py-3 rounded-none"
          >
            Start your routine
          </button>
        </div>
      </section>

      {/* Drawers */}
      {selectedProduct && (
        <ProductDetailDrawer 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          onAdd={() => addToCart(selectedProduct)}
        />
      )}
      
      <CartDrawer 
        open={showCart}
        onClose={() => setShowCart(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        total={total}
        onCheckout={() => {
          setShowCart(false);
          setShowCheckout(true);
        }}
      />
      
      <CheckoutDrawer 
        open={showCheckout}
        onClose={() => setShowCheckout(false)}
        total={total}
        cart={cart}
      />
    </div>
  );
}
