
  const edadNumero = 44;

  if (edadNumero >= 0 && edadNumero <= 12) {
    console.log("Eres un niño.");
  } else if (edadNumero >= 13 && edadNumero <= 18) {
    console.log("Eres un adolescente.");
  } else if (edadNumero >= 19 && edadNumero <= 30) {
    console.log("Eres un joven.");
  } else if (edadNumero >= 31 && edadNumero <= 64) {
    console.log("Eres un adulto.");
  } else if (edadNumero >= 65 && edadNumero <= 100) {
    console.log("Eres un jubilado.");
  } else {
    console.log("Edad fuera de rango.");
  }

