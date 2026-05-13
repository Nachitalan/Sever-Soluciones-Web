import { Reveal } from "../components/Reveal.jsx";
import { AGENCIA_ADUANAL } from "../data.jsx";

export function AgenciaAduanal() {
  return (
    <section id="agencia-aduanal" className="section section--light">
      <Reveal>
        <p className="section__label" style={{ textAlign: "center" }}>AGENCIA ADUANAL</p>
        <h2 className="section__title" style={{ textAlign: "center" }}>Gestión Aduanal Integral</h2>
      </Reveal>
      <div className="serv-grid serv-grid--three">
        {AGENCIA_ADUANAL.map((s, i) => (
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
