
let arrayPaises =  new Array("Alemania", "Bélgica", "Croacia", "Dinamarca", "España", "Francia", "Irlanda", "Austria");

console.log("Numero de paises: " + arrayPaises.length);

console.log("Listado de paises: " + arrayPaises.toString());

let arrayCopiaIvertida = Array.from(arrayPaises).reverse(); //se que se puede hacer con un FOR hacia atreas (i--) pero me parecio mas elegante asi.
console.log("Listado invertido de paises: " + arrayCopiaIvertida.toString());

arrayPaises.unshift("Letonia");
arrayPaises.push("Grecia");
console.log("Listado de paises con añadidos: " + arrayPaises.toString());

console.log("Se ha eliminado el primer pais: " + arrayPaises.shift());

console.log("Se ha eliminado el ultimo pais: " + arrayPaises.pop());


function mostrarElementoEnPosicion(posicion) {
    let arrayPaises =  new Array("Alemania", "Bélgica", "Croacia", "Dinamarca", "España", "Francia", "Irlanda", "Austria");
    if (posicion >= 0 && posicion < arrayPaises.length) {
        console.log("Elemento en la posición", posicion, ":", arrayPaises[posicion]);
    } else {
        console.log("La posición indicada no es válida.");
    }
}

function mostrarPosicionElemento(elemento) {
    let arrayPaises =  new Array("Alemania", "Bélgica", "Croacia", "Dinamarca", "España", "Francia", "Irlanda", "Austria");
    let posicion = paises.indexOf(elemento);
    if (posicion !== -1) {
       return new String("Posición de", elemento, ":", posicion);
    } else {
        return new String(elemento, "no se encuentra en el array.");
    }
}

function mostrarElementosEntrePosiciones(posicionInicio, posicionFin) {
    let arrayPaises =  new Array("Alemania", "Bélgica", "Croacia", "Dinamarca", "España", "Francia", "Irlanda", "Austria");
    if (
        posicionInicio >= 0 && posicionInicio < arrayPaises.length &&
        posicionFin >= 0 && posicionFin < arrayPaises.length &&
        posicionInicio <= posicionFin
    ) {
        let elementosEntrePosiciones = arrayPaises.slice(posicionInicio, posicionFin + 1);
        return new String("Elementos entre las posiciones", posicionInicio, "y", posicionFin, ":", elementosEntrePosiciones);
    } else {
        return new String("Las posiciones indicadas no son válidas.");
    }
}

