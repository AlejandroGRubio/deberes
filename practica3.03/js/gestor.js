"use strict";


var doc = window.document;


let contPendientes;
let contAcabadas;



function anyadirOnClick() {
    
    var cont = doc.getElementsByTagName(`input`);


    for (let i = 0; i < cont.length; i++) {
        
        
    }



}

function guardarYBorrarPorTagYClase(tag, clase, guardar) {

    
    var zonaPendiente = doc.getElementsByClassName(clase);

    guardar = `<${tag} class=${clase}>${zonaPendiente[0].innerHTML}</${tag}>`;

    console.log(zonaPendiente.length);
     
    

    while (zonaPendiente.length > 0) {
        zonaPendiente[0].remove();
    }


    //guarda en variables el contenido (0) de pendientes y acabadas. 
}





function pasarPendiente(texto) {
    

    var cont = doc.getElementById(`pendientes`);

    

    cont.insertAdjacentHTML(`beforeend`,`<div class="tarea">${tags.replace(`<p>Texto de la tarea</p>`, `<p>${texto}</p>`)} </div>`);




}

const anyadir = () => {

    var cont = doc.getElementsByClassName(`textarea`);

    console.log(cont[0].value);

    if (cont[0].value == undefined) {
        cont[0].value = `Escribe algo venga.`;
        return console.log(`Miras aquí pero no escribes nada. ;-;`);
    }


    pasarPendiente(`${cont[0].value}`);


};


guardarYBorrarPorTagYClase(`div`, `tarea`, contPendientes);
guardarYBorrarPorTagYClase(`div`, `acabada`, contAcabadas);
