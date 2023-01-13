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
import { borrarDato, devolverProductoYEditar, imprimirDatosFiltro, imprimirDatosOrdenar, imprimirTodosLosDatos, mediaPrecioProductos, numProductos } from "./biblioteca/sacarDatos.js";
import { anyadirNuevosDatos, crearNuevoUsuario, generarFormularioYDevolverDatos, iniciarSesionUsuario } from "./biblioteca/mostrarDatos.js";

window.onload = () => {

  var doc = window.document;

  const db = getFirestore(app);

  //Imprime los datos de la base de datos al cargar la página.
  imprimirTodosLosDatos(db, "productos", "allProducts");

  //Añade un evento al botón Buscar.
  doc.getElementById(`buscarDatos`).addEventListener(`click`, () => {

    doc.getElementById(`allProducts`).className = `oculto`;

    if (doc.getElementById(`nombre`).checked == true) {
      imprimirDatosFiltro(db, `productos`, `productsFilter`, `Nombre`);
    }
    else if (doc.getElementById(`precio`).checked == true) {
      imprimirDatosFiltro(db, `productos`, `productsFilter`, `Precio`);
    }
    else if(doc.getElementById(`peso`).checked == true){
      imprimirDatosFiltro(db, `productos`, `productsFilter`, `Peso`);
    }

  });

  //Añade el evento a los botones de Ordenar Por.
  doc.getElementById(`ordenar`).addEventListener(`click`, (e) => {

    if (e.target.tagName == `BUTTON`) {

      doc.getElementById(`allProducts`).className = `oculto`;

      if (e.target.id == `ordenarNombre`) {
        imprimirDatosOrdenar(db, `productos`, `productsFilter`, `Nombre`);
      }
      else if (e.target.id == `ordenarPrecio`) {
        imprimirDatosOrdenar(db, `productos`, `productsFilter`, `Precio`);
      }
      else if(e.target.id == `ordenarPeso`){
        imprimirDatosOrdenar(db, `productos`, `productsFilter`, `Peso`);
      }
    }
  });

  //Añade el evento al botón Restablecer Datos.
  doc.getElementById(`restaurarDatos`).addEventListener(`click`, () => {

    doc.getElementById(`productsFilter`).innerHTML = ``;
    
    
    doc.getElementById(`allProducts`).className = ``;

  });
    

  doc.getElementById(`allProducts`).addEventListener(`click`, (e) => {


    if (e.target.tagName == `BUTTON`) {
      
    
        if (e.target.innerText == `Editar`) {
          devolverProductoYEditar(db, `productos`, e.target.parentNode.id);
          //generarFormularioYDevolverDatos(db, `productos`, e.target.parentNode.id);
        }else if(e.target.innerText == `Eliminar`){
          borrarDato(db, `productos`, e.target.parentNode.id);
        }
    
    }

  });

  doc.getElementById(`productsFilter`).addEventListener(`click`, (e) => {


    if (e.target.tagName == `BUTTON`) {
      
    
        if (e.target.innerText == `Editar`) {

          if (doc.getElementById(`allProducts`) != undefined) {
            doc.getElementById(`allProducts`).remove();
          }
          devolverProductoYEditar(db, `productos`, e.target.parentNode.id);
          //generarFormularioYDevolverDatos(db, `productos`, e.target.parentNode.id);
        }else if(e.target.innerText == `Eliminar`){
          if (doc.getElementById(`allProducts`) != undefined) {
            doc.getElementById(`allProducts`).remove();
          }
          borrarDato(db, `productos`, e.target.parentNode.id);
        }
    
    }

  });


  doc.getElementById(`botonMostrarAnyadirDatos`).addEventListener(`click`, () => {

    if (doc.getElementById(`anyadirDatos`).className == `mostrarAnyadirDatos`) {
      doc.getElementById(`anyadirDatos`).className = `oculto`;
    }
    else if(doc.getElementById(`anyadirDatos`).className == `oculto`){
      doc.getElementById(`anyadirDatos`).className = `mostrarAnyadirDatos`;
    }

  })


  doc.getElementById(`anyadirDatos`).addEventListener(`click`, (e) => {


    if (e.target.tagName == `BUTTON`) {
      

      if (e.target.innerText == `Guardar`) {
        anyadirNuevosDatos(db, `productos`, e.target.parentNode.id);
      }




    }


  });


  doc.getElementById(`formCrearUsuarios`).addEventListener(`click`, (e) => {

    if (e.target.tagName == `BUTTON`) {
      
      if (e.target.innerText == `Registrarse`) {
        crearNuevoUsuario(db, `usuarios`);
      }

    }

  });

  doc.getElementById(`formIniciarSesion`).addEventListener(`click`, (e) => {

    if (e.target.tagName == `BUTTON`) {
      
      if (e.target.innerText == `IniciarSesion`) {
        iniciarSesionUsuario();
      }

    }

  });









  numProductos(db, `productos`, `infoNumProduc`);


  mediaPrecioProductos(db, `productos`, `precioMedioProduc`);





} //Fin de onload.