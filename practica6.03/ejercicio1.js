"use strict";

//User = admin@admin.es
//Password = 123456

//User = juan@juan.es
//Password = 123456

//Reglas
/*

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /productos/{document=**} {
      allow read: if true;
      allow update, delete, create: if request.auth != null && get(/databases/$(database)/documents/usuarios/$(request.auth.uid)).data.rol == "admin";
    }
    match /usuarios/{document=**}{
    	allow create, read: if true;
      allow update, delete: if request.auth != null && get(/databases/$(database)/documents/usuarios/$(request.auth.uid)).data.rol == "admin";
    }
    match /listas/{document=**}{
    	allow create, read, update, delete: if request.auth != null;
      
    }
  }
}

*/






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
import { borrarDato, devolverListaYEditar, devolverProductoYEditar, guardarAnyadirProductoPreLista, guardarIdProductoEnLista, imprimirDatosFiltro, imprimirDatosOrdenar, imprimirTodosLosDatos, mediaPrecioProductos, numProductos } from "./biblioteca/sacarDatos.js";
import { anyadirNuevosDatos, crearNuevoUsuario, iniciarSesionUsuario, ocultarDatosCerrarSesion } from "./biblioteca/mostrarDatos.js";
import { anyadirNuevaLista, cerrarSesion, verificarPermisosUsuario } from "./biblioteca/autentificacion.js";

window.onload = () => {

  var doc = window.document;

  const db = getFirestore(app);

  cerrarSesion();

  


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

    verificarPermisosUsuario(db, `usuarios`);

  });
    
  //Añade los eventos a los botones para editar, eliminar y añadir para allProducts.
  doc.getElementById(`allProducts`).addEventListener(`click`, (e) => {


    if (e.target.tagName == `BUTTON`) {
      
    
        if (e.target.innerText == `Editar`) {
          devolverProductoYEditar(db, `productos`, e.target.parentNode.parentNode.id);
        }else if(e.target.innerText == `Eliminar`){
          borrarDato(db, `productos`, e.target.parentNode.parentNode.id);
        }else if(e.target.innerText == `Añadir`){
          
          guardarAnyadirProductoPreLista(e.target.parentNode.parentNode.id, db);
          guardarIdProductoEnLista(db, doc.getElementById("listaActual").value, e.target.parentNode.parentNode.id);
        }
    
    }

  });
  //Añade los eventos a los botones para editar, eliminar y añadir para productsFilter.
  doc.getElementById(`productsFilter`).addEventListener(`click`, (e) => {


    if (e.target.tagName == `BUTTON`) {
      
    
        if (e.target.innerText == `Editar`) {

          if (doc.getElementById(`allProducts`) != undefined) {
            doc.getElementById(`allProducts`).remove();
          }
          devolverProductoYEditar(db, `productos`, e.target.parentNode.parentNode.id);
        }else if(e.target.innerText == `Eliminar`){
          if (doc.getElementById(`allProducts`) != undefined) {
            doc.getElementById(`allProducts`).remove();
          }
          borrarDato(db, `productos`, e.target.parentNode.parentNode.id);
        }else if(e.target.innerText == `Añadir`){
          guardarAnyadirProductoPreLista(e.target.parentNode.parentNode.id, db);
          guardarIdProductoEnLista(db, doc.getElementById("listaActual").value, e.target.parentNode.parentNode.id);
        }
        
    
    }

  });

//Añade el evento para mostrar para añadir datos.
  doc.getElementById(`botonMostrarAnyadirDatos`).addEventListener(`click`, () => {

    if (doc.getElementById(`anyadirDatos`).className == `mostrarAnyadirDatos`) {
      doc.getElementById(`anyadirDatos`).className = `oculto`;
    }
    else if(doc.getElementById(`anyadirDatos`).className == `oculto`){
      doc.getElementById(`anyadirDatos`).className = `mostrarAnyadirDatos`;
    }

  })

//Añade el evento para añadir datos.
  doc.getElementById(`anyadirDatos`).addEventListener(`click`, (e) => {


    if (e.target.tagName == `BUTTON`) {
      

      if (e.target.innerText == `Guardar`) {
        anyadirNuevosDatos(db, `productos`, e.target.parentNode.id);
      }




    }


  });

//Añade el evento para registrar un usuario.
  doc.getElementById(`formCrearUsuarios`).addEventListener(`click`, (e) => {

    if (e.target.tagName == `BUTTON`) {
      
      if (e.target.innerText == `Registrarse`) {
        crearNuevoUsuario(db, `usuarios`);
      }

    }

  });
//Añade el evento para iniciar sesion.
  doc.getElementById(`formIniciarSesion`).addEventListener(`click`, (e) => {

    if (e.target.tagName == `BUTTON`) {
      
      if (e.target.innerText == `Iniciar Sesión`) {
        iniciarSesionUsuario(db);
      }

    }

  });
//Añade el evento para cerrar sesion.
  doc.getElementById('cerrarSesion').addEventListener('click', (e) => {

    if (e.target.tagName == 'BUTTON') {
      
      if (e.target.innerText == `Cerrar Sesión`) {
        ocultarDatosCerrarSesion();
      }



    }


  });
//Añade los eventos para la lista de la compra.
  doc.getElementById(`listaDeLaCompra`).addEventListener(`click`, (e) => {

    if (e.target.tagName == 'BUTTON') {
      
      if (e.target.innerText == `Ver Listas`) {
        if (doc.getElementById(`listadoListasCompra`).className == `noPulsadoVerListas`) {
          doc.getElementById(`listadoListasCompra`).className = `pulsadoVerListas`;
        }
        else if (doc.getElementById(`listadoListasCompra`).className == `pulsadoVerListas`) {
          doc.getElementById(`listadoListasCompra`).className = `noPulsadoVerListas`
        }
        
      }

      if (e.target.innerText == `Añadir Lista`) {
        if (doc.getElementById(`formularioAnyadirLista`).className == `oculto`) {
          doc.getElementById(`formularioAnyadirLista`).className = `verAnyadirLista`;
        }
        else if (doc.getElementById(`formularioAnyadirLista`).className == `verAnyadirLista`) {
          doc.getElementById(`formularioAnyadirLista`).className = `oculto`;
        }
        
      }

      if (e.target.innerText == `Guardar Lista`) {
        anyadirNuevaLista(db, `listas`);
        doc.getElementById(`anyadirListaNombre`).value = ``;
      }


    }

    



  });

//Añade el evento para listar las listas de la compra.
  doc.getElementById(`listadoListasCompra`).addEventListener(`click`, (e) => {

    if (e.target.tagName == `P`) {
      devolverListaYEditar(db, `listas`, e.target.parentNode.id);
    }


  });



//Indica el número de productos.
  numProductos(db, `productos`, `infoNumProduc`);

//Indica la media de los productos.
  mediaPrecioProductos(db, `productos`, `precioMedioProduc`);





} //Fin de onload.