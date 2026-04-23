"use client";

import Image from "next/image";

export function ProductCard({ product, onView, onAdd }) {
  return (
    <div className="card-luxury group bg-card border border-border/50 p-5 transition-all duration-300 hover:border-accent/30">
      {/* Image Container with hover effect */}
      <div className="product-image-container aspect-square mb-4 overflow-hidden bg-secondary/50">
        <div className="w-full h-full flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-500">
          🌸
        </div>
      </div>
      
      <h3 className="font-serif text-lg font-medium text-foreground mb-1">
        {product.name}
      </h3>
      <p className="text-xs text-muted-foreground mb-2">{product.size}</p>
      <p className="text-accent font-semibold text-lg mb-4">${product.price}</p>
      
      <div className="flex gap-2">
        <button 
          onClick={onView}
          className="flex-1 px-3 py-2 text-sm border border-accent/40 text-accent hover:bg-accent hover:text-white transition-all duration-200"
        >
          View
        </button>
        <button 
          onClick={onAdd}
          className="flex-1 px-3 py-2 text-sm btn-gold"
        >
          Add
        </button>
      </div>
    </div>
  );
}
