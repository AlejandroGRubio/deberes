import React, { useContext } from "react";
import { datosContexto } from "./contextos/DatosContexto.js";



function ListaVehiculos(params) {
 
    const contexto = useContext(datosContexto);


    return(


        <React.Fragment>

            <h1>Vehiculos</h1>

            {Object.keys(contexto.vehiculos).length !== 0 ? (

                <div onClick={(evento) => {
                    if (evento.target.tagName == `P`) {
                        //Le pasamos la función.
                        contexto.getDatosVehiculo(evento.target.id);
                    }
                }}>



                

            {contexto.vehiculos.map((v,i,a) => {

                return (
                    <div key={i}>


                <p 
                    id={v.url}
                >
                    {v.name} 

                </p>
    
   
                    </div>

                )

            })}

                </div>

            ) : ("Vehículos no disponibles.")}



        </React.Fragment>






    );








}


export default ListaVehiculos;