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
import { mostrarDatos, mostrarDatosNombre, mostrarDatosPeso, mostrarDatosPrecio, ordenarDatosPorNombre, ordenarDatosPorPeso, ordenarDatosPorPrecio } from "./mostrarDatos.js";


export const imprimirTodosLosDatos = async (db, nomBase, idUbi) => {


  const productos = collection(db, nomBase);

  const productosDocumentos = await getDocs(productos);

  mostrarDatos(productosDocumentos, idUbi);

}

export const imprimirDatosFiltro = async (db, nomBase, idUbi, tipoFiltro) => {

  const productos = collection(db, nomBase);

  const productosDocumentos = await getDocs(productos);

  if (tipoFiltro == `nombre`) {
    mostrarDatosNombre(productosDocumentos, idUbi);
  }
  else if (tipoFiltro == `precio`) {
    mostrarDatosPrecio(productosDocumentos, idUbi);
  }
  else if (tipoFiltro == `peso`) {
    mostrarDatosPeso(productosDocumentos, idUbi);
  }


}

export const imprimirDatosOrdenar = async(db, nomBase, idUbi, tipoOrden) => {

  const productos = collection(db, nomBase);

  const productosDocumentos = await getDocs(productos);

  if (tipoOrden == `nombre`) {
    ordenarDatosPorNombre(productosDocumentos, idUbi);
  }
  else if (tipoOrden == `precio`) {
    ordenarDatosPorPrecio(productosDocumentos, idUbi);
  }
  else if (tipoOrden == `peso`) {
    ordenarDatosPorPeso(productosDocumentos, idUbi);
  }


}