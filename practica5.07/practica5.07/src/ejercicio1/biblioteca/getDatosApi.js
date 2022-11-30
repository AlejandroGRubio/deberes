"use strict";

import { devolverDatos } from "./datosAPI.js";



export const getPeliculasYDatos = async (url, funcSet) => {

    let datos = await devolverDatos(url);

    if (!datos.message) {
        funcSet(datos);
    }


}
