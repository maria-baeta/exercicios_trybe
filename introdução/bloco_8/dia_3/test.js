//Dia 8.3

// const numbers = [1,2,3,4,-5];
// const negativeNumbers = numbers.map((number) => (number > 0) ? number *(-1): number);
// console.log(negativeNumbers);

// const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];

// const listaUnitaria  = (arrayProducts, arrayPrices) => arrayProducts.map((products, index) => ({[products] : prices[index]}));

// console.log(listaUnitaria(products, prices))

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

//Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.(FOR)
// const alunosManha = [];
// for (let index = 0; index < estudantes.length; index += 1) {
//     if (estudantes[index].turno === 'Manhã') {
//         alunosManha.push(`${estudantes[index].nome} ${estudantes[index].sobrenome}`)
//     }
// }
// console.log(alunosManha);

// Refatoração com  MAP e FILTER

const alunosManha = estudantes.filter((estudante) => (estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);
console.log(alunosManha);

// Explicação course: O que foi feito? Primeiro usou-se o filter para filtrar todos os estudantes que estudam no período da manhã. Como o retorno do filter é um array de elementos, você pode usar o map logo em seguida para retornar os nomes completos de estudantes presentes nesse novo array. O map nesse caso é usado apenas para retornar as informações pedidas, o nome completo, enquanto o filter é usado para filtrar o array.

// Buscar um estudante pelo nome e retornar a situação dele em cada matéria:(FOR)

// const findEstudante = (nome, estudante) => {
//     for (let index = 0; index < estudante.length; index +=1) {
//         if (estudante[index].nome === nome) {
//             return estudante[index]
//         } 
//  }
// };
// const status = (nome, estudante) => {
//     const aluno = findEstudante(nome,estudante);
//     const resultado = [];
//     for (let index = 0; index < aluno.materias.length; index +=1) {
//         if (aluno.materias[index].nota <= 60) {
//         resultado.push(`${aluno.materias[index].name}: Aprovado`)
//         } else {
//             resultado.push(`${aluno.materias[index].name}: Reprovado`)
//         }
//     }
//     return resultado
// }
//  console.log(status('Maria', estudantes));

 //Refatorando FIND e MAP

 const status = (nome, estudante) => {
     const alunos = estudante.find((aluno) => aluno.nome === nome);
     return alunos.materias.map((materia) => (`${materia.name} ${(materia.nota < 60) ? 'Aprovado' : 'Reprovado'}`))
 }
 console.log(status('Maria', estudantes));

 //Explicação course: O código teve uma redução drástica no número de linhas! Primeiro, fizemos um find para buscar e retornar os dados do estudante. O objeto foi retornado e salvo na variável students , depois o map foi usado para percorrer as matérias do objeto retornado e salvar o que se queria em um array da forma desejada.