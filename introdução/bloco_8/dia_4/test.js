// Teste com FOR
const numbers = [50, 85, -30, 3, 15];
const compareNumberFor = (myArray) => {
    let maxNumber = 0;
    for (let index = 0; index < numbers.length; index +=1) {
       if (numbers[index] > maxNumber){
           maxNumber = numbers[index]
       }
     };
    return maxNumber
}
console.log(compareNumberFor(numbers))
// REDUCE
const numbers = [50, 85, -30, 3, 15];
const compareNumber = (acc, curr) => {
 return  ( acc > curr) ? acc : curr;
}
const compareNumberReduce = numbers.reduce(compareNumber,0);
console.log(compareNumberReduce)

//faça uma função que some todos os números do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const sum = (acc, curr) => {
    return acc + curr
};
const sumNumber = numbers.reduce(sum,0);
console.log(sumNumber);

//faça uma função que some todos os números pares do array:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const even = (number) => {
    return number % 2 === 0
};
const sum = (acc, curr) => {
    return acc + curr
};
const sumNumber = (myArray) => myArray.filter(even).reduce(sum);
console.log(sumNumber(numbers))

////faça uma função que some todos os números impares do array:
const notEven = (number) => {
    return number % 2 === 1
}
const sumNumberNotEven = (myArray) => myArray.filter(notEven).reduce(sum);
console.log(sumNumberNotEven(numbers))

// Usando somente o reduce 
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const evens = (acc, number) => (
    (number % 2 === 0) ? acc + number : acc)
;
const sumNumbers = (myArray) => myArray.reduce(evens,0);
console.log(sumNumbers(numbers));

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//--------------------------------------------------------------

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
//   const getBestClass = (acc, materia) => {
//     if (acc.nota > materia.nota) return acc;
//     return materia;
//   };
  
//   const reportBetter = (students) => students.map((student) => ({
//         name: student.nome,
//         materia: student.materias.reduce(getBestClass).name,
//       }));
  
//   console.log(reportBetter(estudantes));




const maiorNota = (acc, materia) => {
if(acc.nota > maiorNota) {
     return acc
    }
return materia
}

const createNewArray = (array) => {
    return array.map((object) => ({
        name: object.nome,
        materia: object.materias.reduce(maiorNota).name,
    }))
}



  console.log(createNewArray(estudantes));
  // resultado 
  [
    { name: 'Jorge', materia: 'Português' },
    { name: 'Mario', materia: 'Biologia' },
    { name: 'Jorge', materia: 'Português' },
    { name: 'Maria', materia: 'Química' },
    { name: 'Natalia', materia: 'Português' },
    { name: 'Wilson', materia: 'Português' },
  ]