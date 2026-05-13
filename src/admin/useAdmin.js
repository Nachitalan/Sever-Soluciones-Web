import { useState } from "react";
import { COUNTERS, VACANTES_DEFAULT } from "../data.jsx";

/* ══════════════════════════════════════
   ADMIN DATA HOOK
   Manages admin-editable values with localStorage persistence.
   Returns state + setters used by both the page and admin modal.
   ══════════════════════════════════════ */

const LS_KEYS = {
  year:  "sever_year",
  trips: "sever_trips",
  vacs:  "sever_vacs",
};

const loadLS = (key, fallback) => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
};

const saveLS = (key, val) => {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
};

export function useAdmin() {
  const [adminYear,  setAdminYear]  = useState(() => loadLS(LS_KEYS.year,  COUNTERS.yearFounded));
  const [adminTrips, setAdminTrips] = useState(() => loadLS(LS_KEYS.trips, COUNTERS.tripsCompleted));
  const [adminVacs,  setAdminVacs]  = useState(() => loadLS(LS_KEYS.vacs,  VACANTES_DEFAULT));

  const persist = () => {
    saveLS(LS_KEYS.year,  adminYear);
    saveLS(LS_KEYS.trips, adminTrips);
    saveLS(LS_KEYS.vacs,  adminVacs);
  };

  return {
    adminYear,  setAdminYear,
    adminTrips, setAdminTrips,
    adminVacs,  setAdminVacs,
    persist,
  };
}
