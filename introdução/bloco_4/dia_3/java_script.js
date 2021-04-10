//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
const quadrado = (num) => {
   let simbolo = '*'
  let resultado = '';
  for (let index = 0; index < num; index += 1) {
    resultado += simbolo
  }
  for (let index = 0; index < num; index += 1) {
    console.log(resultado)
  }
}
// quadrado(6)

// //2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
const escada = (num) => {
// let n = 5;
let simbolo = '*'
let resultado = ''; 
for (let index = 0; index < num; index += 1) {
  console.log(resultado += simbolo)
}}
// escada(5)

// //3.Agora inverta o lado do triângulo. 
const trianguloInvertido = (num) => {
  let n = num;
  let simbolo = '*';
  let espaçoVazio = ' ';
  for (let index = 1; index <= n; index += 1) {
    let resultado = '';
    for (let index2 = 0; index2 < (n - index); index2 += 1) {
      resultado += espaçoVazio;
    }
    for (let index3 = 0; index3 < index; index3 += 1) {
      resultado += simbolo;
    }
    console.log(resultado);
  }
}
// trianguloInvertido(4)
// // 4- Depois, faça uma pirâmide com n asteriscos de base:
const piramedeBaseN = (num) => {
  const symbol = "*";
  let linha = '';
  let posicao = num;
  for(let index = 0; index < num; index += 1) {
    for(let index2 = 0; index2 <= num; index2 += 1) {
      if (index2 < posicao) {
        linha = linha + ' '
      } else {
        linha = linha + symbol
      }
    }
    } 
  console.log(linha);
  linha = '';
  posicao -= 1;
}
piramedeBaseN(7)
