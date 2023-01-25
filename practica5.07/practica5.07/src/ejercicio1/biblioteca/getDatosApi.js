"use strict";

import { devolverDatos, devolverDatosOtro } from "./datosAPI.js";


//Sacamos y guardamos las películas.
export const getPeliculas = async (url, funcSet) => {

    let datos = await devolverDatos(url);

    if (!datos.message) {
        funcSet(datos);
    }


}

//Sacamos y guardamos los datos de las películas.
export const getPeliculaDatos = async (url, funcSet) => {

    let datos = await devolverDatosOtro(url);

    if (!datos.message) {
        funcSet(datos);
    }


}

//Saacamos los datos de cada personaje.
export const getDatosPersonajes = async ( arrayPer, funcSet) => {

    let contar = 0;

    let array = [];


    while (contar < 10 ) {

        var url = arrayPer[contar];

        let datosPer = await devolverDatosOtro(url);

        array = [...array, datosPer];

        contar++;
    }

    funcSet(array);

}

//Sacamos los datos de las naves o de los vehículos.
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


