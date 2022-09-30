"use strict";


function primPalin() {
    
let num = 0;
let arrayNum = [];
let contar = 0;
let listaNum = ``;


while (num <= 100000) {
    
    if ((num%num)==0) {

        if (num == 2 || num == 3 ) {
            arrayNum[contar] = num;
            contar++;
        }
        else if (num > 3) {
            if ((num%2)==0 || (num%3)==0) {
                
            }
            else{
                let revesNum = num.toString().split("").reverse().join("");

            if (revesNum == num.toString()) {
                arrayNum[contar] = num;
                contar++;
            }
            }
        }

    }



    num++;
    

}

for (let i = 0; i < arrayNum.length; i++) {
    listaNum = `${listaNum} ${arrayNum[i]}`
    
}

return listaNum;


}


console.log(`Los números primos y palíndromos (0 al 100000) son:${primPalin()}`);