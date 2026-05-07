import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

type Props = {
  latex: string;
  display?: boolean;
  className?: string;
  ariaLabel?: string;
};

/**
 * Render KaTeX imperativo. throwOnError=false → si la fórmula está mal escrita
 * muestra el LaTeX crudo en lugar de romper la página entera.
 */
export function MateLatex({ latex, display = false, className, ariaLabel }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    try {
      katex.render(latex, ref.current, {
        throwOnError: false,
        displayMode: display,
        output: 'html',
        strict: 'ignore',
      });
    } catch (err) {
      if (import.meta.env.DEV) console.warn('KaTeX render error', latex, err);
      if (ref.current) ref.current.textContent = latex;
    }
  }, [latex, display]);

  if (!ariaLabel) {
    return <span ref={ref} className={className} aria-hidden="true" />;
  }
  return <span ref={ref} className={className} aria-label={ariaLabel} role="math" />;
}
