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
              {/* Tooltip: visible solo al hover */}
              <div className="cert-badge__tooltip">
                <span className="cert-badge__tooltip-name">{c.name}</span>
                {c.desc      && <span className="cert-badge__tooltip-desc">{c.desc}</span>}
                {c.cert      && <span className="cert-badge__tooltip-cert">{c.cert}</span>}
                {c.enProceso && <span className="cert-badge__tooltip-proc">En proceso</span>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
