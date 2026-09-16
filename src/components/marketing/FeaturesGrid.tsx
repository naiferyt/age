import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  DecayIcon,
  TrendingDownIcon,
  SparklesIcon,
  ShieldCheckIcon,
  AlertTriangleIcon,
  UsersIcon,
} from "@/components/icons";

const FEATURES = [
  {
    icon: DecayIcon,
    title: "Diagnóstico de 8 causas raíz",
    description:
      "Clasifica automáticamente por qué cae cada página: contenido desactualizado, competidor nuevo, canibalización, problema técnico, estacionalidad y más.",
    accent: "text-brand-600 bg-brand-50 border-brand-100",
  },
  {
    icon: TrendingDownIcon,
    title: "Backlog ordenado por dinero",
    description:
      "El orden del backlog no depende de clics perdidos. Prioriza siempre la página que representa más dólares en riesgo para el negocio.",
    accent: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    icon: SparklesIcon,
    title: "Briefs quirúrgicos con IA",
    description:
      "Cada brief se redacta según la causa exacta detectada: términos faltantes, estructura de encabezados y extensión recomendada, listo para el redactor.",
    accent: "text-brand-700 bg-blue-50 border-blue-100",
  },
  {
    icon: ShieldCheckIcon,
    title: "Verificación con intervalos de confianza",
    description:
      "Ningún resultado se reporta como ganado sin descontar estadísticamente el movimiento natural del mercado y la estacionalidad.",
    accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    icon: AlertTriangleIcon,
    title: "Alertas tempranas de decay",
    description:
      "Recibe una alerta en cuanto una página activa cruza el umbral de riesgo, antes de que la caída de tráfico se convierta en pérdida de revenue.",
    accent: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    icon: UsersIcon,
    title: "Multicliente y marca blanca",
    description:
      "Gestiona la cartera completa de clientes de tu agencia desde un solo panel, con reportes white-label listos para reuniones de renovación.",
    accent: "text-slate-700 bg-slate-100 border-slate-200",
  },
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section id="funciones" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <Badge variant="default" size="md">
            Todo el Producto
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Todo lo que necesita una agencia para defender su fee
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Del diagnóstico técnico al reporte financiero, sin herramientas sueltas que haya que
            conectar a mano.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all"
              >
                <div className={`w-11 h-11 rounded-lg border flex items-center justify-center ${feature.accent}`}>
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-4">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
