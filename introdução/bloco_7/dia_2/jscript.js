const order = {
  name:'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartament: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      peperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price:5,
    }
  },
  payment: {
    total:60,
  },
}

const customerInfo = (order) => {
  //Escreva aqui seu código
  // Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  const deliveryPerson = Object.values(order.order.delivery)
  let personDelivery = ' ';
  for (personDelivery in deliveryPerson){
    personDelivery = deliveryPerson[0]
  };

  const person = Object.values(order)
  let personEntrega = '';
  let phone = ' '; 
    for (personEntrega in person) {
    if (person[0]){
      personEntrega = person[0]
    }
    if (person[1]) {
      phone = person[1]
    }
  };
  
  const addressComplet = Object.values(order.address)
  let addressStreet = ' ';
  let addressNum = ' ';
  let addressApt = ' ';
  for (addressStreet in addressComplet) {
    if (addressComplet[0]) {
      addressStreet = addressComplet[0]
    }
    if (addressComplet[1]) {
      addressNum = addressComplet[1]
    }
    if (addressComplet[2]) {
      addressApt = addressComplet[2]
    }

  }
  // console.log(addressApt)

  console.log((`Olá ${personDelivery}, entrega para: ${personEntrega}, Telefone ${phone}, R ${addressStreet}, Nº ${addressNum}, Ap: ${addressApt} `))
  
}

customerInfo(order);

// const orderModifier = (order) => {
//   //Escreva aqui seu código
// }

// orderModifier(order);

