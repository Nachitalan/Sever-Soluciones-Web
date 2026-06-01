import { useState } from "react";

import { CSS } from "./styles.js";
import { useAdmin } from "./admin/useAdmin.js";

import { Navigation }        from "./components/Navigation.jsx";
import { FloatingContact }   from "./components/FloatingContact.jsx";

import { Hero }              from "./sections/Hero.jsx";
import { CertificationsBar } from "./sections/CertificationsBar.jsx";
import { Nosotros }          from "./sections/Nosotros.jsx";
import { Servicios }         from "./sections/Servicios.jsx";
import { AgenciaAduanal }    from "./sections/AgenciaAduanal.jsx";
import { Capacidades }       from "./sections/Capacidades.jsx";
import { Flotilla }          from "./sections/Flotilla.jsx";
import { Sectores }          from "./sections/Sectores.jsx";
import { Sostenibilidad }    from "./sections/Sostenibilidad.jsx";
import { Clientes }          from "./sections/Clientes.jsx";
import { BolsaTrabajo }      from "./sections/BolsaTrabajo.jsx";
import { Contacto }          from "./sections/Contacto.jsx";
import { Footer }            from "./sections/Footer.jsx";

import { AdminButton }       from "./admin/AdminButton.jsx";
import { AdminModal }        from "./admin/AdminPanel.jsx";

/* ══════════════════════════════════════
   APP — composes the whole page.
   Lógica de admin se inyecta vía useAdmin().
   ══════════════════════════════════════ */

export default function App() {
  const admin = useAdmin();
  const [adminOpen, setAdminOpen] = useState(false);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="sever-root">
      <style>{CSS}</style>

      <Navigation onNavigate={go} />

      <Hero               onNavigate={go} adminYear={admin.adminYear} adminTrips={admin.adminTrips} />
      <CertificationsBar />
      <Nosotros />
      <Servicios />
      <AgenciaAduanal />
      <Capacidades />
      <Flotilla />
      <Sectores />
      <Sostenibilidad />
      <Clientes />
      <BolsaTrabajo       vacancies={admin.adminVacs} />
      <Contacto />

      <FloatingContact />
      <Footer             onNavigate={go} />

      {/* Admin panel (botón engrane esquina inferior izquierda) */}
      <AdminButton onClick={() => setAdminOpen(true)} />
      {adminOpen && <AdminModal admin={admin} onClose={() => setAdminOpen(false)} />}
    </div>
  );
}
