//Escreva a função findTheNeedle para passar nos testes já implementados.

const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (array, string) => {
let resultado = -1;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === string) {
      resultado = Number(index);
    };
  };
  return resultado
};
console.log(findTheNeedle(['house', 'train', 'slide', 'needle', 'book'], 'needle'))


let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);