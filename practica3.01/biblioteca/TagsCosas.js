"use strict";


var doc = window.document;


export function numTag(tag){

    var cont = doc.getElementsByTagName(tag);

    return cont.length;

}

export function contenidoTag(tag, linea) {
    
    var cont = doc.getElementsByTagName(tag);

    
    return cont[linea - 1].textContent;

}
