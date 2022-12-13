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
import { mostrarDatos } from "./imprimirDatos.js";


export const imprimirTodosLosDatos = async (db, nomBase, idUbi) => {


  const productos = collection(db, nomBase);

  const productosDocumentos = await getDocs(productos);

  mostrarDatos(productosDocumentos, idUbi);

}

export const imprimirDatosFiltro = async (db, nomBase, idUbi, tipoFiltro) => {

  const productos = collection(db, nomBase);

  const productosDocumentos = await getDocs(productos);

  if (tipoFiltro == `nombre`) {
    console.log(`nombre`);
  }
  else if (tipoFiltro == `precio`) {
    console.log(`precio`);
  }
  else if (tipoFiltro == `peso`) {
    console.log(`peso`);
  }


}