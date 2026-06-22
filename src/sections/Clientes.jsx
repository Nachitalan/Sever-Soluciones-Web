import { Reveal } from "../components/Reveal.jsx";

/* ══════════════════════════════════════
   CLIENTES
   ══════════════════════════════════════ */

// Todas las imágenes en la carpeta 'public' se referencian desde la raíz '/'
const clientLogos = [
  { src: "/Bamberger-logo.png", alt: "Bamberger Polymers" },
  { src: "/baywa.png", alt: "BayWa r.e." },
  { src: "/cablogistic.png", alt: "Cab Logistics" },
  { src: "/CBI-LOGO-1-.png", alt: "CBI Group" },
  { src: "/cropped-Logo-PiSA-01-1109x800.png", alt: "PiSA Farmacéutica" },
  { src: "/doz.png", alt: "Doza Logística", big: true },
  { src: "/Frialsa.png", alt: "Frialsa" },
  { src: "/halter.png", alt: "Halter Logistics" },
  { src: "/KraftHeinz.svg.png", alt: "Kraft Heinz" },
  { src: "/kuehe.png", alt: "Kuehne+Nagel" },
  { src: "/la moderna.png", alt: "La Moderna" }, 
  { src: "/2go.png", alt: "2GO Logistics" },
  { src: "/logo-e1649172202358.png", alt: "Valle Redondo" },
  { src: "/polnac.png", alt: "Polnac" },
  { src: "/servibolsa.png", alt: "Servibolsa" },
  { src: "/solistica.png", alt: "Solistica" },
  { src: "/tuk_logo_nuevo.png", alt: "Tuk Cintas Adhesivas" }, // <-- Así funciona perfectamente en Netlify
  { src: "/Walmart-Logo.png", alt: "Walmart" }
];

export function Clientes() {
  return (
    <section id="clientes" className="section section--white">
      <Reveal>
        <p className="section__label" style={{ textAlign: "center" }}>CLIENTES</p>
        <h2 className="section__title" style={{ textAlign: "center" }}>Quiénes confían en nosotros</h2>
        <p className="section__text" style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 48px" }}>
          Acompañamos a grandes empresas farmacéuticas, cadenas de autoservicio, operadores logísticos internacionales y fabricantes en su operación diaria.
        </p>
      </Reveal>
      
      <div className="clients-grid">
        {clientLogos.map((logo, i) => (
          <Reveal key={i} delay={i * 0.03}>
            <div className="client-logo-card">
              <div className="client-logo-placeholder" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", height: "100%" }}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    ...(logo.big && { transform: "scale(1.5)", transformOrigin: "center" })
                  }}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="section__text" style={{ textAlign: "center", maxWidth: 620, margin: "24px auto 0", fontSize: 13, color: "#9fb0c2" }}>
        Entre otros.
      </p>
    </section>
  );
}