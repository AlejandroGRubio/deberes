"use strict";
import * as atributos from "./biblioteca/anyadirAtributos.js";



window.onload = () => {

    var doc = window.document;
    //Creamos el p de forma dinamica.
    doc.getElementsByTagName(`body`)[0].appendChild(doc.createElement(`p`));


    doc.addEventListener(`mousemove`, () => {

        doc.getElementsByTagName(`p`)[0].innerText = atributos.mostrarCoor(event);


    });

    
 


} // Fin del código onload.