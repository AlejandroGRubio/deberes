import React from "react";




function Taquilla(props) {
    
return (
    <React.Fragment>
        <h1>
            <strong>{props.titulo}</strong>
        </h1>
        <p>
            {props.direccion}
        </p>
        <figure>
            <img src={props.cartelera}></img>
        </figure>
        <p>
            {props.children}
        </p>


    </React.Fragment>


);



}

export default Taquilla;