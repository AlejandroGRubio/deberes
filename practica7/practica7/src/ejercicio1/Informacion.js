import React from "react";




function Informacion(props) {
    
return(

    <React.Fragment>

        <h2>
            {props.nombre}
        </h2>
        <p>
            {props.desc}
        </p>
        <figure>

            <img src={props.img}></img>

        </figure>





    </React.Fragment>






);






}



export default Informacion;