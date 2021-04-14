// const promise = new Promise((resolve, reject) => {
//   const numbers = [];
//   const highNumbers = []
//   for (let index = 0; index < 10; index += 1) {
//     numbers.push(Math.floor(Math.random() * 50));
//   }
//   numbers.map((number) => {
//     highNumbers.push(number * number)
//   })
//   const some = highNumbers.reduce((acumulador,valorAtual) => acumulador + valorAtual)
//   console.log(numbers);
//   console.log(highNumbers)
//   console.log(some)
//   if (some < 8000) {
//     resolve(some)
//   }
//   reject()
// })
// .then(() => console.log(`Promise resolvida`))
// .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))

//-----------------------------------------------------------------------------
const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const numbers = [];
    const highNumbers = []
    for (let index = 0; index < 10; index += 1) {
      numbers.push(Math.floor(Math.random() * 50));
    }
    numbers.map((number) => {
      highNumbers.push(number * number)
    })
    const some = highNumbers.reduce((acumulador, valorAtual) => acumulador + valorAtual)
    // console.log(numbers);
    // console.log(highNumbers)
    // console.log(some)
    if (some < 8000) {
      resolve(some)
    }
    reject()
  })
  promise
    .then((some) => [2, 3, 5, 10].map((number) => some / number))
    .then(array => array.reduce((acumulaodor, valorAtual) => acumulaodor + valorAtual, 0))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
}

fetchPromise()

