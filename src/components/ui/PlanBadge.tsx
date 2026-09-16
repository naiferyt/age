import React from "react";
import { cn } from "@/lib/utils";

export type PlanName = "Free" | "Solo" | "Tienda" | "Agencia" | "Studio";

const PLAN_STYLES: Record<PlanName, string> = {
  Free: "bg-slate-100 text-slate-600 border-slate-200",
  Solo: "bg-sky-50 text-sky-700 border-sky-200",
  Tienda: "bg-violet-50 text-violet-700 border-violet-200",
  Agencia: "bg-brand-50 text-brand-700 border-brand-200",
  Studio: "bg-amber-50 text-amber-800 border-amber-200",
};

interface PlanBadgeProps {
  plan: PlanName;
  size?: "sm" | "md";
  className?: string;
}

export const PlanBadge: React.FC<PlanBadgeProps> = ({ plan, size = "sm", className }) => {
  const sizes = {
    sm: "text-[10px] px-1.5 py-0.5",
    md: "text-xs px-2.5 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-semibold rounded-full border leading-normal whitespace-nowrap",
        PLAN_STYLES[plan],
        sizes[size],
        className
      )}
    >
      Plan {plan}
    </span>
  );
};
