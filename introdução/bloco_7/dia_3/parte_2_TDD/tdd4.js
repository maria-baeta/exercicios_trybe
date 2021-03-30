//Escreva a função findTheNeedle para passar nos testes já implementados.

const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (words, word ) => {
  let resultado = 0;
  for (let index = 0; index < words.length; index += 1) {
    if (words[index] === word) {
      words[index]
    }
  //   } else {
  //     resultado = -1
  //   }
  // }
  return  console.log(words.index)
}
findTheNeedle(['house', 'train', 'slide', 'needle', 'book'], 'needle');


let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
// assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
// assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
// assert.strictEqual(output, expected);