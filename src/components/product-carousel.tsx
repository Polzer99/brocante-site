"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCarousel({ products }: { products: Product[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
        aria-label="Précédent"
      >
        <ChevronLeft className="h-5 w-5 text-brown" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
        aria-label="Suivant"
      >
        <ChevronRight className="h-5 w-5 text-brown" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <CarouselCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function CarouselCard({ product }: { product: Product }) {
  return (
    <div className="snap-start shrink-0 w-[280px] bg-cream rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-sage-dark/15">
      <Link href={`/produit/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="280px"
          />
          {product.isOnSale && product.originalPrice && (
            <span className="absolute top-3 left-3 bg-gold text-white text-xs font-bold px-2 py-1 rounded">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/produit/${product.id}`}>
          <h3 className="font-heading text-sm text-brown line-clamp-2 mb-2 hover:text-purple transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-purple">{product.price}&nbsp;&euro;</span>
            {product.originalPrice && (
              <span className="text-sm text-brown/40 line-through">{product.originalPrice}&nbsp;&euro;</span>
            )}
          </div>
          <button
            className="flex items-center gap-1.5 bg-purple text-white text-xs font-medium px-3 py-2 rounded-lg hover:bg-purple-light transition-colors"
            aria-label="Ajouter au panier"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
}
