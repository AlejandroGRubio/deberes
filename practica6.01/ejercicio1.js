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
import { devolverDoc } from "./biblioteca/sacarDatos.js";

window.onload = () => {


    const db = getFirestore(app);

    const listaColeccion = collection(db, "productos");

    const documentoFire = devolverDoc(listaColeccion);

    console.log(documentoFire);













} //Fin de onload.