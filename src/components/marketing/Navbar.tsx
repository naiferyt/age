"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LogoFull, MenuIcon, XIcon, ArrowRightIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <Container size="xl">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="hover:opacity-95 transition-opacity">
            <LogoFull />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link
              href="/#como-funciona"
              className="hover:text-brand-600 transition-colors"
            >
              Cómo funciona
            </Link>
            <Link
              href="/#diferenciador"
              className="hover:text-brand-600 transition-colors"
            >
              Diferenciador
            </Link>
            <Link
              href="/precios"
              className="hover:text-brand-600 transition-colors"
            >
              Precios y Planes
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors text-xs font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Ver App / Demo
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                Iniciar sesión
              </Button>
            </Link>
            <Link href="/onboarding">
              <Button variant="primary" size="sm" className="group">
                Probar Gratis
                <ArrowRightIcon
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <Link href="/dashboard">
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-brand-50 text-brand-700">
                Demo
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-3 pt-2 text-sm font-medium text-slate-700">
            <Link
              href="/#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50"
            >
              Cómo funciona
            </Link>
            <Link
              href="/#diferenciador"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50"
            >
              Diferenciador
            </Link>
            <Link
              href="/precios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50"
            >
              Precios y Planes
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md bg-blue-50 text-brand-700 font-semibold"
            >
              Explorar Demo del Dashboard
            </Link>
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link href="/onboarding" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="md" className="w-full">
                Empezar Onboarding (Gratis)
              </Button>
            </Link>
            <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="md" className="w-full">
                Ingresar a plataforma
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
