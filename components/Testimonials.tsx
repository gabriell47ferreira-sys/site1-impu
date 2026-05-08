"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Carlos Mendonça",
    role: "Proprietário · Oficina do Carlos",
    avatar: "CM",
    text: "Em menos de 3 semanas minha oficina saiu do anonimato e foi para o topo do Google Maps. As ligações dobraram. Não consigo mais dar conta de tudo sozinho — precisei contratar.",
    stars: 5,
    city: "Recife, PE",
  },
  {
    name: "Fernanda Lopes",
    role: "Sócia · Clínica Estética Renova",
    avatar: "FL",
    text: "A agenda que ficava pela metade agora está cheia com duas semanas de antecedência. A Impulsione entendeu exatamente o que minha clínica precisava.",
    stars: 5,
    city: "Caruaru, PE",
  },
  {
    name: "João Batista",
    role: "Fundador · Restaurante Tempero Real",
    avatar: "JB",
    text: "Investimento que se pagou em uma semana. Meu restaurante aparece antes de todos os concorrentes da região. O movimento no almoço aumentou 60%.",
    stars: 5,
    city: "Olinda, PE",
  },
  {
    name: "Patrícia Souza",
    role: "CEO · Studio Fit Pilates",
    avatar: "PS",
    text: "Tentei outras agências antes e nunca vi resultado. Com a Impulsione, em 30 dias estava no topo. O diferencial é que eles realmente entendem de SEO local.",
    stars: 5,
    city: "Recife, PE",
  },
  {
    name: "Roberto Alves",
    role: "Diretor · Construtora Alves",
    avatar: "RA",
    text: "Minha construtora aparecia na página 2 do Maps. Hoje estou sempre nos 3 primeiros. Fechei 4 contratos novos só no primeiro mês após o posicionamento.",
    stars: 5,
    city: "João Pessoa, PB",
  },
  {
    name: "Aline Costa",
    role: "Proprietária · Farmácia Vida",
    avatar: "AC",
    text: "Processo simples, time transparente e resultado rápido. Minha farmácia ganhou muito mais movimento de clientes novos que acharam pelo Maps.",
    stars: 5,
    city: "Maceió, AL",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FF8C42">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="depoimentos" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/20 to-transparent" />
      <div className="absolute inset-0 bg-[#0d0d0d]" />

      <div className="relative max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-4"
        >
          <span className="text-xs font-display tracking-widest uppercase text-[#FF6A00]">
            Prova Social
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display font-extrabold text-3xl md:text-5xl text-center mb-5 tracking-tight"
        >
          Empresas que já{" "}
          <span className="gradient-text">impulsionaram</span>
        </motion.h2>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-16 py-6 px-8 rounded-2xl glass border border-[#1e1e1e] max-w-2xl mx-auto"
        >
          {[
            { n: "+150", l: "empresas atendidas" },
            { n: "+300%", l: "aumento de visibilidade" },
            { n: "4.9/5", l: "avaliação média" },
          ].map((s) => (
            <div key={s.n} className="flex flex-col items-center gap-1">
              <span className="font-display font-extrabold text-2xl gradient-text">{s.n}</span>
              <span className="text-xs text-[#555] font-body">{s.l}</span>
            </div>
          ))}
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-6 rounded-2xl bg-[#111] border border-[#1e1e1e] hover:border-[#FF6A00]/20 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/0 to-transparent group-hover:from-[#FF6A00]/3 transition-all duration-500" />

              <div className="relative">
                <Stars />
                <p className="text-[#aaa] text-sm leading-relaxed font-body mt-4 mb-5">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF6A00] to-[#FF8C42] flex items-center justify-center">
                    <span className="font-display font-bold text-xs text-black">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-[#555] text-xs font-body">{t.role} · {t.city}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
