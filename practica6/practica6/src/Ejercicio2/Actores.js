import React from "react";


function Actores(props){

return(

    <React.Fragment>

        <h1>{props.actor}</h1>
        <figure>
            <img src={props.foto}></img>
        </figure>
        <p>{props.children}</p>




    </React.Fragment>





);




}

export default Actores;