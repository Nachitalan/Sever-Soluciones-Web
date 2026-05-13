import { Reveal } from "../components/Reveal.jsx";
import { I } from "../icons.jsx";

/* Hero: logo + headline + CTAs */
export function Hero({ onNavigate }) {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <Reveal>
          <div className="hero__logo-wrap">
            <img src="/sever-logo.png" alt="Soluciones Sever" className="hero__logo-img" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="hero__label">SOLUCIONES LOGÍSTICAS INTEGRALES</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 className="hero__title">Conectamos tu carga<br />con su destino</h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="hero__sub">
            Servicio Especializado de Autotransporte local, foráneo y a frontera con EUA.
            Seguridad, eficiencia y tecnología en cada viaje.
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <div className="hero__actions">
            <button className="btn btn--primary" onClick={() => onNavigate("contacto")}>
              Solicitar Cotización {I.arrow}
            </button>
            <button className="btn btn--outline" onClick={() => onNavigate("servicios")}>
              Ver Servicios
            </button>
          </div>
        </Reveal>
      </div>
      <div className="hero__scroll" onClick={() => onNavigate("certificaciones")}>
        {I.chevron}
      </div>
    </section>
  );
}
