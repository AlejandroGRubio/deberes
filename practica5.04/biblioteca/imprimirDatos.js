"use strict";
import { devolverDatoPersonaje } from "./devolverDatos.js";




export function imprimirListaPelis(lista, idUbi) {
    
    var doc = window.document;

    var ul = doc.createElement(`ul`);

    lista.map((nombrePelis)=> {

        var li = doc.createElement(`li`);

        li.innerHTML = `${nombrePelis.episode_id} - ${nombrePelis.title}`;

        li.setAttribute(`class`, `noClicked`);

        ul.appendChild(li);

    });

    doc.getElementById(idUbi).appendChild(ul);

}

export function imprimirDatosPelis(nombrePeli, lista, idUbi) {
     
    var doc = window.document;

    var cuerpo = doc.createElement(`div`);

    cuerpo.setAttribute(`class`, `mostrarInfo`);

    var codId = nombrePeli.charAt(0);



    lista.map((datosPelis) => {

        if (datosPelis.episode_id == codId) {

            var titulo = doc.createElement(`h1`);

            titulo.innerHTML = `${datosPelis.episode_id} - ${datosPelis.title}`;

            var sinopsis = doc.createElement(`p`);

            sinopsis.innerHTML = datosPelis.opening_crawl;

            var director = doc.createElement(`p`);

            director.innerHTML = `Director: ${datosPelis.director}`;

            var productor = doc.createElement(`p`);

            productor.innerHTML = `Productor: ${datosPelis.producer}`;

            var numerosFechaMal = datosPelis.release_date;

            var numerosFechaBien = `${numerosFechaMal.charAt(8)}${numerosFechaMal.charAt(9)}-${numerosFechaMal.charAt(5)}${numerosFechaMal.charAt(6)}-${numerosFechaMal.charAt(0)}${numerosFechaMal.charAt(1)}${numerosFechaMal.charAt(2)}${numerosFechaMal.charAt(3)}`;

            var fecha = doc.createElement(`p`);

            fecha.innerHTML = `Fecha de lanzamiento: ${numerosFechaBien}`;

            var personajes = doc.createElement(`p`);

            personajes.innerHTML = `Personajes`;

            personajes.setAttribute(`id`, `personajes`);

            cuerpo.appendChild(titulo);
            cuerpo.appendChild(sinopsis);
            cuerpo.appendChild(director);
            cuerpo.appendChild(productor);
            cuerpo.appendChild(fecha);
            cuerpo.appendChild(personajes);

            doc.getElementById(idUbi).appendChild(cuerpo);

            imprimirDatosPersonajes(datosPelis);

        }
       

    });

}


function imprimirDatosPersonajes(obj) {
    

    var doc = window.document;

    var contar = 0;

    let array = obj.characters;

    var cuerpo = doc.createElement(`div`);

    cuerpo.setAttribute(`id`, `noMostrarInfoPersonajes`);



    while (contar < 10) {
        
        var datosPersonaje = devolverDatoPersonaje(array[contar]);

        var nombre = doc.createElement(`p`);
        nombre.innerHTML = `Nombre: ${datosPersonaje.name}`;

        var cuerpoDatos = doc.createElement(`div`);

        cuerpoDatos.setAttribute(`class`, `noDatosPersonaje`);


        var genero = doc.createElement(`p`);
        genero.innerHTML = `Género: ${datosPersonaje.gender}`;

        var altura = doc.createElement(`p`);
        altura.innerHTML = `Altura: ${datosPersonaje.height}`;

        var peso = doc.createElement(`p`);
        peso.innerHTML = `Peso: ${datosPersonaje.mass}`;

        var colorPelo = doc.createElement(`p`);
        colorPelo.innerHTML = `Color de pelo: ${datosPersonaje.hair_color}`;

        var colorOjos = doc.createElement(`p`);
        colorOjos.innerHTML = `Color de ojos: ${datosPersonaje.eye_color}`;


        
        cuerpoDatos.appendChild(genero);
        cuerpoDatos.appendChild(altura);
        cuerpoDatos.appendChild(peso);
        cuerpoDatos.appendChild(colorPelo);
        cuerpoDatos.appendChild(colorOjos);

        nombre.appendChild(cuerpoDatos);
        cuerpo.appendChild(nombre);


        doc.getElementById(`personajes`).appendChild(cuerpo);

        contar++;



    }





}