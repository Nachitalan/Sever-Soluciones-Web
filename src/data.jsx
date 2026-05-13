import { I } from "./icons.jsx";

/* ══════════════════════════════════════
   EDITABLE DATA & CONSTANTS
   Edita aquí los textos, contactos y datos
   por defecto de la página.
   ══════════════════════════════════════ */

/* ── Default counters (sobreescritos por panel admin) ── */
export const COUNTERS = {
  yearFounded: 2013,
  tripsCompleted: 36000,
};

/* ── Floating contact buttons (WhatsApp + Email) ── */
export const FLOATING_CONTACT = {
  whatsappNumber: "523312945392",
  whatsappMessage: "Hola, me gustaría obtener información sobre sus servicios",
  emailAddress: "recursoshumanos@s-sever.com",
  emailSubject: "Contacto desde la página web",
};

/* ── Contact form: department emails ── */
export const DEPT_EMAILS = {
  ventas: { email: "gerencia.ventas@s-sever.com", label: "Ventas" },
  rh:     { email: "recursoshumanos@s-sever.com", label: "Recursos Humanos" },
};

/* ── Admin panel password ── */
export const ADMIN_PASSWORD = "Sever2025";

/* ══════════════════════════
   NAVIGATION STRUCTURE
   ══════════════════════════ */
export const NAV_STRUCTURE = [
  { type: "link", label: "Nosotros", target: "nosotros" },
  {
    type: "dropdown",
    label: "Servicios",
    target: "servicios",
    items: [
      { label: "Transporte Terrestre",       target: "servicios" },
      { label: "Importación y Exportación",  target: "servicios" },
      { label: "Agencia Aduanal",            target: "agencia-aduanal" },
      { label: "Capacidades",                target: "capacidades" },
      { label: "Nuestra Flotilla",           target: "flotilla" },
    ],
  },
  { type: "link", label: "Sectores",         target: "sectores" },
  { type: "link", label: "Sostenibilidad",   target: "sostenibilidad" },
  { type: "link", label: "Clientes",         target: "clientes" },
  { type: "link", label: "Bolsa de Trabajo", target: "bolsa-trabajo" },
  { type: "link", label: "Contacto",         target: "contacto" },
];

/* ══════════════════════════
   CERTIFICATIONS
   ══════════════════════════ */
export const CERTIFICATIONS = [
  { name: "C-TPAT",            img: "/ctpat-logo-arriba.png" },
  { name: "Transporte Limpio", img: "/certificacion-transportelimpio.png" },
  { name: "OEA",               img: "/Sello-OEA.png", enProceso: true },
  { name: "BASC",              img: "/BASC.png", cert: "CERTIFIED MEXGDL00215-1-2" },
];

/* ══════════════════════════
   PILARES (Nuestros valores)
   ══════════════════════════ */
