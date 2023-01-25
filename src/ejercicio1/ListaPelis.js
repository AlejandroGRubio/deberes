import React, { useState, useEffect } from "react";



function ListaPelis(props) {
    



    return (

        <React.Fragment>

        <div id="divPelis" onClick = {(evento) =>{
            if (evento.target.tagName == `LI`) {
                console.log(evento.target.id);
                props.funcion(evento.target.id, props.pelicula);
            }

            }}>
            <ul>

                {props.peliculas.map((v,i,a) => {

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