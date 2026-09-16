export interface ClientSite {
  id: string;
  domain: string;
  name: string;
  platform: "Shopify" | "WooCommerce" | "Custom / GA4" | "Sin tienda (Estimado)";
  revenueMode: "measured" | "estimated";
  plan: "Free" | "Solo" | "Tienda" | "Agencia" | "Studio";
  connectedAt: string;
  decayPagesCount: number;
  revenueAtRisk: number;
  revenueRecovered: number;
  confidenceMargin: string;
}

export interface DecayPage {
  id: string;
  url: string;
  title: string;
  cause:
    | "Pérdida de posición"
    | "Competidor nuevo"
    | "Contenido desactualizado"
    | "Canibalización interna"
    | "Problemas técnicos"
    | "Estacionalidad / Demanda"
    | "Cambio de intención"
    | "Pérdida de enlaces";
  causeDescription: string;
  previousClicks: number;
  currentClicks: number;
  dropPercentage: number;
  revenueAtRisk: number;
  revenueMode: "measured" | "estimated";
  confidenceInterval: string;
  status: "detectado" | "brief_generado" | "en_ejecucion" | "verificado";
  briefId?: string;
  detectedDaysAgo: number;
  priorityScore: "Alta" | "Media" | "Baja";
}

export interface AIBrief {
  id: string;
  pageId: string;
  pageUrl: string;
  pageTitle: string;
  cause: string;
  createdAt: string;
  executedAt?: string;
  status: "pendiente" | "en_progreso" | "ejecutado" | "verificado_28d" | "verificado_60d" | "verificado_90d";
  revenueMode: "measured" | "estimated";
  revenueAtRisk: number;
  revenueRecovered?: number;
  confidenceMargin: string;
  actionPlan: {
    diagnosis: string;
    objective: string;
    missingKeywords: { term: string; volume: number; intent: "Transaccional" | "Informativa" | "Comercial" }[];
    contentStructure: string[];
    recommendedWordCount: { current: number; recommended: number };
    technicalNotes?: string[];
  };
  verification: {
    day28: { status: "completado" | "en_curso" | "pendiente"; recovered?: number; confidence?: string; seasonalAdjusted?: string };
    day60: { status: "completado" | "en_curso" | "pendiente"; recovered?: number; confidence?: string; seasonalAdjusted?: string };
    day90: { status: "completado" | "en_curso" | "pendiente"; recovered?: number; confidence?: string; seasonalAdjusted?: string };
  };
}

export interface PlanPricing {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnualMonthly: number;
  targetAudience: string;
  description: string;
  features: string[];
  isAnchor?: boolean;
  ctaText: string;
  limits: {
    sites: string;
    briefsPerMonth: string;
    revenueLayer: string;
    whiteLabel: boolean;
    apiAccess: boolean;
  };
}

export const DEMO_SITES: ClientSite[] = [
  {
    id: "site-1",
    domain: "zapatoslatam.com",
    name: "Zapatos LatAm E-commerce",
    platform: "Shopify",
    revenueMode: "measured",
    plan: "Agencia",
    connectedAt: "12 Ene 2026",
    decayPagesCount: 6,
    revenueAtRisk: 8420,
    revenueRecovered: 14250,
    confidenceMargin: "±4.8% (Integración Shopify API directa)",
  },
  {
    id: "site-2",
    domain: "electronicamx.com",
    name: "Electrónica México",
    platform: "WooCommerce",
    revenueMode: "measured",
    plan: "Agencia",
    connectedAt: "03 Feb 2026",
    decayPagesCount: 9,
    revenueAtRisk: 12900,
    revenueRecovered: 8640,
    confidenceMargin: "±6.1% (WooCommerce REST + GA4)",
  },
  {
    id: "site-3",
    domain: "modacolombia.co",
    name: "Moda Colombia Online",
    platform: "Sin tienda (Estimado)",
    revenueMode: "estimated",
    plan: "Solo",
    connectedAt: "18 Feb 2026",
    decayPagesCount: 4,
    revenueAtRisk: 3180,
    revenueRecovered: 2450,
    confidenceMargin: "±11.4% (AOV $45 USD × Tasa Conv. 1.8%)",
  },
  {
    id: "site-4",
    domain: "opticasur.cl",
    name: "Óptica Sur Consultas",
    platform: "Custom / GA4",
    revenueMode: "measured",
    plan: "Agencia",
    connectedAt: "01 Mar 2026",
    decayPagesCount: 3,
    revenueAtRisk: 2950,
    revenueRecovered: 5800,
    confidenceMargin: "±5.2% (Eventos e-commerce GA4)",
  },
];