export const PILARES = [
  {
    title: "Integridad",
    desc: "Honestidad y ética en cada paso que damos, construyendo relaciones de confianza con nuestros clientes y socios.",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  {
    title: "Excelencia y Crecimiento",
    desc: "Mejora continua y desarrollo constante en cada operación, impulsando la innovación para superar las expectativas.",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  },
  {
    title: "Colaboración y Empatía",
    desc: "Un equipo unido por el respeto y el bien común, donde cada persona aporta lo mejor de sí misma.",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  },
];

/* ══════════════════════════
   SERVICIOS (slide 4 del PDF)
   ══════════════════════════ */
export const SERVICIOS = [
  { icon: I.truck,   title: "Transporte Terrestre",      desc: "Caja Seca, refrigerada y congelada. Contenedores." },
  { icon: I.globe,   title: "Importación y Exportación", desc: "Gestión completa de comercio internacional con cumplimiento normativo." },
  { icon: I.customs, title: "Agencia Aduanal",           desc: "Trámites aduanales, clasificación arancelaria y permisos de comercio exterior." },
];

/* ══════════════════════════
   AGENCIA ADUANAL (slide 6 del PDF)
   ══════════════════════════ */
export const AGENCIA_ADUANAL = [
  { icon: I.globe,   title: "Importación y Exportación",              desc: "Gestionamos todos los procesos de importación y exportación, incluyendo documentación, aranceles e impuestos, asegurando el cumplimiento de regulaciones y optimizando costos y tiempos de envío." },
  { icon: I.customs, title: "Trámites de Aduana y Comercio Exterior", desc: "Gestión integral de trámites aduanales: clasificación arancelaria, permisos, certificación de origen, inspección de mercancías y cálculo y pago de impuestos y derechos aduaneros." },
  { icon: I.shield,  title: "Previos en Origen",                      desc: "Inspecciones antes del embarque para asegurar el cumplimiento normativo, evitando retenciones, multas y retrasos. Contamos con inspectores acreditados que garantizan la integridad de la mercancía." },
];

/* ══════════════════════════
   CAPACIDADES (slide 5 del PDF)
   ══════════════════════════ */
export const CAPACIDADES = [
  { icon: I.gps,    title: "Operación y Control",       desc: "Monitoreo 24/7 y gestión operativa centralizada." },
  { icon: I.truck,  title: "Infraestructura Flexible",  desc: "Flota dedicada y soluciones adaptadas a cada tipo de carga." },
  { icon: I.box,    title: "Cobertura y Logística",     desc: "Operación nacional y transfronteriza con entregas multipunto." },
  { icon: I.globe,  title: "Comercio Exterior",         desc: "Gestión integral aduanal y liberación de mercancía." },
  { icon: I.shield, title: "Seguridad Certificada",     desc: "Cumplimiento con estándares internacionales de calidad y seguridad." },
];

/* ══════════════════════════
   FLOTILLA (slide 7 del PDF)
   ══════════════════════════ */
export const FLOTILLA = [
  { 
    label: "Camionetas (1.5 TON)", 
    detail: "Toyota y Nissan refrigeradas. Capacidad de 3,000 lbs con espacio para 2-6 tarimas. Ideales para distribución local y entregas urbanas de alta frecuencia." 
  },
  { 
    label: "Rabones (3 - 10 TON)", 
    detail: "Hino e International con cabina separada. Mini Rabones de 3-6.5 TON y Rabones de 10 TON con capacidad de 6-12 tarimas. Perfectos para carga regional y transporte dedicado." 
  },
  { 
    label: "Tortones (15 TON)", 
    detail: "International refrigerados especializados. Ideales para transporte transfronterizo, entregas dedicadas de larga distancia y servicios a clientes mayoristas." 
  },
  { 
    label: "Tractocamiones & Trailers (26 TON)", 
    detail: "International, Kenworth, Freightliner y Scania. Hasta 24 tarimas en caja seca o refrigerada. Rastreo GPS y sellos de seguridad para transporte de larga distancia e importación/exportación." 
  },
];

/* ══════════════════════════
   SECTORES
   ══════════════════════════ */
export const SECTORES = [
  { icon: I.car,   name: "Automotriz" },
  { icon: I.food,  name: "Alimentos y Bebidas" },
  { icon: I.pill,  name: "Farmacéutica" },
  { icon: I.store, name: "Retail y Comercio" },
  { icon: I.chip,  name: "Electrónica" },
  { icon: I.box,   name: "Manufactura" },
];

/* ══════════════════════════
   SOSTENIBILIDAD
   ══════════════════════════ */
export const SOSTENIBILIDAD = [
  { title: "Transporte Limpio",     desc: "Certificados por SEMARNAT con compromiso de medición y reducción continua de emisiones contaminantes." },
  { title: "Flotilla Eficiente",    desc: "Unidades modernas con tecnologías de bajo consumo y monitoreo de rendimiento de combustible." },
  { title: "Operación Responsable", desc: "Capacitación continua en manejo eficiente, mantenimiento preventivo y cultura ambiental." },
];

/* ══════════════════════════
   VACANTES (default, editables desde panel admin)
   ══════════════════════════ */
export const VACANTES_DEFAULT = [
  { role: "Operador de Tractocamión",   type: "Tiempo completo", location: "Guadalajara, Jal.", exp: "3+ años" },
  { role: "Auxiliar de Logística",      type: "Tiempo completo", location: "Monterrey, N.L.",   exp: "1-2 años" },
  { role: "Coordinador de Operaciones", type: "Tiempo completo", location: "Guadalajara, Jal.", exp: "5+ años" },
  { role: "Ejecutivo de Ventas",        type: "Tiempo completo", location: "Híbrido",           exp: "2+ años" },
];

/* ══════════════════════════
   BENEFICIOS BOLSA DE TRABAJO
   ══════════════════════════ */
export const BOLSA_PERKS = [
  "Estabilidad laboral",
  "Capacitación continua",
  "Prestaciones superiores",
  "Ambiente colaborativo",
];
