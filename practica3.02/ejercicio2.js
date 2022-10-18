"use strict";

var doc = window.document;
//Busca el númerp primo y devuelve true o false
function esPrimo(num) {
    
    if (num == 0 || num == 1 || num == 4) {
        return false;
    }
    for (let i = 2; i < num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
        
    }
    return true;

}
//Crea una tabla según las medidas.
function generarTabla(largo, ancho) {
    
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



//Genera la tabla.
generarTabla(100,100);

//Pinta los primos al apretar el botón.
const pintarPrimos = () => {

    
    var cont = doc.getElementsByTagName('td');
    var dato = ``;
    var numero = 0;



    for (let i = 0; i < cont.length; i++) {
        
        dato = cont[i].textContent;
        numero = parseInt(dato);
        if (esPrimo(numero) == true) {
            cont[i].id = `primo`;
        }

        
    }


}




