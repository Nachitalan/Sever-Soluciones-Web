import { useState } from "react";
import { I } from "../icons.jsx";
import { DEPT_EMAILS } from "../data.jsx";

/* ══════════════════════════════════════
   CONTACT FORM
   Self-contained form that builds a mailto: link.
   ══════════════════════════════════════ */

export function ContactForm() {
  const [form, setForm] = useState({
    nombre: "", apellido: "", email: "", telefono: "", mensaje: "",
    departamento: "ventas",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dept = DEPT_EMAILS[form.departamento] || DEPT_EMAILS.ventas;
    const subject = `Contacto desde sitio web — ${dept.label} — ${form.nombre} ${form.apellido}`;
    const bodyLines = [
      `Nombre: ${form.nombre} ${form.apellido}`,
      `Email: ${form.email}`,
      `Teléfono: ${form.telefono || "(no proporcionado)"}`,
      `Departamento: ${dept.label}`,
      ``,
      `Mensaje:`,
      form.mensaje,
      ``,
      `---`,
      `Enviado desde solucionessever.com`,
    ];
    window.location.href = `mailto:${dept.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ nombre: "", apellido: "", email: "", telefono: "", mensaje: "", departamento: form.departamento });
  };

  return (
    <div className="contact-form-wrap">
      <div className="contact-form-wrap__header">
        <div className="contact-tab__icon-wrap">{I.mail}</div>
        <span className="contact-form-wrap__title">Enviar Mensaje</span>
      </div>

      {sent ? (
        <div className="form-success">
          <div className="form-success__check">✓</div>
          <p className="form-success__title">Abriendo tu correo...</p>
          <p className="form-success__text">
            Se abrió tu cliente de correo con el mensaje listo para <strong>{DEPT_EMAILS[form.departamento].label}</strong>. Solo confirma el envío.
          </p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Departamento</label>
            <div className="dept-selector">
              {Object.entries(DEPT_EMAILS).map(([key, d]) => (
                <button
                  type="button"
                  key={key}
                  className={`dept-pill ${form.departamento === key ? "dept-pill--active" : ""}`}
                  onClick={() => setForm({ ...form, departamento: key })}
                >
                  <span className="dept-pill__icon">{key === "ventas" ? I.phone : I.user}</span>
                  <span>{d.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Nombre</label>
              <input className="form-input" placeholder="Tu nombre" value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })} required />
            </div>
            <div className="form-group">
              <label className="form-label">Apellido</label>
              <input className="form-input" placeholder="Tu apellido" value={form.apellido}
                onChange={(e) => setForm({ ...form, apellido: e.target.value })} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" placeholder="correo@ejemplo.com" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div className="form-group">
              <label className="form-label">Teléfono</label>
              <input className="form-input" type="tel" placeholder="(33) 0000-0000" value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })} />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Mensaje</label>
            <textarea
              className="form-input form-input--ta"
              placeholder={form.departamento === "ventas"
                ? "Describe tu necesidad de transporte o solicita una cotización..."
                : "Cuéntanos sobre tu perfil profesional o interés en postularte..."}
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="btn btn--primary" style={{ width: "100%" }}>
            Enviar a {DEPT_EMAILS[form.departamento].label} {I.arrow}
          </button>
          <p className="form-note">Al enviar se abrirá tu cliente de correo con el mensaje pre-llenado.</p>
        </form>
      )}
    </div>
  );
}
