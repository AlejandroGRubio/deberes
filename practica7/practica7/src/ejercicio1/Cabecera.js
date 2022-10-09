import React from "react";
import "./css/Cabecera.css"


function Cabecera(props) {
    
    return(
        <React.Fragment>
            <div className="cabecera">
                <h1><strong>{props.titulo}</strong></h1>
            </div>
           




        </React.Fragment>



    );


}

export default Cabecera;