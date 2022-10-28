"use strict";
import * as atributos from "./biblioteca/anyadirAtributos.js";

window.onload = () => {

    var doc = window.document;

    //Guarda el body.
    var fondo = doc.getElementsByTagName(`body`)[0];
    
    



    doc.addEventListener(`click`, () => {
        fondo.setAttribute(`style`, `background-color:${atributos.generarColor()}`);


    });



 


} // Fin del código onload.