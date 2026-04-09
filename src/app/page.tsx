import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Truck, RotateCcw, Search, Armchair, Lamp, Palette, CookingPot, Frame } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { AISearchSection } from "@/components/ai-search-section";
import { ProductCarousel } from "@/components/product-carousel";
import {
  products,
  categories,
  getFeaturedProducts,
  getOnSaleProducts,
} from "@/data/products";

const categoryIcons = [
  { name: "Meubles", slug: "meubles", icon: Armchair },
  { name: "Décoration", slug: "decoration", icon: Frame },
  { name: "Vaisselle", slug: "vaisselle", icon: CookingPot },
  { name: "Art", slug: "art", icon: Palette },
  { name: "Luminaires", slug: "luminaires", icon: Lamp },
];

export default function Home() {
  const featured = getFeaturedProducts().slice(0, 4);
  const onSale = getOnSaleProducts().slice(0, 4);
  const latestProducts = [...products].reverse().slice(0, 8);
  const masonryProducts = [...products].slice(0, 6);

  return (
    <>
      {/* 1. Dark moody hero — Drouot-style with painting background */}
      <section className="relative py-24 sm:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?w=1600&h=900&fit=crop"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            Explorez nos trouvailles
          </h1>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Pièces vintage chinées avec passion dans toute la France
          </p>
          {/* Big white search bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-brown/40" />
            <input
              type="text"
              placeholder="Rechercher un meuble, une époque, un style..."
              className="w-full rounded-full bg-white pl-14 pr-40 py-4 sm:py-5 text-base sm:text-lg text-brown placeholder:text-brown/40 shadow-2xl focus:outline-none focus:ring-4 focus:ring-gold/30"
              readOnly
            />
            <Link
              href="/catalogue"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-purple px-6 py-2.5 sm:py-3 text-sm font-semibold text-white hover:bg-purple-light transition-colors"
            >
              Rechercher
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Round category icons — Drouot-style on sage green */}
      <section className="py-10 sm:py-14 bg-sage">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
            {categoryIcons.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.slug}
                  href={`/catalogue?cat=${cat.slug}`}
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-cream border-2 border-white/40 shadow-sm group-hover:border-purple group-hover:shadow-md transition-all">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-purple group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                    {cat.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Product carousel — Dernières trouvailles */}
      <section className="py-10 sm:py-14 bg-sage-light border-y border-sage-dark/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-gold mb-1">
                Nouveautés
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl text-brown">
                Dernières trouvailles
              </h2>
            </div>
            <Link
              href="/catalogue"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-purple hover:text-purple-light transition-colors"
            >
              Voir tout
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ProductCarousel products={latestProducts} />
        </div>
      </section>

      {/* 4. Masonry grid — Nos pièces d'exception on cream */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.15em] text-gold mb-2">
              Prestige
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-brown">
              Nos pièces d&apos;exception
            </h2>
            <p className="mt-3 text-brown/60 max-w-md mx-auto">
              Des pièces rares et remarquables pour les collectionneurs et amateurs éclairés.
            </p>
          </div>
          <div className="masonry-grid">
            {masonryProducts.map((product, i) => (
              <Link
                key={product.id}
                href={`/produit/${product.id}`}
                className="group block overflow-hidden rounded-xl bg-white border border-sage-dark/15 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "4/5" : "1/1" }}
                >
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-brown/50 uppercase tracking-wider mb-1">
                    {product.era}
                  </p>
                  <h3 className="font-heading text-lg text-brown leading-snug mb-2 group-hover:text-purple transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-lg font-semibold text-purple">
                    {product.price}&nbsp;&euro;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Les bons plans on sage */}
      <section className="py-16 sm:py-24 bg-sage">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-gold mb-2">
                Bonnes affaires
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl text-white">
                Les bons plans
              </h2>
            </div>
            <Link
              href="/catalogue"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-cream hover:text-white transition-colors"
            >
              Tous les bons plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {onSale.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. AI Search */}
      <AISearchSection />

      {/* Trust badges */}
      <section className="border-y border-sage-dark/20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <Truck className="h-5 w-5 text-purple" />
              <span className="text-sm text-brown/70">Livraison soignée en France</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <RotateCcw className="h-5 w-5 text-purple" />
              <span className="text-sm text-brown/70">Retours gratuits sous 14 jours</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield className="h-5 w-5 text-purple" />
              <span className="text-sm text-brown/70">Authenticité garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. About teaser — cozy */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop"
                alt="Intérieur vintage chaleureux"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-gold mb-2">
                Notre histoire
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl text-brown mb-6">
                La passion de la belle trouvaille
              </h2>
              <p className="text-brown/70 leading-relaxed mb-4">
                Depuis nos débuts, nous sillonnons les brocantes, vide-greniers et
                marchés aux puces de France pour dénicher des pièces uniques. Chaque
                objet que nous proposons a été sélectionné pour son histoire, sa
                qualité et son caractère.
              </p>
              <p className="text-brown/70 leading-relaxed mb-8">
                Nous croyons que les plus beaux intérieurs se construisent avec des
                pièces qui ont une âme. C&apos;est cette philosophie qui guide chacune
                de nos trouvailles.
              </p>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-purple font-medium hover:text-purple-light transition-colors"
              >
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
