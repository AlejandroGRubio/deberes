"use strict";

var doc = window.document;

var imagenes = ["./img/feo.jpg", "./img/fea.jpg", "./img/feos.jpg", "./img/feo.jpg"];

var contar = 0;

setInterval(cambiarImagenes(imagenes, `img`, contar), 2000);


function editarContar(limite) {
    
    contar++;

    if (contar == limite) {
        contar = 0;
    }


    return 

}



function cambiarImagenes(array, tag, num) {
    

    var cont = doc.getElementsByTagName(tag);

    var largo = array.lenght;

    if(num == largo){
        contar = 0;
    }


    cont[0].src = array[num];

    editarContar(largo);

}

