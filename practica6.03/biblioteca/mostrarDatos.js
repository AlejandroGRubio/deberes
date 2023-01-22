"use strict";

import { crearUsuario, eliminarLista, iniciarSesion } from "./autentificacion.js";
import { formatearFecha, generarId } from "./otrasFunciones.js";
import { anyadirALaBase, devolverObjDatosProducto, editarDatos } from "./sacarDatos.js";



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

        var botones = doc.createElement('div');

        var botonEditar = doc.createElement(`button`);

        botonEditar.innerText = `Editar`;

        botonEditar.setAttribute(`class`, `ocultoNoSesion`);

        var botonEliminar = doc.createElement(`button`);

        botonEliminar.innerText = `Eliminar`;

        botonEliminar.setAttribute(`class`, `ocultoNoSesion`);


        var botonAnyadir = doc.createElement(`button`);

        botonAnyadir.innerText = `Añadir`;

        botonAnyadir.setAttribute(`class`, `ocultoNoAnyadir`);

        
        botones.appendChild(botonEditar);
        botones.appendChild(botonEliminar);
        botones.appendChild(botonAnyadir);
        
  
  
        cuerpo.appendChild(nombre);

        cuerpo.appendChild(desc);

        cuerpo.appendChild(precio);

        cuerpo.appendChild(peso);

        cuerpo.appendChild(imagen);

        cuerpo.appendChild(botones);


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

        var botones = doc.createElement('div');

        var botonEditar = doc.createElement(`button`);

        botonEditar.innerText = `Editar`;

        botonEditar.setAttribute(`class`, `ocultoNoSesion`);

        var botonEliminar = doc.createElement(`button`);

        botonEliminar.innerText = `Eliminar`;

        botonEliminar.setAttribute(`class`, `ocultoNoSesion`);


        var botonAnyadir = doc.createElement(`button`);

        botonAnyadir.innerText = `Añadir`;

        botonAnyadir.setAttribute(`class`, `ocultoNoAnyadir`);

        
        botones.appendChild(botonEditar);
        botones.appendChild(botonEliminar);
        botones.appendChild(botonAnyadir);

        cuerpo.appendChild(nombre);

        cuerpo.appendChild(desc);

        cuerpo.appendChild(precio);

        cuerpo.appendChild(peso);

        cuerpo.appendChild(imagen);

        cuerpo.appendChild(botones);


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

        var botones = doc.createElement('div');

        var botonEditar = doc.createElement(`button`);

        botonEditar.innerText = `Editar`;

        botonEditar.setAttribute(`class`, `ocultoNoSesion`);

        var botonEliminar = doc.createElement(`button`);

        botonEliminar.innerText = `Eliminar`;

        botonEliminar.setAttribute(`class`, `ocultoNoSesion`);


        var botonAnyadir = doc.createElement(`button`);

        botonAnyadir.innerText = `Añadir`;

        botonAnyadir.setAttribute(`class`, `ocultoNoAnyadir`);

        
        botones.appendChild(botonEditar);
        botones.appendChild(botonEliminar);
        botones.appendChild(botonAnyadir);


        cuerpo.appendChild(nombre);

        cuerpo.appendChild(desc);

        cuerpo.appendChild(precio);

        cuerpo.appendChild(peso);

        cuerpo.appendChild(imagen);

        cuerpo.appendChild(botones);

        


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

        var botones = doc.createElement('div');

        var botonEditar = doc.createElement(`button`);

        botonEditar.innerText = `Editar`;

        botonEditar.setAttribute(`class`, `ocultoNoSesion`);

        var botonEliminar = doc.createElement(`button`);

        botonEliminar.innerText = `Eliminar`;

        botonEliminar.setAttribute(`class`, `ocultoNoSesion`);


        var botonAnyadir = doc.createElement(`button`);

        botonAnyadir.innerText = `Añadir`;

        botonAnyadir.setAttribute(`class`, `ocultoNoAnyadir`);

        
        botones.appendChild(botonEditar);
        botones.appendChild(botonEliminar);
        botones.appendChild(botonAnyadir);


        cuerpo.appendChild(nombre);

        cuerpo.appendChild(desc);

        cuerpo.appendChild(precio);

        cuerpo.appendChild(peso);

        cuerpo.appendChild(imagen);

        cuerpo.appendChild(botones);



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

export function iniciarSesionUsuario(db) {

  var doc = window.document;

  var correo = doc.getElementById(`sesionMail`).value;
  var pass = doc.getElementById(`sesionPass`).value;

  iniciarSesion(correo, pass, db);
  
}

