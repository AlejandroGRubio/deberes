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
import { mostrarDatos, mostrarDatosNombre, mostrarDatosPeso, mostrarDatosPrecio } from "./mostrarDatos.js";

//Imprime los datos de la base de datos y los muestra.
export const imprimirTodosLosDatos = async (db, nomBase, idUbi) => {


  const productos = collection(db, nomBase);

  const productosDocumentos = await getDocs(productos);

  mostrarDatos(productosDocumentos, idUbi);

}

//Imprime los datos de la base de datos, según el filtro seleccionado.
export const imprimirDatosFiltro = async (db, nomBase, idUbi, tipoFiltro) => {

  const productos = collection(db, nomBase);

  var doc = window.document;

  var filtro = doc.getElementById(`formDatos`).value;


  if (tipoFiltro == `Nombre`) {

    const consulta = await query(productos, where(tipoFiltro, "==", filtro));

    const productosDocumentos = await getDocs(consulta);

    mostrarDatosNombre(productosDocumentos, idUbi);
  }
  else if (tipoFiltro == `Precio`) {

    filtro = parseFloat(doc.getElementById(`formDatos`).value, 10);

    const consulta = await query(productos, where(tipoFiltro, "<=", filtro));

    const productosDocumentos = await getDocs(consulta);

    mostrarDatosPrecio(productosDocumentos, idUbi);
  }
  else if (tipoFiltro == `Peso`) {

    filtro = parseFloat(doc.getElementById(`formDatos`).value, 10);

    const consulta = await query(productos, where(tipoFiltro, "<=", filtro));

    const productosDocumentos = await getDocs(consulta);

    mostrarDatosPeso(productosDocumentos, idUbi);
  }


}

//Imprime los datos de la base de datos, según el orden seleccionado.
export const imprimirDatosOrdenar = async(db, nomBase, idUbi, tipoOrden) => {

  var doc = window.document;

  const productos = collection(db, nomBase);

  var ubi = doc.getElementById(idUbi);

  ubi.innerHTML = ``;

  if (tipoOrden == `Nombre`) {

    const consulta = await query(productos, orderBy(tipoOrden));

    const productosDocumentos = await getDocs(consulta);

    mostrarDatos(productosDocumentos, idUbi);
  }
  else if (tipoOrden == `Precio`) {

    const consulta = await query(productos, orderBy(tipoOrden));

    const productosDocumentos = await getDocs(consulta);

    mostrarDatos(productosDocumentos, idUbi);
  }
  else if (tipoOrden == `Peso`) {

    const consulta = await query(productos, orderBy(tipoOrden));

    const productosDocumentos = await getDocs(consulta);

    mostrarDatos(productosDocumentos, idUbi);
  }


}