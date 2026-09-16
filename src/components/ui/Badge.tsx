import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "measured" | "estimated" | "risk" | "outline" | "neutral";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  size = "sm",
  className,
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center font-medium rounded-full";

  const variants = {
    default: "bg-brand-50 text-brand-700 border border-brand-200",
    measured: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    estimated: "bg-amber-50 text-amber-800 border border-amber-200",
    risk: "bg-rose-50 text-rose-700 border border-rose-200",
    outline: "bg-transparent text-slate-700 border border-slate-200",
    neutral: "bg-slate-100 text-slate-700 border border-slate-200",
  };

  const sizes = {
    sm: "text-[11px] px-2 py-0.5 gap-1 leading-normal",
    md: "text-xs px-2.5 py-1 gap-1.5 leading-normal",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
};
