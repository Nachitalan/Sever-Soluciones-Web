import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════
   EDITABLE COUNTERS — change these values
   ══════════════════════════════════════ */
const COUNTERS = {
  yearFounded: 2013,
  tripsCompleted: 36000,
};

/* ══════════════════════════════════════
   FLOATING CONTACT BUTTONS — RH info
   Edit here to change phone/email
   ══════════════════════════════════════ */
const FLOATING_CONTACT = {
  whatsappNumber: "523312945392", // formato internacional sin + ni espacios
  whatsappMessage: "Hola, me gustaria obtener informacion sobre sus servicios",
  emailAddress: "recursoshumanos@s-sever.com",
  emailSubject: "Contacto desde la pagina web",
};

/* ── Hooks ── */
function useCountUp(end, dur = 2200, go = false) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!go) return;
    let t0 = null;
    const step = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / dur, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, dur, go]);
  return n;
}

function useInView(opts = {}) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.15, ...opts });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, v];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, v] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: v ? 1 : 0,
      transform: v ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

/* ── Icons ── */
const I = {
  truck: <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  shield: <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  gps: <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg>,
  box: <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  snow: <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/></svg>,
  user: <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  phone: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.7 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.75.34 1.54.57 2.35.7A2 2 0 0122 16.92z"/></svg>,
  mail: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  pin: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  chevron: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  menu: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  close: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  arrow: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  car: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="6" width="22" height="12" rx="2"/><path d="M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2"/></svg>,
  food: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  pill: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4.5 12.5l6-6a4.24 4.24 0 016 6l-6 6a4.24 4.24 0 01-6-6z"/><line x1="10.5" y1="8.5" x2="15.5" y2="13.5"/></svg>,
  store: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l1-4h16l1 4"/><path d="M3 9v10a2 2 0 002 2h14a2 2 0 002-2V9"/><path d="M9 21V13h6v8"/></svg>,
  chip: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="15" x2="4" y2="15"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="15" x2="22" y2="15"/></svg>,
  whatsapp: <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>,
  atSymbol: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94"/></svg>,
  customs: <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 8h2"/><path d="M15 8h2"/><path d="M7 12h10"/></svg>,
  globe: <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  linkedin: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  instagram: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
};

/* ══════════════════════════
   PILARES DATA
   ══════════════════════════ */