export function mostrarDatosInicioSesion(){

  var doc = window.document;

  if (doc.getElementsByClassName(`ocultoNoSesion`) != undefined) {
    var datosOcultos = doc.getElementsByClassName(`ocultoNoSesion`);

    var datosOcultosArray = [...datosOcultos];

    datosOcultosArray.map((ocultos)=>{

    ocultos.className = `sesionAdmin`;


  });
  }

}

export function ocultarDatosDeInicioSesion(){

  var doc = window.document;

  if (doc.getElementsByClassName(`formUser`) != undefined) {
    var datosOcultar = doc.getElementsByClassName(`formUser`);

    var datosOcultarArray = [...datosOcultar];

    datosOcultarArray.map((ocultar)=>{

    ocultar.className = `ocultoFormUser`;


  });
  }

  if (doc.getElementsByClassName(`ocultoListas`) != undefined) {
    
    var listasOcultar = doc.getElementsByClassName(`ocultoListas`);

    var listasOcultarArray = [...listasOcultar];

    listasOcultarArray.map((noOcultar)=>{

    noOcultar.className = `verListas`;
  });
  }

}


export function ocultarDatosCerrarSesion(){

    var doc = window.document;

    if (doc.getElementsByClassName('ocultoFormUser') != undefined) {
      
      var datosSinOcultar = doc.getElementsByClassName(`ocultoFormUser`);

      var datosSinOcultarArray = [...datosSinOcultar];

      datosSinOcultarArray.map((ocultar)=>{

      ocultar.className = `formUser`;

      doc.getElementById(`sesionMail`).value = ``;
      doc.getElementById(`sesionPass`).value = ``;

    });

    }

    if (doc.getElementsByClassName('sesionAdmin') != undefined) {
      
      var datosSinOcultar = doc.getElementsByClassName(`sesionAdmin`);

      var datosSinOcultarArray = [...datosSinOcultar];

      datosSinOcultarArray.map((ocultar)=>{

      ocultar.className = `ocultoNoSesion`;

    });
    }

    if (doc.getElementsByClassName('inicioSesion') != undefined) {
      
      var datosSinOcultar = doc.getElementsByClassName(`inicioSesion`);

      var datosSinOcultarArray = [...datosSinOcultar];

      datosSinOcultarArray.map((ocultar)=>{

      ocultar.className = `ocultoInicioSesion`;

    });
    }

    if (doc.getElementsByClassName(`verListas`) != undefined) {
      var datosOcultar = doc.getElementsByClassName(`verListas`);
  
      var datosOcultarArray = [...datosOcultar];
  
      datosOcultarArray.map((ocultar)=>{
  
      ocultar.className = `ocultoListas`;
    });
    }


}

export function mostrarListas(lista, uid) {
  
  var doc = window.document;

  var ubi = doc.getElementById("listadoListasCompra");

  ubi.innerHTML = ``;

  lista.docs.map((docu) => {

    if (docu.data().propietario == uid) {
      
      var cuerpo = doc.createElement(`div`);
      cuerpo.setAttribute(`id`, docu.id);


      var nombre = doc.createElement(`p`);

      var fecha = formatearFecha(docu.data().fechaCreacion);

      nombre.innerHTML = `-> Nombre: ${docu.data().nombreLista} / Fecha Creación: ${fecha}`;

      cuerpo.appendChild(nombre);

      ubi.appendChild(cuerpo);
    }
  });


}

export function generarFormularioListaYDevolverDatos(db, objLista) {

  var doc = window.document;

  var formulario = doc.createElement(`div`);

  var idRan = generarId(5);

  formulario.id = idRan;

  var idNomListaEdit = generarId(6);

  var datosListaOriginal = objLista;
  console.log(datosListaOriginal);


  mostrarBotonAnyadir();


  formulario.innerHTML = `
  </br>
  <input type="text" name="${datosListaOriginal.id}" id="listaActual" class="oculto" value= "${datosListaOriginal.id}">
  <label for="${idNomListaEdit}">Nombre Lista: </label>
  <input type="text" name="${idNomListaEdit}" id="${idNomListaEdit}" value= "${datosListaOriginal.data().nombreLista}">
  </br>
  <div id='seleccionProductos'>
    
  
  </div>
  </br>
  <button id="cancelarEditarListaDatos">Cancelar</button>
  <button id="borraListaDatos">Borrar Lista</button>
  `;

  doc.getElementById(`datosLista`).appendChild(formulario);

  mostrarDatosProductos(datosListaOriginal.data(), db);


doc.getElementById(idRan).addEventListener(`click`, (e) => {


  if (e.target.tagName == `BUTTON`) {
      
    
    if (e.target.innerText == `Borrar Lista`) {
      
      eliminarLista(db, datosListaOriginal.id);


      doc.getElementById(idRan).remove();



    }else if(e.target.innerText == `Cancelar`){

      ocultarBotonAnyadir();
      doc.getElementById(idRan).remove();
    }

}

});

  
}


