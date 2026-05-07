import { Component, type ReactNode } from 'react';

type Props = { children: ReactNode };
type State = { error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: { componentStack?: string | null }): void {
    if (import.meta.env.DEV) {
      console.error('[ErrorBoundary]', error, info);
    }
  }

  reset = () => this.setState({ error: null });

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="card max-w-xl p-6 text-center space-y-3">
          <h1 className="text-xl font-semibold">Algo salió mal</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Probá refrescar la página. Si sigue fallando, avisanos a través del link del footer.
          </p>
          {import.meta.env.DEV && (
            <pre className="text-left text-xs bg-slate-100 dark:bg-slate-800 p-3 rounded-md overflow-auto max-h-64 whitespace-pre-wrap">
              {this.state.error.message}
              {'\n\n'}
              {this.state.error.stack}
            </pre>
          )}
          <button onClick={this.reset} className="btn-primary">
            Reintentar
          </button>
        </div>
      </div>
    );
  }
}
