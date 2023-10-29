function esNumPrimo(nn: number): boolean {
  if (nn <= 1) {
    return false;
  } else if (nn <= 3) {
    return true;
  } else if (nn % 2 === 0 || nn % 3 === 0) {
    return false;
  }

  let i: number = 5;
  do {
    if (nn % i === 0 || nn % (i + 2) === 0) {
      return false;
    }
    i += 6;
  } while (i * i <= nn);

  return true;
}

const nn: number = 17;
const esPrimoRes: boolean = esNumPrimo(nn);

if (esPrimoRes) {
  console.log(`${nn} es un número primo.`);
} else {
  console.log(`${nn} no es un número primo.`);
}

