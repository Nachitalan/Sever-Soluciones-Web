import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════
   EDITABLE COUNTERS — change these values
   ══════════════════════════════════════ */
const COUNTERS = {
  yearFounded: 2013,
  tripsCompleted: 35000,
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
};

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
  const [scrolled, setScrolled] = useState(false);
  const [cRef, cVis] = useInView();
  const tripCount = useCountUp(COUNTERS.tripsCompleted, 2200, cVis);
  const [form, setForm] = useState({ nombre: "", apellido: "", email: "", telefono: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [activeTab, setActiveTab] = useState("ventas");

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ nombre: "", apellido: "", email: "", telefono: "", mensaje: "" });
  };

  const links = [
    { l: "Inicio", id: "hero" }, { l: "Nosotros", id: "nosotros" },
    { l: "Servicios", id: "servicios" }, { l: "Flotilla", id: "flotilla" },
    { l: "Sectores", id: "sectores" }, { l: "Contacto", id: "contacto" },
  ];

  return (
    <div className="sever-root">
      <style>{CSS}</style>

      {/* ═══ NAV ═══ */}
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__inner">
          <div className="nav__logo" onClick={() => go("hero")}>
            <img
              src="/sever-logo.png"
              alt="Soluciones Sever"
              className="nav__logo-img"
            />
            <div>
              <div className="nav__logo-text">SEVER</div>
              <div className="nav__logo-sub">Soluciones Logisticas</div>
            </div>
          </div>
          <div className="nav__links">
            {links.map(l => <button key={l.id} onClick={() => go(l.id)} className="nav__link">{l.l}</button>)}
          </div>
          <button className="nav__cta" onClick={() => go("contacto")}>Solicitar Cotizacion</button>
          <button className="nav__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? I.close : I.menu}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map(l => <button key={l.id} onClick={() => go(l.id)} className="mobile-menu__link">{l.l}</button>)}
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
      </section>

      {/* ═══ SERVICIOS ═══ */}
      <section id="servicios" className="section section--white">
        <Reveal>
          <p className="section__label" style={{ textAlign: "center" }}>NUESTROS SERVICIOS</p>
          <h2 className="section__title" style={{ textAlign: "center" }}>Soluciones de Transporte</h2>
        </Reveal>
        <div className="serv-grid">
          {[
            { icon: I.truck, title: "Transporte Local y Foraneo", desc: "Servicio de autotransporte de carga dentro de la ciudad y a nivel nacional con la maxima seguridad." },
            { icon: I.shield, title: "Seguridad Certificada", desc: "Contamos con certificaciones C-TPAT, OEA y Transporte Limpio que garantizan la proteccion de tu carga." },
            { icon: I.gps, title: "Rastreo Satelital", desc: "Monitoreo GPS en tiempo real las 24 horas para que siempre sepas donde esta tu mercancia." },
            { icon: I.box, title: "Logistica Integral", desc: "Gestion completa de la cadena de suministro: almacenamiento, distribucion y entrega en destino." },
            { icon: I.snow, title: "Transporte a Frontera", desc: "Servicio especializado de cruce fronterizo con EUA, cumpliendo todas las regulaciones binacionales." },
            { icon: I.user, title: "Atencion Personalizada", desc: "Asignamos un ejecutivo dedicado para cada cliente, asegurando comunicacion directa y soluciones rapidas." },
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
            { label: "Tractocamiones", count: "30+", detail: "Unidades de ultima generacion" },
            { label: "Cajas Secas", count: "40+", detail: "53 pies de capacidad" },
            { label: "Plataformas", count: "15+", detail: "Para carga sobredimensionada" },
            { label: "Cajas Refrigeradas", count: "10+", detail: "Con control de temperatura" },
          ].map((f, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flot-card">
                <span className="flot-card__count">{f.count}</span>
                <span className="flot-card__label">{f.label}</span>
                <span className="flot-card__detail">{f.detail}</span>
              </div>
            </Reveal>
          ))}
        </div>
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
                  { label: "Telefono", value: "+52 (33) 1234-5678", link: "tel:+523312345678" },
                  { label: "Email", value: "ventas@sfrlogistics.com", link: "mailto:ventas@sfrlogistics.com" },
                ],
              },
              {
                key: "operaciones",
                badge: "Operaciones",
                icon: I.truck,
                rows: [
                  { label: "Telefono", value: "+52 (33) 8765-4321", link: "tel:+523387654321" },
                  { label: "Email", value: "ops@sfrlogistics.com", link: "mailto:ops@sfrlogistics.com" },
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
                        <a href={r.link} className="contact-tab__value contact-tab__value--link">{r.value}</a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="contact-map-hint">
              <div className="contact-map-hint__icon">{I.pin}</div>
              <span className="contact-map-hint__text">Guadalajara, Jalisco, Mexico</span>
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
                <p className="form-success__title">Mensaje Enviado</p>
                <p className="form-success__text">Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
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
                  <textarea className="form-input form-input--ta" placeholder="¿En que podemos ayudarte?" value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} required />
                </div>
                <button type="submit" className="btn btn--primary" style={{ width: "100%" }}>Enviar Mensaje {I.arrow}</button>
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
        <div className="footer__inner">
          <div className="footer__logo" onClick={() => go("hero")}>
            <img
              src="/logo-light.png"
              alt="Soluciones Sever"
              className="footer__logo-img"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div>
              <div className="nav__logo-text" style={{ color: "#fff" }}>SEVER</div>
              <div className="nav__logo-sub" style={{ color: "rgba(255,255,255,0.4)" }}>Soluciones Logisticas</div>
            </div>
          </div>
          <div className="footer__links">
            {links.map(l => <button key={l.id} onClick={() => go(l.id)} className="footer__link">{l.l}</button>)}
          </div>
        </div>
        <div className="footer__bar">
          © {new Date().getFullYear()} Soluciones Sever. Todos los derechos reservados.
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
  padding: 16px 24px;
  transition: all 0.35s cubic-bezier(.16,1,.3,1);
}
.nav--scrolled {
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 12px rgba(0,0,0,0.06);
  padding: 10px 24px;
}
.nav__inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
}
.nav__logo {
  display: flex; align-items: center; gap: 10px; cursor: pointer;
}
.nav__logo-img {
  height: 40px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
  transition: filter 0.35s;
}
.nav--scrolled .nav__logo-img {
  filter: none;
}
.nav__logo-text {
  font-size: 18px; font-weight: 800; color: #fff;
  letter-spacing: 0.12em; line-height: 1.1;
  transition: color 0.35s;
}
.nav--scrolled .nav__logo-text { color: #0a2a4a; }
.nav__logo-sub {
  font-size: 9px; color: rgba(255,255,255,0.6);
  letter-spacing: 0.06em; text-transform: uppercase;
  transition: color 0.35s;
}
.nav--scrolled .nav__logo-sub { color: #7a8b9e; }
.nav__links { display: flex; gap: 4px; }
.nav__link {
  background: none; border: none; color: rgba(255,255,255,0.75);
  font-size: 14px; font-weight: 500; cursor: pointer;
  font-family: inherit; padding: 8px 14px; border-radius: 6px;
  transition: all 0.2s;
}
.nav__link:hover { color: #fff; background: rgba(255,255,255,0.1); }
.nav--scrolled .nav__link { color: #5a6b7e; }
.nav--scrolled .nav__link:hover { color: #0a2a4a; background: rgba(10,42,74,0.05); }
.nav__cta {
  background: #00b4d8; color: #fff; border: none;
  padding: 10px 22px; border-radius: 8px;
  font-size: 14px; font-weight: 600; cursor: pointer;
  font-family: inherit; transition: all 0.25s;
}
.nav__cta:hover { background: #0096b7; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(0,180,216,0.3); }
.nav__hamburger {
  display: none; background: none; border: none;
  color: #fff; cursor: pointer;
}
.nav--scrolled .nav__hamburger { color: #0a2a4a; }

/* ── MOBILE MENU ── */
.mobile-menu {
  position: fixed; top: 70px; left: 0; right: 0; z-index: 99;
  background: rgba(255,255,255,0.97); backdrop-filter: blur(12px);
  padding: 20px 24px; display: flex; flex-direction: column;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
}
.mobile-menu__link {
  background: none; border: none; text-align: left;
  padding: 14px 0; font-size: 16px; font-weight: 500;
  color: #0a2a4a; cursor: pointer; font-family: inherit;
  border-bottom: 1px solid #f0f2f5;
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
  max-width: 1000px; margin: 0 auto;
}
.flot-card {
  display: flex; flex-direction: column; align-items: center;
  padding: 36px 20px; border-radius: 14px;
  background: #fff; border: 1px solid #e8ecf1;
  text-align: center; transition: all 0.3s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
}
.flot-card:hover { border-color: #00b4d8; box-shadow: 0 8px 28px rgba(0,180,216,0.08); transform: translateY(-3px); }
.flot-card__count { font-size: 36px; font-weight: 800; color: #00b4d8; line-height: 1; }
.flot-card__label { font-size: 15px; font-weight: 600; color: #0a2a4a; margin-top: 10px; }
.flot-card__detail { font-size: 13px; color: #7a8b9e; margin-top: 6px; }

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
.form-success { text-align: center; padding: 50px 20px; }
.form-success__check {
  width: 60px; height: 60px; border-radius: 50%;
  background: #00b4d8; color: #fff;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 30px; font-weight: 700; margin-bottom: 16px;
}
.form-success__title { font-size: 22px; font-weight: 700; color: #fff; margin: 0 0 6px; }
.form-success__text { font-size: 15px; color: rgba(255,255,255,0.6); margin: 0; }

/* ── FOOTER ── */
.footer { background: #061525; padding: 48px 24px 0; }
.footer__inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 24px; padding-bottom: 32px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.footer__logo {
  display: flex; align-items: center; gap: 10px; cursor: pointer;
}
.footer__logo-img {
  height: 36px; width: auto; object-fit: contain;
}
.footer__links { display: flex; gap: 6px; flex-wrap: wrap; }
.footer__link {
  background: none; border: none; color: rgba(255,255,255,0.35);
  font-size: 13px; cursor: pointer; font-family: inherit; padding: 6px 10px;
  text-decoration: none; transition: color 0.2s;
}
.footer__link:hover { color: rgba(255,255,255,0.7); }
.footer__bar {
  max-width: 1200px; margin: 0 auto; padding: 20px 0;
  text-align: center; font-size: 12px; color: rgba(255,255,255,0.2);
}

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
@media (max-width: 900px) {
  .nav__links { display: none !important; }
  .nav__cta:not(.mobile-menu .nav__cta) { display: none !important; }
  .nav__hamburger { display: block !important; }
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
}

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 7px; }
::-webkit-scrollbar-track { background: #f6f8fb; }
::-webkit-scrollbar-thumb { background: #c0c8d2; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #a0aab5; }
`;