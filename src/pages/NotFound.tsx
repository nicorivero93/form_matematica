import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-slate-500 dark:text-slate-400">
        No encontramos lo que buscabas.
      </p>
      <Link to="/" className="btn-primary">
        Volver al inicio
      </Link>
    </div>
  );
}
