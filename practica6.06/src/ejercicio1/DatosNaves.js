import React, { useContext } from "react";
import { datosContexto } from "./contextos/DatosContexto.js";



function DatosNaves(props) {
    
    const contexto = useContext(datosContexto);


    return(

        <React.Fragment>
            
            
            <p>
                Datos de la Nave

            </p>

                <div>
                    <p>Nombre: {contexto.nave.name}</p>
                    <p>Modelo: {contexto.nave.model}</p>
                    <p>Manufacturado: {contexto.nave.manufacturer}</p>
                    <p>Coste en creditos: {contexto.nave.cost_in_credits}</p>
                    <p>Largo: {contexto.nave.length}</p>
                    <p>Capacidad de carga: {contexto.nave.cargo_capacity}</p>
                    <p>Clase de nave: {contexto.nave.starship_class}</p>

                </div>
               






            
        </React.Fragment>


    );


}

export default DatosNaves;