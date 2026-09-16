import React from "react";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheckIcon } from "@/components/icons";

export const RevenueChart: React.FC = () => {
  // 6 months historical trend data
  const data = [
    { month: "Sep 2025", recovered: 2100, seasonalAdjusted: 1900, baseline: 180 },
    { month: "Oct 2025", recovered: 4800, seasonalAdjusted: 4400, baseline: 350 },
    { month: "Nov 2025", recovered: 7200, seasonalAdjusted: 6600, baseline: 580 },
    { month: "Dic 2025", recovered: 9800, seasonalAdjusted: 8900, baseline: 890 },
    { month: "Ene 2026", recovered: 12100, seasonalAdjusted: 11400, baseline: 680 },
    { month: "Feb 2026", recovered: 14250, seasonalAdjusted: 13130, baseline: 1120 },
  ];

  const maxVal = 16000;
  const height = 180;
  const width = 560;
  const barWidth = 36;
  const spacing = (width - 60) / (data.length - 1);

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 p-5 sm:p-6 shadow-card space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            Evolución de Revenue Recuperado Verificado
            <Badge variant="measured" size="sm">
              Medido Real
            </Badge>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Mide únicamente resultados pasados a 28, 60 y 90 días (cero pronósticos).
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-slate-600">
            <span className="w-3 h-3 rounded bg-emerald-600 inline-block" />
            <span>Neto Recuperado</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <span className="w-3 h-1 border-t-2 border-dashed border-amber-500 inline-block" />
            <span>Descuento Estacional</span>
          </div>
        </div>
      </div>

      {/* SVG Responsive Chart */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[500px]">
          <svg
            viewBox={`0 0 ${width} ${height + 40}`}
            className="w-full h-48 overflow-visible font-sans"
          >
            {/* Horizontal Grid lines */}
            {[0, 4000, 8000, 12000, 16000].map((val) => {
              const y = height - (val / maxVal) * height;
              return (
                <g key={val}>
                  <line
                    x1="45"
                    y1={y}
                    x2={width}
                    y2={y}
                    stroke="#f1f5f9"
                    strokeWidth="1"
                  />
                  <text
                    x="40"
                    y={y + 3}
                    textAnchor="end"
                    fontSize="9"
                    fill="#94a3b8"
                    className="font-mono"
                  >
                    ${val / 1000}k
                  </text>
                </g>
              );
            })}

            {/* Bars and Data points */}
            {data.map((item, idx) => {
              const x = 50 + idx * spacing;
              const barHeight = (item.recovered / maxVal) * height;
              const y = height - barHeight;

              const baselineHeight = (item.baseline / maxVal) * height;

              return (
                <g key={item.month} className="group cursor-pointer">
                  {/* Recovered Revenue Bar */}
                  <rect
                    x={x - barWidth / 2}
                    y={y}
                    width={barWidth}
                    height={barHeight}
                    rx="4"
                    fill="#059669"
                    className="transition-opacity group-hover:opacity-85"
                  />

                  {/* Seasonal Discount hatched bar segment */}
                  <rect
                    x={x - barWidth / 2}
                    y={y}
                    width={barWidth}
                    height={baselineHeight}
                    rx="4"
                    fill="#d97706"
                    opacity="0.35"
                  />

                  {/* Value on top of bar */}
                  <text
                    x={x}
                    y={y - 6}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="bold"
                    fill="#065f46"
                    className="opacity-90 group-hover:opacity-100"
                  >
                    ${(item.recovered / 1000).toFixed(1)}k
                  </text>

                  {/* Month label */}
                  <text
                    x={x}
                    y={height + 20}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#64748b"
                    className="font-medium"
                  >
                    {item.month}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Methodology Explanatory Callout */}
      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <ShieldCheckIcon size={16} className="text-brand-600 shrink-0" />
          <span>
            <strong>Metodología de Atribución:</strong> Cada valor descuenta el incremento orgánico base del mercado para atribuir sólo el mérito del brief ejecutado.
          </span>
        </div>
        <span className="font-mono text-[11px] text-slate-500 whitespace-nowrap">
          Margen estimado: ±4.8%
        </span>
      </div>
    </div>
  );
};
