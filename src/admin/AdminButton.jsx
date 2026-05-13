/* Floating admin button (bottom-left gear) */
export function AdminButton({ onClick }) {
  return (
    <button
      className="admin-fab"
      onClick={onClick}
      aria-label="Panel de administración"
      title="Administración"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
      </svg>
    </button>
  );
}
