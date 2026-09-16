import React from "react";
import { Stat } from "@/components/ui/Stat";
import {
  TrendingDownIcon,
  RevenueIcon,
  BriefIcon,
  ShieldCheckIcon,
} from "@/components/icons";

interface KPIRowProps {
  siteRevenueMode?: "measured" | "estimated";
  revenueAtRisk?: number;
  revenueRecovered?: number;
  decayCount?: number;
  briefsCount?: number;
  confidenceMargin?: string;
}

export const KPIRow: React.FC<KPIRowProps> = ({
  siteRevenueMode = "measured",
  revenueAtRisk = 8420,
  revenueRecovered = 14250,
  decayCount = 6,
  briefsCount = 4,
  confidenceMargin = "±4.8% (Shopify API)",
}) => {
  const isMeasured = siteRevenueMode === "measured";

  return (
    <div className="space-y-3">
      {/* Product integrity callout: Separation reminder */}
      <div className="flex items-center justify-between px-1 text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <ShieldCheckIcon size={14} className="text-brand-600" />
          <strong>Regla de integridad:</strong> Dinero en riesgo y dinero recuperado se miden por separado y nunca se suman.
        </span>
        <span className="hidden sm:inline font-mono text-[10px] text-slate-400">
          Intervalo de confianza 95%
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Decay Pages Active */}
        <Stat
          label="Páginas en Decay Activo"
          value={`${decayCount} URLs`}
          trend={{
            value: "+2 esta semana",
            isPositive: false,
            sublabel: "detectadas con Search Console",
          }}
          helperText="Páginas con caída superior al 25% en clics orgánicos vs los últimos 90 días."
          icon={<TrendingDownIcon size={18} className="text-rose-500" />}
        />

        {/* KPI 2: Dinero en Riesgo (SEPARADO - NUNCA SUMADO) */}
        <Stat
          label="Dinero Mensual en Riesgo"
          value={`$${revenueAtRisk.toLocaleString("en-US")} USD`}
          badge={{
            text: isMeasured ? "Medido" : "Estimado",
            variant: isMeasured ? "measured" : "estimated",
          }}
          confidenceMargin={isMeasured ? "[$8,015 - $8,825]" : "[$7,200 - $9,640]"}
          helperText="Facturación mensual en peligro directo por las páginas en caída identificadas."
          icon={<TrendingDownIcon size={18} className="text-amber-500" />}
        />

        {/* KPI 3: Briefs en ejecución */}
        <Stat
          label="Briefs de IA Ejecutados"
          value={`${briefsCount} briefs`}
          trend={{
            value: "100% completados",
            isPositive: true,
            sublabel: "en redacción y deploy",
          }}
          helperText="Planes de acción quirúrgicos redactados por Claude IA según causa raíz."
          icon={<BriefIcon size={18} className="text-brand-600" />}
        />

        {/* KPI 4: Revenue Neto Recuperado (SEPARADO - NUNCA SUMADO) */}
        <Stat
          label="Revenue Neto Recuperado"
          value={`+$${revenueRecovered.toLocaleString("en-US")} USD`}
          badge={{
            text: isMeasured ? "Medido (Descontada estacionalidad)" : "Estimado",
            variant: isMeasured ? "measured" : "estimated",
          }}
          confidenceMargin={confidenceMargin}
          helperText="Ventas orgánicas recuperadas en los checkpoints de 28, 60 y 90 días."
          icon={<RevenueIcon size={18} className="text-emerald-600" />}
          className="border-emerald-200/80 bg-gradient-to-b from-white to-emerald-50/20"
        />
      </div>
    </div>
  );
};
