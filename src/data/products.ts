export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  images: string[];
  era: string;
  material: string;
  dimensions: string;
  condition: string;
  isFeatured: boolean;
  isOnSale: boolean;
}

export const products: Product[] = [
  {
    id: "commode-vintage-1950",
    name: "Commode vintage années 50",
    price: 680,
    originalPrice: 850,
    description: "Commode en noyer massif avec poignées laiton d'origine. Trois tiroirs, belle patine naturelle.",
    category: "Meubles",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop",
    ],
    era: "Années 1950",
    material: "Noyer massif, laiton",
    dimensions: "L 120 × P 45 × H 85 cm",
    condition: "Très bon état",
    isFeatured: true,
    isOnSale: true,
  },
  {
    id: "table-roulante-vintage",
    name: "Table roulante années 60",
    price: 320,
    description: "Table roulante en métal doré et plateaux en verre fumé. Roulettes d'origine fonctionnelles.",
    category: "Meubles",
    images: [
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
    ],
    era: "Années 1960",
    material: "Métal doré, verre fumé",
    dimensions: "L 75 × P 45 × H 72 cm",
    condition: "Bon état",
    isFeatured: false,
    isOnSale: false,
  },
  {
    id: "chaise-bistrot-thonet",
    name: "Chaise bistrot Thonet",
    price: 195,
    originalPrice: 250,
    description: "Authentique chaise Thonet en bois courbé. Assise cannée restaurée dans les règles de l'art.",
    category: "Meubles",
    images: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&h=600&fit=crop",
    ],
    era: "Début XXe siècle",
    material: "Hêtre courbé, cannage",
    dimensions: "L 42 × P 48 × H 88 cm",
    condition: "Restaurée, cannage neuf",
    isFeatured: true,
    isOnSale: true,
  },
  {
    id: "miroir-dore-art-deco",
    name: "Miroir doré Art Déco",
    price: 450,
    description: "Miroir Art Déco en bois sculpté, doré à la feuille. Motifs géométriques années folles. Miroir au mercure d'origine.",
    category: "Décoration",
    images: [
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?w=800&h=600&fit=crop",
    ],
    era: "Années 1930",
    material: "Bois sculpté, dorure à la feuille",
    dimensions: "L 65 × H 90 cm",
    condition: "Bon état",
    isFeatured: true,
    isOnSale: false,
  },
  {
    id: "lampe-albatre-vintage",
    name: "Lampe albâtre vintage",
    price: 280,
    originalPrice: 350,
    description: "Lampe de table en albâtre véritable. Lumière douce et chaleureuse. Électrifiée aux normes.",
    category: "Luminaires",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=600&fit=crop",
    ],
    era: "Années 1940",
    material: "Albâtre, tissu plissé",
    dimensions: "⌀ 25 × H 45 cm",
    condition: "Très bon état",
    isFeatured: false,
    isOnSale: true,
  },
  {
    id: "pichet-verre-ambre",
    name: "Pichet vintage verre ambré",
    price: 65,
    description: "Pichet en verre soufflé couleur ambre, années 70. Aussi beau en déco qu'en service.",
    category: "Vaisselle",
    images: [
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563865436874-9aef32095fad?w=800&h=600&fit=crop",
    ],
    era: "Années 1970",
    material: "Verre soufflé ambré",
    dimensions: "⌀ 12 × H 22 cm",
    condition: "Excellent état",
    isFeatured: false,
    isOnSale: false,
  },
  {
    id: "casier-bouteilles-vintage",
    name: "Casier à bouteilles vintage",
    price: 145,
    originalPrice: 180,
    description: "Casier en métal galvanisé d'origine industrielle. 12 bouteilles. Bel objet déco pour cuisine ou salon.",
    category: "Décoration",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
    ],
    era: "Années 1950",
    material: "Métal galvanisé",
    dimensions: "L 35 × P 25 × H 40 cm",
    condition: "Bon état, belle patine",
    isFeatured: false,
    isOnSale: true,
  },
  {
    id: "fauteuil-cabriolet-louis-xv",
    name: "Fauteuil cabriolet Louis XV",
    price: 1250,
    description: "Fauteuil d'époque Louis XV en noyer sculpté. Velours vert sauge, pieds cambriolés. Pièce d'exception.",
    category: "Meubles",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop",
    ],
    era: "XVIIIe siècle",
    material: "Noyer sculpté, velours",
    dimensions: "L 65 × P 58 × H 92 cm",
    condition: "Restauré, tissu regarni",
    isFeatured: true,
    isOnSale: false,
  },
  {
    id: "vase-cristal-murano",
    name: "Vase cristal de Murano",
    price: 520,
    description: "Vase en cristal de Murano avec inclusions feuille d'or et nuances bleu profond. Pièce unique signée.",
    category: "Décoration",
    images: [
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1612198790700-0ff08cb12524?w=800&h=600&fit=crop",
    ],
    era: "Années 1960",
    material: "Cristal de Murano, feuille d'or",
    dimensions: "⌀ 18 × H 35 cm",
    condition: "Parfait état",
    isFeatured: true,
    isOnSale: false,
  },
  {
    id: "cendrier-fontana-arte",
    name: "Cendrier cristal bleu Fontana Arte",
    price: 180,
    originalPrice: 220,
    description: "Cristal bleu cobalt signé Fontana Arte, design italien années 50. Idéal en vide-poches ou déco.",
    category: "Décoration",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?w=800&h=600&fit=crop",
    ],
    era: "Années 1950",
    material: "Cristal bleu cobalt",
    dimensions: "⌀ 15 × H 5 cm",
    condition: "Excellent état",
    isFeatured: false,
    isOnSale: true,
  },
  {
    id: "bureau-armani",
    name: "Bureau Armani Casa",
    price: 2800,
    description: "Bureau signé Armani Casa en placage loupe de noyer et finitions laquées. Deux tiroirs fermeture douce, passe-câbles intégré.",
    category: "Meubles",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&h=600&fit=crop",
    ],
    era: "Contemporain",
    material: "Loupe de noyer, laque",
    dimensions: "L 160 × P 70 × H 76 cm",
    condition: "Excellent état",
    isFeatured: true,
    isOnSale: false,
  },
  {
    id: "tasses-faience-sarreguemines",
    name: "Tasses faïence Sarreguemines",
    price: 85,
    originalPrice: 110,
    description: "Service de 6 tasses et sous-tasses en faïence de Sarreguemines. Décor floral sur fond ivoire. Marquées au revers.",
    category: "Vaisselle",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    ],
    era: "Fin XIXe siècle",
    material: "Faïence fine",
    dimensions: "Tasse : ⌀ 8 × H 6 cm",
    condition: "Bon état",
    isFeatured: false,
    isOnSale: true,
  },
];

export const categories = [
  { name: "Meubles", slug: "meubles", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop" },
  { name: "Décoration", slug: "décoration", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=400&fit=crop" },
  { name: "Vaisselle", slug: "vaisselle", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop" },
  { name: "Art", slug: "art", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&h=400&fit=crop" },
  { name: "Luminaires", slug: "luminaires", image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=400&fit=crop" },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getOnSaleProducts(): Product[] {
  return products.filter((p) => p.isOnSale);
}

export function getSimilarProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}