export const DEMO_DECAY_PAGES: DecayPage[] = [
  {
    id: "decay-1",
    url: "/calzado-deportivo/zapatillas-running-hombre",
    title: "Zapatillas de Running para Hombre - Colección 2025",
    cause: "Contenido desactualizado",
    causeDescription: "Menciones a temporadas anteriores y falta de 6 modelos nuevos buscados por usuarios activos.",
    previousClicks: 4820,
    currentClicks: 2190,
    dropPercentage: -54.5,
    revenueAtRisk: 2840,
    revenueMode: "measured",
    confidenceInterval: "[$2,690 - $2,990]",
    status: "brief_generado",
    briefId: "brief-101",
    detectedDaysAgo: 4,
    priorityScore: "Alta",
  },
  {
    id: "decay-2",
    url: "/botas-cuero/botas-impermeables-montana",
    title: "Botas de Montaña Impermeables en Cuero Legítimo",
    cause: "Pérdida de posición",
    causeDescription: "Descenso de la posición 2.1 a la 6.4 tras actualización de Core Algorithm de Google.",
    previousClicks: 3200,
    currentClicks: 1650,
    dropPercentage: -48.4,
    revenueAtRisk: 1950,
    revenueMode: "measured",
    confidenceInterval: "[$1,820 - $2,080]",
    status: "detectado",
    detectedDaysAgo: 6,
    priorityScore: "Alta",
  },
  {
    id: "decay-3",
    url: "/zapatos-formales/oxford-clasico-negro",
    title: "Zapatos Oxford Clásicos Negros de Vestir",
    cause: "Canibalización interna",
    causeDescription: "Conflicto de ranking con la nueva URL '/hombre/zapatos-vestir/oxford-cuero'.",
    previousClicks: 1980,
    currentClicks: 1120,
    dropPercentage: -43.4,
    revenueAtRisk: 1420,
    revenueMode: "measured",
    confidenceInterval: "[$1,310 - $1,530]",
    status: "en_ejecucion",
    briefId: "brief-102",
    detectedDaysAgo: 11,
    priorityScore: "Alta",
  },
  {
    id: "decay-4",
    url: "/sandalias/sandalias-cuero-verano",
    title: "Sandalias de Cuero Livianas para Verano",
    cause: "Estacionalidad / Demanda",
    causeDescription: "Caída de volumen general del mercado (-38% en GSC), pero el CTR relativo se mantiene estable.",
    previousClicks: 2400,
    currentClicks: 1480,
    dropPercentage: -38.3,
    revenueAtRisk: 980,
    revenueMode: "measured",
    confidenceInterval: "[$890 - $1,070]",
    status: "detectado",
    detectedDaysAgo: 14,
    priorityScore: "Media",
  },
  {
    id: "decay-5",
    url: "/mocasines/mocasines-artesanales-gamuza",
    title: "Mocasines Artesanales de Gamuza Suave",
    cause: "Competidor nuevo",
    causeDescription: "El dominio competidor 'calzadoselite.com' lanzó guía comparativa con schema markup agresivo.",
    previousClicks: 1650,
    currentClicks: 1040,
    dropPercentage: -37.0,
    revenueAtRisk: 750,
    revenueMode: "measured",
    confidenceInterval: "[$690 - $810]",
    status: "brief_generado",
    briefId: "brief-103",
    detectedDaysAgo: 18,
    priorityScore: "Media",
  },
  {
    id: "decay-6",
    url: "/accesorios/crema-cuidado-calzado-cuero",
    title: "Kit Limpieza y Crema Protectora de Cuero",
    cause: "Problemas técnicos",
    causeDescription: "Incremento de LCP a 4.8s por carga de imágenes sin compresión tras último deploy.",
    previousClicks: 1100,
    currentClicks: 790,
    dropPercentage: -28.2,
    revenueAtRisk: 480,
    revenueMode: "measured",
    confidenceInterval: "[$430 - $530]",
    status: "verificado",
    briefId: "brief-100",
    detectedDaysAgo: 32,
    priorityScore: "Baja",
  },
];

