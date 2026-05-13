/* ══════════════════════════════════════
   GLOBAL STYLES
   Inyectado en <style>{CSS}</style> desde App.jsx
   ══════════════════════════════════════ */

export const CSS = `
/* ── RESET & BASE ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
.sever-root {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #1a2b3f; line-height: 1.6; overflow-x: hidden;
}
img { max-width: 100%; height: auto; }

/* ── NAV ── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 0 24px;
  background: #0a2a4a;
  box-shadow: 0 2px 20px rgba(0,0,0,0.15);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.nav__inner {
  max-width: 1400px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: 76px;
}
.nav__logo {
  display: flex; align-items: center; gap: 12px; cursor: pointer;
  padding-right: 24px;
  border-right: 1px solid rgba(255,255,255,0.08);
  margin-right: 8px;
}
.nav__logo-img {
  height: 42px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
}
.nav__logo-text {
  font-size: 20px; font-weight: 800; color: #fff;
  letter-spacing: 0.14em; line-height: 1;
}
.nav__logo-sub {
  font-size: 9px; color: rgba(255,255,255,0.5);
  letter-spacing: 0.14em; font-weight: 500;
  margin-top: 4px;
}
.nav__links {
  display: flex; gap: 2px; align-items: center; flex: 1; justify-content: flex-end;
  margin-right: 16px;
}
.nav__link {
  position: relative;
  background: none; border: none; color: rgba(255,255,255,0.82);
  font-size: 14px; font-weight: 500; cursor: pointer;
  font-family: inherit; padding: 10px 14px; border-radius: 0;
  transition: color 0.2s;
  display: inline-flex; align-items: center;
  letter-spacing: 0.01em;
}
.nav__link::after {
  content: "";
  position: absolute;
  left: 14px; right: 14px;
  bottom: 4px;
  height: 2px;
  background: #00b4d8;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.25s cubic-bezier(.16,1,.3,1);
}
.nav__link:hover { color: #fff; }
.nav__link:hover::after { transform: scaleX(1); }
.nav__link--active { color: #fff; }
.nav__link--active::after { transform: scaleX(1); }

/* Dropdown */
.nav__dropdown-wrap { position: relative; }
.nav__link--dropdown { gap: 2px; }
.nav__dropdown {
  position: absolute;
  top: calc(100% - 2px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 220px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08);
  padding: 8px;
  display: flex; flex-direction: column;
  border: 1px solid #e8ecf1;
  z-index: 120;
  animation: ddIn 0.22s cubic-bezier(.16,1,.3,1);
}
@keyframes ddIn {
  from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}
.nav__dropdown::before {
  content: "";
  position: absolute;
  top: -6px; left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px; height: 12px;
  background: #fff;
  border-left: 1px solid #e8ecf1;
  border-top: 1px solid #e8ecf1;
}
.nav__dropdown-item {
  background: none; border: none; text-align: left;
  padding: 11px 16px; border-radius: 6px;
  font-size: 14px; font-weight: 500; color: #0a2a4a;
  cursor: pointer; font-family: inherit;
  transition: all 0.18s;
  display: flex; align-items: center;
}
.nav__dropdown-item::before {
  content: "";
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #e8ecf1;
  margin-right: 10px;
  transition: all 0.18s;
  flex-shrink: 0;
}
.nav__dropdown-item:hover {
  background: #f0f9fc;
  color: #00b4d8;
}
.nav__dropdown-item:hover::before {
  background: #00b4d8;
  transform: scale(1.3);
}

.nav__cta {
  background: #00b4d8; color: #fff; border: none;
  padding: 11px 22px; border-radius: 6px;
  font-size: 13px; font-weight: 600; cursor: pointer;
  font-family: inherit; transition: all 0.25s;
  letter-spacing: 0.02em;
  white-space: nowrap;
}
.nav__cta:hover { background: #0096b7; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(0,180,216,0.35); }
.nav__hamburger {
  display: none; background: none; border: none;
  color: #fff; cursor: pointer; padding: 4px;
}

/* ── MOBILE MENU ── */
.mobile-menu {
  position: fixed; top: 76px; left: 0; right: 0; z-index: 99;
  background: #0a2a4a;
  padding: 20px 24px; display: flex; flex-direction: column;
  box-shadow: 0 8px 30px rgba(0,0,0,0.25);
  max-height: calc(100vh - 76px);
  overflow-y: auto;
}
.mobile-menu__link {
  background: none; border: none; text-align: left;
  padding: 14px 0; font-size: 16px; font-weight: 500;
  color: #fff; cursor: pointer; font-family: inherit;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.mobile-menu__link--sub {
  padding-left: 16px;
  font-size: 14px;
  color: rgba(255,255,255,0.7);
}
.mobile-menu__group {
  display: flex; flex-direction: column;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding: 10px 0;
}
.mobile-menu__group-title {
  font-size: 12px; font-weight: 700; letter-spacing: 0.12em;
  color: #00b4d8; text-transform: uppercase;
  padding: 8px 0;
}
.mobile-menu__group .mobile-menu__link--sub {
  border-bottom: none;
  padding: 10px 0 10px 16px;
}

/* ── HERO ── */
.hero {
  min-height: 100vh; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center; padding: 120px 24px 80px;
  background: linear-gradient(165deg, #0a2a4a 0%, #0d3b66 40%, #0e4d80 100%);
  position: relative; overflow: hidden;
}
.hero::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 70% 20%, rgba(0,180,216,0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 30% 80%, rgba(0,180,216,0.06) 0%, transparent 50%);
}
.hero__inner { position: relative; max-width: 750px; }
.hero__logo-wrap {
  margin-bottom: 32px;
  display: flex; justify-content: center;
}
.hero__logo-img {
  height: 110px; width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.95;
}
.hero__label {
  font-size: 12px; font-weight: 700; letter-spacing: 0.2em;
  color: #00b4d8; margin-bottom: 20px;
}
.hero__title {
  font-size: clamp(36px, 5.5vw, 60px); font-weight: 800;
  color: #fff; line-height: 1.1; margin-bottom: 22px;
}
.hero__sub {
  font-size: 17px; color: rgba(255,255,255,0.6);
  max-width: 520px; margin: 0 auto 36px; line-height: 1.7;
}
.hero__actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.hero__scroll {
  position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
  color: rgba(255,255,255,0.3); cursor: pointer;
  animation: bob 2s ease-in-out infinite;
}
@keyframes bob { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }

/* ── BUTTONS ── */
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; border-radius: 10px;
  font-size: 15px; font-weight: 600; cursor: pointer;
  font-family: inherit; transition: all 0.25s; border: none;
}
.btn--primary { background: #00b4d8; color: #fff; }
.btn--primary:hover { background: #0096b7; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,180,216,0.3); }
.btn--outline { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.25); }
.btn--outline:hover { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.06); }

/* ── CERTIFICATIONS BAR ── */
.cert-bar {
  background: #fff;
  padding: 48px 24px;
  border-bottom: 1px solid #e8ecf1;
}
.cert-bar__inner {
  max-width: 1100px; margin: 0 auto;
  display: flex; align-items: center; justify-content: center;
  gap: 24px; flex-wrap: wrap;
}
.cert-badge {
  display: flex; align-items: center; gap: 18px;
  padding: 18px 28px;
  border: 1.5px solid #e2e8f0;
  border-radius: 14px;
  background: #fff;
  transition: all 0.3s;
}
.cert-badge:hover {
  border-color: #00b4d8;
  box-shadow: 0 6px 22px rgba(0,180,216,0.1);
  transform: translateY(-2px);
}
.cert-badge__img-wrap {
  width: 72px; height: 72px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.cert-badge__img {
  max-width: 72px; max-height: 72px;
  object-fit: contain;
}
.cert-badge__info {
  display: flex; flex-direction: column; gap: 4px;
}
.cert-badge__name {
  font-size: 15px; font-weight: 700; color: #0a2a4a;
  white-space: nowrap;
}
.cert-badge__cert {
  font-size: 10px; font-weight: 600; color: #7a8b9e;
  letter-spacing: 0.04em;
}
.cert-badge__proceso {
  font-size: 11px; font-weight: 600;
  color: #f59e0b;
  background: rgba(245,158,11,0.08);
  border: 1px solid rgba(245,158,11,0.25);
  border-radius: 100px;
  padding: 2px 8px;
  width: fit-content;
}

/* ── SECTIONS ── */
.section { padding: 90px 24px; }
.section--light { background: #f8fafb; }
.section--white { background: #fff; }
.section--dark { background: linear-gradient(170deg, #0a2a4a, #0d3b66); }
.section__inner { max-width: 1100px; margin: 0 auto; }
.section__label {
  font-size: 12px; font-weight: 700; letter-spacing: 0.18em;
  color: #00b4d8; margin-bottom: 12px; text-transform: uppercase;
}
.section__title {
  font-size: clamp(28px, 4vw, 42px); font-weight: 800;
  color: #0a2a4a; line-height: 1.15; margin-bottom: 20px;
}
.section__text {
  font-size: 16px; color: #5a6b7e; line-height: 1.75; max-width: 540px;
}
.two-col {
  display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: start;
  max-width: 1100px; margin: 0 auto;
}

/* ── COUNTERS ── */
.counter-row { display: flex; gap: 40px; margin-top: 36px; }
.counter-item { display: flex; flex-direction: column; }
.counter-item__number { font-size: 38px; font-weight: 800; color: #00b4d8; line-height: 1; }
.counter-item__label { font-size: 13px; color: #7a8b9e; margin-top: 6px; }

/* ── MISSION/VISION CARDS ── */
.mv-cards { display: flex; flex-direction: column; gap: 20px; }
.mv-card {
  padding: 32px; border-radius: 16px;
  background: #fff; border: 1px solid #e8ecf1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  transition: all 0.3s;
}
.mv-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.06); transform: translateY(-2px); }
.mv-card__title { font-size: 20px; font-weight: 700; color: #0a2a4a; margin-bottom: 12px; }
.mv-card__text { font-size: 15px; color: #5a6b7e; line-height: 1.7; margin: 0; }

/* ── SERVICES ── */
.serv-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px;
  max-width: 1100px; margin: 40px auto 0;
}
.serv-grid--three { grid-template-columns: repeat(3, 1fr); }
.serv-card {
  padding: 32px 28px; border-radius: 14px;
  background: #f8fafb; border: 1px solid #e8ecf1;
  transition: all 0.3s; cursor: default;
}
.serv-card:hover { background: #fff; border-color: #00b4d8; box-shadow: 0 8px 28px rgba(0,180,216,0.08); transform: translateY(-3px); }
.serv-card__icon { color: #00b4d8; margin-bottom: 16px; }
.serv-card__title { font-size: 17px; font-weight: 700; color: #0a2a4a; margin-bottom: 10px; }
.serv-card__text { font-size: 14px; color: #5a6b7e; line-height: 1.7; margin: 0; }

/* ── FLOTILLA ── */
.flot-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
  max-width: 1200px; margin: 0 auto;
}
.flot-card {
  display: flex; flex-direction: column;
  border-radius: 14px; overflow: hidden;
  background: #fff; border: 1px solid #e8ecf1;
  transition: all 0.3s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
}
.flot-card:hover {
  border-color: #00b4d8;
  box-shadow: 0 14px 36px rgba(0,180,216,0.12);
  transform: translateY(-3px);
}
.flot-card__image {
  aspect-ratio: 16/10;
  background: linear-gradient(135deg, #eef3f7 0%, #dde5ee 100%);
  display: flex; align-items: center; justify-content: center;
  position: relative;
  overflow: hidden;
}
.flot-card__image::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 80%, rgba(0,180,216,0.08) 0%, transparent 70%);
}
.flot-card__image-placeholder {
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  color: #a7b5c4;
  font-size: 10px; font-weight: 700;
  letter-spacing: 0.16em; text-transform: uppercase;
  position: relative; z-index: 1;
}
.flot-card__image-placeholder svg {
  width: 44px; height: 44px;
  opacity: 0.6;
}
.flot-card:hover .flot-card__image-placeholder {
  color: #00b4d8;
}
.flot-card__body {
  padding: 24px 22px 26px;
  display: flex; flex-direction: column;
  gap: 4px;
  text-align: left;
}
.flot-card__count {
  font-size: 34px; font-weight: 800; color: #00b4d8;
  line-height: 1;
  font-family: 'Playfair Display', Georgia, serif;
}
.flot-card__label {
  font-size: 16px; font-weight: 700; color: #0a2a4a;
  margin-top: 8px;
}
.flot-card__detail {
  font-size: 13px; color: #6a7b91;
  margin-top: 6px; line-height: 1.55;
}

/* ── SECTORS ── */
.sector-grid {
  display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px;
  max-width: 1000px; margin: 40px auto 0;
}
.sector-card {
  display: flex; flex-direction: column; align-items: center; gap: 14px;
  padding: 40px 20px; border-radius: 12px;
  background: #fff; border: 1px solid #e8ecf1;
  transition: all 0.3s; cursor: default;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
}
.sector-card:hover { border-color: #00b4d8; box-shadow: 0 8px 28px rgba(0,180,216,0.08); transform: translateY(-3px); }
.sector-card__icon { color: #0a2a4a; }
.sector-card:hover .sector-card__icon { color: #00b4d8; }
.sector-card__name { font-size: 14px; font-weight: 600; color: #0a2a4a; text-align: center; }

/* ── CONTACTO ── */
.contact-layout {
  display: grid; grid-template-columns: 1fr 1.15fr; gap: 40px; align-items: start;
  max-width: 1100px; margin: 40px auto 0;
}
.contact-cards { display: flex; flex-direction: column; gap: 16px; }
.contact-tab {
  border-radius: 14px; overflow: hidden; cursor: pointer;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.3s;
}
.contact-tab--active {
  background: rgba(0,180,216,0.08); border-color: rgba(0,180,216,0.25);
}
.contact-tab__header {
  display: flex; align-items: center; gap: 14px;
  padding: 20px 24px 0;
}
.contact-tab__icon-wrap {
  width: 44px; height: 44px; border-radius: 12px;
  background: rgba(0,180,216,0.12); display: flex; align-items: center; justify-content: center;
  color: #00b4d8;
}
.contact-tab__badge {
  font-size: 16px; font-weight: 700; color: #fff;
}
.contact-tab__body { padding: 16px 24px 22px; }
.contact-tab__row {
  display: flex; justify-content: space-between; align-items: center;
  padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
}
.contact-tab__row:last-child { border-bottom: none; }
.contact-tab__label {
  font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.35);
  text-transform: uppercase; letter-spacing: 0.06em;
}
.contact-tab__value {
  font-size: 14px; color: rgba(255,255,255,0.8); text-decoration: none;
  font-weight: 500;
}
.contact-tab__value--link { color: #00b4d8; }
.contact-tab__value--link:hover { text-decoration: underline; }
.contact-map-hint {
  display: flex; align-items: center; gap: 10px;
  padding: 16px 20px; border-radius: 10px;
  background: rgba(0,180,216,0.06); border: 1px solid rgba(0,180,216,0.12);
  color: rgba(255,255,255,0.5);
}
.contact-map-hint__icon { color: #00b4d8; display: flex; }
.contact-map-hint__text { font-size: 13px; }

.contact-form-wrap {
  padding: 36px; border-radius: 16px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
}
.contact-form-wrap__header {
  display: flex; align-items: center; gap: 12px; margin-bottom: 28px;
  padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08);
}
.contact-form-wrap__title {
  font-size: 18px; font-weight: 700; color: #fff;
}
.contact-form { display: flex; flex-direction: column; gap: 18px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-label {
  font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.4);
  letter-spacing: 0.06em; text-transform: uppercase;
}
.form-input {
  padding: 13px 16px; border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04);
  font-size: 15px; font-family: inherit; color: #fff;
  outline: none; transition: border-color 0.2s;
}
.form-input::placeholder { color: rgba(255,255,255,0.2); }
.form-input:focus { border-color: #00b4d8; box-shadow: 0 0 0 3px rgba(0,180,216,0.1); }
.form-input--ta { resize: vertical; min-height: 100px; }

/* Department selector */
.dept-selector {
  display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
}
.dept-pill {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  padding: 14px 16px; border-radius: 10px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.7);
  font-family: inherit; font-size: 14px; font-weight: 600;
  cursor: pointer;
  transition: all 0.22s cubic-bezier(.16,1,.3,1);
}
.dept-pill__icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px;
  color: rgba(255,255,255,0.5);
  transition: color 0.22s;
}
.dept-pill__icon svg { width: 18px; height: 18px; }
.dept-pill:hover {
  background: rgba(0,180,216,0.08);
  border-color: rgba(0,180,216,0.25);
  color: #fff;
}
.dept-pill--active {
  background: rgba(0,180,216,0.15);
  border-color: #00b4d8;
  color: #fff;
  box-shadow: 0 4px 16px rgba(0,180,216,0.2);
}
.dept-pill--active .dept-pill__icon { color: #00b4d8; }
.form-note {
  font-size: 11.5px; color: rgba(255,255,255,0.4);
  text-align: center; margin: 4px 0 0;
  font-style: italic;
}

.form-success { text-align: center; padding: 50px 20px; }
.form-success__check {
  width: 60px; height: 60px; border-radius: 50%;
  background: #00b4d8; color: #fff;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 30px; font-weight: 700; margin-bottom: 16px;
}
.form-success__title { font-size: 22px; font-weight: 700; color: #fff; margin: 0 0 6px; }
.form-success__text { font-size: 15px; color: rgba(255,255,255,0.65); margin: 0; line-height: 1.5; }
.form-success__text strong { color: #00b4d8; font-weight: 700; }

/* ── FOOTER ── */
.footer {
  background: #061525;
  padding: 60px 24px 0;
  color: #fff;
}
.footer__main {
  max-width: 1400px; margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1.3fr 1.2fr;
  gap: 48px;
  padding-bottom: 44px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.footer__col { display: flex; flex-direction: column; gap: 18px; }
.footer__col--brand { max-width: 380px; }
.footer__logo {
  display: flex; align-items: center; gap: 12px;
  cursor: pointer; width: fit-content;
}
.footer__logo-img {
  height: 42px; width: auto; object-fit: contain;
  filter: brightness(0) invert(1);
}
.footer__tagline {
  font-size: 14px; line-height: 1.65;
  color: rgba(255,255,255,0.55);
  margin: 0;
  max-width: 320px;
}
.footer__social {
  display: flex; gap: 10px; margin-top: 4px;
}
.footer__social-btn {
  width: 38px; height: 38px;
  border-radius: 8px;
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.6);
  display: inline-flex; align-items: center; justify-content: center;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(.16,1,.3,1);
  border: 1px solid rgba(255,255,255,0.05);
}
.footer__social-btn:hover {
  background: #00b4d8;
  color: #fff;
  border-color: #00b4d8;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0,180,216,0.3);
}
.footer__col-title {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #00b4d8;
  margin: 0 0 4px;
}
.footer__list {
  display: flex; flex-direction: column; gap: 8px;
}
.footer__link {
  background: none; border: none;
  color: rgba(255,255,255,0.6);
  font-size: 14px; font-weight: 400;
  cursor: pointer; font-family: inherit;
  padding: 0; text-align: left;
  text-decoration: none;
  transition: color 0.2s, transform 0.2s;
  align-self: flex-start;
}
.footer__link:hover {
  color: #00b4d8;
  transform: translateX(3px);
}
.footer__link-static {
  color: rgba(255,255,255,0.6);
  font-size: 13.5px;
  text-decoration: none;
  transition: color 0.2s;
}
a.footer__link-static:hover { color: #00b4d8; }
.footer__contact-group {
  display: flex; flex-direction: column; gap: 3px;
  margin-bottom: 8px;
}
.footer__contact-label {
  font-size: 11px; font-weight: 700;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.footer__bar {
  max-width: 1400px; margin: 0 auto;
  padding: 22px 0;
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 14px;
  font-size: 12.5px;
  color: rgba(255,255,255,0.35);
}
.footer__bar-links {
  display: inline-flex; align-items: center; gap: 10px;
}
.footer__bar-link {
  color: rgba(255,255,255,0.4);
  text-decoration: none;
  font-size: 12.5px;
  transition: color 0.2s;
}
.footer__bar-link:hover { color: #00b4d8; }
.footer__bar-sep { color: rgba(255,255,255,0.2); }

/* ── PLACEHOLDER NOTICE (shared) ── */
.placeholder-notice {
  display: flex; align-items: center; gap: 10px;
  max-width: 780px; margin: 40px auto 0;
  padding: 14px 22px;
  background: rgba(0,180,216,0.06);
  border: 1px dashed rgba(0,180,216,0.35);
  border-radius: 10px;
  font-size: 13px;
  color: #5a6b7e;
  justify-content: center;
  text-align: center;
}
.placeholder-notice__dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #00b4d8;
  flex-shrink: 0;
  animation: noticePulse 1.8s ease-in-out infinite;
}
@keyframes noticePulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.75); }
}

/* ── SOSTENIBILIDAD ── */
.susten-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 20px; max-width: 1100px; margin: 0 auto;
}
.susten-card {
  position: relative;
  padding: 40px 28px 32px;
  background: #fff;
  border-radius: 14px;
  border: 1px solid #e8ecf1;
  transition: all 0.3s;
}
.susten-card:hover {
  border-color: rgba(0,180,216,0.25);
  box-shadow: 0 12px 36px rgba(0,180,216,0.08);
  transform: translateY(-3px);
}
.susten-card__badge {
  position: absolute;
  top: 20px; right: 22px;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 42px; font-weight: 700;
  color: rgba(0,180,216,0.15);
  line-height: 1;
  letter-spacing: -0.02em;
}
.susten-card__title {
  font-size: 19px; font-weight: 700; color: #0a2a4a;
  margin: 0 0 12px;
  max-width: 70%;
}
.susten-card__text {
  font-size: 14px; line-height: 1.65; color: #5a6b7e;
  margin: 0;
}

/* ── PILARES ── */
.pilares-wrap {
  padding: 48px 24px 0;
  max-width: 1100px; margin: 0 auto;
}
.pilares-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 20px; margin-top: 24px;
}
.pilar-card {
  display: flex; flex-direction: column; align-items: center;
  text-align: center;
  padding: 36px 28px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #e8ecf1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  transition: all 0.3s;
}
.pilar-card:hover {
  border-color: #00b4d8;
  box-shadow: 0 10px 32px rgba(0,180,216,0.1);
  transform: translateY(-3px);
}
.pilar-card__icon {
  color: #00b4d8;
  width: 68px; height: 68px;
  border-radius: 50%;
  background: rgba(0,180,216,0.08);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 18px;
  transition: all 0.3s;
}
.pilar-card:hover .pilar-card__icon {
  background: rgba(0,180,216,0.15);
  transform: scale(1.08);
}
.pilar-card__title {
  font-size: 18px; font-weight: 700; color: #0a2a4a;
  margin: 0 0 10px;
}
.pilar-card__text {
  font-size: 14px; color: #5a6b7e; line-height: 1.7; margin: 0;
}

/* ── CLIENTES (18 items: 6 cols) ── */
.clients-grid {
  display: grid; grid-template-columns: repeat(6, 1fr);
  gap: 14px; max-width: 1200px; margin: 0 auto;
}

/* ── SCROLLBAR ── */
  aspect-ratio: 16/9;
  background: #fff;
  border: 1px solid #e8ecf1;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.3s;
  padding: 14px;
}
.client-logo-card:hover {
  border-color: rgba(0,180,216,0.35);
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0,180,216,0.08);
}
.client-logo-card__placeholder {
  display: flex; flex-direction: column; align-items: center; gap: 3px;
  color: #a7b5c4;
  transition: color 0.3s;
}
.client-logo-card:hover .client-logo-card__placeholder {
  color: #00b4d8;
}
.client-logo-card__placeholder svg {
  margin-bottom: 4px;
  opacity: 0.6;
}
.client-logo-card__name {
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #0a2a4a;
}
.client-logo-card:hover .client-logo-card__name {
  color: #00b4d8;
}
.client-logo-card__sector {
  font-size: 10px;
  color: #8a9cad;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 2px;
}

/* ── BOLSA DE TRABAJO ── */
.bolsa-layout {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 60px; max-width: 1100px; margin: 0 auto;
  align-items: center;
}
.bolsa-perks {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 12px 20px;
  margin: 24px 0 32px;
}
.bolsa-perk {
  display: flex; align-items: center; gap: 10px;
  font-size: 14px; color: #3a4a5e; font-weight: 500;
}
.bolsa-perk__check {
  width: 26px; height: 26px; border-radius: 50%;
  background: rgba(0,180,216,0.1);
  color: #00b4d8;
  display: inline-flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.bolsa-perk__check svg { width: 13px; height: 13px; }
.bolsa-cta {
  display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
}
.bolsa-cta__or {
  font-size: 13px; color: #8a9cad; text-transform: uppercase;
  letter-spacing: 0.12em; font-weight: 600;
}
.btn--outline-dark {
  background: transparent;
  color: #0a2a4a;
  border: 1.5px solid #0a2a4a;
  padding: 12px 24px; border-radius: 8px;
  font-size: 14px; font-weight: 600;
  cursor: pointer; font-family: inherit;
  text-decoration: none;
  display: inline-flex; align-items: center;
  transition: all 0.25s;
}
.btn--outline-dark:hover {
  background: #0a2a4a; color: #fff;
}

.vacancy-panel {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e8ecf1;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(10,42,74,0.08);
}
.vacancy-panel__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 24px;
  background: #0a2a4a;
  color: #fff;
}
.vacancy-panel__title {
  font-size: 14px; font-weight: 700; letter-spacing: 0.04em;
}
.vacancy-panel__badge {
  font-size: 10px; font-weight: 700;
  padding: 4px 10px; border-radius: 100px;
  background: rgba(0,180,216,0.25);
  color: #6fd4ea;
  letter-spacing: 0.08em; text-transform: uppercase;
}
.vacancy-empty {
  padding: 40px 32px;
  text-align: center;
}
.vacancy-empty__icon {
  width: 76px; height: 76px;
  border-radius: 50%;
  background: rgba(0,180,216,0.08);
  color: #00b4d8;
  display: inline-flex; align-items: center; justify-content: center;
  margin-bottom: 18px;
}
.vacancy-empty__title {
  font-size: 18px; font-weight: 700; color: #0a2a4a;
  margin: 0 0 8px;
}
.vacancy-empty__text {
  font-size: 14px; line-height: 1.65; color: #5a6b7e;
  margin: 0 0 24px;
}

/* Vacancy list with items */
.vacancy-list {
  display: flex; flex-direction: column;
  padding: 8px;
}
.vacancy-item {
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px;
  padding: 16px 18px;
  border-radius: 10px;
  transition: background 0.22s;
  border: 1px solid transparent;
}
.vacancy-item:hover {
  background: #f0f9fc;
  border-color: rgba(0,180,216,0.15);
}
.vacancy-item__main {
  display: flex; flex-direction: column; gap: 4px;
  flex: 1; min-width: 0;
}
.vacancy-item__role {
  font-size: 15px; font-weight: 700; color: #0a2a4a;
  margin: 0;
}
.vacancy-item__meta {
  display: flex; align-items: center; gap: 8px;
  flex-wrap: wrap;
  font-size: 12px; color: #7a8b9e;
}
.vacancy-item__dot {
  width: 3px; height: 3px; border-radius: 50%;
  background: #c5cdd9;
}
.vacancy-item__btn {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: #f0f9fc;
  color: #00b4d8;
  border: 1px solid rgba(0,180,216,0.15);
  display: inline-flex; align-items: center; justify-content: center;
  text-decoration: none;
  transition: all 0.22s cubic-bezier(.16,1,.3,1);
  flex-shrink: 0;
}
.vacancy-item__btn:hover {
  background: #00b4d8;
  color: #fff;
  transform: translateX(3px);
  box-shadow: 0 4px 14px rgba(0,180,216,0.3);
}
.vacancy-footer {
  display: flex; flex-direction: column; gap: 3px;
  padding: 16px 22px;
  background: #f6f8fb;
  border-top: 1px solid #e8ecf1;
  text-align: center;
}
.vacancy-footer__label {
  font-size: 10px; font-weight: 700;
  color: #00b4d8;
  letter-spacing: 0.14em; text-transform: uppercase;
}
.vacancy-footer__text {
  font-size: 12px; color: #7a8b9e;
}

.vacancy-contact {
  padding-top: 22px;
  border-top: 1px dashed #e8ecf1;
  display: flex; flex-direction: column; gap: 4px;
  align-items: center;
}
.vacancy-contact__label {
  font-size: 11px; font-weight: 700; color: #8a9cad;
  letter-spacing: 0.12em; text-transform: uppercase;
  margin-bottom: 4px;
}
.vacancy-contact__value {
  font-size: 13px; font-weight: 600; color: #00b4d8;
  text-decoration: none;
}
.vacancy-contact__value:hover { text-decoration: underline; }

/* ── FLOATING CONTACT BUTTONS ── */
.floating-contact {
  position: fixed;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  z-index: 200;
  pointer-events: none;
}
.floating-btn {
  position: relative;
  pointer-events: auto;
  width: 58px; height: 58px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.12);
  transition: transform 0.28s cubic-bezier(.16,1,.3,1), box-shadow 0.28s ease, background 0.2s ease;
  animation: floatBtnIn 0.5s cubic-bezier(.16,1,.3,1) both;
}
.floating-btn:nth-child(1) { animation-delay: 0.15s; }
.floating-btn:nth-child(2) { animation-delay: 0.3s; }
@keyframes floatBtnIn {
  from { opacity: 0; transform: translateY(20px) scale(0.7); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.floating-btn--whatsapp { background: #25D366; }
.floating-btn--whatsapp:hover { background: #1ebe5d; }
.floating-btn--email { background: #00b4d8; }
.floating-btn--email:hover { background: #0096b7; }
.floating-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 28px rgba(0,0,0,0.22), 0 4px 10px rgba(0,0,0,0.14);
}
.floating-btn:active { transform: translateY(-1px) scale(0.98); }
.floating-btn__icon { display: flex; align-items: center; justify-content: center; }
.floating-btn__tooltip {
  position: absolute;
  right: calc(100% + 14px);
  top: 50%;
  transform: translateY(-50%) translateX(8px);
  background: #0a2a4a;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.22s ease, transform 0.22s cubic-bezier(.16,1,.3,1);
  box-shadow: 0 4px 14px rgba(0,0,0,0.18);
}
.floating-btn__tooltip::after {
  content: "";
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 6px solid transparent;
  border-left-color: #0a2a4a;
}
.floating-btn:hover .floating-btn__tooltip {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}
/* Pulse ring on whatsapp for extra attention */
.floating-btn--whatsapp::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55);
  animation: wappPulse 2.2s cubic-bezier(.16,1,.3,1) infinite;
}
@keyframes wappPulse {
  0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55); }
  70%  { box-shadow: 0 0 0 16px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}

/* ── RESPONSIVE ── */
@media (max-width: 1100px) {
  .nav__logo-sub { display: none; }
  .nav__link { padding: 10px 10px; font-size: 13px; }
}
@media (max-width: 1100px) {
  .nav__logo-sub { display: none; }
  .nav__link { padding: 10px 10px; font-size: 13px; }
  .footer__main { grid-template-columns: 1fr 1fr; gap: 36px; }
}
@media (max-width: 900px) {
  .nav__links { display: none !important; }
  .nav__cta:not(.mobile-menu .nav__cta) { display: none !important; }
  .nav__hamburger { display: block !important; }
  .nav__logo-sub { display: block; }
  .flot-grid { grid-template-columns: repeat(2, 1fr) !important; }
}
@media (max-width: 768px) {
  .two-col { grid-template-columns: 1fr !important; }
  .serv-grid { grid-template-columns: 1fr !important; }
  .serv-grid--three { grid-template-columns: 1fr !important; }
  .flot-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .sector-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .contact-layout { grid-template-columns: 1fr !important; }
  .form-row { grid-template-columns: 1fr !important; }
  .counter-row { flex-direction: column; }
  .section { padding: 70px 20px; }
  .hero { padding: 100px 20px 70px; }
  .cert-bar__inner { gap: 16px; }
  .cert-badge { padding: 10px 16px; }
  .floating-contact { right: 16px; bottom: 16px; gap: 12px; }
  .floating-btn { width: 52px; height: 52px; }
  .floating-btn__tooltip { display: none; }
  .susten-grid { grid-template-columns: 1fr !important; }
  .clients-grid { grid-template-columns: repeat(3, 1fr) !important; }
  .pilares-grid { grid-template-columns: 1fr !important; }
  .bolsa-layout { grid-template-columns: 1fr !important; gap: 40px; }
  .bolsa-perks { grid-template-columns: 1fr !important; }
  .nav__logo-sub { display: none; }
  .nav__inner { height: 64px; }
  .mobile-menu { top: 64px; }
  .dept-selector { grid-template-columns: 1fr !important; }
  .footer__main { grid-template-columns: 1fr !important; gap: 32px; padding-bottom: 32px; }
  .footer__col--brand { max-width: 100%; }
  .footer__bar { flex-direction: column; text-align: center; gap: 10px; }
  .vacancy-item { padding: 12px 14px; }
  .vacancy-item__role { font-size: 14px; }
}
@media (max-width: 480px) {
  .flot-grid { grid-template-columns: 1fr !important; }
  .clients-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .pilares-grid { grid-template-columns: 1fr !important; }
  .admin-vac-row { grid-template-columns: 1fr 1fr !important; }
  .cert-badge__img-wrap { width: 52px; height: 52px; }
  .cert-badge__img { max-width: 52px; max-height: 52px; }
}

/* ── CLIENT LOGO PLACEHOLDER ── */
.client-logo-card {
  aspect-ratio: 16/9;
  background: #fff;
  border: 1.5px dashed #d0d9e4;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.3s;
}
.client-logo-card:hover {
  border-color: rgba(0,180,216,0.35);
  background: #f8fafb;
}
.client-logo-placeholder {
  display: flex; align-items: center; justify-content: center;
  width: 100%; height: 100%;
}

/* ── ADMIN FAB ── */
.admin-fab {
  position: fixed;
  left: 20px; bottom: 20px;
  width: 40px; height: 40px;
  border-radius: 50%;
  background: rgba(10,42,74,0.65);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.4);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  z-index: 199;
  transition: all 0.3s;
  backdrop-filter: blur(6px);
}
.admin-fab:hover {
  background: rgba(10,42,74,0.95);
  color: #fff;
  transform: rotate(45deg);
}

/* ── ADMIN MODAL ── */
.admin-overlay {
  position: fixed; inset: 0; z-index: 1000;
  background: rgba(0,0,0,0.55);
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
  backdrop-filter: blur(4px);
}
.admin-modal {
  background: #fff;
  border-radius: 18px;
  width: 100%; max-width: 660px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 24px 80px rgba(0,0,0,0.25);
}
.admin-modal__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 24px 28px 18px;
  border-bottom: 1px solid #e8ecf1;
  position: sticky; top: 0; background: #fff; z-index: 1;
  border-radius: 18px 18px 0 0;
}
.admin-modal__title { font-size: 18px; font-weight: 800; color: #0a2a4a; }
.admin-modal__close {
  background: none; border: none; cursor: pointer;
  color: #7a8b9e; display: flex; padding: 4px; border-radius: 6px;
  transition: all 0.2s;
}
.admin-modal__close:hover { background: #f0f2f5; color: #0a2a4a; }
.admin-auth {
  padding: 32px 28px;
  display: flex; flex-direction: column; gap: 12px;
}
.admin-auth__label { font-size: 14px; color: #5a6b7e; }
.admin-body { padding: 20px 28px 28px; display: flex; flex-direction: column; }
.admin-section {
  padding: 18px 0;
  border-bottom: 1px solid #e8ecf1;
}
.admin-section:last-of-type { border-bottom: none; }
.admin-section__title {
  font-size: 11px; font-weight: 700; color: #00b4d8;
  text-transform: uppercase; letter-spacing: 0.12em;
  margin-bottom: 14px;
}
.admin-row {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 10px; flex-wrap: wrap;
}
.admin-label { font-size: 13px; font-weight: 600; color: #0a2a4a; min-width: 160px; }
.admin-hint  { font-size: 12px; color: #7a8b9e; }
.admin-input {
  padding: 9px 13px; border-radius: 8px;
  border: 1px solid #d0d9e4; background: #f8fafb;
  font-size: 14px; font-family: inherit; color: #0a2a4a;
  outline: none; transition: border-color 0.2s; width: 100%;
}
.admin-input:focus { border-color: #00b4d8; box-shadow: 0 0 0 3px rgba(0,180,216,0.1); }
.admin-input--sm { width: 130px; flex-shrink: 0; }
.admin-vac-row {
  display: grid;
  grid-template-columns: 2fr 1.1fr 1.1fr 0.7fr 34px;
  gap: 7px; align-items: center;
  margin-bottom: 7px;
}
.admin-del {
  background: #fee2e2; border: none; border-radius: 6px;
  color: #dc2626; font-size: 13px; font-weight: 700;
  cursor: pointer; height: 38px; width: 34px;
  transition: all 0.18s;
}
.admin-del:hover { background: #fca5a5; }
.admin-add {
  background: #dcfce7; border: none; border-radius: 6px;
  color: #16a34a; font-size: 20px; font-weight: 700;
  cursor: pointer; height: 38px; width: 34px;
  transition: all 0.18s;
}
.admin-add:hover { background: #bbf7d0; }

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 7px; }
::-webkit-scrollbar-track { background: #f6f8fb; }
::-webkit-scrollbar-thumb { background: #c0c8d2; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #a0aab5; }
`;
