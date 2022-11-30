import React, { useState, useEffect } from "react";
import { devolverDatos } from "./biblioteca/datosAPI.js";
import { getPeliculasYDatos } from "./biblioteca/getDatosApi.js";




function PelisStarWars(params) {
    
    const url = "https://swapi.dev/api/films";

    const valoresIniciales = [];
    const peliInicial = {};

    const [peliculas, setPeliculas] = useState(valoresIniciales);
    const [pelicula, setPelicula] = useState(peliInicial);

    

    useEffect(()=>{

        getPeliculasYDatos(url, setPeliculas);


    },[])

    


    return(

        <React.Fragment>
            <div className="contenedorStarWars">
                
                
            </div>

        </React.Fragment>

    );





}

export default PelisStarWars;