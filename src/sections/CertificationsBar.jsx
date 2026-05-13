import { Reveal } from "../components/Reveal.jsx";
import { CERTIFICATIONS } from "../data.jsx";

export function CertificationsBar() {
  return (
    <section id="certificaciones" className="cert-bar">
      <div className="cert-bar__inner">
        {CERTIFICATIONS.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.08}>
            <div className="cert-badge">
              <div className="cert-badge__img-wrap">
                <img src={c.img} alt={c.name} className="cert-badge__img" />
              </div>
              <div className="cert-badge__info">
                <span className="cert-badge__name">{c.name}</span>
                {c.cert      && <span className="cert-badge__cert">{c.cert}</span>}
                {c.enProceso && <span className="cert-badge__proceso">En proceso</span>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
