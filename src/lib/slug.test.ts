import { describe, it, expect } from 'vitest';
import { slugify } from './slug';

describe('slugify', () => {
  it('lowercases', () => {
    expect(slugify('FOO')).toBe('foo');
  });

  it('reemplaza espacios por guiones', () => {
    expect(slugify('hola mundo')).toBe('hola-mundo');
  });

  it('saca tildes', () => {
    expect(slugify('división')).toBe('division');
    expect(slugify('matemática')).toBe('matematica');
  });

  it('colapsa caracteres no alfanuméricos en un guión', () => {
    expect(slugify('a + b = c')).toBe('a-b-c');
  });

  it('elimina guiones al principio y al final', () => {
    expect(slugify('  hola  ')).toBe('hola');
    expect(slugify('---hola---')).toBe('hola');
  });

  it('strings vacíos', () => {
    expect(slugify('')).toBe('');
  });
});
