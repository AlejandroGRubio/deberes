"use strict";


function generarArray() {
    
    let array = [];

    for (let i = 0; i < 100; i++) {
        array[i] = Math.floor(Math.random()*101);
        
    }

    return array;

}

function sumarArrays(array1, array2) {
    
    let arrayFinal = [];


    for (let i = 0; i < array1.length; i++) {
        
        arrayFinal[i] = array1[i] + array2[(array2.length -1) - i];
        
    }

    return arrayFinal;

}

function imprimirArrays(array1, array2, arrayF) {
    
    let impArray1 = ``;
    let impArray2 = ``;
    let impArrayFinal = ``;

    

    for (let i = 0; i < array1.length; i++) {
        impArray1 = `${impArray1} ${array1[i]}`;
        
    }

    for (let k = 0; k < array2.length; k++) {
        impArray2 = `${impArray2} ${array2[k]}`;
        
    }

    for (let l = 0; l < arrayF.length; l++) {
        impArrayFinal = `${impArrayFinal} ${arrayF[l]}`;
        
    }

    console.log(`Los números del primer array son ${impArray1}`);
    console.log(`Los números del segundo array son ${impArray2}`);
    console.log(`Los números de la suma de los dos array son ${impArrayFinal}`);

}


function calcular(generar, sumar, imprimir) {
    
    let array1 = [];
    let array2 = [];
    let array3 = [];

    array1 = generar();
    array2 = generar();

    array3 = sumar(array1, array2);

    imprimir(array1, array2, array3);

}

calcular(generarArray, sumarArrays, imprimirArrays);