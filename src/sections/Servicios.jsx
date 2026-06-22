import { Reveal } from "../components/Reveal.jsx";
import { SERVICIOS } from "../data.jsx";

export function Servicios() {
  return (
    <section id="servicios" className="section section--white">
      <Reveal>
        <p className="section__label" style={{ textAlign: "center" }}>NUESTROS SERVICIOS</p>
        <h2 className="section__title" style={{ textAlign: "center" }}>Soluciones de Transporte</h2>
      </Reveal>
      <div className="serv-grid">
        {SERVICIOS.map((s, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="serv-card">
              <div className="serv-card__icon">{s.icon}</div>
              <h3 className="serv-card__title">{s.title}</h3>
              <p className="serv-card__text">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
