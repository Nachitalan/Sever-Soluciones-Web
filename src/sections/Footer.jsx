import { useState } from "react";
import { I } from "../icons.jsx";
import { NAV_STRUCTURE, FLOATING_CONTACT } from "../data.jsx";
import { AvisoPrivacidad } from "./AvisoPrivacidad.jsx"; // Importamos el nuevo componente

export function Footer({ onNavigate }) {
  // Estado para controlar la visibilidad del Aviso de Privacidad
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__col footer__col--brand">
          <div className="footer__logo" onClick={() => onNavigate("hero")}>
            <img
              src="/sever-logo.png"
              alt="Soluciones Sever"
              className="footer__logo-img"
              onError={(e) => { e.target.style.display = "none"; }}
            />
            <div>
              <div className="nav__logo-text" style={{ color: "#fff" }}>SEVER</div>
              <div className="nav__logo-sub" style={{ color: "rgba(255,255,255,0.5)" }}>SOLUCIONES LOGÍSTICAS</div>
            </div>
          </div>
          <p className="footer__tagline">
            Servicio especializado de autotransporte local, foráneo y a frontera con EUA. En ruta desde 2013.
          </p>
          <div className="footer__social">
            <a href="https://www.linkedin.com/company/soluciones-sever/about/"  target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="LinkedIn">{I.linkedin}</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="Instagram">{I.instagram}</a>
            <a href={`https://wa.me/${FLOATING_CONTACT.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="WhatsApp">{I.whatsapp}</a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Navegación</h4>
          <div className="footer__list">
            {NAV_STRUCTURE.map((item) => (
              <button key={item.label} onClick={() => onNavigate(item.target)} className="footer__link">
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Contacto</h4>
          <div className="footer__list">
            <div className="footer__contact-group">
              <span className="footer__contact-label">Ventas</span>
              <a href="tel:+528119103303" className="footer__link-static">+52 81 1910 3303</a>
              <a href="mailto:gerencia.ventas@s-sever.com" className="footer__link-static">gerencia.ventas@s-sever.com</a>
            </div>
            <div className="footer__contact-group">
              <span className="footer__contact-label">Recursos Humanos</span>
              <a href="tel:+523312945392" className="footer__link-static">+52 33 1294 5392</a>
              <a href="mailto:recursoshumanos@s-sever.com" className="footer__link-static">recursoshumanos@s-sever.com</a>
            </div>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Ubicación</h4>
          <div className="footer__list">
            <div className="footer__contact-group">
              <span className="footer__contact-label">Oficinas Administrativas</span>
              <span className="footer__link-static">Av. Ignacio L Vallarta #6503</span>
              <span className="footer__link-static">Int. H11, Col. Ciudad Granja</span>
              <span className="footer__link-static">Zapopan, Jal. C.P. 45010</span>
            </div>
            <div className="footer__contact-group">
              <span className="footer__contact-label">Patio Operativo</span>
              <span className="footer__link-static">Dr. Pedro Juan Mirassou y Tarno</span>
              <span className="footer__link-static">Tlajomulco de Zúñiga, Jal. C.P. 45610</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <span>© {new Date().getFullYear()} Soluciones Sever. Todos los derechos reservados.</span>
        <span className="footer__bar-links">
          {/* Botón modificado para abrir el Modal sin afectar tus estilos */}
          <button 
            onClick={() => setShowPrivacy(true)} 
            className="footer__bar-link"
            style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', color: 'inherit', cursor: 'pointer' }}
          >
            Aviso de Privacidad
          </button>
          <span className="footer__bar-sep">·</span>
          <a href="#" className="footer__bar-link">Términos y Condiciones</a>
        </span>
      </div>

      {/* Renderizamos el componente del Aviso de Privacidad cuando showPrivacy es true */}
      {showPrivacy && <AvisoPrivacidad onClose={() => setShowPrivacy(false)} />}
    </footer>
  );
}