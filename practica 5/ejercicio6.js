"use strict";


function primPalin() {
    
let num = 0;
let arrayNum = [];
let contar = 0;
let listaNum = ``;

//Hacemos esta condición para hacer un bucle y contar los números.
while (num <= 100000) {
    //Para saber si los números son divisibles entre ellos.
    if ((num%num)==0) {

        if (num == 2 || num == 3 ) {
            arrayNum[contar] = num;
            contar++;
        }
        else if (num > 3) {
            if ((num%2)==0 || (num%3)==0) {
                
            }
            else{
                //Guardamos el número al revés para comparar luego.
                let revesNum = num.toString().split("").reverse().join("");
            //Sabemos si es palíndromo si son iguales, y los guardamos.
            if (revesNum == num.toString()) {
                arrayNum[contar] = num;
                contar++;
            }
            }
        }

    }



    num++;
    

}
//Los guardamos en una lista, para luego imprimirlos por pantalla.
for (let i = 0; i < arrayNum.length; i++) {
    listaNum = `${listaNum} ${arrayNum[i]}`
    
}

return listaNum;


}


console.log(`Los números primos y palíndromos (0 al 100000) son:${primPalin()}.`);