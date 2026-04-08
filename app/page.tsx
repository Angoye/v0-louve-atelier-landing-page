'use client';

import { useState } from 'react';
import { CartProvider } from '@/app/cart-context';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ProductGridSection } from '@/components/product-grid-section';
import { FeaturesSection } from '@/components/features-section';
import { IngredientsSection } from '@/components/ingredients-section';
import { FooterSection } from '@/components/footer-section';
import { CheckoutDrawer } from '@/components/checkout-drawer';

export default function Home() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <CartProvider>
      <Header onCartClick={() => setCheckoutOpen(true)} />
      <main>
        <HeroSection onShopClick={() => setCheckoutOpen(true)} />
        <ProductGridSection />
        <FeaturesSection />
        <IngredientsSection />
      </main>
      <FooterSection onShopClick={() => setCheckoutOpen(true)} />
      <CheckoutDrawer open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </CartProvider>
  );
}
