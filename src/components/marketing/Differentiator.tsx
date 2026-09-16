import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CheckCircleIcon, XIcon, LogoIcon } from "@/components/icons";

export const Differentiator: React.FC = () => {
  return (
    <section id="diferenciador" className="py-20 bg-white border-b border-slate-200/80">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <Badge variant="default" size="md">
            El Puente Faltante
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Por qué esto no es &quot;otro detector de decay más&quot;
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Cualquier herramienta te avisa que una URL cayó. Ninguna conecta la acción concreta de contenido
            con los dólares medidos que esa acción recuperó.
          </p>
        </div>

        <div className="mt-14 overflow-x-auto">
          <div className="min-w-[640px] rounded-xl border border-slate-200 shadow-card overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50/90 text-slate-700 text-xs uppercase tracking-wider font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-4 sm:p-5 w-2/5">Capacidad / Etapa</th>
                  <th className="p-4 sm:p-5 text-center w-1/5 text-slate-500">
                    Herramientas de Contenido
                    <div className="text-[10px] font-normal lowercase">(Surfer, Clearscope, etc.)</div>
                  </th>
                  <th className="p-4 sm:p-5 text-center w-1/5 text-slate-500">
                    Herramientas de Reporting
                    <div className="text-[10px] font-normal lowercase">(Looker, Databox, etc.)</div>
                  </th>
                  <th className="p-4 sm:p-5 text-center w-1/5 bg-blue-50/80 text-brand-900 border-l border-r border-blue-200">
                    <div className="flex items-center justify-center gap-1.5 font-bold">
                      <LogoIcon size={18} />
                      <span>Agency Growth Engine</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 font-sans text-xs sm:text-sm">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-medium text-slate-900">
                    Detección automática de decay y causa raíz (8 diagnósticos)
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">
                    <div className="flex justify-center"><XIcon size={16} className="text-slate-300" /></div>
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">
                    <div className="flex justify-center"><XIcon size={16} className="text-slate-300" /></div>
                  </td>
                  <td className="p-4 sm:p-5 text-center bg-blue-50/40 border-l border-r border-blue-200 font-semibold text-emerald-600">
                    <div className="flex justify-center"><CheckCircleIcon size={18} className="text-emerald-600" /></div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-medium text-slate-900">
                    Priorización por dinero real en riesgo (Shopify/WooCommerce)
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">
                    <span className="text-[11px] text-slate-400">Solo clics/posiciones</span>
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">
                    <span className="text-[11px] text-slate-400">Manual / Desconectado</span>
                  </td>
                  <td className="p-4 sm:p-5 text-center bg-blue-50/40 border-l border-r border-blue-200 font-semibold text-emerald-600">
                    <div className="flex justify-center"><CheckCircleIcon size={18} className="text-emerald-600" /></div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-medium text-slate-900">
                    Generación automática de briefs con IA según la causa exacta
                  </td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600">
                    <div className="flex justify-center"><CheckCircleIcon size={18} className="text-emerald-600" /></div>
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">
                    <div className="flex justify-center"><XIcon size={16} className="text-slate-300" /></div>
                  </td>
                  <td className="p-4 sm:p-5 text-center bg-blue-50/40 border-l border-r border-blue-200 font-semibold text-emerald-600">
                    <div className="flex justify-center"><CheckCircleIcon size={18} className="text-emerald-600" /></div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-medium text-slate-900">
                    Verificación a 28, 60 y 90 días con descuento por estacionalidad
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">
                    <div className="flex justify-center"><XIcon size={16} className="text-slate-300" /></div>
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">
                    <div className="flex justify-center"><XIcon size={16} className="text-slate-300" /></div>
                  </td>
                  <td className="p-4 sm:p-5 text-center bg-blue-50/40 border-l border-r border-blue-200 font-semibold text-emerald-600">
                    <div className="flex justify-center"><CheckCircleIcon size={18} className="text-emerald-600" /></div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-medium text-slate-900">
                    Reporte al cliente: &quot;Cada acción recuperó $X dólares&quot;
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">
                    <span className="text-[11px] text-slate-400">Sin dinero</span>
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">
                    <span className="text-[11px] text-slate-400">Muestra gráficos sin causa</span>
                  </td>
                  <td className="p-4 sm:p-5 text-center bg-blue-50/40 border-l border-r border-blue-200 font-semibold text-emerald-600">
                    <div className="flex justify-center"><CheckCircleIcon size={18} className="text-emerald-600" /></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
};
