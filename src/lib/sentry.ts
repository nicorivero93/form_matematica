import * as Sentry from '@sentry/react';

// Init condicional a PROD + DSN presente (regla global #12).
// Si está vacío o estamos en dev, no inicializa y la app sigue andando.
export function initSentry(): void {
  const dsn = import.meta.env.VITE_SENTRY_DSN as string | undefined;
  if (!import.meta.env.PROD || !dsn) return;

  Sentry.init({
    dsn,
    environment: import.meta.env.MODE,
    tracesSampleRate: 0.1,
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 0.5,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({ maskAllText: false, blockAllMedia: false }),
    ],
  });
}

export const SentryErrorBoundary = Sentry.ErrorBoundary;
