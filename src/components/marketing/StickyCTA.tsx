"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";

export const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-3">
        <div className="min-w-0 leading-tight">
          <span className="block text-xs font-semibold text-slate-900 truncate">
            Empieza gratis hoy
          </span>
          <span className="block text-[11px] text-slate-500">Sin tarjeta. Cancela cuando quieras.</span>
        </div>
        <Link href="/onboarding" className="ml-auto shrink-0">
          <Button variant="primary" size="md" className="group">
            Empezar
            <ArrowRightIcon size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
