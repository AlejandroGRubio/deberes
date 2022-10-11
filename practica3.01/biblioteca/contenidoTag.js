"use strict";

var doc =  window.document;


export function contenidoTag(tag, linea) {
    
    var cont = doc.getElementsByTagName(tag);

    
    return cont[linea].nodeType;

}
