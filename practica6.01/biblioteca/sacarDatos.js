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


export const imprimirTodosLosDatos = async (db, nomBase, idUbi) => {


  var doc = window.document;

  const productos = collection(db, nomBase);

  const productosDocumentos = await getDocs(productos);

  var ubi = doc.getElementById(idUbi);

    productosDocumentos.docs.map((doc) => {

      var cuerpo = doc.createElement(`div`);


      var nombre = doc.createElement(`p`);

      nombre.innerHTML = `Nombre: ${doc.data().Nombre}`;


      var desc = doc.createElement(`p`);

      desc.innerHTML = `Descripción: ${doc.data().Descripcion}`;


      var precio = doc.createElement(`p`);

      precio.innerHTML = `Precio: ${doc.data().Precio}`;


      var peso = doc.createElement(`p`);

      peso.innerHTML = `Peso: ${doc.data().Peso}`;


      var imagen = doc.createElement(`img`);

      imagen.setAttribute(`src`, doc.data().Imagen);


    })








}