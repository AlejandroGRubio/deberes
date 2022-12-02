import './App.css';
import React, { useState, useEffect } from "react";
import { getPeliculas, getPeliculaDatos } from "./ejercicio1/biblioteca/getDatosApi.js";
import ListaPelis from "./ejercicio1/ListaPelis.js";
import DatosPeli from './ejercicio1/DatosPeli.js';


function App() {

  const url = "https://swapi.py4e.com/api/films";

    const valoresIniciales = [];
    const peliInicial = {};

    const [peliculas, setPeliculas] = useState(valoresIniciales);
    const [pelicula, setPelicula] = useState(peliInicial);
    const [personajes, setPersonajes] = useState(valoresIniciales);
    const [naves, setNaves] = useState(valoresIniciales);
    const [vehiculos, setVehiculos] = useState(valoresIniciales);

    useEffect(()=>{

        getPeliculas(url, setPeliculas);


    },[]);

    console.log(peliculas);


    return(

      <React.Fragment>
          <div className="contenedorStarWars">

              
              <ListaPelis peliculas={peliculas} funcion={getPeliculaDatos} pelicula = {setPelicula}/>

            {Object.keys(pelicula).length !== 0 ? (
              <DatosPeli pelicula = {pelicula} personajes = {personajes} setPersonajes = {setPersonajes} naves = {naves} setNaves = {setNaves} vehiculos = {vehiculos} setVehiculos = {setVehiculos}/>
            ) : ("No se ha seleccionado una película.")}

              
              
          </div>

      </React.Fragment>
    );
}

export default App;
