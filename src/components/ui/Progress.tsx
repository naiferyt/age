import React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number; // 0 to 100
  max?: number;
  label?: string;
  variant?: "brand" | "measured" | "estimated" | "risk";
  size?: "sm" | "md";
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  label,
  variant = "brand",
  size = "md",
  className,
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const variantColors = {
    brand: "bg-brand-600",
    measured: "bg-emerald-600",
    estimated: "bg-amber-500",
    risk: "bg-rose-500",
  };

  const heights = {
    sm: "h-1.5",
    md: "h-2.5",
  };

  return (
    <div className={cn("w-full space-y-1", className)}>
      {label && (
        <div className="flex justify-between text-xs text-slate-600 font-medium">
          <span>{label}</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={cn("w-full rounded-full bg-slate-100 overflow-hidden", heights[size])}>
        <div
          className={cn("h-full rounded-full transition-all duration-500", variantColors[variant])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
