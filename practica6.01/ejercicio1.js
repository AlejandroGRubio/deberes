"use strict";
import { app } from "./biblioteca/conexion.js";
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    onSnapshot,
    doc,
    query,
    where,
    orderBy,
    limit,
  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { imprimirDatosFiltro, imprimirDatosOrdenar, imprimirTodosLosDatos } from "./biblioteca/sacarDatos.js";

window.onload = () => {

  var doc = window.document;

  const db = getFirestore(app);

  //Imprime los datos de la base de datos al cargar la página.
  imprimirTodosLosDatos(db, "productos", "allProducts");

  //Añade un evento al botón Buscar.
  doc.getElementById(`buscarDatos`).addEventListener(`click`, () => {

    doc.getElementById(`allProducts`).className = `oculto`;

    if (doc.getElementById(`nombre`).checked == true) {
      imprimirDatosFiltro(db, `productos`, `productsFilter`, `Nombre`);
    }
    else if (doc.getElementById(`precio`).checked == true) {
      imprimirDatosFiltro(db, `productos`, `productsFilter`, `Precio`);
    }
    else if(doc.getElementById(`peso`).checked == true){
      imprimirDatosFiltro(db, `productos`, `productsFilter`, `Peso`);
    }

  });

  //Añade el evento a los botones de Ordenar Por.
  doc.getElementById(`ordenar`).addEventListener(`click`, (e) => {

    if (e.target.tagName == `BUTTON`) {

      doc.getElementById(`allProducts`).className = `oculto`;

      if (e.target.id == `ordenarNombre`) {
        imprimirDatosOrdenar(db, `productos`, `productsFilter`, `Nombre`);
      }
      else if (e.target.id == `ordenarPrecio`) {
        imprimirDatosOrdenar(db, `productos`, `productsFilter`, `Precio`);
      }
      else if(e.target.id == `ordenarPeso`){
        imprimirDatosOrdenar(db, `productos`, `productsFilter`, `Peso`);
      }
    }
  });

  //Añade el evento al botón Restablecer Datos.
  doc.getElementById(`restaurarDatos`).addEventListener(`click`, () => {

    doc.getElementById(`productsFilter`).innerHTML = ``;
    
    
    doc.getElementById(`allProducts`).className = ``;

  });
    













} //Fin de onload.