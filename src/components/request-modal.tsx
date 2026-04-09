"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";

function RequestForm({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Demande envoyée ! Nous vous recontactons très vite.");
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="req-name" className="block text-sm font-medium text-brown mb-1">
          Nom
        </label>
        <input
          id="req-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Votre nom"
          className="w-full rounded-lg border border-sage-dark/30 bg-white px-4 py-2.5 text-sm text-brown placeholder:text-brown/40 focus:outline-none focus:ring-2 focus:ring-purple/30"
        />
      </div>
      <div>
        <label htmlFor="req-email" className="block text-sm font-medium text-brown mb-1">
          Email
        </label>
        <input
          id="req-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          className="w-full rounded-lg border border-sage-dark/30 bg-white px-4 py-2.5 text-sm text-brown placeholder:text-brown/40 focus:outline-none focus:ring-2 focus:ring-purple/30"
        />
      </div>
      <div>
        <label htmlFor="req-message" className="block text-sm font-medium text-brown mb-1">
          Décrivez ce que vous recherchez
        </label>
        <textarea
          id="req-message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Style, époque, dimensions, budget..."
          className="w-full rounded-lg border border-sage-dark/30 bg-white px-4 py-2.5 text-sm text-brown placeholder:text-brown/40 focus:outline-none focus:ring-2 focus:ring-purple/30 resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-purple px-5 py-3 font-semibold text-white hover:bg-purple-light transition-colors"
      >
        Envoyer ma demande
      </button>
    </form>
  );
}

export function RequestModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gold/60 bg-gold/5 px-5 py-3 text-sm font-medium text-brown hover:border-gold hover:bg-gold/10 transition-colors cursor-pointer">
        <Search className="h-4 w-4 text-gold" />
        Vous cherchez quelque chose de similaire ? Faire une demande
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Faire une demande</DialogTitle>
          <DialogDescription>
            Décrivez la pièce que vous recherchez et nous ferons notre possible pour la trouver.
          </DialogDescription>
        </DialogHeader>
        <RequestForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
