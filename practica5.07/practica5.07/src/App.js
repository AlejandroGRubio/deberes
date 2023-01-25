import './ejercicio1/css/pelis.css';
import React, { useState, useEffect } from "react";
import ListaPelis from "./ejercicio1/ListaPelis.js";
import DatosPeli from './ejercicio1/DatosPeli.js';


function App() {



    return(

      <React.Fragment>
          <div className="contenedorStarWars">

              
              <ListaPelis peliculas={peliculas} funcion={getPeliculaDatos} pelicula = {setPelicula}/>

            {Object.keys(pelicula).length !== 0 ? (
              <DatosPeli pelicula = {pelicula} personajes = {personajes} setPersonajes = {setPersonajes}/>
            ) : ("No se ha seleccionado una película.")}

              
              
          </div>

      </React.Fragment>
    );
}

export default App;
