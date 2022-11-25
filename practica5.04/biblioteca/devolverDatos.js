"use strict";
import devolverDatos from "./biblioteca/datosAPI.js";
import * as imprimir from "./imprimirDatos.js";

export const devolverListaPelis = async (url, idUbi) => {
    let datosLista = await devolverDatos(url);

    imprimir.imprimirListaPelis(datosLista, idUbi);



    
}
    
   





