"use strict";

import * as atributos from "./biblioteca/anyadirAtributos.js";



window.onload = () => {

    var doc = window.document;
    

    var body = doc.getElementsByTagName(`body`)[0];


    body.appendChild(doc.createElement(`img`));
    body.appendChild(doc.createElement(`img`));


    doc.getElementsByTagName(`img`)[0].setAttribute(`src`, `https://psicologocarlosmoreno.files.wordpress.com/2015/02/bola_pajaro.png`);
    doc.getElementsByTagName(`img`)[1].setAttribute(`src`, `https://www.cleverfiles.com/wp-content/uploads/2020/08/relinkWinDeleteImage.png`);
    doc.getElementsByTagName(`img`)[1].setAttribute(`class`, `soltable`);


    var elementoArrastrado;
    document.addEventListener(
        "dragstart",
        function (evento) {
          elementoArrastrado = evento.target;
    });

    document.addEventListener(
        "dragover",
        function (evento) {
          evento.preventDefault();
        });
 



    
  document.addEventListener(
    "drop",
    function (evento) {
      evento.preventDefault(); 
      if (evento.target.className == "soltable") {
        evento.target.appendChild(
          elementoArrastrado
        );
        evento.target.setAttribute(`src`, `https://findicons.com/files/icons/555/azullustre_trashcans/256/papelera_llena_recycle.png`);
      }
    }
  );


} // Fin del código onload.


