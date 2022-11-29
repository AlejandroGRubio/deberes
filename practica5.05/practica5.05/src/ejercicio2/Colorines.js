import React, { useState, useEffect } from "react";

function Colorines() {
    
    const valorInicial = "#FFFFFF";

    const [colorFondo, setColorFondo] = useState(valorInicial);




    function generarColor(){


        var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    
        var color = `#`;
    
        for (let i = 0; i < 6; i++) {
            
            color = `${color}${letras[Math.floor(Math.random() * 16)]}`;
    
    
    
        }
    
        setColorFondo(color);
    
    }

    useEffect(()=>{

        document.body.style.backgroundColor = colorFondo;




    }, [colorFondo]);

    return(

        <React.Fragment>
                <button onClick={generarColor}>Cambiar Color de Fondo</button>
        </React.Fragment>



    );




}

export default Colorines;