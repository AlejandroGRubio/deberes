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

        setBoleto([...boleto,numGen]);
        

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
                            return <li className={boletos[7]}>{boletos[0]},{boletos[1]},{boletos[2]},{boletos[3]},{boletos[4]}-{boletos[5]},{boletos[6]}</li>
                        })}


                    </ul>
                </p>






            </div>


        </React.Fragment>



    );



}


export default Euromillon;