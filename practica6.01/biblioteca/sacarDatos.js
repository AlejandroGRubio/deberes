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

//Imprime los datos de la base de datos y los muestra.
export const imprimirTodosLosDatos = async (db, nomBase, idUbi) => {


  const productos = collection(db, nomBase);

  const productosDocumentos = await getDocs(productos);

  mostrarDatos(productosDocumentos, idUbi);

}

//Imprime los datos de la base de datos, según el filtro seleccionado.
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

//Imprime los datos de la base de datos, según el orden seleccionado.
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