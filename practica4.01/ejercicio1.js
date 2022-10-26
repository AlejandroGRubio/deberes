"use strict";
import * as atributos from "./biblioteca/anyadirAtributos.js";


window.onload = () => {

    var doc = window.document;


    var idComenzar = doc.getElementById(`comenzar`);
    var idParar = doc.getElementById(`parar`);


    idComenzar.addEventListener(`click`, atributos.comenzar);

 


} // Fin del código onload.