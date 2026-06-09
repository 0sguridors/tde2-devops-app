const { soma, subtracao, multiplicacao, divisao } = require('../src/calc');

test('soma 2 + 3 = 5', () => {
  expect(soma(2, 3)).toBe(5);
});

test('subtracao 10 - 4 = 6', () => {
  expect(subtracao(10, 4)).toBe(6);
});

test('multiplicacao 3 * 4 = 12', () => {
  expect(multiplicacao(3, 4)).toBe(12);
});

test('divisao 10 / 2 = 5', () => {
  expect(divisao(10, 2)).toBe(5);
});

test('divisao por zero lança erro', () => {
  expect(() => divisao(5, 0)).toThrow('Divisão por zero');
});