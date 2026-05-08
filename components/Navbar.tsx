"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "./ui/Button";

const WA = "https://wa.me/5581992627692";

const NAV_LINKS = [
  { label: "Solução",       href: "#solução" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Resultados",    href: "#resultados" },
  { label: "FAQ",           href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`
          w-full max-w-7xl flex items-center justify-between
          rounded-2xl px-5 py-3
          transition-all duration-500
          ${scrolled ? "glass shadow-lg shadow-black/40" : ""}
        `}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-xl bg-[#FF6A00] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L14.5 5V11L8 15L1.5 11V5L8 1Z" fill="black" strokeWidth="0"/>
            </svg>
          </span>
          <span className="font-display font-bold text-[1.05rem] text-white tracking-tight">
            Impulsione
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-[#777] hover:text-white transition-colors duration-200 font-body"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Button
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
        >
          Falar no WhatsApp
        </Button>
      </div>
    </motion.header>
  );
}
