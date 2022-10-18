"use strict";

var doc = window.document;

let imagenes = ["./img/feo.jpg", "./img/fea.jpg", "./img/feos.jpg", "./img/feas.jpg"];
//Variable para contar las imágenes.
let contar = 0;
//Variable para controlar la opacidad.
let opacidad = 1;

//Intervalos para que se ejecute las funciones.
setInterval(cambiarImagenes, 2000, `img`);
setInterval(efectos, 500, `img`);

//Esta función hace que roten las imágenes de ese tag.
function cambiarImagenes(tag) {
    

    var cont = doc.getElementsByTagName(tag);

    var largo = imagenes.length;

    if(contar > largo - 1){
        contar = 0;
    }

    
    cont[0].src = imagenes[contar];

    contar++;

}
//Esta función ejecuta el efecto de opacidad.
function efectos(tag) {
    
    var cont = doc.getElementsByTagName(tag);

    if (opacidad < 0) {
        opacidad = 1;
    }


    console.log(opacidad);
    cont[0].style = `opacity : ${opacidad}`;

    opacidad = opacidad - 0.25;
    
}