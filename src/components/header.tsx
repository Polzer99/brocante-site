"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, User, ShoppingBag, Heart, Menu, X } from "lucide-react";

const navLinks = [
  { name: "La Boutique", href: "/catalogue" },
  { name: "Catégories", href: "/catalogue" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <span
        className="font-heading text-2xl font-bold tracking-tight"
        style={{ color: "#312783" }}
      >
        BROCANTE
      </span>
      <span
        className="text-xs font-bold px-1.5 py-0.5 rounded"
        style={{ background: "#C4A35A", color: "#312783" }}
      >
        .fr
      </span>
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="gold-underline text-sm font-medium text-brown/80 hover:text-brown transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

function IconBar() {
  return (
    <div className="flex items-center gap-1 sm:gap-3">
      <Link
        href="/catalogue"
        className="p-2 text-brown/70 hover:text-purple transition-colors"
        aria-label="Rechercher"
      >
        <Search className="h-5 w-5" />
      </Link>
      <button className="p-2 text-brown/70 hover:text-purple transition-colors" aria-label="Favoris">
        <Heart className="h-5 w-5" />
      </button>
      <button className="relative p-2 text-brown/70 hover:text-purple transition-colors" aria-label="Panier">
        <ShoppingBag className="h-5 w-5" />
        <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-white">
          0
        </span>
      </button>
      <button className="p-2 text-brown/70 hover:text-purple transition-colors" aria-label="Compte">
        <User className="h-5 w-5" />
      </button>
    </div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="lg:hidden border-t border-sage-dark/20 bg-cream">
      <nav className="flex flex-col px-6 py-4 gap-3">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-base font-medium text-brown/80 hover:text-purple py-2 transition-colors"
            onClick={onClose}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sage-dark/10 transition-shadow duration-300 ${
        scrolled ? "header-scrolled" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-brown" />
            ) : (
              <Menu className="h-5 w-5 text-brown" />
            )}
          </button>

          <Logo />
          <DesktopNav />
          <IconBar />
        </div>
      </div>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  );
}
