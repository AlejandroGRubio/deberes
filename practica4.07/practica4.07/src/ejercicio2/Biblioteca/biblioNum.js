"use strict";


//Genera un número entre los mínimos y máximos que le pases.
export function generarNumero(min, max) {
    
   var num = Math.floor(Math.random() * max) +min;

   return num;

}

//Comprueba si el array es igual al otro array pasados por parametro.
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