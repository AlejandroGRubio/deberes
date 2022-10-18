"use strict";


var doc = window.document;



export function cambiarImagenes(array, tag, posi) {
    

    var cont = doc.getElementsByTagName(tag);

    if(posi == array.lenght){
        posi = 0
    }

    cont[0].src = array[posi];




}