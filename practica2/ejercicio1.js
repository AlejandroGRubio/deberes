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
            sumado =+ arguments[i];
        }



        
        
    }



}





