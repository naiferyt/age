import React from "react";
import { Container } from "@/components/ui/Container";
import {
  SearchConsoleIcon,
  AnalyticsIcon,
  ShopifyIcon,
  WooCommerceIcon,
} from "@/components/icons";

const INTEGRATIONS = [
  { name: "Google Search Console", icon: SearchConsoleIcon, note: "Detección" },
  { name: "Google Analytics 4", icon: AnalyticsIcon, note: "Atribución" },
  { name: "Shopify", icon: ShopifyIcon, note: "Revenue medido" },
  { name: "WooCommerce", icon: WooCommerceIcon, note: "Revenue medido" },
];

export const IntegrationsBar: React.FC = () => {
  return (
    <section className="py-10 bg-white border-b border-slate-200/80">
      <Container size="xl">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider shrink-0">
            Conecta con las fuentes que ya usas:
          </p>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {INTEGRATIONS.map((integration) => {
              const Icon = integration.icon;
              return (
                <div
                  key={integration.name}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-slate-200/80 bg-slate-50/60 hover:bg-slate-50 hover:border-slate-300 transition-colors"
                >
                  <Icon size={22} className="shrink-0" />
                  <div className="min-w-0 leading-tight">
                    <span className="block text-xs font-semibold text-slate-800 truncate">
                      {integration.name}
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      {integration.note}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-[11px] text-slate-400 shrink-0 hidden lg:block">
            Sin integración = capa &quot;Estimado&quot; con tus propios parámetros de AOV.
          </p>
        </div>
      </Container>
    </section>
  );
};
