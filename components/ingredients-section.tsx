'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function IngredientsSection() {
  const ingredients = [
    {
      name: 'Sophora Flavescens',
      description: 'Traditional botanical extract known for its antibacterial and pH-balancing properties.',
    },
    {
      name: 'Aloe Vera',
      description: 'Natural moisturizer that soothes irritation and supports skin healing.',
    },
    {
      name: 'Jojoba Oil',
      description: 'Lightweight oil that mirrors skin\'s natural pH and provides gentle hydration.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            The Louve Standard
          </h2>
          <p className="text-lg text-muted-foreground">
            Made for women who want results without the performance. No spiritual jargon. Just clean, effective intimate care.
          </p>
        </div>

        <div className="bg-background/50 rounded-lg p-6 md:p-8 mb-8">
          <p className="text-center text-muted-foreground mb-4">
            Full ingredients listed on each product. No hidden fillers. No harsh sulfates.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-foreground mb-4">Key Ingredients</h3>
          <Accordion type="single" collapsible className="w-full">
            {ingredients.map((ingredient, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="font-serif text-foreground hover:text-accent py-4">
                  {ingredient.name}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {ingredient.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
