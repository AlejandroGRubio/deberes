"use strict";
import * as devolver from "./biblioteca/devolverDatos.js";



window.onload = () => {


    const url = "http://swapi.dev/api/films";

    var doc = window.document;

    devolver.devolverListaPelis(url, `divPelis`);


    doc.getElementById(`divPelis`).addEventListener(`click`, (e) => {

        if (doc.getElementsByClassName(`clicked`) != undefined) {
            
            var selec = doc.getElementsByClassName(`clicked`);
            
            
            for (let i = 0; i < selec.length; i++) {
                selec[i].className = `noClicked`;
                
            }
        }
        
        if (doc.getElementsByClassName(`mostrarInfo`) != undefined) {
            
            var selec = doc.getElementsByClassName(`mostrarInfo`);
            
            
            for (let i = 0; i < selec.length; i++) {
                selec[i].remove();
                
            }
        }

       if (e.target.tagName == `LI`) {
            e.target.className = `clicked`;

        devolver.devolverDatosPelis(e.target.innerText, url, `divInfo`);





       }
       


    });








}//Fin del onload.

