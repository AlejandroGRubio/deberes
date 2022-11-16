"use strict";



//Esta función al final no ha sido usada, pero la dejo por si en un futuro la utilizo, deberia decir si pasa la validación o no.
export function comprobarDato(dato, validacion) {
    
    var errorExp = new RegExp(validacion);


    if (errorExp.test(dato) == false) {
        return false;
    }
    else{
        return true;
    }

}
//Genera una un dato aleatorio, segun las letras que le indiques.
export function generarId(numLetras){


    var letras = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `a`, `b`, `c`, `d`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];

    let codId = ``;

    for (let i = 0; i < numLetras; i++) {
        
        codId = `${codId}${letras[Math.floor(Math.random() * letras.length)]}`;
    }

    return codId;


}