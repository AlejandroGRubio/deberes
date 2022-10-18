"use strict";



var doc = window.document;


//Como no he podido seleccionar las etiquetas de dentro del body, he tenid que hacerlo un poco más manual, pero esto censura la palabra sexo de dentro de esas etiquetas.
export function censurarPalabra(palabra) {
    
    var cont = doc.querySelectorAll(`h1`);
    var texto = ``;

    for(var item of cont){
     //Selecciona el texto y lo guarda en una variable.
     texto = item.innerHTML;
     //Luego lo elimina del html.
     item.innerHTML = ``;
     //Y lo vuelve a insertar, solo que reemplazando la palabra por <strong>Contenido Bloqueado</strong>, con el strong para poder modificarlo con css.
     item.insertAdjacentHTML(`beforeend`,texto.replace(palabra, `<strong>Contenido Bloqueado</strong>`));



    }
    var cont = doc.querySelectorAll(`h2`);

    for(var item of cont){
     
     texto = item.innerHTML;
     item.innerHTML = ``;
     item.insertAdjacentHTML(`beforeend`,texto.replace(palabra, `<strong>Contenido Bloqueado</strong>`));



    }

    var cont = doc.querySelectorAll(`p`);


    for(var item of cont){

     texto = item.innerHTML;
     item.innerHTML = ``;
     item.insertAdjacentHTML(`beforeend`,texto.replace(palabra, `<strong>Contenido Bloqueado</strong>`));



    }



}