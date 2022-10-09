import React from "react";




function Estrellas(props) {
    
    //Guardamos la cantidad de estrellas deseada.
    let estrellas = ``;

    for (let i = 0; i < props.nota; i++) {
       estrellas = `${estrellas}*`;
        
    }
    //Imprimimos las estrellas.
    return(
        
        <a>{estrellas}</a>



    );




}


export default Estrellas;