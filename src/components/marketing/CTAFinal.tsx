import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, ShieldCheckIcon } from "@/components/icons";

export const CTAFinal: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/40 relative overflow-hidden">
      <Container size="md">
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-elevated border border-slate-800">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-400/30 inline-block">
              Empieza en menos de 3 minutos
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Convierte el SEO de un costo cuestionado en una inversión demostrada
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Conecta tu Search Console hoy mismo. Descubre qué páginas de tu cliente o de tu tienda están perdiendo ventas y genera tu primer brief con IA sin tarjeta de crédito.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="/onboarding" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-elevated group">
                  Crear Cuenta Gratis (Plan Free)
                  <ArrowRightIcon
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>
              <Link href="/dashboard" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white"
                >
                  Ver Demo sin Registro
                </Button>
              </Link>
            </div>

            <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
              <ShieldCheckIcon size={16} className="text-emerald-400" />
              <span>Cero contratos forzosos. Sin cargos sorpresa.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
