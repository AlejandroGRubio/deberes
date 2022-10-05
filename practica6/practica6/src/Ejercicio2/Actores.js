//Importamos React.
import React from "react";

//Creamos la función.
function Actores(props){

return(
    //Abrimos la etiqueta de React Fragment.
    <React.Fragment>
        {/**Introducimos los datos del JSX y las variables */}
        <h1>{props.actor}</h1>
        <figure>
            <img src={props.foto}></img>
        </figure>
        <p>{props.children}</p>




    </React.Fragment>





);




}

export default Actores;