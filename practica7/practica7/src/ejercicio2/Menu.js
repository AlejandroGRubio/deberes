import React from "react";
import "./Opciones";
import Opciones from "./Opciones";
import "./css/Menu.css"

function Menu(props) {
    //Se crea un objeto con los datos del menú.
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
    
    
    
    
    //Se hace una funcion para recorrer e insertar los datos del menú.
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