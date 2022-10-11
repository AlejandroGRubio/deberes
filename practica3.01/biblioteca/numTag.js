"use strict";


var doc = window.document;


export function numTag(tag){

    var cont = doc.getElementsByTagName(tag);

    return cont.length;

}


