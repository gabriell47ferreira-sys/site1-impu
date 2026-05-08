"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const diffs = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Estratégia própria",
    desc: "Não usamos templates genéricos. Cada cliente recebe um plano construído do zero para sua região, segmento e concorrência.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Foco em conversão",
    desc: "Não medimos apenas visualizações. Medimos chamadas, cliques e clientes reais gerados pelo posicionamento.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: "Crescimento orgânico",
    desc: "Sem anúncios pagos, sem atalhos. Construímos autoridade real que cresce e permanece — mesmo que você pare de pagar por ads.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Atendimento direto",
    desc: "Sem intermediários, sem tickets. Você fala diretamente com o especialista responsável pelo seu posicionamento.",
  },
];

export default function Differentials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diferencial" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/20 to-transparent" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-[#FF6A00]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-xs font-display tracking-widest uppercase text-[#FF6A00] block mb-4"
            >
              Diferencial
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display font-extrabold text-3xl md:text-4xl xl:text-5xl tracking-tight mb-6 leading-[1.1]"
            >
              Não fazemos só SEO.{" "}
              <span className="gradient-text">Criamos posicionamento</span> que gera clientes.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 }}
              className="text-[#666] leading-relaxed font-body"
            >
              Agências comuns entregam relatórios. A Impulsione entrega resultados mensuráveis — mais
              chamadas, mais visitas, mais vendas. Nossa metodologia foi construída especificamente
              para o algoritmo do Google Maps, não adaptada de SEO tradicional.
            </motion.p>
          </div>

          {/* Right — feature list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {diffs.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="group p-5 rounded-2xl bg-[#111] border border-[#1e1e1e] hover:border-[#FF6A00]/25 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/10 flex items-center justify-center text-[#FF8C42] mb-4 group-hover:bg-[#FF6A00]/18 transition-colors duration-300">
                  {d.icon}
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">{d.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed font-body">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
