//A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

const assert = require('assert');

const myRemove = (arr, item) => {
  let newArr = [];
  for (let index = 0; index < arr.length; index +=1) {
    if(arr[index] !== item) {
      newArr.push(arr[index])
    }
  }
return newArr
}


assert.strictEqual(typeof(myRemove), 'function');

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado

assert.deepStrictEqual(myRemove([0, 1, 2, 3], 3),[0, 1, 2]);

//Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

//Verifique se o array passado por parâmetro não sofreu alterações

const myarr = [0, 1, 2, 3] 
myRemove(myarr, 1)
assert.deepStrictEqual(myarr, [0, 1, 2, 3]);

//Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4] )



