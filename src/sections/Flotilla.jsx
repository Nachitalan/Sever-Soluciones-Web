import { Reveal } from "../components/Reveal.jsx";
import { I } from "../icons.jsx";
import { FLOTILLA } from "../data.jsx";

export function Flotilla() {
  return (
    <section id="flotilla" className="section section--light">
      <Reveal>
        <p className="section__label" style={{ textAlign: "center" }}>FLOTILLA</p>
        <h2 className="section__title" style={{ textAlign: "center" }}>Nuestra Flota Vehicular</h2>
        <p className="section__text" style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 40px" }}>
          Contamos con unidades modernas y en óptimas condiciones, equipadas con la última tecnología en seguridad y rastreo satelital.
        </p>
      </Reveal>
      <div className="flot-grid">
        {FLOTILLA.map((f, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="flot-card">
              <div className="flot-card__image">
                <div className="flot-card__image-placeholder">
                  {I.truck}
                  <span>Imagen</span>
                </div>
              </div>
              <div className="flot-card__body">
                <span className="flot-card__label">{f.label}</span>
                <span className="flot-card__detail">{f.detail}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
