"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SparklesIcon, ArrowRightIcon, XIcon } from "@/components/icons";

export const AnnouncementBar: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-slate-950 text-white text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2.5 flex items-center justify-center gap-2 text-center">
        <SparklesIcon size={14} className="text-brand-400 shrink-0" />
        <span className="text-slate-200">
          <strong className="text-white font-semibold">Precio de fundador:</strong>{" "}
          <span className="hidden sm:inline">se congela para siempre en cuanto te unes, antes de salir de beta.</span>
          <span className="sm:hidden">bloquea tu tarifa de por vida.</span>
        </span>
        <Link
          href="/precios"
          className="inline-flex items-center gap-1 font-semibold text-brand-300 hover:text-brand-200 transition-colors underline underline-offset-2 shrink-0"
        >
          Ver planes
          <ArrowRightIcon size={12} />
        </Link>
      </div>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Cerrar anuncio"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
      >
        <XIcon size={14} />
      </button>
    </div>
  );
};
