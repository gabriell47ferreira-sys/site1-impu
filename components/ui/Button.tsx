"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  href?:      string;
  children:   ReactNode;
  variant?:   "primary" | "ghost";
  size?:      "sm" | "md" | "lg";
  className?: string;
  icon?:      ReactNode;
  target?:    string;
  rel?:       string;
  onClick?:   () => void;
}

const WA_ICON = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Button({
  href,
  children,
  variant   = "primary",
  size      = "md",
  className = "",
  icon,
  target,
  rel,
  onClick,
}: ButtonProps) {
  /* ── sizes ── */
  const sizes: Record<string, string> = {
    sm: "px-6 py-2.5 text-sm gap-2",
    md: "px-8 py-3.5 text-[0.95rem] gap-2.5",
    lg: "px-9 py-4 text-base gap-3",
  };

  /* ── variants ── */
  const variants: Record<string, string> = {
    primary: [
      "bg-[#FF6A00] text-black",
      "hover:bg-[#FF8C42]",
      "shadow-[0_0_22px_rgba(255,106,0,0.38)]",
      "hover:shadow-[0_0_44px_rgba(255,106,0,0.60)]",
    ].join(" "),
    ghost: [
      "border border-[#2a2a2a] text-[#999]",
      "hover:text-white hover:border-[#FF6A00]/40",
      "bg-transparent",
    ].join(" "),
  };

  const base = [
    "relative inline-flex items-center justify-center rounded-full",
    "font-display font-semibold tracking-tight",
    "transition-all duration-300 overflow-hidden select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00]",
  ].join(" ");

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const inner = (
    <>
      {/* shimmer — primary only */}
      {variant === "primary" && (
        <span
          aria-hidden
          className="shimmer-layer pointer-events-none absolute inset-0"
        />
      )}
      {/* icon (uses WA icon if none provided for primary) */}
      {(icon || variant === "primary") && (
        <span className="relative z-10 flex-shrink-0 flex items-center">
          {icon ?? WA_ICON}
        </span>
      )}
      <span className="relative z-10">{children}</span>
    </>
  );

  const spring = { type: "spring", stiffness: 420, damping: 26 } as const;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={cls}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={spring}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={cls}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={spring}
    >
      {inner}
    </motion.button>
  );
}
