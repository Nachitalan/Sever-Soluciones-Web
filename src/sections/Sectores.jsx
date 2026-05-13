import { Reveal } from "../components/Reveal.jsx";
import { SECTORES } from "../data.jsx";

export function Sectores() {
  return (
    <section id="sectores" className="section section--white">
      <Reveal>
        <p className="section__label" style={{ textAlign: "center" }}>SECTORES</p>
        <h2 className="section__title" style={{ textAlign: "center" }}>Industrias que Servimos</h2>
      </Reveal>
      <div className="sector-grid">
        {SECTORES.map((s, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="sector-card">
              <div className="sector-card__icon">{s.icon}</div>
              <span className="sector-card__name">{s.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
