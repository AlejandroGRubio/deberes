//Importamos React.
import React from "react";
import "./css/Pelicula.css";
import Estrellas from "./Estrellas.js"


//Creamos la función.
function Pelicula(props) {

//Ponemos el return, para incluir el código JSX.
return (

    //Abrimos la etiqueta de React Fragment.
    <React.Fragment>
        {/**Introducimos el código JSX junto a donde van las variables*/}
        <h2 className="nombre">
            <strong>{props.nombre}</strong>
        </h2>
        <p className="dir">
            {props.director}
        </p>
        <p className="clasif">
            {props.clasificacion}
        </p>
        <p className="estrellas">
            <Estrellas nota = {props.nota}></Estrellas>
        </p>
        <figure>
            <img src={props.cartelera}></img>
        </figure>
        <p className="desc">
            {props.children}
        </p>

    </React.Fragment>


);



}

export default Pelicula;