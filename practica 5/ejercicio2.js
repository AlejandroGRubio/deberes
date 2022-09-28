"use strict";

const id = setInterval(temporizador, 1000);
var minutos = 1;
var segundos = 5;

function temporizador() {
    
   if (minutos >= 0 && segundos == undefined) {
       segundos = minutos;
       minutos = 0;
   }
   else if (minutos < 0 || segundos < 0) {
        console.log(`Error. No se pueden usar números negativos.`);
   }
   else if (segundos > 59){
        console.log(`Los segundos no pueden ser mayor a 59.`);
   }
   else if (minutos == 0 && segundos == 0){
        clearInterval(id);
   }
   

    if (segundos < 10) {
        console.log(`${minutos}:0${segundos}`);
    }
    else{
        console.log(`${minutos}:${segundos}`);
    }

    segundos--;

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


