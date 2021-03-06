const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã'
}

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
}

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite'
}

// 3. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const createTurno = () => {
  let keyNewTurno = 'turno';
  const horário = 'manhã';
  lesson2[keyNewTurno] = horário;
}
createTurno()
console.log(lesson2)


// 4. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (objeto) => {
  console.log(Object.keys(objeto))
}
listKeys(lesson3)

// 5. Crie uma função para mostrar o tamanho de um objeto.

const tamObj = (objeto) => {
  console.log(Object.keys(objeto).length);
}
tamObj(lesson2)

// 6 . Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const valuesObj = (objeto) => {
  console.log(Object.values(objeto));
}
valuesObj(lesson1)

// 7. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
let allLessons = {};
Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);

// 8. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const alunos = () => {
const alunosLesson1 = allLessons.lesson1.numeroEstudantes;
const alunosLesson2 = allLessons.lesson2.numeroEstudantes;
const alunosLesson3 = allLessons.lesson3.numeroEstudantes;
const alunosTotal = (alunosLesson1 + alunosLesson2 + alunosLesson3)
console.log(`O numero total de alunos é  de ${alunosTotal}.`)
}
alunos()

// 9. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 

const valueKey = (objeto , number) =>  Object.values(objeto)[number];
console.log(valueKey(lesson1, 0))

// 10 . Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 
const parKeyValue = (objeto, key, value) => { 
  const keyValue = Object.entries(objeto);
  let resultado = false;
  for (let index in keyValue) {
    if (keyValue[index][0] === key && keyValue[index][1] === value) {
      resultado = true;
    }
  }
  return resultado;
}
console.log(parKeyValue(lesson3, 'turno', 'tarde'))

//BÔNUS 
// 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const alunosMat = () => {
  const alunosLesson1 = allLessons.lesson1.numeroEstudantes;
  const alunosLesson3 = allLessons.lesson3.numeroEstudantes;
  const alunosTotal = (alunosLesson1 + alunosLesson3)
  console.log(`O numero total de alunos que tem aulas de Matemática é ${alunosTotal}.`)
  }
  alunosMat()

  // 2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

  const relatorio = (objeto, professor) => { 
    const materiaAplicada = [];
    let tutor = [];
    let totalEstudantes = 0;
    const objetoRelatorio = Object.values(objeto);
      for ( let index in objetoRelatorio) {
      if (objetoRelatorio[index].professor === professor) {
        tutor = (objetoRelatorio[index].professor);
        materiaAplicada.push(objetoRelatorio[index].materia);
        totalEstudantes += objetoRelatorio[index].numeroEstudantes;
      }
    }
  return {professor: tutor, aulas: materiaAplicada, estudantes: totalEstudantes}
  }

  const criaRelatorio = (allLessons, professor) => {
    const resultado = {};
    relatorio.professor = professor;
    Object.assign(resultado, relatorio(allLessons, professor) )
    return resultado
  }

  console.log(criaRelatorio(allLessons, 'Maria Clara'))