function mostrarBotonAnyadir() {
  var doc = window.document;

  var datosOcultar = doc.getElementsByClassName(`ocultoNoAnyadir`);
  
      var datosOcultarArray = [...datosOcultar];
  
      datosOcultarArray.map((noOcultar)=>{
  
      noOcultar.className = `mostrarAnyadir`;
    });



}

function ocultarBotonAnyadir() {
  var doc = window.document;

  var datosOcultar = doc.getElementsByClassName(`mostrarAnyadir`);
  
      var datosOcultarArray = [...datosOcultar];
  
      datosOcultarArray.map((ocultar)=>{
  
      ocultar.className = `ocultoNoAnyadir`;
    });



}


export function guardarAnyadirProductoPreLista(idProducto, db) {
  
  var doc = window.document;

  console.log(`pasar ${idProducto}`);

  var objProducto = devolverObjDatosProducto(db, idProducto);

  var objDatosProducto = {
    Nombre: objProducto.Nombre,
    Precio: objProducto.Precio,
    Peso: objProducto.Peso,
  }

  var cuerpo = doc.getElementById('seleccionProductos');


      var cProducto = doc.createElement('div');

      cProducto.setAttribute('id', idProducto);

      var datosNombre = doc.createElement('p');

      datosNombre.innerText = `Nombre: ${objDatosProducto.Nombre}`;


      var datosPrecio = doc.createElement('p');

      datosPrecio.setAttribute('class', 'precioListaPro');

      datosPrecio.innerText = `Precio: ${objDatosProducto.Precio}`;


      var datosPeso = doc.createElement(`p`);

      datosPeso.setAttribute(`class`, `pesoListaPro`);

      datosPeso.innerText = `Peso: ${objDatosProducto.Peso}`;


      var limitador = doc.createElement(`p`);
      limitador.innerText = `-----------------------------`;


      cProducto.appendChild(datosNombre);
      cProducto.appendChild(datosPrecio);
      cProducto.appendChild(datosPeso);
      cProducto.appendChild(limitador);

      cuerpo.appendChild(cProducto);




}


function mostrarDatosProductos(objetoListaProductos, db) {

  var doc = window.document;
  var cuerpo = doc.getElementById('seleccionProductos');

  console.log(objetoListaProductos.productos);


  
  if (objetoListaProductos.productos[0] != "1") {

    var cuerpo = doc.getElementById('seleccionProductos');


    objetoListaProductos.productos.map((producto)=> {


      
      var cProducto = doc.createElement('div');

      cProducto.setAttribute('id', producto);

      //var datosProducto = devolverObjDatosProducto(db, producto, `Nombre`);

      var objProducto = {
        Nombre: devolverObjDatosProducto(db, producto, `Nombre`),
        Precio: devolverObjDatosProducto(db, producto, `Precio`),
        Peso: devolverObjDatosProducto(db, producto, `Peso`),
      }

      //console.log(datosProducto);

      var datosNombre = doc.createElement('p');

      datosNombre.innerText = `Nombre: ${objProducto.Nombre}`;


      var datosPrecio = doc.createElement('p');

      datosPrecio.setAttribute('class', 'precioListaPro');

      datosPrecio.innerText = `Precio: ${objProducto.Precio}`;


      var datosPeso = doc.createElement(`p`);

      datosPeso.setAttribute(`class`, `pesoListaPro`);

      datosPeso.innerText = `Peso: ${objProducto.Peso}`;


      var limitador = doc.createElement(`p`);
      limitador.innerText = `-----------------------------`;


      cProducto.appendChild(datosNombre);
      cProducto.appendChild(datosPrecio);
      cProducto.appendChild(datosPeso);
      cProducto.appendChild(limitador);

      cuerpo.appendChild(cProducto);




    });

    


    

    







  }





}

