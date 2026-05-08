import { Component, type ErrorInfo, type ReactNode } from 'react';
import { captureError, tryReloadOnChunkError } from '@/lib/error-capture';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

const CONTACTO = 'contacto@tomerivero.dev';

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    // Si es un chunk viejo, tryReloadOnChunkError dispara reload y devuelve true.
    // En ese caso NO mostramos el fallback — dejamos hasError=false para que
    // el siguiente render (post-reload) sea limpio.
    if (tryReloadOnChunkError(error)) {
      return { hasError: false, error: null };
    }
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (tryReloadOnChunkError(error)) return;
    captureError(error, {
      component: 'ErrorBoundary',
      extra: { componentStack: errorInfo?.componentStack },
    });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            fontFamily: 'system-ui, sans-serif',
            background: '#0f172a',
            color: '#fff',
          }}
        >
          <div style={{ maxWidth: 420, textAlign: 'center' }}>
            <h1 style={{ fontSize: 22, marginBottom: 12 }}>Algo salió mal</h1>
            <p style={{ color: '#cbd5e1', marginBottom: 16 }}>
              Refrescá la página. Si sigue pasando, avisanos a{' '}
              <a href={`mailto:${CONTACTO}`} style={{ color: '#7dd3fc' }}>{CONTACTO}</a>.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '10px 16px',
                borderRadius: 8,
                border: 0,
                background: '#0ea5e9',
                color: '#fff',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Recargar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
