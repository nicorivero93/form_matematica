import { describe, it, expect, beforeEach } from 'vitest';
import { buscar, normalizar, _resetIndiceCacheParaTests } from './buscador';
import type { Tema } from '@/data/temas/tipos';

const tema = (slug: string, titulo: string, tags: string[] = [], resumen = ''): Tema => ({
  slug,
  titulo,
  anios: ['primaria-4'],
  area: 'numeros-y-operaciones',
  nivel: 'intro',
  resumen,
  teoria: [],
  ejemplos: [
    {
      titulo: 't',
      enunciado: 'e',
      pasos: [{ explicacion: 'p' }],
      resultado: 'r',
    },
  ],
  erroresComunes: ['e'],
  tags,
});

describe('normalizar', () => {
  it('saca tildes', () => {
    expect(normalizar('matemática')).toBe('matematica');
  });

  it('lowercase', () => {
    expect(normalizar('FRACCIÓN')).toBe('fraccion');
  });

  it('colapsa operadores y espacios', () => {
    expect(normalizar('1 + 2 * 3')).toBe('1 2 3');
  });

  it('superíndices unicode → dígitos', () => {
    expect(normalizar('x²')).toBe('x2');
  });

  it('strings vacíos', () => {
    expect(normalizar('')).toBe('');
  });
});

describe('buscar', () => {
  beforeEach(() => {
    _resetIndiceCacheParaTests();
  });

  it('devuelve [] con query vacío', () => {
    const temas = [tema('a', 'Fracciones')];
    expect(buscar('', temas)).toEqual([]);
  });

  it('devuelve [] con query muy corto', () => {
    const temas = [tema('a', 'Fracciones')];
    expect(buscar('f', temas)).toEqual([]);
  });

  it('encuentra por título', () => {
    const temas = [
      tema('a', 'Fracciones equivalentes'),
      tema('b', 'Multiplicación'),
    ];
    const res = buscar('fracc', temas);
    expect(res.length).toBeGreaterThan(0);
    expect(res[0].tema.slug).toBe('a');
  });

  it('ignora tildes en la query', () => {
    const temas = [tema('a', 'División')];
    const res = buscar('division', temas);
    expect(res.length).toBeGreaterThan(0);
  });

  it('encuentra por tag', () => {
    const temas = [tema('a', 'Otra cosa', ['perimetro'])];
    const res = buscar('perimetro', temas);
    expect(res.length).toBeGreaterThan(0);
  });

  it('no devuelve falsos positivos para queries totalmente diferentes', () => {
    const temas = [tema('a', 'Fracciones')];
    const res = buscar('xxxxyyyyzzzz', temas);
    expect(res).toEqual([]);
  });
});
