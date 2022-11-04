"use strict";
import { generarCheckbox, generarBoton, marcarParesCheckbox, desmarcarTodosCheckbox } from "./biblioteca/bibliotecaEj.js";

window.onload = () => {

    var doc = window.document;

    generarCheckbox(`celda`, 100, 1000, 100);

    generarBoton(`Marcar todos los pares`, `marcarPar`);
    generarBoton(`Desmarcar todos`, `desmarcarTodos`);


    doc.getElementById(`marcarPar`).addEventListener(`click`, () => {

        
        marcarParesCheckbox(`celda`);



    });

    doc.getElementById(`desmarcarTodos`).addEventListener(`click`, () => {

        
        desmarcarTodosCheckbox(`celda`);



    });

} //Fin del código onload.
