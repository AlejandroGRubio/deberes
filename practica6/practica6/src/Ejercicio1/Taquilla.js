import React from "react";
import "../Ejercicio2/Actores";
import Actores from "../Ejercicio2/Actores";




function Taquilla(props) {
    
return (
    <React.Fragment>
        <h1>
            <strong>{props.titulo}</strong>
        </h1>
        <p>
            {props.direccion}
        </p>
        <figure>
            <img src={props.cartelera}></img>
        </figure>
        <p>
            {props.children}
        </p>

        <Actores actor = "Tobey Maguire" foto = "https://media.gq.com.mx/photos/5e457648b925380008d0bf8d/3:4/w_900,h_1200,c_limit/tobey-maguire-sera-spider-man-otra-vez-en-doctor-strange-2.jpg">
        Tobias Vincent Maguire es un actor y productor de cine estadounidense, conocido principalmente por interpretar a Peter Parker en la trilogía de Spider-Man de Sam Raimi y en la vigésimo séptima película del Universo cinematográfico de Marvel, Spider-Man: No Way Home.
        </Actores>

        <Actores actor = "Alfred Molina" foto = "https://decine21.com/img/upload/perfiles/alfred-molina-5185/alfred-molina-2-807-c.jpg">
        Alfred Molina es un actor británico, mayormente conocido por su papel del Doctor Octopus en la película de 2004 Spider-Man 2 y en Spider-Man: No Way Home de 2021.
        </Actores>

    </React.Fragment>


);



}

export default Taquilla;