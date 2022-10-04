"use strict";




let panel = [];

panel[0] = [-1, 0, 0 ,0];
panel[1] = [0, 0, 0, 0];
panel[2] = [0, -1, 0, 0];
panel[3] = [0, 0, 0, 0];


function minasAdyacentes(minas){

    
    let contar = 1;
    let texto = ``;


    let buscaminas = [...minas];


    //Recorremos el array.
    for (let i = 0; i < buscaminas.length; i++) {
        for (let j = 0; j < buscaminas[i].length; j++) {
            
            //Buscamos la que es una mina.
            if (buscaminas[i][j] == -1) {
                
                while (contar != 9) {
                    //Y hacemos que los huecos de alrededor sumen uno (si los huecos existen).
                    switch (contar) {
                        case 1:
                            
                            if((j - 1) < 0){
    
                            }
                            else{
                                if (buscaminas[i][j -1] >= 0) {
                                    buscaminas[i][j -1]++;
                                }
                            }
    
    
                            contar++;
                            break;
                        case 2:

                            if ((i - 1) < 0) {
                                
                            }
                            else{
                                if (buscaminas[i -1][j] >= 0) {
                                    buscaminas[i -1][j]++;
                                }
                            }

                            contar++;
                            break;

                        case 3:

                            if ((j + 1) < 0) {
                                
                            }
                            else{
                                if (buscaminas[i][j+1] >= 0) {
                                    buscaminas[i][j+1]++;
                                }
                            }

                            contar++;
                            break;

                        case 4:

                            if ((i + 1) < 0) {
                                
                            }
                            else{
                                if (buscaminas[i +1][j] >= 0) {
                                    buscaminas[i +1][j]++;
                                }
                            }

                            contar++;
                            break;
                        
                        case 5:

                            if ((i - 1) < 0 || (j - 1) < 0) {
                                
                            }
                            else{
                                if (buscaminas[i -1][j -1] >= 0) {
                                    buscaminas[i -1][j -1]++;
                                }
                            }

                            contar++;
                            break;
                        
                        case 6:

                            if ((j - 1) < 0) {
                                
                            }
                            else{
                                if (buscaminas[i +1][j -1] >= 0) {
                                    buscaminas[i +1][j -1]++;
                                }
                            }

                            contar++;
                            break;
                        
                        case 7:

                            if ((i - 1) < 0) {
                                
                            }
                            else{
                                if (buscaminas[i -1][j +1] >= 0) {
                                    buscaminas[i -1][j +1]++;
                                }
                            }

                            contar++;
                            break;
                        
                        case 8:

                            
                                if (buscaminas[i +1][j +1] >= 0) {
                                    buscaminas[i +1][j +1]++;
                                }
                            

                            contar++;

                            break;
                    
                        default:
                            break;
                    }
    
    
                }
                contar = 1;


            }


        }
        
    }
//Los mostramos por pantalla.
    for (let i = 0; i < buscaminas.length; i++) {
        
        for (let j = 0; j < buscaminas[i].length; j++) {
            texto = `${texto} ${buscaminas[i][j]}`;
            
        }

        console.log(texto);
        texto = ``;
        
    }






}





minasAdyacentes(panel);
