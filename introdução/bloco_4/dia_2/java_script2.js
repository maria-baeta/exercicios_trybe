const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (number of numbers) {
  console.log(`Meu array é composto por: ${number} `)
}

// //2.Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
const sum = () => {
  return numbers.
    reduce((acumulador, valorAtual) => acumulador += valorAtual)
};
console.log(`A soma dos elementos do meu array é ${sum()}`);

// //3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
const media = () => {
  let soma = numbers.
    reduce((acumulador, valorAtual) => acumulador += valorAtual)
  return soma / numbers.length
};
console.log(`A média dos elementos do meu array é ${media()}`);

// //4.Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
const maxNumber = () => {
  if (media() > 20) {
    return `Valor maior que 20`
  }
  return `Valor menor ou igual a 20`
}
console.log(maxNumber());

// //5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;

const maxNumberArr = () => {
  const maiorNumero = numbers.reduce((acumulador, valorAtual) => acumulador > valorAtual ? acumulador : valorAtual)
  return `O maior número é ${maiorNumero}`
}
console.log(maxNumberArr());

// //6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
const numbersImpares = () => {
  let numberImpar = []
  for (let number of numbers) {
    if (number % 2 === 1) {
      numberImpar.push(number)
    }
  }
  return `A quantidade de números impares no meu array é: ${numberImpar.length}`
}
console.log(numbersImpares());

// //7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;

const minNumberArr = () => {
  const menorNumero = numbers.reduce((acumulador, valorAtual) => acumulador > valorAtual ? valorAtual : acumulador)
  return `O menor número é ${menorNumero}`
}
console.log(minNumberArr());

// //8. Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
let numeros = [];
for (let index = 1; index <= 25; index += 1) {
  numeros.push(index);
}
console.log(numeros);

// //9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 
for(let numero of numeros) {
  let division = numero / 2;
  console.log(`À divisão de ${numero} por 2 é:${division} `)
}

