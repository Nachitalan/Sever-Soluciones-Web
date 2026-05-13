import { Reveal } from "../components/Reveal.jsx";
import { I } from "../icons.jsx";
import { BOLSA_PERKS } from "../data.jsx";
import { VacancyList } from "../components/VacancyList.jsx";

/* ══════════════════════════════════════
   BOLSA DE TRABAJO
   Props:
     - vacancies: array de vacantes (viene del admin)
   ══════════════════════════════════════ */

export function BolsaTrabajo({ vacancies }) {
  return (
    <section id="bolsa-trabajo" className="section section--light">
      <div className="bolsa-layout">
        <Reveal>
          <div className="bolsa-left">
            <p className="section__label">BOLSA DE TRABAJO</p>
            <h2 className="section__title">Únete al<br />Equipo Sever</h2>
            <p className="section__text">
              Somos una empresa que crece con su gente. Si buscas formar parte de un equipo profesional
              comprometido con la excelencia operativa y la seguridad, queremos conocerte.
            </p>
            <div className="bolsa-perks">
              {BOLSA_PERKS.map((p, i) => (
                <div key={i} className="bolsa-perk">
                  <span className="bolsa-perk__check">{I.arrow}</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <div className="bolsa-cta">
              <a
                href={`mailto:recursoshumanos@s-sever.com?subject=${encodeURIComponent("Envío de CV - Bolsa de Trabajo")}`}
                className="btn btn--primary"
              >
                Enviar mi CV {I.arrow}
              </a>
              <span className="bolsa-cta__or">o</span>
              <a href="tel:+523312945392" className="btn btn--outline-dark">Llamar a RH</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="bolsa-right">
            <div className="vacancy-panel">
              <div className="vacancy-panel__header">
                <span className="vacancy-panel__title">Vacantes Disponibles</span>
              </div>
              <VacancyList vacancies={vacancies} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
