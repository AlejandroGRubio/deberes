import React, { useState, useEffect } from "react";

function Localizador() {
    
const valorInicial = 0;

const [coorX, setCoorX] = useState(valorInicial);
const [coorY, setCoorY] = useState(valorInicial);

const cambiarCoor = (evento) => {

    setCoorX(evento.clientX);
    setCoorY(evento.clientY);

};

useEffect(() => {

    window.addEventListener("mousemove", cambiarCoor);

    return() => {
        window.removeEventListener("mousemove", cambiarCoor);
    }

}, []);

return(

    <React.Fragment>
        <p>Coordenadas: X: {coorX}, Y: {coorY}</p>
    </React.Fragment>

)



}

export default Localizador;