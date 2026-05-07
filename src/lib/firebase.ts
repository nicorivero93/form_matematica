import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

/**
 * Init condicional de Firebase + Analytics. Solo en PROD y solo si están todas
 * las variables `VITE_FIREBASE_*` definidas. Si falta alguna, no inicializa
 * nada y la app sigue andando normal.
 *
 * El SDK pesa ~50kb gzip — por eso este módulo se importa en lazy desde
 * `main.tsx` después del primer paint.
 */

let app: FirebaseApp | null = null;

export function initFirebase(): void {
  if (!import.meta.env.PROD) return;

  const config = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string | undefined,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string | undefined,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string | undefined,
    appId: import.meta.env.VITE_FIREBASE_APP_ID as string | undefined,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string | undefined,
  };

  // Si falta alguna clave esencial no inicializamos: la app sigue andando sin Analytics.
  if (!config.apiKey || !config.projectId || !config.appId) return;

  app = initializeApp(config);

  // Analytics requiere measurementId. Si no está, salteamos sin romper.
  if (config.measurementId) {
    try {
      getAnalytics(app);
    } catch (err) {
      if (import.meta.env.DEV) console.warn('[firebase] analytics init falló', err);
    }
  }
}

export function getFirebaseApp(): FirebaseApp | null {
  return app;
}