export const DEMO_BRIEFS: AIBrief[] = [
  {
    id: "brief-101",
    pageId: "decay-1",
    pageUrl: "/calzado-deportivo/zapatillas-running-hombre",
    pageTitle: "Zapatillas de Running para Hombre - Colección 2025",
    cause: "Contenido desactualizado",
    createdAt: "12 Mar 2026",
    status: "en_progreso",
    revenueMode: "measured",
    revenueAtRisk: 2840,
    confidenceMargin: "±4.8% margen de precisión histórica",
    actionPlan: {
      diagnosis:
        "La página mantiene buena autoridad pero perdió clics ante competidores que ya listan tecnologías de amortiguación 2026. Los usuarios buscan términos de drop y peso por gramo que no están en el texto.",
      objective: "Recuperar el ranking top 3 actualizando especificaciones técnicas, tabla de modelos 2026 y FAQs de pisada.",
      missingKeywords: [
        { term: "mejores zapatillas running asfalto 2026", volume: 1600, intent: "Transaccional" },
        { term: "zapatillas running hombre amortiguacion neutra", volume: 880, intent: "Comercial" },
        { term: "drop zapatillas correr peso ligero", volume: 540, intent: "Informativa" },
        { term: "tallas calzado running horma ancha", volume: 410, intent: "Transaccional" },
      ],
      contentStructure: [
        "H1: Actualizar a 'Zapatillas de Running para Hombre (Guía y Catálogo 2026)'",
        "H2: Comparativa de amortiguación: Placa de carbono vs Espuma reactiva",
        "H2: Cómo elegir según tu tipo de pisada (Neutra, Pronadora, Supinadora)",
        "H2: Top 5 zapatillas de running recomendadas por kilometraje",
        "H2: Preguntas Frecuentes con marcado FAQPage Schema",
      ],
      recommendedWordCount: {
        current: 1120,
        recommended: 1850,
      },
      technicalNotes: [
        "Reemplazar imágenes de stock con fotos reales con atributo alt optimizado.",
        "Implementar tabla HTML responsiva con subgrid para comparar peso, drop y precio.",
      ],
    },
    verification: {
      day28: { status: "en_curso" },
      day60: { status: "pendiente" },
      day90: { status: "pendiente" },
    },
  },
  {
    id: "brief-102",
    pageId: "decay-3",
    pageUrl: "/zapatos-formales/oxford-clasico-negro",
    pageTitle: "Zapatos Oxford Clásicos Negros de Vestir",
    cause: "Canibalización interna",
    createdAt: "05 Mar 2026",
    executedAt: "08 Mar 2026",
    status: "ejecutado",
    revenueMode: "measured",
    revenueAtRisk: 1420,
    confidenceMargin: "±5.4%",
    actionPlan: {
      diagnosis:
        "Google alterna impresiones entre esta ficha de producto y la categoría /hombre/zapatos-vestir/oxford-cuero. Ninguna de las dos logra consolidar el CTR.",
      objective: "Consolidar autoridad en la URL principal mediante canonicalización y ajuste de enlazado interno.",
      missingKeywords: [
        { term: "zapatos oxford hombre charol boda", volume: 720, intent: "Transaccional" },
        { term: "oxford formal suela de cuero cosida", volume: 390, intent: "Comercial" },
      ],
      contentStructure: [
        "H1: Zapatos Oxford Clásicos en Cuero Legítimo Negro",
        "H2: Detalles de confección y cosido Goodyear welted",
        "H2: Cuándo usarlos: Guía de etiqueta formal y negocios",
      ],
      recommendedWordCount: { current: 650, recommended: 1100 },
      technicalNotes: [
        "Añadir enlace contextual desde la categoría hacia esta URL canónica con anchor exacto.",
      ],
    },
    verification: {
      day28: { status: "en_curso" },
      day60: { status: "pendiente" },
      day90: { status: "pendiente" },
    },
  },
  {
    id: "brief-100",
    pageId: "decay-6",
    pageUrl: "/accesorios/crema-cuidado-calzado-cuero",
    pageTitle: "Kit Limpieza y Crema Protectora de Cuero",
    cause: "Problemas técnicos",
    createdAt: "10 Ene 2026",
    executedAt: "14 Ene 2026",
    status: "verificado_28d",
    revenueMode: "measured",
    revenueAtRisk: 480,
    revenueRecovered: 620,
    confidenceMargin: "±3.9% (Descontada variación estacional de +4.1%)",
    actionPlan: {
      diagnosis:
        "El puntaje LCP de 4.8s provocó una caída de posiciones del puesto 3 al 8. La página tenía imágenes de 4MB sin formato WebP.",
      objective: "Comprimir imágenes, reducir LCP a <1.8s y añadir tutorial paso a paso de hidratación de calzado.",
      missingKeywords: [
        { term: "como hidratar zapatos de cuero resecos", volume: 1100, intent: "Informativa" },
        { term: "grasa de caballo vs crema nutritiva calzado", volume: 640, intent: "Comercial" },
      ],
      contentStructure: [
        "H1: Kit de Limpieza y Crema Nutritiva para Cuero",
        "H2: Guía de 4 pasos para restaurar cuero opaco",
      ],
      recommendedWordCount: { current: 480, recommended: 950 },
    },
    verification: {
      day28: { status: "completado", recovered: 620, confidence: "[$595 - $645]", seasonalAdjusted: "-4.1% ajuste estacional aplicado" },
      day60: { status: "en_curso" },
      day90: { status: "pendiente" },
    },
  },
];

