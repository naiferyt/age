"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DashHeader } from "@/components/dashboard/DashHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import {
  ArrowRightIcon,
  CalendarIcon,
} from "@/components/icons";
import { DEMO_BRIEFS } from "@/lib/demo-data";
import { formatCurrency } from "@/lib/utils";

export default function BriefsListPage() {
  const [filterStatus, setFilterStatus] = useState<string>("todos");

  const filteredBriefs = DEMO_BRIEFS.filter((brief) => {
    if (filterStatus === "todos") return true;
    if (filterStatus === "verificado") return brief.status.startsWith("verificado");
    return brief.status === filterStatus;
  });

  return (
    <div className="space-y-6">
      <DashHeader
        title="Briefs Quirúrgicos de IA"
        subtitle="Planes de acción específicos redactados por Claude IA para revertir cada causa de decay."
        badgeText="Modelo: Claude 3.5 Sonnet"
        badgeVariant="default"
      />

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto text-xs font-medium">
        {[
          { id: "todos", label: "Todos los briefs", count: DEMO_BRIEFS.length },
          { id: "en_progreso", label: "En redacción / progreso", count: 1 },
          { id: "ejecutado", label: "Ejecutados (En monitoreo)", count: 1 },
          { id: "verificado", label: "Verificados con Revenue ($)", count: 1 },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterStatus(tab.id)}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              filterStatus === tab.id
                ? "bg-slate-900 text-white font-semibold shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                filterStatus === tab.id ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-500"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Briefs Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredBriefs.map((brief) => (
          <Card
            key={brief.id}
            className="hover:border-slate-300 transition-all shadow-card flex flex-col justify-between"
          >
            <div>
              <CardHeader className="border-b border-slate-100 pb-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono text-slate-400">
                        ID: {brief.id}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1">
                        <CalendarIcon size={12} />
                        Creado: {brief.createdAt}
                      </span>
                    </div>
                    <CardTitle className="text-base text-slate-900">
                      {brief.pageTitle}
                    </CardTitle>
                    <div className="text-xs font-mono text-slate-500 mt-0.5 truncate">
                      {brief.pageUrl}
                    </div>
                  </div>

                  <Badge
                    variant={
                      brief.status.startsWith("verificado")
                        ? "measured"
                        : brief.status === "ejecutado"
                        ? "default"
                        : "estimated"
                    }
                    size="md"
                  >
                    {brief.status.startsWith("verificado")
                      ? "Verificado en Dinero"
                      : brief.status === "ejecutado"
                      ? "Ejecutado (Monitoreando)"
                      : "En Redacción"}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-5 space-y-4 text-xs">
                {/* Cause and money impact */}
                <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold block">
                      Causa Diagnosticada
                    </span>
                    <span className="font-semibold text-slate-800 text-xs mt-0.5 block">
                      {brief.cause}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold block">
                      Dinero en Riesgo
                    </span>
                    <span className="font-bold text-slate-900 text-xs mt-0.5 block">
                      {formatCurrency(brief.revenueAtRisk)} USD
                    </span>
                  </div>
                </div>

                {/* Objective */}
                <div>
                  <span className="text-slate-500 font-semibold block mb-1">
                    Objetivo del Brief:
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    {brief.actionPlan.objective}
                  </p>
                </div>

                {/* Verification checkpoints */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold block mb-2">
                    Seguimiento de Resultados (Día 28, 60 y 90):
                  </span>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div
                      className={`p-2 rounded border ${
                        brief.verification.day28.status === "completado"
                          ? "bg-emerald-50 border-emerald-200 text-emerald-800 font-semibold"
                          : brief.verification.day28.status === "en_curso"
                          ? "bg-blue-50 border-blue-200 text-brand-700 font-semibold"
                          : "bg-slate-50 border-slate-200 text-slate-400"
                      }`}
                    >
                      <div>Día 28</div>
                      <div className="text-[10px] mt-0.5 font-normal">
                        {brief.verification.day28.status === "completado"
                          ? `+$${brief.verification.day28.recovered} USD`
                          : brief.verification.day28.status === "en_curso"
                          ? "En curso"
                          : "Pendiente"}
                      </div>
                    </div>

                    <div
                      className={`p-2 rounded border ${
                        brief.verification.day60.status === "completado"
                          ? "bg-emerald-50 border-emerald-200 text-emerald-800 font-semibold"
                          : brief.verification.day60.status === "en_curso"
                          ? "bg-blue-50 border-blue-200 text-brand-700 font-semibold"
                          : "bg-slate-50 border-slate-200 text-slate-400"
                      }`}
                    >
                      <div>Día 60</div>
                      <div className="text-[10px] mt-0.5 font-normal">
                        {brief.verification.day60.status === "en_curso"
                          ? "En curso"
                          : "Pendiente"}
                      </div>
                    </div>

                    <div
                      className={`p-2 rounded border ${
                        brief.verification.day90.status === "completado"
                          ? "bg-emerald-50 border-emerald-200 text-emerald-800 font-semibold"
                          : "bg-slate-50 border-slate-200 text-slate-400"
                      }`}
                    >
                      <div>Día 90</div>
                      <div className="text-[10px] mt-0.5 font-normal">Pendiente</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">
                Redactado con Claude IA
              </span>
              <Link href={`/dashboard/briefs/${brief.id}`}>
                <Button variant="primary" size="sm" className="gap-1 shadow-sm">
                  <span>Abrir Plan de Acción</span>
                  <ArrowRightIcon size={13} />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
