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

            <ListaPelis/>

            
            <DatosPeli/>
           
          
          </DatosContexto>    
          </div>

      </React.Fragment>
    );
}

export default App;
