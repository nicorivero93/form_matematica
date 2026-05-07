# GitHub Actions — `form-matematica`

## Workflow

Hay un solo workflow: `ci-deploy.yml`.

| Job | Cuándo corre | Qué hace |
|---|---|---|
| `test` | Push a `main`, PRs a `main`, dispatch manual | `npm ci` → `npm test` → `npm run build`. Sube el `dist/` como artifact. |
| `deploy` | Solo push a `main` (después de `test`) | Baja el artifact y deploya al canal `live` de Firebase Hosting. |

Concurrency: si pusheás dos commits seguidos a `main`, el segundo cancela la corrida del primero (no acumula).

## Secrets que tenés que configurar en GitHub

Andá a **Settings → Secrets and variables → Actions → New repository secret** y creá:

### 1. `FIREBASE_SERVICE_ACCOUNT_FORM_MATEMATICA` (obligatorio para deploy)

Es un JSON que autoriza a GitHub Actions a deployar.

1. Andá a https://console.firebase.google.com/project/form-matematica/settings/serviceaccounts/adminsdk
2. Click en **Generate new private key** → descargás un `.json`.
3. Abrí el archivo, copiá el contenido **entero** (incluidas las llaves `{ ... }`).
4. En GitHub, creá el secret con ese contenido como valor.

Sin este secret, el job `deploy` falla.

### 2. Secrets opcionales para Firebase Analytics y Sentry

Si querés que Analytics se reporte desde el build de CI (igual que en local con `.env.production`), agregá uno por uno:

| Secret | Valor (de tu `.env.production`) |
|---|---|
| `VITE_FIREBASE_API_KEY` | `AIzaSy...` |
| `VITE_FIREBASE_AUTH_DOMAIN` | `form-matematica.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | `form-matematica` |
| `VITE_FIREBASE_STORAGE_BUCKET` | `form-matematica.firebasestorage.app` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | `109544677913` |
| `VITE_FIREBASE_APP_ID` | `1:109544677913:web:...` |
| `VITE_FIREBASE_MEASUREMENT_ID` | `G-...` |

Si no los configurás, el deploy igual funciona pero la app no inicializa Analytics (el código tiene fallback: si falta alguna var, `initFirebase()` retorna sin hacer nada).

Y también opcional:

| Secret | Valor |
|---|---|
| `VITE_SENTRY_DSN` | DSN del proyecto en Sentry |

## Cómo verificar que está bien

1. Pushear un cambio a `main`.
2. Andá a **Actions** en GitHub → tiene que aparecer la corrida.
3. El job `test` debe pasar verde.
4. El job `deploy` debe pasar verde y publicar en https://form-matematica.web.app.
