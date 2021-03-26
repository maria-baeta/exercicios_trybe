//Praticando a implementação de testes - Parte 1
const assert = require('assert');
result = 0
const sum = (number1, b) => { 
  if (typeof(number1) !== 'number' || typeof b !== 'number') {
    throw new Error ('Parametro precisa ser um número inteiro')
  }
  result = (number1+b)
    return result
}
assert.strictEqual(typeof(sum), 'function')
assert.strictEqual(sum(4,5),9);
assert.strictEqual(sum(0,0),0);
assert.throws(() => {
  sum(4,'5')
  });
 assert.throws(() => {
  sum(4, '5');
}, /^Error: Parametro precisa ser um número inteiro$/);

