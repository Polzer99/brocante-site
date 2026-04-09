"use client";

import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { useTextareaResize } from "@/hooks/use-textarea-resize";

interface ChatInputProps {
  onSubmit?: (message: string) => void;
  placeholder?: string;
  className?: string;
}

export function ChatInput({
  onSubmit,
  placeholder = "Décrivez ce que vous cherchez... Ex : une commode Art Déco en noyer",
  className = "",
}: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useTextareaResize(value, 1);

  const handleSubmit = () => {
    if (value.trim() && onSubmit) {
      onSubmit(value.trim());
      setValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div
      className={`relative flex items-end gap-2 rounded-2xl border border-[#D4C9B8] bg-white p-3 shadow-lg focus-within:ring-2 focus-within:ring-purple/30 focus-within:border-purple ${className}`}
    >
      <Sparkles className="mb-1 h-5 w-5 shrink-0 text-gold" />
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        rows={1}
        className="flex-1 resize-none border-0 bg-transparent text-brown placeholder:text-brown/40 focus:outline-none text-base leading-6"
      />
      <button
        onClick={handleSubmit}
        disabled={!value.trim()}
        className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple text-white transition-all hover:bg-purple-light disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Envoyer"
      >
        <Send className="h-4 w-4" />
      </button>
    </div>
  );
}