export const DEMO_PLANS: PlanPricing[] = [
  {
    id: "free",
    name: "Free",
    priceMonthly: 0,
    priceAnnualMonthly: 0,
    targetAudience: "Probar el producto",
    description: "Para freelancers o dueños que quieren auditar su decay sin costo.",
    ctaText: "Comenzar gratis",
    features: [
      "1 sitio conectado",
      "3 briefs con IA por mes",
      "Diagnóstico de las 8 causas de decay",
      "Solo capa de tráfico (sin revenue en dólares)",
      "Historial de 30 días",
    ],
    limits: {
      sites: "1 sitio",
      briefsPerMonth: "3 / mes",
      revenueLayer: "Solo tráfico",
      whiteLabel: false,
      apiAccess: false,
    },
  },
  {
    id: "solo",
    name: "Solo",
    priceMonthly: 29,
    priceAnnualMonthly: 23,
    targetAudience: "Freelancer / Emprendedor",
    description: "Para profesionales que optimizan un sitio propio o de un cliente individual.",
    ctaText: "Elegir Solo",
    features: [
      "1 sitio conectado",
      "15 briefs con IA por mes",
      "Capa de revenue estimado con tus propios parámetros (AOV y Conversión)",
      "Verificación de resultados a 28 días",
      "Diagnóstico de 8 causas",
      "Soporte por email",
    ],
    limits: {
      sites: "1 sitio",
      briefsPerMonth: "15 / mes",
      revenueLayer: "Revenue estimado (parámetros)",
      whiteLabel: false,
      apiAccess: false,
    },
  },
  {
    id: "tienda",
    name: "Tienda",
    priceMonthly: 79,
    priceAnnualMonthly: 63,
    targetAudience: "Dueño de e-commerce",
    description: "Para tiendas online que necesitan conectar su facturación real.",
    ctaText: "Elegir Tienda",
    features: [
      "1 tienda conectada",
      "40 briefs con IA por mes",
      "Revenue medido de verdad con Shopify, WooCommerce o GA4",
      "Verificación completa a 28, 60 y 90 días con descuento estacional",
      "Priorización por dólares reales en riesgo",
      "Soporte prioritario",
    ],
    limits: {
      sites: "1 tienda",
      briefsPerMonth: "40 / mes",
      revenueLayer: "Revenue medido (integración directa)",
      whiteLabel: false,
      apiAccess: false,
    },
  },
  {
    id: "agencia",
    name: "Agencia",
    priceMonthly: 149,
    priceAnnualMonthly: 119,
    targetAudience: "Agencias SEO en crecimiento",
    description: "El plan ancla para retener clientes demostrando revenue recuperado mes a mes.",
    isAnchor: true,
    ctaText: "Empezar con Agencia",
    features: [
      "10 sitios y 10 clientes",
      "Briefs ilimitados con IA",
      "Revenue medido en todas las integraciones (Shopify, Woo, GA4)",
      "Marca blanca completa (White-label en reportes)",
      "Portal de solo lectura para compartir con clientes finales",
      "Descuento de estacionalidad automatizado",
      "Soporte VIP por Slack / WhatsApp",
    ],
    limits: {
      sites: "10 sitios",
      briefsPerMonth: "Ilimitados",
      revenueLayer: "Revenue medido + White-label",
      whiteLabel: true,
      apiAccess: false,
    },
  },
  {
    id: "studio",
    name: "Studio",
    priceMonthly: 249,
    priceAnnualMonthly: 199,
    targetAudience: "Agencias grandes y holdings",
    description: "Para operaciones de alto volumen que gestionan decenas de marcas.",
    ctaText: "Contactar para Studio",
    features: [
      "30 sitios y 30 clientes",
      "Briefs ilimitados con IA",
      "Todo lo del plan Agencia",
      "Acceso completo a API REST para automatizaciones",
      "Exportación masiva de datos en tiempo real",
      "Onboarding dedicado 1 a 1",
      "Acuerdo de nivel de servicio (SLA 99.9%)",
    ],
    limits: {
      sites: "30 sitios",
      briefsPerMonth: "Ilimitados",
      revenueLayer: "Revenue medido + White-label + API",
      whiteLabel: true,
      apiAccess: true,
    },
  },
];

