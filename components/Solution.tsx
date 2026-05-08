"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Relevância",
    number: "01",
    desc: "Otimizamos cada elemento do seu perfil — categoria, descrição, fotos e palavras-chave — para o algoritmo do Google entender exatamente o que você oferece.",
    detail: "Otimização completa de perfil",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "Distância",
    number: "02",
    desc: "Estratégias avançadas para expandir sua área de influência no Maps. Seu negócio aparece para mais pessoas, em mais regiões, mais vezes.",
    detail: "Expansão de raio de atuação",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Autoridade",
    number: "03",
    desc: "Construímos reputação digital sólida com avaliações estratégicas, backlinks locais e sinais de autoridade que o Google valoriza e premia.",
    detail: "Construção de reputação digital",
  },
];

export default function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solução" className="relative py-28 px-6 overflow-hidden">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/20 to-transparent" />

      {/* Glow */}
      <div className="absolute left-0 top-1/2 w-[500px] h-[500px] rounded-full bg-[#FF6A00]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-4"
        >
          <span className="text-xs font-display tracking-widest uppercase text-[#FF6A00]">
            A Solução
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display font-extrabold text-3xl md:text-5xl text-center mb-6 tracking-tight"
        >
          Posicionamento que{" "}
          <span className="gradient-text">gera clientes reais</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-[#666] max-w-2xl mx-auto mb-20 font-body leading-relaxed"
        >
          A Impulsione posiciona sua empresa no topo do Google Maps com estratégia, autoridade e otimização completa — baseada nos 3 pilares que o algoritmo do Google realmente valoriza.
        </motion.p>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-8 rounded-3xl bg-[#111] border border-[#1e1e1e] hover:border-[#FF6A00]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Number */}
              <span className="absolute top-6 right-6 font-display font-extrabold text-5xl text-[#FF6A00]/5 group-hover:text-[#FF6A00]/10 transition-colors duration-300 leading-none">
                {p.number}
              </span>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/0 to-[#FF6A00]/0 group-hover:from-[#FF6A00]/5 group-hover:to-transparent transition-all duration-500 rounded-3xl" />

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-2xl bg-[#FF6A00]/10 flex items-center justify-center text-[#FF8C42] mb-6 group-hover:bg-[#FF6A00]/20 transition-colors duration-300">
                {p.icon}
              </div>

              <h3 className="relative font-display font-bold text-xl text-white mb-3">
                {p.title}
              </h3>
              <p className="relative text-[#666] text-sm leading-relaxed font-body mb-6">
                {p.desc}
              </p>

              {/* Tag */}
              <div className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20">
                <span className="w-1 h-1 rounded-full bg-[#FF6A00]" />
                <span className="text-xs text-[#FF8C42] font-display">{p.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
