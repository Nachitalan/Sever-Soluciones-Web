import { useInView } from "../hooks.js";

/* Fade-in + slide-up wrapper triggered when scrolled into view */
export function Reveal({ children, delay = 0, className = "" }) {
  const [ref, v] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
