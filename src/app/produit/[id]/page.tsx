"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, Shield, Truck, RotateCcw, Share2, Search } from "lucide-react";
import { getProductById, getSimilarProducts, products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { toast } from "sonner";

/* ---- Sub-components ---- */

function ProductImages({
  product,
  selectedImage,
  setSelectedImage,
}: {
  product: NonNullable<ReturnType<typeof getProductById>>;
  selectedImage: number;
  setSelectedImage: (i: number) => void;
}) {
  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="hidden sm:flex flex-col gap-3">
        {product.images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelectedImage(i)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
              selectedImage === i
                ? "border-purple"
                : "border-transparent hover:border-[#D4C9B8]"
            }`}
          >
            <Image
              src={img}
              alt={`${product.name} vue ${i + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
      {/* Main image */}
      <div className="flex-1 relative aspect-[3/4] rounded-2xl overflow-hidden bg-white">
        <Image
          src={product.images[selectedImage]}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        {product.isOnSale && product.originalPrice && (
          <Badge className="absolute top-4 left-4 bg-gold text-white border-0">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </Badge>
        )}
      </div>
    </div>
  );
}

function Guarantees() {
  return (
    <div className="space-y-3 rounded-xl bg-white p-5 border border-[#E8E0D0]">
      <div className="flex items-center gap-3">
        <Truck className="h-5 w-5 text-purple shrink-0" />
        <div>
          <p className="text-sm font-medium text-brown">Livraison soignée</p>
          <p className="text-xs text-brown/50">Emballage professionnel, suivi en temps réel</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <RotateCcw className="h-5 w-5 text-purple shrink-0" />
        <div>
          <p className="text-sm font-medium text-brown">Retours gratuits</p>
          <p className="text-xs text-brown/50">14 jours pour changer d&apos;avis</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Shield className="h-5 w-5 text-purple shrink-0" />
        <div>
          <p className="text-sm font-medium text-brown">Authenticité garantie</p>
          <p className="text-xs text-brown/50">Chaque pièce est expertisée avant mise en vente</p>
        </div>
      </div>
    </div>
  );
}

function RequestDialog({ productName }: { productName: string }) {
  const [requestText, setRequestText] = useState("");

  const handleSubmit = () => {
    toast.success("Demande envoyée ! Nous reviendrons vers vous rapidement.");
    setRequestText("");
  };

  return (
    <Dialog>
      <DialogTrigger
        className="w-full flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gold/60 bg-gold/5 px-5 py-3 text-sm font-medium text-brown hover:border-gold hover:bg-gold/10 transition-colors"
      >
        <Search className="h-4 w-4 text-gold" />
        Vous cherchez quelque chose de similaire ? Faire une demande
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Faire une demande</DialogTitle>
          <DialogDescription>
            Décrivez ce que vous recherchez. Nous vous contacterons si nous trouvons
            une pièce similaire à &laquo;&nbsp;{productName}&nbsp;&raquo;.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <textarea
            value={requestText}
            onChange={(e) => setRequestText(e.target.value)}
            placeholder="Ex : Je cherche une commode similaire mais en chêne, idéalement années 40..."
            rows={4}
            className="w-full rounded-lg border border-[#D4C9B8] bg-white px-4 py-3 text-sm text-brown placeholder:text-brown/40 focus:outline-none focus:ring-2 focus:ring-purple/30 resize-none"
          />
          <input
            type="email"
            placeholder="Votre adresse email"
            className="w-full rounded-lg border border-[#D4C9B8] bg-white px-4 py-2.5 text-sm text-brown placeholder:text-brown/40 focus:outline-none focus:ring-2 focus:ring-purple/30"
          />
        </div>
        <DialogFooter>
          <DialogClose
            className="rounded-lg border border-[#D4C9B8] px-4 py-2 text-sm font-medium text-brown hover:bg-cream transition-colors"
          >
            Annuler
          </DialogClose>
          <button
            onClick={handleSubmit}
            className="rounded-lg bg-purple px-4 py-2 text-sm font-semibold text-white hover:bg-purple-light transition-colors"
          >
            Envoyer ma demande
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

/* ---- Main page ---- */

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    notFound();
  }

  const similar = getSimilarProducts(product, 4);
  const recommendations =
    similar.length >= 3
      ? similar.slice(0, 4)
      : [
          ...similar,
          ...products
            .filter((p) => p.id !== product.id && !similar.includes(p))
            .slice(0, 4 - similar.length),
        ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-brown/50">
          <Link href="/" className="hover:text-purple transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link href="/catalogue" className="hover:text-purple transition-colors">
            Catalogue
          </Link>
          <span>/</span>
          <Link
            href={`/catalogue?cat=${product.category.toLowerCase()}`}
            className="hover:text-purple transition-colors"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-brown/80">{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <ProductImages
            product={product}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <p className="text-xs uppercase tracking-[0.15em] text-purple mb-1">
                {product.category} &middot; {product.era}
              </p>
              <h1 className="font-heading text-3xl sm:text-4xl text-brown mb-4">
                {product.name}
              </h1>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-purple">
                {product.price}&nbsp;&euro;
              </span>
              {product.originalPrice && (
                <span className="text-lg text-brown/40 line-through">
                  {product.originalPrice}&nbsp;&euro;
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 mb-4">
              <button className="flex-1 min-w-[140px] rounded-lg bg-purple px-5 py-3.5 font-semibold text-white hover:bg-purple-light transition-colors">
                Ajouter au panier
              </button>
              <button className="rounded-lg border-2 border-purple px-5 py-3.5 font-semibold text-purple hover:bg-purple hover:text-white transition-colors">
                Faire une offre
              </button>
              <button
                className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-lg border border-[#D4C9B8] hover:border-purple hover:text-purple transition-colors"
                aria-label="Ajouter aux favoris"
              >
                <Heart className="h-5 w-5" />
              </button>
              <button
                className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-lg border border-[#D4C9B8] hover:border-purple hover:text-purple transition-colors"
                aria-label="Partager"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* Faire une demande */}
            <div className="mb-8">
              <RequestDialog productName={product.name} />
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="font-heading text-xl text-brown mb-3">Description</h2>
              <p className="text-brown/70 leading-relaxed">{product.description}</p>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-lg bg-white p-4">
                <p className="text-xs text-brown/40 uppercase tracking-wider mb-1">Époque</p>
                <p className="text-sm font-medium text-brown">{product.era}</p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <p className="text-xs text-brown/40 uppercase tracking-wider mb-1">Matériaux</p>
                <p className="text-sm font-medium text-brown">{product.material}</p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <p className="text-xs text-brown/40 uppercase tracking-wider mb-1">Dimensions</p>
                <p className="text-sm font-medium text-brown">{product.dimensions}</p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <p className="text-xs text-brown/40 uppercase tracking-wider mb-1">État</p>
                <p className="text-sm font-medium text-brown">{product.condition}</p>
              </div>
            </div>

            {/* Guarantees */}
            <Guarantees />
          </div>
        </div>

        {/* Similar products */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl text-brown">
              Vous aimerez aussi
            </h2>
            <Link
              href="/catalogue"
              className="text-sm font-medium text-purple hover:text-purple-light transition-colors"
            >
              Voir tout &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendations.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
