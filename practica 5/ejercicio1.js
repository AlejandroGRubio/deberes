"use strict";

let texto = `Hola buenas, como estas capitan`;

/*Esta funcion le pasas un texto y te lo pasa a cani. */
function canieador(frase) {
    
    let numHaches = Math.floor(Math.random()*4) + 2; // Genera las haches aleatorias para el final (entre 2 y 5).

    let fraseCani = ``;

    for (let i = 0; i < frase.length; i++) { //Bucle para cambiar las letras y añadirlas a la variable.

        if(i%3 == 0){

            if (frase[i] == `c` || frase[i] == `C`) {
                fraseCani = `${fraseCani}K`;//Si la posicion es impar y es una c la cambia a una K.
            }
            else{
                fraseCani = `${fraseCani}${frase.charAt(i).toUpperCase()}`; //Si la posicion es impar la letra la vuelve mayúscula.
            }

            
        }
        else{

            if (frase[i] == `c` || frase[i] == `C`) {
                fraseCani = `${fraseCani}k`;//Si la posicion es par y es una c la cambia a una k.
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


console.log(canieador(texto));