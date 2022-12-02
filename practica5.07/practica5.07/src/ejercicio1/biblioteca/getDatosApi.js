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


export const getDatosPersonajes = async ( arrayPer, funcSet) => {

    let contar = 0;

    let array = [];

    console.log(arrayPer);


    while (contar < 10 ) {

        var url = arrayPer[contar];

        let datosPer = await devolverDatosOtro(url);

        array = [...array, datosPer];

        contar++;
    }

    funcSet(array);

}

export const getDatosNavesVehi = async (arrayD, funcSet) => {

    let contar = 0;

    let array = [];

    while (contar < arrayD.length) {
        
        var url = arrayD[contar];

        let datos = await devolverDatosOtro(url);

        array = [...array, datos];

        contar++;
    }
    funcSet(array);

}


