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

let array = [`Juan`, `Pepe`];
console.log(generarCurso(`2doB`, 2022, `Mucho texto`, array));