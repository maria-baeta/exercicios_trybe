//criar uma função que retorne (function)
//true se for um palindro  e (return) (if)
//false se não for (return)(if)(else/if)(else)

function palindromo (string) {
    let checkpalindrome = string.split(''). reverse().join('')
    return (checkpalindrome === string)
}
console.log(palindromo('casa'))

// 2 Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//função que recebe um array
//retornar o indice do maior valor
//[2, 3, 6, 7, 10, 1]; 

function indexDoMenorNumero(numeros) {
    let indexMaior = 0;
    for (let index in numeros) {
      if (numeros[indexMaior] < numeros[index]) {
        indexMaior = index;
      }
    }
    return indexMaior;
  }
  
  console.log(indexDoMenorNumero([2, 3, 6, 10, 11])); 

  //3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

  function indexDoMenorNumero(numeros) {
    let indexMenor = 0;
    for (let index in numeros) {
      if (numeros[indexMenor] > numeros[index]) {
        indexMenor = index;
      }
    }
    return indexMenor;
  }
  
  console.log(indexDoMenorNumero([2, 4, 6, 7, 10, 0, -3])); 

  // 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
  //Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

  