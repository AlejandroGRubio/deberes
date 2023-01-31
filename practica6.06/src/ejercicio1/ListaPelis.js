import React, { useContext } from "react";
import { datosContexto } from "./contextos/DatosContexto.js";



function ListaPelis(props) {
    
    const contexto = useContext(datosContexto);


    return (

        <React.Fragment>

        <div id="divPelis" onClick = {(evento) =>{
            if (evento.target.tagName == `LI`) {
                //Le pasamos la función.
                contexto.getPeliculaDatos(evento.target.id);
            }

            }}>
            <ul>

                {contexto.peliculas.map((v,i,a) => {
                    //Imprimimos los nombres de las películas.
                    return (
                        <li 
                            key={i}
                            className={`noClicked`}
                            id={v.url}
                        >
                            {v.title}

                        </li>
                    )


                    })
            
            
                }



            </ul>
        </div>


        </React.Fragment>


    );





    
}



export default ListaPelis;