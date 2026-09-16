import React from "react";
import Link from "next/link";
import { DashHeader } from "@/components/dashboard/DashHeader";
import { KPIRow } from "@/components/dashboard/KPIRow";
import { DecayTable } from "@/components/dashboard/DecayTable";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SparklesIcon, ArrowRightIcon } from "@/components/icons";
import { DEMO_BRIEFS } from "@/lib/demo-data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Top Header */}
      <DashHeader
        title="zapatoslatam.com"
        subtitle="Auditoría continua de tráfico en caída y recuperación de revenue orgánico."
        badgeText="Revenue Medido (Shopify API)"
        badgeVariant="measured"
      />

      {/* KPI Row (Separating Risk vs Recovered) */}
      <KPIRow
        siteRevenueMode="measured"
        revenueAtRisk={8420}
        revenueRecovered={14250}
        decayCount={6}
        briefsCount={3}
        confidenceMargin="±4.8% (Shopify Direct API)"
      />

      {/* Main Grid: Chart + Recent AI Briefs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart (2 cols) */}
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>

        {/* Recent AI Briefs Quick Widget (1 col) */}
        <Card className="flex flex-col justify-between">
          <div>
            <CardHeader className="border-b border-slate-100 pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-1.5">
                  <SparklesIcon size={16} className="text-brand-600" />
                  Briefs Activos de IA
                </CardTitle>
                <Link
                  href="/dashboard/briefs"
                  className="text-xs text-brand-600 hover:text-brand-700 font-semibold flex items-center gap-0.5"
                >
                  Ver todos
                  <ArrowRightIcon size={12} />
                </Link>
              </div>
            </CardHeader>

            <CardContent className="p-4 space-y-3">
              {DEMO_BRIEFS.map((brief) => (
                <Link
                  key={brief.id}
                  href={`/dashboard/briefs/${brief.id}`}
                  className="block p-3 rounded-lg border border-slate-200/80 hover:border-brand-500/60 hover:bg-slate-50/60 transition-all group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-xs font-semibold text-slate-900 group-hover:text-brand-600 truncate block">
                        {brief.pageTitle}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono truncate block mt-0.5">
                        {brief.pageUrl}
                      </span>
                    </div>
                    <Badge
                      variant={
                        brief.status === "verificado_28d"
                          ? "measured"
                          : brief.status === "ejecutado"
                          ? "default"
                          : "estimated"
                      }
                      size="sm"
                    >
                      {brief.status === "verificado_28d"
                        ? "Verificado"
                        : brief.status === "ejecutado"
                        ? "Ejecutado"
                        : "En progreso"}
                    </Badge>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 pt-1.5">
                    <span className="text-slate-600 font-medium">
                      Causa: {brief.cause}
                    </span>
                    <span className="font-bold text-slate-900">
                      ${brief.revenueAtRisk} en riesgo
                    </span>
                  </div>
                </Link>
              ))}
            </CardContent>
          </div>

          <div className="p-4 border-t border-slate-100 bg-slate-50/50 rounded-b-xl">
            <Link href="/dashboard/briefs" className="block w-full">
              <Button variant="outline" size="sm" className="w-full gap-1.5 text-xs">
                <SparklesIcon size={13} className="text-brand-600" />
                Crear Brief con IA para otra URL
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* Decay Pages Backlog Table */}
      <DecayTable />
    </div>
  );
}
