import { MateLatex } from './MateLatex';

type Props = {
  texto: string;
  className?: string;
};

/**
 * Renderiza un texto que puede tener LaTeX inline entre $...$.
 * Cualquier `$...$` se renderiza con KaTeX; el resto como texto plano.
 *
 * Ejemplo: "el doble es $2x$" → "el doble es " + KaTeX(2x).
 *
 * Para escapar un $ literal, usá \$ (no se interpreta como delimitador).
 */
export function TextoConLatex({ texto, className }: Props) {
  if (!texto) return null;

  // Split por $...$. Cuidado: \$ literal no debe tomarse.
  // Pattern: $ [no-$ no-newline]+ $   sin admitir $$ ... $$ por ahora.
  const partes = texto.split(/(\$[^$\n]+\$)/g);

  return (
    <span className={className}>
      {partes.map((p, i) => {
        if (p.length >= 2 && p.startsWith('$') && p.endsWith('$')) {
          const latex = p.slice(1, -1);
          return (
            <MateLatex key={i} latex={latex} className="inline-block mx-0.5 align-middle" />
          );
        }
        return <span key={i}>{p}</span>;
      })}
    </span>
  );
}
