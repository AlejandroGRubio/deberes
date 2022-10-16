"use strict";

var doc = window.document;


// Por el problema de no poder importar estan desde aquí.


//Esta es la funcion del programa anterior de hacer una frase cani.
function canieador(frase) {
    
    let numHaches = Math.floor(Math.random()*4) + 2; //Genera las haches aleatorias para el final (entre 2 y 5).

    let fraseCani = ``;

    for (let i = 0; i < frase.length; i++) { //Bucle para cambiar las letras y añadirlas a la variable.

        if(i%3 == 0){

            if (frase[i] == `c` || frase[i] == `C`) {
                fraseCani = `${fraseCani}K`;//Si la posición es impar y es una c la cambia a una K.
            }
            else{
                fraseCani = `${fraseCani}${frase.charAt(i).toUpperCase()}`; //Si la posición es impar la letra la vuelve mayúscula.
            }

            
        }
        else{

            if (frase[i] == `c` || frase[i] == `C`) {
                fraseCani = `${fraseCani}k`;//Si la posición es par y es una c la cambia a una k.
            }
            else{
                fraseCani = `${fraseCani}${frase.charAt(i).toLowerCase()}`;//Si la posicion es par la letra la vuelve en minúscula.
            }

        }
        
    }

    while (numHaches != 0) { //Añade H al final de la frase, tantas veces como se hayan generado.
        fraseCani = `${fraseCani}H`;
        numHaches = numHaches -1;
    }

    return fraseCani;

}








//La funcion para añadir un texto, que ha sido modificada para que no use etiqueta, solo texto.
function anyadirById(id, texto){

    var cont = doc.getElementById(id);


    return cont.insertAdjacentText(`beforeend`,texto);



}


//Usa el boton para pasar el texto desde la linea donde esta el texto hasta el li de abajo, eso si, lo limpia cada vez para que no se agrupen el texto en el li.
const pasarALinea = () => {

   var cont = doc.getElementById(`texto`).value;
    var limpText = doc.getElementById(`fila1`);
    limpText.innerHTML= ``;
    cont.replaceChildren(anyadirById(`fila1`, cont));

}

//Hace que la frase del li, pase a la funcion de caniedador y la sustituya.
const toCani = () => {

    var cont = doc.getElementById(`fila1`);

    cont.replaceChildren(canieador(cont.textContent));


}