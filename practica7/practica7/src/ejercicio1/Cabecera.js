import React from "react";
import "./css/Cabecera.css"

//Título de la página.
function Cabecera(props) {
    
    //Se le introduce los datos del título.
    return(
        <React.Fragment>
            <div className="cabecera">
                <h1><strong>{props.titulo}</strong></h1>
            </div>
           




        </React.Fragment>



    );


}

export default Cabecera;