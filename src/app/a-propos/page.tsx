import Image from "next/image";
import { Heart, Leaf, History, Eye } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Authenticité",
    description:
      "Chaque pièce est sélectionnée pour son caractère unique. Nous garantissons l'origine et l'époque de tous nos objets.",
  },
  {
    icon: Leaf,
    title: "Durabilité",
    description:
      "Donner une seconde vie aux objets, c'est le geste le plus écologique. La brocante est le luxe durable par excellence.",
  },
  {
    icon: History,
    title: "Histoire",
    description:
      "Derrière chaque pièce se cache une histoire. Nous aimons connaître et transmettre le récit de chaque trouvaille.",
  },
  {
    icon: Eye,
    title: "Curation",
    description:
      "Notre œil expert sélectionne des pièces de qualité, en privilégiant les matériaux nobles et le savoir-faire artisanal.",
  },
];

export default function AProposPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&h=900&fit=crop"
          alt="Marché aux puces"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brown/60" />
        <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gold mb-3">
              Depuis 2024
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white">
              Notre histoire
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-purple mb-2">
                La genèse
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl text-brown mb-6">
                La passion de la belle trouvaille
              </h2>
              <div className="space-y-4 text-brown/70 leading-relaxed">
                <p>
                  Tout a commencé par un coup de cœur pour une commode chinée dans
                  un grenier du sud de la France. Cette découverte a allumé une
                  passion que nous cultivons depuis avec la même ferveur.
                </p>
                <p>
                  Chaque semaine, nous sillonnons les brocantes, vide-greniers et
                  marchés aux puces pour dénicher des pièces qui ont une âme. Du
                  meuble de famille en noyer massif au petit objet en faïence fine,
                  nous sélectionnons avec soin des objets qui témoignent d&apos;un
                  savoir-faire et d&apos;une époque.
                </p>
                <p>
                  Notre ambition est simple : rendre accessible le charme de
                  l&apos;ancien, et permettre à chacun de créer un intérieur qui
                  raconte une histoire. Pas de production de masse, pas de
                  standardisation. Juste de belles pièces, uniques, avec du vécu.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=1000&fit=crop"
                alt="Collection vintage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.15em] text-purple mb-2">
              Nos engagements
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-brown">
              Ce qui nous guide
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white p-8 text-center border border-[#E8E0D0] hover:shadow-lg transition-shadow"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple/10">
                  <v.icon className="h-6 w-6 text-purple" />
                </div>
                <h3 className="font-heading text-xl text-brown mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-brown/60 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=800&fit=crop"
                alt="Mobilier vintage"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=800&fit=crop"
                alt="Décoration intérieure"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=800&fit=crop"
                alt="Luminaires anciens"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-purple text-white text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-heading text-3xl sm:text-4xl mb-4">
            Prêt à découvrir nos trouvailles ?
          </h2>
          <p className="text-white/70 mb-8">
            Parcourez notre catalogue et laissez-vous séduire par des pièces
            chargées d&apos;histoire.
          </p>
          <a
            href="/catalogue"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3.5 font-semibold text-brown hover:bg-gold-light transition-colors"
          >
            Voir le catalogue
          </a>
        </div>
      </section>
    </div>
  );
}
