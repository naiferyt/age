import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { LockIcon, ShieldCheckIcon, CheckCircleIcon } from "@/components/icons";

const PILLARS = [
  {
    icon: LockIcon,
    title: "Precio de fundador de por vida",
    description:
      "Tu tarifa se congela el día que te suscribes. Solo subimos el precio a los clientes nuevos que se unan después de ti.",
    accent: "text-brand-600 bg-brand-50 border-brand-100",
  },
  {
    icon: ShieldCheckIcon,
    title: "Cancela cuando quieras",
    description:
      "Sin contratos de permanencia ni penalizaciones ocultas. Un clic en tu panel y tu suscripción termina ese mismo día.",
    accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    icon: CheckCircleIcon,
    title: "Empieza gratis, sin tarjeta",
    description:
      "El plan Free conecta tu Search Console y te muestra el primer diagnóstico de revenue en riesgo antes de pedirte un dólar.",
    accent: "text-slate-700 bg-slate-100 border-slate-200",
  },
];

export const Guarantee: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <Badge variant="measured" size="md">
            Cero Riesgo
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Prueba el producto sin miedo a perder dinero
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Sabemos que ya te han vendido &quot;la próxima gran herramienta de SEO&quot;. Por eso el riesgo de
            probar Agency Growth Engine lo asumimos nosotros, no tú.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-card hover:shadow-elevated transition-all text-center flex flex-col items-center"
              >
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center ${pillar.accent}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-4">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
