"use strict";
import * as b from "./biblioPrueba.js";





window.onload = () => {

    var doc = window.document;
    const url = "http://swapi.dev/api/films";

    console.log(1);


    let datos = b.guardarDatos(url);


    const guardarDos = async () => {
        let datos2 = await b.devolverDatos(url);
        b.mostrar(datos2);
        console.log("termina guardar2");
        console.log(datos);

   console.log(2);

   console.log(4);

   b.mostrar(datos2);

    };

    guardarDos();

    console.log(5);
   

}





