import React, { useState, useEffect } from "react";
import { getDatosNavesVehi } from "./biblioteca/getDatosApi.js";



function DatosVehiculos(props) {
    
    var datos = [];

    const [clasesVehiculo, setClaseDatosVehiculo] = useState(`noClickedVehiculos`);
    const [vehiculo, setVehiculos] = useState(datos);

    useEffect(()=>{
        //Guardamos los datos en su useState correspondiente.
       getDatosNavesVehi(props.arrayVehiculos, setVehiculos);
       

    },[datos]);
    

    



    return(

        <React.Fragment>
            <div id="divInfoVehiculos" onClick = {(evento) =>{
            if (evento.target.tagName == `P`) {
                
                if (evento.target.className == `noClickedVehiculos`) {
                    setClaseDatosVehiculo(`clickedVehiculos`);

                }
                if (evento.target.className == `clickedVehiculos`) {
                    setClaseDatosVehiculo(`noClickedVehiculos`);
                }
            }

            }}>
            
            <p 
                    className={clasesVehiculo}
                >
                Vehiculos 

            </p>

        {vehiculo.map((v,i,a) => {

            return (
            <div key={i}>

                <div className={clasesVehiculo}>
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