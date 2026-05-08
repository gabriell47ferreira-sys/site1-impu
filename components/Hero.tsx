"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Button from "./ui/Button";

/* ─── Constants ─────────────────────────────────────────────────────────── */
const WA =
  "https://wa.me/5581992627692";

/* ─── Particle canvas ───────────────────────────────────────────────────── */
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width  = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize, { passive: true });

    type Dot = {
      x: number; y: number;
      vx: number; vy: number;
      r: number; phase: number; speed: number;
    };

    const COUNT = 50;
    const dots: Dot[] = Array.from({ length: COUNT }, () => ({
      x:     Math.random() * W,
      y:     Math.random() * H,
      vx:    (Math.random() - 0.5) * 0.20,
      vy:    (Math.random() - 0.5) * 0.20,
      r:     Math.random() * 1.2 + 0.4,
      phase: Math.random() * Math.PI * 2,
      speed: 0.007 + Math.random() * 0.009,
    }));

    let t = 0;
    let raf: number;

    const draw = () => {
      t++;
      ctx.clearRect(0, 0, W, H);

      for (const d of dots) {
        d.x = (d.x + d.vx + W) % W;
        d.y = (d.y + d.vy + H) % H;
        const a = 0.15 + 0.35 * Math.sin(t * d.speed + d.phase);

        /* dot */
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,106,0,${a})`;
        ctx.fill();

        /* soft halo */
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 7);
        g.addColorStop(0, `rgba(255,106,0,${a * 0.22})`);
        g.addColorStop(1, "rgba(255,106,0,0)");
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 7, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      /* connections */
      const LINK = 110;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255,106,0,${(1 - dist / LINK) * 0.065})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 pointer-events-none opacity-50"
    />
  );
}

/* ─── Text reveal variants ──────────────────────────────────────────────── */
const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.80, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Hero ──────────────────────────────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* ── scroll parallax ── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const rocketY       = useTransform(scrollYProgress, [0, 1],    [0, -60]);
  const rocketOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const textY         = useTransform(scrollYProgress, [0, 1],    [0, 38]);
  const textOpacity   = useTransform(scrollYProgress, [0, 0.50], [1, 0]);

  /* ── mouse parallax ── */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 50, damping: 18, mass: 0.85 });
  const my = useSpring(rawY, { stiffness: 50, damping: 18, mass: 0.85 });

  useEffect(() => {
    let raf: number;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const cx = window.innerWidth  / 2;
        const cy = window.innerHeight / 2;
        rawX.set(((e.clientX - cx) / cx) * 13);
        rawY.set(((e.clientY - cy) / cy) * 13);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [rawX, rawY]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0B0B]"
    >
      {/* ── Subtle grid ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.016]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,106,0,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,106,0,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Ambient glows ── */}
      <div aria-hidden className="absolute top-1/3 left-1/4  w-[480px] h-[480px] rounded-full bg-[#FF6A00]/[0.045] blur-[140px] pointer-events-none" />
      <div aria-hidden className="absolute bottom-1/4 right-1/4 w-[340px] h-[340px] rounded-full bg-[#FF8C42]/[0.03]  blur-[110px] pointer-events-none" />

      {/* ── Particles ── */}
      <Particles />

      {/* ── Main layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">

          {/* ════════════ LEFT — Text ════════════ */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="flex-1 max-w-[560px] flex flex-col items-start order-1"
          >
            {/* Badge */}
            <motion.div
              custom={0.10}
              variants={reveal}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#FF6A00]/25 bg-[#FF6A00]/[0.07]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
              <span className="text-[11px] font-display tracking-[0.17em] text-[#FF8C42] uppercase">
                Posicionamento Google Maps
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={0.25}
              variants={reveal}
              initial="hidden"
              animate="show"
              className="font-display font-extrabold leading-[1.04] tracking-[-0.025em] mb-6 text-white
                         text-[42px] sm:text-[50px] lg:text-[56px] xl:text-[62px]"
            >
              Tenha mais clientes{" "}
              <span className="gradient-text glow-text">
                todos os dias.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={0.40}
              variants={reveal}
              initial="hidden"
              animate="show"
              className="text-[#777] text-[1.05rem] sm:text-lg leading-[1.75] mb-11 font-body max-w-[480px]"
            >
              Sua empresa precisa de{" "}
              <span className="text-[#bbb] font-medium">
                posicionamento no Google Maps
              </span>{" "}
              para ser encontrada por quem já quer comprar.
            </motion.p>

            {/* CTA group */}
            <motion.div
              custom={0.55}
              variants={reveal}
              initial="hidden"
              animate="show"
              className="flex flex-col items-start gap-4"
            >
              <Button
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                Quero mais clientes
              </Button>

              <p className="text-[13px] text-[#444] font-body pl-1 tracking-wide">
                Diagnóstico gratuito&ensp;•&ensp;Sem compromisso
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={0.70}
              variants={reveal}
              initial="hidden"
              animate="show"
              className="flex items-center gap-10 mt-14 pt-9 border-t border-[#1c1c1c] w-full"
            >
              {[
                { n: "+150",  l: "empresas atendidas" },
                { n: "30d",   l: "primeiros resultados" },
                { n: "+300%", l: "mais visibilidade" },
              ].map(({ n, l }) => (
                <div key={n} className="flex flex-col gap-0.5">
                  <span className="font-display font-extrabold text-[1.35rem] text-[#FF8C42] leading-none">
                    {n}
                  </span>
                  <span className="text-xs text-[#555] font-body mt-1">{l}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ════════════ RIGHT — Rocket ════════════ */}
          <motion.div
            style={{ y: rocketY, opacity: rocketOpacity, x: mx }}
            className="flex-1 flex items-center justify-center lg:justify-end relative order-2"
          >
            {/* Glow behind rocket — outer */}
            <div
              aria-hidden
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-[320px] h-[320px] md:w-[440px] md:h-[440px] rounded-full bg-[#FF6A00]/[0.09] blur-[90px]" />
            </div>
            {/* Glow behind rocket — inner */}
            <div
              aria-hidden
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-[160px] h-[160px] rounded-full bg-[#FF8C42]/[0.11] blur-[55px]" />
            </div>

            {/* Entrance → float → mouse-Y → hover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.90, y: 24 }}
              animate={{ opacity: 1, scale: 1.00, y: 0  }}
              transition={{ duration: 1.10, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ y: my }}
                whileHover={{ scale: 1.022 }}
                className="relative
                  w-[220px] h-[270px]
                  sm:w-[300px] sm:h-[365px]
                  md:w-[400px] md:h-[490px]
                  drop-shadow-[0_0_44px_rgba(255,106,0,0.22)]
                  hover:drop-shadow-[0_0_68px_rgba(255,106,0,0.40)]
                  transition-[filter] duration-500 ease-out"
              >
                <Image
                  src="/rocket.png"
                  alt="Foguete representando crescimento de posicionamento no Google Maps"
                  fill
                  priority
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 300px, 400px"
                  style={{ objectFit: "contain" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1.0 }}
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] text-[#2c2c2c] tracking-[0.24em] uppercase font-display">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#FF6A00]/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
