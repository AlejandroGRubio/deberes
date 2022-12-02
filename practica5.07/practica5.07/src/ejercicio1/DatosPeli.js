import React, { useState, useEffect } from "react";


function DatosPelicula(props) {
    
console.log(props.pelicula);

    var fecha = props.pelicula.release_date;


    return(

        <React.Fragment>

            <div id="divInfo">

                <h1>{props.pelicula.title}</h1>
                <p>{props.pelicula.opening_crawl}</p>
                <p>Director: {props.pelicula.director}</p>
                <p>Productor: {props.pelicula.producer}</p>
                <p>Fecha de lanzamiento: {fecha.charAt(8)}{fecha.charAt(9)}-{fecha.charAt(5)}{fecha.charAt(6)}-{fecha.charAt(0)}{fecha.charAt(1)}{fecha.charAt(2)}{fecha.charAt(3)}</p>





            </div>




        </React.Fragment>





    )





}

export default DatosPelicula;