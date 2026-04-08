"use client";

import { useState } from "react";

const products = [
  { id: 1, name: "Calming Lavender Yoni Wash", size: "160ml / 5.35oz", price: 32, description: "Mild odor-blocking and neutralizing wash for your most intimate area." },
  { id: 2, name: "Calming Lavender Yoni Oil", size: "60ml / 2oz", price: 48, description: "Helps fight dryness, chafing, inflammation, and irritation of vulvar skin." },
  { id: 3, name: "Calming Lavender Yoni Scrub", size: "200g / 6.76oz", price: 38, description: "Removes dead skin cells to reveal softer, smoother, brighter skin." },
  { id: 4, name: "Lavender Petal Vajacial Jelly Mask", size: "45g / 1.5oz", price: 12, description: "Powder-to-jelly mask with real lavender petals. Peel off after 10-15 mins." },
  { id: 5, name: "Lavender Hydrate Vajacial Gel Mask", size: "100ml / 3.38oz", price: 28, description: "Cooling gel mask that soothes, calms, moisturizes, and rejuvenates." }
];

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    alert(`Added ${product.name} to cart`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-[#FEFCF8] to-[#F5F0E8]">
        <h1 className="font-serif text-4xl md:text-6xl text-[#2C2A2E] mb-4">
          Your body. Your standard.
        </h1>
        <p className="text-lg text-[#8E7D8E] mb-8">
          pH-balanced intimate care. Made simple.
        </p>
        <button 
          onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-[#B5946C] text-white px-8 py-3 hover:bg-[#D4A574] transition-colors"
        >
          Shop the collection
        </button>
      </section>

      {/* Collection */}
      <section id="collection" className="container mx-auto px-4 py-16">
        <h2 className="font-serif text-3xl text-center text-[#2C2A2E] mb-8">The Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border border-[#E8E0D5] p-4 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🌸</div>
              <h3 className="font-serif text-lg font-medium">{product.name}</h3>
              <p className="text-sm text-[#8E7D8E] mb-2">{product.size}</p>
              <p className="text-[#B5946C] font-bold text-xl mb-3">${product.price}</p>
              <button 
                onClick={() => addToCart(product)}
                className="w-full bg-[#6A5A6E] text-white py-2 hover:bg-[#B5946C] transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-[#F5F0E8] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-serif text-xl mb-2">pH-Balanced</h3>
              <p className="text-sm text-[#8E7D8E]">Formulated to respect your natural equilibrium</p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-2">Lavender-Infused</h3>
              <p className="text-sm text-[#8E7D8E]">Calming, antibacterial, and gentle</p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-2">External Use Only</h3>
              <p className="text-sm text-[#8E7D8E]">Safe, clear, and honest</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6A5A6E] text-white text-center py-8">
        <p>© 2024 Louve Atelier. All rights reserved.</p>
      </footer>
    </div>
  );
}
