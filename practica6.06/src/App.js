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

            <div id='listaPelis'>
              <ListaPelis/>
            </div>

            <div id='listaActores'>

            </div>

            <div id='datosActor'>

                <div id='listaNaves'>

                </div>

                <div id='listaVehiculo'>

                </div>

            </div>

            <div id='datosNaves'>

            </div>


            <div id='datosVehiculo'>

              
            </div>
           

            
            <DatosPeli/>
           
          
          </DatosContexto>    
          </div>

      </React.Fragment>
    );
}

export default App;
