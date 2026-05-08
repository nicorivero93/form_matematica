import { Link, NavLink, Outlet } from 'react-router-dom';
import { Search, Sigma } from 'lucide-react';
import { Footer } from './Footer';
import { BottomNav } from './BottomNav';
import { TemaToggle } from './TemaToggle';
import { BuscadorOverlay } from './buscador/BuscadorOverlay';
import { useAtajoBuscador } from './buscador/AtajoBuscador';
import { useBuscadorAbierto } from '@/store/buscadorAbierto';
import { WhatsAppFAB } from './WhatsAppFAB';
import { FeedbackWidget } from './FeedbackWidget';

export function Layout() {
  useAtajoBuscador();
  const abrirBuscador = useBuscadorAbierto((s) => s.abrir);

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-3 focus:py-2 focus:rounded-md focus:bg-brand-600 focus:text-white focus:shadow-lg"
      >
        Saltar al contenido
      </a>

      <header
        className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-600 text-white">
              <Sigma size={18} />
            </span>
            <span className="hidden sm:inline">Mate — Fórmulas y Teoría</span>
            <span className="sm:hidden">Mate</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            <NavItem to="/">Inicio</NavItem>
            <NavItem to="/buscar">Buscar</NavItem>
            <NavItem to="/mi-progreso">Mi progreso</NavItem>
            <NavItem to="/acerca">Acerca</NavItem>
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={abrirBuscador}
              aria-label="Abrir buscador"
              title="Buscar (Ctrl+K)"
              className="p-2 rounded-full text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              <Search size={18} />
            </button>
            <TemaToggle />
          </div>
        </div>
      </header>

      <main
        id="contenido-principal"
        tabIndex={-1}
        className="flex-1 max-w-6xl mx-auto w-full px-4 py-6 pb-24 md:pb-6 focus:outline-none"
      >
        <Outlet />
      </main>

      <Footer />
      <BottomNav />
      <BuscadorOverlay />
      <FeedbackWidget />
      <WhatsAppFAB />
    </div>
  );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `px-3 py-1.5 rounded-md font-medium transition-colors ${
          isActive
            ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800'
        }`
      }
    >
      {children}
    </NavLink>
  );
}
