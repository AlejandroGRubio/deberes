"use strict";

import { crearUsuario, iniciarSesion } from "./autentificacion.js";
import { generarId } from "./otrasFunciones.js";
import { anyadirALaBase, editarDatos } from "./sacarDatos.js";



//Con la lista, da formato y lo imprime en la ubicación seleccionada.
export function mostrarDatos(lista, idUbi){

    var doc = window.document;

    var ubi = doc.getElementById(idUbi);

    lista.docs.map((docu) => {

        var cuerpo = doc.createElement(`div`);
        cuerpo.setAttribute(`id`, docu.id);
  
  
        var nombre = doc.createElement(`p`);
  
        nombre.innerHTML = `Nombre: ${docu.data().Nombre}`;
  
  
        var desc = doc.createElement(`p`);
  
        desc.innerHTML = `Descripción: ${docu.data().Descripcion}`;
  
  
        var precio = doc.createElement(`p`);
  
        precio.innerHTML = `Precio: ${docu.data().Precio}`;
  
  
        var peso = doc.createElement(`p`);
  
        peso.innerHTML = `Peso: ${docu.data().Peso}`;
  
  
        var imagen = doc.createElement(`img`);
  
        imagen.setAttribute(`src`, docu.data().Imagen);

        var botonEditar = doc.createElement(`button`);

        botonEditar.innerText = `Editar`;

        var botonEliminar = doc.createElement(`button`);

        botonEliminar.innerText = `Eliminar`;
  
  
        cuerpo.appendChild(nombre);

        cuerpo.appendChild(desc);

        cuerpo.appendChild(precio);

        cuerpo.appendChild(peso);

        cuerpo.appendChild(imagen);

        cuerpo.appendChild(botonEditar);

        cuerpo.appendChild(botonEliminar);


        ubi.appendChild(cuerpo);
        

      });
}

//Con la lista y según el filtro con el nombre, da formato y lo imprime en la ubicación seleccionada.
export function mostrarDatosNombre(lista, idUbi){

  var doc = window.document;

  var ubi = doc.getElementById(idUbi);

  ubi.innerHTML = ``;

  var filtro = doc.getElementById(`formDatos`).value;

  if (filtro == ``) {
    var noDatos = doc.createElement(`p`);
    noDatos.setAttribute(`id`, `noDatos`);
    noDatos.innerHTML=`No se han introducido datos para el filtro.`
    ubi.appendChild(noDatos);
  }
  else{

    var datosResul = doc.createElement(`p`);
    datosResul.setAttribute(`id`, `datosResul`);
    datosResul.innerHTML = `Los resultados del filtro por nombre de ${filtro} son:`;
    ubi.appendChild(datosResul);

    lista.docs.map((docu) => {

      if (docu.data().Nombre == filtro) {
        var cuerpo = doc.createElement(`div`);
        cuerpo.setAttribute(`id`, docu.id);


        var nombre = doc.createElement(`p`);

        nombre.innerHTML = `Nombre: ${docu.data().Nombre}`;


        var desc = doc.createElement(`p`);

        desc.innerHTML = `Descripción: ${docu.data().Descripcion}`;


        var precio = doc.createElement(`p`);

        precio.innerHTML = `Precio: ${docu.data().Precio}`;


        var peso = doc.createElement(`p`);

        peso.innerHTML = `Peso: ${docu.data().Peso}`;


        var imagen = doc.createElement(`img`);

        imagen.setAttribute(`src`, docu.data().Imagen);

        var botonEditar = doc.createElement(`button`);

        botonEditar.innerText = `Editar`;

        var botonEliminar = doc.createElement(`button`);

        botonEliminar.innerText = `Eliminar`;


        cuerpo.appendChild(nombre);

        cuerpo.appendChild(desc);

        cuerpo.appendChild(precio);

        cuerpo.appendChild(peso);

        cuerpo.appendChild(imagen);

        cuerpo.appendChild(botonEditar);

        cuerpo.appendChild(botonEliminar);


        ubi.appendChild(cuerpo);
      
      }
    });

  }

  doc.getElementById(`formDatos`).value = ``;

}

