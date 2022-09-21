"use strict";

function repetirNumero(num1, num2){
    var number = `${num2}`; // mal arreglar, guardar como String
    var arrayNum = {};
    for(i = 0; i == num1; i++){
        arrayNum(i)=number;
        number= number*2;
    }
}

console.log(`La repeticion de los numeros da como resultado ${repetirNumero(4,6)}`);