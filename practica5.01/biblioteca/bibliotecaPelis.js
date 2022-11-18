"use strict";

var doc = window.document;

//Con un objeto con las pelis, creamos una lista y la añadimos al lugar donde esté esa id.
export function generarListasPelis(arrObjPelis, idUbi) {

    var listaPelis = doc.createElement(`ul`);

    arrObjPelis.map((pelis) => {

        var apartado = doc.createElement(`li`);

        apartado.innerHTML = `${pelis.episode_id} - ${pelis.title}`;

        apartado.setAttribute(`class`, `noClicked`);


        listaPelis.appendChild(apartado);



    });

    doc.getElementById(idUbi).appendChild(listaPelis);


}

//Creamos el apartado con la info de la pelicula seleccionada y le añadimos los datos de la misma, para luego añadirla donde indica el id.
export function generarInfoPelis(nombrePeli, objPelis, idUbi) {
    
    if (doc.getElementsByClassName(`mostrarInfo`) != undefined) {
            
        var selec = doc.getElementsByClassName(`mostrarInfo`);
        
        
        for (let i = 0; i < selec.length; i++) {
            selec[i].remove();
            
        }
    }

    var cuerpo = doc.createElement(`div`);

    var codId = nombrePeli.charAt(0);

    cuerpo.setAttribute(`class`, `mostrarInfo`);

    objPelis.map((infoPelis) => {

        if (infoPelis.episode_id == codId) {

            var titulo = doc.createElement(`h1`);

            titulo.innerHTML = infoPelis.title;

            var sinopsis = doc.createElement(`p`);

            sinopsis.innerHTML = infoPelis.opening_crawl;

            var director = doc.createElement(`p`);

            director.innerHTML = `Director: ${infoPelis.director}`;

            var productor = doc.createElement(`p`);

            productor.innerHTML = `Productor: ${infoPelis.producer}`;

            var numerosFechaMal = infoPelis.release_date;

            var numerosFechaBien = `${numerosFechaMal.charAt(8)}${numerosFechaMal.charAt(9)}-${numerosFechaMal.charAt(5)}${numerosFechaMal.charAt(6)}-${numerosFechaMal.charAt(0)}${numerosFechaMal.charAt(1)}${numerosFechaMal.charAt(2)}${numerosFechaMal.charAt(3)}`;

            var fecha = doc.createElement(`p`);

            fecha.innerHTML = `Fecha de lanzamiento: ${numerosFechaBien}`;

            cuerpo.appendChild(titulo);
            cuerpo.appendChild(sinopsis);
            cuerpo.appendChild(director);
            cuerpo.appendChild(productor);
            cuerpo.appendChild(fecha);

        }

        console.log(cuerpo);

        doc.getElementById(idUbi).appendChild(cuerpo);


    });







}