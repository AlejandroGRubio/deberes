import React, {useState} from "react";
import * as biblioN from "./Biblioteca/biblioNum.js";
import "./css/euromillon.css";


function Euromillon(props) {
  
    const respuestaCorrecta = [5, 45, 21, 34, 27, 6, 12];

    const boletoInicial = [];

    const [boleto, setBoleto] = useState(boletoInicial);

    
    //Genera los números del boleto, comprueba si es ganador o no y lo guarda.
    const generarNum = () => {

        var numGen = [biblioN.generarNumero(1, 50), biblioN.generarNumero(1, 50), biblioN.generarNumero(1, 50), biblioN.generarNumero(1, 50), biblioN.generarNumero(1, 50), biblioN.generarNumero(1, 12), biblioN.generarNumero(1, 12)];
        var ganar = ``;

        if (biblioN.comprobarArraysIguales(numGen, respuestaCorrecta)) {
            ganar = `ganador`;
        }
        else{
            ganar = `perdedor`;
        }

        numGen = [...numGen, ganar];

        setBoleto([...boleto,{num1: numGen[0], num2: numGen[1], num3: numGen[2], num4: numGen[3], num5: numGen[4], est1: numGen[5], est2: numGen[6], clase: numGen[7]}]);
        

    };







    return(

        <React.Fragment>
            <div>

                <button onClick={() => {generarNum()}}>
                    Generar
                </button>


                <p>
                    <ul>
                        {boleto.map((boletos) => {
                            return <li className={boletos.clase}>{boletos.num1},{boletos.num2},{boletos.num3},{boletos.num4},{boletos.num5}-{boletos.est1},{boletos.est2}</li>
                        })}


                    </ul>
                </p>






            </div>


        </React.Fragment>



    );



}


export default Euromillon;