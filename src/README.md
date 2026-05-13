# Sever Soluciones Web — Guía rápida del código

## Estructura

```
src/
├── App.jsx              ← orquesta toda la página (~60 líneas)
├── data.jsx             ← TEXTOS Y CONTENIDO EDITABLE — empezar aquí
├── hooks.js             ← useCountUp, useInView
├── icons.jsx            ← biblioteca de íconos SVG
├── styles.js            ← CSS global
│
├── admin/               ← Panel de administración (aislado)
│   ├── AdminButton.jsx  ← botón engrane esquina inf-izq
│   ├── AdminPanel.jsx   ← modal con auth y formulario
│   └── useAdmin.js      ← estado + localStorage
│
├── components/          ← componentes reutilizables
│   ├── Navigation.jsx
│   ├── FloatingContact.jsx
│   ├── ContactForm.jsx
│   ├── VacancyList.jsx
│   └── Reveal.jsx
│
└── sections/            ← cada sección de la página
    ├── Hero.jsx
    ├── CertificationsBar.jsx
    ├── Nosotros.jsx
    ├── Servicios.jsx
    ├── AgenciaAduanal.jsx
    ├── Capacidades.jsx
    ├── Flotilla.jsx
    ├── Sectores.jsx
    ├── Sostenibilidad.jsx
    ├── Clientes.jsx
    ├── BolsaTrabajo.jsx
    ├── Contacto.jsx
    └── Footer.jsx
```

## ¿Dónde edito X?

| Quiero cambiar...                   | Archivo                           |
| ----------------------------------- | --------------------------------- |
| Textos de servicios, pilares, etc.  | `src/data.jsx`                    |
| Teléfonos, emails de WhatsApp/RH    | `src/data.jsx` (FLOATING_CONTACT) |
| Contraseña del admin                | `src/data.jsx` (ADMIN_PASSWORD)   |
| Cantidad de slots de logos clientes | `src/sections/Clientes.jsx`       |
| Diseño / colores / espaciado        | `src/styles.js`                   |
| Lógica del panel admin              | `src/admin/AdminPanel.jsx`        |
| Layout principal de la página       | `src/App.jsx`                     |

## Panel admin

- Botón engrane gris en la esquina inferior-izquierda.
- Contraseña por defecto: **Sever2025** (cambiable en `data.jsx`).
- Permite editar: año fundación, viajes completados, vacantes.
- Cambios se guardan en `localStorage` del navegador.

## Notas

- `data.jsx` usa extensión `.jsx` (no `.js`) porque contiene JSX en los pilares. Vite no compila JSX en archivos `.js`.
