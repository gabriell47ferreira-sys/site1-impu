"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    title: "Diagnóstico Estratégico Gratuito",
    desc: "Analisamos seu perfil atual, seus concorrentes e o potencial da sua região. Você recebe um mapa claro de onde está e onde pode chegar.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M8 11h6M11 8v6" />
      </svg>
    ),
    tag: "Sem custo",
  },
  {
    n: "02",
    title: "Otimização Completa do Perfil",
    desc: "Aplicamos mais de 40 pontos de otimização no seu Google Business Profile — categorias, fotos, horários, palavras-chave e muito mais.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    tag: "Semana 1–2",
  },
  {
    n: "03",
    title: "Escalada de Posicionamento + Autoridade",
    desc: "Construímos autoridade local de forma contínua — avaliações, citações, backlinks e sinais que fazem o Google te posicionar acima de todos.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    tag: "Crescimento contínuo",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="como-funciona" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/20 to-transparent" />
      <div className="absolute right-0 top-1/2 w-[400px] h-[400px] rounded-full bg-[#FF6A00]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-4"
        >
          <span className="text-xs font-display tracking-widest uppercase text-[#FF6A00]">
            Como funciona
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display font-extrabold text-3xl md:text-5xl text-center mb-5 tracking-tight"
        >
          3 etapas para o{" "}
          <span className="gradient-text">topo do mapa</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-[#666] max-w-xl mx-auto mb-20 font-body"
        >
          Um processo simples, comprovado e focado em resultados reais — não em métricas vazias.
        </motion.p>

        {/* Steps */}
        <div className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-7 rounded-2xl bg-[#111] border border-[#1e1e1e] hover:border-[#FF6A00]/25 transition-all duration-400 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00]/0 to-transparent group-hover:from-[#FF6A00]/3 transition-all duration-500" />

              {/* Number */}
              <div className="flex-shrink-0 flex items-center gap-4">
                <span className="font-display font-extrabold text-4xl text-[#FF6A00]/15 group-hover:text-[#FF6A00]/25 transition-colors duration-300 w-10 leading-none">
                  {step.n}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/10 flex items-center justify-center text-[#FF8C42] flex-shrink-0 group-hover:bg-[#FF6A00]/18 transition-colors duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Connector line (desktop) */}
              <div className="hidden md:block w-8 h-px bg-[#2a2a2a] flex-shrink-0" />

              {/* Text */}
              <div className="relative flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-display font-bold text-lg text-white">{step.title}</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[10px] text-[#FF8C42] font-display tracking-wide">
                    {step.tag}
                  </span>
                </div>
                <p className="text-[#666] text-sm leading-relaxed font-body">{step.desc}</p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex flex-shrink-0 w-8 h-8 rounded-full border border-[#2a2a2a] items-center justify-center text-[#444] group-hover:border-[#FF6A00]/30 group-hover:text-[#FF6A00] transition-all duration-300">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
