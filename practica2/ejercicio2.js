"use strict";



function multiplicar(number) {

    if (number < 2) {
        return `El valor indicado no es válido, tiene que ser 2 o superior`;
    }
    let resultado = 0;
    console.log(`Tabla del ${number}`);

    for (let i = 0; i <= 10; i++) {
        resultado = number * i;
        console.log(`${number} * ${i} = ${resultado}`);
        
    }

}

function tablas(number, funcion) {

    let contar = number;

    while (contar >= 2) {
        funcion(contar);
        contar--;
    }

}

tablas(5, multiplicar);