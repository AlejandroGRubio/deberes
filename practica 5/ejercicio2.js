"use strict";
//Se guarda la id del Intervalo para su posterior uso.
const id = setInterval(temporizador, 1000);
var minutos = 1;
var segundos = 5;

function temporizador() {
    
    //Comprueba si solo le has dado un parámetro.
   if (minutos >= 0 && segundos == undefined) {
       segundos = minutos;
       minutos = 0;
   }
   //Comprueba si son números negativos y da error.
   else if (minutos < 0 || segundos < 0) {
        return console.log(`Error. No se pueden usar números negativos.`);
   }
   //Comprueba si los segundos son mayores a 59 y da error.
   else if (segundos > 59){
        return console.log(`Los segundos no pueden ser mayor a 59.`);
   }
   //Comprueba si los valores estan a cero y para el Intervalo.
   else if (minutos == 0 && segundos == 0){
        clearInterval(id);
   }
   
   //Cambia el formato que da por consola para que se vean bien los segundos menor a 10.
    if (segundos < 10) {
        console.log(`${minutos}:0${segundos}`);
    }
    else{
        console.log(`${minutos}:${segundos}`);
    }

    segundos--;
    //Cambia el minuto cuando los segundos bajan de 0 y lo vuelve a 59 los segundos.
    if (segundos == -1) {
        segundos = 59;
        if (minutos > 0) {
            minutos--;
        }
        else{
            minutos = 0;
        }
    }

    


}


