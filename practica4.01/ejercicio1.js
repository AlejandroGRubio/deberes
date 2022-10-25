"use strict";
import * as atributos from "./biblioteca/anyadirAtributos.js";


window.onload = () => {

    var doc = window.document;


    var idComenzar = doc.getElementById(`comenzar`);
    var idParar = doc.getElementById(`parar`);

    var idInterval = idComenzar.addEventListener(`click`, atributos.comenzar(`<h1>¡Hola Feo!</h1>`))




} // Fin del código onload.