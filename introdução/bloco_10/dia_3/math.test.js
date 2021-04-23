const math = require('./math')

// mocka todos os comandos:

jest.mock('./math.js')

// 1. Subtarir
test('#subtrair', () => {
  math.subtrair.mockImplementation((a, b) => a - b);
  math.subtrair(2, 1);
  expect(math.subtrair).toHaveBeenCalled(); // testa se a função foi chamada
  expect(math.subtrair).toHaveBeenCalledTimes(1); // testa quantas vezes a função foi chamada, no caso 1.
  expect(math.subtrair).toHaveBeenCalledWith(2, 1); // testa quais parametros foram passados.
  expect(math.subtrair(2, 1)).toBe(1); // testa se o valor é o esperado 
});
// 2. Multiplicar
test('#multiplicar', () => {
  math.multiplicar.mockImplementation((a, b) => a * b);
  math.multiplicar = jest
  .fn()
  .mockReturnValue(10); // define um valor padrão de retorno
  math.multiplicar(2, 5);
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar).toHaveBeenCalledTimes(1);
  expect(math.multiplicar).toHaveBeenCalledWith(2,5);
  expect(math.multiplicar(2, 5)).toBe(10);
})
// 3. Somar 
test('#somar', () => {
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(2, 1);
  expect(math.somar).toHaveBeenCalled(); // testa se a função foi chamada
  expect(math.somar).toHaveBeenCalledTimes(1); // testa quantas vezes a função foi chamada, no caso 1.
  expect(math.somar).toHaveBeenCalledWith(2, 1); // testa quais parametros foram passados.
  expect(math.somar(2, 1)).toBe(3); // testa se o valor é o esperado 
});
// 4. Divid 
test('#multiplicar', () => {
  math.dividir.mockImplementation((a, b) => a / b);
  math.dividir = jest
  .fn()
  .mockReturnValueOnce(2) // retorna o valor definido apenas uma vez, podendo ser encadeado em sucessivas chamadas.
  // .mockReturnValueOnce(5) // define um valor padrão de retorno
  .mockReturnValue(15);
  
  math.dividir(6, 3);
  math.dividir(10, 2);
  math.dividir(30, 2);

  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir).toHaveBeenCalledTimes(1);

  expect(math.dividir).toHaveBeenCalledTimes(1);
  expect(math.dividir).toHaveBeenCalledWith(6, 3);
  expect(math.dividir(6, 3)).toBe(2);

  expect(math.dividir).toHaveBeenCalledTimes(2);
  expect(math.dividir).toHaveBeenCalledWith(10, 2);
  expect(math.dividir(10, 2)).toBe(5);

  expect(math.dividir).toHaveBeenCalledTimes(3);
  expect(math.dividir).toHaveBeenCalledWith(30, 2);
  expect(math.dividir(30, 2)).toBe(15);
})
// 5. Subtrair
