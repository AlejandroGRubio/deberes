"use strict";


function generarCurso(nomCurso, anyo, desc, alumnArray) {
    
    let curso = {

        nombreCurso: nomCurso,
        año: anyo,
        descripcion: desc,
        alumnado: alumnArray,

    }


    return curso;

}

function generarInforme(objCurso) {
    
    let datosCurso = ``;

    for (let buscar in objCurso){
        datosCurso = `${datosCurso} ${buscar}: ${objCurso[buscar]}`;
    }

    return datosCurso;

}


let array = [`Juan`, `Pepe`];
let curso1 = generarCurso(`2doB`, 2022, `Mucho texto`, array);
console.log(`Los datos del curso son: ${generarInforme(curso1)}`);