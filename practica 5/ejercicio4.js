"use strict";




setTimeout(fechaActual, 3000);


const d = new Date();

function fechaActual() {
 
//Sacamos los valores del date a cada variable.
let dia = d.getDate();
let mes = d.getMonth();
let mesEscrito = ``;
let anyo = d.getFullYear();
let hora = d.getHours();
let min = d.getMinutes();

//Guardamos el mes correspondiente a su número de mes.
switch (mes) {
    case 1:
        mesEscrito = `Enero`;
        break;
    
    case 2:
        mesEscrito = `Febrero`;
        break;

    case 3:
        mesEscrito = `Marzo`;
        break;
    
    case 4:
        mesEscrito = `Abril`;
        break;
    
    case 5:
        mesEscrito = `Mayo`;
        break;

    case 6:
        mesEscrito = `Junio`;
        break;
    
    case 7:
        mesEscrito = `Julio`;
        break;
    
    case 8:
        mesEscrito = `Agosto`;
        break;

    case 9:
        mesEscrito = `Septiembre`;
        break;

    case 10:
        mesEscrito = `Octubre`;
        break;

    case 11:
        mesEscrito = `Noviembre`;
        break;

    case 12:
        mesEscrito = `Diciembre`;
        break;

    default:
        break;
}



console.log(`Hoy es ${dia} de ${mesEscrito} de ${anyo}, con hora ${hora}:${min}`);





    
}