import React, { useContext, useEffect } from "react";
import { datosContexto } from "./contextos/DatosContexto.js";



function DatosVehiculos(props) {
    
    const contexto = useContext(datosContexto);

    return(

        <React.Fragment>
            
            
            <h1>
                Datos del Vehiculo

            </h1>





                <div>
                    <p>Nombre: {contexto.vehiculo.name}</p>
                    <p>Modelo: {contexto.vehiculo.model}</p>
                    <p>Manufacturado: {contexto.vehiculo.manufacturer}</p>
                    <p>Coste en creditos: {contexto.vehiculo.cost_in_credits}</p>
                    <p>Largo: {contexto.vehiculo.length}</p>
                    <p>Capacidad de carga: {contexto.vehiculo.cargo_capacity}</p>
                    <p>Clase de vehiculo: {contexto.vehiculo.vehicle_class}</p>

                </div>
               



            
        </React.Fragment>


    );


}

export default DatosVehiculos;