export const DEMO_MONTHLY_REPORT = {
  month: "Febrero 2026",
  clientName: "Zapatos LatAm",
  domain: "zapatoslatam.com",
  currency: "USD",
  measuredNetRecovered: 14250,
  confidenceInterval: "[$13,560 - $14,940] (95% confianza)",
  seasonalDiscountApplied: "-$1,120 (Ajuste por estacionalidad del mercado)",
  marginOfError: "±4.8%",
  executedActionsCount: 4,
  decayPreventedCount: 6,
  breakdown: [
    {
      pageUrl: "/calzado-deportivo/zapatillas-running-hombre",
      executedDate: "14 Ene 2026",
      cause: "Contenido desactualizado",
      action: "Actualización a catálogo 2026 + FAQ pisada",
      recoveredAmount: 5680,
      mode: "measured" as const,
      status: "Verificado (60 días)",
      confidence: "[$5,410 - $5,950]",
    },
    {
      pageUrl: "/botas-cuero/botas-impermeables-montana",
      executedDate: "20 Ene 2026",
      cause: "Pérdida de posición",
      action: "Reestructuración H2/H3 + schema markup producto",
      recoveredAmount: 4320,
      mode: "measured" as const,
      status: "Verificado (28 días)",
      confidence: "[$4,080 - $4,560]",
    },
    {
      pageUrl: "/accesorios/crema-cuidado-calzado-cuero",
      executedDate: "14 Ene 2026",
      cause: "Problemas técnicos",
      action: "Compresión WebP y mejora de LCP de 4.8s a 1.6s",
      recoveredAmount: 620,
      mode: "measured" as const,
      status: "Verificado (28 días)",
      confidence: "[$595 - $645]",
    },
    {
      pageUrl: "/sandalias/sandalias-cuero-verano",
      executedDate: "02 Feb 2026",
      cause: "Canibalización interna",
      action: "Alineación de URLs canónicas y enlazado interno",
      recoveredAmount: 3630,
      mode: "measured" as const,
      status: "Verificado (28 días)",
      confidence: "[$3,440 - $3,820]",
    },
  ],
};
