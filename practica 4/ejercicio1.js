"use strict";

//Ejemplo de sudoku correcto
let sudokuCorrecto = [];
sudokuCorrecto[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuCorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6];
sudokuCorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3];
sudokuCorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudokuCorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudokuCorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudokuCorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudokuCorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudokuCorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1];
//Ejemplo de sudoku incorrecto
let sudokuIncorrecto = [];
sudokuIncorrecto[0] = [2, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuIncorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6];
sudokuIncorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3];
sudokuIncorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudokuIncorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudokuIncorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudokuIncorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudokuIncorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudokuIncorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1];




function comprobarSudoku(sudoku) {

let booleanError = true;
let error = 0;
let contar = 0;
let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let regiones = [];

do {
   
    for (let i = 0; i < sudoku.length; i++) {
       for (let j = 0; j < sudoku[i].length; j++) {
        
            for (let g = 0; g < arrayNum.length; g++) {
                if (sudoku[i][j] == g && arrayNum[g] == -1) {
                    return `El sudoku que ha introducido es incorrecto.`;
                }
                else if (sudoku[i][j] == g){
                    arrayNum[g] = -1;
                }
                
            }    

       }

       arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }


    if (contar == sudoku.length -1) {
        if (error == 0) {
            booleanError = false;
        }
        else{
            return `El sudoku que ha introducido es incorrecto.`;
        }
    }
    contar++;


} while (booleanError == true);


arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
contar = 0;
booleanError = true;


do {
    
    for (let i = 0; i < sudoku.length; i++) {
        for (let j = 0; j < sudoku[i].length; j++) {
            
            for (let g = 0; g < arrayNum.length; g++) {
                
                if (sudoku[j][i] == g && arrayNum[g] == -1) {
                    return `El sudoku que ha introducido es incorrecto.`;
                }
                else if (sudoku[j][i] == g){
                    arrayNum[g] = -1;
                }
    
    
                
            }
    
    
    
    
        }
    arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        
    }

    if (contar == sudoku.length -1) {
        if (error == 0) {
            booleanError = false;
        }
        else{
            return `El sudoku que ha introducido es incorrecto.`;
        }
    }
    contar++;


} while (booleanError == true);

//Guardamos los sectores/regiones en cada hueco del array para luego comprobar.
regiones[0] = [sudoku[0][0], sudoku[0][1], sudoku[0][2], sudoku[1][0], sudoku[1][1], sudoku[1][2], sudoku[2][0], sudoku[2][1], sudoku[2][2]];

regiones[1] = [sudoku[0][3], sudoku[0][4], sudoku[0][5], sudoku[1][3], sudoku[1][4], sudoku[1][5], sudoku[2][3], sudoku[2][4], sudoku[2][5]];

regiones[2] = [sudoku[0][6], sudoku[0][7], sudoku[0][8], sudoku[1][6], sudoku[1][7], sudoku[1][8], sudoku[2][6], sudoku[2][7], sudoku[2][8]];

regiones[3] = [sudoku[3][0], sudoku[3][1], sudoku[3][2], sudoku[4][0], sudoku[4][1], sudoku[4][2], sudoku[5][0], sudoku[5][1], sudoku[5][2]];

regiones[4] = [sudoku[3][3], sudoku[3][4], sudoku[3][5], sudoku[4][3], sudoku[4][4], sudoku[4][5], sudoku[5][3], sudoku[5][4], sudoku[5][5]];

regiones[5] = [sudoku[3][6], sudoku[3][7], sudoku[3][8], sudoku[4][6], sudoku[4][7], sudoku[4][8], sudoku[5][6], sudoku[5][7], sudoku[5][8]];

regiones[3] = [sudoku[6][0], sudoku[6][1], sudoku[6][2], sudoku[7][0], sudoku[7][1], sudoku[7][2], sudoku[8][0], sudoku[8][1], sudoku[8][2]];

regiones[4] = [sudoku[6][3], sudoku[6][4], sudoku[6][5], sudoku[7][3], sudoku[7][4], sudoku[7][5], sudoku[8][3], sudoku[8][4], sudoku[8][5]];

regiones[5] = [sudoku[6][6], sudoku[6][7], sudoku[6][8], sudoku[7][6], sudoku[7][7], sudoku[7][8], sudoku[8][6], sudoku[8][7], sudoku[8][8]];





//Comprobamos el nuevo array;
arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
contar = 0;
booleanError = true;

do {
    
    for (let i = 0; i < regiones.length; i++) {
        for (let j = 0; j < regiones[i].length; j++) {
         
             for (let g = 0; g < arrayNum.length; g++) {
                 if (regiones[i][j] == g && arrayNum[g] == -1) {
                     return `El sudoku que ha introducido es incorrecto.`;
                 }
                 else if (regiones[i][j] == g){
                     arrayNum[g] = -1;
                 }
                 
             }    
 
        }
 
        arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     }

    if (contar == regiones.length -1) {
        if (error == 0) {
            booleanError = false;
        }
        else{
            return `El sudoku que ha introducido es incorrecto.`;
        }
    }
    contar++;


} while (booleanError == true);


//Si llega hasta aquí el sudoku es correcto.

return `Has resuelto el sudoku correctamente.`;


}


console.log(comprobarSudoku(sudokuCorrecto));



