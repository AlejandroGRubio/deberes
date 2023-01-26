import './ejercicio1/css/pelis.css';
import React from "react";
import DatosContexto from './ejercicio1/contextos/DatosContexto.js';
import ListaPelis from "./ejercicio1/ListaPelis.js";
import DatosPeli from './ejercicio1/DatosPeli.js';


function App() {



    return(

      <React.Fragment>
          <div className="contenedorStarWars">
          <DatosContexto>

            <ListaPelis peliculas={peliculas} funcion={getPeliculaDatos} pelicula = {setPelicula}/>

            
            <DatosPeli pelicula = {pelicula} personajes = {personajes} setPersonajes = {setPersonajes}/>
           
          
          </DatosContexto>    
          </div>

      </React.Fragment>
    );
}

export default App;
