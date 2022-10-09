import React from "react";
import pelis from "./Ejercicio2.json";
import Pelicula from "./Pelicula";



function Peliculas(props) {
    
    



    return(

       <React.Fragment>

        {pelis.peliculas.map((peli) => {

            return <Pelicula id = {peli.id} nombre = {peli.nombre} director = {peli.director} clasificacion = {peli.clasificacion} cartelera = {peli.cartelera} nota = {peli.nota}>
                {peli.resumen}
            </Pelicula>


        })}






       </React.Fragment>




    );


}


export default Peliculas;