//Con la lista y según el filtro con el precio, da formato y lo imprime en la ubicación seleccionada.
export function mostrarDatosPrecio(lista, idUbi) {

  var doc = window.document;

  var ubi = doc.getElementById(idUbi);

  ubi.innerHTML = ``;


  var filtro = parseFloat(doc.getElementById(`formDatos`).value, 10);

  if (doc.getElementById(`formDatos`).value == ``) {
    var noDatos = doc.createElement(`p`);
    noDatos.setAttribute(`id`, `noDatos`);
    noDatos.innerHTML=`No se han introducido datos para el filtro.`
    ubi.appendChild(noDatos);
  }
  else{

    var datosResul = doc.createElement(`p`);
    datosResul.setAttribute(`id`, `datosResul`);
    datosResul.innerHTML = `Los resultados del filtro por precio de ${filtro} son:`;
    ubi.appendChild(datosResul);

    lista.docs.map((docu) => {

      if (docu.data().Precio <= filtro) {
        var cuerpo = doc.createElement(`div`);
        cuerpo.setAttribute(`id`, docu.id);


        var nombre = doc.createElement(`p`);

        nombre.innerHTML = `Nombre: ${docu.data().Nombre}`;


        var desc = doc.createElement(`p`);

        desc.innerHTML = `Descripción: ${docu.data().Descripcion}`;


        var precio = doc.createElement(`p`);

        precio.innerHTML = `Precio: ${docu.data().Precio}`;


        var peso = doc.createElement(`p`);

        peso.innerHTML = `Peso: ${docu.data().Peso}`;


        var imagen = doc.createElement(`img`);

        imagen.setAttribute(`src`, docu.data().Imagen);

        var botonEditar = doc.createElement(`button`);

        botonEditar.innerText = `Editar`;

        var botonEliminar = doc.createElement(`button`);

        botonEliminar.innerText = `Eliminar`;


        cuerpo.appendChild(nombre);

        cuerpo.appendChild(desc);

        cuerpo.appendChild(precio);

        cuerpo.appendChild(peso);

        cuerpo.appendChild(imagen);

        cuerpo.appendChild(botonEditar);

        cuerpo.appendChild(botonEliminar);


        ubi.appendChild(cuerpo);
      
      }
    });

  }

  doc.getElementById(`formDatos`).value = ``;

} 

//Con la lista y según el filtro con el peso, da formato y lo imprime en la ubicación seleccionada.
export function mostrarDatosPeso(lista, idUbi) {

  var doc = window.document;

  var ubi = doc.getElementById(idUbi);

  ubi.innerHTML = ``;


  var filtro = parseFloat(doc.getElementById(`formDatos`).value, 10);

  if (doc.getElementById(`formDatos`).value == ``) {
    var noDatos = doc.createElement(`p`);
    noDatos.setAttribute(`id`, `noDatos`);
    noDatos.innerHTML=`No se han introducido datos para el filtro.`
    ubi.appendChild(noDatos);
  }
  else{

    var datosResul = doc.createElement(`p`);
    datosResul.setAttribute(`id`, `datosResul`);
    datosResul.innerHTML = `Los resultados del filtro por peso de ${filtro} son:`;
    ubi.appendChild(datosResul);

    lista.docs.map((docu) => {

      if (docu.data().Peso <= filtro) {
        var cuerpo = doc.createElement(`div`);
        cuerpo.setAttribute(`id`, docu.id);


        var nombre = doc.createElement(`p`);

        nombre.innerHTML = `Nombre: ${docu.data().Nombre}`;


        var desc = doc.createElement(`p`);

        desc.innerHTML = `Descripción: ${docu.data().Descripcion}`;


        var precio = doc.createElement(`p`);

        precio.innerHTML = `Precio: ${docu.data().Precio}`;


        var peso = doc.createElement(`p`);

        peso.innerHTML = `Peso: ${docu.data().Peso}`;


        var imagen = doc.createElement(`img`);

        imagen.setAttribute(`src`, docu.data().Imagen);

        var botonEditar = doc.createElement(`button`);

        botonEditar.innerText = `Editar`;

        var botonEliminar = doc.createElement(`button`);

        botonEliminar.innerText = `Eliminar`;


        cuerpo.appendChild(nombre);

        cuerpo.appendChild(desc);

        cuerpo.appendChild(precio);

        cuerpo.appendChild(peso);

        cuerpo.appendChild(imagen);

        cuerpo.appendChild(botonEditar);

        cuerpo.appendChild(botonEliminar);


        ubi.appendChild(cuerpo);
      
      }
    });

  }

  doc.getElementById(`formDatos`).value = ``;

} 

