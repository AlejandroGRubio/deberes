import React, { useContext } from "react";
import { datosContexto } from "./contextos/DatosContexto.js";



function ListaPersonajes(params) {
    

    const contexto = useContext(datosContexto);


    return(


        <React.Fragment>

            <h1>Personajes</h1>

            {Object.keys(contexto.pelicula).length !== 0 ? (

                <div onClick={(evento) => {
                    if (evento.target.tagName == `P`) {
                        //Le pasamos la función.
                        contexto.getDatosPersonaje(evento.target.id);
                    }
                }}>



                

            {contexto.personajes.map((v,i,a) => {

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

            ) : ("No se ha seleccionado una película.")}



        </React.Fragment>






    );





}

export default ListaPersonajes;