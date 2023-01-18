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
    updateDoc,
    deleteDoc,
    addDoc,
  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { generarFormularioYDevolverDatos, mostrarDatos, mostrarDatosInicioSesion, mostrarDatosNombre, mostrarDatosPeso, mostrarDatosPrecio } from "./mostrarDatos.js";


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

//Va editando los datos que han sido cambiados.
export const editarDatos = async (db, nomBase, idUbi, nuevosDatos) => {

  const productos = collection(db, nomBase);

  const editableRef = await doc(productos, idUbi);


  if (nuevosDatos.Nombre != "") {
    await updateDoc(editableRef, {Nombre: nuevosDatos.Nombre});
  }

  if (nuevosDatos.Descripcion != "") {
    await updateDoc(editableRef, {Descripcion: nuevosDatos.Descripcion});
  }

  if (nuevosDatos.Precio != "") {
    await updateDoc(editableRef, {Precio: nuevosDatos.Precio});
  }

  if (nuevosDatos.Peso != "") {
    await updateDoc(editableRef, {Peso: nuevosDatos.Peso});
  }

  if (nuevosDatos.Imagen != "") {
    await updateDoc(editableRef, {Imagen: nuevosDatos.Imagen});
  }


}

//Borra el dato de la base de datos.
export const borrarDato = async (db, nomBase, idUbi) => {

  const productos = collection(db, nomBase);
  
  const borrado = await deleteDoc(doc(productos, idUbi));

  var docu = window.document;

  var infor = docu.createElement(`p`);

  infor.innerText = `Recarga la página para dejar de mostrar el producto eliminado`;

  docu.getElementById(idUbi).appendChild(infor);

};


//Añade un dato a la base de datos.
export const anyadirALaBase = async (db, nomBase, nuevosDatos) => {

  const productos = collection(db, nomBase);

  const guardarNuevo = await addDoc(productos, nuevosDatos);

};

//Muestra cuantos productos hay en la base de datos.
export const numProductos = async (db, nomBase, idUbi) => {


  var docu = window.document;

  const productos = collection(db, nomBase);

  const productosDocumentos = await getDocs(productos);

  var numP = productosDocumentos.docs.length;


  var infor = docu.createElement(`p`);

  infor.innerText = `Actualmente hay ${numP} productos.`;

  docu.getElementById(idUbi).appendChild(infor);

};

//Muestra la media de los precios de la base de datos.
export const mediaPrecioProductos = async (db, nomBase, idUbi) => {


  var docu = window.document;

  const productos = collection(db, nomBase);

  const productosDocumentos = await getDocs(productos);

  var numP = productosDocumentos.docs.length;

  var precioTotal = 0;


  productosDocumentos.docs.map((docus) => {

    precioTotal = precioTotal + parseFloat(docus.data().Precio);


  });
  var infor = docu.createElement(`p`);

  infor.innerText = `La media de los precios de los productos son ${precioTotal / numP}.`;

  docu.getElementById(idUbi).appendChild(infor);

};


export const devolverProductoYEditar = async (db, nomBase, idProd) => {

  const productos = collection(db, nomBase);

  const ObjProducto = await doc(productos, idProd);

  const ObjProductoFinal = await getDoc(ObjProducto);

  generarFormularioYDevolverDatos(db, nomBase, idProd, ObjProductoFinal.data());


};


export const devolverDatosUsuarioYComprobarPermisos = async (db, nomBase, uid) => {

  const usuarios = collection(db, nomBase);

  const usuarioDoc = doc(usuarios, uid);

  const usuariosDocumentos = await getDoc(usuarioDoc);

  if (usuariosDocumentos.data().rol == `admin`) {
    mostrarDatosInicioSesion();
  }


};