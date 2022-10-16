"use strict";


var doc = window.document;


export function numTag(tag){

    var cont = doc.getElementsByTagName(tag);

    return cont.length - 1;

}

export function contenidoTag(tag, linea) {
    
    var cont = doc.getElementsByTagName(tag);

    
    return cont[linea - 1].textContent;

}


export function contenidoAttr(tag ,attr, linea) {
    
    var cont = doc.querySelectorAll([tag]);
    
    
    return cont.item(linea).getAttribute(attr);



}


export function anyadirById(id, texto){

    var cont = doc.getElementById(id);


    return cont.insertAdjacentHTML(`beforeend`,texto);



}



