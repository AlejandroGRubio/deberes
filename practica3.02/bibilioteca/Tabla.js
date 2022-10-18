"use strict";


var doc = window.document;
//Crea una tabla según las medidas.
export function generarTabla(largo, ancho) {
    
    var tabla = doc.createElement('table');
    tabla.setAttribute(`id`, `tablas`);

    doc.getElementById('body').appendChild(tabla);


    var tablaId = doc.getElementById(`tablas`);
    
    var cont = 1;

    for (let i = 0; i < ancho; i++) {
        
        var creaTr = doc.createElement(`tr`);



        for (let j = 0; j < largo; j++) {
            var creaTd = doc.createElement(`td`);
            creaTd.setAttribute(`id`, `nada`);
            creaTd.innerHTML=`<num>${cont}</num>`;
            creaTr.appendChild(creaTd);

            cont++;
        }

        tablaId.appendChild(creaTr);

        
    }




}