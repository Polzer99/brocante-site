import { Star, Camera, Globe, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Marie-Claire D.",
    location: "Paris",
    rating: 5,
    text: "J'ai trouvé la commode de mes rêves pour ma chambre. La patine est sublime et la livraison a été impeccable. Je recommande sans hésiter !",
    product: "Commode vintage 1950",
    date: "Mars 2026",
  },
  {
    name: "Antoine L.",
    location: "Lyon",
    rating: 5,
    text: "Un vrai coup de cœur pour le miroir Art Déco. La qualité est exceptionnelle et il trône fièrement dans notre entrée. Merci pour cette trouvaille !",
    product: "Miroir doré Art Déco",
    date: "Février 2026",
  },
  {
    name: "Sophie R.",
    location: "Bordeaux",
    rating: 4,
    text: "Le service de six tasses Sarreguemines est magnifique. Quelques micro-éclats comme mentionné mais cela ajoute au charme. Emballage très soigné.",
    product: "Tasses faïence Sarreguemines",
    date: "Février 2026",
  },
  {
    name: "Philippe M.",
    location: "Marseille",
    rating: 5,
    text: "Le fauteuil Louis XV est une merveille. La restauration est parfaite, le velours vert sauge est exactement comme sur les photos. Un achat prestige qui vaut chaque euro.",
    product: "Fauteuil cabriolet Louis XV",
    date: "Janvier 2026",
  },
  {
    name: "Isabelle T.",
    location: "Nantes",
    rating: 5,
    text: "J'ai utilisé la recherche IA pour trouver une lampe vintage et on m'a proposé exactement ce que je cherchais. Une expérience d'achat vraiment unique.",
    product: "Lampe albâtre vintage",
    date: "Janvier 2026",
  },
  {
    name: "Jean-Marc B.",
    location: "Toulouse",
    rating: 4,
    text: "Le casier à bouteilles est parfait dans notre cuisine. Patine industrielle authentique. Seul bémol : un délai de livraison un peu long, mais le résultat vaut l'attente.",
    product: "Casier à bouteilles vintage",
    date: "Décembre 2025",
  },
  {
    name: "Catherine V.",
    location: "Strasbourg",
    rating: 5,
    text: "Le vase de Murano est une pièce d'art à part entière. Les reflets de la feuille d'or sont hypnotisants. Emballage digne d'un objet précieux. Bravo.",
    product: "Vase cristal Murano",
    date: "Décembre 2025",
  },
  {
    name: "Laurent F.",
    location: "Lille",
    rating: 5,
    text: "Deuxième achat sur le site et toujours aussi satisfait. La table roulante vintage est en parfait état. Le concept de brocante en ligne est brillant.",
    product: "Table roulante vintage",
    date: "Novembre 2025",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-gold text-gold" : "text-[#D4C9B8]"
          }`}
        />
      ))}
    </div>
  );
}

export default function AvisPage() {
  const avgRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-[#E8E0D0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-sm uppercase tracking-[0.15em] text-purple mb-2">
            Ce que disent nos clients
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl text-brown mb-4">
            Avis clients
          </h1>
          <div className="flex items-center justify-center gap-3">
            <Stars rating={5} />
            <span className="text-2xl font-bold text-brown">{avgRating}</span>
            <span className="text-brown/50 text-sm">
              / 5 ({reviews.length} avis)
            </span>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 border border-[#E8E0D0] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Stars rating={review.rating} />
                    <p className="mt-2 text-sm font-medium text-brown">
                      {review.name}
                    </p>
                    <p className="text-xs text-brown/40">
                      {review.location} &middot; {review.date}
                    </p>
                  </div>
                  <Quote className="h-6 w-6 text-purple/20 shrink-0" />
                </div>
                <p className="text-sm text-brown/70 leading-relaxed mb-4">
                  {review.text}
                </p>
                <div className="rounded-lg bg-cream px-3 py-2">
                  <p className="text-xs text-purple font-medium">
                    À propos de : {review.product}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social links */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-heading text-2xl text-brown mb-3">
            Retrouvez-nous sur les réseaux
          </h2>
          <p className="text-brown/60 text-sm mb-8">
            Suivez nos dernières trouvailles, nos coulisses de chine et les
            intérieurs de nos clients.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-[#D4C9B8] bg-white px-6 py-3 text-sm font-medium text-brown hover:border-purple hover:text-purple transition-colors"
            >
              <Camera className="h-5 w-5" />
              Instagram
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-[#D4C9B8] bg-white px-6 py-3 text-sm font-medium text-brown hover:border-purple hover:text-purple transition-colors"
            >
              <Globe className="h-5 w-5" />
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple text-white text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-heading text-3xl mb-4">
            Convaincu ? Découvrez nos pièces
          </h2>
          <p className="text-white/70 mb-8">
            Rejoignez notre communauté de chineurs et trouvez la perle rare.
          </p>
          <a
            href="/catalogue"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3.5 font-semibold text-brown hover:bg-gold-light transition-colors"
          >
            Parcourir le catalogue
          </a>
        </div>
      </section>
    </div>
  );
}
