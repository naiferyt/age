import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LogoFull } from "@/components/icons";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 text-xs sm:text-sm">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-4">
            <LogoFull className="brightness-125" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Plataforma de recuperación de revenue para agencias SEO y e-commerce.
              Detectamos qué páginas están perdiendo tráfico, generamos el plan de acción con IA y
              medimos el revenue orgánico recuperado en dólares reales.
            </p>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <span className="font-semibold text-slate-200 block">
                Compromiso de Honestidad en Producto:
              </span>
              <p>
                Etapa beta pública. Cero testimonios o cifras infladas inventadas. Todo número
                financiero etiqueta obligatoriamente si es medido o estimado.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-200 text-xs uppercase tracking-wider mb-3">
              Producto
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#como-funciona" className="hover:text-white transition-colors">
                  El Loop Completo (5 pasos)
                </Link>
              </li>
              <li>
                <Link href="/#diferenciador" className="hover:text-white transition-colors">
                  Diferenciador vs Suites SEO
                </Link>
              </li>
              <li>
                <Link href="/precios" className="hover:text-white transition-colors">
                  Planes y Precios (5 opciones)
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors text-brand-400 font-medium">
                  Explorar Demo Interactiva
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-200 text-xs uppercase tracking-wider mb-3">
              App & Dashboards
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors">
                  Panel de Decay y Riesgo
                </Link>
              </li>
              <li>
                <Link href="/dashboard/briefs" className="hover:text-white transition-colors">
                  Generador de Briefs IA
                </Link>
              </li>
              <li>
                <Link href="/dashboard/reportes" className="hover:text-white transition-colors">
                  Reportes para Clientes (White-label)
                </Link>
              </li>
              <li>
                <Link href="/dashboard/integraciones" className="hover:text-white transition-colors">
                  Integraciones (GSC, Shopify, Woo)
                </Link>
              </li>
              <li>
                <Link href="/onboarding" className="hover:text-white transition-colors">
                  Asistente de Onboarding
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-200 text-xs uppercase tracking-wider mb-3">
              Legal & Facturación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-slate-400">Cobros procesados vía LemonSqueezy</span>
              </li>
              <li>
                <span className="text-slate-400">Términos de Servicio</span>
              </li>
              <li>
                <span className="text-slate-400">Política de Privacidad de Datos</span>
              </li>
              <li>
                <span className="text-slate-400">Hecho para agencias en LatAm y España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Agency Growth Engine. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Next.js 14 + Tailwind CSS</span>
            <span>•</span>
            <span>Mobile-first</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
