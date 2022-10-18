"use strict";


var doc = window.document;




function clickeado(dato) {

    
    dato.id = `desaparecido`;


}


const reaparecer = () => {

    //var cont = doc.getElementById(`desaparecido`);

    
    //cont.id = `nada`;

    var cont = doc.getElementsByTagName(`p`);

    for (let i = 0; i < cont.length; i++) {
        
        if(cont[i].i == `desaparecido`){

            cont[i].i = `nada`;


        }


        
    }
    
    
    
    


}

function eliminar(dato){

    dato.id = `eliminado`;

}