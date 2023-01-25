import React, { useState, useEffect } from "react";
import { getDatosNavesVehi } from "./biblioteca/getDatosApi.js";



function DatosNaves(props) {
    
    var datos = [];

    const [clasesNaves, setClaseDatosNaves] = useState(`noClickedNaves`);
    const [naves, setNaves] = useState(datos);

    useEffect(()=>{
        //Guardamos los datos en su useState correspondiente.
       getDatosNavesVehi(props.arrayNaves, setNaves);
       

    },[datos]);

    



    return(

        <React.Fragment>
            <div id="divInfoNaves" onClick = {(evento) =>{
            if (evento.target.tagName == `P`) {
                
                if (evento.target.className == `noClickedNaves`) {
                    setClaseDatosNaves(`clickedNaves`);

                }
                if (evento.target.className == `clickedNaves`) {
                    setClaseDatosNaves(`noClickedNaves`);
                }
            }

            }}>
            
            <p 
                    className={clasesNaves}
                >
                Naves 

            </p>

        {naves.map((v,i,a) => {

            return (
            <div key={i}>

                <div className={clasesNaves}>
                    <p>Nombre: {v.name}</p>
                    <p>Modelo: {v.model}</p>
                    <p>Manufacturado: {v.manufacturer}</p>
                    <p>Coste en creditos: {v.cost_in_credits}</p>
                    <p>Largo: {v.length}</p>
                    <p>Capacidad de carga: {v.cargo_capacity}</p>
                    <p>Clase de nave: {v.starship_class}</p>

                </div>
               
            </div>




            )


        })}


            





        </div>




            
        </React.Fragment>


    );


}

export default DatosNaves;