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
  console.log(Object.keys(objeto).length)
}
tamObj(lesson2)