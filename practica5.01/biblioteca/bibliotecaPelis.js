"use strict";

var doc = window.document;

export function generarListasPelis(arrObjPelis, idUbi) {

    var listaPelis = doc.createElement(`ul`);

    


    arrObjPelis.map((pelis) => {

        var apartado = doc.createElement(`li`);

        apartado.innerHTML = pelis.title;

        apartado.setAttribute(`class`, `noClicked`);


        listaPelis.appendChild(apartado);



    });

    doc.getElementById(idUbi).appendChild(listaPelis);


}