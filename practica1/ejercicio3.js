"use strict";

function repetirNumero(num1, num2){
    let number = num2;
    let stringNumber = `${num2}`;
    let i = 1;
    while (i != num1) {
        number = number*2;
        stringNumber = `${stringNumber} ${number}`;
        i++;
    }
    return `${stringNumber}`;
}

console.log(`La repetición de los números da como resultado ${repetirNumero(4,6)}`);