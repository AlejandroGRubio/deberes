"use strict";

//Sacamos los datos de la URL.
export function devolverDatos(url) {
    
    return(fetch(url)
     .then((respuesta) => {
         return respuesta.json();
     })
     .then((datos) => {
         return datos.results;
         
     })
     .catch(() => {
        return new Error("Fallo en la carga");
     })
     );
 
 
};

//Sacamos los datos de la URL de otra forma.
export function devolverDatosOtro(url) {
    
    return(fetch(url)
     .then((respuesta) => {
         return respuesta.json();
     })
     .then((datos) => {
         return datos;
         
     })
     .catch(() => {
        return new Error("Fallo en la carga");
     })
     );
 
 
};




