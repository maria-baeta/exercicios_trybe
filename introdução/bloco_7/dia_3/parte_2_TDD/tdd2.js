const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (words) => {
  let myArray = [];
  let string = '';
  for (let index = 0; index < words.length; index +=1){
    string = (words[index].toString());
    myArray.push(string.length);
  }
  return myArray;
}
wordLengths(['sun', 'potato', 'roundabout', 'pizza'])


const words = ['sun', 'potato', 'roundabout', 'pizza'];


const expected = [3, 6, 10, 5];

assert.strictEqual(typeof(wordLengths), 'function'); //ok
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);