import './App.css';
import React, { useState, useEffect } from "react";
import { getPeliculasYDatos } from "./ejercicio1/biblioteca/getDatosApi.js";
import ListaPelis from "./ejercicio1/ListaPelis.js";
import { peliculaSeleccionada } from './ejercicio1/biblioteca/seleccionDatos.js';

function App() {

  const url = "https://swapi.dev/api/films";

    const valoresIniciales = [];
    const peliInicial = {};

    const [peliculas, setPeliculas] = useState(valoresIniciales);
    const [pelicula, setPelicula] = useState(peliInicial);

    

    useEffect(()=>{

        getPeliculasYDatos(url, setPeliculas);


    },[])

    console.log(peliculas);


    return(

      <React.Fragment>
          <div className="contenedorStarWars">

              
              <ListaPelis peliculas={peliculas} funcion={peliculaSeleccionada}/>



              
              
          </div>

      </React.Fragment>
    );
}

export default App;