const PILARES = [
  {
    title: "Integridad",
    desc: "Honestidad y ética en cada paso que damos, construyendo relaciones de confianza con nuestros clientes y socios.",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  {
    title: "Excelencia y Crecimiento",
    desc: "Mejora continua y desarrollo constante en cada operacion, impulsando la innovacion para superar las expectativas.",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  },
  {
    title: "Colaboracion y Empatia",
    desc: "Un equipo unido por el respeto y el bien comun, donde cada persona aporta lo mejor de si misma.",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  },
];

/* ══════════════════════════
   CERTIFICATIONS DATA
   ══════════════════════════ */
const CERTIFICATIONS = [
  { name: "C-TPAT", img: "/ctpat-logo-arriba.png" },
  { name: "Transporte Limpio", img: "/certificacion-transportelimpio.png" },
  { name: "OEA", img: "/Sello-OEA.png", note: "*En proceso" },
  { name: "BASC", img: "/BASC.png" },
];

/* ══════════════════════════
   MAIN COMPONENT
   ══════════════════════════ */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cRef, cVis] = useInView();
  const tripCount = useCountUp(COUNTERS.tripsCompleted, 2200, cVis);
  const [form, setForm] = useState({ nombre: "", apellido: "", email: "", telefono: "", mensaje: "", departamento: "ventas" });
  const [sent, setSent] = useState(false);
  const [activeTab, setActiveTab] = useState("ventas");

  useEffect(() => {
    const h = () => { /* reserved for future scroll-based effects */ };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  const DEPT_EMAILS = {
    ventas: { email: "gerencia.ventas@s-sever.com", label: "Ventas" },
    rh:     { email: "recursoshumanos@s-sever.com", label: "Recursos Humanos" },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dept = DEPT_EMAILS[form.departamento] || DEPT_EMAILS.ventas;
    const subject = `Contacto desde sitio web — ${dept.label} — ${form.nombre} ${form.apellido}`;
    const bodyLines = [
      `Nombre: ${form.nombre} ${form.apellido}`,
      `Email: ${form.email}`,
      `Telefono: ${form.telefono || "(no proporcionado)"}`,
      `Departamento: ${dept.label}`,
      ``,
      `Mensaje:`,
      form.mensaje,
      ``,
      `---`,
      `Enviado desde solucionessever.com`,
    ];
    const mailto = `mailto:${dept.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;

    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ nombre: "", apellido: "", email: "", telefono: "", mensaje: "", departamento: form.departamento });
  };

  const NAV_STRUCTURE = [
    { type: "link", label: "Nosotros", target: "nosotros" },
    {
      type: "dropdown",
      label: "Servicios",
      target: "servicios",
      items: [
        { label: "Transporte Local", target: "servicios" },
        { label: "Transporte Foraneo", target: "servicios" },
        { label: "Transporte a Frontera", target: "servicios" },
        { label: "Refrigerado / Congelado", target: "servicios" },
        { label: "Nuestra Flotilla", target: "flotilla" },
      ],
    },
    { type: "link", label: "Sectores", target: "sectores" },
    { type: "link", label: "Sostenibilidad", target: "sostenibilidad" },
    { type: "link", label: "Clientes", target: "clientes" },
    { type: "link", label: "Bolsa de Trabajo", target: "bolsa-trabajo" },
    { type: "link", label: "Contacto", target: "contacto" },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    if (openDropdown !== null) {
      document.addEventListener("mousedown", onClickOutside);
      return () => document.removeEventListener("mousedown", onClickOutside);
    }
  }, [openDropdown]);

  return (
    <div className="sever-root">
      <style>{CSS}</style>

      {/* ═══ NAV — Traxion-style solid bar ═══ */}
      <nav className="nav">
        <div className="nav__inner">
          <div className="nav__logo" onClick={() => go("hero")}>
            <img
              src="/sever-logo.png"
              alt="Soluciones Sever"
              className="nav__logo-img"
            />
            <div>
              <div className="nav__logo-text">SEVER</div>
              <div className="nav__logo-sub">SOLUCIONES LOGISTICAS</div>
            </div>
          </div>
          <div className="nav__links" ref={dropdownRef}>
            {NAV_STRUCTURE.map((item, idx) => {
              if (item.type === "dropdown") {
                const isOpen = openDropdown === idx;
                return (
                  <div key={item.label} className="nav__dropdown-wrap">
                    <button
                      className={`nav__link nav__link--dropdown ${isOpen ? "nav__link--active" : ""}`}
                      onClick={() => setOpenDropdown(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      {item.label}
                      <svg
                        width="12" height="12" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round"
                        style={{ marginLeft: 5, transition: "transform .2s", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
                      ><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                    {isOpen && (
                      <div className="nav__dropdown">
                        {item.items.map((sub) => (
                          <button
                            key={sub.label}
                            className="nav__dropdown-item"
                            onClick={() => { setOpenDropdown(null); go(sub.target); }}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <button key={item.target} onClick={() => go(item.target)} className="nav__link">
                  {item.label}
                </button>
              );
            })}
          </div>
          <button className="nav__cta" onClick={() => go("contacto")}>Solicitar Cotizacion</button>
          <button className="nav__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? I.close : I.menu}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_STRUCTURE.map((item) => {
            if (item.type === "dropdown") {
              return (
                <div key={item.label} className="mobile-menu__group">
                  <div className="mobile-menu__group-title">{item.label}</div>
                  {item.items.map((sub) => (
                    <button key={sub.label} onClick={() => go(sub.target)} className="mobile-menu__link mobile-menu__link--sub">
                      {sub.label}
                    </button>
                  ))}
                </div>
              );
            }
            return (
              <button key={item.target} onClick={() => go(item.target)} className="mobile-menu__link">{item.label}</button>
            );
          })}
          <button className="nav__cta" onClick={() => go("contacto")} style={{ marginTop: 12, width: "100%" }}>Solicitar Cotizacion</button>
        </div>
      )}


      {/* ═══ HERO ═══ */}
      <section id="hero" className="hero">
        <div className="hero__inner">
          <Reveal>
            <p className="hero__label">SOLUCIONES LOGISTICAS INTEGRALES</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="hero__title">Conectamos tu carga<br />con su destino</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="hero__sub">
              Servicio Especializado de Autotransporte local, foraneo y a frontera con EUA.
              Seguridad, eficiencia y tecnologia en cada viaje.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="hero__actions">
              <button className="btn btn--primary" onClick={() => go("contacto")}>Solicitar Cotizacion {I.arrow}</button>
              <button className="btn btn--outline" onClick={() => go("servicios")}>Ver Servicios</button>
            </div>
          </Reveal>
        </div>
        <div className="hero__scroll" onClick={() => go("certificaciones")}>
          {I.chevron}
        </div>
      </section>

      {/* ═══ CERTIFICATIONS BAR ═══ */}
      <section id="certificaciones" className="cert-bar">
        <div className="cert-bar__inner">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="cert-badge">
                <div className="cert-badge__img-wrap">
                  <img src={c.img} alt={c.name} className="cert-badge__img" />
                </div>
                <span className="cert-badge__name">{c.name}{c.note ? "*" : ""}</span>
              </div>
            </Reveal>
          ))}
          <span className="cert-bar__note">*En proceso</span>
        </div>
      </section>

      {/* ═══ NOSOTROS ═══ */}
      <section id="nosotros" className="section section--light">
        <div className="section__inner two-col">
          <Reveal>
            <div>
              <p className="section__label">QUIENES SOMOS</p>
              <h2 className="section__title">Acerca de<br />Soluciones Sever</h2>
              <p className="section__text">
                Soluciones Sever inicio operaciones en Mayo de 2013, con el firme proposito de ofrecer un
                Servicio Especializado de Autotransporte local, foraneo y a frontera con EUA, satisfaciendo
                las necesidades del transporte y logistica en la distribucion de mercancia.
              </p>
              <div ref={cRef} className="counter-row">
                <div className="counter-item">
                  <span className="counter-item__number">{new Date().getFullYear() - COUNTERS.yearFounded}+</span>
                  <span className="counter-item__label">Anos de experiencia</span>
                </div>
                <div className="counter-item">
                  <span className="counter-item__number">{tripCount.toLocaleString()}+</span>
                  <span className="counter-item__label">Viajes completados</span>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="mv-cards">
            <Reveal delay={0.1}>
              <div className="mv-card">
                <h3 className="mv-card__title">Mision</h3>
                <p className="mv-card__text">
                  Somos una empresa de servicios logisticos y de transporte.
                  Ofrecemos a nuestros clientes soluciones a la medida,
                  buscando la excelencia y rentabilidad con niveles optimos de
                  calidad y seguridad a traves de la innovacion y mejora continua.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mv-card">
                <h3 className="mv-card__title">Vision</h3>
                <p className="mv-card__text">
                  Posicionarnos como una de las empresas mas especializadas y
                  reconocidas en el sector de transporte y logistica, ampliando nuestro
                  alcance a nivel nacional e internacional con soluciones innovadoras.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      {/* ── PILARES ── */}
      <div className="pilares-wrap">
        <Reveal>
          <p className="section__label" style={{ textAlign: "center" }}>NUESTROS PILARES</p>
        </Reveal>
        <div className="pilares-grid">
          {PILARES.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="pilar-card">
                <div className="pilar-card__icon">{p.icon}</div>
                <h3 className="pilar-card__title">{p.title}</h3>
                <p className="pilar-card__text">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      </section>

      {/* ═══ SERVICIOS ═══ */}
      <section id="servicios" className="section section--white">
        <Reveal>
          <p className="section__label" style={{ textAlign: "center" }}>NUESTROS SERVICIOS</p>
          <h2 className="section__title" style={{ textAlign: "center" }}>Soluciones de Transporte</h2>
        </Reveal>
        <div className="serv-grid">
          {[
            { icon: I.truck, title: "Transporte Terrestre", desc: "Servicio de autotransporte de carga local, foraneo y a frontera: caja seca, refrigerada/congelada, contenedores y porta contenedores." },
            { icon: I.globe, title: "Importacion y Exportacion", desc: "Gestion completa de comercio internacional: documentacion, aranceles, permisos y cumplimiento normativo para optimizar costos y tiempos." },
            { icon: I.customs, title: "Agencia Aduanal", desc: "Tramites de aduana y comercio exterior: clasificacion arancelaria, certificacion de origen, inspeccion de mercancias y previos en origen." },
            { icon: I.gps, title: "Rastreo Satelital 24/7", desc: "Monitoreo GPS en tiempo real las 24 horas. Gestion operativa centralizada para que siempre sepas donde esta tu mercancia." },
            { icon: I.shield, title: "Seguridad Certificada", desc: "Certificaciones BASC, C-TPAT, OEA y Transporte Limpio que garantizan la proteccion de tu carga en cada eslabón de la cadena." },
            { icon: I.user, title: "Atencion Personalizada", desc: "Asignamos un ejecutivo dedicado para cada cliente, asegurando comunicacion directa, soluciones a la medida y respuesta inmediata." },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="serv-card">
                <div className="serv-card__icon">{s.icon}</div>
                <h3 className="serv-card__title">{s.title}</h3>
                <p className="serv-card__text">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ FLOTILLA ═══ */}
      <section id="flotilla" className="section section--light">
        <Reveal>
          <p className="section__label" style={{ textAlign: "center" }}>FLOTILLA</p>
          <h2 className="section__title" style={{ textAlign: "center" }}>Nuestra Flota Vehicular</h2>
          <p className="section__text" style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 40px" }}>
            Contamos con unidades modernas y en optimas condiciones, equipadas con la ultima tecnologia en seguridad y rastreo satelital.
          </p>
        </Reveal>
        <div className="flot-grid">
          {[
            { label: "Camionetas (1.5 – 4.5 Ton)", count: "2–6", detail: "Capacidad de 3,000 a 10,000 lbs con espacio para hasta 6 tarimas. Ideales para distribucion local y entregas urbanas de alta frecuencia con maniobrabilidad optima." },
            { label: "Camiones Medianos (7 – 14 Ton)", count: "6–12", detail: "Desde 14,000 hasta 30,000 lbs con capacidad para 6 a 12 tarimas. Perfectos para carga regional y rutas de mediano alcance con mayor volumen." },
            { label: "Trailers 53'", count: "24", detail: "Hasta 24 tarimas en caja seca o refrigerada/congelada. Unidades de ultima generacion con rastreo GPS permanente y sellos de seguridad certificados." },
            { label: "Porta Contenedores", count: "20'/40'", detail: "Equipados para maniobra y traslado de contenedores de importacion y exportacion, con integracion directa a nuestro servicio de agencia aduanal." },
          ].map((f, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flot-card">
                <div className="flot-card__image">
                  <div className="flot-card__image-placeholder">
                    {I.truck}
                    <span>Imagen</span>
                  </div>
                </div>
                <div className="flot-card__body">
                  <span className="flot-card__count">{f.count}</span>
                  <span className="flot-card__label">{f.label}</span>
                  <span className="flot-card__detail">{f.detail}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="placeholder-notice">
            <span className="placeholder-notice__dot" />
            Proximamente: galeria fotografica real de cada tipo de unidad con especificaciones tecnicas detalladas.
          </div>
        </Reveal>
      </section>

      {/* ═══ SECTORES ═══ */}
      <section id="sectores" className="section section--white">
        <Reveal>
          <p className="section__label" style={{ textAlign: "center" }}>SECTORES</p>
          <h2 className="section__title" style={{ textAlign: "center" }}>Industrias que Servimos</h2>
        </Reveal>
        <div className="sector-grid">
          {[
            { icon: I.car, name: "Automotriz" },
            { icon: I.food, name: "Alimentos y Bebidas" },
            { icon: I.pill, name: "Farmaceutica" },
            { icon: I.store, name: "Retail y Comercio" },
            { icon: I.chip, name: "Electronica" },
            { icon: I.box, name: "Manufactura" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="sector-card">
                <div className="sector-card__icon">{s.icon}</div>
                <span className="sector-card__name">{s.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ SOSTENIBILIDAD (placeholder) ═══ */}
      <section id="sostenibilidad" className="section section--light">
        <Reveal>
          <p className="section__label" style={{ textAlign: "center" }}>SOSTENIBILIDAD</p>
          <h2 className="section__title" style={{ textAlign: "center" }}>Compromiso con el Medio Ambiente</h2>
          <p className="section__text" style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 48px" }}>
            En Soluciones Sever trabajamos bajo los lineamientos del programa Transporte Limpio de la SEMARNAT,
            reduciendo emisiones y adoptando practicas responsables en cada operacion.
          </p>
        </Reveal>
        <div className="susten-grid">
          {[
            { title: "Transporte Limpio", desc: "Certificados por SEMARNAT con compromiso de medicion y reduccion continua de emisiones contaminantes." },
            { title: "Flotilla Eficiente", desc: "Unidades modernas con tecnologias de bajo consumo y monitoreo de rendimiento de combustible." },
            { title: "Operacion Responsable", desc: "Capacitacion continua en manejo eficiente, mantenimiento preventivo y cultura ambiental." },
          ].map((card, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="susten-card">
                <div className="susten-card__badge">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="susten-card__title">{card.title}</h3>
                <p className="susten-card__text">{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="placeholder-notice">
            <span className="placeholder-notice__dot" />
            Proximamente: reporte anual de sostenibilidad, indicadores de reduccion de CO2 y certificaciones ambientales ampliadas.
          </div>
        </Reveal>
      </section>

      {/* ═══ CLIENTES (placeholder) ═══ */}
      <section id="clientes" className="section section--white">
        <Reveal>
          <p className="section__label" style={{ textAlign: "center" }}>CLIENTES</p>
          <h2 className="section__title" style={{ textAlign: "center" }}>Quienes confian en nosotros</h2>
          <p className="section__text" style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 48px" }}>
            Acompanamos a grandes empresas farmaceuticas, cadenas de autoservicio, operadores logisticos internacionales y fabricantes en su operacion diaria.
          </p>
        </Reveal>
        <div className="clients-grid">
          {[
            { name: "PISA", sector: "Farmaceutica" },
            { name: "WALMART", sector: "Autoservicio" },
            { name: "PAK 2GO", sector: "Logistica" },
            { name: "VALLE REDONDO", sector: "Alimentos" },
            { name: "BAYWA R.E.", sector: "Energia" },
            { name: "KRAFT HEINZ", sector: "Alimentos" },
            { name: "BAMBERGER POLYMERS", sector: "Quimica" },
            { name: "CBI GROUP", sector: "Logistica" },
            { name: "KUEHNE+NAGEL", sector: "Logistica" },
            { name: "POLNAC", sector: "Quimica" },
            { name: "SERVI-BOLSA", sector: "Retail" },
            { name: "FRIALSA", sector: "Cadena de Frio" },
            { name: "CAB LOGISTICS", sector: "Logistica" },
            { name: "SOLISTICA", sector: "Logistica" },
            { name: "HALTER LOGISTICS", sector: "Logistica" },
            { name: "DOZA LOGISTICA", sector: "Logistica" },
            { name: "LA MODERNA", sector: "Alimentos" },
            { name: "TUK", sector: "Retail" },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="client-logo-card">
                <div className="client-logo-card__placeholder">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                  <span className="client-logo-card__name">{c.name}</span>
                  <span className="client-logo-card__sector">{c.sector}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="placeholder-notice" style={{ borderColor: "rgba(0,180,216,0.2)", background: "rgba(0,180,216,0.03)" }}>
            <span className="placeholder-notice__dot" />
            Proximamente: logos oficiales de cada cliente. Los nombres mostrados cuentan con autorizacion para su publicacion.
          </div>
        </Reveal>
      </section>

      {/* ═══ BOLSA DE TRABAJO (placeholder) ═══ */}
      <section id="bolsa-trabajo" className="section section--light">
        <div className="bolsa-layout">
          <Reveal>
            <div className="bolsa-left">
              <p className="section__label">BOLSA DE TRABAJO</p>
              <h2 className="section__title">Unete al<br/>Equipo Sever</h2>
              <p className="section__text">
                Somos una empresa que crece con su gente. Si buscas formar parte de un equipo profesional
                comprometido con la excelencia operativa y la seguridad, queremos conocerte.
              </p>
              <div className="bolsa-perks">
                {["Estabilidad laboral", "Capacitacion continua", "Prestaciones superiores", "Ambiente colaborativo"].map((p, i) => (
                  <div key={i} className="bolsa-perk">
                    <span className="bolsa-perk__check">{I.arrow}</span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
              <div className="bolsa-cta">
                <a
                  href={`mailto:recursoshumanos@s-sever.com?subject=${encodeURIComponent("Envio de CV - Bolsa de Trabajo")}`}
                  className="btn btn--primary"
                >
                  Enviar mi CV {I.arrow}
                </a>
                <span className="bolsa-cta__or">o</span>
                <a href="tel:+523312945392" className="btn btn--outline-dark">
                  Llamar a RH
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="bolsa-right">
              <div className="vacancy-panel">
                <div className="vacancy-panel__header">
                  <span className="vacancy-panel__title">Vacantes Disponibles</span>
                  <span className="vacancy-panel__badge">Ejemplo</span>
                </div>
                <div className="vacancy-list">
                  {[
                    { role: "Operador de Tractocamion", type: "Tiempo completo", location: "Guadalajara, Jal.", exp: "3+ anos" },
                    { role: "Auxiliar de Logistica", type: "Tiempo completo", location: "Monterrey, N.L.", exp: "1-2 anos" },
                    { role: "Coordinador de Operaciones", type: "Tiempo completo", location: "Guadalajara, Jal.", exp: "5+ anos" },
                    { role: "Ejecutivo de Ventas", type: "Tiempo completo", location: "Hibrido", exp: "2+ anos" },
                  ].map((v, i) => (
                    <div key={i} className="vacancy-item">
                      <div className="vacancy-item__main">
                        <h4 className="vacancy-item__role">{v.role}</h4>
                        <div className="vacancy-item__meta">
                          <span>{v.type}</span>
                          <span className="vacancy-item__dot" />
                          <span>{v.location}</span>
                          <span className="vacancy-item__dot" />
                          <span>{v.exp}</span>
                        </div>
                      </div>
                      <a
                        href={`mailto:recursoshumanos@s-sever.com?subject=${encodeURIComponent(`Postulacion: ${v.role}`)}`}
                        className="vacancy-item__btn"
                        aria-label={`Postular a ${v.role}`}
                      >
                        {I.arrow}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="vacancy-footer">
                  <span className="vacancy-footer__label">Vacantes de ejemplo</span>
                  <span className="vacancy-footer__text">El listado real sera gestionado por Recursos Humanos.</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CONTACTO ═══ */}
      <section id="contacto" className="section section--dark">
        <Reveal>
          <p className="section__label" style={{ textAlign: "center", color: "#00b4d8" }}>CONTACTO</p>
          <h2 className="section__title" style={{ textAlign: "center", color: "#fff" }}>Trabajemos Juntos</h2>
        </Reveal>
        <div className="contact-layout">
          <div className="contact-cards">
            {[
              {
                key: "ventas",
                badge: "Ventas",
                icon: I.phone,
                rows: [
                  { label: "Gerente Comercial", value: "Bernardo Garza", link: null },
                  { label: "Telefono", value: "+52 (81) 1910 3303", link: "tel:+528119103303" },
                  { label: "Email", value: "gerencia.ventas@s-sever.com", link: "mailto:gerencia.ventas@s-sever.com" },
                ],
              },
              {
                key: "operaciones",
                badge: "Direccion General",
                icon: I.user,
                rows: [
                  { label: "Director General", value: "Jose Antonio Garza", link: null },
                  { label: "Telefono", value: "+52 (33) 1409 9074", link: "tel:+523314099074" },
                  { label: "Email", value: "josegarza@s-sever.com", link: "mailto:josegarza@s-sever.com" },
                ],
              },
            ].map((tab) => (
              <div
                key={tab.key}
                className={`contact-tab ${activeTab === tab.key ? "contact-tab--active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <div className="contact-tab__header">
                  <div className="contact-tab__icon-wrap">{tab.icon}</div>
                  <span className="contact-tab__badge">{tab.badge}</span>
                </div>
                {activeTab === tab.key && (
                  <div className="contact-tab__body">
                    {tab.rows.map((r) => (
                      <div key={r.label} className="contact-tab__row">
                        <span className="contact-tab__label">{r.label}</span>
                        {r.link ? (
                          <a href={r.link} className="contact-tab__value contact-tab__value--link">{r.value}</a>
                        ) : (
                          <span className="contact-tab__value">{r.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="contact-map-hint">
              <div className="contact-map-hint__icon">{I.pin}</div>
              <span className="contact-map-hint__text">Zapopan y Tlajomulco de Zuñiga, Jalisco, Mexico</span>
            </div>
          </div>

          <div className="contact-form-wrap">
            <div className="contact-form-wrap__header">
              <div className="contact-tab__icon-wrap">{I.mail}</div>
              <span className="contact-form-wrap__title">Enviar Mensaje</span>
            </div>
            {sent ? (
              <div className="form-success">
                <div className="form-success__check">✓</div>
                <p className="form-success__title">Abriendo tu correo...</p>
                <p className="form-success__text">Se abrio tu cliente de correo con el mensaje listo para <strong>{DEPT_EMAILS[form.departamento].label}</strong>. Solo confirma el envio.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Departamento</label>
                  <div className="dept-selector">
                    {Object.entries(DEPT_EMAILS).map(([key, d]) => (
                      <button
                        type="button"
                        key={key}
                        className={`dept-pill ${form.departamento === key ? "dept-pill--active" : ""}`}
                        onClick={() => setForm({ ...form, departamento: key })}
                      >
                        <span className="dept-pill__icon">
                          {key === "ventas" ? I.phone : I.user}
                        </span>
                        <span>{d.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Nombre</label>
                    <input className="form-input" placeholder="Tu nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Apellido</label>
                    <input className="form-input" placeholder="Tu apellido" value={form.apellido} onChange={e => setForm({ ...form, apellido: e.target.value })} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" placeholder="correo@ejemplo.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Telefono</label>
                    <input className="form-input" type="tel" placeholder="(33) 0000-0000" value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Mensaje</label>
                  <textarea className="form-input form-input--ta" placeholder={form.departamento === "ventas" ? "Describe tu necesidad de transporte o solicita una cotizacion..." : "Cuentanos sobre tu perfil profesional o interes en postularte..."} value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} required />
                </div>
                <button type="submit" className="btn btn--primary" style={{ width: "100%" }}>
                  Enviar a {DEPT_EMAILS[form.departamento].label} {I.arrow}
                </button>
                <p className="form-note">Al enviar se abrira tu cliente de correo con el mensaje pre-llenado.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ═══ FLOATING CONTACT BUTTONS ═══ */}
      <div className="floating-contact" role="complementary" aria-label="Contacto rapido">
        <a
          href={`https://wa.me/${FLOATING_CONTACT.whatsappNumber}?text=${encodeURIComponent(FLOATING_CONTACT.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-btn--whatsapp"
          aria-label="Contactar por WhatsApp"
        >
          <span className="floating-btn__icon">{I.whatsapp}</span>
          <span className="floating-btn__tooltip">Chatea con nosotros</span>
        </a>
        <a
          href={`mailto:${FLOATING_CONTACT.emailAddress}?subject=${encodeURIComponent(FLOATING_CONTACT.emailSubject)}`}
          className="floating-btn floating-btn--email"
          aria-label="Enviar correo electronico"
        >
          <span className="floating-btn__icon">{I.atSymbol}</span>
          <span className="floating-btn__tooltip">Enviar correo</span>
        </a>
      </div>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="footer__main">
          <div className="footer__col footer__col--brand">
            <div className="footer__logo" onClick={() => go("hero")}>
              <img
                src="/sever-logo.png"
                alt="Soluciones Sever"
                className="footer__logo-img"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <div className="nav__logo-text" style={{ color: "#fff" }}>SEVER</div>
                <div className="nav__logo-sub" style={{ color: "rgba(255,255,255,0.5)" }}>SOLUCIONES LOGISTICAS</div>
              </div>
            </div>
            <p className="footer__tagline">
              Servicio especializado de autotransporte local, foraneo y a frontera con EUA. En ruta desde 2013.
            </p>
            <div className="footer__social">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="Facebook">{I.facebook}</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="LinkedIn">{I.linkedin}</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="Instagram">{I.instagram}</a>
              <a href={`https://wa.me/${FLOATING_CONTACT.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="WhatsApp">{I.whatsapp}</a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Navegacion</h4>
            <div className="footer__list">
              {NAV_STRUCTURE.map((item) => (
                <button key={item.label} onClick={() => go(item.target)} className="footer__link">{item.label}</button>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contacto</h4>
            <div className="footer__list">
              <div className="footer__contact-group">
                <span className="footer__contact-label">Ventas</span>
                <a href="tel:+528119103303" className="footer__link-static">+52 81 1910 3303</a>
                <a href="mailto:gerencia.ventas@s-sever.com" className="footer__link-static">gerencia.ventas@s-sever.com</a>
              </div>
              <div className="footer__contact-group">
                <span className="footer__contact-label">Direccion General</span>
                <a href="tel:+523314099074" className="footer__link-static">+52 33 1409 9074</a>
                <a href="mailto:josegarza@s-sever.com" className="footer__link-static">josegarza@s-sever.com</a>
              </div>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Ubicacion</h4>
            <div className="footer__list">
              <div className="footer__contact-group">
                <span className="footer__contact-label">Oficinas Administrativas</span>
                <span className="footer__link-static">Av. Ignacio L Vallarta #6503</span>
                <span className="footer__link-static">Int. H11, Col. Ciudad Granja</span>
                <span className="footer__link-static">Zapopan, Jal. C.P. 45010</span>
              </div>
              <div className="footer__contact-group">
                <span className="footer__contact-label">Patio Operativo</span>
                <span className="footer__link-static">Dr. Pedro Juan Mirassou y Tarno</span>
                <span className="footer__link-static">Tlajomulco de Zuñiga, Jal. C.P. 45610</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bar">
          <span>© {new Date().getFullYear()} Soluciones Sever. Todos los derechos reservados.</span>
          <span className="footer__bar-links">
            <a href="#" className="footer__bar-link">Aviso de Privacidad</a>
            <span className="footer__bar-sep">·</span>
            <a href="#" className="footer__bar-link">Terminos y Condiciones</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

/* ══════════════════════════════════════
   STYLES
   ══════════════════════════════════════ */
const CSS = `
/* ── RESET & BASE ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
.sever-root {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #1a2b3f; line-height: 1.6; overflow-x: hidden;
}
img { max-width: 100%; height: auto; }

/* ── NAV ── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 0 24px;
  background: #0a2a4a;
  box-shadow: 0 2px 20px rgba(0,0,0,0.15);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.nav__inner {
  max-width: 1400px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: 76px;
}
.nav__logo {
  display: flex; align-items: center; gap: 12px; cursor: pointer;
  padding-right: 24px;
  border-right: 1px solid rgba(255,255,255,0.08);
  margin-right: 8px;
}
.nav__logo-img {
  height: 42px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
}
.nav__logo-text {
  font-size: 20px; font-weight: 800; color: #fff;
  letter-spacing: 0.14em; line-height: 1;
}
.nav__logo-sub {
  font-size: 9px; color: rgba(255,255,255,0.5);
  letter-spacing: 0.14em; font-weight: 500;
  margin-top: 4px;
}
.nav__links {
  display: flex; gap: 2px; align-items: center; flex: 1; justify-content: flex-end;
  margin-right: 16px;
}
.nav__link {
  position: relative;
  background: none; border: none; color: rgba(255,255,255,0.82);
  font-size: 14px; font-weight: 500; cursor: pointer;
  font-family: inherit; padding: 10px 14px; border-radius: 0;
  transition: color 0.2s;
  display: inline-flex; align-items: center;
  letter-spacing: 0.01em;
}
.nav__link::after {
  content: "";
  position: absolute;
  left: 14px; right: 14px;
  bottom: 4px;
  height: 2px;
  background: #00b4d8;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.25s cubic-bezier(.16,1,.3,1);
}
.nav__link:hover { color: #fff; }
.nav__link:hover::after { transform: scaleX(1); }
.nav__link--active { color: #fff; }
.nav__link--active::after { transform: scaleX(1); }

/* Dropdown */
.nav__dropdown-wrap { position: relative; }
.nav__link--dropdown { gap: 2px; }
.nav__dropdown {
  position: absolute;
  top: calc(100% - 2px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 220px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08);
  padding: 8px;
  display: flex; flex-direction: column;
  border: 1px solid #e8ecf1;
  z-index: 120;
  animation: ddIn 0.22s cubic-bezier(.16,1,.3,1);
}
@keyframes ddIn {
  from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}
.nav__dropdown::before {
  content: "";
  position: absolute;
  top: -6px; left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px; height: 12px;
  background: #fff;
  border-left: 1px solid #e8ecf1;
  border-top: 1px solid #e8ecf1;
}
.nav__dropdown-item {
  background: none; border: none; text-align: left;
  padding: 11px 16px; border-radius: 6px;
  font-size: 14px; font-weight: 500; color: #0a2a4a;
  cursor: pointer; font-family: inherit;
  transition: all 0.18s;
  display: flex; align-items: center;
}
.nav__dropdown-item::before {
  content: "";
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #e8ecf1;
  margin-right: 10px;
  transition: all 0.18s;
  flex-shrink: 0;
}
.nav__dropdown-item:hover {
  background: #f0f9fc;
  color: #00b4d8;
}
.nav__dropdown-item:hover::before {
  background: #00b4d8;
  transform: scale(1.3);
}

.nav__cta {
  background: #00b4d8; color: #fff; border: none;
  padding: 11px 22px; border-radius: 6px;
  font-size: 13px; font-weight: 600; cursor: pointer;
  font-family: inherit; transition: all 0.25s;
  letter-spacing: 0.02em;
  white-space: nowrap;
}
.nav__cta:hover { background: #0096b7; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(0,180,216,0.35); }
.nav__hamburger {
  display: none; background: none; border: none;
  color: #fff; cursor: pointer; padding: 4px;
}

/* ── MOBILE MENU ── */
.mobile-menu {
  position: fixed; top: 76px; left: 0; right: 0; z-index: 99;
  background: #0a2a4a;
  padding: 20px 24px; display: flex; flex-direction: column;
  box-shadow: 0 8px 30px rgba(0,0,0,0.25);
  max-height: calc(100vh - 76px);
  overflow-y: auto;
}
.mobile-menu__link {
  background: none; border: none; text-align: left;
  padding: 14px 0; font-size: 16px; font-weight: 500;
  color: #fff; cursor: pointer; font-family: inherit;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.mobile-menu__link--sub {
  padding-left: 16px;
  font-size: 14px;
  color: rgba(255,255,255,0.7);
}
.mobile-menu__group {
  display: flex; flex-direction: column;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding: 10px 0;
}
.mobile-menu__group-title {
  font-size: 12px; font-weight: 700; letter-spacing: 0.12em;
  color: #00b4d8; text-transform: uppercase;
  padding: 8px 0;
}
.mobile-menu__group .mobile-menu__link--sub {
  border-bottom: none;
  padding: 10px 0 10px 16px;
}

/* ── HERO ── */
.hero {
  min-height: 100vh; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center; padding: 120px 24px 80px;
  background: linear-gradient(165deg, #0a2a4a 0%, #0d3b66 40%, #0e4d80 100%);
  position: relative; overflow: hidden;
}
.hero::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 70% 20%, rgba(0,180,216,0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 30% 80%, rgba(0,180,216,0.06) 0%, transparent 50%);
}
.hero__inner { position: relative; max-width: 750px; }
.hero__label {
  font-size: 12px; font-weight: 700; letter-spacing: 0.2em;
  color: #00b4d8; margin-bottom: 20px;
}
.hero__title {
  font-size: clamp(36px, 5.5vw, 60px); font-weight: 800;
  color: #fff; line-height: 1.1; margin-bottom: 22px;
}
.hero__sub {
  font-size: 17px; color: rgba(255,255,255,0.6);
  max-width: 520px; margin: 0 auto 36px; line-height: 1.7;
}
.hero__actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.hero__scroll {
  position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
  color: rgba(255,255,255,0.3); cursor: pointer;
  animation: bob 2s ease-in-out infinite;
}
@keyframes bob { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }

/* ── BUTTONS ── */
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; border-radius: 10px;
  font-size: 15px; font-weight: 600; cursor: pointer;
  font-family: inherit; transition: all 0.25s; border: none;
}
.btn--primary { background: #00b4d8; color: #fff; }
.btn--primary:hover { background: #0096b7; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,180,216,0.3); }
.btn--outline { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.25); }
.btn--outline:hover { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.06); }

/* ── CERTIFICATIONS BAR ── */
.cert-bar {
  background: #fff;
  padding: 40px 24px;
  border-bottom: 1px solid #e8ecf1;
}
.cert-bar__inner {
  max-width: 900px; margin: 0 auto;
  display: flex; align-items: center; justify-content: center;
  gap: 32px; flex-wrap: wrap;
}
.cert-badge {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 24px;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  background: #fff;
  transition: all 0.3s;
}
.cert-badge:hover {
  border-color: #00b4d8;
  box-shadow: 0 4px 16px rgba(0,180,216,0.08);
  transform: translateY(-2px);
}
.cert-badge__img-wrap {
  width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.cert-badge__img {
  max-width: 36px; max-height: 36px;
  object-fit: contain;
}
.cert-badge__name {
  font-size: 14px; font-weight: 600; color: #0a2a4a;
  white-space: nowrap;
}
.cert-bar__note {
  font-size: 12px; color: #94a3b8; font-style: italic;
}

/* ── SECTIONS ── */
.section { padding: 90px 24px; }
.section--light { background: #f8fafb; }
.section--white { background: #fff; }
.section--dark { background: linear-gradient(170deg, #0a2a4a, #0d3b66); }
.section__inner { max-width: 1100px; margin: 0 auto; }
.section__label {
  font-size: 12px; font-weight: 700; letter-spacing: 0.18em;
  color: #00b4d8; margin-bottom: 12px; text-transform: uppercase;
}
.section__title {
  font-size: clamp(28px, 4vw, 42px); font-weight: 800;
  color: #0a2a4a; line-height: 1.15; margin-bottom: 20px;
}
.section__text {
  font-size: 16px; color: #5a6b7e; line-height: 1.75; max-width: 540px;
}
.two-col {
  display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: start;
  max-width: 1100px; margin: 0 auto;
}

/* ── COUNTERS ── */
.counter-row { display: flex; gap: 40px; margin-top: 36px; }
.counter-item { display: flex; flex-direction: column; }
.counter-item__number { font-size: 38px; font-weight: 800; color: #00b4d8; line-height: 1; }
.counter-item__label { font-size: 13px; color: #7a8b9e; margin-top: 6px; }

/* ── MISSION/VISION CARDS ── */
.mv-cards { display: flex; flex-direction: column; gap: 20px; }
.mv-card {
  padding: 32px; border-radius: 16px;
  background: #fff; border: 1px solid #e8ecf1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  transition: all 0.3s;
}
.mv-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.06); transform: translateY(-2px); }
.mv-card__title { font-size: 20px; font-weight: 700; color: #0a2a4a; margin-bottom: 12px; }
.mv-card__text { font-size: 15px; color: #5a6b7e; line-height: 1.7; margin: 0; }

/* ── SERVICES ── */
.serv-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px;
  max-width: 1100px; margin: 40px auto 0;
}
.serv-card {
  padding: 32px 28px; border-radius: 14px;
  background: #f8fafb; border: 1px solid #e8ecf1;
  transition: all 0.3s; cursor: default;
}
.serv-card:hover { background: #fff; border-color: #00b4d8; box-shadow: 0 8px 28px rgba(0,180,216,0.08); transform: translateY(-3px); }
.serv-card__icon { color: #00b4d8; margin-bottom: 16px; }
.serv-card__title { font-size: 17px; font-weight: 700; color: #0a2a4a; margin-bottom: 10px; }
.serv-card__text { font-size: 14px; color: #5a6b7e; line-height: 1.7; margin: 0; }

/* ── FLOTILLA ── */
.flot-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
  max-width: 1200px; margin: 0 auto;
}
.flot-card {
  display: flex; flex-direction: column;
  border-radius: 14px; overflow: hidden;
  background: #fff; border: 1px solid #e8ecf1;
  transition: all 0.3s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
}
.flot-card:hover {
  border-color: #00b4d8;
  box-shadow: 0 14px 36px rgba(0,180,216,0.12);
  transform: translateY(-3px);
}
.flot-card__image {
  aspect-ratio: 16/10;
  background: linear-gradient(135deg, #eef3f7 0%, #dde5ee 100%);
  display: flex; align-items: center; justify-content: center;
  position: relative;
  overflow: hidden;
}
.flot-card__image::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 80%, rgba(0,180,216,0.08) 0%, transparent 70%);
}
.flot-card__image-placeholder {
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  color: #a7b5c4;
  font-size: 10px; font-weight: 700;
  letter-spacing: 0.16em; text-transform: uppercase;
  position: relative; z-index: 1;
}
.flot-card__image-placeholder svg {
  width: 44px; height: 44px;
  opacity: 0.6;
}
.flot-card:hover .flot-card__image-placeholder {
  color: #00b4d8;
}
.flot-card__body {
  padding: 24px 22px 26px;
  display: flex; flex-direction: column;
  gap: 4px;
  text-align: left;
}
.flot-card__count {
  font-size: 34px; font-weight: 800; color: #00b4d8;
  line-height: 1;
  font-family: 'Playfair Display', Georgia, serif;
}
.flot-card__label {
  font-size: 16px; font-weight: 700; color: #0a2a4a;
  margin-top: 8px;
}
.flot-card__detail {
  font-size: 13px; color: #6a7b91;
  margin-top: 6px; line-height: 1.55;
}

/* ── SECTORS ── */
.sector-grid {
  display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px;
  max-width: 1000px; margin: 40px auto 0;
}
.sector-card {
  display: flex; flex-direction: column; align-items: center; gap: 14px;
  padding: 40px 20px; border-radius: 12px;
  background: #fff; border: 1px solid #e8ecf1;
  transition: all 0.3s; cursor: default;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
}
.sector-card:hover { border-color: #00b4d8; box-shadow: 0 8px 28px rgba(0,180,216,0.08); transform: translateY(-3px); }
.sector-card__icon { color: #0a2a4a; }
.sector-card:hover .sector-card__icon { color: #00b4d8; }
.sector-card__name { font-size: 14px; font-weight: 600; color: #0a2a4a; text-align: center; }

/* ── CONTACTO ── */
.contact-layout {
  display: grid; grid-template-columns: 1fr 1.15fr; gap: 40px; align-items: start;
  max-width: 1100px; margin: 40px auto 0;
}
.contact-cards { display: flex; flex-direction: column; gap: 16px; }
.contact-tab {
  border-radius: 14px; overflow: hidden; cursor: pointer;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.3s;
}
.contact-tab--active {
  background: rgba(0,180,216,0.08); border-color: rgba(0,180,216,0.25);
}
.contact-tab__header {
  display: flex; align-items: center; gap: 14px;
  padding: 20px 24px 0;
}
.contact-tab__icon-wrap {
  width: 44px; height: 44px; border-radius: 12px;
  background: rgba(0,180,216,0.12); display: flex; align-items: center; justify-content: center;
  color: #00b4d8;
}
.contact-tab__badge {
  font-size: 16px; font-weight: 700; color: #fff;
}
.contact-tab__body { padding: 16px 24px 22px; }
.contact-tab__row {
  display: flex; justify-content: space-between; align-items: center;
  padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
}
.contact-tab__row:last-child { border-bottom: none; }
.contact-tab__label {
  font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.35);
  text-transform: uppercase; letter-spacing: 0.06em;
}
.contact-tab__value {
  font-size: 14px; color: rgba(255,255,255,0.8); text-decoration: none;
  font-weight: 500;
}
.contact-tab__value--link { color: #00b4d8; }
.contact-tab__value--link:hover { text-decoration: underline; }
.contact-map-hint {
  display: flex; align-items: center; gap: 10px;
  padding: 16px 20px; border-radius: 10px;
  background: rgba(0,180,216,0.06); border: 1px solid rgba(0,180,216,0.12);
  color: rgba(255,255,255,0.5);
}
.contact-map-hint__icon { color: #00b4d8; display: flex; }
.contact-map-hint__text { font-size: 13px; }

.contact-form-wrap {
  padding: 36px; border-radius: 16px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
}
.contact-form-wrap__header {
  display: flex; align-items: center; gap: 12px; margin-bottom: 28px;
  padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08);
}
.contact-form-wrap__title {
  font-size: 18px; font-weight: 700; color: #fff;
}
.contact-form { display: flex; flex-direction: column; gap: 18px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-label {
  font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.4);
  letter-spacing: 0.06em; text-transform: uppercase;
}
.form-input {
  padding: 13px 16px; border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04);
  font-size: 15px; font-family: inherit; color: #fff;
  outline: none; transition: border-color 0.2s;
}
.form-input::placeholder { color: rgba(255,255,255,0.2); }
.form-input:focus { border-color: #00b4d8; box-shadow: 0 0 0 3px rgba(0,180,216,0.1); }
.form-input--ta { resize: vertical; min-height: 100px; }

/* Department selector */
.dept-selector {
  display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
}
.dept-pill {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  padding: 14px 16px; border-radius: 10px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.7);
  font-family: inherit; font-size: 14px; font-weight: 600;
  cursor: pointer;
  transition: all 0.22s cubic-bezier(.16,1,.3,1);
}
.dept-pill__icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px;
  color: rgba(255,255,255,0.5);
  transition: color 0.22s;
}
.dept-pill__icon svg { width: 18px; height: 18px; }
.dept-pill:hover {
  background: rgba(0,180,216,0.08);
  border-color: rgba(0,180,216,0.25);
  color: #fff;
}
.dept-pill--active {
  background: rgba(0,180,216,0.15);
  border-color: #00b4d8;
  color: #fff;
  box-shadow: 0 4px 16px rgba(0,180,216,0.2);
}
.dept-pill--active .dept-pill__icon { color: #00b4d8; }
.form-note {
  font-size: 11.5px; color: rgba(255,255,255,0.4);
  text-align: center; margin: 4px 0 0;
  font-style: italic;
}

.form-success { text-align: center; padding: 50px 20px; }
.form-success__check {
  width: 60px; height: 60px; border-radius: 50%;
  background: #00b4d8; color: #fff;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 30px; font-weight: 700; margin-bottom: 16px;
}
.form-success__title { font-size: 22px; font-weight: 700; color: #fff; margin: 0 0 6px; }
.form-success__text { font-size: 15px; color: rgba(255,255,255,0.65); margin: 0; line-height: 1.5; }
.form-success__text strong { color: #00b4d8; font-weight: 700; }

/* ── FOOTER ── */
.footer {
  background: #061525;
  padding: 60px 24px 0;
  color: #fff;
}
.footer__main {
  max-width: 1400px; margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1.3fr 1.2fr;
  gap: 48px;
  padding-bottom: 44px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.footer__col { display: flex; flex-direction: column; gap: 18px; }
.footer__col--brand { max-width: 380px; }
.footer__logo {
  display: flex; align-items: center; gap: 12px;
  cursor: pointer; width: fit-content;
}
.footer__logo-img {
  height: 42px; width: auto; object-fit: contain;
  filter: brightness(0) invert(1);
}
.footer__tagline {
  font-size: 14px; line-height: 1.65;
  color: rgba(255,255,255,0.55);
  margin: 0;
  max-width: 320px;
}
.footer__social {
  display: flex; gap: 10px; margin-top: 4px;
}
.footer__social-btn {
  width: 38px; height: 38px;
  border-radius: 8px;
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.6);
  display: inline-flex; align-items: center; justify-content: center;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(.16,1,.3,1);
  border: 1px solid rgba(255,255,255,0.05);
}
.footer__social-btn:hover {
  background: #00b4d8;
  color: #fff;
  border-color: #00b4d8;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0,180,216,0.3);
}
.footer__col-title {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #00b4d8;
  margin: 0 0 4px;
}
.footer__list {
  display: flex; flex-direction: column; gap: 8px;
}
.footer__link {
  background: none; border: none;
  color: rgba(255,255,255,0.6);
  font-size: 14px; font-weight: 400;
  cursor: pointer; font-family: inherit;
  padding: 0; text-align: left;
  text-decoration: none;
  transition: color 0.2s, transform 0.2s;
  align-self: flex-start;
}
.footer__link:hover {
  color: #00b4d8;
  transform: translateX(3px);
}
.footer__link-static {
  color: rgba(255,255,255,0.6);
  font-size: 13.5px;
  text-decoration: none;
  transition: color 0.2s;
}
a.footer__link-static:hover { color: #00b4d8; }
.footer__contact-group {
  display: flex; flex-direction: column; gap: 3px;
  margin-bottom: 8px;
}
.footer__contact-label {
  font-size: 11px; font-weight: 700;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.footer__bar {
  max-width: 1400px; margin: 0 auto;
  padding: 22px 0;
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 14px;
  font-size: 12.5px;
  color: rgba(255,255,255,0.35);
}
.footer__bar-links {
  display: inline-flex; align-items: center; gap: 10px;
}
.footer__bar-link {
  color: rgba(255,255,255,0.4);
  text-decoration: none;
  font-size: 12.5px;
  transition: color 0.2s;
}
.footer__bar-link:hover { color: #00b4d8; }
.footer__bar-sep { color: rgba(255,255,255,0.2); }

/* ── PLACEHOLDER NOTICE (shared) ── */
.placeholder-notice {
  display: flex; align-items: center; gap: 10px;
  max-width: 780px; margin: 40px auto 0;
  padding: 14px 22px;
  background: rgba(0,180,216,0.06);
  border: 1px dashed rgba(0,180,216,0.35);
  border-radius: 10px;
  font-size: 13px;
  color: #5a6b7e;
  justify-content: center;
  text-align: center;
}
.placeholder-notice__dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #00b4d8;
  flex-shrink: 0;
  animation: noticePulse 1.8s ease-in-out infinite;
}
@keyframes noticePulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.75); }
}

/* ── SOSTENIBILIDAD ── */
.susten-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 20px; max-width: 1100px; margin: 0 auto;
}
.susten-card {
  position: relative;
  padding: 40px 28px 32px;
  background: #fff;
  border-radius: 14px;
  border: 1px solid #e8ecf1;
  transition: all 0.3s;
}
.susten-card:hover {
  border-color: rgba(0,180,216,0.25);
  box-shadow: 0 12px 36px rgba(0,180,216,0.08);
  transform: translateY(-3px);
}
.susten-card__badge {
  position: absolute;
  top: 20px; right: 22px;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 42px; font-weight: 700;
  color: rgba(0,180,216,0.15);
  line-height: 1;
  letter-spacing: -0.02em;
}
.susten-card__title {
  font-size: 19px; font-weight: 700; color: #0a2a4a;
  margin: 0 0 12px;
  max-width: 70%;
}
.susten-card__text {
  font-size: 14px; line-height: 1.65; color: #5a6b7e;
  margin: 0;
}

/* ── PILARES ── */
.pilares-wrap {
  padding: 48px 24px 0;
  max-width: 1100px; margin: 0 auto;
}
.pilares-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 20px; margin-top: 24px;
}
.pilar-card {
  display: flex; flex-direction: column; align-items: center;
  text-align: center;
  padding: 36px 28px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #e8ecf1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  transition: all 0.3s;
}
.pilar-card:hover {
  border-color: #00b4d8;
  box-shadow: 0 10px 32px rgba(0,180,216,0.1);
  transform: translateY(-3px);
}
.pilar-card__icon {
  color: #00b4d8;
  width: 68px; height: 68px;
  border-radius: 50%;
  background: rgba(0,180,216,0.08);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 18px;
  transition: all 0.3s;
}
.pilar-card:hover .pilar-card__icon {
  background: rgba(0,180,216,0.15);
  transform: scale(1.08);
}
.pilar-card__title {
  font-size: 18px; font-weight: 700; color: #0a2a4a;
  margin: 0 0 10px;
}
.pilar-card__text {
  font-size: 14px; color: #5a6b7e; line-height: 1.7; margin: 0;
}

/* ── CLIENTES (18 items: 6 cols) ── */
.clients-grid {
  display: grid; grid-template-columns: repeat(6, 1fr);
  gap: 14px; max-width: 1200px; margin: 0 auto;
}

/* ── SCROLLBAR ── */
  aspect-ratio: 16/9;
  background: #fff;
  border: 1px solid #e8ecf1;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.3s;
  padding: 14px;
}
.client-logo-card:hover {
  border-color: rgba(0,180,216,0.35);
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0,180,216,0.08);
}
.client-logo-card__placeholder {
  display: flex; flex-direction: column; align-items: center; gap: 3px;
  color: #a7b5c4;
  transition: color 0.3s;
}
.client-logo-card:hover .client-logo-card__placeholder {
  color: #00b4d8;
}
.client-logo-card__placeholder svg {
  margin-bottom: 4px;
  opacity: 0.6;
}
.client-logo-card__name {
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #0a2a4a;
}
.client-logo-card:hover .client-logo-card__name {
  color: #00b4d8;
}
.client-logo-card__sector {
  font-size: 10px;
  color: #8a9cad;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 2px;
}

/* ── BOLSA DE TRABAJO ── */
.bolsa-layout {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 60px; max-width: 1100px; margin: 0 auto;
  align-items: center;
}
.bolsa-perks {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 12px 20px;
  margin: 24px 0 32px;
}
.bolsa-perk {
  display: flex; align-items: center; gap: 10px;
  font-size: 14px; color: #3a4a5e; font-weight: 500;
}
.bolsa-perk__check {
  width: 26px; height: 26px; border-radius: 50%;
  background: rgba(0,180,216,0.1);
  color: #00b4d8;
  display: inline-flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.bolsa-perk__check svg { width: 13px; height: 13px; }
.bolsa-cta {
  display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
}
.bolsa-cta__or {
  font-size: 13px; color: #8a9cad; text-transform: uppercase;
  letter-spacing: 0.12em; font-weight: 600;
}
.btn--outline-dark {
  background: transparent;
  color: #0a2a4a;
  border: 1.5px solid #0a2a4a;
  padding: 12px 24px; border-radius: 8px;
  font-size: 14px; font-weight: 600;
  cursor: pointer; font-family: inherit;
  text-decoration: none;
  display: inline-flex; align-items: center;
  transition: all 0.25s;
}
.btn--outline-dark:hover {
  background: #0a2a4a; color: #fff;
}

.vacancy-panel {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e8ecf1;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(10,42,74,0.08);
}
.vacancy-panel__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 24px;
  background: #0a2a4a;
  color: #fff;
}
.vacancy-panel__title {
  font-size: 14px; font-weight: 700; letter-spacing: 0.04em;
}
.vacancy-panel__badge {
  font-size: 10px; font-weight: 700;
  padding: 4px 10px; border-radius: 100px;
  background: rgba(0,180,216,0.25);
  color: #6fd4ea;
  letter-spacing: 0.08em; text-transform: uppercase;
}
.vacancy-empty {
  padding: 40px 32px;
  text-align: center;
}
.vacancy-empty__icon {
  width: 76px; height: 76px;
  border-radius: 50%;
  background: rgba(0,180,216,0.08);
  color: #00b4d8;
  display: inline-flex; align-items: center; justify-content: center;
  margin-bottom: 18px;
}
.vacancy-empty__title {
  font-size: 18px; font-weight: 700; color: #0a2a4a;
  margin: 0 0 8px;
}
.vacancy-empty__text {
  font-size: 14px; line-height: 1.65; color: #5a6b7e;
  margin: 0 0 24px;
}

/* Vacancy list with items */
.vacancy-list {
  display: flex; flex-direction: column;
  padding: 8px;
}
.vacancy-item {
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px;
  padding: 16px 18px;
  border-radius: 10px;
  transition: background 0.22s;
  border: 1px solid transparent;
}
.vacancy-item:hover {
  background: #f0f9fc;
  border-color: rgba(0,180,216,0.15);
}
.vacancy-item__main {
  display: flex; flex-direction: column; gap: 4px;
  flex: 1; min-width: 0;
}
.vacancy-item__role {
  font-size: 15px; font-weight: 700; color: #0a2a4a;
  margin: 0;
}
.vacancy-item__meta {
  display: flex; align-items: center; gap: 8px;
  flex-wrap: wrap;
  font-size: 12px; color: #7a8b9e;
}
.vacancy-item__dot {
  width: 3px; height: 3px; border-radius: 50%;
  background: #c5cdd9;
}
.vacancy-item__btn {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: #f0f9fc;
  color: #00b4d8;
  border: 1px solid rgba(0,180,216,0.15);
  display: inline-flex; align-items: center; justify-content: center;
  text-decoration: none;
  transition: all 0.22s cubic-bezier(.16,1,.3,1);
  flex-shrink: 0;
}
.vacancy-item__btn:hover {
  background: #00b4d8;
  color: #fff;
  transform: translateX(3px);
  box-shadow: 0 4px 14px rgba(0,180,216,0.3);
}
.vacancy-footer {
  display: flex; flex-direction: column; gap: 3px;
  padding: 16px 22px;
  background: #f6f8fb;
  border-top: 1px solid #e8ecf1;
  text-align: center;
}
.vacancy-footer__label {
  font-size: 10px; font-weight: 700;
  color: #00b4d8;
  letter-spacing: 0.14em; text-transform: uppercase;
}
.vacancy-footer__text {
  font-size: 12px; color: #7a8b9e;
}

.vacancy-contact {
  padding-top: 22px;
  border-top: 1px dashed #e8ecf1;
  display: flex; flex-direction: column; gap: 4px;
  align-items: center;
}
.vacancy-contact__label {
  font-size: 11px; font-weight: 700; color: #8a9cad;
  letter-spacing: 0.12em; text-transform: uppercase;
  margin-bottom: 4px;
}
.vacancy-contact__value {
  font-size: 13px; font-weight: 600; color: #00b4d8;
  text-decoration: none;
}
.vacancy-contact__value:hover { text-decoration: underline; }

/* ── FLOATING CONTACT BUTTONS ── */
.floating-contact {
  position: fixed;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  z-index: 200;
  pointer-events: none;
}
.floating-btn {
  position: relative;
  pointer-events: auto;
  width: 58px; height: 58px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.12);
  transition: transform 0.28s cubic-bezier(.16,1,.3,1), box-shadow 0.28s ease, background 0.2s ease;
  animation: floatBtnIn 0.5s cubic-bezier(.16,1,.3,1) both;
}
.floating-btn:nth-child(1) { animation-delay: 0.15s; }
.floating-btn:nth-child(2) { animation-delay: 0.3s; }
@keyframes floatBtnIn {
  from { opacity: 0; transform: translateY(20px) scale(0.7); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.floating-btn--whatsapp { background: #25D366; }
.floating-btn--whatsapp:hover { background: #1ebe5d; }
.floating-btn--email { background: #00b4d8; }
.floating-btn--email:hover { background: #0096b7; }
.floating-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 28px rgba(0,0,0,0.22), 0 4px 10px rgba(0,0,0,0.14);
}
.floating-btn:active { transform: translateY(-1px) scale(0.98); }
.floating-btn__icon { display: flex; align-items: center; justify-content: center; }
.floating-btn__tooltip {
  position: absolute;
  right: calc(100% + 14px);
  top: 50%;
  transform: translateY(-50%) translateX(8px);
  background: #0a2a4a;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.22s ease, transform 0.22s cubic-bezier(.16,1,.3,1);
  box-shadow: 0 4px 14px rgba(0,0,0,0.18);
}
.floating-btn__tooltip::after {
  content: "";
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 6px solid transparent;
  border-left-color: #0a2a4a;
}
.floating-btn:hover .floating-btn__tooltip {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}
/* Pulse ring on whatsapp for extra attention */
.floating-btn--whatsapp::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55);
  animation: wappPulse 2.2s cubic-bezier(.16,1,.3,1) infinite;
}
@keyframes wappPulse {
  0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55); }
  70%  { box-shadow: 0 0 0 16px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}

/* ── RESPONSIVE ── */
@media (max-width: 1100px) {
  .nav__logo-sub { display: none; }
  .nav__link { padding: 10px 10px; font-size: 13px; }
}
@media (max-width: 1100px) {
  .nav__logo-sub { display: none; }
  .nav__link { padding: 10px 10px; font-size: 13px; }
  .footer__main { grid-template-columns: 1fr 1fr; gap: 36px; }
}
@media (max-width: 900px) {
  .nav__links { display: none !important; }
  .nav__cta:not(.mobile-menu .nav__cta) { display: none !important; }
  .nav__hamburger { display: block !important; }
  .nav__logo-sub { display: block; }
  .flot-grid { grid-template-columns: repeat(2, 1fr) !important; }
}
@media (max-width: 768px) {
  .two-col { grid-template-columns: 1fr !important; }
  .serv-grid { grid-template-columns: 1fr !important; }
  .flot-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .sector-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .contact-layout { grid-template-columns: 1fr !important; }
  .form-row { grid-template-columns: 1fr !important; }
  .counter-row { flex-direction: column; }
  .section { padding: 70px 20px; }
  .hero { padding: 100px 20px 70px; }
  .cert-bar__inner { gap: 16px; }
  .cert-badge { padding: 10px 16px; }
  .floating-contact { right: 16px; bottom: 16px; gap: 12px; }
  .floating-btn { width: 52px; height: 52px; }
  .floating-btn__tooltip { display: none; }
  .susten-grid { grid-template-columns: 1fr !important; }
  .clients-grid { grid-template-columns: repeat(3, 1fr) !important; }
  .pilares-grid { grid-template-columns: 1fr !important; }
  .bolsa-layout { grid-template-columns: 1fr !important; gap: 40px; }
  .bolsa-perks { grid-template-columns: 1fr !important; }
  .nav__logo-sub { display: none; }
  .nav__inner { height: 64px; }
  .mobile-menu { top: 64px; }
  .dept-selector { grid-template-columns: 1fr !important; }
  .footer__main { grid-template-columns: 1fr !important; gap: 32px; padding-bottom: 32px; }
  .footer__col--brand { max-width: 100%; }
  .footer__bar { flex-direction: column; text-align: center; gap: 10px; }
  .vacancy-item { padding: 12px 14px; }
  .vacancy-item__role { font-size: 14px; }
}
@media (max-width: 480px) {
  .flot-grid { grid-template-columns: 1fr !important; }
  .clients-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .pilares-grid { grid-template-columns: 1fr !important; }
}

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 7px; }
::-webkit-scrollbar-track { background: #f6f8fb; }
::-webkit-scrollbar-thumb { background: #c0c8d2; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #a0aab5; }
`;