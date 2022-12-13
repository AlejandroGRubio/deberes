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
import { imprimirTodosLosDatos } from "./biblioteca/sacarDatos.js";

window.onload = () => {


    const db = getFirestore(app);

    //const listaColeccion = collection(db, "productos");

    //const documentoFire = devolverDoc(listaColeccion, `datos`);


  imprimirTodosLosDatos(db, "productos", "allProducts");



    













} //Fin de onload.