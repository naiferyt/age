"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckCircleIcon, SparklesIcon, ShieldCheckIcon } from "@/components/icons";
import { DEMO_PLANS } from "@/lib/demo-data";

export const PricingSection: React.FC = () => {
  const [annualBilling, setAnnualBilling] = useState(false);

  return (
    <section id="precios" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <Container size="xl">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Badge variant="default" size="md">
            Precios Claros y Transparentes
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Diseñado para pagar su costo con el primer brief recuperado
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Planes individuales para una tienda o marca, y planes de agencia con gestión multicliente y marca blanca.
          </p>

          {/* Billing Interval Toggle */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span
              className={`text-xs font-semibold cursor-pointer ${
                !annualBilling ? "text-slate-950" : "text-slate-400"
              }`}
              onClick={() => setAnnualBilling(false)}
            >
              Facturación Mensual
            </span>
            <button
              type="button"
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500"
              role="switch"
              aria-checked={annualBilling}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                  annualBilling ? "translate-x-5 bg-brand-600" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-xs font-semibold flex items-center gap-1.5 cursor-pointer ${
                annualBilling ? "text-slate-950" : "text-slate-400"
              }`}
              onClick={() => setAnnualBilling(true)}
            >
              Facturación Anual
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                Ahorra 20%
              </span>
            </span>
          </div>
        </div>

        {/* Scope disclaimer callout */}
        <div className="max-w-xl mx-auto mt-6 text-center text-xs text-slate-500 bg-white border border-slate-200/80 rounded-lg p-3">
          <strong className="text-slate-800">Nota clave de arquitectura:</strong> Los planes <strong>Free, Solo y Tienda</strong> son para 1 solo negocio. Los planes <strong>Agencia y Studio</strong> gestionan carteras completas de múltiples clientes con permisos y marca blanca.
        </div>

        {/* 5 Plans Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
          {DEMO_PLANS.map((plan) => {
            const price = annualBilling ? plan.priceAnnualMonthly : plan.priceMonthly;
            const isAnchor = plan.isAnchor;

            return (
              <div
                key={plan.id}
                className={`rounded-xl bg-white border p-5 flex flex-col justify-between transition-all relative ${
                  isAnchor
                    ? "border-brand-600 shadow-elevated ring-2 ring-brand-500/20 lg:-translate-y-2"
                    : "border-slate-200 shadow-card hover:border-slate-300"
                }`}
              >
                {isAnchor && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-brand-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                      <SparklesIcon size={10} />
                      Plan Ancla Recomendado
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-slate-950">{plan.name}</h3>
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {plan.targetAudience}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px] leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-slate-950">
                        ${price}
                      </span>
                      <span className="text-xs text-slate-500">
                        USD / mes
                      </span>
                    </div>
                    {annualBilling && price > 0 && (
                      <span className="text-[10px] text-emerald-600 font-medium block">
                        Facturado anualmente
                      </span>
                    )}
                  </div>

                  {/* Limits Highlights */}
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] space-y-1 text-slate-700">
                    <div><strong>Sitios:</strong> {plan.limits.sites}</div>
                    <div><strong>Briefs:</strong> {plan.limits.briefsPerMonth}</div>
                    <div><strong>Capa:</strong> {plan.limits.revenueLayer}</div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-2 pt-2 text-xs">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Incluye:
                    </span>
                    <ul className="space-y-2 text-slate-600">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircleIcon size={14} className="text-brand-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link href="/onboarding" className="w-full block">
                    <Button
                      variant={isAnchor ? "primary" : "outline"}
                      size="sm"
                      className="w-full"
                    >
                      {plan.ctaText}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Checkout Provider Context */}
        <div className="mt-12 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-1.5">
            <ShieldCheckIcon size={16} className="text-slate-400" />
            <span>Facturación global segura procesada por LemonSqueezy</span>
          </div>
          <div>• Cancelación en cualquier momento con un clic</div>
          <div>• Sin contratos anuales forzosos</div>
        </div>
      </Container>
    </section>
  );
};
