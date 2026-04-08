export interface Product {
  id: string;
  name: string;
  size: string;
  price: number;
  description: string;
  oneBenefit: string;
  ingredients: string;
  howToUse: string;
  precautions: string;
  image: string;
}

// Ensure PRODUCTS is properly exported
const PRODUCTS_DATA: Product[] = [


  {
    id: '1',
    name: 'Calming Lavender Yoni Wash',
    size: '160ml / 5.35oz',
    price: 32,
    description: 'Mild odor-blocking and neutralizing wash for your most intimate area. Maintains balanced pH, eliminates odors and bacteria, relieves irritation and itching.',
    oneBenefit: 'Maintains balanced pH',
    ingredients: 'Water, Glycerol, Palm kernel oil, Polyamino sugar condensate, Citric Acid, Sophora Flavescens Root Extract, Salvia Lavandulaefolia Leaf Oil, Lavandula Angustifolia Flower Extract, Lavandula Hybrida Extract, Lavandula Hybrida Flower Water, Sophora flavescens Ait extract, Aloe Vera extract, Pelargonium graveolens extract, Butylene Glycol, Phenoxyethanol.',
    howToUse: 'Apply to body in shower, work into a lather, and rinse as normal. Do not insert gel directly into private areas. Simply apply gel around the outside of the lips.',
    precautions: 'For external use only. Keep out of reach of children. Store in a cool and dry place.',
    image: '/product-1.jpg',
  },
  {
    id: '2',
    name: 'Calming Lavender Yoni Oil',
    size: '60ml / 2oz',
    price: 48,
    description: 'Helps fight dryness, chafing, inflammation, and irritation of vulvar skin. Alleviates vaginal dryness, relieves itching, and supports pH balance.',
    oneBenefit: 'Alleviates vaginal dryness',
    ingredients: 'Jojoba oil, Grape Seed Oil, Sweet Almond Oil, Salvia Lavandulaefolia Leaf Oil, Lavandula Angustifolia Flower Extract, Lavandula Hybrida Extract, Vitamin E.',
    howToUse: 'Apply a few drops to clean dry skin and gently massage into intimate areas. Apply several times a day to areas of irritation, dryness or atrophy. Daily maintenance will leave your yoni feeling hydrated and healthy.',
    precautions: 'For external use only. Keep out of reach of children. Store in a cool and dry place.',
    image: '/product-2.jpg',
  },
  {
    id: '3',
    name: 'Calming Lavender Yoni Scrub',
    size: '200g / 6.76oz',
    price: 38,
    description: 'Removes dead skin cells to reveal softer, smoother, brighter skin. Helps avoid or remove ingrown hairs. Smoothing, exfoliating, cleansing.',
    oneBenefit: 'Prevents ingrown hairs',
    ingredients: 'Sea Salt, Jojoba Oil, Grape Seed Oil, Sweet Almond Oil, Salvia Lavandulaefolia Leaf Oil, Lavandula Angustifolia Flower Extract, Lavandula Hybrida Extract, Lavandula Hybrida Flower Water, Vitamin E.',
    howToUse: 'Apply the scrub to wet skin and massage in circular movements. Rinse with lukewarm water. Use once or twice a week for soft, healthy-looking, visibly glowing skin.',
    precautions: 'For external use only. Keep out of reach of children. Store in a cool and dry place.',
    image: '/product-3.jpg',
  },
  {
    id: '4',
    name: 'Lavender Petal Vajacial Jelly Mask',
    size: '45g / 1.5oz — Single Application',
    price: 12,
    description: 'Powder-to-jelly mask with real lavender petals. Relieves irritations and soothes. Peel off after 10-15 mins.',
    oneBenefit: 'Relieves irritations',
    ingredients: 'Corn Starch, Diatomite, Algin, Pectin, Sodium Hyaluronate, Lavender Flower, Lavender Flower Extract, Parfum.',
    howToUse: 'Clean the area. Mix powder with 1.5oz of water. Stir swiftly and use the mask right away. Apply a thick layer to the skin. Let it sit for 10-15 mins. Peel off.',
    precautions: 'For external use only. Avoid contact with eyes. Use 1-2 times per week. Can be used on face and body.',
    image: '/product-4.jpg',
  },
  {
    id: '5',
    name: 'Lavender Hydrate Vajacial Gel Mask',
    size: '100ml / 3.38oz',
    price: 28,
    description: 'Cooling gel mask that soothes, calms, moisturizes, and rejuvenates. Soothes and calms irritated skin.',
    oneBenefit: 'Soothes and calms',
    ingredients: 'Aqua, Glycerin, Avena Sativa Kernel Extract, Beta-Glucan, Lavender Oil, Lavender Extract, Gentiana Scabra Root Extract, Dexpanthenol, Allantoin, Sodium Hyaluronate, Erythritol, Chondrus Crispus Extract, Portulaca Oleracea Extract.',
    howToUse: 'After cleansing, scoop an even layer of our mask onto skin. Keep on for 15 minutes then rinse off with cool water.',
    precautions: 'For external use only. Keep out of reach of children. Store in a cool and dry place.',
    image: '/product-5.jpg',
  },
];

export const PRODUCTS: Product[] = PRODUCTS_DATA;
