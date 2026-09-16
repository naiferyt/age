"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BellIcon,
  SearchIcon,
  HelpCircleIcon,
  LogOutIcon,
  SettingsIcon,
  ChevronDownIcon,
  TrendingDownIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { PlanBadge } from "@/components/ui/PlanBadge";

const NOTIFICATIONS = [
  {
    id: 1,
    icon: TrendingDownIcon,
    iconClass: "text-rose-600 bg-rose-50",
    title: "Nueva página en decay detectada",
    description: "/sandalias/sandalias-cuero-verano cayó 38% en clics (GSC)",
    time: "Hace 12 min",
  },
  {
    id: 2,
    icon: SparklesIcon,
    iconClass: "text-brand-600 bg-brand-50",
    title: "Brief de IA listo",
    description: "Zapatillas Running Hombre — plan de acción generado",
    time: "Hace 1 hora",
  },
  {
    id: 3,
    icon: ShieldCheckIcon,
    iconClass: "text-emerald-600 bg-emerald-50",
    title: "Verificación a 28 días completada",
    description: "+$620 USD recuperados en Kit Limpieza de Cuero",
    time: "Ayer",
  },
];

export const Topbar: React.FC = () => {
  const [notifOpen, setNotifOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const closeMenus = () => {
    setNotifOpen(false);
    setUserMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 hidden lg:flex items-center justify-between gap-4 bg-white border-b border-slate-200/80 px-6 h-16 shrink-0">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <SearchIcon
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Buscar páginas, briefs o clientes..."
            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 placeholder:text-slate-400 transition-colors"
          />
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-1.5">
        {/* Notifications */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setUserMenuOpen(false);
              setNotifOpen((v) => !v);
            }}
            className="relative p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
            aria-label="Notificaciones"
          >
            <BellIcon size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
          </button>

          {notifOpen && (
            <>
              <button
                aria-hidden
                tabIndex={-1}
                onClick={closeMenus}
                className="fixed inset-0 z-40 cursor-default"
              />
              <div className="absolute right-0 top-full mt-2 w-80 rounded-xl bg-white border border-slate-200 shadow-elevated z-50 overflow-hidden animate-fade-in">
                <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">Notificaciones</span>
                  <span className="text-[11px] font-semibold text-brand-600">3 nuevas</span>
                </div>
                <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                  {NOTIFICATIONS.map((n) => {
                    const Icon = n.icon;
                    return (
                      <div key={n.id} className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50/80 transition-colors">
                        <div className={`p-1.5 rounded-lg shrink-0 ${n.iconClass}`}>
                          <Icon size={14} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-slate-900 leading-snug">{n.title}</p>
                          <p className="text-[11px] text-slate-500 leading-snug mt-0.5">{n.description}</p>
                          <span className="text-[10px] text-slate-400 font-mono mt-1 block">{n.time}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="px-4 py-2.5 border-t border-slate-100 bg-slate-50/60 text-center">
                  <span className="text-[11px] font-semibold text-brand-600">Ver historial completo</span>
                </div>
              </div>
            </>
          )}
        </div>

        <Link
          href="/dashboard"
          className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          aria-label="Ayuda y soporte"
        >
          <HelpCircleIcon size={18} />
        </Link>

        <div className="w-px h-6 bg-slate-200 mx-1" />

        {/* User menu */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setNotifOpen(false);
              setUserMenuOpen((v) => !v);
            }}
            className="flex items-center gap-2.5 pl-1 pr-2 py-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
              AG
            </div>
            <div className="text-left leading-tight hidden xl:block">
              <div className="text-xs font-semibold text-slate-900">Agencia Growth</div>
              <div className="text-[11px] text-slate-500">hola@agencygrowth.com</div>
            </div>
            <ChevronDownIcon size={14} className="text-slate-400 shrink-0" />
          </button>

          {userMenuOpen && (
            <>
              <button
                aria-hidden
                tabIndex={-1}
                onClick={closeMenus}
                className="fixed inset-0 z-40 cursor-default"
              />
              <div className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-white border border-slate-200 shadow-elevated z-50 overflow-hidden animate-fade-in">
                <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    AG
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-slate-900 truncate">Agencia Growth</div>
                    <div className="text-[11px] text-slate-500 truncate">hola@agencygrowth.com</div>
                  </div>
                </div>
                <div className="px-4 py-2.5 border-b border-slate-100">
                  <PlanBadge plan="Agencia" size="sm" />
                  <p className="text-[11px] text-slate-500 mt-1.5 leading-snug">
                    4 de 10 clientes conectados. White-label activo.
                  </p>
                </div>
                <div className="py-1">
                  <Link
                    href="/dashboard/integraciones"
                    className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  >
                    <SettingsIcon size={14} />
                    Configuración de cuenta
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 transition-colors"
                  >
                    <LogOutIcon size={14} />
                    Cerrar sesión
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
