"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pains = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v3l2 2" />
      </svg>
    ),
    title: "Invisível no Maps",
    desc: "Seu negócio não aparece quando clientes pesquisam na sua região. A concorrência aparece, você não.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3l18 18M10.5 10.677a2 2 0 002.823 2.823" />
        <path d="M7.362 5.104C5.054 6.106 3 8.189 3 12c0 3 1.5 6 3 8" />
        <path d="M21 12c0-3.5-2-6.5-5-8" />
      </svg>
    ),
    title: "Concorrentes na frente",
    desc: "Enquanto você não age, seus concorrentes aparecem primeiro e roubam os clientes que deveriam ser seus.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Poucas avaliações",
    desc: "Sem avaliações relevantes, o algoritmo te penaliza e clientes escolhem quem parece mais confiável.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Baixo fluxo de clientes",
    desc: "Pouco movimento, menos receita, mais estresse. O negócio poderia estar cheio — mas o Maps não te ajuda.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problema" className="relative py-28 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-red-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-xs font-display tracking-widest uppercase text-[#555]">
            O problema real
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-extrabold text-3xl md:text-5xl text-center mb-4 tracking-tight"
        >
          Você está{" "}
          <span className="text-[#555] line-through decoration-red-500/60">perdendo clientes</span>
          <br />
          <span className="gradient-text">todos os dias.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-[#666] mb-16 max-w-xl mx-auto font-body"
        >
          Se sua empresa não aparece no Google Maps, ela simplesmente não existe para quem busca perto de você.
        </motion.p>

        {/* Pain cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-[#111] border border-[#1a1a1a] hover:border-red-900/40 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/5 transition-colors duration-300" />
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-900/20 flex items-center justify-center text-red-400">
                  {pain.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-1">{pain.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed font-body">{pain.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conclusion statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative text-center py-10 px-8 rounded-3xl border border-[#FF6A00]/20 bg-[#FF6A00]/5"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-[#FF6A00]/5 to-transparent" />
          <p className="relative font-display font-bold text-xl md:text-2xl text-white">
            "Isso não é falta de produto.{" "}
            <span className="gradient-text">É falta de posicionamento.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
