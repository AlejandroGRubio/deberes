import React, { useState, useEffect } from "react";
import { getDatosNavesVehi } from "./biblioteca/getDatosApi.js";
import DatosNaves from "./DatosNaves.js";


function DatosPersonajes(props) {
    
console.log(props.personajes);

const [clases, setClaseDatos] = useState(`noClicked`);

useEffect(()=>{

    getDatosNavesVehi(props.personajes.starships, props.setNaves);


},[])





return(

    <React.Fragment>

        <div id="divInfoPerso" onClick = {(evento) =>{
            if (evento.target.tagName == `P`) {
                
                if (evento.target.className == `noClicked`) {
                    setClaseDatos(`clicked`);

                }
                if (evento.target.className == `clicked`) {
                    setClaseDatos(`noClicked`);
                }
            }

            }}>


        {props.personajes.map((v,i,a) => {

            return (
            <div key={i}>

            
                <p 
                    className={clases}
                >
                {v.name} 

                </p>
                <div className={clases}>
                    <p>Género: {v.gender}</p>
                    <p>Altura: {v.height}</p>
                    <p>Peso: {v.mass}</p>
                    <p>Color de pelo: {v.hair_color}</p>
                    <p>Color de ojos: {v.eye_color}</p>

                </div>

                <DatosNaves />
               
            </div>




            )


        })}


            





        </div>



    </React.Fragment>



);



}

export default DatosPersonajes;