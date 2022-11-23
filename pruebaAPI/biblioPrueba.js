"use strict";


export function devolverDatos(url) {
    
    fetch(url)
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((datos) => {
        return datos.results;
    })


}

export const guardarDatos = async (e) => {

    let datos = await devolverDatos(e);

    

    return datos;


}

export function mostrar(datos) {
    
    console.log(datos);


}