"use strict";

//Guardamos la id del Intervalo para su posterior uso.
const id = setInterval(pedirDNI, 10000);

var arrayDNI = [];

//Guardamos un array con las letras del DNI para luego usar su posición para identificarlas.
var letrasDNI = [`T`, `R`, `W`, `A`, `G`, `M`, `Y`, `F`, `P`, `D`, `X`, `B`, `N`, `J`, `Z`, `S`, `Q`, `V`, `H`, `L`, `C`, `K`, `E`];

var imprimirLetrasDNI = ``;

function pedirDNI() {
    let numDNI = prompt(`Introduce tu número de DNI sin letra: (Introduzca -1 para terminar)`);
    //Si se introduce -1 entra a esta condicion, que para el Interval.
    if (numDNI == -1) {
        clearInterval(id);
        //Identifica la letra de los números de los DNI guardados.
        for (let i = 0; i < arrayDNI.length; i++) {
            let resto = arrayDNI[i] % 23;
            imprimirLetrasDNI = `${imprimirLetrasDNI} ${letrasDNI[resto]}`;
            
        }

        console.log(`Las letras de los DNI introducidos son:${imprimirLetrasDNI}.`);


    }
    else{
        //Guarda los números de DNI en el array.
        arrayDNI = [...arrayDNI, numDNI];

    }



}