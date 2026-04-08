'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface HeroSectionProps {
  onShopClick: () => void;
}

export function HeroSection({ onShopClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-20 md:py-32 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl text-foreground leading-tight mb-4">
                Intimate care that <span className="text-accent">actually works</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                pH-balanced. Lavender-infused. Made for your body.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                No spiritual jargon. Just clean, effective intimate care.
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={onShopClick}
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-medium"
              >
                Shop now
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-base font-medium border-primary text-primary hover:bg-primary/5"
              >
                The ingredients
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg" />
            <Image
              src="/hero-image.jpg"
              alt="Luxury wellness ritual"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
