import React from "react";
import "./css/Informacion.css"



//Se le introducen los datos de las películas.
function Informacion(props) {
    
return(

    <React.Fragment>

        <h2 className="titulo">
            {props.nombre}
        </h2>
        <p className="descripcion">
            {props.desc}
        </p>
        <figure>

            <img src={props.img}></img>

        </figure>





    </React.Fragment>






);






}



export default Informacion;