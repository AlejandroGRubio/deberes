"use strict";
//Se guarda la letra.
let letraDni = prompt(`Introduce una letra para sacar los DNI: `);


function sacarDni(letra) {
    
let num = 48357001;
let listaDni = ``;
//Hacemos un bucle para comprobar los valores disponibles.
while (num <= 48357999) {
    //Sacamos el resto para comparar la letra.
    let valor = num % 23;
//Con el switch sacamos la letra que esta relacionada a ese valor y guardamos en la lista el número.
switch (valor) {
    case 0:
        if (letra == `T`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 1:
        if (letra == `R`){
            listaDni = `${listaDni} ${num}`;
        }
        break;   

    case 2:
        if (letra == `W`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 3:
        if (letra == `A`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 4:
        if (letra == `G`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 5:
        if (letra == `M`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 6:
        if (letra == `Y`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 7:
        if (letra == `F`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 8:
        if (letra == `P`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 9:
        if (letra == `D`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 10:
        if (letra == `X`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 11:
        if (letra == `B`){
            listaDni = `${listaDni} ${num}`;
        }
        break;
    
    case 12:
        if (letra == `N`){
            listaDni = `${listaDni} ${num}`;
        }
        break;
    
    case 13:
        if (letra == `J`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 14:
        if (letra == `Z`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 15:
        if (letra == `S`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 16:
        if (letra == `Q`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 17:
        if (letra == `V`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 18:
        if (letra == `H`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 19:
        if (letra == `L`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 20:
        if (letra == `C`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 21:
        if (letra == `K`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    case 22:
        if (letra == `E`){
            listaDni = `${listaDni} ${num}`;
        }
        break;

    default:
        break;
}


    num++;



}

console.log(`Los DNI con ${letra} son:${listaDni}`);


}


sacarDni(letraDni);