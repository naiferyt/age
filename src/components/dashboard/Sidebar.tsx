"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LogoIcon,
  DecayIcon,
  BriefIcon,
  RevenueIcon,
  SearchConsoleIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  SettingsIcon,
  LogOutIcon,
} from "@/components/icons";
import { Badge } from "@/components/ui/Badge";
import { PlanBadge } from "@/components/ui/PlanBadge";
import { DEMO_SITES } from "@/lib/demo-data";

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [selectedSiteId, setSelectedSiteId] = useState(DEMO_SITES[0].id);
  const [siteDropdownOpen, setSiteDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const currentSite = DEMO_SITES.find((s) => s.id === selectedSiteId) || DEMO_SITES[0];

  const navigation = [
    {
      name: "Resumen y Decay",
      href: "/dashboard",
      icon: <DecayIcon size={18} />,
      exact: true,
    },
    {
      name: "Briefs de IA",
      href: "/dashboard/briefs",
      icon: <BriefIcon size={18} />,
      badge: "3 activos",
    },
    {
      name: "Reporte de Revenue",
      href: "/dashboard/reportes",
      icon: <RevenueIcon size={18} />,
      badge: "Cliente",
    },
    {
      name: "Integraciones",
      href: "/dashboard/integraciones",
      icon: <SearchConsoleIcon size={18} />,
    },
  ];

  const isActive = (itemHref: string, exact = false) => {
    if (exact) return pathname === itemHref;
    return pathname.startsWith(itemHref);
  };

  return (
    <>
      {/* Mobile Bar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Abrir menú"
          >
            {mobileNavOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
          <Link href="/dashboard" className="flex items-center gap-2">
            <LogoIcon size={22} />
            <span className="font-bold text-slate-900 text-sm">Growth Engine</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant={currentSite.revenueMode === "measured" ? "measured" : "estimated"} size="sm">
            {currentSite.revenueMode === "measured" ? "Medido" : "Estimado"}
          </Badge>
        </div>
      </div>

      {/* Desktop & Drawer Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 flex flex-col justify-between border-r border-slate-800 transition-transform lg:translate-x-0 ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:h-screen`}
      >
        <div className="p-4 space-y-6">
          {/* Brand Header */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <LogoIcon size={26} />
              <div className="leading-tight">
                <span className="font-bold text-white text-sm tracking-tight">Agency Growth</span>
                <span className="block text-[10px] text-slate-400 font-mono">Panel de Control</span>
              </div>
            </Link>
            <button
              onClick={() => setMobileNavOpen(false)}
              className="lg:hidden p-1 text-slate-400 hover:text-white"
            >
              <XIcon size={18} />
            </button>
          </div>

          {/* Client / Site Selector Dropdown */}
          <div className="relative">
            <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-1.5">
              Sitio / Cliente Seleccionado
            </label>
            <button
              type="button"
              onClick={() => setSiteDropdownOpen(!siteDropdownOpen)}
              className="w-full flex items-center justify-between p-2.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-slate-600 text-left transition-colors"
            >
              <div className="min-w-0 pr-2">
                <span className="block text-xs font-semibold text-white truncate">
                  {currentSite.domain}
                </span>
                <span className="block text-[10px] text-slate-400 truncate">
                  {currentSite.platform} • {currentSite.plan}
                </span>
              </div>
              <ChevronDownIcon size={14} className="text-slate-400 shrink-0" />
            </button>

            {siteDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1.5 rounded-lg bg-slate-800 border border-slate-700 shadow-xl py-1 z-50 animate-fade-in">
                <div className="px-3 py-1.5 text-[10px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-700/60">
                  Cambiar de sitio (Plan Agencia)
                </div>
                {DEMO_SITES.map((site) => (
                  <button
                    key={site.id}
                    onClick={() => {
                      setSelectedSiteId(site.id);
                      setSiteDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-700/60 transition-colors ${
                      site.id === selectedSiteId ? "bg-slate-700 text-white font-semibold" : "text-slate-300"
                    }`}
                  >
                    <span className="truncate">{site.domain}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                        site.revenueMode === "measured"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-amber-500/20 text-amber-400"
                      }`}
                    >
                      {site.revenueMode === "measured" ? "Medido" : "Estimado"}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Nav Links */}
          <nav className="space-y-1">
            <span className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 px-2 mb-2">
              Navegación
            </span>
            {navigation.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className={`relative flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                    active
                      ? "bg-brand-600 text-white shadow-sm"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {active && (
                    <span className="absolute -left-4 top-1/2 -translate-y-1/2 h-4 w-1 rounded-full bg-brand-400" />
                  )}
                  <div className="flex items-center gap-2.5">
                    <span className={active ? "text-white" : "text-slate-400 group-hover:text-white"}>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                        active ? "bg-brand-700 text-white" : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer info in sidebar: account profile */}
        <div className="p-4 border-t border-slate-800 space-y-3">
          <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                AG
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-white truncate">Agencia Growth</div>
                <div className="text-[10px] text-slate-400 truncate">hola@agencygrowth.com</div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2.5">
              <PlanBadge plan="Agencia" size="sm" />
              <span className="text-[10px] text-slate-400 font-mono">4/10 clientes</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Link
              href="/dashboard/integraciones"
              className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-md text-[11px] font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <SettingsIcon size={13} />
              Ajustes
            </Link>
            <Link
              href="/"
              className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-md text-[11px] font-medium text-slate-400 hover:bg-slate-800 hover:text-rose-400 transition-colors"
            >
              <LogOutIcon size={13} />
              Salir
            </Link>
          </div>
          <div className="text-center text-[10px] font-mono text-slate-500">v1.2-beta</div>
        </div>
      </aside>
    </>
  );
};
