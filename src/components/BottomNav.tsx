import { NavLink } from 'react-router-dom';
import { Home as HomeIcon, Search, BookmarkCheck, Info } from 'lucide-react';

const items = [
  { to: '/', label: 'Inicio', icon: HomeIcon },
  { to: '/buscar', label: 'Buscar', icon: Search },
  { to: '/mi-progreso', label: 'Progreso', icon: BookmarkCheck },
  { to: '/acerca', label: 'Acerca', icon: Info },
] as const;

export function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-30 border-t border-slate-200 bg-white/95 backdrop-blur dark:border-slate-700 dark:bg-slate-900/95 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <ul className="grid grid-cols-4">
        {items.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium transition-colors ${
                  isActive
                    ? 'text-brand-600 dark:text-brand-400'
                    : 'text-slate-500 dark:text-slate-400'
                }`
              }
            >
              <Icon size={20} aria-hidden />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
