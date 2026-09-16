import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  DecayIcon,
  ShieldCheckIcon,
  RevenueIcon,
  CalendarIcon,
} from "@/components/icons";

const METRICS = [
  {
    value: "8",
    label: "Causas de decay diagnosticadas",
    detail: "No todo es \u2018perdiste posiciones\u2019: contenido viejo, competidor nuevo, canibalización, fallos técnicos y más.",
    icon: DecayIcon,
    accent: "text-brand-600 bg-brand-50 border-brand-100",
  },
  {
    value: "28 / 60 / 90",
    label: "Días de verificación real",
    detail: "Cada brief ejecutado se vuelve a medir en tres checkpoints antes de reportarlo como ganado.",
    icon: CalendarIcon,
    accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    value: "±4.8%",
    label: "Margen de error máximo declarado",
    detail: "Todo número financiero muestra su intervalo de confianza. Nunca una cifra sola sin contexto.",
    icon: ShieldCheckIcon,
    accent: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    value: "$0",
    label: "Costo para empezar a medir",
    detail: "El plan Free conecta Search Console y muestra tu primer diagnóstico de revenue en riesgo.",
    icon: RevenueIcon,
    accent: "text-slate-700 bg-slate-100 border-slate-200",
  },
];

export const MetricsBar: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <Badge variant="default" size="md">
            Métricas del Producto
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Números que sí puedes defender frente a un cliente
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Nada de estadísticas de marketing infladas. Estas son las reglas internas que sigue el
            producto para calcular cada cifra que ves en el dashboard.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-card hover:shadow-elevated transition-all flex flex-col gap-3"
              >
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${metric.accent}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono tracking-tight">
                    {metric.value}
                  </span>
                  <span className="block text-sm font-semibold text-slate-800 mt-1">
                    {metric.label}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{metric.detail}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
