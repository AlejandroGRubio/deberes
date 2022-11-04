"use strict";


var doc = window.document;


//Genera un número aleatorio, teniendo un mínimo y un máximo.
export function generarNumRandom(min, max) {
    
    var valor = Math.floor(Math.random() * max);


    while (valor < min) {
        valor = Math.floor(Math.random() * max);
    }

    return valor;




}

//Crea y añade inputs checkbox, con un name y el número de checkbox que se quiere añadir.
export function generarCheckbox(datoName, numValueMin, numValueMax, veces = 1) {
    
    for (let i = 0; i < veces; i++) {
        

        var checkbox = doc.createElement(`input`);
        checkbox.setAttribute(`type`, `checkbox`);
        checkbox.setAttribute(`name`, datoName);
        checkbox.setAttribute(`value`, generarNumRandom(numValueMin, numValueMax));
        doc.body.appendChild(checkbox);


        
    }
    




}

//Crea e inserta un boton con una id y el texto de su interior.
export function generarBoton(nom, nomId) {
    
    var boton = doc.createElement(`button`);
    boton.innerHTML = nom;
    boton.setAttribute(`id`, nomId);
    doc.body.appendChild(boton);

}


//A traves del name busca y marca los checked con un value par.
export function marcarParesCheckbox(nameIdent){

    var cont = doc.getElementsByTagName(`input`);

    for (let i = 0; i < cont.length; i++) {
        if (cont[i].name == nameIdent && (cont[i].value%2) == 0) {
            
            cont[i].setAttribute(`checked`, `true`);

        }
        
    }

}

//Desmarca todos los checkbox segun su name.
export function desmarcarTodosCheckbox(nameIdent) {
    
    var cont = doc.getElementsByTagName(`input`);

    for (let i = 0; i < cont.length; i++) {
        if (cont[i].name == nameIdent) {
            
            cont[i].removeAttribute(`checked`);

        }
        
    }
}

//Comprueba el contenido indicando si es true o false.
export function comprobarFormularioById(sectId) {
    

    var cont = doc.getElementById(sectId);


    if (cont.value == ``) {
        return false;
    }
    else{
        return true;
    }



}

//Inserta donde se le indique un parrafo, con un texto.
export function generarTextoError(texto, nomClase, ubiId) {
    

    var cont = doc.createElement(`p`);

    cont.innerHTML = texto;
    cont.setAttribute(`class`, nomClase);

    doc.getElementById(ubiId).appendChild(cont);


}

//Elimina el texto de error anterior.
export function quitarTextoError(nomClase, cambioClase){

    var cont = doc.getElementsByClassName(nomClase);
    console.log(cont.length);
    if (cont.length > 0) {
        while (cont.length > 0) {
            cont[0].remove();
        }
    }


}

//Genera una etiqueta, con un texto y una clase.
export function generarEtiquetaConClase(etiqueta, texto, nomClase) {
    
    var cont = doc.createElement(etiqueta);
    cont.innerHTML = texto;
    cont.setAttribute(`class`, nomClase);


    return cont;


}
//Inserta una etiqueta.
export function insertarEtiquetaById(etiqueta, texto, nomClase, ubiId) {
    
    var cont = doc.getElementById(ubiId);

    cont.appendChild(generarEtiquetaConClase(etiqueta, texto, nomClase));




}
