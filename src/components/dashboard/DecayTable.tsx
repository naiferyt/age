"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SparklesIcon, InfoIcon } from "@/components/icons";
import { DEMO_DECAY_PAGES } from "@/lib/demo-data";
import { formatCurrency } from "@/lib/utils";

export const DecayTable: React.FC = () => {
  const [filterCause, setFilterCause] = useState<string>("Todas");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const causesList = [
    "Todas",
    "Contenido desactualizado",
    "Pérdida de posición",
    "Canibalización interna",
    "Estacionalidad / Demanda",
    "Competidor nuevo",
    "Problemas técnicos",
  ];

  const filteredPages = DEMO_DECAY_PAGES.filter((page) => {
    const matchesCause = filterCause === "Todas" || page.cause === filterCause;
    const matchesSearch =
      page.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.causeDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCause && matchesSearch;
  });

  return (
    <div id="decay-table" className="bg-white rounded-xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header and filters */}
      <div className="p-4 sm:p-6 border-b border-slate-200/80 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              Backlog de Páginas en Decay
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono">
                {filteredPages.length} URLs
              </span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Ordenadas prioritariamente por <strong className="text-slate-800">Dinero en Riesgo</strong>, no por clics perdidos.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 flex items-center gap-1">
              <InfoIcon size={14} className="text-slate-400" />
              8 diagnósticos automáticos
            </span>
          </div>
        </div>

        {/* Filter controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 text-xs">
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider mr-1 hidden sm:inline">
              Causa:
            </span>
            {causesList.map((cause) => (
              <button
                key={cause}
                onClick={() => setFilterCause(cause)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                  filterCause === cause
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cause}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64 shrink-0">
            <input
              type="text"
              placeholder="Buscar por URL o término..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider font-semibold border-b border-slate-200">
            <tr>
              <th className="p-4 w-1/3">Página y Diagnóstico</th>
              <th className="p-4">Causa Detectada</th>
              <th className="p-4">Tráfico (GSC)</th>
              <th className="p-4">Dinero en Riesgo</th>
              <th className="p-4">Prioridad</th>
              <th className="p-4 text-right">Acción IA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-sans">
            {filteredPages.map((page) => (
              <tr key={page.id} className="hover:bg-slate-50/70 transition-colors">
                {/* Page URL & Description */}
                <td className="p-4">
                  <div className="font-semibold text-slate-900 text-xs sm:text-sm">
                    {page.title}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5 truncate max-w-xs sm:max-w-sm">
                    {page.url}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 line-clamp-1 italic">
                    {page.causeDescription}
                  </div>
                </td>

                {/* Cause Badge */}
                <td className="p-4">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium border ${
                      page.cause === "Contenido desactualizado"
                        ? "bg-amber-50 text-amber-800 border-amber-200"
                        : page.cause === "Pérdida de posición"
                        ? "bg-blue-50 text-blue-800 border-blue-200"
                        : page.cause === "Canibalización interna"
                        ? "bg-purple-50 text-purple-800 border-purple-200"
                        : page.cause === "Estacionalidad / Demanda"
                        ? "bg-slate-100 text-slate-700 border-slate-200"
                        : page.cause === "Problemas técnicos"
                        ? "bg-rose-50 text-rose-800 border-rose-200"
                        : "bg-sky-50 text-sky-800 border-sky-200"
                    }`}
                  >
                    {page.cause}
                  </span>
                </td>

                {/* Traffic Drop */}
                <td className="p-4">
                  <div className="font-semibold text-rose-600">
                    {page.dropPercentage}%
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {page.currentClicks.toLocaleString()} vs {page.previousClicks.toLocaleString()} clics
                  </div>
                </td>

                {/* Money at risk with measured/estimated and confidence interval */}
                <td className="p-4">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                    <span>{formatCurrency(page.revenueAtRisk)}</span>
                    <Badge variant={page.revenueMode === "measured" ? "measured" : "estimated"} size="sm">
                      {page.revenueMode === "measured" ? "Medido" : "Estimado"}
                    </Badge>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5 font-mono">
                    {page.confidenceInterval}
                  </div>
                </td>

                {/* Priority */}
                <td className="p-4">
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                      page.priorityScore === "Alta"
                        ? "bg-red-100 text-red-800"
                        : page.priorityScore === "Media"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {page.priorityScore}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-4 text-right">
                  {page.briefId ? (
                    <Link href={`/dashboard/briefs/${page.briefId}`}>
                      <Button variant="primary" size="sm" className="gap-1 shadow-sm">
                        <SparklesIcon size={13} />
                        Ver Brief
                      </Button>
                    </Link>
                  ) : (
                    <Link href="/dashboard/briefs">
                      <Button variant="outline" size="sm" className="gap-1">
                        <SparklesIcon size={13} className="text-brand-600" />
                        Crear Brief
                      </Button>
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredPages.length === 0 && (
        <div className="p-8 text-center text-slate-500 text-sm">
          No se encontraron páginas con los filtros seleccionados.
        </div>
      )}
    </div>
  );
};
