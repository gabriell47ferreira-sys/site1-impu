"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "./ui/Button";

const WA_LINK = "https://wa.me/5581992627692";

const WA_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function CTAFinal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/20 to-transparent" />

      {/* Big glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full bg-[#FF6A00]/8 blur-[140px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4"
        >
          <span className="text-xs font-display tracking-widest uppercase text-[#FF6A00]">
            Hora de decidir
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl tracking-tight mb-8 leading-[1.05]"
        >
          Sua empresa pode estar{" "}
          <span className="gradient-text glow-text">no topo</span> —
          <br className="hidden md:block" /> ou sendo{" "}
          <span className="text-[#444] line-through decoration-red-500/50">ignorada.</span>
          <br />
          <span className="text-[#ccc]">A escolha é sua.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-[#666] text-lg mb-10 font-body max-w-xl mx-auto"
        >
          Comece agora com um diagnóstico gratuito. Sem burocracia, sem compromisso — só resultados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
          className="flex flex-col items-center gap-3"
        >
          <Button href={WA_LINK} target="_blank" rel="noopener noreferrer" size="lg" icon={WA_ICON}>
            Falar no WhatsApp agora
          </Button>
          <p className="text-xs text-[#444] font-body">
            ✦ Diagnóstico gratuito · Resposta em minutos
          </p>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-14 pt-10 border-t border-[#1a1a1a]"
        >
          {[
            "✦ +150 empresas posicionadas",
            "✦ Resultados em até 30 dias",
            "✦ 100% orgânico, sem anúncios",
            "✦ Atendimento direto via WhatsApp",
          ].map((badge) => (
            <span key={badge} className="text-xs text-[#555] font-body">
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
