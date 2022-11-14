"use strict";




export function comprobarDato(dato, validacion) {
    
    var errorExp = new RegExp(validacion);


    if (errorExp.test(dato) == false) {
        return false;
    }
    else{
        return true;
    }

}

export function generarId(numLetras){


    var letras = [1, 2, 3 , 4, 5, 6, 7, 8, 9, `a`, `b`, `c`, `d`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];

    var codId;

    


}