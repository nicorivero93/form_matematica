import { Moon, Sun } from 'lucide-react';
import { usePrefs } from '@/store/prefs';

/** Toggle dark/light. Default dark. Aplica `class="dark"` en `<html>`. */
export function TemaToggle() {
  const tema = usePrefs((s) => s.tema);
  const toggleTema = usePrefs((s) => s.toggleTema);

  return (
    <button
      type="button"
      onClick={toggleTema}
      aria-label={tema === 'dark' ? 'Cambiar a claro' : 'Cambiar a oscuro'}
      title={tema === 'dark' ? 'Cambiar a claro' : 'Cambiar a oscuro'}
      className="p-2 rounded-full text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800"
    >
      {tema === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
