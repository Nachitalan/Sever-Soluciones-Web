import { Reveal } from "../components/Reveal.jsx";
import { SOSTENIBILIDAD } from "../data.jsx";

export function Sostenibilidad() {
  return (
    <section id="sostenibilidad" className="section section--light">
      <Reveal>
        <p className="section__label" style={{ textAlign: "center" }}>SOSTENIBILIDAD</p>
        <h2 className="section__title" style={{ textAlign: "center" }}>Compromiso con el Medio Ambiente</h2>
        <p className="section__text" style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 48px" }}>
          En Soluciones Sever trabajamos bajo los lineamientos del programa Transporte Limpio de la SEMARNAT,
          reduciendo emisiones y adoptando prácticas responsables en cada operación.
        </p>
      </Reveal>
      <div className="susten-grid">
        {SOSTENIBILIDAD.map((card, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="susten-card">
              <div className="susten-card__badge">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="susten-card__title">{card.title}</h3>
              <p className="susten-card__text">{card.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
