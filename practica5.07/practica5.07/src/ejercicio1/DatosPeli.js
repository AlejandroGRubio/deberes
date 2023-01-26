import React, { useContext, useEffect } from "react";
import { datosContexto } from "./contextos/DatosContexto.js";
import DatosPersonajes from "./DatosPersonajes.js";


function DatosPelicula(props) {
    
    const contexto = useContext(datosContexto);

    var fecha = contexto.pelicula.release_date;

    useEffect(()=>{
        //Guardamos los datos en su useState correspondiente.
        contexto.getDatosPersonajes(contexto.pelicula.characters, contexto.setPersonajes);


    },[contexto.pelicula]);

    return(

        <React.Fragment>
            {Object.keys(contexto.pelicula).length !== 0 ? (
            <div id="divInfo">

                <h1>{contexto.pelicula.title}</h1>
                <p>{contexto.pelicula.opening_crawl}</p>
                <p>Director: {contexto.pelicula.director}</p>
                <p>Productor: {contexto.pelicula.producer}</p>
                <p>Fecha de lanzamiento: {fecha.charAt(8)}{fecha.charAt(9)}-{fecha.charAt(5)}{fecha.charAt(6)}-{fecha.charAt(0)}{fecha.charAt(1)}{fecha.charAt(2)}{fecha.charAt(3)}</p>

                <DatosPersonajes/>



            </div>
             ) : ("No se ha seleccionado una película.")}



        </React.Fragment>





    )





}

export default DatosPelicula;