import { useRef } from "react";
import { Reveal } from "../components/Reveal.jsx";
import { I } from "../icons.jsx";
import { useInView, useCountUp } from "../hooks.js";

/* Hero: logo grande a la izquierda + headline + CTAs + contadores */
export function Hero({ onNavigate, adminYear, adminTrips }) {
  const [cRef, cVis] = useInView();
  const tripCount = useCountUp(adminTrips, 2200, cVis);

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">

        {/* ── Lado izquierdo: logo ── */}
        <Reveal>
          <div className="hero__logo-side">
            <img src="/sever-logo.png" alt="Soluciones Sever" className="hero__logo-img" />
          </div>
        </Reveal>

        {/* ── Separador vertical ── */}
        <div className="hero__divider" />

        {/* ── Lado derecho: contenido ── */}
        <div className="hero__content">
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

          {/* ── Contadores ── */}
          <Reveal delay={0.45}>
            <div ref={cRef} className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-number">{new Date().getFullYear() - adminYear}+</span>
                <span className="hero__stat-label">Años de experiencia</span>
              </div>
              <div className="hero__stat-sep" />
              <div className="hero__stat">
                <span className="hero__stat-number">+{tripCount.toLocaleString()}</span>
                <span className="hero__stat-label">Viajes completados</span>
              </div>
            </div>
          </Reveal>
        </div>

      </div>

      <div className="hero__scroll" onClick={() => onNavigate("certificaciones")}>
        {I.chevron}
      </div>
    </section>
  );
}
