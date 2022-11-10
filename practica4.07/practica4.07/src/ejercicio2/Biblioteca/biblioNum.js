"use strict";



export function generarNumero(min, max) {
    
   var num = Math.floor(Math.random() * max - 1) +min;

   return num;

}

export function comprobarArraysIguales(arr1 , arr2) {
    

    var ganador = true;

    if (arr1.length != arr2.length) {
        return false;
    }
    else{

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                ganador = false;
            }
            
        }

    }

    return ganador;


}