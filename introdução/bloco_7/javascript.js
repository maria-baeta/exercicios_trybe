// Primeira parte 

//exercício 1 
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope =`${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
}

  testingScope(false);

//exercício 2
//   Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];  
const ordenaNum = () => {

  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

  console.log(`Os números ${ordenaNum()} se encontram ordenados de forma crescente!`);

  // Parte 2
  //exercício 1
  //Crie uma função que receba um número e retorne seu fatorial.
  // const factorial = number => {
  //     let result = 1
  
  //     for (let index = 2; index <= number; index += 1) {
  //         result *= i
  //     }
  
  //     return result
  // }
  
  // console.log(factorial(5))

  //exercício 2 
  //Crie uma função que receba uma frase e retorne qual a maior palavra.

  const maiorPalavra = (frase) => {
    const arrayFrase = frase.split(' ');
    let contador = 0;
    let resultado = ' ';

    for (let index = 0; index < arrayFrase.length; index += 1) {
      let palavra = arrayFrase[index];
      if (palavra.length > contador) {
        contador = palavra.length;
        resultado = palavra;
      }
    }
    return resultado
  }
  
  console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'))

// exercício 4 
//Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
