import { Reveal } from "../components/Reveal.jsx";

/* ══════════════════════════════════════
   CLIENTES
   Espacios vacíos para colocar logos de clientes.
   Para añadir un logo real, reemplaza el placeholder
   con: <img src="/logos/cliente.png" alt="..." />
   ══════════════════════════════════════ */

const CLIENT_SLOTS = 18; // cambia este número si quieres más/menos espacios

export function Clientes() {
  return (
    <section id="clientes" className="section section--white">
      <Reveal>
        <p className="section__label" style={{ textAlign: "center" }}>CLIENTES</p>
        <h2 className="section__title" style={{ textAlign: "center" }}>Quiénes confían en nosotros</h2>
        <p className="section__text" style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 48px" }}>
          Acompañamos a grandes empresas farmacéuticas, cadenas de autoservicio, operadores logísticos internacionales y fabricantes en su operación diaria.
        </p>
      </Reveal>
      <div className="clients-grid">
        {Array.from({ length: CLIENT_SLOTS }).map((_, i) => (
          <Reveal key={i} delay={i * 0.03}>
            <div className="client-logo-card">
              <div className="client-logo-placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18"/>
                  <path d="M9 21V9"/>
                </svg>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
