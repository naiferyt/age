import React from "react";
import { Badge } from "./Badge";
import { formatCurrency } from "@/lib/utils";

interface RevenueBadgeProps {
  amount: number;
  mode: "measured" | "estimated";
  size?: "sm" | "md" | "lg";
  confidenceMargin?: string;
  showConfidenceInline?: boolean;
}

export const RevenueBadge: React.FC<RevenueBadgeProps> = ({
  amount,
  mode,
  size = "md",
  confidenceMargin,
  showConfidenceInline = false,
}) => {
  const isMeasured = mode === "measured";

  const sizeStyles = {
    sm: "text-sm font-semibold",
    md: "text-base font-semibold",
    lg: "text-2xl font-bold tracking-tight",
  };

  return (
    <div className="inline-flex flex-col gap-0.5">
      <div className="inline-flex items-center gap-2">
        <span className={sizeStyles[size]}>{formatCurrency(amount)}</span>
        <Badge
          variant={isMeasured ? "measured" : "estimated"}
          size={size === "lg" ? "md" : "sm"}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isMeasured ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
            }`}
          />
          {isMeasured ? "Medido" : "Estimado"}
        </Badge>
      </div>
      {showConfidenceInline && confidenceMargin && (
        <span className="text-[11px] text-slate-500 font-normal">
          {confidenceMargin}
        </span>
      )}
    </div>
  );
};
