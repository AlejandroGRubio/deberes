"use strict";

function sumar() {
    
    let sumado = 0;

    if (arguments.length < 2) {
        return `ERROR. Se necesitan dos valores para el funcionamiento`;
    }

    for (let i = 0; i < arguments.length; i++) {

        if (isNaN(arguments[i])) {
            
            return `El valor ${arguments[i]} no es un número`;

        }
        else{
            sumado = sumado + arguments[i];
        }

        
    }

    return `El resultado de su operacion es ${sumado}`;



}

console.log(sumar(44, 1));



