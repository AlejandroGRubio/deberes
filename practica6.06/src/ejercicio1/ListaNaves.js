import React, { useContext } from "react";
import { datosContexto } from "./contextos/DatosContexto.js";



function ListaNaves(params) {
 
    const contexto = useContext(datosContexto);


    return(


        <React.Fragment>

            <p>Naves</p>

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
                    id={v.url}
                >
                    {v.name} 

                </p>
    
   
                    </div>

                )

            })}

                </div>

            ) : ("No se ha seleccionado un personaje.")}



        </React.Fragment>






    );








}


export default ListaNaves;