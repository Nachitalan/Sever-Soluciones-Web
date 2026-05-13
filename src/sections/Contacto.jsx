import { useState } from "react";
import { Reveal } from "../components/Reveal.jsx";
import { I } from "../icons.jsx";
import { ContactForm } from "../components/ContactForm.jsx";

/* ══════════════════════════════════════
   CONTACTO
   Dos pestañas (Ventas / RH) + formulario.
   ══════════════════════════════════════ */

const TABS = [
  {
    key: "ventas",
    badge: "Ventas",
    iconKey: "phone",
    rows: [
      { label: "Gerente Comercial", value: "Bernardo Garza",            link: null },
      { label: "Teléfono",          value: "+52 (81) 1910 3303",        link: "tel:+528119103303" },
      { label: "Email",             value: "gerencia.ventas@s-sever.com", link: "mailto:gerencia.ventas@s-sever.com" },
    ],
  },
  {
    key: "rh",
    badge: "Recursos Humanos",
    iconKey: "user",
    rows: [
      { label: "Teléfono", value: "+52 (33) 1294 5392",         link: "tel:+523312945392" },
      { label: "Email",    value: "recursoshumanos@s-sever.com", link: "mailto:recursoshumanos@s-sever.com" },
    ],
  },
];

export function Contacto() {
  const [activeTab, setActiveTab] = useState("ventas");

  return (
    <section id="contacto" className="section section--dark">
      <Reveal>
        <p className="section__label" style={{ textAlign: "center", color: "#00b4d8" }}>CONTACTO</p>
        <h2 className="section__title" style={{ textAlign: "center", color: "#fff" }}>Trabajemos Juntos</h2>
      </Reveal>

      <div className="contact-layout">
        <div className="contact-cards">
          {TABS.map((tab) => (
            <div
              key={tab.key}
              className={`contact-tab ${activeTab === tab.key ? "contact-tab--active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <div className="contact-tab__header">
                <div className="contact-tab__icon-wrap">{I[tab.iconKey]}</div>
                <span className="contact-tab__badge">{tab.badge}</span>
              </div>
              {activeTab === tab.key && (
                <div className="contact-tab__body">
                  {tab.rows.map((r) => (
                    <div key={r.label} className="contact-tab__row">
                      <span className="contact-tab__label">{r.label}</span>
                      {r.link ? (
                        <a href={r.link} className="contact-tab__value contact-tab__value--link">{r.value}</a>
                      ) : (
                        <span className="contact-tab__value">{r.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="contact-map-hint">
            <div className="contact-map-hint__icon">{I.pin}</div>
            <span className="contact-map-hint__text">Zapopan y Tlajomulco de Zúñiga, Jalisco, México</span>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
