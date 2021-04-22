const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
}
const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

// getUserName(4)

// describe('Testa se passado id', () => {
//   it('Retorna nome', () => {
//     expect.assertions(1);
//     return getUserName(4).then(info => expect(info).toEqual('Mark'))
//   })
//   it('Falha: retorna msg de erro', () => {
//     expect.assertions(1);
//     return getUserName(2).catch(error => expect(error).toEqual({error: 'User with 2 not found.' }))
//   })
// })



describe('Testa se passado id', () => {
  it('Retorna nome', async () => {
    const response = await getUserName(4)
    expect.assertions(1);
    expect(response).toEqual('Mark')
  })
  it('Falha: retorna msg de erro', async () => {
    try {
      await getUserName(2)
    }
    catch (error) {
      expect(error).toEqual({error: 'User with 2 not found.' })
    }
  }
  )
})
