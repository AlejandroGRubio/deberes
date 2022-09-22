"use strict";

let arrayFact = [124, 48, 268];

function calculoPropinas(facturas) {
    
    let arrayPropinas = [];
    let arrayCantFinal = [];
    let imprimirCant = ``;


    for (let i = 0; i < facturas.length; i++) {

        if (facturas[i] < 0) {
            return `El valor ${facturas[i]} no es válido`;
        }

        if (facturas[i] < 50) {
            arrayPropinas[i] = facturas[i] * 0.20;
        }
        else if (facturas[i] >= 50 && facturas[i] <= 200) {
            arrayPropinas[i] = facturas[i] * 0.15;
        }
        else{
            arrayPropinas[i] = facturas[i] * 0.10;
        }

    }

    for (let k = 0; k < arrayPropinas.length; k++) {
        
        arrayCantFinal[k] = facturas[k] + arrayPropinas[k];
        
    }

    for (let j = 0; j < arrayCantFinal.length; j++) {
        imprimirCant = `${imprimirCant} ${arrayCantFinal[j]}$`;
        
    }

    return `Las facturas con propinas dan como resultado ${imprimirCant}`;

}

console.log(calculoPropinas(arrayFact));