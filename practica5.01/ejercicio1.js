"use strict";
import * as biblioPelis from "./biblioteca/bibliotecaPelis.js";



window.onload = () =>{


    const url = "http://swapi.dev/api/films";

    var doc = window.document;

    var divPelis = doc.createElement(`div`);


    divPelis.setAttribute(`id`, `divPelis`);

    var divInfo = doc.createElement(`div`);

    divInfo.setAttribute(`id`, `divInfo`);


    doc.body.appendChild(divPelis);
    doc.body.appendChild(divInfo);



    fetch(url)
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((datos) => {
        console.log(datos.results);
        biblioPelis.generarListasPelis(datos.results, `divPelis`);
      
    });

    doc.getElementById(`divPelis`).addEventListener(`click`, (e) => {

       console.log(e.target.tagName);

        if (doc.getElementsByClassName(`clicked`) != undefined) {
            
            var selec = doc.getElementsByClassName(`clicked`);
            
            
            for (let i = 0; i < selec.length; i++) {
                selec[i].className = `noClicked`;
                
            }
        }

        


       if (e.target.tagName == `LI`) {
            e.target.className = `clicked`;
       }




    });





}//Fin del código onload.

