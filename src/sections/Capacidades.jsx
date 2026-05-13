import { Reveal } from "../components/Reveal.jsx";
import { CAPACIDADES } from "../data.jsx";

export function Capacidades() {
  return (
    <section id="capacidades" className="section section--white">
      <Reveal>
        <h2 className="section__title" style={{ textAlign: "center" }}>Capacidades</h2>
      </Reveal>
      <div className="serv-grid">
        {CAPACIDADES.map((s, i) => (
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
  );
}
