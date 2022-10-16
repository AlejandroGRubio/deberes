"use strict";



//Genera un número aleatorio entre 1 y 1000.
export function GenNum() {
    
    var num = Math.floor((Math.random() * 1000) +1);

    return num;


}