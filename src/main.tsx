import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { App } from './App';
import { initSentry } from './lib/sentry';
import { installGlobalErrorHandlers } from './lib/error-capture';
import { ErrorBoundary } from './components/ErrorBoundary';

initSentry();
installGlobalErrorHandlers();

// Lazy import de Firebase para que el SDK (~50kb gzip) no entre al bundle
// inicial. Analytics no es bloqueante; lo arrancamos después del primer paint.
if (import.meta.env.PROD) {
  void import('./lib/firebase').then((m) => m.initFirebase());
}

const root = document.getElementById('root');
if (!root) throw new Error('No #root element');

createRoot(root).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
