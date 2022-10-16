"use strict";

var doc = window.document;

//Genera un número aleatorio de 1 a 1000.
function GenNum() {
    
    var num = Math.floor((Math.random() * 1000) +1);

    return num;


}
//Añade el texto con etiqueta que quieras indicando la id de un HTML.
function anyadirById(id, texto){

    var cont = doc.getElementById(id);


    return cont.insertAdjacentHTML(`beforeend`,texto);



}

//Añade un número dentro de un li.
const anyadirNum = () => {
    

    anyadirById(`numeros`, `<li>${GenNum()}</li>`);




}