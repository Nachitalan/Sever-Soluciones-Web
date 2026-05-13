import { Reveal } from "../components/Reveal.jsx";
import { useInView, useCountUp } from "../hooks.js";
import { PILARES } from "../data.jsx";

/* ══════════════════════════════════════
   NOSOTROS
   Misión, Visión, contadores animados y pilares.
   Props:
     - adminYear:  número (año fundación, viene del admin)
     - adminTrips: número (viajes completados, viene del admin)
   ══════════════════════════════════════ */

export function Nosotros({ adminYear, adminTrips }) {
  const [cRef, cVis] = useInView();
  const tripCount = useCountUp(adminTrips, 2200, cVis);

  return (
    <section id="nosotros" className="section section--light">
      <div className="section__inner two-col">
        <Reveal>
          <div>
            <p className="section__label">QUIÉNES SOMOS</p>
            <h2 className="section__title">Acerca de<br />Soluciones Sever</h2>
            <p className="section__text">
              Soluciones Sever inició operaciones en mayo de 2013, con el firme propósito de ofrecer un
              Servicio Especializado de Autotransporte local, foráneo y a frontera con EUA, satisfaciendo
              las necesidades del transporte y logística en la distribución de mercancía.
            </p>
            <div ref={cRef} className="counter-row">
              <div className="counter-item">
                <span className="counter-item__number">{new Date().getFullYear() - adminYear}+</span>
                <span className="counter-item__label">Años de experiencia</span>
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
              <h3 className="mv-card__title">Misión</h3>
              <p className="mv-card__text">
                Somos una empresa de servicios logísticos y de transporte.
                Ofrecemos a nuestros clientes soluciones a la medida,
                buscando la excelencia y rentabilidad con niveles óptimos de
                calidad y seguridad a través de la innovación y mejora continua.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mv-card">
              <h3 className="mv-card__title">Visión</h3>
              <p className="mv-card__text">
                Posicionarnos como una de las empresas más especializadas y
                reconocidas en el sector de transporte y logística, ampliando nuestro
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
  );
}
