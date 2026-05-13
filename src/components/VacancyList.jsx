import { I } from "../icons.jsx";

/* ══════════════════════════════════════
   VACANCY LIST
   Renders the list of open positions inside the bolsa panel.
   Props:
     - vacancies: array of {role, type, location, exp}
   ══════════════════════════════════════ */

export function VacancyList({ vacancies }) {
  if (!vacancies || vacancies.length === 0) {
    return (
      <p style={{ padding: 24, color: "#7a8b9e", fontSize: 14, textAlign: "center" }}>
        No hay vacantes publicadas en este momento.
      </p>
    );
  }

  return (
    <div className="vacancy-list">
      {vacancies.map((v, i) => (
        <div key={i} className="vacancy-item">
          <div className="vacancy-item__main">
            <h4 className="vacancy-item__role">{v.role}</h4>
            <div className="vacancy-item__meta">
              <span>{v.type}</span>
              <span className="vacancy-item__dot" />
              <span>{v.location}</span>
              <span className="vacancy-item__dot" />
              <span>{v.exp}</span>
            </div>
          </div>
          <a
            href={`mailto:recursoshumanos@s-sever.com?subject=${encodeURIComponent(`Postulación: ${v.role}`)}`}
            className="vacancy-item__btn"
            aria-label={`Postular a ${v.role}`}
          >
            {I.arrow}
          </a>
        </div>
      ))}
    </div>
  );
}
