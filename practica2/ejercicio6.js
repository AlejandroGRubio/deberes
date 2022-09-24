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


let array = [`Juan`, `Pepe`];
let array2 = {
        nombreAlumno: `Juan Perez`,
        año: 2002,
        descripcion: `desc`,
}
let curso1 = generarCurso(`2doB`, 2022, `Mucho texto`, array2);
console.log(`Los datos del curso son: ${generarInformeDato(curso1)}`);