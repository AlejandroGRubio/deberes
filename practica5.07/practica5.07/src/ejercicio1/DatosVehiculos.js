import React, { useContext, useEffect } from "react";
import { datosContexto } from "./contextos/DatosContexto.js";



function DatosVehiculos(props) {
    
    const contexto = useContext(datosContexto);


    useEffect(()=>{
        //Guardamos los datos en su useState correspondiente.
       contexto.getDatosNavesVehi(contexto.datosVehi, contexto.setVehiculos);
       

    },[contexto.vehiculo]);
    

    



    return(

        <React.Fragment>
            <div id="divInfoVehiculos" onClick = {(evento) =>{
            if (evento.target.tagName == `P`) {
                
                if (evento.target.className == `noClickedVehiculos`) {
                    contexto.setClaseDatosVehiculo(`clickedVehiculos`);

                }
                if (evento.target.className == `clickedVehiculos`) {
                    contexto.setClaseDatosVehiculo(`noClickedVehiculos`);
                }
            }

            }}>
            
            <p 
                    className={contexto.clasesVehiculo}
                >
                Vehiculos 

            </p>

        {contexto.vehiculo.map((v,i,a) => {

            return (
            <div key={i}>

                <div className={contexto.clasesVehiculo}>
                    <p>Nombre: {v.name}</p>
                    <p>Modelo: {v.model}</p>
                    <p>Manufacturado: {v.manufacturer}</p>
                    <p>Coste en creditos: {v.cost_in_credits}</p>
                    <p>Largo: {v.length}</p>
                    <p>Capacidad de carga: {v.cargo_capacity}</p>
                    <p>Clase de vehiculo: {v.vehicle_class}</p>

                </div>
               
            </div>




            )


        })}


            





        </div>




            
        </React.Fragment>


    );


}

export default DatosVehiculos;