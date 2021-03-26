//A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array

const assert = require('assert');
const myRemoveWithoutCopy = (arr, item) => {
  let newArr = [];
  for (let index = 0; index < arr.length; index +=1) {
    if (arr[index] !== item) {
      newArr.push(arr[index])
    }
  }
  return newArr
}
// console.log(myRemoveWithoutCopy([0, 1, 2], 2))

//Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado

assert.strictEqual(typeof(myRemoveWithoutCopy), 'function');

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
const myarr = [0, 1, 2, 3]
// console.log(myRemoveWithoutCopy(myarr, 2))
assert.deepStrictEqual(myarr, [0, 1, 2, 3])

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4])

