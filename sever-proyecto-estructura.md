# Sever Soluciones Web — Documentación del Proyecto

## Stack tecnológico

| Elemento | Detalle |
|---|---|
| Framework | React 18 + Vite |
| Lenguaje | JSX (un solo archivo: `App.jsx`) |
| Estilos | CSS-in-JS (string `CSS` inyectado vía `<style>`) |
| Repositorio | `github.com/Nachitalan/Sever-Soluciones-Web` |
| Hosting | Netlify (auto-deploy desde rama `master`) |
| Dominio | Wix (pendiente de conectar a Netlify) |
| Terminal dev | PowerShell (Windows) |

---

## Estructura de archivos relevantes

```
/
├── public/
│   ├── sever-logo.png                    # Logo principal (nav + footer)
│   ├── ctpat-logo-arriba.png             # Certificación C-TPAT
│   ├── certificacion-transportelimpio.png
│   ├── Sello-OEA.png                     # OEA (en proceso)
│   └── BASC.png
├── src/
│   └── App.jsx                           # Componente raíz — toda la UI y CSS
├── index.html
├── vite.config.js
├── package.json
└── .gitignore                            # Debe excluir node_modules/
```

> **Regla crítica de despliegue:** `node_modules/` nunca debe commitearse.
> Netlify necesita la variable de entorno `NPM_CONFIG_PRODUCTION=false` para instalar devDependencies (Vite).

---

## Arquitectura del componente principal (`App.jsx`)

### Constantes editables (top of file)

```js
COUNTERS        // yearFounded: 2013, tripsCompleted: 35000
FLOATING_CONTACT // WhatsApp y email de RH
CERTIFICATIONS  // Array con name + ruta de imagen de cada cert
DEPT_EMAILS     // ventas / recursoshumanos con sus correos reales
NAV_STRUCTURE   // Links + dropdown de navegación
```

### Hooks personalizados

| Hook | Función |
|---|---|
| `useCountUp(end, dur, go)` | Animación de conteo numérico (easing cúbico) |
| `useInView(opts)` | Detecta cuando un elemento entra al viewport (IntersectionObserver) |

### Componente utilitario

**`<Reveal>`** — Wrapper de animación fade+slide-up al hacer scroll. Acepta `delay` y `className`.

### Objeto de iconos `I`

SVG inline para: `truck`, `shield`, `gps`, `box`, `snow`, `user`, `phone`, `mail`, `pin`, `chevron`, `menu`, `close`, `arrow`, `car`, `food`, `pill`, `store`, `chip`, `whatsapp`, `atSymbol`, `facebook`, `linkedin`, `instagram`.

---

## Secciones de la página (orden top → bottom)

### 1. `<nav>` — Barra de navegación fija
- Fondo `#0a2a4a` (navy sólido), altura 76 px
- Logo: imagen `/sever-logo.png` + texto "SEVER / SOLUCIONES LOGISTICAS"
- Links con underline animado en hover (`::after` con `scaleX`)
- **Dropdown "Servicios"**: menú flotante con 5 sub-ítems, cierre al click fuera
- CTA: botón "Solicitar Cotización" → scroll a `#contacto`
- Hamburger visible en móvil (< 900 px)

### 2. Menú móvil (`mobile-menu`)
- Overlay fijo desde top: 76 px
- Grupos con título en cian para el dropdown de Servicios
- Reaparece con `menuOpen` state

### 3. `#hero` — Pantalla completa hero
- Gradiente: `#0a2a4a → #0e4d80`
- Overlay radial con glow cian
- Texto: "Conectamos tu carga con su destino"
- Subtítulo con descripción del servicio
- Botones: "Solicitar Cotización" (primario) + "Ver Servicios" (outline)
- Flecha animada (bob) scrollea a `#certificaciones`

### 4. `#certificaciones` — Barra de certificaciones
- Fondo blanco, bajo el hero
- 4 badges con imagen + nombre: **C-TPAT**, **Transporte Limpio**, **OEA** (*en proceso), **BASC**
- Imágenes referenciadas desde `/public/`
- Nota de pie "(*En proceso)"

### 5. `#nosotros` — Quiénes somos
- Layout 2 columnas (texto izq / cards der)
- Texto de presentación: fundada mayo 2013
- **Contadores animados**: Años de experiencia (calculado dinámicamente) + Viajes completados (35,000, animado al entrar al viewport)
- Cards de **Misión** y **Visión**

### 6. `#servicios` — Nuestros servicios
- Grid 3 columnas × 2 filas (6 tarjetas)
- Servicios: Transporte Local/Foráneo, Seguridad Certificada, Rastreo Satelital, Logística Integral, Transporte a Frontera, Atención Personalizada

### 7. `#flotilla` — Flota vehicular
- Grid 4 columnas
- 4 tarjetas: Tractocamiones (30+), Cajas Secas (40+), Plataformas (15+), Cajas Refrigeradas (10+)
- Placeholder de imagen (pendiente fotos reales)
- Aviso "Próximamente: galería fotográfica real"

### 8. `#sectores` — Industrias
- Grid 6 columnas
- Sectores: Automotriz, Alimentos y Bebidas, Farmacéutica, Retail y Comercio, Electrónica, Manufactura

### 9. `#sostenibilidad`
- 3 tarjetas: Transporte Limpio, Flotilla Eficiente, Operación Responsable
- Badge numérico decorativo en esquina (01, 02, 03)
- Aviso de reporte de sostenibilidad próximamente

### 10. `#clientes`
- Grid 4×2 de logos placeholder (8 empresas de ejemplo)
- Aviso: logos reales pendientes de autorización

