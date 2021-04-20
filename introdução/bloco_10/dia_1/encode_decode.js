function encode(string) {
    let aux = '';
    for (let index = 0; index < string.length; index += 1) {
      switch (string[index]) {
      case 'a':
        aux += 1;
        break;
      case 'e':
        aux += 2;
        break;
      case 'i':
        aux += 3;
        break;
      case 'o':
        aux += 4;
        break;
      case 'u':
        aux += 5;
        break;
      default:
        aux += string[index];
      }
    }
    return aux;
  }
//   console.log(encode('Maria Baeta'));

  function decode(string) {
    let letter = '';
    for (let index = 0; index < string.length; index += 1) {
      switch (string[index]) {
      case '1':
        letter += 'a';
        break;
      case '2':
        letter += 'e';
        break;
      case '3':
        letter += 'i';
        break;
      case '4':
        letter += 'o';
        break;
      case '5':
        letter += 'u';
        break;
      default:
        letter += string[index];
      }
    }
    return letter;
  }
//   console.log(decode('M1r31 B12t1'));
const functions = { encode, decode };
module.exports = functions;