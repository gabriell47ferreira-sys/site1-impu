"use client";

import { motion } from "framer-motion";

const WA_LINK = "https://wa.me/5581992627692";
const IG_LINK = "https://www.instagram.com/impulsione_online/";

export default function Footer() {
  return (
    <footer className="relative py-14 px-6 border-t border-[#141414] bg-[#0B0B0B]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6A00] to-[#FF8C42] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L14 5V11L8 15L2 11V5L8 1Z" fill="black" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-tight">
                Impulsione
              </span>
            </div>
            <p className="text-xs text-[#444] font-body max-w-[200px] text-center md:text-left">
              Impulsione — sua empresa no topo.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs text-[#555] font-display tracking-widest uppercase">Contato</p>
            <div className="flex items-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp com a Impulsione"
                className="flex items-center gap-2 text-sm text-[#777] hover:text-white transition-colors duration-200 font-body"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#FF6A00]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
              <span className="text-[#222]">|</span>
              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Impulsione"
                className="flex items-center gap-2 text-sm text-[#777] hover:text-white transition-colors duration-200 font-body"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#FF6A00]">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#111] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#333] font-body">
            © {new Date().getFullYear()} Impulsione. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#2a2a2a] font-body">
            Posicionamento Google Maps · SEO Local
          </p>
        </div>
      </div>
    </footer>
  );
}