### 11. `#bolsa-trabajo`
- Layout 2 columnas
- Izq: beneficios + CTA "Enviar mi CV" (mailto RH) + "Llamar a RH"
- Der: panel de 4 vacantes de ejemplo con botón de postulación por correo

### 12. `#contacto`
- Fondo oscuro (dark section)
- Izq: 2 tabs clickeables (Ventas / Operaciones) con teléfono y email, más hint de ubicación (Guadalajara)
- Der: formulario de contacto con:
  - Selector de departamento (Ventas / Recursos Humanos) — pills
  - Nombre, Apellido, Email, Teléfono, Mensaje
  - Al enviar abre `mailto:` pre-rellenado
  - Estado de éxito con confirmación

### 13. Botones flotantes (posición fixed, esquina inferior derecha)
- WhatsApp → `wa.me/523312945392`
- Email → `recursoshumanos@s-sever.com`
- Tooltip en hover, pulse ring en WhatsApp

### 14. `<footer>`
- Grid 4 columnas: Marca, Navegación, Contacto, Ubicación
- Logo + tagline + redes sociales (Facebook, LinkedIn, Instagram, WhatsApp)
- **Contacto real documentado:**
  - Ventas: `+52 81 1910 3303` / `gerencia.ventas@s-sever.com`
  - RH: `+52 33 1294 5392` / `recursoshumanos@s-sever.com`
- Ubicaciones: Guadalajara, Jal. / Monterrey, N.L.
- Barra inferior: copyright + Aviso de Privacidad + T&C

---

## Datos reales extraídos de la presentación corporativa

| Dato | Valor |
|---|---|
| Año de fundación | 2013 |
| Viajes realizados | +36,000 |
| Director General | José Antonio Garza — `josegarza@s-sever.com` — +52 33 1409 9074 |
| Gerente Comercial | Bernardo Garza — `gerencia.ventas@s-sever.com` — +52 81 1910 3303 |
| Patio Operativo | Dr. Pedro Juan Mirassou y Tarno, Tlajomulco de Zúñiga, Jal. C.P. 45610 |
| Oficinas Admin. | Av. Ignacio L Vallarta #6503 Int. H11, Col. Ciudad Granja, Zapopan, Jal. C.P. 45010 |
| Sitio web | www.s-sever.com |
| CTPAT Account # | 59328233 — Certified MEXGDL00215-1 |
| BASC | Certified MEXGDL00215-1 |

### Clientes reales (de la presentación)
PISA, Walmart, PAK 2GO, Valle Redondo, BayWa r.e., Kraft Heinz, Bamberger Polymers, CBI Group, Kuehne+Nagel, POLNAC, Servi-Bolsa, Frialsa, Cab Logistics, Solística, Halter Logistics, DOZA Logística, La Moderna, Tuk

### Unidades de la flota (datos reales)
| Capacidad | Tarimas |
|---|---|
| 1.5 Ton (3,000 lbs) | 2 |
| 3.5 Ton (7,800 lbs) | 6 |
| 4.5 Ton (10,000 lbs) | 6 |
| 7 Ton (14,000 lbs) | 6 |
| 10 Ton (20,000 lbs) | 12 |
| 14 Ton (30,000 lbs) | 12 |
| 53' Trailer | 24 |
| Porta Contenedores | — |

---

## Paleta de colores y tokens de diseño

| Token | Valor | Uso |
|---|---|---|
| Navy oscuro | `#0a2a4a` | Nav, footer, fondos oscuros |
| Navy claro | `#0d3b66` / `#0e4d80` | Hero gradient |
| Cian principal | `#00b4d8` | Acentos, CTAs, links |
| Cian hover | `#0096b7` | Botones activos |
| Fondo claro | `#f8fafb` | Secciones alternas |
| Texto principal | `#1a2b3f` | Body |
| Texto secundario | `#5a6b7e` | Párrafos |
| Borde | `#e8ecf1` | Cards, divisores |

---

## Comportamiento responsive

| Breakpoint | Cambios |
|---|---|
| < 1100 px | Footer pasa a 2 columnas; nav links reducen padding |
| < 900 px | Nav links ocultos, hamburger visible |
| < 768 px | Todo pasa a 1 columna; section padding reducido |
| < 480 px | Flotilla y clientes a 1 columna |

---

## Pendientes y mejoras identificadas

- [ ] Actualizar contador `tripsCompleted` de 35,000 → 36,000 (dato real de la presentación)
- [ ] Agregar dirección real de oficinas en sección Contacto y Footer
- [ ] Reemplazar clientes de ejemplo por logos reales (con autorización)
- [ ] Agregar fotos reales de la flotilla en las tarjetas de `#flotilla`
- [ ] Conectar dominio de Wix a Netlify
- [ ] Agregar servicios reales: Agencia Aduanal, Importación/Exportación (del deck)
- [ ] Agregar sección "Nuestros Pilares" (Integridad / Excelencia / Colaboración)
- [ ] Actualizar datos de contacto del tab "Operaciones" en sección Contacto (actualmente tienen datos ficticios)
- [ ] Agregar dirección real de Zapopan al mapa/hint de ubicación

---

## Notas de despliegue (recordatorio)

```powershell
# Flujo completo en PowerShell
git add .
git status                          # verificar que App.jsx aparece con cambios
git commit -m "descripcion clara"
git push -u origin master           # rama es 'master', no 'main'
# Netlify hace auto-deploy desde GitHub
```

Variable de entorno requerida en Netlify:
```
NPM_CONFIG_PRODUCTION = false
```
