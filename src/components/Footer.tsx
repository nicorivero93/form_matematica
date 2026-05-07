/**
 * Footer global — regla #11 de Nico.
 * Una sola línea, text-xs, slate-500. Solo el dominio con color de acento.
 */
export function Footer() {
  return (
    <footer className="px-4 py-3 text-center text-xs text-slate-500 dark:text-slate-500">
      © {new Date().getFullYear()} ·{' '}
      <a
        href="https://tomerivero-dev.web.app"
        target="_blank"
        rel="noreferrer"
        className="text-brand-500 hover:underline"
      >
        tomerivero.dev
      </a>
    </footer>
  );
}
