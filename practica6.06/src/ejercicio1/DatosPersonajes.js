import React, { useContext } from "react";
import DatosNaves from "./DatosNaves.js";
import DatosVehiculos from "./DatosVehiculos.js";
import { datosContexto } from "./contextos/DatosContexto.js";

function DatosPersonajes(props) {
    

    const contexto = useContext(datosContexto);


return(

    <React.Fragment>



       
            <div>
                <p>Datos del Personaje</p>
            
                <p>
                {contexto.personaje.name} 
                </p>
                
                <p>Género: {contexto.personaje.gender}</p>
                <p>Altura: {contexto.personaje.height}</p>
                <p>Peso: {contexto.personaje.mass}</p>
                <p>Color de pelo: {contexto.personaje.hair_color}</p>
                <p>Color de ojos: {contexto.personaje.eye_color}</p>

                         
            </div>





    </React.Fragment>



);



}

export default DatosPersonajes;