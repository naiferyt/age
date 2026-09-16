"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import {
  SparklesIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  ArrowLeftIcon,
  ShareIcon,
  InfoIcon,
} from "@/components/icons";
import { DEMO_BRIEFS } from "@/lib/demo-data";
import { formatCurrency } from "@/lib/utils";

export default function BriefDetailPage() {
  const params = useParams();
  const briefId = (params?.id as string) || "brief-101";

  const [executed, setExecuted] = useState(briefId === "brief-102" || briefId === "brief-100");
  const [copied, setCopied] = useState(false);

  // Find brief or fallback to first
  const brief = DEMO_BRIEFS.find((b) => b.id === briefId) || DEMO_BRIEFS[0];

  const handleCopyMarkdown = () => {
    const md = `# Brief SEO IA: ${brief.pageTitle}
URL: ${brief.pageUrl}
Causa: ${brief.cause}
Dinero en riesgo: $${brief.revenueAtRisk} USD

## Diagnóstico
${brief.actionPlan.diagnosis}

## Objetivo
${brief.actionPlan.objective}

## Términos Clave Faltantes
${brief.actionPlan.missingKeywords.map((k) => `- ${k.term} (${k.intent} - Vol: ${k.volume})`).join("\n")}

## Estructura Recomendada
${brief.actionPlan.contentStructure.map((s) => `- ${s}`).join("\n")}

## Extensión
- Actual: ${brief.actionPlan.recommendedWordCount.current} palabras
- Recomendada: ${brief.actionPlan.recommendedWordCount.recommended} palabras
`;
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Back Link */}
      <div>
        <Link
          href="/dashboard/briefs"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeftIcon size={14} />
          Volver a la lista de briefs
        </Link>
      </div>

      {/* Brief Header Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-card space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400">Brief #{brief.id}</span>
              <span className="text-slate-300">•</span>
              <Badge variant={brief.revenueMode === "measured" ? "measured" : "estimated"} size="sm">
                {brief.revenueMode === "measured" ? "Revenue Medido (Shopify)" : "Revenue Estimado"}
              </Badge>
              {executed && (
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold flex items-center gap-1">
                  <CheckCircleIcon size={12} />
                  Ejecutado
                </span>
              )}
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {brief.pageTitle}
            </h1>
            <div className="text-xs font-mono text-brand-600 truncate max-w-xl">
              {brief.pageUrl}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyMarkdown}
              className="gap-1.5"
            >
              {copied ? (
                <>
                  <CheckCircleIcon size={14} className="text-emerald-600" />
                  <span>¡Copiado en Markdown!</span>
                </>
              ) : (
                <>
                  <ShareIcon size={14} />
                  <span>Copiar para Redactor</span>
                </>
              )}
            </Button>
            <Button
              variant={executed ? "outline" : "primary"}
              size="sm"
              onClick={() => setExecuted(!executed)}
              className="gap-1.5 shadow-sm"
            >
              <CheckCircleIcon size={14} />
              {executed ? "Marcar como Pendiente" : "Marcar como Ejecutado"}
            </Button>
          </div>
        </div>

        {/* AI Disclaimer & Cause diagnosis badge */}
        <div className="p-3.5 rounded-lg bg-blue-50/70 border border-blue-200/80 flex items-start gap-3">
          <SparklesIcon size={18} className="text-brand-600 shrink-0 mt-0.5" />
          <div className="text-xs text-brand-950 leading-relaxed">
            <strong>Plan redactado por Claude IA específico a la causa: </strong>
            <span className="underline decoration-brand-400 font-medium">{brief.cause}</span>.
            El prompt de optimización no genera recomendaciones genéricas; ataca directamente los factores que produjeron la anomalía detectada.
          </div>
        </div>

        {/* Impact Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs border-t border-slate-100">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
            <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px] block">
              Dinero en Riesgo Mensual
            </span>
            <span className="text-base font-bold text-slate-900 mt-0.5 block">
              {formatCurrency(brief.revenueAtRisk)} USD
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              {brief.confidenceMargin}
            </span>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
            <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px] block">
              Estado de Verificación
            </span>
            <span className="text-base font-bold text-slate-900 mt-0.5 block">
              {executed ? "Monitoreando Checkpoints" : "En Redacción"}
            </span>
            <span className="text-[10px] text-slate-500">
              {executed ? "Checkpoints a 28, 60 y 90 días" : "Pendiente de publicación"}
            </span>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
            <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px] block">
              Longitud Sugerida
            </span>
            <span className="text-base font-bold text-slate-900 mt-0.5 block">
              {brief.actionPlan.recommendedWordCount.recommended} palabras
            </span>
            <span className="text-[10px] text-slate-500">
              Actual: {brief.actionPlan.recommendedWordCount.current} (+{brief.actionPlan.recommendedWordCount.recommended - brief.actionPlan.recommendedWordCount.current} palabras)
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 cols): Diagnosis + Keywords + Structure */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section 1: Diagnosis & Objective */}
          <Card>
            <CardHeader className="border-b border-slate-100 pb-3">
              <CardTitle className="text-sm uppercase tracking-wide text-slate-500 font-bold">
                1. Diagnóstico & Objetivo de Recuperación
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 space-y-4 text-xs">
              <div>
                <span className="font-semibold text-slate-900 block mb-1">
                  Diagnóstico Técnico:
                </span>
                <p className="text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                  {brief.actionPlan.diagnosis}
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-900 block mb-1">
                  Objetivo Específico:
                </span>
                <p className="text-slate-600 leading-relaxed bg-blue-50/40 p-3 rounded-lg border border-blue-100 text-brand-950 font-medium">
                  {brief.actionPlan.objective}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Missing Keywords with Intent */}
          <Card>
            <CardHeader className="border-b border-slate-100 pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm uppercase tracking-wide text-slate-500 font-bold">
                  2. Términos y Entidades Faltantes Detectados
                </CardTitle>
                <span className="text-[11px] text-slate-400">
                  Prioridad transaccional
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-5">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-semibold border-b border-slate-200">
                    <tr>
                      <th className="p-2.5">Término Faltante</th>
                      <th className="p-2.5">Intención</th>
                      <th className="p-2.5 text-right">Volumen Búsqueda</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-sans">
                    {brief.actionPlan.missingKeywords.map((kw, i) => (
                      <tr key={i} className="hover:bg-slate-50/60">
                        <td className="p-2.5 font-semibold text-slate-900 font-mono">
                          {kw.term}
                        </td>
                        <td className="p-2.5">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                              kw.intent === "Transaccional"
                                ? "bg-emerald-100 text-emerald-800"
                                : kw.intent === "Comercial"
                                ? "bg-blue-100 text-brand-800"
                                : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {kw.intent}
                          </span>
                        </td>
                        <td className="p-2.5 text-right font-mono text-slate-600">
                          {kw.volume.toLocaleString()} / mes
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Recommended Content Structure */}
          <Card>
            <CardHeader className="border-b border-slate-100 pb-3">
              <CardTitle className="text-sm uppercase tracking-wide text-slate-500 font-bold">
                3. Estructura Sugerida de Encabezados (H1, H2, H3)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5">
              <ul className="space-y-2.5 text-xs text-slate-700">
                {brief.actionPlan.contentStructure.map((struct, idx) => (
                  <li
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 font-mono text-[11px] flex items-start gap-2"
                  >
                    <span className="w-5 h-5 rounded bg-brand-100 text-brand-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="mt-0.5">{struct}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Right Column (1 col): Verification Timeline & Execution */}
        <div className="space-y-6">
          {/* Verification Timeline Card */}
          <Card className="border-brand-200">
            <CardHeader className="border-b border-slate-100 pb-3 bg-blue-50/30">
              <CardTitle className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldCheckIcon size={16} className="text-brand-600" />
                Seguimiento de Resultados
              </CardTitle>
              <p className="text-[11px] text-slate-500">
                Medición a 28, 60 y 90 días con descuento por estacionalidad.
              </p>
            </CardHeader>

            <CardContent className="p-5 space-y-4 text-xs">
              {/* Day 28 */}
              <div className="p-3 rounded-lg border border-slate-200 bg-white space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">Checkpoint 28 Días</span>
                  <Badge variant={brief.verification.day28.status === "completado" ? "measured" : "default"} size="sm">
                    {brief.verification.day28.status === "completado" ? "Completado" : "En curso"}
                  </Badge>
                </div>
                <p className="text-[11px] text-slate-500">
                  {brief.verification.day28.status === "completado"
                    ? `+$${brief.verification.day28.recovered} USD recuperados netos.`
                    : "Midiendo impacto inicial de indexación en Google."}
                </p>
                {brief.verification.day28.seasonalAdjusted && (
                  <span className="text-[10px] font-mono text-emerald-700 block">
                    {brief.verification.day28.seasonalAdjusted}
                  </span>
                )}
              </div>

              {/* Day 60 */}
              <div className="p-3 rounded-lg border border-slate-200 bg-white space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">Checkpoint 60 Días</span>
                  <Badge variant="neutral" size="sm">
                    {brief.verification.day60.status === "en_curso" ? "En curso" : "Pendiente"}
                  </Badge>
                </div>
                <p className="text-[11px] text-slate-500">
                  Consolidación de rankings y transacciones e-commerce.
                </p>
              </div>

              {/* Day 90 */}
              <div className="p-3 rounded-lg border border-slate-200 bg-white space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">Checkpoint 90 Días</span>
                  <Badge variant="neutral" size="sm">
                    Pendiente
                  </Badge>
                </div>
                <p className="text-[11px] text-slate-500">
                  Cierre de atribución trimestral definitiva para reporte.
                </p>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
                <InfoIcon size={14} className="text-slate-400 shrink-0" />
                <span>Si el mercado subió de forma global, se descuenta ese porcentaje para no inflar métricas.</span>
              </div>
            </CardContent>
          </Card>

          {/* Technical Notes Card */}
          {brief.actionPlan.technicalNotes && (
            <Card>
              <CardHeader className="border-b border-slate-100 pb-3">
                <CardTitle className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Notas Técnicas y de Deploy
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="space-y-2 text-xs text-slate-600">
                  {brief.actionPlan.technicalNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-brand-600 font-bold">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
