"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/produit/${product.id}`} className="group block">
      <div className="product-card rounded-xl bg-cream overflow-hidden border border-sage-dark/15 shadow-sm">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover image-zoom"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Wishlist */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-all hover:bg-white hover:scale-110"
            aria-label="Ajouter aux favoris"
          >
            <Heart className="h-4 w-4 text-brown" />
          </button>
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isOnSale && product.originalPrice && (
              <Badge className="bg-gold text-white border-0 text-xs font-medium">
                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </Badge>
            )}
            {product.isFeatured && (
              <Badge className="bg-purple text-white border-0 text-xs font-medium">
                Coup de cœur
              </Badge>
            )}
          </div>
        </div>
        {/* Info */}
        <div className="p-4">
          <p className="text-xs text-brown/50 uppercase tracking-wider mb-1">
            {product.era}
          </p>
          <h3 className="font-heading text-lg text-brown leading-snug mb-2 group-hover:text-purple transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-purple">
              {product.price}&nbsp;&euro;
            </span>
            {product.originalPrice && (
              <span className="text-sm text-brown/40 line-through">
                {product.originalPrice}&nbsp;&euro;
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
