import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════
   SHARED HOOKS
   ══════════════════════════════════════ */

/* Count-up animation hook */
export function useCountUp(end, dur = 2200, go = false) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!go) return;
    let t0 = null;
    const step = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / dur, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, dur, go]);
  return n;
}

/* IntersectionObserver hook: returns [ref, isVisible] */
export function useInView(opts = {}) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setV(true); },
      { threshold: 0.15, ...opts }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, v];
}
