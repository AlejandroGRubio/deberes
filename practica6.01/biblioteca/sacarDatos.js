"use strict";
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


export const devolverDoc = async (coleccion, idUbi) => {


    var datosDocumento = await getDocs(coleccion);

    let datos = document.getElementById(idUbi);

    



}