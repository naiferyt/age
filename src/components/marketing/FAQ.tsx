"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ChevronDownIcon } from "@/components/icons";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cómo calculan el dinero en riesgo si no tengo tienda online conectada?",
      a: "En modo 'Estimado' (planes Solo o cuando no hay integración de e-commerce), configuras de forma transparente el Valor Promedio de Pedido (AOV) y tu tasa de conversión histórica. La plataforma calcula: Clics perdidos × Tasa de conversión × AOV. Siempre mostramos la fórmula y el intervalo de confianza, y cada cifra lleva el badge visible 'Estimado'.",
    },
    {
      q: "¿Cómo evitan atribuirse ventas que subieron solo por estacionalidad del mercado?",
      a: "Aplicamos un descuento estadístico comparando la tendencia del nicho completo en Search Console durante los mismos periodos de años o meses anteriores. Si todo el mercado subió un 8%, ese 8% se descuenta del revenue recuperado para atribuirle al brief únicamente el mérito del trabajo realizado.",
    },
    {
      q: "¿Por qué el producto nunca muestra proyecciones o pronósticos futuros?",
      a: "Es una regla de producto estricta. El SEO está sujeto a algoritmos y dinámicas externas; proyectar 'vas a ganar $5,000 el próximo mes' es falso y arriesga la reputación de tu agencia. Agency Growth Engine mide únicamente lo que ya ocurrió de forma verificada.",
    },
    {
      q: "¿Por qué nunca suman 'dinero en riesgo' con 'dinero recuperado'?",
      a: "Son dos conceptos radicalmente diferentes: uno es una pérdida potencial a solucionar y el otro es un resultado financiero ya conseguido. Sumarlos generaría un número inflado engañoso para el cliente. En nuestra interfaz siempre viven en tarjetas separadas con colores distintos.",
    },
    {
      q: "¿Cuál es la diferencia entre planes Solo/Tienda vs Agencia/Studio?",
      a: "Los planes Free, Solo y Tienda están optimizados para operar 1 solo negocio o tienda personal. Los planes Agencia ($149/mes) y Studio ($249/mes) están diseñados para agencias SEO: permiten gestionar una cartera de múltiples clientes con permisos independientes, reportes white-label y vistas de solo lectura.",
    },
    {
      q: "¿Cómo funciona la vista White-label para compartir con clientes?",
      a: "En los planes Agencia y Studio puedes generar enlaces de solo lectura con el logotipo y los colores de tu propia agencia. Tu cliente final accede a un portal limpio donde lee únicamente cuánto dinero recuperó el servicio, sin menciones a nuestra marca.",
    },
    {
      q: "¿Qué modelo de inteligencia artificial genera los planes de acción?",
      a: "Utilizamos modelos Claude de Anthropic ajustados con prompts específicos para SEO técnico y arquitectura de información e-commerce. Los briefs nunca son genéricos: varían según si la causa diagnosticada fue canibalización, obsolescencia, competidor nuevo o problemas técnicos.",
    },
    {
      q: "¿Qué métodos de pago aceptan?",
      a: "Procesamos pagos mediante LemonSqueezy en dólares estadounidenses (USD) con tarjeta de crédito, débito o transferencias internacionales, garantizando acceso directo a agencias de toda América Latina y España sin restricciones.",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <Container size="md">
        <div className="text-center space-y-3">
          <Badge variant="default" size="md">
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Todo lo que necesitas saber antes de empezar
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Claridad total sobre nuestra metodología, cálculos y principios de producto.
          </p>
        </div>

        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-base font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {faq.q}
                  </span>
                  <span
                    className={`ml-4 shrink-0 p-1 rounded-md text-slate-500 group-hover:text-brand-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDownIcon size={18} />
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 pr-8 text-sm text-slate-600 leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
