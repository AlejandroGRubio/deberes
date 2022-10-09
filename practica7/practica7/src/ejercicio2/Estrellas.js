import React from "react";




function Estrellas(props) {
    

    let estrellas = ``;

    for (let i = 0; i < props.nota; i++) {
       estrellas = `${estrellas}*`;
        
    }

    return(

        <a>{estrellas}</a>



    );




}


export default Estrellas;