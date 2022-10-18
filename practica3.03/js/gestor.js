"use strict";


var doc = window.document;


function anyadirOnClick() {
    
    var cont = doc.getElementsByTagName(`input`);


    for (let i = 0; i < cont.length; i++) {
        
        
    }



}

function gurdarYBorrar() {
    //guarda en variables el contenido (0) de pendientes y acabadas. 
}





function pasarPendiente(texto) {
    

    var cont = doc.getElementById(`pendientes`);

    var zonaPendiente = doc.getElementsByClassName(`tarea`);


    var tags = zonaPendiente[0].innerHTML;

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



