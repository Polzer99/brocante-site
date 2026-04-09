"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/product-card";

const eras = [
  "XVIIIe siècle",
  "Fin XIXe siècle",
  "Début XXe siècle",
  "Années 1930",
  "Années 1940",
  "Années 1950",
  "Années 1960",
  "Années 1970",
  "Contemporain",
];

const materials = [
  "Bois",
  "Métal",
  "Verre",
  "Cristal",
  "Faïence",
  "Albâtre",
  "Velours",
  "Laiton",
];

const sortOptions = [
  { label: "Nouveautés", value: "newest" },
  { label: "Prix croissant", value: "price-asc" },
  { label: "Prix décroissant", value: "price-desc" },
  { label: "Nom A-Z", value: "name" },
];

/* ---- Filter sidebar (extracted) ---- */

function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedEra,
  setSelectedEra,
  priceRange,
  setPriceRange,
}: {
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
  selectedEra: string;
  setSelectedEra: (v: string) => void;
  priceRange: [number, number];
  setPriceRange: (v: [number, number]) => void;
}) {
  return (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-heading text-lg text-brown mb-3">Catégorie</h3>
        <div className="space-y-2">
          <FilterButton
            active={!selectedCategory}
            onClick={() => setSelectedCategory("")}
            label="Toutes les catégories"
          />
          {categories.map((cat) => (
            <FilterButton
              key={cat.slug}
              active={selectedCategory === cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              label={cat.name}
            />
          ))}
        </div>
      </div>

      {/* Era */}
      <div>
        <h3 className="font-heading text-lg text-brown mb-3">Époque</h3>
        <div className="space-y-2">
          <FilterButton
            active={!selectedEra}
            onClick={() => setSelectedEra("")}
            label="Toutes les époques"
          />
          {eras.map((era) => (
            <FilterButton
              key={era}
              active={selectedEra === era}
              onClick={() => setSelectedEra(era)}
              label={era}
            />
          ))}
        </div>
      </div>

      {/* Price range */}
      <div>
        <h3 className="font-heading text-lg text-brown mb-3">Prix</h3>
        <div className="space-y-3">
          <input
            type="range"
            min={0}
            max={5000}
            step={50}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full accent-purple"
          />
          <div className="flex justify-between text-sm text-brown/60">
            <span>0 &euro;</span>
            <span>{priceRange[1]} &euro;</span>
          </div>
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-heading text-lg text-brown mb-3">Matériau</h3>
        <div className="flex flex-wrap gap-2">
          {materials.map((mat) => (
            <span
              key={mat}
              className="rounded-full border border-[#D4C9B8] bg-white px-3 py-1 text-xs text-brown/60 hover:border-purple hover:text-purple cursor-pointer transition-colors"
            >
              {mat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
        active ? "bg-purple text-white" : "text-brown/70 hover:bg-cream"
      }`}
    >
      {label}
    </button>
  );
}

/* ---- Main catalogue content ---- */

function CatalogueContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [selectedEra, setSelectedEra] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    if (selectedEra) {
      result = result.filter((p) => p.era === selectedEra);
    }
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [selectedCategory, selectedEra, priceRange, sortBy]);

  const activeFilters =
    (selectedCategory ? 1 : 0) +
    (selectedEra ? 1 : 0) +
    (priceRange[1] < 5000 ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedEra("");
    setPriceRange([0, 5000]);
  };

  const filterProps = {
    selectedCategory,
    setSelectedCategory,
    selectedEra,
    setSelectedEra,
    priceRange,
    setPriceRange,
  };

  return (
    <>
      {/* Header */}
      <div className="bg-cream border-b border-sage-dark/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-sm uppercase tracking-[0.15em] text-purple mb-2">
            Notre collection
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl text-brown">
            Catalogue
          </h1>
          <p className="mt-2 text-brown/60">
            {filtered.length} pièce{filtered.length !== 1 ? "s" : ""} disponible{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <CatalogueToolbar
          activeFilters={activeFilters}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          clearFilters={clearFilters}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <FilterSidebar {...filterProps} />
          </aside>

          {/* Mobile filters overlay */}
          {showFilters && (
            <MobileFilters onClose={() => setShowFilters(false)}>
              <FilterSidebar {...filterProps} />
            </MobileFilters>
          )}

          {/* Product grid */}
          <ProductGrid products={filtered} onClearFilters={clearFilters} />
        </div>
      </div>
    </>
  );
}

/* ---- Sub-components ---- */

function CatalogueToolbar({
  activeFilters,
  showFilters,
  setShowFilters,
  clearFilters,
  sortBy,
  setSortBy,
}: {
  activeFilters: number;
  showFilters: boolean;
  setShowFilters: (v: boolean) => void;
  clearFilters: () => void;
  sortBy: string;
  setSortBy: (v: string) => void;
}) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden inline-flex items-center gap-2 rounded-lg border border-[#D4C9B8] bg-white px-4 py-2 text-sm text-brown hover:border-purple transition-colors"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filtres
          {activeFilters > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple text-[10px] text-white">
              {activeFilters}
            </span>
          )}
        </button>
        {activeFilters > 0 && (
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-1 text-sm text-brown/50 hover:text-purple transition-colors"
          >
            <X className="h-3 w-3" />
            Effacer les filtres
          </button>
        )}
      </div>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="rounded-lg border border-[#D4C9B8] bg-white px-4 py-2 text-sm text-brown focus:outline-none focus:ring-2 focus:ring-purple/30"
      >
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function MobileFilters({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-xl text-brown">Filtres</h2>
          <button onClick={onClose} aria-label="Fermer les filtres">
            <X className="h-5 w-5 text-brown" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function ProductGrid({
  products: items,
  onClearFilters,
}: {
  products: typeof products;
  onClearFilters: () => void;
}) {
  if (items.length === 0) {
    return (
      <div className="flex-1 text-center py-20">
        <p className="font-heading text-xl text-brown/50">
          Aucune pièce ne correspond à vos critères.
        </p>
        <button
          onClick={onClearFilters}
          className="mt-4 text-sm text-purple hover:text-purple-light transition-colors"
        >
          Effacer les filtres
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="masonry-grid">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

/* ---- Page export with Suspense ---- */

export default function CataloguePage() {
  return (
    <div className="bg-cream min-h-screen">
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-32">
            <p className="text-brown/50 font-heading text-lg">Chargement du catalogue...</p>
          </div>
        }
      >
        <CatalogueContent />
      </Suspense>
    </div>
  );
}
