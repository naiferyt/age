"use client";

import React, { useState } from "react";
import { DashHeader } from "@/components/dashboard/DashHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import {
  SearchConsoleIcon,
  AnalyticsIcon,
  ShopifyIcon,
  WooCommerceIcon,
  ShieldCheckIcon,
  InfoIcon,
} from "@/components/icons";

export default function IntegracionesPage() {
  const [integrations, setIntegrations] = useState([
    {
      id: "gsc",
      name: "Google Search Console",
      category: "Detección de Tráfico y Posiciones",
      icon: <SearchConsoleIcon size={28} />,
      status: "conectado",
      account: "seo-analyst@zapatoslatam.com",
      lastSync: "Hace 12 minutos",
      description: "Monitorea consultas, impresiones, clics y diagnostica las 8 causas de decay.",
    },
    {
      id: "shopify",
      name: "Shopify Store API",
      category: "Facturación y Revenue Medido",
      icon: <ShopifyIcon size={28} />,
      status: "conectado",
      account: "zapatoslatam.myshopify.com",
      lastSync: "Hace 5 minutos",
      description: "Atribuye compras directas y ticket promedio (AOV) real a cada URL recuperada.",
    },
    {
      id: "ga4",
      name: "Google Analytics 4",
      category: "Eventos y Atribución",
      icon: <AnalyticsIcon size={28} />,
      status: "conectado",
      account: "GA4 Property (G-789234XX)",
      lastSync: "Hace 1 hora",
      description: "Valida sesiones orgánicas y eventos de embudo de checkout por página de aterrizaje.",
    },
    {
      id: "woocommerce",
      name: "WooCommerce REST API",
      category: "Facturación y Revenue Medido",
      icon: <WooCommerceIcon size={28} />,
      status: "disponible",
      account: "No conectado",
      lastSync: "—",
      description: "Para tiendas en WordPress. Conecta Consumer Key y Secret para lectura de pedidos.",
    },
  ]);

  const toggleConnection = (id: string) => {
    setIntegrations(
      integrations.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "conectado" ? "disponible" : "conectado",
              lastSync: item.status === "conectado" ? "—" : "Justo ahora",
            }
          : item
      )
    );
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <DashHeader
        title="Centro de Integraciones"
        subtitle="Conecta las fuentes de datos para activar la capa de revenue medido en dólares."
        badgeText="3 Conexiones Activas"
        badgeVariant="measured"
      />

      {/* Explanatory banner about Measured vs Estimated */}
      <div className="p-4 sm:p-5 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs text-brand-950 flex items-start gap-3">
        <InfoIcon size={20} className="text-brand-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="font-bold text-sm">
            Regla de Transparencia de Integraciones:
          </h3>
          <p className="leading-relaxed text-brand-900">
            Cuando tienes <strong>Shopify, WooCommerce o GA4</strong> conectado, la interfaz activa automáticamente el badge verde <strong className="text-emerald-700">Revenue Medido</strong>. Si no conectas una tienda, el sistema opera en <strong className="text-amber-800">Revenue Estimado</strong> usando tus propios parámetros de AOV y conversión sin inventar números.
          </p>
        </div>
      </div>

      {/* Grid of integrations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {integrations.map((item) => {
          const isConnected = item.status === "conectado";

          return (
            <Card
              key={item.id}
              className={`flex flex-col justify-between transition-all ${
                isConnected ? "border-slate-200 shadow-card" : "border-dashed border-slate-300 bg-slate-50/50"
              }`}
            >
              <div>
                <CardHeader className="border-b border-slate-100 pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <div>
                        <CardTitle className="text-base text-slate-900">
                          {item.name}
                        </CardTitle>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <Badge
                      variant={isConnected ? "measured" : "outline"}
                      size="sm"
                    >
                      {isConnected ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Conectado
                        </>
                      ) : (
                        "Disponible"
                      )}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-5 space-y-3 text-xs">
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 space-y-1 font-mono text-[11px]">
                    <div className="flex justify-between text-slate-500">
                      <span>Cuenta:</span>
                      <span className="text-slate-800 font-semibold">{item.account}</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Última sinc.:</span>
                      <span className="text-slate-800">{item.lastSync}</span>
                    </div>
                  </div>
                </CardContent>
              </div>

              <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  {isConnected ? "Sincronización continua" : "Configuración en 2 min"}
                </span>
                <Button
                  variant={isConnected ? "outline" : "primary"}
                  size="sm"
                  onClick={() => toggleConnection(item.id)}
                  className="text-xs"
                >
                  {isConnected ? "Desconectar" : "Conectar Integración"}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Security note */}
      <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 flex items-center gap-2">
        <ShieldCheckIcon size={16} className="text-slate-400 shrink-0" />
        <span>Las credenciales OAuth y API keys se almacenan cifradas en Supabase Vault con acceso de solo lectura para auditoría.</span>
      </div>
    </div>
  );
}
