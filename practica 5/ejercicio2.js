"use strict";

let minutos = 0;
let segundos = 0;

function temporizador(tiempoA, tiempoB = 0) {
    
    let seg = 0;
    let min = 0;


    if (tiempoA > 0 && tiempoB > 0) { //Si tiempoA y tiempoB es mayor que 0 se le asigan a min y a seg respectivamente.
        seg = tiempoB;
        min = tiempoA;
    }
    else if (tiempoA > 0 && tiempoB == 0) { //Si solo se le introduce a tiempoA lo guardamos en segundos (si solo se le añade a tiempoA se le agrega solo a segundos).
        min = 0;
        seg = tiempoA;
    }
    else if (tiempoA == 0 && tiempoB == 0) {//Si los dos estan a 0, son 0 segundos y acaba.
        return 0;
    }

    //Window buscar esperar intervalo



}