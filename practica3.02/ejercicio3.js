"use strict";


var doc = window.document;



//Cambia de id del dato a desaparecido.
function clickeado(dato) {

    
    dato.id = `desaparecido`;


}

//Cambia la id del elemento que ha desaparecido (dato: parece que el onmouseout es muy agresivo, y da igual que le des click, que de forma inmediata te va a cambiar a eliminado, no he encontrado solución para eso).
const reaparecer = () => {

    
   var cont = doc.getElementsByTagName(`p`);

    for (let i = 0; i < cont.length; i++) {
        
        if(cont[i].id == `desaparecido`){

            cont[i].id = `nada`;


        }


        
    }
    
    
    
    


}
//Cambia de id del elemento a eliminado.
function eliminar(dato){

    dato.id = `eliminado`;

}