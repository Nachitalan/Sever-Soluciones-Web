import { useState } from "react";
import { I } from "../icons.jsx";
import { ADMIN_PASSWORD } from "../data.jsx";

/* ══════════════════════════════════════
   ADMIN MODAL
   Two states: password auth, then edit form.
   Props:
     - admin: object from useAdmin()
     - onClose(): close modal
   ══════════════════════════════════════ */

export function AdminModal({ admin, onClose }) {
  const [auth,   setAuth]   = useState(false);
  const [pass,   setPass]   = useState("");
  const [newVac, setNewVac] = useState({ role: "", type: "Tiempo completo", location: "", exp: "" });

  const handleAuth = () => {
    if (pass === ADMIN_PASSWORD) setAuth(true);
    else alert("Contraseña incorrecta");
  };

  const handleSave = () => {
    admin.persist();
    onClose();
  };

  const updateVac = (i, field, value) => {
    const a = [...admin.adminVacs];
    a[i] = { ...a[i], [field]: value };
    admin.setAdminVacs(a);
  };

  const removeVac = (i) => admin.setAdminVacs(admin.adminVacs.filter((_, j) => j !== i));

  const addVac = () => {
    if (!newVac.role.trim()) return;
    admin.setAdminVacs([...admin.adminVacs, newVac]);
    setNewVac({ role: "", type: "Tiempo completo", location: "", exp: "" });
  };

  return (
    <div
      className="admin-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="admin-modal">
        <div className="admin-modal__header">
          <h2 className="admin-modal__title">Panel de Administración</h2>
          <button className="admin-modal__close" onClick={onClose}>{I.close}</button>
        </div>

        {!auth ? (
          <div className="admin-auth">
            <p className="admin-auth__label">Ingresa la contraseña para continuar</p>
            <input
              type="password"
              className="admin-input"
              placeholder="Contraseña"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleAuth(); }}
              autoFocus
            />
            <button className="btn btn--primary" style={{ width: "100%", marginTop: 12 }} onClick={handleAuth}>
              Entrar
            </button>
          </div>
        ) : (
          <div className="admin-body">
            {/* Contadores */}
            <div className="admin-section">
              <h3 className="admin-section__title">Contadores</h3>
              <div className="admin-row">
                <label className="admin-label">Año de fundación</label>
                <input
                  type="number"
                  className="admin-input admin-input--sm"
                  value={admin.adminYear}
                  onChange={(e) => admin.setAdminYear(Number(e.target.value))}
                />
                <span className="admin-hint">
                  Actualmente muestra: {new Date().getFullYear() - admin.adminYear} años
                </span>
              </div>
              <div className="admin-row">
                <label className="admin-label">Viajes completados</label>
                <input
                  type="number"
                  className="admin-input admin-input--sm"
                  value={admin.adminTrips}
                  onChange={(e) => admin.setAdminTrips(Number(e.target.value))}
                />
              </div>
            </div>

            {/* Vacantes */}
            <div className="admin-section">
              <h3 className="admin-section__title">Vacantes</h3>
              {admin.adminVacs.map((v, i) => (
                <div key={i} className="admin-vac-row">
                  <input className="admin-input" placeholder="Puesto" value={v.role}     onChange={(e) => updateVac(i, "role",     e.target.value)} />
                  <input className="admin-input" placeholder="Tipo"   value={v.type}     onChange={(e) => updateVac(i, "type",     e.target.value)} />
                  <input className="admin-input" placeholder="Lugar"  value={v.location} onChange={(e) => updateVac(i, "location", e.target.value)} />
                  <input className="admin-input" placeholder="Exp."   value={v.exp}      onChange={(e) => updateVac(i, "exp",      e.target.value)} />
                  <button className="admin-del" onClick={() => removeVac(i)}>✕</button>
                </div>
              ))}
              <div className="admin-vac-row admin-vac-row--new">
                <input className="admin-input" placeholder="Puesto" value={newVac.role}     onChange={(e) => setNewVac({ ...newVac, role:     e.target.value })} />
                <input className="admin-input" placeholder="Tipo"   value={newVac.type}     onChange={(e) => setNewVac({ ...newVac, type:     e.target.value })} />
                <input className="admin-input" placeholder="Lugar"  value={newVac.location} onChange={(e) => setNewVac({ ...newVac, location: e.target.value })} />
                <input className="admin-input" placeholder="Exp."   value={newVac.exp}      onChange={(e) => setNewVac({ ...newVac, exp:      e.target.value })} />
                <button className="admin-add" onClick={addVac}>+</button>
              </div>
            </div>

            <button className="btn btn--primary" style={{ width: "100%", marginTop: 8 }} onClick={handleSave}>
              Guardar cambios
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
