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
      
      if (e.target.innerText == `Iniciar Sesión`) {
        iniciarSesionUsuario(db);
      }

    }

  });

  doc.getElementById('cerrarSesion').addEventListener('click', (e) => {

    if (e.target.tagName == 'BUTTON') {
      
      if (e.target.innerText == `Cerrar Sesión`) {
        ocultarDatosCerrarSesion();
      }



    }


  });

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


  doc.getElementById(`listadoListasCompra`).addEventListener(`click`, (e) => {

    if (e.target.tagName == `P`) {
      devolverListaYEditar(db, `listas`, e.target.parentNode.id);
    }


  });




//Cambiar var doc en todos los js, por una variable para todos.
//Validar Guarda git.




  numProductos(db, `productos`, `infoNumProduc`);


  mediaPrecioProductos(db, `productos`, `precioMedioProduc`);





} //Fin de onload.