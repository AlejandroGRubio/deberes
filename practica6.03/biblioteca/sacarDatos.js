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
import { verificarPermisosUsuario } from "./autentificacion.js";
import { generarFormularioListaYDevolverDatos, generarFormularioYDevolverDatos, mostrarDatos, mostrarDatosInicioSesion, mostrarDatosNombre, mostrarDatosPeso, mostrarDatosPrecio, mostrarListas } from "./mostrarDatos.js";


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
  verificarPermisosUsuario(db, `usuarios`);

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
  verificarPermisosUsuario(db, `usuarios`);

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

//Selecciona el producto y lo devuelve para editar en un formulario.
export const devolverProductoYEditar = async (db, nomBase, idProd) => {

  const productos = collection(db, nomBase);

  const ObjProducto = await doc(productos, idProd);

  const ObjProductoFinal = await getDoc(ObjProducto);

  generarFormularioYDevolverDatos(db, nomBase, idProd, ObjProductoFinal.data());


};

//Comprueba el rol del usuario y muestra los datos correspondientes.
export const devolverDatosUsuarioYComprobarPermisos = async (db, nomBase, uid) => {

  const usuarios = collection(db, nomBase);

  const usuarioDoc = doc(usuarios, uid);

  const usuariosDocumentos = await getDoc(usuarioDoc);

  if (usuariosDocumentos.data().rol == `admin`) {
    mostrarDatosInicioSesion();
  }


};
//Muestra las listas de un usuario específico.
export const listarListasDeUsuarios = async (db, nomBase, uid) => {

  const listas = collection(db, nomBase);

  const todasLasListas = await getDocs(listas);

  mostrarListas(todasLasListas, uid);

};
//Indica una lista en específico y permite editar.
export const devolverListaYEditar = async (db, nomBase, idProd) => {

  const listas = collection(db, nomBase);

  const lista = await doc(listas, idProd);

  const listaFinal = await getDoc(lista);

  

  generarFormularioListaYDevolverDatos(db, listaFinal);


};


//Guarda los datos de un producto en la lista.
export const guardarIdProductoEnLista = async (db, idLista, idProducto) => {

  const listas = collection(db, `listas`);

  const editableRef = await doc(listas, idLista);

  const valoresLista = await getDoc(editableRef);


  const productos1 = collection(db, `productos`);

  const producto = await doc(productos1, idProducto);

  const valoresProducto = await getDoc(producto);

  var objProducto = {
    Id: idProducto,
    Nombre: valoresProducto.data().Nombre,
    Precio: valoresProducto.data().Precio,
    Peso: valoresProducto.data().Peso,
  }



  if (valoresLista.data().productos[0] == "1") {

    var datos = [objProducto];

    await updateDoc(editableRef, {productos: datos});
    

  }else{

    var datos = valoresLista.data().productos;

    datos.push(objProducto);

    await updateDoc(editableRef, {productos: datos});




  }

  calcularPesoPrecioTotalLista(db);

  

};

//Muestra datos del objeto añadido.
export const guardarAnyadirProductoPreLista = async (idProducto, db) => {
  
  var docu = window.document;

  const productos1 = collection(db, `productos`);

  const producto = await doc(productos1, idProducto);

  const valoresProducto = await getDoc(producto);

  var objProducto = {
    Id: idProducto,
    Nombre: valoresProducto.data().Nombre,
    Precio: valoresProducto.data().Precio,
    Peso: valoresProducto.data().Peso,
  }
  

  var cuerpo = docu.getElementById('seleccionProductos');


      var cProducto = docu.createElement('div');

      cProducto.setAttribute('id', objProducto.Id);

      var datosNombre = docu.createElement(`p`);

      datosNombre.innerText = `Nombre: ${objProducto.Nombre}`;


      var datosPrecio = docu.createElement('p');

      datosPrecio.setAttribute('class', 'precioListaPro');

      datosPrecio.innerText = `Precio: ${objProducto.Precio}`;


      var datosPeso = docu.createElement(`p`);

      datosPeso.setAttribute(`class`, `pesoListaPro`);

      datosPeso.innerText = `Peso: ${objProducto.Peso}`;


      var limitador = docu.createElement(`p`);
      limitador.innerText = `-----------------------------`;


      cProducto.appendChild(datosNombre);
      cProducto.appendChild(datosPrecio);
      cProducto.appendChild(datosPeso);
      cProducto.appendChild(limitador);

      cuerpo.appendChild(cProducto);

      

}
//Muestra el peso y precio total de una lista.
export const calcularPesoPrecioTotalLista = async (db) => {

  var docu = window.document;

  var listaActual = docu.getElementById(`listaActual`).value;

  const listas = collection(db, `listas`);

  const lista = await doc(listas, listaActual);

  const listaDocumento = await getDoc(lista);

  let totalPrecio = 0;

  let totalPeso = 0;

  if (listaDocumento.data().productos[0] != `1`) {
    listaDocumento.data().productos.map((producto) =>{

      totalPrecio = totalPrecio + parseFloat(producto.Precio);
      totalPeso = totalPeso + parseFloat(producto.Peso, 10);
  
    });
  }

  

  docu.getElementById(`infoDelPeso`).innerText = ``;

  docu.getElementById("ubiPrecioTotal").innerText = ``;
  docu.getElementById("ubiPrecioTotal").innerText = `${totalPrecio} €`;

  docu.getElementById("ubiPesoTotal").innerText = ``;
  docu.getElementById("ubiPesoTotal").innerText = `${totalPeso}`;


  if(totalPeso > 8 ){
    docu.getElementById(`infoDelPeso`).innerText = `Se recomienda usar el coche para recoger la compra.`;
  }

}
