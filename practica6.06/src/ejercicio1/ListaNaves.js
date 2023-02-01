import React, { useContext } from "react";
import { datosContexto } from "./contextos/DatosContexto.js";



function ListaNaves(params) {
 
    const contexto = useContext(datosContexto);


    return(


        <React.Fragment>

            <h1>Naves</h1>

            {Object.keys(contexto.naves).length !== 0 ? (

                <div onClick={(evento) => {
                    if (evento.target.tagName == `P`) {
                        //Le pasamos la función.
                        contexto.getDatosNave(evento.target.id);
                    }
                }}>



                

            {contexto.naves.map((v,i,a) => {

                return (
                    <div key={i}>


                <p 
                    id={v.value.url}
                >
                    {v.value.name} 

                </p>
    
   
                    </div>

                )

            })}

                </div>

            ) : ("Naves no disponibles.")}



        </React.Fragment>






    );








}


export default ListaNaves;