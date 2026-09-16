"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheckIcon,
  DownloadIcon,
  ShareIcon,
  CheckCircleIcon,
  LogoIcon,
} from "@/components/icons";
import { DEMO_MONTHLY_REPORT } from "@/lib/demo-data";
import { formatCurrency } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default function ReportesPage() {
  const [whiteLabelActive, setWhiteLabelActive] = useState(true);
  const [agencyName] = useState("GrowthCraft SEO Partners");
  const [copiedLink, setCopiedLink] = useState(false);

  const report = DEMO_MONTHLY_REPORT;

  const handleCopyShareLink = () => {
    navigator.clipboard.writeText("https://app.agencygrowth.engine/r/client-share-zapatoslatam-feb2026");
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-slate-700 flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={whiteLabelActive}
              onChange={(e) => setWhiteLabelActive(e.target.checked)}
              className="rounded border-slate-300 text-brand-600 focus:ring-brand-500 h-4 w-4"
            />
            <span>Activar Marca Blanca (White-label)</span>
          </label>
          <Badge variant="default" size="sm">
            Plan Agencia
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyShareLink}
            className="gap-1.5"
          >
            {copiedLink ? (
              <>
                <CheckCircleIcon size={14} className="text-emerald-600" />
                <span>¡Enlace copiado!</span>
              </>
            ) : (
              <>
                <ShareIcon size={14} />
                <span>Enlace Solo Lectura para Cliente</span>
              </>
            )}
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => window.print()}
            className="gap-1.5 shadow-sm"
          >
            <DownloadIcon size={14} />
            <span>Descargar PDF</span>
          </Button>
        </div>
      </div>

      {/* The Printable / Viewable Report Container */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 sm:p-10 space-y-8">
        {/* Report Header & White-Label Branding */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            {whiteLabelActive ? (
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  G
                </div>
                <div>
                  <span className="text-base font-extrabold text-slate-900 block">
                    {agencyName}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Reporte Financiero de Rendimiento SEO
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <LogoIcon size={24} />
                <span className="font-bold text-slate-900 text-base">Agency Growth Engine</span>
              </div>
            )}
          </div>

          <div className="text-left sm:text-right">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Periodo Liquidado
            </span>
            <span className="text-lg font-bold text-slate-900 block">
              {report.month}
            </span>
            <span className="text-xs text-slate-500">
              Cliente: <strong>{report.clientName}</strong> ({report.domain})
            </span>
          </div>
        </div>

        {/* Executive Summary Cards (Net Recovered) */}
        <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 border border-emerald-200/80 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block">
                Total Revenue Neto Recuperado y Verificado
              </span>
              <div className="text-3xl sm:text-5xl font-extrabold text-emerald-950 font-sans mt-1">
                +{formatCurrency(report.measuredNetRecovered)} USD
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="measured" size="md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Revenue Medido (Shopify Direct API)
              </Badge>
            </div>
          </div>

          {/* Statistical Confidence & Seasonal Discount */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-emerald-200/60 text-xs">
            <div>
              <span className="text-emerald-800 font-semibold block">
                Intervalo de Confianza (95%):
              </span>
              <span className="font-mono text-emerald-950 font-bold">
                {report.confidenceInterval}
              </span>
            </div>

            <div>
              <span className="text-emerald-800 font-semibold block">
                Descuento Estacional Aplicado:
              </span>
              <span className="font-mono text-amber-800 font-semibold">
                {report.seasonalDiscountApplied}
              </span>
            </div>

            <div>
              <span className="text-emerald-800 font-semibold block">
                Margen de Error Máximo:
              </span>
              <span className="font-mono text-slate-700 font-semibold">
                {report.marginOfError}
              </span>
            </div>
          </div>
        </div>

        {/* Line-by-Line Breakdown Table: "Esto recuperó $X" */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">
              Desglose de Acciones Ejecutadas y Dinero Recuperado
            </h3>
            <span className="text-xs text-slate-500">
              {report.breakdown.length} optimizaciones verificadas
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-4 w-2/5">Página y Acción Realizada</th>
                  <th className="p-4">Causa Raíz</th>
                  <th className="p-4">Estado Verificación</th>
                  <th className="p-4 text-right">Revenue Recuperado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {report.breakdown.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60">
                    <td className="p-4">
                      <div className="font-semibold text-slate-900 text-xs sm:text-sm">
                        {item.pageUrl}
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5">
                        {item.action}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        Ejecutado el {item.executedDate}
                      </div>
                    </td>

                    <td className="p-4">
                      <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                        {item.cause}
                      </span>
                    </td>

                    <td className="p-4">
                      <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                        <CheckCircleIcon size={14} className="text-emerald-600" />
                        {item.status}
                      </span>
                    </td>

                    <td className="p-4 text-right">
                      <div className="font-extrabold text-emerald-900 text-sm sm:text-base">
                        +{formatCurrency(item.recoveredAmount)} USD
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        {item.confidence}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Rule Mandate / Legal Notice */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-slate-800">
            <ShieldCheckIcon size={15} className="text-brand-600" />
            <span>Compromiso de Exactitud e Integridad de Métricas</span>
          </div>
          <p className="leading-relaxed">
            Este reporte muestra exclusivamente resultados históricos y pasados verificados con las integraciones activas del sitio. No contiene proyecciones ni pronósticos futuros. Los incrementos de tráfico que coincidieron con crecimientos generales del mercado han sido estadísticamente descontados.
          </p>
        </div>
      </div>
    </div>
  );
}
