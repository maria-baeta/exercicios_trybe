//1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// const a = 10;
// const b = 5;

//Adição
const sum = (a, b) => a + b;
const adicao = console.log(sum(5, 10))

//----------------------------------

//Subtração
const subtraction = (a, b) => b - a;
const subtracao = console.log(subtraction(5, 10))
// console.log(subtracao);

//----------------------------------

// //Multiplicação
const mult = (a, b) => a * b;
const multiplicação = console.log(mult(4, 2));

//----------------------------------

// //Divisão
const division = (a, b) => a / b;
const divisão = console.log(division(4, 2));

//----------------------------------

// //Módulo
const mod = (a, b = 2) => a % b;
const modulo = console.log(mod(4));

//----------------------------------

// // 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
const maxNumber = (a, b) => {
  if (a > b) {
    return `${a} é maior que ${b}`;
  } else {
    return `${b} é maior que ${a}`
  }
}
console.log(maxNumber(15, 8))

// let a = 10;
// let b = 5;
// if(a > b) {
//     console.log('a é maior que b');
// } else { console.log('b e maior que a') 
// }
//----------------------------------

// // 3.Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 10;
let b = 5;
let c = 1;
const qualMaxNumber = () => {
  let a = 10;
  let b = 25;
  let c = 1;
  if (a > b && a > c) {
    return `O maior numero é ${a}`
  } else if (b > a && b > c) {
    return `O maior número é ${b}`
  } else {
    return `O maior numéro é ${c}`
  }
}
console.log(qualMaxNumber())

// ------------------------------------------------------

// //4.Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const typeNumber = (num) => {
  if (num > 0) {
    return `Positivo`
  } if (num < 0) {
    return `Negativo`
  }
  return `Zero`
}
console.log(typeNumber(0));

// ------------------------------------------------------

// //5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
// //Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

const areaTriangle = (angle1, angle2, angle3) => {
  const somaAngle = angle1 + angle2 + angle3;
  if (typeof (angle1) !== 'number' || typeof (angle2) !== 'number' || typeof (angle3) !== 'number') {
    return `Erro`
  } if (somaAngle === 180) {
    return true
  } else {
    return false
  }
}
console.log(areaTriangle(40, 40, '100'))

// ------------------------------------------------------

//6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peçaXadrez = 'rei';

switch (peçaXadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei - Desloca uma casa por vez');
    break;
  case 'rainha':
    console.log('Rainha - Desloca em qualquer direção e quantas casa desejar');
    break;
  case 'bispo':
    console.log('Bispo - Desloca na diagonal quantas casas quises em qualquer direção');
    break;
  case 'cavalo':
    console.log('Cavalo - Desloca em L em qualquer direção, pode pular peças');
    break;
  case 'torre':
    console.log('Torre - Desloca na Horizontal e Vertical em qualquer direção');
    break;
  case 'peão':
    console.log('Peão - Na primeira jogada pode deslocar duas casa a frente, depois somente uma cas por vez, captura a peça adversaria que estiver na diagonal. Não anda para trás');
    break;
  default:
    console.log('Erro, peça invalida!');
    break
}

// ------------------------------------------------------

// //7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
const checkNota = (nota) => {
  if (nota < 0 || nota > 100 || typeof (nota) !== "number") {
    return `Erro, nota declarada está errada`
  }
  else if (nota >= 90) {
    return `A`
  }
  if (nota >= 80) {
    return `B`
  }
  if (nota >= 70) {
    return `C`
  }
  if (nota >= 60) {
    return `D`
  }
  if (nota >= 50) {
    return `E`
  }
  return `F`
}
console.log(checkNota(101));


// ------------------------------------------------------

// // 8. Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
const numberPar = (num) => num % 2 === 0;
const checkPar = (...numbers) => numbers.some((number) => numberPar(number));
console.log(checkPar(1, 2, 5))

// ------------------------------------------------------
//9. Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

const numberImpar = (num) => num % 2 === 1;
const checkImpar = (...numbers) => numbers.some((number) => numberImpar(number));
console.log(checkImpar(1, 2, 5))

// ------------------------------------------------------

// //10. Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const lucro = (custoProduto, valorvenda) => {
  // Atente que, sobre o custo do produto, incide um imposto de 20%.
  // valorCustoTotal = valorCusto + impostoSobreOCusto
  const valorCustoTotal = (custoProduto / 5) + custoProduto;

  // lucro = valorVenda - valorCustoTotal (lucro de um produto)
  const resultado = (valorvenda - valorCustoTotal) * 1000;

  if (custoProduto < 0 || valorvenda < 0) {
    return `Erro, os valores inseridos não podem ser menor que 0`
  } else if (typeof (custoProduto) !== "number" || typeof (valorvenda) !== "number") {
    return `Erro, os valores inseridos precisam ser do tipo number`
  }
  return `O lucro será de R$${resultado}`

}
console.log(lucro(10, 40))

// ------------------------------------------------------

// //11.Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

const salarioLiq = (salarioBruto) => {
const descontoInss = (salario) => {
  let desconto;
  if (salario <= 1556.94) {
    desconto = salario * 0.08
  } else if (salario <= 2.594,92) {
    desconto = salario * 0.09
  } else if (salario <=  5.189,82) {
     desconto = salario * 0.11
  } else if (salario <=  5.189,82) {
      desconto = salario * 0.11
  } else if (salario > 5.189,82) {
    desconto = 570,88
  }
  return desconto
}
let salarioBase = salarioBruto - (descontoInss(salarioBruto))
const descontoIr = (salario) => {
  let desconto;
  if(salario <= 1903.98) {
        desconto = 0;
    } else if (salario <= 2826.65) {
        desconto = (salario * 0.075) - 142.80;
    } else if (salario <= 3751.05) {
        desconto = (salario * 0.15) - 354.80;
    } else if (salario <= 4664.68) {
        desconto = (salario * 0.225) - 636.13;
    } else {
        desconto = (salario * 0.275) - 869.36;
    }
    return salario - desconto
}
const salarioFinal = descontoIr(salarioBase)
  return `O salario liquido é R$${salarioFinal}`
}
console.log(salarioLiq(1300));

