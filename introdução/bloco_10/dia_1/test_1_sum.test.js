const sum = require('./test_1_sum');

describe('Teste 1', () => {
  test('Testa se sum é um função', () => {
    expect('function').toBe(typeof (sum));
  })
  test('Testa se 4 + 5 é === 9', () => {
    expect(9).toBe(sum(4, 5));
  })
  test('Testa se 0 + 0 é === 0', () => {
    expect(0).toBe(sum(0, 0));
  })
  test('Testa se 4 + "5" retorna um erro', () => {
    expect(() => {sum(4,'5')}).toThrowError(new Error('Parametro precisa ser um número inteiro'));
  })
})

