"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FF8C42">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function MapCard({
  position,
  name,
  stars,
  reviews,
  distance,
  highlighted,
  label,
}: {
  position: number;
  name: string;
  stars: number;
  reviews: number;
  distance: string;
  highlighted?: boolean;
  label?: string;
}) {
  return (
    <div
      className={`relative flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-300 ${
        highlighted
          ? "border-[#FF6A00]/50 bg-[#FF6A00]/8"
          : "border-[#1e1e1e] bg-[#141414]"
      }`}
    >
      {label && (
        <span className="absolute -top-2.5 left-3 px-2 py-0.5 rounded-full bg-[#FF6A00] text-[9px] font-display font-bold text-black tracking-wide">
          {label}
        </span>
      )}

      {/* Position badge */}
      <div
        className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-display font-bold ${
          highlighted ? "bg-[#FF6A00] text-black" : "bg-[#1e1e1e] text-[#555]"
        }`}
      >
        {position}
      </div>

      {/* Map pin icon */}
      <div className="flex-shrink-0">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={highlighted ? "#FF6A00" : "#444"}
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <p
          className={`text-sm font-display font-semibold truncate ${
            highlighted ? "text-white" : "text-[#888]"
          }`}
        >
          {name}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <StarRating count={stars} />
          <span className="text-[11px] text-[#555]">({reviews})</span>
          <span className="text-[11px] text-[#555]">· {distance}</span>
        </div>
      </div>
    </div>
  );
}

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resultados" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/20 to-transparent" />
      <div className="absolute left-1/4 top-1/2 w-[500px] h-[500px] rounded-full bg-[#FF6A00]/4 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-4"
        >
          <span className="text-xs font-display tracking-widest uppercase text-[#FF6A00]">
            Resultados
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display font-extrabold text-3xl md:text-5xl text-center mb-5 tracking-tight"
        >
          Do invisível ao{" "}
          <span className="gradient-text">topo do mapa</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-[#666] max-w-lg mx-auto mb-20 font-body"
        >
          Veja como o ranking muda — na prática — para os nossos clientes.
        </motion.p>

        {/* Before / After */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-6 rounded-2xl bg-[#0f0f0f] border border-[#1a1a1a]"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-xs font-display tracking-widest uppercase text-[#555]">
                Antes
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              <MapCard position={1} name="Concorrente Premium" stars={5} reviews={342} distance="0.3 km" />
              <MapCard position={2} name="Rival Top Local" stars={5} reviews={189} distance="0.5 km" />
              <MapCard position={3} name="Outro Negócio" stars={4} reviews={67} distance="0.8 km" />
              <div className="mt-2 p-3.5 rounded-xl border border-dashed border-[#222] bg-[#0d0d0d] text-center">
                <span className="text-xs text-[#444] font-body">
                  Seu negócio não aparece no mapa
                </span>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="p-6 rounded-2xl bg-[#0f0f0f] border border-[#FF6A00]/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/4 to-transparent pointer-events-none" />
            <div className="flex items-center gap-2 mb-4 relative">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              <span className="text-xs font-display tracking-widest uppercase text-[#FF8C42]">
                Depois da Impulsione
              </span>
            </div>

            <div className="flex flex-col gap-2.5 relative">
              <MapCard
                position={1}
                name="Seu Negócio"
                stars={5}
                reviews={124}
                distance="0.3 km"
                highlighted
                label="🏆 Topo do mapa"
              />
              <MapCard position={2} name="Concorrente Premium" stars={5} reviews={342} distance="0.3 km" />
              <MapCard position={3} name="Rival Top Local" stars={4} reviews={189} distance="0.5 km" />
            </div>
          </motion.div>
        </div>

        {/* Timeline pills */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {[
            { time: "Em 7 dias", result: "Perfil otimizado + mais visibilidade" },
            { time: "Em 30 dias", result: "Topo do mapa + mais chamadas" },
            { time: "Em 90 dias", result: "Autoridade consolidada + crescimento constante" },
          ].map((item, i) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex-1 flex flex-col gap-1.5 p-5 rounded-2xl bg-[#111] border border-[#1e1e1e] text-center"
            >
              <span className="font-display font-bold text-[#FF8C42] text-sm">{item.time}</span>
              <span className="text-[#666] text-xs font-body leading-relaxed">{item.result}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
