"use strict";

var doc = window.document;



//No entendia bien lo que queria que hiciera en el HTML, así que he hecho que el texto que le pasaras se mande con el orden que has indicado
function insertAfter(nuevoElemento, existenteElemento) {
    
var cont = doc.getElementById(`texto`);


cont.insertAdjacentText(`beforeend`,existenteElemento);
cont.insertAdjacentText(`beforeend`,nuevoElemento);



}

//Ejecución del script.
insertAfter(`Juan Carlos`, `Hola `);