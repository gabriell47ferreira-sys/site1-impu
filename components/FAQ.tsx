"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "Funciona para qualquer tipo de negócio?",
    a: "Sim. Qualquer negócio local pode ser posicionado no Google Maps — restaurantes, clínicas, lojas, oficinas, escritórios, prestadores de serviço e muito mais. Se seu cliente pode te procurar na internet, a Impulsione pode te colocar na frente dele.",
  },
  {
    q: "Em quanto tempo vejo resultado?",
    a: "A maioria dos clientes percebe aumento de visibilidade e chamadas nos primeiros 7 a 14 dias após a otimização do perfil. Para chegar ao topo, o período médio é de 30 dias, dependendo da concorrência na sua região.",
  },
  {
    q: "Preciso ter loja física para aparecer no Maps?",
    a: "Não necessariamente. Prestadores de serviço que atendem em casa ou no endereço do cliente também podem ser posicionados no Google Maps. Configuramos seu perfil como área de serviço para maximizar sua presença regional.",
  },
  {
    q: "Isso envolve anúncios pagos (Google Ads)?",
    a: "Não. Nossa metodologia é 100% orgânica. Trabalhamos com otimização real do perfil, construção de autoridade e sinais locais — sem depender de investimento em anúncios. O resultado é mais duradouro e não para quando você para de pagar.",
  },
  {
    q: "O que é o diagnóstico gratuito?",
    a: "É uma análise completa do seu perfil atual, pontos de melhoria, análise dos 3 principais concorrentes na sua região e um relatório de potencial. Tudo sem custo e sem compromisso. Você decide depois se quer seguir com a gente.",
  },
  {
    q: "Como funciona o atendimento e acompanhamento?",
    a: "Todo cliente tem acesso direto ao especialista responsável via WhatsApp. Enviamos relatórios mensais de evolução e estamos disponíveis para dúvidas e ajustes sempre que necessário.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      className="border-b border-[#1a1a1a] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-display font-semibold text-[#ccc] group-hover:text-white transition-colors duration-200 text-base leading-snug">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-colors duration-200 ${
            open ? "border-[#FF6A00] bg-[#FF6A00]/10 text-[#FF6A00]" : "border-[#2a2a2a] text-[#555]"
          }`}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[#666] text-sm leading-relaxed font-body pr-10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/20 to-transparent" />

      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-4"
        >
          <span className="text-xs font-display tracking-widest uppercase text-[#FF6A00]">FAQ</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display font-extrabold text-3xl md:text-5xl text-center mb-14 tracking-tight"
        >
          Perguntas{" "}
          <span className="gradient-text">frequentes</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-[#111] rounded-2xl border border-[#1e1e1e] px-7 divide-y divide-[#1a1a1a]"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
