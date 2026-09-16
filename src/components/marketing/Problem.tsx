import React from "react";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { TrendingDownIcon, AlertTriangleIcon, RevenueIcon } from "@/components/icons";

export const Problem: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold">
            <AlertTriangleIcon size={14} />
            <span>El cuello de botella de la industria</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            El 38% de los clientes de SEO se van cada año. <br />
            <span className="text-rose-400">Porque les hablas en el idioma equivocado.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            No es porque el trabajo sea malo. Es porque le muestras al cliente impresiones, clics y posiciones
            (sustantivos de plataforma), mientras él presupuesta y piensa en ventas, margen y revenue (sustantivos de negocio).
            Cada métrica que el cliente tiene que traducir mentalmente a dinero es una oportunidad de que pierda la confianza.
          </p>
        </div>

        {/* Translation Gap Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {/* Traditional Agency Reporting */}
          <Card className="bg-slate-800/80 border-slate-700/80 text-white hover:border-slate-600 transition-colors">
            <CardContent className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <TrendingDownIcon size={20} className="text-rose-400" />
                  <span className="font-semibold text-rose-300 text-sm uppercase tracking-wider">
                    El reporte tradicional (Sustantivos de plataforma)
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">Desconexión</span>
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                  <span>&quot;La URL cayó de posición 2.4 a 5.8&quot;</span>
                  <span className="text-rose-400">Cliente: &quot;¿Y eso qué me cuesta?&quot;</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                  <span>&quot;Perdimos 3,200 impresiones este mes&quot;</span>
                  <span className="text-rose-400">Cliente: &quot;No sé qué significa&quot;</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                  <span>&quot;Optimizamos 8 páginas con 45 keywords&quot;</span>
                  <span className="text-rose-400">Cliente: &quot;¿Cuánto recuperamos?&quot;</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pt-2">
                Resultado: En cada renovación trimestral, el cliente cuestiona el fee de la agencia porque no ve el retorno financiero directo.
              </p>
            </CardContent>
          </Card>

          {/* Agency Growth Engine Reporting */}
          <Card className="bg-slate-800/80 border-brand-500/40 text-white relative overflow-hidden shadow-glow hover:border-brand-500 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl" />
            <CardContent className="p-6 sm:p-8 space-y-4 relative z-10">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <RevenueIcon size={20} className="text-brand-400" />
                  <span className="font-semibold text-brand-300 text-sm uppercase tracking-wider">
                    Con Agency Growth Engine (Sustantivos de negocio)
                  </span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 font-semibold">
                  Retención
                </span>
              </div>

              <div className="space-y-3 font-sans text-xs text-slate-200">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                  <span>&quot;3 páginas en riesgo suman <strong>$8,420 USD/mes</strong>&quot;</span>
                  <span className="text-emerald-400 font-semibold font-mono">Priorizado</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                  <span>&quot;Arreglo ejecutado en /zapatillas-running&quot;</span>
                  <span className="text-emerald-400 font-semibold font-mono">+$5,680 USD medidos</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                  <span>&quot;Descontada estacionalidad del mercado (-4.1%)&quot;</span>
                  <span className="text-emerald-400 font-semibold font-mono">Cifra real y honesta</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-2">
                Resultado: La reunión de renovación dura 10 minutos. El cliente ve exactamente cuántos dólares recuperó el trabajo de la agencia.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};
