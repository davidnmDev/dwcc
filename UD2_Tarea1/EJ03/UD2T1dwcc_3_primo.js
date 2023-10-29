
function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  } else if (numero <= 3) {
    return true;
  } else if (numero % 2 === 0 || numero % 3 === 0) {
    return false;
  }

  let i = 5;
  do {
    if (numero % i === 0 || numero % (i + 2) === 0) {
      return false;
    }
    i += 6;
  } while (i * i <= numero);

  return true;
}

const numero = 81; 
const esPrimoResultado = esPrimo(numero);

if (esPrimoResultado) {
  console.log(`${numero} es un número primo.`);
} else {
  console.log(`${numero} no es un número primo.`);
}