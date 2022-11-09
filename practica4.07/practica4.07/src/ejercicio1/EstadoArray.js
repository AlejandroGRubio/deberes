import React, { useState } from "react";



function EstadoArray(props) {
    
    

    const estadoArrayInit = [];

    const [numeros, setNumeros] = useState(estadoArrayInit);

    const generarNumero = () => {

       
        var num;
        if (numeros.length == 99) {
            num = `Ya no hay más números.`
        }
        else{
            do {
                
                num = Math.floor(Math.random() * 99) +1;
    
            } while (numeros.indexOf(num)!==-1);
        }

        setNumeros([...numeros, num]);
    };

    const eliminarNumeros = () => {
        setNumeros(estadoArrayInit);
    };

    const eliminarNumero = (elimNum) => {

        const nuevosNumeros = numeros.filter((numero) => {
            return numero !== elimNum;
        });
        
        setNumeros(nuevosNumeros);


    };




    return(

        <React.Fragment>    
            <div>

                <p>
                    <ul>
                        {numeros.map((numero) => {
                            return <li onClick={() => eliminarNumero(numero)} key={numero}>{numero}</li>
                        })}


                    </ul>
                    
                
                
                </p>
                
                <button onClick={() => {generarNumero()}}>Generar</button>
                <button onClick={() => {eliminarNumeros()}}>Eliminar</button>






            </div>
        </React.Fragment>




    );



}

export default EstadoArray;