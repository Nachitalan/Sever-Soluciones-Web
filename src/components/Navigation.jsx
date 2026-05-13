import { useState, useRef, useEffect } from "react";
import { I } from "../icons.jsx";
import { NAV_STRUCTURE } from "../data.jsx";

/* ══════════════════════════════════════
   NAVIGATION
   Fixed top bar + dropdown + mobile menu.
   Props:
     - onNavigate(targetId)  → smooth-scroll to section
   ══════════════════════════════════════ */

export function Navigation({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    if (openDropdown !== null) {
      document.addEventListener("mousedown", onClickOutside);
      return () => document.removeEventListener("mousedown", onClickOutside);
    }
  }, [openDropdown]);

  const go = (id) => {
    setMenuOpen(false);
    setOpenDropdown(null);
    onNavigate(id);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav__inner">
          <div className="nav__logo" onClick={() => go("hero")}>
            <img src="/sever-logo.png" alt="Soluciones Sever" className="nav__logo-img" />
            <div>
              <div className="nav__logo-text">SEVER</div>
              <div className="nav__logo-sub">SOLUCIONES LOGÍSTICAS</div>
            </div>
          </div>

          <div className="nav__links" ref={dropdownRef}>
            {NAV_STRUCTURE.map((item, idx) => {
              if (item.type === "dropdown") {
                const isOpen = openDropdown === idx;
                return (
                  <div key={item.label} className="nav__dropdown-wrap">
                    <button
                      className={`nav__link nav__link--dropdown ${isOpen ? "nav__link--active" : ""}`}
                      onClick={() => setOpenDropdown(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      {item.label}
                      <svg
                        width="12" height="12" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round"
                        style={{ marginLeft: 5, transition: "transform .2s", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
                      >
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="nav__dropdown">
                        {item.items.map((sub) => (
                          <button
                            key={sub.label}
                            className="nav__dropdown-item"
                            onClick={() => go(sub.target)}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <button key={item.target} onClick={() => go(item.target)} className="nav__link">
                  {item.label}
                </button>
              );
            })}
          </div>

          <button className="nav__cta" onClick={() => go("contacto")}>Solicitar Cotización</button>
          <button className="nav__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? I.close : I.menu}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_STRUCTURE.map((item) => {
            if (item.type === "dropdown") {
              return (
                <div key={item.label} className="mobile-menu__group">
                  <div className="mobile-menu__group-title">{item.label}</div>
                  {item.items.map((sub) => (
                    <button key={sub.label} onClick={() => go(sub.target)} className="mobile-menu__link mobile-menu__link--sub">
                      {sub.label}
                    </button>
                  ))}
                </div>
              );
            }
            return (
              <button key={item.target} onClick={() => go(item.target)} className="mobile-menu__link">
                {item.label}
              </button>
            );
          })}
          <button className="nav__cta" onClick={() => go("contacto")} style={{ marginTop: 12, width: "100%" }}>
            Solicitar Cotización
          </button>
        </div>
      )}
    </>
  );
}
