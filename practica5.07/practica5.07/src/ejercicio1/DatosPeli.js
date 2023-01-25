import React, { useState, useEffect } from "react";
import { getDatosPersonajes } from "./biblioteca/getDatosApi.js";
import DatosPersonajes from "./DatosPersonajes.js";


function DatosPelicula(props) {
    

    var fecha = props.pelicula.release_date;

    useEffect(()=>{
        //Guardamos los datos en su useState correspondiente.
        getDatosPersonajes(props.pelicula.characters, props.setPersonajes);


    },[props.pelicula])

    return(

        <React.Fragment>

            <div id="divInfo">

                <h1>{props.pelicula.title}</h1>
                <p>{props.pelicula.opening_crawl}</p>
                <p>Director: {props.pelicula.director}</p>
                <p>Productor: {props.pelicula.producer}</p>
                <p>Fecha de lanzamiento: {fecha.charAt(8)}{fecha.charAt(9)}-{fecha.charAt(5)}{fecha.charAt(6)}-{fecha.charAt(0)}{fecha.charAt(1)}{fecha.charAt(2)}{fecha.charAt(3)}</p>

                <DatosPersonajes personajes={props.personajes}/>



            </div>




        </React.Fragment>





    )





}

export default DatosPelicula;