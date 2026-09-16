"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SparklesIcon, ShareIcon } from "@/components/icons";

interface DashHeaderProps {
  title: string;
  subtitle?: string;
  badgeText?: string;
  badgeVariant?: "measured" | "estimated" | "default" | "neutral";
  actions?: React.ReactNode;
}

export const DashHeader: React.FC<DashHeaderProps> = ({
  title,
  subtitle,
  badgeText = "Revenue Medido (Shopify)",
  badgeVariant = "measured",
  actions,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
      <div className="space-y-1">
        <div className="flex items-center gap-2.5 flex-wrap">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            {title}
          </h1>
          {badgeText && (
            <Badge variant={badgeVariant} size="sm">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  badgeVariant === "measured" ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                }`}
              />
              {badgeText}
            </Badge>
          )}
        </div>
        {subtitle && <p className="text-xs sm:text-sm text-slate-500">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-2.5 flex-wrap">
        {actions || (
          <>
            <Link href="/dashboard/reportes">
              <Button variant="outline" size="sm" className="gap-1.5">
                <ShareIcon size={14} />
                <span className="hidden sm:inline">Vista</span> Cliente
              </Button>
            </Link>
            <Link href="/dashboard/briefs">
              <Button variant="primary" size="sm" className="gap-1.5">
                <SparklesIcon size={14} />
                Generar Brief IA
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
