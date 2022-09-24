"use strict";

let curso1 = generarCurso(`2doB`, 2022, `Mucho texto`, );

let alumnado = {

    id: 12345,
    nombre: `Carlos`,
    apellidos : `Saenz Rubio`,
    aficiones: [`leer`, `dibujar`, `futbol`],
    notas: {

        primera: 6,
        segunda: 7,
        tercera: 6,

    },


}

function generarCurso(nomCurso, anyo, desc, alumnArray) {
    
    let curso = {

        nombreCurso: nomCurso,
        año: anyo,
        descripcion: desc,
        alumnado: alumnArray,

    }


    return curso;

}

function generarInformeDato(objCurso) {
    
    let datosCurso = ``;

    for (let buscar in objCurso){

        if (typeof objCurso[buscar] === `object`) {
            datosCurso = `${datosCurso} ${buscar}: ${generarInformeDato(objCurso[buscar])}`;
        }
        else{
            datosCurso = `${datosCurso} ${buscar}: ${objCurso[buscar]}`;
        }

        
    }

    return datosCurso;

}

function calcularMedia(objetoA) {
    
    let notaMedia = 0;
    let objNotas;


    for (let nota in objetoA){

        if (nota == `notas`){

            objNotas = objetoA[nota];

            for(let a in objNotas){
                notaMedia = notaMedia + objNotas[a];
            }

        }

    }

    return notaMedia/3;

}

function imprimirAficiones(objetoA) {
   
    let imprimir = ``;
    let objAficiones;

    for (let imp in objetoA){

        if(imp == `aficiones`){

            objAficiones = objetoA[imp];

            for (let i = 0; i < objAficiones.length; i++) {
                imprimir = `${imprimir} ${objAficiones[i]}`;
                
            }

        }

    }


    console.log(`Las aficiones del alumno son: ${imprimir}`);


}


function imprimirInforme(objeto) {
    

    console.log(`Los datos del alumnado son: ${generarInformeDato(objeto)}`);


}



console.log(`La nota media del alumno es ${calcularMedia(alumnado)}`);
imprimirAficiones(alumnado);
imprimirInforme(alumnado);



 // console.log(`Los datos del curso son: ${generarInformeDato(curso1)}`);