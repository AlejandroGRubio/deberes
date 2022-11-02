"use strict";


var doc = window.document;



export function generarNumRandom(min, max) {
    
    var valor = Math.floor(Math.random() * max);


    while (valor < min) {
        valor = Math.floor(Math.random() * max);
    }

    return valor;




}







export function generarCheckbox(datoName, numValueMin, numValueMax, veces = 1) {
    
    for (let i = 0; i < veces; i++) {
        

        var checkbox = doc.createElement(`input`);
        checkbox.setAttribute(`type`, `checkbox`);
        checkbox.setAttribute(`name`, datoName);
        checkbox.setAttribute(`value`, generarNumRandom(numValueMin, numValueMax));
        doc.body.appendChild(checkbox);


        
    }
    




}

