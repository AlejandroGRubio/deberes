"use strict";


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




