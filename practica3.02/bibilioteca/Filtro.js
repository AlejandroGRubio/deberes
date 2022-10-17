"use strict";



var doc = window.document;



export function censurarPalabra(palabra) {
    
    var cont = doc.querySelectorAll(`h1`);
    var texto = ``;

    for(var item of cont){

     texto = item.innerHTML;
     item.innerHTML = ``;
     item.insertAdjacentHTML(`beforeend`,texto.replace(`sexo`, `<strong>Contenido Bloqueado</strong>`))



    }
    var cont = doc.querySelectorAll(`h2`);

    for(var item of cont){

     texto = item.innerHTML;
     item.innerHTML = ``;
     item.insertAdjacentHTML(`beforeend`,texto.replace(`sexo`, `<strong>Contenido Bloqueado</strong>`))



    }

    var cont = doc.querySelectorAll(`p`);


    for(var item of cont){

     texto = item.innerHTML;
     item.innerHTML = ``;
     item.insertAdjacentHTML(`beforeend`,texto.replace(`sexo`, `<strong>Contenido Bloqueado</strong>`))



    }



}