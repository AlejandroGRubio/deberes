"use strict";



//Con la lista, da formato y lo imprime en la ubicación seleccionada.
export function mostrarDatos(lista, idUbi){

    var doc = window.document;

    var ubi = doc.getElementById(idUbi);

    lista.docs.map((docu) => {

        var cuerpo = doc.createElement(`div`);
  
  
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
  
  
        cuerpo.appendChild(nombre);

        cuerpo.appendChild(desc);

        cuerpo.appendChild(precio);

        cuerpo.appendChild(peso);

        cuerpo.appendChild(imagen);


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


        cuerpo.appendChild(nombre);

        cuerpo.appendChild(desc);

        cuerpo.appendChild(precio);

        cuerpo.appendChild(peso);

        cuerpo.appendChild(imagen);


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


        cuerpo.appendChild(nombre);

        cuerpo.appendChild(desc);

        cuerpo.appendChild(precio);

        cuerpo.appendChild(peso);

        cuerpo.appendChild(imagen);


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


        cuerpo.appendChild(nombre);

        cuerpo.appendChild(desc);

        cuerpo.appendChild(precio);

        cuerpo.appendChild(peso);

        cuerpo.appendChild(imagen);


        ubi.appendChild(cuerpo);
      
      }
    });

  }

  doc.getElementById(`formDatos`).value = ``;

} 



//Con la lista y según el orden con el nombre, da formato y lo imprime en la ubicación seleccionada.
export function ordenarDatosPorNombre(lista, idUbi) {
  
  var datos = [];

  var doc = window.document;

  var ubi = doc.getElementById(idUbi);

  ubi.innerHTML = ``;

  lista.docs.map((docu, id) => {

    datos[id] = {

      Nombre: docu.data().Nombre,
      Desc: docu.data().Descripcion,
      Precio: docu.data().Precio,
      Peso: docu.data().Peso,
      Imagen: docu.data().Imagen,

    }
  });

  datos.sort((x, y) => x.Nombre.localeCompare(y.Nombre));

  datos.map((docu)=>{

    var cuerpo = doc.createElement(`div`);
  
  
        var nombre = doc.createElement(`p`);
  
        nombre.innerHTML = `Nombre: ${docu.Nombre}`;
  
  
        var desc = doc.createElement(`p`);
  
        desc.innerHTML = `Descripción: ${docu.Desc}`;
  
  
        var precio = doc.createElement(`p`);
  
        precio.innerHTML = `Precio: ${docu.Precio}`;
  
  
        var peso = doc.createElement(`p`);
  
        peso.innerHTML = `Peso: ${docu.Peso}`;
  
  
        var imagen = doc.createElement(`img`);
  
        imagen.setAttribute(`src`, docu.Imagen);
  
  
        cuerpo.appendChild(nombre);

        cuerpo.appendChild(desc);

        cuerpo.appendChild(precio);

        cuerpo.appendChild(peso);

        cuerpo.appendChild(imagen);


        ubi.appendChild(cuerpo);
  });
}

//Con la lista y según el orden con el precio, da formato y lo imprime en la ubicación seleccionada.
export function ordenarDatosPorPrecio(lista, idUbi) {
  
  var datos = [];

  var doc = window.document;

  var ubi = doc.getElementById(idUbi);

  ubi.innerHTML = ``;

  lista.docs.map((docu, id) => {

    datos[id] = {

      Nombre: docu.data().Nombre,
      Desc: docu.data().Descripcion,
      Precio: docu.data().Precio,
      Peso: docu.data().Peso,
      Imagen: docu.data().Imagen,

    }
  });

  datos.sort((x, y) => x.Precio - y.Precio);

  datos.map((docu)=>{

    var cuerpo = doc.createElement(`div`);
  
  
        var nombre = doc.createElement(`p`);
  
        nombre.innerHTML = `Nombre: ${docu.Nombre}`;
  
  
        var desc = doc.createElement(`p`);
  
        desc.innerHTML = `Descripción: ${docu.Desc}`;
  
  
        var precio = doc.createElement(`p`);
  
        precio.innerHTML = `Precio: ${docu.Precio}`;
  
  
        var peso = doc.createElement(`p`);
  
        peso.innerHTML = `Peso: ${docu.Peso}`;
  
  
        var imagen = doc.createElement(`img`);
  
        imagen.setAttribute(`src`, docu.Imagen);
  
  
        cuerpo.appendChild(nombre);

        cuerpo.appendChild(desc);

        cuerpo.appendChild(precio);

        cuerpo.appendChild(peso);

        cuerpo.appendChild(imagen);


        ubi.appendChild(cuerpo);
  });

}

//Con la lista y según el orden con el peso, da formato y lo imprime en la ubicación seleccionada.
export function ordenarDatosPorPeso(lista, idUbi) {
  
  var datos = [];

  var doc = window.document;

  var ubi = doc.getElementById(idUbi);

  ubi.innerHTML = ``;

  lista.docs.map((docu, id) => {

    datos[id] = {

      Nombre: docu.data().Nombre,
      Desc: docu.data().Descripcion,
      Precio: docu.data().Precio,
      Peso: docu.data().Peso,
      Imagen: docu.data().Imagen,

    }
  });

  datos.sort((x, y) => x.Peso - y.Peso);

  datos.map((docu)=>{

    var cuerpo = doc.createElement(`div`);
  
  
        var nombre = doc.createElement(`p`);
  
        nombre.innerHTML = `Nombre: ${docu.Nombre}`;
  
  
        var desc = doc.createElement(`p`);
  
        desc.innerHTML = `Descripción: ${docu.Desc}`;
  
  
        var precio = doc.createElement(`p`);
  
        precio.innerHTML = `Precio: ${docu.Precio}`;
  
  
        var peso = doc.createElement(`p`);
  
        peso.innerHTML = `Peso: ${docu.Peso}`;
  
  
        var imagen = doc.createElement(`img`);
  
        imagen.setAttribute(`src`, docu.Imagen);
  
  
        cuerpo.appendChild(nombre);

        cuerpo.appendChild(desc);

        cuerpo.appendChild(precio);

        cuerpo.appendChild(peso);

        cuerpo.appendChild(imagen);


        ubi.appendChild(cuerpo);
  });
}