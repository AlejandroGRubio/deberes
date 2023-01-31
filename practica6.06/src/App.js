import './ejercicio1/css/pelis.css';
import React from "react";
import DatosContexto from './ejercicio1/contextos/DatosContexto.js';
import ListaPelis from "./ejercicio1/ListaPelis.js";
import DatosPeli from './ejercicio1/DatosPeli.js';
import ListaPersonajes from './ejercicio1/ListaPersonajes';
import DatosPersonajes from './ejercicio1/DatosPersonajes';
import ListaNaves from './ejercicio1/ListaNaves';
import DatosNaves from './ejercicio1/DatosNaves';
import ListaVehiculos from './ejercicio1/ListaVehiculos';
import DatosVehiculos from './ejercicio1/DatosVehiculos';


function App() {



    return(

      <React.Fragment>
          <div className="contenedorStarWars">
          <DatosContexto>

            <div id='listaPelis'>
              <ListaPelis/>
            </div>

            <div id='datosPelis'>
              <DatosPeli/>
            </div>

            <div id='listaPersonajes'>
                <ListaPersonajes/>
            </div>

            <div id='datosPersonajes'>
                <DatosPersonajes/>
                <div id='listaNaves'>
                  <ListaNaves/>
                </div>

                <div id='listaVehiculo'>
                  <ListaVehiculos/>
                </div>

            </div>

            <div id='datosNaves'>
                <DatosNaves/>
            </div>


            <div id='datosVehiculo'>
              <DatosVehiculos/>
            </div>
           

            
            
           
          
          </DatosContexto>    
          </div>

      </React.Fragment>
    );
}

export default App;
