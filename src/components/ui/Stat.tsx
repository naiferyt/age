import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface StatProps {
  label: string;
  value: string;
  helperText?: string;
  badge?: {
    text: string;
    variant: "measured" | "estimated" | "risk" | "default" | "neutral";
  };
  trend?: {
    value: string;
    isPositive: boolean;
    sublabel?: string;
  };
  confidenceMargin?: string;
  className?: string;
  icon?: React.ReactNode;
}

export const Stat: React.FC<StatProps> = ({
  label,
  value,
  helperText,
  badge,
  trend,
  confidenceMargin,
  className,
  icon,
}) => {
  return (
    <div
      className={cn(
        "bg-white border border-slate-200/90 rounded-xl p-5 shadow-card hover:border-slate-300 transition-all flex flex-col justify-between",
        className
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
          {label}
        </span>
        {icon && (
          <div className="p-2 rounded-lg bg-slate-50 text-slate-600 border border-slate-100">
            {icon}
          </div>
        )}
      </div>

      <div className="mt-3">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-sans">
            {value}
          </span>
          {badge && (
            <Badge variant={badge.variant} size="sm">
              {badge.variant === "measured" && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              )}
              {badge.variant === "estimated" && (
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              )}
              {badge.text}
            </Badge>
          )}
        </div>

        {trend && (
          <div className="flex items-center gap-1.5 mt-2 text-xs font-medium">
            <span
              className={trend.isPositive ? "text-emerald-600" : "text-rose-600"}
            >
              {trend.value}
            </span>
            {trend.sublabel && (
              <span className="text-slate-400 font-normal">{trend.sublabel}</span>
            )}
          </div>
        )}

        {confidenceMargin && (
          <div className="mt-2 text-[11px] text-slate-500 flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Margen: {confidenceMargin}</span>
          </div>
        )}

        {helperText && (
          <p className="mt-1 text-xs text-slate-500 leading-relaxed">
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
};
