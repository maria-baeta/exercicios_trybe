//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
let n = 5;
let simbolo = '*'
let resultado = ''; 
for (let index = 0; index < n; index += 1) {
  resultado += simbolo
}
for (let index = 0; index < n; index += 1) {
  console.log(resultado)
}
//2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 5;
let simbolo = '*'
let resultado = ''; 
for (let index = 0; index < n; index += 1) {
  console.log(resultado += simbolo)
}

//3.Agora inverta o lado do triângulo. 

let n = 5;
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

// 4- Depois, faça uma pirâmide com n asteriscos de base:
let base = 5;
let simbol = "*";
let emptySpace = " ";
for (let index =2; index <= base; index += 1) {
  result = " "
  console.log(result += emptySpace)
  

}