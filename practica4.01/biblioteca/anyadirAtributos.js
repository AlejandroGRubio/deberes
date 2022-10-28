"use strict";


var doc = window.document;

var idInterval;


//Inicia el interval.
export function comenzar() {
    

idInterval = setInterval(imprimir, 2000);


}

//Imprime el elemento con el texto.
export function imprimir(){


    var elem = doc.createElement("h1");
    elem.innerHTML = "¡Hola Feo!";

    doc.getElementsByTagName("body")[0].appendChild(elem);  


}

//Detiene el Interval.
export function detener() {
    
    clearInterval(idInterval);


}


//Devuelve el texto del color.
export function generarColor(){


    var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];

    var color = `#`;

    for (let i = 0; i < 6; i++) {
        
        color = `${color}${letras[Math.floor(Math.random() * 16)]}`;



    }

    return color;

}

//Devuelve las coordenas aprovenchando el event que se le pasa.
export function mostrarCoor(coor) {
    
    return `x: ${coor.screenX}, y: ${coor.screenY}`



}




