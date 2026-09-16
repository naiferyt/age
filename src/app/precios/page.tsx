"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CheckCircleIcon, XIcon, SparklesIcon, ShieldCheckIcon } from "@/components/icons";
import { DEMO_PLANS } from "@/lib/demo-data";

export default function PreciosPage() {
  const [annualBilling, setAnnualBilling] = useState(false);

  const featureMatrix = [
    {
      category: "Capacidad y Sitios",
      items: [
        { name: "Sitios / Dominios web", free: "1 sitio", solo: "1 sitio", tienda: "1 sitio", agencia: "10 sitios", studio: "30 sitios" },
        { name: "Clientes gestionables", free: "1 (Personal)", solo: "1 (Personal)", tienda: "1 (Personal)", agencia: "10 clientes", studio: "30 clientes" },
        { name: "Briefs con IA mensuales", free: "3 / mes", solo: "15 / mes", tienda: "40 / mes", agencia: "Ilimitados", studio: "Ilimitados" },
      ],
    },
    {
      category: "Capa Financiera y Atribución",
      items: [
        { name: "Capa de Revenue en dinero", free: "Solo tráfico", solo: "Estimado (Parámetros)", tienda: "Medido (Integración)", agencia: "Medido (Todas)", studio: "Medido (Todas)" },
        { name: "Integración Shopify / WooCommerce", free: false, solo: false, tienda: true, agencia: true, studio: true },
        { name: "Integración GA4 e-commerce", free: false, solo: false, tienda: true, agencia: true, studio: true },
        { name: "Cálculo de AOV y conversión propio", free: false, solo: true, tienda: true, agencia: true, studio: true },
        { name: "Verificación a 28 días", free: false, solo: true, tienda: true, agencia: true, studio: true },
        { name: "Verificación a 60 y 90 días", free: false, solo: false, tienda: true, agencia: true, studio: true },
        { name: "Descuento estadístico por estacionalidad", free: false, solo: false, tienda: true, agencia: true, studio: true },
      ],
    },
    {
      category: "Agencia y Marca Blanca",
      items: [
        { name: "Reportes en PDF exportables", free: false, solo: true, tienda: true, agencia: true, studio: true },
        { name: "Portal de cliente (Solo lectura)", free: false, solo: false, tienda: false, agencia: true, studio: true },
        { name: "White-label (Logo y colores de tu agencia)", free: false, solo: false, tienda: false, agencia: true, studio: true },
        { name: "Dominio personalizado de cliente", free: false, solo: false, tienda: false, agencia: true, studio: true },
        { name: "Acceso a API REST", free: false, solo: false, tienda: false, agencia: false, studio: true },
        { name: "Soporte dedicado", free: "Comunidad", solo: "Email", tienda: "Prioritario", agencia: "Slack / WhatsApp", studio: "1 a 1 + SLA" },
      ],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <section className="pt-16 pb-12 bg-slate-50 border-b border-slate-200">
        <Container size="xl" className="text-center space-y-4">
          <Badge variant="default" size="md">
            Comparativa de Planes
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Elige el plan que acelere la retención de tus clientes
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Planes individuales para 1 proyecto (Free, Solo, Tienda) o planes completos de agencia con multicliente y marca blanca (Agencia, Studio).
          </p>

          {/* Toggle */}
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
                20% OFF
              </span>
            </span>
          </div>
        </Container>
      </section>

      {/* Plan Cards */}
      <section className="py-12 bg-white">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {DEMO_PLANS.map((plan) => {
              const price = annualBilling ? plan.priceAnnualMonthly : plan.priceMonthly;
              const isAnchor = plan.isAnchor;

              return (
                <div
                  key={plan.id}
                  className={`rounded-xl border p-5 flex flex-col justify-between transition-all ${
                    isAnchor
                      ? "border-brand-600 shadow-elevated ring-2 ring-brand-500/20 bg-blue-50/20"
                      : "border-slate-200 shadow-card bg-white"
                  }`}
                >
                  <div className="space-y-3">
                    {isAnchor && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-600 text-white text-[10px] font-bold uppercase tracking-wider mb-1">
                        <SparklesIcon size={10} />
                        Plan Ancla
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-slate-950">{plan.name}</h3>
                    <p className="text-xs text-slate-500 min-h-[30px]">{plan.description}</p>
                    <div className="pt-2 border-t border-slate-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-slate-950">${price}</span>
                        <span className="text-xs text-slate-500">USD/mes</span>
                      </div>
                      {annualBilling && price > 0 && (
                        <span className="text-[10px] text-emerald-600 font-medium">
                          Cobrado anualmente
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link href="/onboarding" className="block w-full">
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
        </Container>
      </section>

      {/* Deep Feature Matrix */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <Container size="xl">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Matriz Detallada de Características
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Compara todos los límites y capacidades técnicas antes de elegir.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-card">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4 w-1/3">Característica</th>
                  <th className="p-4 text-center">Free</th>
                  <th className="p-4 text-center">Solo ($29)</th>
                  <th className="p-4 text-center">Tienda ($79)</th>
                  <th className="p-4 text-center bg-blue-50/70 text-brand-900 border-x border-blue-200">
                    Agencia ($149)
                  </th>
                  <th className="p-4 text-center">Studio ($249)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {featureMatrix.map((section, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <tr className="bg-slate-100/70 font-bold text-slate-800 text-xs">
                      <td colSpan={6} className="px-4 py-2 uppercase tracking-wide">
                        {section.category}
                      </td>
                    </tr>
                    {section.items.map((item, iIdx) => (
                      <tr key={iIdx} className="hover:bg-slate-50/60">
                        <td className="p-4 font-medium text-slate-800">{item.name}</td>
                        {["free", "solo", "tienda", "agencia", "studio"].map((col) => {
                          const val = (item as Record<string, unknown>)[col];
                          const isAgenciaCol = col === "agencia";
                          return (
                            <td
                              key={col}
                              className={`p-4 text-center ${
                                isAgenciaCol ? "bg-blue-50/20 border-x border-blue-100 font-medium" : ""
                              }`}
                            >
                              {typeof val === "boolean" ? (
                                val ? (
                                  <div className="flex justify-center">
                                    <CheckCircleIcon size={16} className="text-emerald-600" />
                                  </div>
                                ) : (
                                  <div className="flex justify-center">
                                    <XIcon size={16} className="text-slate-300" />
                                  </div>
                                )
                              ) : (
                                <span className="text-xs text-slate-700 font-medium">
                                  {String(val)}
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheckIcon size={16} className="text-slate-400" />
            <span>Todos los planes incluyen cifrado de credenciales de Google Search Console y cero venta de datos a terceros.</span>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
