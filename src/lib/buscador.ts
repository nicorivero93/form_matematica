import Fuse, { type FuseResult, type FuseResultMatch } from 'fuse.js';
import type { Tema } from '@/data/temas/tipos';

/**
 * Normaliza string para indexar/buscar:
 *   - lowercase
 *   - NFD + strip combining marks (saca tildes)
 *   - colapsa operadores y separadores a un solo espacio
 *
 * Sin mapeo griego (a diferencia de form-fisica) — los temas matemáticos
 * casi no usan letras griegas en este nivel.
 */
const OPERADORES_RE = /[·*=+\-/^()|,;:_\s]+/g;

const SUPER_A_DIGITO: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
};

export function normalizar(s: string): string {
  if (!s) return '';
  let resultado = s.normalize('NFD').replace(/[̀-ͯ]/g, '');
  resultado = resultado.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => SUPER_A_DIGITO[c] ?? c);
  resultado = resultado.toLowerCase().replace(OPERADORES_RE, ' ').trim();
  return resultado;
}

export const MIN_QUERY_LENGTH = 2;

export type ResultadoBusqueda = {
  tema: Tema;
  matches: ReadonlyArray<{ key: string; indices: ReadonlyArray<readonly [number, number]> }>;
};

type TemaIndexado = {
  tema: Tema;
  titulo: string;
  resumen: string;
  slug: string;
  tags: string[];
};

const KEYS = [
  { name: 'titulo', weight: 5 },
  { name: 'tags', weight: 3 },
  { name: 'resumen', weight: 2 },
  { name: 'slug', weight: 0.5 },
];

const FUSE_OPTIONS = {
  keys: KEYS,
  threshold: 0.35,
  ignoreLocation: true,
  includeMatches: true,
};

let cacheArr: readonly Tema[] | null = null;
let cacheFuse: Fuse<TemaIndexado> | null = null;

function indexar(temas: readonly Tema[]): Fuse<TemaIndexado> {
  if (cacheArr === temas && cacheFuse) return cacheFuse;
  const indexados: TemaIndexado[] = temas.map((t) => ({
    tema: t,
    titulo: normalizar(t.titulo),
    resumen: normalizar(t.resumen),
    slug: normalizar(t.slug),
    tags: t.tags.map(normalizar),
  }));
  cacheArr = temas;
  cacheFuse = new Fuse(indexados, FUSE_OPTIONS);
  return cacheFuse;
}

export function _resetIndiceCacheParaTests(): void {
  cacheArr = null;
  cacheFuse = null;
}

export function buscar(query: string, temas: readonly Tema[]): ResultadoBusqueda[] {
  const q = normalizar(query);
  if (q.length < MIN_QUERY_LENGTH) return [];
  const fuse = indexar(temas);
  return fuse.search(q).map(toResultado);
}

function toResultado(r: FuseResult<TemaIndexado>): ResultadoBusqueda {
  return {
    tema: r.item.tema,
    matches: (r.matches ?? []).map(matchToShape),
  };
}

function matchToShape(
  m: FuseResultMatch
): { key: string; indices: ReadonlyArray<readonly [number, number]> } {
  return {
    key: m.key ?? '',
    indices: m.indices.map(([a, b]) => [a, b] as const),
  };
}
