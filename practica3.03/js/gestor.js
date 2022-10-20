"use strict";


var doc = window.document;


let contPendientes;
let contAcabadas;


//Añade a la etiqueta de esa clase el atributo onClick con el nombre de función y valor.
function addOnClickPorClase(clase, datosOnClick, valorFunc = ``) {
    
    var cont = doc.getElementsByClassName(clase);


    for (let i = 0; i < cont.length; i++) {
        cont[i].setAttribute(`onClick`, `${datosOnClick}(${valorFunc})`);
        
    }



}

//Cambia el contenido de una variable, indicando el texto antiguo y el nuevo a remplazar.
function cambiarContenido(varTexto, textoAnti, textoNuevo) {
    
    var devolverT;

    return varTexto.replace(textoAnti, textoNuevo);




}




//Función que guarda el contenido de una clase y lo guarda en una variable.
function guardarYBorrarPorTagYClase(tag, clase) {

    
    var zonaPendiente = doc.getElementsByClassName(clase);

    var guardar = `<${tag} class=${clase}>${zonaPendiente[0].innerHTML}</${tag}>`;
     
    

    while (zonaPendiente.length > 0) {
        zonaPendiente[0].remove();
    }

    return guardar;
    
}




//Pasa a Pendientes el texto que se le indique
function pasarPendiente(texto) {
    

    var cont = doc.getElementById(`pendientes`);

    var textoP = cambiarContenido(contPendientes, `Texto de la tarea`, texto);




    cont.insertAdjacentHTML(`beforeend`, textoP);


    addOnClickPorClase(`del`, `borrar`);
    addOnClickPorClase(`end`, `acabar`);

}

//Selecciona el texto del textarea y lo manda a la funcion pasarPendiente.
const anyadir = () => {

    var cont = doc.getElementsByTagName(`textarea`);

    if (cont[0].value == ``) {
        
        cont[0].value = `Escribe algo venga.`;
        return console.log(`Miras aquí pero no escribes nada. ;-;`);
    }


    pasarPendiente(`${cont[0].value}`);


};







const acabar = (text) => {

    var cont = text;
    console.log(cont);



}








contPendientes = guardarYBorrarPorTagYClase(`div`, `tarea`);
contAcabadas = guardarYBorrarPorTagYClase(`div`, `acabada`);
addOnClickPorClase(`add`, `anyadir`);
addOnClickPorClase(`sho`, `mostrar`);

