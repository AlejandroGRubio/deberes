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
            <Informacion nombre = "El Planeta de los Simios" desc = "George Taylor forma parte de la tripulación de una nave espacial en una misión de larga duración que se estrella en un planeta desconocido y aparentemente carente de vida inteligente." img = "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/12/planeta-simios.jpg?itok=Yv5c2Ubj" ></Informacion>
            <Informacion nombre = "Feliz dia de tu muerte" desc = "El día de su cumpleaños, la universitaria Tree Gelbman se despierta, con una enorme resaca, en la habitación de un chico desconocido. Tras un día en el que encadena egoísmo, hostilidad e indiferencia hacia todos los que la rodean, Tree remata la noche siendo asesinada por alguien con una máscara de bebé." img = "https://es.web.img2.acsta.net/pictures/17/06/16/11/53/018951.jpg" ></Informacion>
        </div>
        


    </body>

    <Pie info = "Alejandro Manuel G. Rubio 2022"></Pie>


    </React.Fragment>








);



}


export default Contenedor;