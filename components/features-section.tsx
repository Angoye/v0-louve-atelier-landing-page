'use client';

import { Shield, Flower, CheckCircle } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: 'pH-Balanced',
      description: 'Formulated to respect your natural equilibrium.',
    },
    {
      icon: Flower,
      title: 'Lavender-Infused',
      description: 'Calming, antibacterial, and gentle on sensitive skin.',
    },
    {
      icon: CheckCircle,
      title: 'External Use Only',
      description: 'Safe, clear, and honest about our product benefits.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="font-serif text-xl text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
