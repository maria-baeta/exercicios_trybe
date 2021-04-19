//Escreva a função sumAllNumbers para passar nos testes já implementados.
const assert = require('assert');
const sumAllNumbers = (numbers) => {
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    let number = numbers[index];
    sum += number
  }
  return sum
}
console.log(sumAllNumbers([9, 23, 10, 3, 8]));

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);
assert.strictEqual(typeof(sumAllNumbers), 'function');
assert.strictEqual(output, expected);