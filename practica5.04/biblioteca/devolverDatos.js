"use strict";
import { devolverDatos } from "./datosAPI.js";
import * as imprimir from "./imprimirDatos.js";

export const devolverListaPelis = async (url, idUbi) => {
    let datosLista = await devolverDatos(url);
    console.log(datosLista);

    imprimir.imprimirListaPelis(datosLista, idUbi);

    
}

export const devolverDatosPelis = async (nomPeli, url, idUbi) => {

    let datosPelis = await devolverDatos(url);

    imprimir.imprimirDatosPelis(nomPeli, datosPelis, idUbi);


}

export const devolverDatoPersonaje = async (url) => {

    let datosPersonaje = await devolverDatos(url);

    return datosPersonaje;


}
    
   





