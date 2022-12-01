import React, { useState, useEffect } from "react";



function ListaPelis(props) {
    



    return (

        <React.Fragment>

        <div id="divPelis" onClick = {(evento) =>{
            if (evento.target.tagName == `LI`) {
                props.funcion(evento.target.id);
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