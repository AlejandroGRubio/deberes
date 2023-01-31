import React, { useContext, useEffect } from "react";
import { datosContexto } from "./contextos/DatosContexto.js";



function DatosNaves(props) {
    
    const contexto = useContext(datosContexto);



   // useEffect(()=>{

        //Guardamos los datos en su useState correspondiente.
    //      contexto.getDatosNaves(contexto.arrNaves);
      
      
    //},[contexto.arrNaves]);
    



    return(

        <React.Fragment>
            <div id="divInfoNaves" onClick = {(evento) =>{
            if (evento.target.tagName == `P`) {
                
                if (evento.target.className == `noClickedNaves`) {
                    contexto.setClaseDatosNaves(`clickedNaves`);

                }
                if (evento.target.className == `clickedNaves`) {
                    contexto.setClaseDatosNaves(`noClickedNaves`);
                }
            }

            }}>
            
            <p 
                    className={contexto.clasesNaves}
                >
                Naves 

            </p>

        {contexto.naves.map((v,i,a) => {

            return (
            <div key={i}>

                <div className={contexto.clasesNaves}>
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