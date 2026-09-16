import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  SearchConsoleIcon,
  TrendingDownIcon,
  SparklesIcon,
  ShieldCheckIcon,
  RevenueIcon,
} from "@/components/icons";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Detecta con diagnóstico de 8 causas",
      description:
        "Conecta Google Search Console y encuentra de inmediato qué páginas están cayendo. No asume que todo es caída de posición: clasifica si es contenido viejo, nuevo competidor, canibalización entre URLs, fallos técnicos o demanda.",
      icon: <SearchConsoleIcon size={24} />,
      tag: "Detección inteligente",
    },
    {
      number: "02",
      title: "Prioriza por dinero, no por tráfico",
      description:
        "Una URL que perdió 2,000 clics de tráfico informacional puede valer $0, mientras que una ficha con 200 clics perdidos puede costar $3,000 USD/mes. Ordenamos tu backlog por dólares en riesgo para atacar lo vital.",
      icon: <TrendingDownIcon size={24} className="text-rose-500" />,
      tag: "Foco financiero",
    },
    {
      number: "03",
      title: "Genera el brief con IA quirúrgico",
      description:
        "Para cada página priorizada, Claude IA redacta un plan de acción a la medida de la causa diagnosticada. Incluye términos faltantes con intención comercial, estructura de encabezados H2/H3 y extensión recomendada.",
      icon: <SparklesIcon size={24} className="text-brand-600" />,
      tag: "Listo para redactores",
    },
    {
      number: "04",
      title: "Verifica a los 28, 60 y 90 días",
      description:
        "Cuando marcas el brief como ejecutado, medimos automáticamente cuánto revenue orgánico volvió a entrar. Descontamos variaciones del mercado para no atribuirle al trabajo un mérito que en realidad era estacional.",
      icon: <ShieldCheckIcon size={24} className="text-emerald-600" />,
      tag: "Descuento estacional",
    },
    {
      number: "05",
      title: "Reporta en dinero cada mes",
      description:
        "Genera un reporte para el cliente donde cada optimización termina en: 'Esto recuperó $X USD medidos (±margen)'. Sin gráficos complejos de tráfico que el cliente tenga que interpretar.",
      icon: <RevenueIcon size={24} className="text-brand-700" />,
      tag: "White-label para agencias",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <Badge variant="default" size="md">
            El Loop Completo
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Cinco pasos desde la caída hasta el dólar recuperado
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            El único flujo de trabajo que conecta la analítica técnica con la facturación real de un negocio.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`bg-white rounded-xl p-6 border border-slate-200 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1 border-brand-200 bg-gradient-to-b from-white to-blue-50/30" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-800">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-mono font-bold text-slate-300">
                    {step.number}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-100">
                    {step.tag}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
