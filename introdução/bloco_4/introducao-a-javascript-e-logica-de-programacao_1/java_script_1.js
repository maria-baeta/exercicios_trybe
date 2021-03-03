//1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
let a = 10;
let b = 5;

//Adição

function soma (a, b) {
    return a + b;
}
console.log(soma(5, 20));

let adicao = a+b;
console.log(adicao);

//Subtração
let subtracao = a-b;
console.log(subtracao);

//Multiplicação
let multiplicacao = a*b;
console.log(multiplicacao);

//Divisão
let divisao = a/b;
console.log(divisao)

//Módulo
let modulo = a%b;
console.log(modulo);

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let a = 10;
let b = 5;
if(a > b) {
    console.log('a é maior que b');
} else { console.log('b e maior que a') 
}

// 3.Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 10;
let b = 5;
let c = 1;
if (a > b && a > c) {
    console.log('O maior número é ' +a+ '(a)');
} else if (b > a && b > c) {
    console.log('O maior número é ' +b+ '(b)');
} else { 
    console.log('O maior número é ' +c+ '(c)'); 
}

//4.Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let numero = 0;
if (numero > 0) {
    console.log('positive');
} else if (numero <0) {
    console.log('negative');
} else {
    console.log('zero')
}
//5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

let angulo1 = 40;
let angulo2 = 40;
let angulo3 = 100;
let somaDosAngulos = angulo1 + angulo2 + angulo3;
if (somaDosAngulos == 180){
    console.log(true)
} else {
    console.log(false)
}

//6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peçaXadrez = 'rei';

switch (peçaXadrez.toLowerCase()){
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

//7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let notaApresentada = 40;
if (notaApresentada <0 || notaApresentada > 100){
    console.log('Erro, nota declarada está errada');
} else if (notaApresentada >= 90){
    console.log('A');
} else if (notaApresentada >= 80){
    console.log('B');
} else if (notaApresentada >= 70){
    console.log('C');
} else if (notaApresentada >= 60){
    console.log('D');
} else if (notaApresentada >= 50){
    console.log('E');
} else {
    console.log('F')
}

// 8. Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

let numA = 2;
let numB = 6;
let numC = 4;

let numEPar;

if ((numA % 2 == 0 || numB % 2 == 0 || numC % 2 == 0)){
    numEPar = true;
}
console.log(numEPar);

//9. Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

let numA = 2;
let numB = 6;
let numC = 4;

let numEImpar = false;

if((numA % 2 !== 0 || numB % 2 !== 0 || numC % 2 !== 0)){
    numEImpar = true;
}
console.log(numEImpar);

//10. Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

let custoProduto = 10;
let valorVenda = 50;

if (custoProduto >= 0 && valorVenda >= 0) {
    let custoTotal = custoProduto * 1.2;
    let lucro = (valorVenda - custoTotal) *1000;
    console.log(lucro)
} else {
    console.log('Erro, os valores inseridos não podem ser menor que 0')
}
//11.Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 1300;
let descontoInss;
let descontoIr;

if (salarioBruto <= 1556.94) {
    descontoInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    descontoInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    descontoInss = salarioBruto * 0.11;
} else {
    descontoInss = 570.88;
}

let salarioBase = salarioBruto - descontoInss;

if(salarioBase <= 1903.98) {
    descontoIr = 0;
} else if (salarioBase <= 2826.65) {
    descontoIr = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
    descontoIr = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    descontoIr = (salarioBase * 0.225) - 636.13;
} else {
    descontoIr = (salarioBase * 0.275) - 869.36;
}
console.log ("Salário:" + (salarioBase-descontoIr));

