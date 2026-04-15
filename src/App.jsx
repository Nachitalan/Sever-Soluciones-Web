import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════
   EDITABLE COUNTERS — change these values
   ══════════════════════════════════════ */
const COUNTERS = {
  yearFounded: 2013,
  tripsCompleted: 35000,
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

/* ── Logo SVG (recreated from brand) ── */
const SeverLogo = ({ size = 42, light = false }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="50" rx="38" ry="22" stroke={light ? "#fff" : "#00b4d8"} strokeWidth="3" transform="rotate(0 50 50)" />
    <ellipse cx="50" cy="50" rx="38" ry="22" stroke={light ? "#fff" : "#00b4d8"} strokeWidth="3" transform="rotate(90 50 50)" />
    <path d="M12 50 C 25 35, 40 25, 50 12" stroke={light ? "#fff" : "#00b4d8"} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M88 50 C 75 65, 60 75, 50 88" stroke={light ? "#fff" : "#00b4d8"} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M12 50 C 25 65, 40 75, 50 88" stroke={light ? "#fff" : "#00b4d8"} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M88 50 C 75 35, 60 25, 50 12" stroke={light ? "#fff" : "#00b4d8"} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
  </svg>
);

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
};

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
            <SeverLogo size={36} light />
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
          <button onClick={() => go("contacto")} className="nav__cta" style={{ width: "100%", marginTop: 12 }}>Solicitar Cotizacion</button>
        </div>
      )}

      {/* ═══ HERO ═══ */}
      <section id="hero" className="hero">
        <div className="hero__bg" />
        <div className="hero__particles">
          {[...Array(6)].map((_, i) => <div key={i} className="hero__particle" style={{ left: `${10 + i * 15}%`, animationDelay: `${i * 0.7}s`, animationDuration: `${6 + i * 1.2}s` }} />)}
        </div>
        <div className="hero__content">
          <Reveal>
            <div className="hero__badge">En ruta desde {COUNTERS.yearFounded}</div>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="hero__title">Transportar es<br/>lo que hacemos</h1>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="hero__desc">Soluciones Sever, lider en logistica terrestre. Servicio especializado de autotransporte local, foraneo y a frontera con EUA.</p>
          </Reveal>
          <Reveal delay={0.36}>
            <div className="hero__btns">
              <button className="btn btn--primary" onClick={() => go("contacto")}>Contactanos <span style={{ marginLeft: 6 }}>{I.arrow}</span></button>
              <button className="btn btn--outline" onClick={() => go("servicios")}>Ver Servicios</button>
            </div>
          </Reveal>
        </div>
        <div className="hero__scroll" onClick={() => go("nosotros")}>
          <span className="hero__scroll-text">Conoce mas</span>
          <div className="hero__scroll-icon">{I.chevron}</div>
        </div>
      </section>

      {/* ═══ CERT BAR ═══ */}
      <section className="cert-bar">
        <Reveal>
          <div className="cert-bar__inner">
            {["C-TPAT", "Transporte Limpio", "OEA*", "SmartQuark"].map((c, i) => (
              <div key={i} className="cert-chip">
                <div className="cert-chip__icon">{I.shield}</div>
                <span className="cert-chip__name">{c}</span>
              </div>
            ))}
            <span className="cert-note">*En proceso</span>
          </div>
        </Reveal>
      </section>

      {/* ═══ NOSOTROS ═══ */}
      <section id="nosotros" className="section">
        <div className="container two-col">
          <div>
            <Reveal>
              <span className="tag">Quienes Somos</span>
              <h2 className="section-title">Acerca de<br/>Soluciones Sever</h2>
              <p className="body-text">Soluciones Sever inicio operaciones en Mayo de 2013, con el firme proposito de ofrecer un Servicio Especializado de Autotransporte local, foraneo y a frontera con EUA, satisfaciendo las necesidades del transporte y logistica en la distribucion de mercancia.</p>
            </Reveal>
            <Reveal delay={0.12}>
              <div ref={cRef} className="counter-row">
                <div className="counter-card">
                  <div className="counter-card__num">{COUNTERS.yearFounded}</div>
                  <div className="counter-card__label">Ano de creacion</div>
                </div>
                <div className="counter-card counter-card--accent">
                  <div className="counter-card__num">+{tripCount.toLocaleString()}</div>
                  <div className="counter-card__label">Viajes realizados</div>
                </div>
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.15}>
              <div className="filos-stack">
                {[
                  { t: "Mision", p: "Somos una empresa de servicios logisticos y de transporte. Ofrecemos a nuestros clientes soluciones a la medida, buscando la excelencia y rentabilidad con niveles optimos de calidad y seguridad a traves de la innovacion y mejora continua." },
                  { t: "Vision", p: "Posicionarnos como una de las empresas mas especializadas y seguras en transporte terrestre y logistica a nivel nacional, manteniendo certificaciones de seguridad y calidad nacionales e internacionales." },
                  { t: "Valores", p: "Comprometidos con la responsabilidad social, promovemos la seguridad, etica, verdad, equidad y respeto, trabajando con directrices que buscan la excelencia en servicios y la mejora continua.", accent: true },
                ].map((f, i) => (
                  <div key={i} className={`filos-card ${f.accent ? "filos-card--accent" : ""}`}>
                    <h3 className="filos-card__title">{f.t}</h3>
                    <p className="filos-card__text">{f.p}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ SERVICIOS ═══ */}
      <section id="servicios" className="section section--dark">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="tag tag--light">Lo que ofrecemos</span>
              <h2 className="section-title section-title--white">Nuestros Servicios</h2>
              <p className="section-sub section-sub--light">Contamos con los siguientes servicios para cubrir tus necesidades de transporte y logistica.</p>
            </div>
          </Reveal>
          <div className="serv-grid">
            {[
              { icon: I.truck, t: "Punto a Punto y Multi Entrega", d: "Servicio de transporte directo o con multiples puntos de entrega, adaptado a tu operacion." },
              { icon: I.user, t: "Ejecutivo Exclusivo para CEDIS", d: "Asignamos un ejecutivo dedicado para cada centro de distribucion, garantizando atencion personalizada." },
              { icon: I.gps, t: "Monitoreo GPS 24/7", d: "Rastreo satelital en tiempo real de todas nuestras unidades para total visibilidad de tu carga." },
              { icon: I.box, t: "Equipos Dedicados", d: "Unidades exclusivas asignadas a tu operacion para garantizar disponibilidad y continuidad de servicio." },
              { icon: I.snow, t: "Caja Seca y Refrigerada", d: "Transporte en modalidad seca y refrigerada o congelada para productos que requieren cadena de frio." },
              { icon: I.shield, t: "Seguridad Certificada", d: "Operamos bajo certificaciones C-TPAT y SmartQuark, con estandares internacionales de seguridad." },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="serv-card">
                  <div className="serv-card__icon">{s.icon}</div>
                  <h3 className="serv-card__title">{s.t}</h3>
                  <p className="serv-card__desc">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FLOTILLA ═══ */}
      <section id="flotilla" className="section">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="tag">Nuestras Unidades</span>
              <h2 className="section-title">Flotilla Variada</h2>
              <p className="section-sub">Contamos con diferentes modalidades y capacidades de carga.</p>
            </div>
          </Reveal>
          <div className="flot-grid">
            {[
              { n: "Camioneta 1.5 T", m: "Seco y Refrigerado / Congelado", c: "1.5" },
              { n: "Mini Rabon 7 T", m: "Seco y Refrigerado / Congelado", c: "7" },
              { n: "Rabon 10 T", m: "Seco y Refrigerado / Congelado", c: "10" },
              { n: "Torton 15 T", m: "Seco y Refrigerado / Congelado", c: "15" },
              { n: "Trailer 53' 26 T", m: "Seco y Refrigerado / Congelado", c: "26" },
            ].map((u, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="flot-card">
                  <div className="flot-card__cap">{u.c}<span className="flot-card__ton">T</span></div>
                  <div className="flot-card__bar" />
                  <h3 className="flot-card__name">{u.n}</h3>
                  <p className="flot-card__modes">{u.m}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTORES ═══ */}
      <section id="sectores" className="section section--gray">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="tag">Industrias</span>
              <h2 className="section-title">Sectores de Experiencia</h2>
              <p className="section-sub">Creemos que cada cliente es una sociedad duradera.</p>
            </div>
          </Reveal>
          <div className="sector-grid">
            {[
              { icon: I.car, n: "Automotriz" }, { icon: I.food, n: "Alimentos y Bebidas" },
              { icon: I.pill, n: "Farmaceutico" }, { icon: I.store, n: "Autoservicios y Abarrotes" },
              { icon: I.chip, n: "Tecnologia" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="sector-card">
                  <div className="sector-card__icon">{s.icon}</div>
                  <span className="sector-card__name">{s.n}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACTO (REDESIGNED) ═══ */}
      <section id="contacto" className="section section--contact">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="tag tag--light">Contacto</span>
              <h2 className="section-title section-title--white">Hablemos de tu operacion</h2>
              <p className="section-sub section-sub--light">Llamanos o ingresa tus datos para ser contactado por nuestro equipo.</p>
            </div>
          </Reveal>
          <div className="contact-layout">
            {/* LEFT: Info cards */}
            <Reveal>
              <div className="contact-cards">
                <div className={`contact-tab ${activeTab === "ventas" ? "contact-tab--active" : ""}`} onClick={() => setActiveTab("ventas")}>
                  <div className="contact-tab__header">
                    <div className="contact-tab__icon-wrap">
                      <span className="contact-tab__icon">{I.phone}</span>
                    </div>
                    <div className="contact-tab__badge">Ventas</div>
                  </div>
                  <div className="contact-tab__body">
                    <div className="contact-tab__row">
                      <span className="contact-tab__label">Telefono</span>
                      <a href="tel:+528119103303" className="contact-tab__value">+52 81 1910 3303</a>
                    </div>
                    <div className="contact-tab__row">
                      <span className="contact-tab__label">Email</span>
                      <a href="mailto:gerencia.ventas@s-sever.com" className="contact-tab__value contact-tab__value--link">gerencia.ventas@s-sever.com</a>
                    </div>
                    <div className="contact-tab__row">
                      <span className="contact-tab__label">Horario</span>
                      <span className="contact-tab__value">Lunes a Viernes, 8:00 - 18:00</span>
                    </div>
                  </div>
                </div>

                <div className={`contact-tab ${activeTab === "rh" ? "contact-tab--active" : ""}`} onClick={() => setActiveTab("rh")}>
                  <div className="contact-tab__header">
                    <div className="contact-tab__icon-wrap">
                      <span className="contact-tab__icon">{I.mail}</span>
                    </div>
                    <div className="contact-tab__badge">Recursos Humanos</div>
                  </div>
                  <div className="contact-tab__body">
                    <div className="contact-tab__row">
                      <span className="contact-tab__label">Telefono</span>
                      <a href="tel:+523312945392" className="contact-tab__value">+52 33 1294 5392</a>
                    </div>
                    <div className="contact-tab__row">
                      <span className="contact-tab__label">Email</span>
                      <a href="mailto:recursoshumanos@s-sever.com" className="contact-tab__value contact-tab__value--link">recursoshumanos@s-sever.com</a>
                    </div>
                    <div className="contact-tab__row">
                      <span className="contact-tab__label">Vacantes</span>
                      <span className="contact-tab__value">Consulta posiciones disponibles</span>
                    </div>
                  </div>
                </div>

                <div className="contact-map-hint">
                  <span className="contact-map-hint__icon">{I.pin}</span>
                  <span className="contact-map-hint__text">Guadalajara, Jalisco / Monterrey, Nuevo Leon</span>
                </div>
              </div>
            </Reveal>

            {/* RIGHT: Form */}
            <Reveal delay={0.15}>
              <div className="contact-form-wrap">
                <div className="contact-form-wrap__header">
                  <SeverLogo size={28} />
                  <span className="contact-form-wrap__title">Enviar mensaje</span>
                </div>
                {sent ? (
                  <div className="form-success">
                    <div className="form-success__check">&#10003;</div>
                    <h3 className="form-success__title">Mensaje enviado</h3>
                    <p className="form-success__text">Te contactaremos en seguida.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Nombre</label>
                        <input required className="form-input" placeholder="Tu nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Apellido</label>
                        <input required className="form-input" placeholder="Tu apellido" value={form.apellido} onChange={e => setForm({ ...form, apellido: e.target.value })} />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input required type="email" className="form-input" placeholder="correo@empresa.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Telefono</label>
                        <input className="form-input" placeholder="+52 ..." value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Que estas buscando?</label>
                      <textarea rows={4} className="form-input form-input--ta" placeholder="Describe brevemente tu necesidad de transporte..." value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn--primary btn--full">Enviar Mensaje <span style={{ marginLeft: 6 }}>{I.arrow}</span></button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__logo">
            <SeverLogo size={32} light />
            <div>
              <div className="nav__logo-text" style={{ color: "#fff" }}>SEVER</div>
              <div className="nav__logo-sub" style={{ color: "rgba(255,255,255,0.4)" }}>Soluciones Logisticas</div>
            </div>
          </div>
          <div className="footer__links">
            {links.map(l => <button key={l.id} onClick={() => go(l.id)} className="footer__link">{l.l}</button>)}
          </div>
          <div>
            <a href="https://www.s-sever.com/pol%C3%ADtica-de-privacidad" target="_blank" rel="noopener noreferrer" className="footer__link">Politica de Privacidad</a>
          </div>
        </div>
        <div className="footer__bar">2025 Soluciones Sever. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}

/* ══════════════════════════
   STYLES
   ══════════════════════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { margin: 0; -webkit-font-smoothing: antialiased; }

.sever-root {
  font-family: 'DM Sans', sans-serif;
  color: #1a202c;
  background: #fff;
  min-height: 100vh;
  overflow-x: hidden;
}

/* ── NAV ── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  padding: 0 24px; transition: all 0.35s ease;
  background: transparent;
}
.nav--scrolled {
  background: rgba(8,28,54,0.97);
  backdrop-filter: blur(14px);
  box-shadow: 0 2px 28px rgba(0,0,0,0.18);
}
.nav__inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: 72px;
}
.nav__logo {
  display: flex; align-items: center; gap: 10px; cursor: pointer;
}
.nav__logo-text {
  font-weight: 800; font-size: 15px; letter-spacing: 0.18em; color: #fff; line-height: 1.2;
}
.nav__logo-sub {
  font-size: 9.5px; letter-spacing: 0.06em; color: rgba(255,255,255,0.45); font-weight: 400;
}
.nav__links { display: flex; gap: 4px; }
.nav__link {
  background: none; border: none; color: rgba(255,255,255,0.65);
  font-size: 13px; font-weight: 500; cursor: pointer; padding: 8px 14px;
  border-radius: 6px; transition: all 0.2s; font-family: inherit; letter-spacing: 0.02em;
}
.nav__link:hover { color: #fff; background: rgba(255,255,255,0.06); }
.nav__cta {
  background: #00b4d8; color: #fff; border: none;
  padding: 10px 24px; border-radius: 6px;
  font-size: 13px; font-weight: 600; cursor: pointer;
  font-family: inherit; letter-spacing: 0.02em; transition: all 0.2s;
}
.nav__cta:hover { background: #0096b7; }
.nav__hamburger {
  display: none; background: none; border: none; color: #fff; cursor: pointer; padding: 4px;
}
.mobile-menu {
  position: fixed; top: 72px; left: 0; right: 0; z-index: 999;
  background: rgba(8,28,54,0.98); backdrop-filter: blur(14px);
  padding: 20px 24px; display: flex; flex-direction: column; gap: 4px;
}
.mobile-menu__link {
  background: none; border: none; color: rgba(255,255,255,0.8);
  font-size: 16px; font-weight: 500; padding: 14px 0; text-align: left;
  cursor: pointer; font-family: inherit; border-bottom: 1px solid rgba(255,255,255,0.06);
}

/* ── HERO ── */
.hero {
  position: relative; min-height: 100vh;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 120px 24px 80px;
  background: linear-gradient(165deg, #081c36 0%, #0a2a4a 45%, #0d3460 100%);
  overflow: hidden;
}
.hero__bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 50% at 65% 35%, rgba(0,180,216,0.1) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 25% 70%, rgba(0,180,216,0.05) 0%, transparent 50%);
  pointer-events: none;
}
.hero__particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.hero__particle {
  position: absolute; bottom: -20px; width: 2px; height: 2px;
  background: rgba(0,180,216,0.4); border-radius: 50%;
  animation: floatUp linear infinite;
}
@keyframes floatUp {
  0% { transform: translateY(0) scale(1); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
}
.hero__content {
  position: relative; z-index: 2; text-align: center; max-width: 720px;
}
.hero__badge {
  display: inline-block; padding: 7px 20px; border-radius: 100px;
  background: rgba(0,180,216,0.1); border: 1px solid rgba(0,180,216,0.2);
  color: #00b4d8; font-size: 13px; font-weight: 600; letter-spacing: 0.06em; margin-bottom: 28px;
}
.hero__title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(38px, 6vw, 72px); font-weight: 700;
  color: #fff; line-height: 1.06; letter-spacing: -0.02em;
  margin: 0 0 24px;
}
.hero__desc {
  font-size: clamp(16px, 2vw, 19px); line-height: 1.65;
  color: rgba(255,255,255,0.55); max-width: 560px; margin: 0 auto 40px;
}
.hero__btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.btn {
  display: inline-flex; align-items: center; border: none;
  padding: 14px 32px; border-radius: 8px;
  font-size: 15px; font-weight: 600; cursor: pointer;
  font-family: inherit; letter-spacing: 0.02em; transition: all 0.25s;
}
.btn--primary {
  background: #00b4d8; color: #fff;
  box-shadow: 0 4px 24px rgba(0,180,216,0.3);
}
.btn--primary:hover { background: #0096b7; transform: translateY(-1px); box-shadow: 0 6px 28px rgba(0,180,216,0.35); }
.btn--outline {
  background: transparent; color: #fff;
  border: 1px solid rgba(255,255,255,0.2);
}
.btn--outline:hover { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.04); }
.btn--full { width: 100%; justify-content: center; }
.hero__scroll {
  position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 5px;
  cursor: pointer; z-index: 2;
}
.hero__scroll-text {
  font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(255,255,255,0.3); font-weight: 500;
}
.hero__scroll-icon { color: rgba(255,255,255,0.3); animation: bounce 2s infinite; }
@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }

/* ── CERT BAR ── */
.cert-bar {
  background: #fff; border-bottom: 1px solid #ebedf0; padding: 22px 24px;
}
.cert-bar__inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; gap: 16px; flex-wrap: wrap; justify-content: center;
}
.cert-chip {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 18px; border-radius: 8px;
  background: #f0f9ff; border: 1px solid #d0ecf7; color: #0a2a4a;
}
.cert-chip__icon { color: #00b4d8; display: flex; }
.cert-chip__icon svg { width: 20px; height: 20px; }
.cert-chip__name { font-size: 13px; font-weight: 600; }
.cert-note { font-size: 11px; color: #8a919a; font-style: italic; }

/* ── SECTIONS ── */
.section { padding: 100px 24px; }
.section--dark { background: #081c36; }
.section--gray { background: #f6f8fb; }
.section--contact {
  background: linear-gradient(170deg, #081c36 0%, #0d3460 100%);
  position: relative;
}
.container { max-width: 1200px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 56px; max-width: 600px; margin-left: auto; margin-right: auto; }
.tag {
  font-size: 12px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase;
  color: #00b4d8; display: block; margin-bottom: 12px;
}
.tag--light { color: rgba(0,180,216,0.7); }
.section-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(28px, 4vw, 42px); font-weight: 700;
  color: #0a2a4a; line-height: 1.15; letter-spacing: -0.01em; margin: 0 0 16px;
}
.section-title--white { color: #fff; }
.section-sub { font-size: 16px; line-height: 1.6; color: #5a6577; margin: 0; }
.section-sub--light { color: rgba(255,255,255,0.5); }
.body-text { font-size: 16px; line-height: 1.7; color: #5a6577; margin: 0 0 28px; }

/* ── NOSOTROS ── */
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
.counter-row { display: flex; gap: 20px; }
.counter-card {
  padding: 28px 32px; border-radius: 12px;
  background: #f6f8fb; border: 1px solid #e8ecf1; flex: 1;
}
.counter-card--accent {
  background: linear-gradient(135deg, #00b4d8, #0096b7);
  border: none;
}
.counter-card--accent .counter-card__num { color: #fff; }
.counter-card--accent .counter-card__label { color: rgba(255,255,255,0.75); }
.counter-card__num {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 38px; font-weight: 700; color: #0a2a4a; line-height: 1;
}
.counter-card__label { font-size: 13px; color: #8a919a; margin-top: 6px; font-weight: 500; }

.filos-stack { display: flex; flex-direction: column; gap: 14px; }
.filos-card {
  padding: 28px; border-radius: 12px; background: #f6f8fb; border: 1px solid #e8ecf1;
  transition: transform 0.3s, box-shadow 0.3s;
}
.filos-card:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.06); }
.filos-card--accent { background: linear-gradient(135deg, #081c36, #0d3460); border: none; }
.filos-card__title {
  font-family: 'Playfair Display', serif;
  font-size: 20px; font-weight: 700; color: #0a2a4a; margin: 0 0 10px;
}
.filos-card--accent .filos-card__title { color: #00b4d8; }
.filos-card__text { font-size: 14px; line-height: 1.65; color: #5a6577; margin: 0; }
.filos-card--accent .filos-card__text { color: rgba(255,255,255,0.65); }

/* ── SERVICIOS ── */
.serv-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.serv-card {
  padding: 36px 28px; border-radius: 12px;
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
  transition: all 0.3s ease; cursor: default;
}
.serv-card:hover { background: rgba(0,180,216,0.06); border-color: rgba(0,180,216,0.15); transform: translateY(-3px); }
.serv-card__icon { color: #00b4d8; margin-bottom: 18px; }
.serv-card__title { font-size: 17px; font-weight: 700; color: #fff; margin: 0 0 10px; }
.serv-card__desc { font-size: 14px; line-height: 1.6; color: rgba(255,255,255,0.45); margin: 0; }

/* ── FLOTILLA ── */
.flot-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
.flot-card {
  padding: 32px 16px; border-radius: 12px;
  background: #fff; border: 1px solid #e8ecf1;
  text-align: center; transition: all 0.3s;
}
.flot-card:hover { border-color: #00b4d8; box-shadow: 0 8px 28px rgba(0,180,216,0.1); transform: translateY(-3px); }
.flot-card__cap {
  font-family: 'Playfair Display', serif;
  font-size: 50px; font-weight: 700; color: #0a2a4a; line-height: 1;
}
.flot-card__ton { font-size: 20px; font-weight: 400; color: #00b4d8; }
.flot-card__bar { width: 32px; height: 3px; background: #00b4d8; border-radius: 2px; margin: 14px auto; }
.flot-card__name { font-size: 14px; font-weight: 700; color: #0a2a4a; margin: 0 0 6px; }
.flot-card__modes { font-size: 12px; color: #8a919a; margin: 0; line-height: 1.5; }

/* ── SECTORES ── */
.sector-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
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

/* ── CONTACTO (REDESIGNED) ── */
.contact-layout {
  display: grid; grid-template-columns: 1fr 1.15fr; gap: 40px; align-items: start;
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
.footer__logo { display: flex; align-items: center; gap: 10px; }
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
}

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 7px; }
::-webkit-scrollbar-track { background: #f6f8fb; }
::-webkit-scrollbar-thumb { background: #c0c8d2; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #a0aab5; }
`;
