import React, { useState } from "react";
import * as bibliLista from "./biblioteca/bibliotecaLista.js";




function ListaCompra(props) {
    

    const listaInicial = [];
    const valoresIniciales = {
        id: "",
        nombre: "",
        descripcion: "",
        precio: "",
        unidades: "",
    };

    const [lista, setLista] = useState(listaInicial);
    const [producto, setProducto] = useState(valoresIniciales);


    const actDato = (e) =>{

        const { name, value } = e.target;

        setProducto({...producto, [name]: value});



    }


    function anyadirLista() {
        
        





    }



    

    return (

        <React.Fragment>
            <div>

               <p>
                   <label htmlFor={"nombrePro"}>Nombre: </label>
                   <input type={"text"} name={"nombrePro"} onChange={actDato} className={''} value={producto.nombre}></input>
               </p>
               <p>
                   <p><label htmlFor={"descPro"}>Descripción: </label></p>
                    
                    <textarea name={"descPro"} rows="8" cols="35" onChange={actDato} className={''} value={producto.descripcion}></textarea>
               </p>
               <p>
                    <label htmlFor={"precioPro"}>Precio: </label>
                    <input type={"number"} name={"precioPro"} onChange={actDato} className={''} value={producto.precio}></input>
               </p>
               <p>
                    <label htmlFor={"unidadesPro"}>Unidades: </label>
                    <input type={"number"} name={"unidadesPro"} onChange={actDato} className={''} value={producto.unidades}></input>
               </p>
               <button id={"añadirButton"} onClick={() => {anyadirLista()}}>Añadir</button>


            </div>
                
            <div>

            </div>




        </React.Fragment>


    );





}

export default ListaCompra;