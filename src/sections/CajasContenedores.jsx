import { Reveal } from "../components/Reveal.jsx";
import { CAJAS_CONTENEDORES } from "../data.jsx";
import { I } from "../icons.jsx";

export function CajasContenedores() {
  return (
    <section id="cajas-contenedores" className="section section--white">
      <Reveal>
        <p className="section__label" style={{ textAlign: "center" }}>CAJAS Y CONTENEDORES</p>
        <h2 className="section__title" style={{ textAlign: "center" }}>Tipo de Remolque</h2>
        <p className="section__text" style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 40px" }}>
          Contamos con distintos tipos de caja para adaptarnos a las necesidades específicas de cada carga.
        </p>
      </Reveal>
      <div className="flot-grid">
        {CAJAS_CONTENEDORES.map((c, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="flot-card">
              <div className="flot-card__image">
                {c.img ? (
                  <img src={c.img} alt={c.label} className="flot-card__img" />
                ) : (
                  <div className="flot-card__image--placeholder">
                    {i === 0 ? I.box : i === 1 ? I.snow : I.truck}
                    <span>Imagen próximamente</span>
                  </div>
                )}
              </div>
              <div className="flot-card__body">
                <span className="flot-card__label">{c.label}</span>
                <p className="serv-card__text">{c.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
