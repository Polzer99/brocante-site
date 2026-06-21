"use client";

import { useState } from "react";
import { ChatInput } from "@/components/ui/chat-input";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";
import { Search } from "lucide-react";

const featuredRecommendations = [
  {
    product: products[3], // Miroir Art Déco
    reason: "Parce que vous aimez le style Art Déco des années 30",
  },
  {
    product: products[8], // Vase Murano
    reason: "Pièce rare en cristal de Murano, parfaite pour votre collection",
  },
  {
    product: products[4], // Lampe albâtre
    reason: "Éclairage d\u2019ambiance vintage, idéal pour créer une atmosphère chaleureuse",
  },
];

export function AISearchSection() {
  const [hasSearched, setHasSearched] = useState(false);
  const [query, setQuery] = useState("");

  const handleSubmit = (message: string) => {
    setQuery(message);
    setHasSearched(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple/10 px-4 py-1.5 text-sm text-purple mb-4">
            <Search className="h-4 w-4" />
            <span>Suggestions de la maison</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl text-brown mb-3">
            Décrivez ce que vous cherchez
          </h2>
          <p className="text-brown/60">
            Partagez vos envies : nous vous affichons une sélection maison pour nourrir votre recherche.
          </p>
        </div>

        <div className="mx-auto max-w-2xl mb-8">
          <ChatInput onSubmit={handleSubmit} />
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {[
              "Une lampe Art Déco pour mon salon",
              "Vaisselle ancienne pour 6 personnes",
              "Meuble années 50 en bon état",
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleSubmit(suggestion)}
                className="rounded-full border border-sage-dark/30 bg-white px-3 py-1.5 text-xs text-brown/60 hover:border-purple hover:text-purple transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {hasSearched && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mx-auto max-w-2xl text-center mb-8">
              <p className="text-sm text-brown/50">
                Résultats pour &laquo;&nbsp;{query}&nbsp;&raquo;
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRecommendations.map(({ product, reason }) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                  <p className="mt-2 px-1 text-sm text-purple/80 italic">
                    &laquo;&nbsp;{reason}&nbsp;&raquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
