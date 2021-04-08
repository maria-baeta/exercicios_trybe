//Dada uma matriz de matrizes, transforme em uma única matriz.


const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const reduce = (acc, curr) => acc.concat(curr);
// const map = () => {};
const flatten = () => {
  // escreva seu código aqui
  let newArray = arrays.reduce(reduce,[]);
  return newArray;
};
console.log(flatten());

// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);