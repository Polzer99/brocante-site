"use client";

import Link from "next/link";
import { Camera, Globe, Mail } from "lucide-react";
import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <div className="border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl text-white mb-1">
              Restez inspiré
            </h3>
            <p className="text-white/70 text-sm">
              Recevez nos dernières trouvailles et bons plans chaque semaine.
            </p>
          </div>
          <div className="flex w-full max-w-md gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
            <button className="rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-white hover:bg-gold-light transition-colors">
              S&apos;inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h4 className="font-heading text-lg text-white mb-4">Brocante</h4>
        <ul className="space-y-2 text-sm text-white/60">
          <li>
            <Link href="/a-propos" className="hover:text-white transition-colors">
              Notre histoire
            </Link>
          </li>
          <li>
            <Link href="/avis" className="hover:text-white transition-colors">
              Avis clients
            </Link>
          </li>
          <li>
            <Link href="/catalogue" className="hover:text-white transition-colors">
              Catalogue
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-heading text-lg text-white mb-4">Catégories</h4>
        <ul className="space-y-2 text-sm text-white/60">
          <li>
            <Link href="/catalogue?cat=meubles" className="hover:text-white transition-colors">
              Meubles
            </Link>
          </li>
          <li>
            <Link href="/catalogue?cat=decoration" className="hover:text-white transition-colors">
              Décoration
            </Link>
          </li>
          <li>
            <Link href="/catalogue?cat=vaisselle" className="hover:text-white transition-colors">
              Vaisselle
            </Link>
          </li>
          <li>
            <Link href="/catalogue?cat=luminaires" className="hover:text-white transition-colors">
              Luminaires
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-heading text-lg text-white mb-4">Aide</h4>
        <ul className="space-y-2 text-sm text-white/60">
          <li>
            <span className="hover:text-white transition-colors cursor-pointer">
              Livraison
            </span>
          </li>
          <li>
            <span className="hover:text-white transition-colors cursor-pointer">
              Retours
            </span>
          </li>
          <li>
            <span className="hover:text-white transition-colors cursor-pointer">
              FAQ
            </span>
          </li>
          <li>
            <span className="hover:text-white transition-colors cursor-pointer">
              Contact
            </span>
          </li>
        </ul>
      </div>
      <SocialBlock />
    </div>
  );
}

function SocialBlock() {
  return (
    <div>
      <h4 className="font-heading text-lg text-white mb-4">Suivez-nous</h4>
      <div className="flex gap-3 mb-4">
        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:bg-gold hover:border-gold hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <Camera className="h-4 w-4" />
        </a>
        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:bg-gold hover:border-gold hover:text-white transition-colors"
          aria-label="Facebook"
        >
          <Globe className="h-4 w-4" />
        </a>
        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:bg-gold hover:border-gold hover:text-white transition-colors"
          aria-label="Email"
        >
          <Mail className="h-4 w-4" />
        </a>
      </div>
      <p className="text-xs text-white/30">
        Chiné avec passion depuis 2024
      </p>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
        <p>&copy; 2026 BROCANTE. Tous droits réservés.</p>
        <div className="flex gap-4">
          <span className="hover:text-white/50 cursor-pointer">
            Mentions légales
          </span>
          <span className="hover:text-white/50 cursor-pointer">CGV</span>
          <span className="hover:text-white/50 cursor-pointer">
            Confidentialité
          </span>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-sage text-white/90">
      <Newsletter />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <FooterLinks />
      </div>

      <BottomBar />
    </footer>
  );
}
