import React, {useState} from "react";
import * as biblioN from "./Biblioteca/biblioNum.js";



function Euromillon(props) {
  
    const respuestaCorrecta = [5, 45, 21, 34, 27, 6, 12];

    const boletoInicial = {
        "numeros": [
            {
                "num1": ``,
                "num2": ``,
                "num3": ``,
                "num4": ``,
                "num5": ``,

                "estrella1": ``,
                "estrella2": ``,

                "id": ``,
            },
        ]
            
    };

    const [boleto, setBoleto] = useState(boletoInicial);

    

    const generarNum = () => {

        var numGen = [biblioN.generarNumero(1, 50), biblioN.generarNumero(1, 50), biblioN.generarNumero(1, 50), biblioN.generarNumero(1, 50), biblioN.generarNumero(1, 50), biblioN.generarNumero(1, 12), biblioN.generarNumero(1, 12)];
        var ganar = ``;
        console.log(numGen);

        if (biblioN.comprobarArraysIguales(numGen, respuestaCorrecta)) {
            ganar = `ganador`;
        }
        else{
            ganar = `perdedor`;
        }

        numGen = [...numGen, ganar];
        

    };







    return(

        <React.Fragment>
            <div>

                <button>
                    Generar
                </button>


                <p>

                </p>






            </div>


        </React.Fragment>



    );



}


export default Euromillon;