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
              <h2 className="font-serif text-5xl md:text-6xl text-foreground leading-tight mb-4">
                Rituals of <span className="text-accent">Grace</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover curated wellness products designed for the modern woman. Each item is thoughtfully selected to elevate your daily rituals.
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={onShopClick}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base"
              >
                Explore Collection
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-base"
              >
                Learn More
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