//Genera un formulario y manda un objeto con los datos añadidos al formulario.
export function generarFormularioYDevolverDatos(db, nomBase, idUbi, objProd) {

  var doc = window.document;

  var formulario = doc.createElement(`div`);

  var idRan = generarId(5);

  formulario.id = idRan;

  var idNomEdit = generarId(6);

  var idDescEdit = generarId(6);

  var idPrecioEdit = generarId(6);

  var idPesoEdit = generarId(6);

  var idImagenEdit = generarId(6);

  var datosProductoOriginal = objProd;
  console.log(datosProductoOriginal);

  formulario.innerHTML = `
  </br>
  <label for="${idNomEdit}">Nombre: </label>
  <input type="text" name="${idNomEdit}" id="${idNomEdit}" value= "${datosProductoOriginal.Nombre}">
  </br>
  <label for="${idDescEdit}">Descripción: </label>
  <input type="text" name="${idDescEdit}" id="${idDescEdit}" value= "${datosProductoOriginal.Descripcion}">
  </br>
  <label for="${idPrecioEdit}">Precio: </label>
  <input type="text" name="${idPrecioEdit}" id="${idPrecioEdit}" value= "${datosProductoOriginal.Precio}">
  </br>
  <label for="${idPesoEdit}">Peso: </label>
  <input type="text" name="${idPesoEdit}" id="${idPesoEdit}" value= "${datosProductoOriginal.Peso}">
  </br>
  <label for="${idImagenEdit}">URL Imagen: </label>
  <input type="text" name="${idImagenEdit}" id="${idImagenEdit}" value= "${datosProductoOriginal.Imagen}">
  </br>
  <button id="editarDatos">Guardar</button>
  <button id="cancelarEditarDatos">Cancelar</button>
  `; 

doc.getElementById(idUbi).appendChild(formulario);


doc.getElementById(idRan).addEventListener(`click`, (e) => {


  if (e.target.tagName == `BUTTON`) {
      
    
    if (e.target.innerText == `Guardar`) {
      var nuevosDatos = {
        Nombre: doc.getElementById(idNomEdit).value,
        Descripcion: doc.getElementById(idDescEdit).value,
        Precio: doc.getElementById(idPrecioEdit).value,
        Peso: doc.getElementById(idPesoEdit).value,
        Imagen: doc.getElementById(idImagenEdit).value,
      };

      doc.getElementById(idRan).remove();

      var infor = doc.createElement(`p`);

      infor.innerText = `Recarga la página para mostrar los datos cambiados`;

      doc.getElementById(idUbi).appendChild(infor);

      editarDatos(db, nomBase, idUbi, nuevosDatos);






    }else if(e.target.innerText == `Cancelar`){
      doc.getElementById(idRan).remove();
    }

}

});

  
}

//Guarda los datos del formulario y los pasa en forma de objeto.
export function anyadirNuevosDatos(db, nomBase, idUbi) {
  
  var doc = window.document;

  var nuevosDatos = {
    Nombre: doc.getElementById(`anyadirDatosNombre`).value,
    Descripcion: doc.getElementById(`anyadirDatosDesc`).value,
    Precio: doc.getElementById(`anyadirDatosPrecio`).value,
    Peso: doc.getElementById(`anyadirDatosPeso`).value,
    Imagen: doc.getElementById(`anyadirDatosImagen`).value,
  };

  var infor = doc.createElement(`p`);

  infor.innerText = `Recarga la página para ver los datos añadidos`;

  doc.getElementById(idUbi).appendChild(infor);

  anyadirALaBase(db, nomBase, nuevosDatos);

}


export function crearNuevoUsuario(db, nomBase) {

  var doc = window.document;

  var usuario = doc.getElementById(`crearUsernameReg`).value;
  var correo = doc.getElementById(`crearMailReg`).value;
  var pass = doc.getElementById(`crearPassReg`).value;


  crearUsuario(correo, pass, usuario, db, nomBase);


  
}

export function iniciarSesionUsuario() {

  var doc = window.document;

  var correo = doc.getElementById(`sesionMail`).value;
  var pass = doc.getElementById(`sesionPass`).value;

  iniciarSesion(correo, pass);


  
}