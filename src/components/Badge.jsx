export default function Badge({ children, subtle = false }) {
  return (
    <span
      className={
        subtle
          ? "rounded-full border border-line px-3 py-1 text-xs text-muted"
          : "rounded-full border border-indigo/40 bg-indigo/10 px-3 py-1 text-xs text-ink"
      }
    >
      {children}
    </span>
  );
}
