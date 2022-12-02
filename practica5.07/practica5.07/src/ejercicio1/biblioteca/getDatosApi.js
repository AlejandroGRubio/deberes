"use strict";

import { devolverDatos, devolverDatosOtro } from "./datosAPI.js";



export const getPeliculas = async (url, funcSet) => {

    let datos = await devolverDatos(url);

    if (!datos.message) {
        funcSet(datos);
    }


}

export const getPeliculaDatos = async (url, funcSet) => {

    let datos = await devolverDatosOtro(url);

    if (!datos.message) {
        funcSet(datos);
    }


}


