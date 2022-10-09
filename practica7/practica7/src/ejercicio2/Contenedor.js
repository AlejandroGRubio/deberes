import React from "react";
import Cabecera from "./Cabecera";
import Menu from "./Menu";
import Informacion from "./Informacion";
import Pie from "./Pie";
import "./css/Contenedor.css"



function Contenedor(props) {
    
return (
    <React.Fragment>

    <body>
        <Cabecera titulo = "Listado de Películas"></Cabecera>
        <Menu></Menu>
        <div>
            <Informacion></Informacion>
        </div>
        


    </body>

    <Pie info = "Alejandro Manuel G. Rubio 2022"></Pie>


    </React.Fragment>








);



}


export default Contenedor;