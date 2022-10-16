"use strict";


var doc = window.document;

//Cuenta las etiquetas especificas de un HTML.
export function numTag(tag){

    var cont = doc.getElementsByTagName(tag);

    return cont.length - 1;

}
//Muestra el contenido de una linea con etiqueta concretos.
export function contenidoTag(tag, linea) {
    
    var cont = doc.getElementsByTagName(tag);

    
    return cont[linea - 1].textContent;

}

//Muestra el contenido de una linea con etiqueta y atributo concretos.
export function contenidoAttr(tag ,attr, linea) {
    
    var cont = doc.querySelectorAll([tag]);
    
    
    return cont.item(linea).getAttribute(attr);



}

//Añade el texto con etiqueta que quieras indicando la id de un HTML.
export function anyadirById(id, texto){

    var cont = doc.getElementById(id);


    return cont.insertAdjacentHTML(`beforeend`,texto);



}



