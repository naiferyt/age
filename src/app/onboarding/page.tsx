"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/marketing/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import {
  LogoIcon,
  SearchConsoleIcon,
  ShopifyIcon,
  WooCommerceIcon,
  CheckCircleIcon,
  SparklesIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  InfoIcon,
} from "@/components/icons";

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1 State
  const [gscConnected, setGscConnected] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("https://zapatoslatam.com");

  // Step 2 State
  const [storeType, setStoreType] = useState<"shopify" | "woocommerce" | "ga4" | "none">("shopify");

  // Step 3 State (Formula for estimated revenue)
  const [aov, setAov] = useState(65);
  const [conversionRate, setConversionRate] = useState(2.1);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Simplified Onboarding Header */}
      <header className="border-b border-slate-200 bg-white py-4">
        <Container size="md">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <LogoIcon size={26} />
              <span className="font-bold text-slate-900 text-sm">Agency Growth Engine</span>
            </Link>
            <span className="text-xs font-semibold text-slate-500">
              Paso {currentStep} de 4
            </span>
          </div>
        </Container>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-1">
        <div
          className="bg-brand-600 h-1 transition-all duration-300"
          style={{ width: `${(currentStep / 4) * 100}%` }}
        />
      </div>

      <div className="flex-1 py-10 sm:py-16">
        <Container size="md">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-card max-w-2xl mx-auto space-y-6">
            {/* Step 1: Connect Search Console */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-brand-700 text-xs font-semibold">
                    <SearchConsoleIcon size={14} />
                    <span>Paso 1: Detección de Caídas</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    Conecta tu Google Search Console
                  </h1>
                  <p className="text-sm text-slate-600">
                    Necesitamos acceso de solo lectura a tus impresiones y clics para auditar anomalías y clasificar entre las 8 causas de decay.
                  </p>
                </div>

                {!gscConnected ? (
                  <div className="p-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mx-auto shadow-sm">
                      <SearchConsoleIcon size={28} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-sm text-slate-900">
                        Autorización OAuth segura con Google
                      </h3>
                      <p className="text-xs text-slate-500">
                        Cero permisos de escritura. Solo leemos clics, consultas y URLs.
                      </p>
                    </div>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => setGscConnected(true)}
                      className="gap-2 shadow-sm"
                    >
                      <span>Simular Conexión con Google</span>
                      <ArrowRightIcon size={14} />
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fade-in">
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircleIcon size={20} className="text-emerald-600" />
                        <div>
                          <span className="text-xs font-bold text-emerald-950 block">
                            Cuenta de Google Conectada
                          </span>
                          <span className="text-xs text-emerald-800">
                            seo-analyst@zapatoslatam.com
                          </span>
                        </div>
                      </div>
                      <Badge variant="measured" size="sm">
                        Activo
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Selecciona el dominio a monitorear:
                      </label>
                      <select
                        value={selectedDomain}
                        onChange={(e) => setSelectedDomain(e.target.value)}
                        className="w-full p-2.5 text-xs rounded-lg border border-slate-200 bg-white font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                      >
                        <option value="https://zapatoslatam.com">https://zapatoslatam.com (E-commerce)</option>
                        <option value="https://electronicamx.com">https://electronicamx.com (Tienda)</option>
                        <option value="https://modacolombia.co">https://modacolombia.co (Blog & Catálogo)</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="pt-4 flex justify-end">
                  <Button
                    variant="primary"
                    size="md"
                    disabled={!gscConnected}
                    onClick={() => setCurrentStep(2)}
                    className="gap-1.5"
                  >
                    <span>Continuar al Paso 2</span>
                    <ArrowRightIcon size={14} />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: E-commerce selection */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-brand-700 text-xs font-semibold">
                    <span>Paso 2: Capa de Revenue</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    ¿Tienes una tienda online conectada?
                  </h1>
                  <p className="text-sm text-slate-600">
                    Esto define si la plataforma medirá dólares reales de facturación o usará parámetros de estimación transparente.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    {
                      id: "shopify",
                      name: "Shopify Store",
                      desc: "Medición automática con Shopify API.",
                      badge: "Revenue Medido",
                      badgeVariant: "measured" as const,
                      icon: <ShopifyIcon size={24} />,
                    },
                    {
                      id: "woocommerce",
                      name: "WooCommerce",
                      desc: "Para tiendas WordPress con REST API.",
                      badge: "Revenue Medido",
                      badgeVariant: "measured" as const,
                      icon: <WooCommerceIcon size={24} />,
                    },
                    {
                      id: "ga4",
                      name: "GA4 E-commerce",
                      desc: "Eventos de compra 'purchase' en GA4.",
                      badge: "Revenue Medido",
                      badgeVariant: "measured" as const,
                      icon: <span className="font-bold text-amber-500 font-mono text-base">GA4</span>,
                    },
                    {
                      id: "none",
                      name: "Sin tienda online",
                      desc: "Estimar dinero con AOV y tasa de conversión.",
                      badge: "Revenue Estimado",
                      badgeVariant: "estimated" as const,
                      icon: <span className="font-bold text-slate-600 font-mono text-base">USD</span>,
                    },
                  ].map((option) => (
                    <div
                      key={option.id}
                      onClick={() => setStoreType(option.id as typeof storeType)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between space-y-3 ${
                        storeType === option.id
                          ? "border-brand-600 bg-blue-50/40 ring-2 ring-brand-500/20"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2.5">
                          {option.icon}
                          <span className="font-bold text-sm text-slate-900">
                            {option.name}
                          </span>
                        </div>
                        <Badge variant={option.badgeVariant} size="sm">
                          {option.badge}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {option.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentStep(1)}
                    className="gap-1.5"
                  >
                    <ArrowLeftIcon size={14} />
                    <span>Atrás</span>
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setCurrentStep(3)}
                    className="gap-1.5"
                  >
                    <span>Continuar al Paso 3</span>
                    <ArrowRightIcon size={14} />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Revenue Configuration / Formula */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-brand-700 text-xs font-semibold">
                    <span>Paso 3: Transparencia de Dinero</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    {storeType === "none"
                      ? "Configura tu Fórmula de Estimación"
                      : "Integración de Tienda Verificada"}
                  </h1>
                  <p className="text-sm text-slate-600">
                    {storeType === "none"
                      ? "El producto nunca inventa números. Ingresa tus promedios históricos para calcular el dinero en riesgo de forma transparente."
                      : "Tu tienda sincronizará pedidos reales y facturación para cada URL."}
                  </p>
                </div>

                {storeType === "none" ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Valor Promedio de Pedido (AOV en USD)"
                        type="number"
                        value={aov}
                        onChange={(e) => setAov(Number(e.target.value))}
                        helperText="Ticket medio por compra en dólares."
                      />
                      <Input
                        label="Tasa de Conversión Orgánica (%)"
                        type="number"
                        step="0.1"
                        value={conversionRate}
                        onChange={(e) => setConversionRate(Number(e.target.value))}
                        helperText="Porcentaje de visitas que compran."
                      />
                    </div>

                    <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 space-y-2">
                      <div className="flex items-center gap-1.5 font-bold">
                        <InfoIcon size={14} />
                        <span>Fórmula visible para tus reportes:</span>
                      </div>
                      <p className="font-mono bg-white/70 p-2 rounded border border-amber-200 text-slate-800">
                        Dinero en riesgo = Clics perdidos × {conversionRate}% conv. × ${aov} USD (AOV)
                      </p>
                      <p className="text-[11px] text-amber-900">
                        Cada número mostrará visiblemente la etiqueta <strong className="text-amber-800">Estimado</strong>.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-3">
                    <div className="flex items-center gap-2 font-bold text-emerald-950 text-sm">
                      <CheckCircleIcon size={18} className="text-emerald-600" />
                      <span>Modo Revenue Medido Activado</span>
                    </div>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      Se conectó correctamente la plataforma de e-commerce ({storeType.toUpperCase()}). Todos los números de revenue en tu dashboard y reportes llevarán la etiqueta verificada <strong className="text-emerald-950">Medido</strong>.
                    </p>
                  </div>
                )}

                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentStep(2)}
                    className="gap-1.5"
                  >
                    <ArrowLeftIcon size={14} />
                    <span>Atrás</span>
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setCurrentStep(4)}
                    className="gap-1.5"
                  >
                    <span>Ejecutar Primer Análisis</span>
                    <SparklesIcon size={14} />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: First Analysis Preview */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircleIcon size={28} />
                </div>

                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    ¡Primer Análisis de Decay Completado!
                  </h1>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Detectamos 6 páginas en riesgo en <strong>{selectedDomain}</strong> sumando <strong>$8,420 USD</strong> de facturación mensual en peligro.
                  </p>
                </div>

                {/* Sample finding teaser */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-left space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">
                      Página #1 con Mayor Riesgo Detectada:
                    </span>
                    <Badge variant="risk" size="sm">
                      Prioridad Alta
                    </Badge>
                  </div>
                  <div className="font-mono text-slate-700 bg-white p-2 rounded border border-slate-200 truncate">
                    /calzado-deportivo/zapatillas-running-hombre
                  </div>
                  <div className="flex items-center justify-between text-slate-600 pt-1">
                    <span>Causa: <strong>Contenido desactualizado</strong></span>
                    <span className="font-bold text-slate-900">$2,840 USD/mes en riesgo</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/dashboard" className="block w-full">
                    <Button variant="primary" size="lg" className="w-full shadow-elevated gap-2">
                      <span>Ir a Mi Dashboard Completo</span>
                      <ArrowRightIcon size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  );
}
