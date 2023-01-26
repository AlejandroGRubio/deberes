import React, { useContext } from "react";
import DatosNaves from "./DatosNaves.js";
import DatosVehiculos from "./DatosVehiculos.js";
import { datosContexto } from "./contextos/DatosContexto.js";

function DatosPersonajes(props) {
    

    const contexto = useContext(datosContexto);


return(

    <React.Fragment>

        <div id="divInfoPerso" onClick = {(evento) =>{
            if (evento.target.tagName == `P`) {
                
                if (evento.target.className == `noClicked`) {
                    contexto.setClaseDatos(`clicked`);

                }
                if (evento.target.className == `clicked`) {
                    contexto.setClaseDatos(`noClicked`);
                }
            }

            }}>


        {contexto.personajes.map((v,i,a) => {

            return (
            <div key={i}>

            
                <p 
                    className={contexto.clases}
                >
                {v.name} 

                </p>
                <div className={contexto.clases}>
                    <p>Género: {v.gender}</p>
                    <p>Altura: {v.height}</p>
                    <p>Peso: {v.mass}</p>
                    <p>Color de pelo: {v.hair_color}</p>
                    <p>Color de ojos: {v.eye_color}</p>

                </div>

                {contexto.datosVehi = v.vehicles}
                {contexto.datosNave = v.starships}

                <DatosNaves/>
                <DatosVehiculos/>
               
            </div>




            )


        })}


            





        </div>



    </React.Fragment>



);



}

export default DatosPersonajes;