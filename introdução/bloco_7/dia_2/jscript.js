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
 // Exercício 1 

// const customerInfo = (order) => {
//   //Escreva aqui seu código
//   // Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
//   const deliveryPerson = Object.values(order.order.delivery)
//   let personDelivery = ' ';
//   for (personDelivery in deliveryPerson){
//     personDelivery = deliveryPerson[0]
//   };

//   const person = Object.values(order)
//   let personEntrega = '';
//   let phone = ' '; 
//     for (personEntrega in person) {
//     if (person[0]){
//       personEntrega = person[0]
//     }
//     if (person[1]) {
//       phone = person[1]
//     }
//   };
  
//   const addressComplet = Object.values(order.address)
//   let addressStreet = ' ';
//   let addressNum = ' ';
//   let addressApt = ' ';
//   for (addressStreet in addressComplet) {
//     if (addressComplet[0]) {
//       addressStreet = addressComplet[0]
//     }
//     if (addressComplet[1]) {
//       addressNum = addressComplet[1]
//     }
//     if (addressComplet[2]) {
//       addressApt = addressComplet[2]
//     }

//   }
//   console.log((`Olá ${personDelivery}, entrega para: ${personEntrega}, Telefone ${phone}, R ${addressStreet}, Nº ${addressNum}, Ap: ${addressApt} `))
  
// }

// customerInfo(order);

//

// Exercício 2 

const orderModifier = (order) => {
  //Escreva aqui seu código
  // Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
  // Modifique o nome da pessoa compradora.

   let modifierName = ' ';
   modifierName = (order['name'] = 'Luiz Silva')
  
  //Adiciona sabores de pizzas
  const caminhoPizza = (order.order.pizza);
  let pedido1 = '';
  let pedido2 = ' ';

  caminhoPizza['muzzarela'] = {};
  caminhoPizza['calabresa'] = {};
  
  caminhoPizza.muzzarela = {amount: '1', price: 20}
  caminhoPizza.calabresa = {amount: '1', price: 20}

    const sabor = Object.keys(caminhoPizza)

    for (let index = 0; index < sabor.length; index += 1) {
      if (sabor[index] === 'muzzarela') {
        pedido1 = 'muzzarela'
      } else if (sabor[index] === 'calabresa') {
        pedido2 = 'calabresa'
      }
    }
  // Recupera meu Drink
  const arraydrink = Object.values(order.order.drinks.coke);
  let drink = ' ';
  for (drink in arraydrink) {
    if (arraydrink[0]) {
      drink = arraydrink[0]
    }
  }
  // let drink = ' ';
  // for (let index = 0; index < arraydrink; index += 1) {
  //   if (arraydrink[index] === 'type') {
  //     drink = 
  //   }
  // }
  // Modifique o valor total da compra para R$ 50,00.
  order.payment.total= '50';
  const valueEnd = order.payment.total
   //console.log(Object.values(order))
  console.log(`Olá ${modifierName}, o total do seu pedido de ${pedido1}, ${pedido2} e ${drink}  é R$ ${valueEnd},00 `)
}
  
orderModifier(order);

