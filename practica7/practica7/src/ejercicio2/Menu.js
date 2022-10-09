import React from "react";
import "./Opciones";
import Opciones from "./Opciones";
import "./css/Menu.css"

function Menu(props) {
    
    const opciones = [

        {
            id: 1,
            nombre: "Novedad",

        },
        {
            id: 2,
            nombre: "Recomendado",
        },
        {
            id: 3,
            nombre: "Popular",
        }

    ];
    
    
    
    
    
    return(

        <React.Fragment>

            <div>


                <ul>
                    {opciones.map((v) => {
                        return (
                            <Opciones
                                key={v.id}
                                nombre={v.nombre}
                            >
              
                            </Opciones>
                        );
                    })}



                </ul>
                




            </div>


        </React.Fragment>



    );
}

export default Menu;