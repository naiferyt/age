"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowRightIcon,
  SparklesIcon,
  SearchConsoleIcon,
  ShopifyIcon,
  TrendingDownIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { GradientBlob } from "@/components/decorative/GradientBlob";
import { GridPattern } from "@/components/decorative/GridPattern";

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"riesgo" | "brief" | "resultado">("riesgo");

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200/60 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <GridPattern />
      <GradientBlob className="top-[-100px] left-1/2 -translate-x-1/2 w-[550px] h-[350px]" />

      <Container size="xl" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          {/* Transparent beta badge - no fake numbers */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-brand-700 text-xs font-semibold shadow-subtle">
            <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
            <span>Beta pública para Agencias SEO y E-commerce</span>
            <span className="text-blue-300">|</span>
            <span className="text-slate-600 font-normal">Cero métricas vanidosas</span>
          </div>

          {/* Punchy outcome-first headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
            Deja de reportar clics. <br className="hidden sm:inline" />
            Demuestra el{" "}
            <span className="bg-gradient-to-r from-brand-600 to-sky-600 bg-clip-text text-transparent">
              revenue real recuperado
            </span>{" "}
            en dólares.
          </h1>

          {/* Subheadline addressing the pain */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
            Las agencias SEO pierden hasta el{" "}
            <strong className="text-slate-900 font-semibold">~38% de sus clientes al año</strong>{" "}
            por reportar en posiciones e impresiones mientras el cliente presupuesta en dinero.
            Agency Growth Engine detecta páginas en caída, genera el brief con IA y mide
            cuántos dólares recuperó cada cambio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto pt-2">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-elevated group">
                Explorar Dashboard Demo
                <ArrowRightIcon
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
            <Link href="/precios" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Ver los 5 Planes (Desde $0)
              </Button>
            </Link>
          </div>

          {/* Honest Micro-guarantees (No fake logos) */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheckIcon size={16} className="text-emerald-600" />
              <span>Etiquetas visibles: Medido vs Estimado</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              <span>Ajuste estadístico por estacionalidad</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>Sin proyecciones inventadas</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Product UI Mockup (Product-First) */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-sm shadow-elevated overflow-hidden">
            {/* Mockup Header Bar */}
            <div className="flex items-center justify-between border-b border-slate-200/80 px-4 sm:px-6 py-3.5 bg-slate-50/90">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
                <span className="ml-3 text-xs font-mono text-slate-500 hidden sm:inline">
                  app.agencygrowth.engine/site/zapatoslatam.com
                </span>
              </div>

              {/* Connected Source Indicators */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-xs text-slate-600 font-medium">
                  <SearchConsoleIcon size={16} />
                  <span className="hidden sm:inline">Search Console:</span>
                  <span className="text-emerald-600 font-semibold">Conectado</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-600 font-medium">
                  <ShopifyIcon size={16} />
                  <span className="hidden sm:inline">Shopify:</span>
                  <Badge variant="measured" size="sm">
                    Revenue Medido
                  </Badge>
                </div>
              </div>
            </div>

            {/* Interactive Loop Tabs */}
            <div className="flex border-b border-slate-200 bg-slate-50/50 text-xs font-medium text-slate-600 px-4 sm:px-6">
              <button
                onClick={() => setActiveTab("riesgo")}
                className={`py-3 px-3 sm:px-4 border-b-2 font-semibold transition-colors flex items-center gap-2 ${
                  activeTab === "riesgo"
                    ? "border-brand-600 text-brand-600 bg-white"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <TrendingDownIcon size={15} />
                <span>1. Páginas en Riesgo ($)</span>
              </button>
              <button
                onClick={() => setActiveTab("brief")}
                className={`py-3 px-3 sm:px-4 border-b-2 font-semibold transition-colors flex items-center gap-2 ${
                  activeTab === "brief"
                    ? "border-brand-600 text-brand-600 bg-white"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <SparklesIcon size={15} />
                <span>2. Brief de IA Generado</span>
              </button>
              <button
                onClick={() => setActiveTab("resultado")}
                className={`py-3 px-3 sm:px-4 border-b-2 font-semibold transition-colors flex items-center gap-2 ${
                  activeTab === "resultado"
                    ? "border-brand-600 text-brand-600 bg-white"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <ShieldCheckIcon size={15} />
                <span>3. Verificación a 60 días ($)</span>
              </button>
            </div>

            {/* Mockup Dynamic Content */}
            <div className="p-4 sm:p-6 bg-white">
              {activeTab === "riesgo" && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">
                        Páginas ordenadas por Dinero en Riesgo (no por clics perdidos)
                      </h4>
                      <p className="text-xs text-slate-500">
                        Prioriza primero lo que más factura tu cliente. Margen de confianza calculado: ±4.8%.
                      </p>
                    </div>
                    <Badge variant="risk" size="sm">
                      $8,420 USD en riesgo activo
                    </Badge>
                  </div>

                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider font-semibold border-b border-slate-200">
                        <tr>
                          <th className="p-3">Página URL</th>
                          <th className="p-3">Diagnóstico (8 causas)</th>
                          <th className="p-3">Tráfico</th>
                          <th className="p-3">Dinero en Riesgo</th>
                          <th className="p-3 text-right">Acción</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-sans">
                        <tr className="hover:bg-slate-50/80">
                          <td className="p-3 font-medium text-slate-900">
                            /zapatillas-running-hombre
                            <div className="text-[11px] text-slate-400 font-normal">
                              Colección amortiguación
                            </div>
                          </td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-medium text-[11px] border border-amber-200">
                              Contenido desactualizado
                            </span>
                          </td>
                          <td className="p-3 text-rose-600 font-semibold">
                            -54.5% (-2,630 clics)
                          </td>
                          <td className="p-3">
                            <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                              $2,840
                              <Badge variant="measured" size="sm">
                                Medido
                              </Badge>
                            </div>
                            <div className="text-[10px] text-slate-400">[$2,690 - $2,990]</div>
                          </td>
                          <td className="p-3 text-right">
                            <Link href="/dashboard/briefs/brief-101">
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-brand-600 text-white font-semibold text-xs hover:bg-brand-700 cursor-pointer">
                                <SparklesIcon size={12} />
                                Ver Brief IA
                              </span>
                            </Link>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50/80">
                          <td className="p-3 font-medium text-slate-900">
                            /botas-impermeables-montana
                            <div className="text-[11px] text-slate-400 font-normal">
                              Calzado outdoor
                            </div>
                          </td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded bg-blue-50 text-brand-700 font-medium text-[11px] border border-blue-200">
                              Pérdida de posición
                            </span>
                          </td>
                          <td className="p-3 text-rose-600 font-semibold">
                            -48.4% (-1,550 clics)
                          </td>
                          <td className="p-3">
                            <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                              $1,950
                              <Badge variant="measured" size="sm">
                                Medido
                              </Badge>
                            </div>
                            <div className="text-[10px] text-slate-400">[$1,820 - $2,080]</div>
                          </td>
                          <td className="p-3 text-right">
                            <Link href="/dashboard/briefs">
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-slate-200 text-slate-700 font-medium text-xs hover:bg-slate-100 cursor-pointer">
                                Generar Brief
                              </span>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "brief" && (
                <div className="space-y-3 animate-fade-in text-left">
                  <div className="p-4 rounded-lg bg-blue-50/70 border border-blue-200/70 flex items-start gap-3">
                    <SparklesIcon size={18} className="text-brand-600 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-brand-900 uppercase tracking-wide">
                        Plan de acción generado por Claude IA para /zapatillas-running-hombre
                      </h4>
                      <p className="text-xs text-brand-800 mt-0.5">
                        Causa: <strong>Contenido desactualizado</strong>. El brief incluye entidades de amortiguación 2026 y estructura de títulos H2/H3 con intención transaccional.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/50">
                      <span className="font-semibold text-slate-900 block mb-1">
                        Términos clave faltantes detectados:
                      </span>
                      <ul className="space-y-1 text-slate-600 font-mono text-[11px]">
                        <li>• mejores zapatillas running asfalto 2026 (Vol: 1,600)</li>
                        <li>• zapatillas running amortiguacion neutra (Vol: 880)</li>
                        <li>• drop zapatillas correr peso ligero (Vol: 540)</li>
                      </ul>
                    </div>
                    <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/50">
                      <span className="font-semibold text-slate-900 block mb-1">
                        Longitud y estructura recomendada:
                      </span>
                      <div className="text-slate-600">
                        <div>Palabras actuales: <strong className="text-slate-900">1,120</strong></div>
                        <div>Recomendadas para superar al top 3: <strong className="text-emerald-700">1,850</strong></div>
                        <div className="mt-1 text-[11px] text-slate-500">Incluye marcado Schema FAQPage para SERP snippet enriquecido.</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "resultado" && (
                <div className="space-y-4 animate-fade-in text-left">
                  <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <ShieldCheckIcon size={18} className="text-emerald-700" />
                        <span className="text-xs font-bold text-emerald-950 uppercase tracking-wide">
                          Resultado verificado a 60 días
                        </span>
                        <Badge variant="measured" size="sm">
                          Medido con Shopify API
                        </Badge>
                      </div>
                      <p className="text-xs text-emerald-800 mt-1">
                        Descontado estadísticamente el +4.1% de incremento general del mercado por estacionalidad.
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-emerald-800 font-medium block">Revenue neto recuperado:</span>
                      <span className="text-2xl font-bold text-emerald-900 font-sans">
                        +$5,680 USD
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                    <span>Línea del reporte para cliente:</span>
                    <span className="font-mono text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
                      &quot;Arreglo #101 recuperó $5,680 USD (Intervalo: $5,410 - $5,950)&quot;
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
