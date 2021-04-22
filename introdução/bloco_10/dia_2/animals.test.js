const Animals = [{
  name: 'Dorminhoco',
  age: 1,
  type: 'Dog'
},
{
  name: 'Soneca',
  age: 2,
  type: 'Dog'
},
{
  name: 'Preguiça',
  age: 5,
  type: 'Cat'
},
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.find((Animal) => Animal.name === name);
      if (result) {
        return resolve(result);
      };
      const error = 'Nenhum animal com esse nome!';
      return reject(error);
    }, 100);
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name).then(data => data)
};

// ---------------------


const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.find((Animal) => Animal.age === age);
      if (result) {
        return resolve(result);
      };
      const error = 'Idade não encontrada';
      return reject(error);
    }, 100);
  })
);

const getAnimalAge = (age) => {
  return findAnimalByAge(age).then(data => data)
};

// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

// ---------------------


describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalAge(1).then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalAge(3).catch(error =>
        expect(error).toEqual('Idade não encontrada')
      );
    });
  });
});