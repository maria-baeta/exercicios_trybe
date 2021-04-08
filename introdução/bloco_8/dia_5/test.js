//spread operator

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'abacaxi', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'leite em pó', 'granola'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const newArr = [...fruit, ...additional]
  return newArr
};
console.log(fruitSalad(specialFruit, additionalItens));
//---------------------------------------------------------------------
// default destructuring
//Que tal praticarmos default destructuring com um exercício de fixação? Do jeito que está, quando passamos person para a função nationality o retorno é João is undefined . Ajuste a função nationality para que a chamada nationality(person) retorne João is Brazilian .

const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};

const { nationality = 'Brazilian' } = person;

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));


//-----------------------------------------------------------------------------

//Object property shorthand
const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,});
  
  console.log(getPosition(-19.8157, -43.9542));

  //---------------------------------------------------------------------------

// default parameters
  const multiply = (number, value = 1) => {
    // Escreva aqui a sua função
    return number * value
  };
  
  console.log(multiply(8,2));