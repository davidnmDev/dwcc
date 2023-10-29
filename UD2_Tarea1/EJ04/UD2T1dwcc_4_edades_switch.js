
  const edadNumero = 44;
// NO CREO QUE ESTE BINE PLANTEADO ESTE EJERICIO CON UN SWITCH, POR EL TEMA DE LOS RANGOS
  switch (true) {
    case edadNumero >= 0 && edadNumero <= 12:
      console.log("Eres un niño.");
      break;
    case edadNumero >= 13 && edadNumero <= 18:
      console.log("Eres un adolescente.");
      break;
    case edadNumero >= 19 && edadNumero <= 30:
      console.log("Eres un joven.");
      break;
    case edadNumero >= 31 && edadNumero <= 64:
      console.log("Eres un adulto.");
      break;
    case edadNumero >= 65 && edadNumero <= 100:
      console.log("Eres un jubilado.");
      break;
    default:
      console.log("Edad fuera de rango.");
      break;
  }