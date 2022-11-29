import React, { useState, useEffect } from "react";

function Colorines() {
    
    const valorInicial = "#FFFFFF";

    const [colorFondo, setColorFondo] = useState(valorInicial);



    //Genera un color aleatorio y lo guarda.
    function generarColor(){


        var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    
        var color = `#`;
    
        for (let i = 0; i < 6; i++) {
            
            color = `${color}${letras[Math.floor(Math.random() * 16)]}`;
    
    
    
        }
    
        setColorFondo(color);
    
    }
    //Añade un addEventListener, para que cuando le damos clic, genere un nuevo color.
    useEffect(()=>{


        window.addEventListener("click", generarColor);

        return() => {
            window.removeEventListener("click", generarColor);
        };


    }, []);

    //Cuando cambia el color, se actualiza y cambia el color de fondo.
    useEffect(()=>{
        document.body.style.backgroundColor = colorFondo;
    }, [colorFondo]);

    return(

        <React.Fragment>
                
        </React.Fragment>



    );




}

export default Colorines;