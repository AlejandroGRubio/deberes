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
                    return `El sudoku que ha introducido es incorrecto`;
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
                    return `El sudoku que ha introducido es incorrecto`;
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

/*
arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
contar = 0;
booleanError = true;
let avanza = 0;
let retrocede = 6;




while (contar != 9) {
    
    





    regiones[contar].push(); 





}

*/








return `Has resuelto el sudoku correctamente`;


}


console.log(comprobarSudoku(sudokuCorrecto));



