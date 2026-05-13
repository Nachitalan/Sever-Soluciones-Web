import { I } from "../icons.jsx";
import { FLOATING_CONTACT } from "../data.jsx";

/* WhatsApp + Email floating buttons (bottom-right) */
export function FloatingContact() {
  return (
    <div className="floating-contact" role="complementary" aria-label="Contacto rápido">
      <a
        href={`https://wa.me/${FLOATING_CONTACT.whatsappNumber}?text=${encodeURIComponent(FLOATING_CONTACT.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn--whatsapp"
        aria-label="Contactar por WhatsApp"
      >
        <span className="floating-btn__icon">{I.whatsapp}</span>
        <span className="floating-btn__tooltip">Chatea con nosotros</span>
      </a>
      <a
        href={`mailto:${FLOATING_CONTACT.emailAddress}?subject=${encodeURIComponent(FLOATING_CONTACT.emailSubject)}`}
        className="floating-btn floating-btn--email"
        aria-label="Enviar correo electrónico"
      >
        <span className="floating-btn__icon">{I.atSymbol}</span>
        <span className="floating-btn__tooltip">Enviar correo</span>
      </a>
    </div>
  );
}
