"use strict";




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