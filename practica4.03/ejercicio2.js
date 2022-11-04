"use strict";

import { comprobarFormularioById, generarTextoError, quitarTextoError, insertarEtiquetaById } from "./biblioteca/bibliotecaEj.js";


window.onload = () => {


    var doc = window.document;


    doc.getElementById(`crearParrafo`).addEventListener(`click`, () => {


        if (comprobarFormularioById(`areaParrafo`) == false || comprobarFormularioById(`clasesParrafo`) == false) {
            generarTextoError(`Debe rellenar los apartados correspondientes.`, `error`, `resultado`);
        }
        else{
            quitarTextoError(`error`, `ocultoError`);

            insertarEtiquetaById(`p`, doc.getElementById(`areaParrafo`).value, doc.getElementById(`clasesParrafo`).value, `resultado`);

        }


    });





} //Fin del código onload.