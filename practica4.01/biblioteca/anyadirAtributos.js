"use strict";


var doc = window.document;

var idInterval;

export function comenzar() {
    

idInterval = setInterval(imprimir, 2000);


}


export function imprimir(){


    var elem = doc.createElement("h1");
    elem.innerHTML = "¡Hola Feo!";

    doc.getElementsByTagName("body")[0].appendChild(elem);  


}


export function detener() {
    
    clearInterval(idInterval);


}




